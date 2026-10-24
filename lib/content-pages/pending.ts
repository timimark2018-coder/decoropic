import type { ContentBlock, ContentSection } from "./getContentPage";
import { hasPlaceholder } from "./getContentPage";

// ─────────────────────────────────────────────────────────────────────────────
// 待确认内容的总开关
//
// 内容包里有三类内容还没有真实数值:
//   1. 价格区间表的「Price range」列        → [KEVIN TO CONFIRM]
//   2. 港口表里个别航程时间(Takoradi 等)    → [KEVIN TO CONFIRM]
//   3. 「Recent project / Project reference」案例块 → [CASE: ...]
//   4. 依赖上述数值的 FAQ 条目(起订量、账期、交期)
//
// 在 Kevin 给出真实数值之前，这些一律不渲染 —— 页面上不能出现任何方括号占位文字。
// 补完数值后:把对应 content/*.md 里的 [KEVIN TO CONFIRM] / [CASE: ...] 换成真实内容
// 即可，占位符一消失，这里的过滤自然就放行了，不需要改这个开关。
//
// 只有在「想先把带占位符的草稿显示出来校对」时才临时置为 true，不要带着 true 上线。
// ─────────────────────────────────────────────────────────────────────────────
export const SHOW_PENDING_FIGURES = false;

/** 表格里哪些列整列都是占位符 —— 这种列直接不渲染(例如价格区间列)。 */
function placeholderColumns(headers: string[], rows: string[][]) {
  const cols = new Set<number>();
  headers.forEach((_, i) => {
    const values = rows.map((r) => r[i] ?? "");
    if (values.length && values.every((v) => hasPlaceholder(v))) {
      cols.add(i);
    }
  });
  return cols;
}

function filterBlock(block: ContentBlock): ContentBlock | null {
  if (SHOW_PENDING_FIGURES) return block;

  switch (block.kind) {
    case "paragraph":
      return hasPlaceholder(block.text) ? null : block;

    case "bullets":
    case "steps": {
      const items = block.items.filter((i) => !hasPlaceholder(i));
      return items.length ? { ...block, items } : null;
    }

    case "faq": {
      const items = block.items.filter(
        (i) => !hasPlaceholder(i.question) && !hasPlaceholder(i.answer)
      );
      return items.length ? { kind: "faq", items } : null;
    }

    case "table": {
      // 整列占位(价格列)→ 去掉该列;个别单元格占位(某个港口的航程)→ 去掉该行。
      const drop = placeholderColumns(block.headers, block.rows);
      const headers = block.headers.filter((_, i) => !drop.has(i));
      const rows = block.rows
        .map((r) => r.filter((_, i) => !drop.has(i)))
        .filter((r) => r.every((c) => !hasPlaceholder(c)));
      return rows.length && headers.length ? { kind: "table", headers, rows } : null;
    }

    default:
      return block;
  }
}

/** 过滤整页区块;区块被清空的小节整节不渲染(例如只剩标题的案例块)。 */
export function filterSections(sections: ContentSection[]): ContentSection[] {
  return sections
    .map((s) => ({
      heading: s.heading,
      blocks: s.blocks.map(filterBlock).filter((b): b is ContentBlock => b !== null)
    }))
    .filter((s) => s.blocks.length > 0);
}

/** 统计被隐藏的区块数,用于自检脚本与上线核对。 */
export function countHidden(sections: ContentSection[]) {
  let hidden = 0;
  for (const s of sections) {
    for (const b of s.blocks) {
      if (b.kind === "faq") {
        hidden += b.items.filter(
          (i) => hasPlaceholder(i.question) || hasPlaceholder(i.answer)
        ).length;
      } else if (b.kind === "table") {
        hidden += placeholderColumns(b.headers, b.rows).size;
        hidden += b.rows.filter((r) => r.some((c) => hasPlaceholder(c))).length;
      } else if (b.kind === "paragraph") {
        if (hasPlaceholder(b.text)) hidden += 1;
      } else if (b.kind === "bullets" || b.kind === "steps") {
        hidden += b.items.filter((i) => hasPlaceholder(i)).length;
      }
    }
  }
  return hidden;
}

import fs from "node:fs";
import path from "node:path";

// 中文版开关。
//
// /zh/* 下的页面多数正文还是英文，收录它们只会制造重复内容。所以默认关闭:
// 没有明确标记 zhTranslated: true 的页面，/zh 版带 noindex、不进 sitemap，
// 英文版的 hreflang 也不指向它。翻译完一页，把标记打开，这三件事一起生效。
//
// 标记写在哪:
//   有内容文件的页面   front-matter 加一行 zhTranslated: true(categories 是 JSON 字段)
//   手写的静态页       把路径加进下面的 ZH_TRANSLATED_STATIC_ROUTES
const ZH_TRANSLATED_STATIC_ROUTES: string[] = [];

// 路由 → 内容文件。slug 与文件名一致(guides / blog / projects 都已核对过)。
const CONTENT_FILES: Record<string, string> = {
  guides: ".md",
  blog: ".mdx",
  projects: ".md",
  solutions: ".md",
  markets: ".md"
};

function contentFileHasFlag(group: string, slug: string): boolean {
  const ext = group === "products" ? ".json" : CONTENT_FILES[group];
  if (!ext) return false;
  const dir = group === "products" ? "categories" : group;
  const file = path.join(process.cwd(), "content", dir, `${slug}${ext}`);
  if (!fs.existsSync(file)) return false;
  const raw = fs.readFileSync(file, "utf-8");

  if (ext === ".json") return JSON.parse(raw).zhTranslated === true;
  const frontMatter = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  return /^zhTranslated:\s*true\s*$/m.test(frontMatter);
}

/** routePath 一律是英文版路径(不带 /zh)，首页是 "/" 或 ""。 */
export function isZhTranslated(routePath: string): boolean {
  const normalized = routePath.replace(/\/$/, "") || "/";
  if (ZH_TRANSLATED_STATIC_ROUTES.includes(normalized)) return true;
  const m = normalized.match(/^\/([a-z-]+)\/([a-z0-9-]+)$/);
  return m ? contentFileHasFlag(m[1], m[2]) : false;
}

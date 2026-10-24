import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { localizePath } from "@/lib/utils/site-links";

// 内容包正文里只用到两种行内语法:**粗体** 和 [文字](/路径)。
// 这里只解析这两种 —— 不引入完整 markdown 渲染器,避免为两个语法背一个依赖，
// 也避免 dangerouslySetInnerHTML。
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

type Props = {
  text: string;
  locale: Locale;
};

export function RichText({ text, locale }: Props) {
  const nodes: ReactNode[] = [];
  let key = 0;

  for (const part of text.split(INLINE)) {
    if (!part) continue;

    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      nodes.push(
        <strong key={key++} className="font-semibold text-brand-pine-dark">
          {bold[1]}
        </strong>
      );
      continue;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      const external = href.startsWith("http");
      nodes.push(
        external ? (
          <a
            key={key++}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="text-brand-pine underline decoration-brand-gold/60 underline-offset-2 transition-colors hover:text-brand-gold"
          >
            {link[1]}
          </a>
        ) : (
          <Link
            key={key++}
            href={localizePath(href, locale)}
            className="text-brand-pine underline decoration-brand-gold/60 underline-offset-2 transition-colors hover:text-brand-gold"
          >
            {link[1]}
          </Link>
        )
      );
      continue;
    }

    nodes.push(part);
  }

  return <>{nodes}</>;
}

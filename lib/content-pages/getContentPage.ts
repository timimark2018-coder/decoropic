import fs from "node:fs";
import path from "node:path";

// 第 1 周起的内容包以 markdown 入库(content/solutions/*.md、content/markets/*.md)，
// 每页一个文件、带 front-matter。这里把它解析成结构化区块，交给 ContentPage 渲染。

export type ContentGroup = "solutions" | "markets";

export type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "faq"; items: Array<{ question: string; answer: string }> };

export type ContentSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type ContentPage = {
  group: ContentGroup;
  slug: string;
  url: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  intro: string;
  sections: ContentSection[];
  internalLinks: Array<{ href: string; label: string }>;
  /** 源文件给的配图建议:filename + 建议 alt。实际用图在 page 层挑选。 */
  imageSuggestions: Array<{ filename: string; alt: string }>;
  /** 挂在「Recent project / Project reference」小节下的已交付项目卡(取自 content/project-cards.ts)。 */
  projectCards: string[];
};

function contentDir(group: ContentGroup) {
  return path.join(process.cwd(), "content", group);
}

function parseFrontMatter(raw: string) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) {
    throw new Error("内容文件缺少 front-matter");
  }
  const fm: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const km = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (km) {
      fm[km[1]] = km[2];
    }
  }
  return { fm, body: m[2] };
}

function parseTable(lines: string[]) {
  const cells = (line: string) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
  const headers = cells(lines[0]);
  // 第二行是 |---|---| 分隔行
  const rows = lines.slice(2).map(cells);
  return { kind: "table" as const, headers, rows };
}

function parseFaq(lines: string[]) {
  const items: Array<{ question: string; answer: string }> = [];
  let question: string | null = null;
  let answer: string[] = [];

  const flush = () => {
    if (question) {
      items.push({ question, answer: answer.join(" ").trim() });
    }
    question = null;
    answer = [];
  };

  for (const line of lines) {
    const q = line.match(/^\*\*(.+?)\*\*$/);
    if (q) {
      flush();
      question = q[1];
    } else if (line.trim()) {
      answer.push(line.trim());
    }
  }
  flush();

  return { kind: "faq" as const, items };
}

function parseBlocks(chunk: string, heading: string): ContentBlock[] {
  const lines = chunk.split("\n");
  const blocks: ContentBlock[] = [];
  let buffer: string[] = [];
  let mode: "none" | "bullets" | "steps" | "table" | "faq" | "paragraph" = "none";

  const flush = () => {
    if (!buffer.length) {
      mode = "none";
      return;
    }
    if (mode === "bullets") {
      blocks.push({ kind: "bullets", items: buffer.map((l) => l.replace(/^- /, "").trim()) });
    } else if (mode === "steps") {
      blocks.push({ kind: "steps", items: buffer.map((l) => l.replace(/^\d+\.\s*/, "").trim()) });
    } else if (mode === "table") {
      blocks.push(parseTable(buffer));
    } else if (mode === "faq") {
      blocks.push(parseFaq(buffer));
    } else if (mode === "paragraph") {
      blocks.push({ kind: "paragraph", text: buffer.join(" ").trim() });
    }
    buffer = [];
    mode = "none";
  };

  const isFaqSection = /^FAQ$/i.test(heading);

  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      // FAQ 区块里空行只是问答之间的间隔，不能打断
      if (mode !== "faq") flush();
      continue;
    }
    if (t.startsWith("|")) {
      if (mode !== "table") flush();
      mode = "table";
      buffer.push(t);
    } else if (/^- /.test(t)) {
      if (mode !== "bullets") flush();
      mode = "bullets";
      buffer.push(t);
    } else if (/^\d+\.\s/.test(t)) {
      if (mode !== "steps") flush();
      mode = "steps";
      buffer.push(t);
    } else if (isFaqSection) {
      if (mode !== "faq") flush();
      mode = "faq";
      buffer.push(t);
    } else {
      if (mode !== "paragraph") flush();
      mode = "paragraph";
      buffer.push(t);
    }
  }
  flush();

  return blocks;
}

function parseTrailingMeta(body: string) {
  const internalLinks: ContentPage["internalLinks"] = [];
  const imageSuggestions: ContentPage["imageSuggestions"] = [];

  const linkLine = body.match(/^\*\*Internal links:\*\*\s*(.+)$/m);
  if (linkLine) {
    // 两种写法都出现过:纯路径列表，或 markdown 链接
    const md = [...linkLine[1].matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
    if (md.length) {
      for (const m of md) internalLinks.push({ label: m[1], href: m[2] });
    } else {
      for (const p of linkLine[1].split(/[,·]/)) {
        const href = p.trim();
        if (href.startsWith("/")) internalLinks.push({ href, label: href });
      }
    }
  }

  const imgSection = body.match(/^\*\*Image suggestions:\*\*\s*\n([\s\S]*?)(?:\n\n|$)/m);
  if (imgSection) {
    for (const line of imgSection[1].split("\n")) {
      const m = line.match(/^-\s*([\w.-]+)\s*—\s*(.+)$/);
      if (m) imageSuggestions.push({ filename: m[1], alt: m[2].trim() });
    }
  }

  return { internalLinks, imageSuggestions };
}

export function getContentPage(group: ContentGroup, slug: string): ContentPage | null {
  const file = path.join(contentDir(group), `${slug}.md`);
  if (!fs.existsSync(file)) {
    return null;
  }

  const { fm, body } = parseFrontMatter(fs.readFileSync(file, "utf-8"));
  const { internalLinks, imageSuggestions } = parseTrailingMeta(body);

  // 去掉尾部的 Internal links / Image suggestions,它们是元数据不是正文
  const main = body
    .replace(/^\*\*Internal links:\*\*[\s\S]*$/m, "")
    .trimEnd();

  const parts = main.split(/^## /m);
  const intro = parts[0].trim();

  const sections: ContentSection[] = parts.slice(1).map((part) => {
    const nl = part.indexOf("\n");
    const heading = (nl === -1 ? part : part.slice(0, nl)).trim();
    const chunk = nl === -1 ? "" : part.slice(nl + 1);
    return { heading, blocks: parseBlocks(chunk, heading) };
  });

  return {
    group,
    slug,
    url: fm.url || `/${group}/${slug}`,
    title: fm.title || "",
    description: fm.description || "",
    h1: fm.h1 || "",
    primaryKeyword: fm.primary_keyword || "",
    intro,
    sections,
    internalLinks,
    imageSuggestions,
    projectCards: (fm.project_cards || "")
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean)
  };
}

export function getContentSlugs(group: ContentGroup): string[] {
  const dir = contentDir(group);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllContentPages(group: ContentGroup): ContentPage[] {
  return getContentSlugs(group)
    .map((slug) => getContentPage(group, slug))
    .filter((p): p is ContentPage => p !== null);
}

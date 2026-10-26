import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type GuideFrontmatter = {
  title: string;
  description: string;
  slug: string;
  targetKeyword?: string;
  /** 指南分组。第 2 周起的加纳系列是 "Ghana guides"，早先的全球系列留空。 */
  category?: string;
  /** 最后一次正文改动的日期(YYYY-MM-DD)，由 scripts/update-lastmod.mjs 维护。 */
  lastmod?: string;
  order: number;
  readingTime?: string;
};

export type Guide = {
  frontmatter: GuideFrontmatter;
  content: string;
};

const GUIDES_DIR = path.join(process.cwd(), "content/guides");

export function getAllGuides(): GuideFrontmatter[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      const fm = data as GuideFrontmatter;
      if (!fm.readingTime) fm.readingTime = readingTime(content).text;
      return fm;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getGuideBySlug(slug: string): Guide | null {
  const file = path.join(GUIDES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as GuideFrontmatter;
  if (!fm.readingTime) fm.readingTime = readingTime(content).text;
  return { frontmatter: fm, content };
}

export function getAllGuideSlugs(): string[] {
  return getAllGuides().map((g) => g.slug);
}

/**
 * 从指南正文里取出 FAQ 问答,用来生成 FAQPage schema。
 * 内容包的写法固定是 `## FAQ` 下面若干组 `**问题**` + 下一行答案,
 * 这里只认这一种,避免把正文里的粗体误当成问题。
 */
export function getGuideFaq(content: string): Array<{ question: string; answer: string }> {
  const section = content.match(/^##\s+FAQ\s*$([\s\S]*?)(?=^##\s|\Z)/m);
  if (!section) return [];

  const items: Array<{ question: string; answer: string }> = [];
  for (const block of section[1].trim().split(/\n\s*\n/)) {
    const m = block.match(/^\*\*(.+?)\*\*\s*\n([\s\S]+)$/);
    if (m) {
      items.push({ question: m[1].trim(), answer: m[2].replace(/\s+/g, " ").trim() });
    }
  }
  return items;
}

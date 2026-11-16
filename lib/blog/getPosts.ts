import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { placeholderCard } from "@/lib/placeholder-card";

export type PostFrontmatter = {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  author: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  readingTime?: string;
  ogImage?: string;
  canonical?: string;
  /** 页面 H1;缺省用 title */
  h1?: string;
  /** JSON-LD 类型，缺省 Article */
  schemaType?: "Article" | "BlogPosting";
  /** 置顶到 /blog 列表第一位 */
  pinned?: boolean;
  /** 封面图(public 下的路径)，显示在文章页首与列表卡片上 */
  cover?: string;
  coverAlt?: string;
  coverCaption?: string;
  /** 正文最后一次修改的日期;JSON-LD 的 dateModified 与 sitemap 的 lastmod 用它，缺省 publishDate */
  dateModified?: string;
  /** 「Key takeaways」要点框，正文里用 <KeyTakeaways /> 放置;每条必须是正文里已有的事实 */
  keyTakeaways?: string[];
};

export type Post = {
  frontmatter: PostFrontmatter;
  content: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// 没有封面的博文用占位卡片(见 lib/placeholder-card.ts)，alt 写主词
function withCover(fm: PostFrontmatter): PostFrontmatter {
  if (fm.cover) return fm;
  const card = placeholderCard(`/blog/${fm.slug}`, fm.focusKeyword ?? fm.title);
  return card ? { ...fm, cover: card.src, coverAlt: card.alt } : fm;
}

export function getAllPosts(): PostFrontmatter[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;
      if (!fm.readingTime) {
        fm.readingTime = readingTime(content).text;
      }
      return withCover(fm);
    })
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: withCover(data as PostFrontmatter), content };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Extract FAQ Q&A pairs from the "Frequently asked questions" section of a
 * markdown document. Looks for a ## section with that heading, then parses
 * ### question / body paragraph pairs.
 */
export function extractFaqs(content: string): FaqItem[] {
  const faqSectionMatch = content.match(
    /##\s+Frequently asked questions\s*\n([\s\S]*?)(?:\n##\s|$)/i
  );
  if (!faqSectionMatch) return [];

  const faqSection = faqSectionMatch[1];
  const items: FaqItem[] = [];
  const questionRegex = /###\s+(.+?)\n\n([\s\S]+?)(?=\n###\s|\s*$)/g;

  let match;
  while ((match = questionRegex.exec(faqSection)) !== null) {
    const question = match[1].trim();
    // Strip markdown formatting and collapse whitespace for JSON-LD plain text
    const answer = match[2]
      .trim()
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\n+/g, " ")
      .trim();
    items.push({ question, answer });
  }

  return items;
}

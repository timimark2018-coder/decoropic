import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

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
      return fm;
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
  return { frontmatter: data as PostFrontmatter, content };
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

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type GuideFrontmatter = {
  title: string;
  description: string;
  slug: string;
  targetKeyword?: string;
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

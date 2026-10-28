import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 已交付案例页(/projects/<slug>)的内容源:content/projects/*.md。
// 第 3 周内容包起入库,front-matter 带规格(档位/面积/工期)、图片与相关链接，正文是 markdown。

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectFrontmatter = {
  title: string;
  description: string;
  h1: string;
  slug: string;
  primaryKeyword?: string;
  projectType: string;
  /** Functional / Mid-Range / Premium / Luxury —— Luxury 按原文保留 */
  tier: string;
  /** 面积未确认的案例不写这个字段 */
  area?: string;
  duration: string;
  order: number;
  /** 只收录 public/ 下真实存在的图;缺的不放占位图 */
  images: ProjectImage[];
  related: string[];
  /** 最后一次正文改动的日期(YYYY-MM-DD)，由 scripts/update-lastmod.mjs 维护。 */
  lastmod?: string;
  /** 缺省 = 住宅;hotel 案例不进 /projects 的住宅网格，放在酒店板块 */
  sector?: "residential" | "hotel";
  /** 有值 = 未交付的设计方案(例如 "Design proposal · renovation 2026")，页首不写 Delivered */
  status?: string;
  /** 卡片标签，缺省用 projectMeta() */
  cardLabel?: string;
  /** 页首提示框(设计方案的声明)，原样显示在 H1 下方 */
  notice?: string;
  location?: string;
  /** 正文里已经插了图:页首只放第一张，不再重复整组图库 */
  imagesInBody?: boolean;
};

export type Project = {
  frontmatter: ProjectFrontmatter;
  content: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

function read(file: string): Project {
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));
  const fm = data as ProjectFrontmatter;
  fm.images = Array.isArray(fm.images) ? fm.images : [];
  fm.related = Array.isArray(fm.related) ? fm.related : [];
  return { frontmatter: fm, content };
}

export function getAllProjects(): ProjectFrontmatter[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => read(path.join(PROJECTS_DIR, f)).frontmatter)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | null {
  const file = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return read(file);
}

/** 卡片上的规格行:档位 · 面积 · 工期(面积缺失时跳过) */
export function projectMeta(p: ProjectFrontmatter): string {
  return [p.tier, p.area, p.duration].filter(Boolean).join(" · ");
}

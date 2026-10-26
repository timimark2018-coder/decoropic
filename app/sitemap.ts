import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";
import { getAllPosts } from "@/lib/blog/getPosts";
import { getAllGuides } from "@/lib/guides/getGuides";
import { getContentPage } from "@/lib/content-pages/getContentPage";
import { getAllProjects } from "@/lib/projects/getProjects";

// 每个页面登记两条:英文版和 /zh 版，两条都带 hreflang 互指(en / zh / x-default)。
// 中文版过去没有自己的 URL，所以完全不被收录 —— 这里是让它进索引的入口。
// lastmod 只在能查证时才写。
//
// 来源是内容文件 front-matter 的 lastmod 字段(值 = 该文件正文最后一次改动的日期，
// 由 scripts/update-lastmod.mjs 回填、提交前钩子自动更新)。
// 不读文件系统时间:git 不保存 mtime，Vercel 检出后所有文件都是部署时刻 —— 上一版
// 这么做，线上 sitemap 便全是同一个时间。
// 手写的静态页没有可查证的日期，不输出 lastmod —— 省略好过填一个假的。
function localizedPair(
  baseUrl: string,
  routePath: string,
  lastModified: Date | undefined,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  const enUrl = `${baseUrl}${routePath}`;
  const zhUrl = `${baseUrl}/zh${routePath}`;
  const languages = { en: enUrl, zh: zhUrl, "x-default": enUrl };
  const stamp = lastModified ? { lastModified } : {};

  return [
    { url: enUrl, ...stamp, changeFrequency, priority, alternates: { languages } },
    { url: zhUrl, ...stamp, changeFrequency, priority: Math.max(priority - 0.1, 0.1), alternates: { languages } }
  ];
}

/** front-matter 里的 YYYY-MM-DD → Date;缺失或非法返回 undefined。 */
function toDate(value: unknown): Date | undefined {
  if (value instanceof Date) return value;
  if (typeof value !== "string" || !value) return undefined;
  const d = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

/** 有 markdown 源文件的路由 → 取该文件 front-matter 的 lastmod。 */
function routeLastModified(routePath: string): Date | undefined {
  const m = routePath.match(/^\/(solutions|markets)\/([a-z0-9-]+)$/);
  if (!m) return undefined;
  return toDate(getContentPage(m[1] as "solutions" | "markets", m[2])?.lastmod);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl;

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
    { path: "/solutions/villas", changeFrequency: "monthly", priority: 0.85 },
    { path: "/solutions/hotels", changeFrequency: "monthly", priority: 0.85 },
    { path: "/markets", changeFrequency: "monthly", priority: 0.9 },
    { path: "/markets/ghana", changeFrequency: "monthly", priority: 0.85 },
    { path: "/markets/west-africa", changeFrequency: "monthly", priority: 0.8 },
    { path: "/markets/middle-east", changeFrequency: "monthly", priority: 0.8 },
    { path: "/markets/southeast-asia", changeFrequency: "monthly", priority: 0.8 },
    { path: "/markets/caribbean-latin-america", changeFrequency: "monthly", priority: 0.8 },
    { path: "/solutions/apartments", changeFrequency: "monthly", priority: 0.85 },
    { path: "/solutions/offices", changeFrequency: "monthly", priority: 0.8 },
    { path: "/solutions/restaurants", changeFrequency: "monthly", priority: 0.8 },
    { path: "/solutions/retail", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products", changeFrequency: "weekly", priority: 0.9 },
    { path: "/products/tiles-flooring", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/furniture", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/bathroom-kitchen", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/lights-lighting", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/doors-windows", changeFrequency: "monthly", priority: 0.85 },
    { path: "/source-from-china", changeFrequency: "monthly", priority: 0.85 },
    { path: "/source-from-china/southeast-asia", changeFrequency: "monthly", priority: 0.85 },
    { path: "/source-from-china/hotel-ff-e", changeFrequency: "monthly", priority: 0.85 },
    { path: "/source-from-china/tiles-sanitary", changeFrequency: "monthly", priority: 0.8 },
    { path: "/source-from-china/building-materials", changeFrequency: "monthly", priority: 0.8 },
    { path: "/source-from-china/furniture", changeFrequency: "monthly", priority: 0.7 },
    { path: "/source-from-china/lighting", changeFrequency: "monthly", priority: 0.7 },
    { path: "/guides", changeFrequency: "monthly", priority: 0.7 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/local-services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/estimator", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/lp/villa-renovation-quote", changeFrequency: "monthly", priority: 0.7 },
    { path: "/lp/founder-story", changeFrequency: "monthly", priority: 0.7 }
  ];

  const staticEntries = routes.flatMap(({ path: routePath, changeFrequency, priority }) =>
    localizedPair(baseUrl, routePath, routeLastModified(routePath), changeFrequency, priority)
  );

  // Auto-scan content/blog/*.mdx and add each post
  const posts = getAllPosts();
  const blogEntries = posts.flatMap((post) =>
    localizedPair(baseUrl, `/blog/${post.slug}`, new Date(post.publishDate), "monthly", 0.7)
  );

  // Auto-scan content/guides/*.md and add each guide
  const guides = getAllGuides();
  const guideEntries = guides.flatMap((g) =>
    localizedPair(
      baseUrl,
      `/guides/${g.slug}`,
      toDate(g.lastmod),
      "monthly",
      0.7
    )
  );

  // 已交付案例页(content/projects/*.md)
  const projectEntries = getAllProjects().flatMap((p) =>
    localizedPair(baseUrl, `/projects/${p.slug}`, toDate(p.lastmod), "monthly", 0.75)
  );

  return [...staticEntries, ...blogEntries, ...guideEntries, ...projectEntries];
}

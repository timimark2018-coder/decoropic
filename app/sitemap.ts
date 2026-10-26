import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";
import { getAllPosts } from "@/lib/blog/getPosts";
import { getAllGuides } from "@/lib/guides/getGuides";

// 每个页面登记两条:英文版和 /zh 版，两条都带 hreflang 互指(en / zh / x-default)。
// 中文版过去没有自己的 URL，所以完全不被收录 —— 这里是让它进索引的入口。
// lastmod 只在能查证时才写。
//
// 之前这里对所有静态路由统一用 new Date() —— 等于每次 Google 来抓，全站 110 条
// 都声称「刚刚更新」。Google 对不可信的 lastmod 的处理是直接忽略它，于是本该用来
// 排重抓优先级的信号被我们自己废掉了。
//
// 现在:有源文件的(guides / blog / solutions / markets)取文件修改时间;
// 手写的静态页查证不了，就不写 lastmod —— 省略好过填一个假的。
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

/** 取内容源文件的修改时间;文件不在就返回 undefined(宁可不写 lastmod)。 */
function contentMtime(...segments: string[]): Date | undefined {
  try {
    const file = path.join(process.cwd(), ...segments);
    return fs.statSync(file).mtime;
  } catch {
    return undefined;
  }
}

/** 有 markdown 源文件的路由 → 用该文件的修改时间。 */
function routeLastModified(routePath: string): Date | undefined {
  const solutions = routePath.match(/^\/solutions\/([a-z0-9-]+)$/);
  if (solutions) return contentMtime("content", "solutions", `${solutions[1]}.md`);

  const markets = routePath.match(/^\/markets\/([a-z0-9-]+)$/);
  if (markets) return contentMtime("content", "markets", `${markets[1]}.md`);

  return undefined;
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
      contentMtime("content", "guides", `${g.slug}.md`),
      "monthly",
      0.7
    )
  );

  return [...staticEntries, ...blogEntries, ...guideEntries];
}

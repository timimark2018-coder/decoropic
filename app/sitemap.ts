import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";
import { getAllPosts } from "@/lib/blog/getPosts";
import { getAllGuides } from "@/lib/guides/getGuides";

// 每个页面登记两条:英文版和 /zh 版，两条都带 hreflang 互指(en / zh / x-default)。
// 中文版过去没有自己的 URL，所以完全不被收录 —— 这里是让它进索引的入口。
function localizedPair(
  baseUrl: string,
  path: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  const enUrl = `${baseUrl}${path}`;
  const zhUrl = `${baseUrl}/zh${path}`;
  const languages = { en: enUrl, zh: zhUrl, "x-default": enUrl };

  return [
    { url: enUrl, lastModified, changeFrequency, priority, alternates: { languages } },
    { url: zhUrl, lastModified, changeFrequency, priority: Math.max(priority - 0.1, 0.1), alternates: { languages } }
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl;
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
    { path: "/solutions/villas", changeFrequency: "monthly", priority: 0.85 },
    { path: "/solutions/hotels", changeFrequency: "monthly", priority: 0.85 },
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

  const staticEntries = routes.flatMap(({ path, changeFrequency, priority }) =>
    localizedPair(baseUrl, path, lastModified, changeFrequency, priority)
  );

  // Auto-scan content/blog/*.mdx and add each post
  const posts = getAllPosts();
  const blogEntries = posts.flatMap((post) =>
    localizedPair(baseUrl, `/blog/${post.slug}`, new Date(post.publishDate), "monthly", 0.7)
  );

  // Auto-scan content/guides/*.md and add each guide
  const guides = getAllGuides();
  const guideEntries = guides.flatMap((g) =>
    localizedPair(baseUrl, `/guides/${g.slug}`, lastModified, "monthly", 0.7)
  );

  return [...staticEntries, ...blogEntries, ...guideEntries];
}

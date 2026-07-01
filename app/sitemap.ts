import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";
import { getAllPosts } from "@/lib/blog/getPosts";

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
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/local-services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/lp/villa-renovation-quote", changeFrequency: "monthly", priority: 0.7 },
    { path: "/lp/founder-story", changeFrequency: "monthly", priority: 0.7 }
  ];

  const staticEntries = routes.map(({ path, changeFrequency, priority }) => {
    const url = `${baseUrl}${path}`;
    return {
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "en-GH": url,
          "x-default": url
        }
      }
    };
  });

  // Auto-scan content/blog/*.mdx and add each post
  const posts = getAllPosts();
  const blogEntries = posts.map((post) => {
    const url = `${baseUrl}/blog/${post.slug}`;
    return {
      url,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: 0.7,
      alternates: {
        languages: {
          "en-GH": url,
          "x-default": url
        }
      }
    };
  });

  return [...staticEntries, ...blogEntries];
}

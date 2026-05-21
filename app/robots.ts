import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api",
          "/_next",
          "/*?*utm_*",
          "/*?*fbclid=",
          "/*?*gclid="
        ]
      },
      {
        userAgent: "DotBot",
        disallow: "/"
      },
      {
        userAgent: "MJ12bot",
        disallow: "/"
      }
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  };
}

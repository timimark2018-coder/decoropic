import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"]
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  };
}


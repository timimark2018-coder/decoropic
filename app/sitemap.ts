import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl;
  const staticRoutes = [
    "",
    "/solutions",
    "/projects",
    "/local-services",
    "/about",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  return staticRoutes;
}

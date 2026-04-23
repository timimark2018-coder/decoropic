import type { Locale } from "@/content/types";
import { siteConfig } from "@/lib/utils/constants";

export function websiteSchema(locale: Locale = "en") {
  const description =
    locale === "zh"
      ? "面向加纳项目客户的一站式室内装饰解决方案。"
      : siteConfig.description;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description,
    inLanguage: locale === "zh" ? "zh-CN" : "en"
  };
}

export function organizationSchema(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description:
      locale === "zh"
        ? "Decoropic 为加纳项目提供现场测量、预算导向设计、整合采购与本地落地支持。"
        : "Decoropic provides site measurement, budget-led design, coordinated sourcing and local delivery support for projects in Ghana.",
    email: siteConfig.contactEmail,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
        telephone: siteConfig.contactPhoneDisplay,
        areaServed: "Ghana"
      }
    ],
    sameAs: [siteConfig.productCenterUrl]
  };
}

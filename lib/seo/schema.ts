import type { Locale } from "@/content/types";
import { siteConfig } from "@/lib/utils/constants";

const ORG_LEGAL_NAME = "Foshan Home Style Import and Export Co., Ltd";
const ORG_ALTERNATE_NAMES = [ORG_LEGAL_NAME, "豪斯特", "Foshan Home Style"];
const ORG_TAX_ID = "91440604572379052M";
const ORG_FOUNDING_DATE = "2000";

const ORG_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress:
    "Room 1502, Building 1, Poly Business Center, No. 8 Wenhua South Road, Dongping New Town, Lecong Town, Shunde District",
  addressLocality: "Foshan",
  addressRegion: "Guangdong",
  postalCode: "528000",
  addressCountry: "CN"
};

export function websiteSchema(locale: Locale = "en") {
  const baseUrl = siteConfig.siteUrl;
  const description =
    locale === "zh"
      ? "面向加纳项目客户的一站式室内装饰解决方案。"
      : siteConfig.description;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    description,
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: ["en-GH", "zh-CN"]
  };
}

export function organizationSchema(locale: Locale = "en") {
  const baseUrl = siteConfig.siteUrl;
  const description =
    locale === "zh"
      ? "Decoropic 为加纳项目提供现场测量、预算导向设计、整合采购与本地落地支持。26 年国际建材贸易,深耕加纳 20 年。"
      : "Decoropic is a project-first interior solutions partner for Ghana. With 26 years of international building-materials trade and 20 years on the ground in Accra, we deliver coordinated sourcing, design, and on-site installation for developers, hotels, designers and high-net-worth clients.";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    alternateName: ORG_ALTERNATE_NAMES,
    legalName: ORG_LEGAL_NAME,
    taxID: ORG_TAX_ID,
    foundingDate: ORG_FOUNDING_DATE,
    url: baseUrl,
    description,
    email: siteConfig.contactEmail,
    address: ORG_ADDRESS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
        telephone: "+233531519347",
        availableLanguage: ["English", "Chinese"],
        areaServed: ["GH", "CN"]
      }
    ],
    areaServed: { "@type": "Country", name: "Ghana" },
    knowsLanguage: ["en", "zh", "en-GH"],
    sameAs: [siteConfig.productCenterUrl]
  };
}

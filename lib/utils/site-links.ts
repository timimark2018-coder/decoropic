import type { Locale } from "@/content/types";
import { siteConfig } from "@/lib/utils/constants";

const defaultWhatsAppMessage: Record<Locale, string> = {
  en: "Hello Decoropic, I would like to discuss an interior project in Ghana.",
  zh: "你好 Decoropic，我想咨询一个加纳室内项目。"
};

// 站内路径加语言前缀。语言现在由 URL 决定(/zh/...)，所以中文页的内链必须
// 留在中文簇里 —— 否则点任何一个导航都会掉回英文，中文页也就成了没有内链的孤儿页。
export function localizePath(href: string, locale: Locale) {
  if (locale !== "zh" || !href.startsWith("/")) {
    return href;
  }

  if (href === "/zh" || href.startsWith("/zh/")) {
    return href;
  }

  // 纯锚点或查询串原样保留
  if (href.startsWith("/#") || href.startsWith("/?")) {
    return `/zh${href.slice(1)}`;
  }

  return href === "/" ? "/zh" : `/zh${href}`;
}

export function buildWhatsAppHref(message?: string, locale: Locale = "en") {
  if (!siteConfig.whatsappNumber) {
    return "/contact";
  }

  const resolvedMessage = message || defaultWhatsAppMessage[locale];

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(resolvedMessage)}`;
}

export function resolveSiteHref(href: string, locale: Locale = "en") {
  if (href === "PRODUCT_CENTER") {
    return localizePath("/products", locale);
  }

  if (href === "WHATSAPP") {
    return buildWhatsAppHref(undefined, locale);
  }

  if (href === "ESTIMATOR") {
    return localizePath("/estimator", locale);
  }

  return localizePath(href, locale);
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

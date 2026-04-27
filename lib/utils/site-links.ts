import type { Locale } from "@/content/types";
import { siteConfig } from "@/lib/utils/constants";

const defaultWhatsAppMessage: Record<Locale, string> = {
  en: "Hello Decoropic, I would like to discuss an interior project in Ghana.",
  zh: "你好 Decoropic，我想咨询一个加纳室内项目。"
};

function appendLocaleQuery(url: string, locale: Locale) {
  if (locale !== "zh") {
    return url;
  }

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("lang", "zh");
    return parsed.toString();
  } catch {
    return url;
  }
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
    return "/products";
  }

  if (href === "WHATSAPP") {
    return buildWhatsAppHref(undefined, locale);
  }

  if (href === "ESTIMATOR") {
    return "/#estimator";
  }

  return href;
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

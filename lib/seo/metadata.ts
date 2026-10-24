import type { Metadata } from "next";
import type { Locale, LocalizedText } from "@/content/types";
import { siteConfig } from "@/lib/utils/constants";

type MetadataInput = {
  title?: string | LocalizedText;
  description: string | LocalizedText;
  path?: string;
  locale?: Locale;
  titleTemplate?: string;
};

function pickLocalizedCopy(value: string | LocalizedText, locale: Locale) {
  return typeof value === "string" ? value : value[locale] || value.en;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  locale = "en",
  titleTemplate
}: MetadataInput): Metadata {
  const baseUrl = siteConfig.siteUrl;
  // path 一律是英文版路径；中文版是它前面加 /zh。
  // 两个地址互指 hreflang，x-default 指英文版。
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const enUrl = `${baseUrl}${normalizedPath}`;
  const zhUrl = `${baseUrl}/zh${normalizedPath}`;
  const url = locale === "zh" ? zhUrl : enUrl;
  const ogImageUrl = `${baseUrl}/og/default.jpg`;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  // Meta Business Suite → Brand Safety → Domains → "Meta-tag verification"
  const facebookDomainVerification = process.env.FACEBOOK_DOMAIN_VERIFICATION;
  const resolvedDescription = pickLocalizedCopy(description, locale);
  const resolvedTitle = title ? pickLocalizedCopy(title, locale) : undefined;
  const openGraphLocale = locale === "zh" ? "zh_CN" : "en_US";
  const alternateLocale = locale === "zh" ? "en_US" : "zh_CN";

  // 品牌后缀「放得下才加」。
  //
  // 过去用 titleTemplate "%s | Decoropic" 无条件拼接，后缀固定吃掉 12 个字符，
  // 关键词密集的页面因此普遍超过 60，在搜索结果里被截断。现在由这里统一判断:
  // 加上后缀仍 ≤60 就加，否则只保留页面标题本身(品牌词 Google 多半会自己补)。
  const BRAND_SUFFIX = ` | ${siteConfig.name}`;
  const TITLE_LIMIT = 60;

  function withBrand(value: string) {
    if (value.includes(siteConfig.name)) {
      return value;
    }
    return value.length + BRAND_SUFFIX.length <= TITLE_LIMIT ? `${value}${BRAND_SUFFIX}` : value;
  }

  let metadataTitle: Metadata["title"] | undefined;
  if (titleTemplate) {
    // 根 layout 传 titleTemplate 时，子页若没有自己的 title 就用这个默认值
    metadataTitle = { absolute: withBrand(resolvedTitle ?? siteConfig.name) };
  } else if (resolvedTitle) {
    metadataTitle = { absolute: withBrand(resolvedTitle) };
  }

  return {
    ...(metadataTitle !== undefined ? { title: metadataTitle } : {}),
    description: resolvedDescription,
    metadataBase: new URL(baseUrl),
    verification:
      googleVerification || facebookDomainVerification
        ? {
            ...(googleVerification ? { google: googleVerification } : {}),
            ...(facebookDomainVerification
              ? { other: { "facebook-domain-verification": facebookDomainVerification } }
              : {})
          }
        : undefined,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        zh: zhUrl,
        "x-default": enUrl
      }
    },
    openGraph: {
      ...(resolvedTitle ? { title: resolvedTitle } : {}),
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: openGraphLocale,
      alternateLocale: [alternateLocale],
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Decoropic — one-stop building materials and interior sourcing from China",
          type: "image/jpeg"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      ...(resolvedTitle ? { title: resolvedTitle } : {}),
      description: resolvedDescription,
      images: [ogImageUrl]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

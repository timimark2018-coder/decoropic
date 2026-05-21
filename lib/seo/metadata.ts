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
  const url = new URL(path, baseUrl).toString();
  const ogImageUrl = `${baseUrl}/og/default.jpg`;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const resolvedDescription = pickLocalizedCopy(description, locale);
  const resolvedTitle = title ? pickLocalizedCopy(title, locale) : undefined;
  const openGraphLocale = locale === "zh" ? "zh_CN" : "en_GH";
  const alternateLocale = locale === "zh" ? "en_GH" : "zh_CN";

  let metadataTitle: Metadata["title"] | undefined;
  if (titleTemplate) {
    metadataTitle = {
      default: resolvedTitle ?? siteConfig.name,
      template: titleTemplate
    };
  } else if (resolvedTitle) {
    metadataTitle = resolvedTitle;
  }

  return {
    ...(metadataTitle !== undefined ? { title: metadataTitle } : {}),
    description: resolvedDescription,
    metadataBase: new URL(baseUrl),
    verification: googleVerification
      ? {
          google: googleVerification
        }
      : undefined,
    alternates: {
      canonical: url,
      languages: {
        "en-GH": url,
        "x-default": url
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
          alt: "Decoropic — One-Stop Interior Solutions for Projects in Ghana",
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

import type { Metadata } from "next";
import type { Locale, LocalizedText } from "@/content/types";
import { siteConfig } from "@/lib/utils/constants";

type MetadataInput = {
  title: string | LocalizedText;
  description: string | LocalizedText;
  path?: string;
  locale?: Locale;
};

function pickLocalizedCopy(value: string | LocalizedText, locale: Locale) {
  return typeof value === "string" ? value : value[locale] || value.en;
}

export function buildMetadata({ title, description, path = "/", locale = "en" }: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const resolvedTitle = pickLocalizedCopy(title, locale);
  const resolvedDescription = pickLocalizedCopy(description, locale);
  const openGraphLocale = locale === "zh" ? "zh_CN" : "en_US";

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(siteConfig.siteUrl),
    verification: googleVerification
      ? {
          google: googleVerification
        }
      : undefined,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: openGraphLocale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription
    }
  };
}

import type { Locale, LocalizedText } from "@/content/types";

export function t(value: LocalizedText, locale: Locale = "en") {
  return value[locale] || value.en;
}

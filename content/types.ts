export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type CtaLink = {
  label: LocalizedText;
  href: string;
};

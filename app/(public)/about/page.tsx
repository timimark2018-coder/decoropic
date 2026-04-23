import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import {
  AboutHero,
  AboutPositioning,
  AboutTimeline,
  AboutPullQuote,
  AboutFounder,
  AboutWhoWeServe,
  AboutApproach,
  AboutCta
} from "@/components/about";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "About | Decoropic",
      zh: "关于我们 | Decoropic"
    },
    description: {
      en: "Twenty-six years of building-material and project-delivery experience in Ghana — Decoropic's editorial look at how we work.",
      zh: "二十六年建材与加纳项目交付经验 —— Decoropic 用编辑视角呈现我们的工作方式。"
    },
    path: "/about",
    locale
  });
}

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <>
      <AboutHero locale={locale} />
      <AboutPositioning locale={locale} />
      <AboutTimeline locale={locale} />
      <AboutPullQuote locale={locale} />
      <AboutFounder locale={locale} />
      <AboutWhoWeServe locale={locale} />
      <AboutApproach locale={locale} />
      <AboutCta locale={locale} />
    </>
  );
}

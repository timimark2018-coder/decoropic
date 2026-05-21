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
      en: "About — 26 Years in Trade, 20 in Ghana",
      zh: "关于我们"
    },
    description: {
      en: "Decoropic is a service-led brand built for cross-border interior projects. 26 years of international building-materials trade, 20 years on the ground in Accra.",
      zh: "Decoropic 是面向跨境室内项目的服务型品牌。26 年国际建材贸易经验,20 年深耕阿克拉。"
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

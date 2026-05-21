import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { HomePage } from "@/components/home/home-page";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    description: {
      en: "From local site measurement and budget-led design to sourcing coordination and Ghana delivery support. 20 years on the ground in Accra. 26 years of international building-materials trade.",
      zh: "从当地现场测量、预算导向设计到采购协调与加纳本地交付支持。深耕加纳 20 年,26 年国际建材贸易。"
    },
    path: "/",
    locale
  });
}

export default async function HomeRoute() {
  const locale = await getLocale();

  return <HomePage locale={locale} />;
}

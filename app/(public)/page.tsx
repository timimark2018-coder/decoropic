import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { HomePage } from "@/components/home/home-page";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Decoropic | One-Stop Interior Solutions for Projects in Ghana",
      zh: "Decoropic | 加纳项目的一站式室内装饰解决方案"
    },
    description: {
      en: "From local site measurement and budget-led design to sourcing coordination and Ghana delivery support.",
      zh: "从当地现场测量、预算导向设计到采购协调与加纳本地交付支持。"
    },
    path: "/",
    locale
  });
}

export default async function HomeRoute() {
  const locale = await getLocale();

  return <HomePage locale={locale} />;
}

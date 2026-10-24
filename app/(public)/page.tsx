import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { HomePage } from "@/components/home/home-page";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    description: {
      en: "One-stop sourcing of building materials, furniture and lighting from China for overseas projects — factory QC, consolidation and Ghana delivery support.",
      zh: "为海外项目从中国一站式采购建材、家具与灯具：工厂验货、集中拼柜装柜,并提供加纳本地交付支持。"
    },
    path: "/",
    locale
  });
}

export default async function HomeRoute() {
  const locale = await getLocale();

  return <HomePage locale={locale} />;
}

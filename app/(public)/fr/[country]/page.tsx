import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/lib/utils/constants";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema";
import { frHreflangCluster } from "@/lib/seo/fr-pages";
import { ContentPage } from "@/components/content/content-page";
import { getContentPage, getContentSlugs } from "@/lib/content-pages/getContentPage";
import { placeholderCard } from "@/lib/placeholder-card";

// 法语试水页 /fr/<country>，正文在 content/fr/*.md(第 5 批内容包)。
// 不走 buildMetadata:那里的 hreflang / noindex 逻辑是给 en、zh 用的。
// 这几页正常 index，与 /markets/west-africa 互指 hreflang(见 lib/seo/fr-pages.ts)。
// /fr 首页暂不建;/zh/fr/* 不存在。
export const dynamicParams = false;

export async function generateStaticParams() {
  return getContentSlugs("fr").map((country) => ({ country }));
}

// 内容包的配图建议里只有这两张能对上现有图;科特迪瓦的建议(定制厨房、仓库验货)没有对应图，留空
const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  togo: {
    src: "/projects/01-east-legon-villa/living-room.webp",
    alt: "Salon de villa aménagé avec mobilier, luminaires et carrelage grand format"
  },
  senegal: {
    src: "/projects/08-tamale-hotel-room-renovation/bathroom.webp",
    alt: "Salle de bain avec sanitaires, robinetterie et carrelage mural"
  }
};

const COUNTRY_NAMES: Record<string, string> = {
  "cote-d-ivoire": "Côte d'Ivoire",
  togo: "Togo",
  senegal: "Sénégal"
};

async function loadPage(country: string) {
  if ((await getLocale()) !== "en") return null;
  return getContentPage("fr", country);
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const page = await loadPage(country);
  if (!page) return {};
  const base = siteConfig.siteUrl;
  const url = `${base}${page.url}`;
  const languages = page.hreflangEn ? frHreflangCluster(page.hreflangEn) : null;

  return {
    title: { absolute: page.title },
    description: page.description,
    metadataBase: new URL(base),
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: `${base}${(HERO_IMAGES[country] ?? placeholderCard(page.url, page.primaryKeyword))?.src ?? "/og/default.jpg"}` }]
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
    robots: { index: true, follow: true }
  };
}

export default async function FrCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const page = await loadPage(country);
  if (!page) notFound();

  const base = siteConfig.siteUrl;
  const url = `${base}${page.url}`;
  const faqItems = page.sections.flatMap((s) => s.blocks).flatMap((b) => (b.kind === "faq" ? b.items : []));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.description,
      serviceType: page.primaryKeyword,
      url,
      inLanguage: "fr",
      areaServed: { "@type": "Country", name: COUNTRY_NAMES[country] },
      provider: { "@id": `${base}/#organization` }
    },
    {
      ...breadcrumbListSchema([
        { name: "Accueil", path: "/" },
        { name: "Afrique de l'Ouest", path: "/markets/west-africa" },
        { name: page.h1, path: page.url }
      ]),
      inLanguage: "fr"
    },
    ...(faqItems.length ? [{ ...faqPageSchema(faqItems), inLanguage: "fr" }] : [])
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <ContentPage
        page={page}
        locale="en"
        eyebrow="Afrique de l'Ouest francophone"
        heroImage={HERO_IMAGES[country] ?? placeholderCard(page.url, page.primaryKeyword)}
        relatedLabel="Liens utiles"
      />
    </>
  );
}

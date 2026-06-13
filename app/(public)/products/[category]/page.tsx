import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/utils/constants";
import { CategoryHero } from "@/components/categories/CategoryHero";
import { WhySection } from "@/components/categories/WhySection";
import { FeaturedSKUs } from "@/components/categories/FeaturedSKUs";
import { ApplicationSection } from "@/components/categories/ApplicationSection";
import { DecolovelyBridge } from "@/components/categories/DecolovelyBridge";
import { CtaSection } from "@/components/categories/CtaSection";

const CATEGORY_SLUGS = [
  "tiles-flooring",
  "furniture",
  "bathroom-kitchen",
  "lights-lighting",
  "doors-windows"
] as const;

type CategorySlug = (typeof CATEGORY_SLUGS)[number];

type CategoryData = {
  slug: string;
  label: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; h1: string; lead: string };
  why: { items: Array<{ title: string; body: string }> };
  skus: Array<{
    name: string;
    spec: string;
    priceFrom: string;
    priceLow: number;
    image: string;
    detailUrl: string;
  }>;
  applications: string[];
  archive: { count: string; url: string };
};

async function getCategoryData(slug: string): Promise<CategoryData | null> {
  if (!(CATEGORY_SLUGS as readonly string[]).includes(slug)) return null;
  try {
    const data = await import(`@/content/categories/${slug}.json`);
    return data.default as CategoryData;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ category: slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = await getCategoryData(category);
  if (!data) return {};

  return buildMetadata({
    title: data.seo.title,
    description: data.seo.description,
    path: `/products/${data.slug}`
  });
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = await getCategoryData(category);
  if (!data) notFound();

  const baseUrl = siteConfig.siteUrl;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Products", item: `${baseUrl}/products` },
      {
        "@type": "ListItem",
        position: 3,
        name: data.label,
        item: `${baseUrl}/products/${data.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <CategoryHero eyebrow={data.hero.eyebrow} h1={data.hero.h1} lead={data.hero.lead} />
        <WhySection items={data.why.items} />
        <FeaturedSKUs skus={data.skus} categoryLabel={data.label} baseUrl={baseUrl} />
        <ApplicationSection applications={data.applications} categoryLabel={data.label} />
        <DecolovelyBridge
          categoryLabel={data.label}
          count={data.archive.count}
          archiveUrl={data.archive.url}
        />
        <CtaSection />
      </main>
    </>
  );
}

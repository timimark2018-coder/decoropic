import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
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
  faq?: Array<{ question: string; answer: string }>;
};

const RELATED_CATEGORIES: Record<CategorySlug, Array<{ slug: CategorySlug; label: string }>> = {
  "tiles-flooring": [
    { slug: "bathroom-kitchen", label: "Bathroom & Kitchen" },
    { slug: "doors-windows", label: "Doors & Windows" },
    { slug: "lights-lighting", label: "Lights & Lighting" }
  ],
  "furniture": [
    { slug: "lights-lighting", label: "Lights & Lighting" },
    { slug: "tiles-flooring", label: "Tiles & Flooring" },
    { slug: "bathroom-kitchen", label: "Bathroom & Kitchen" }
  ],
  "bathroom-kitchen": [
    { slug: "tiles-flooring", label: "Tiles & Flooring" },
    { slug: "doors-windows", label: "Doors & Windows" },
    { slug: "furniture", label: "Furniture" }
  ],
  "lights-lighting": [
    { slug: "furniture", label: "Furniture" },
    { slug: "tiles-flooring", label: "Tiles & Flooring" },
    { slug: "bathroom-kitchen", label: "Bathroom & Kitchen" }
  ],
  "doors-windows": [
    { slug: "tiles-flooring", label: "Tiles & Flooring" },
    { slug: "bathroom-kitchen", label: "Bathroom & Kitchen" },
    { slug: "lights-lighting", label: "Lights & Lighting" }
  ]
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
  const relatedCategories = RELATED_CATEGORIES[data.slug as CategorySlug] ?? [];

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
      {data.faq && data.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(data.faq)) }}
        />
      )}
      <main className="min-h-screen">
        <CategoryHero eyebrow={data.hero.eyebrow} h1={data.hero.h1} lead={data.hero.lead} />
        <WhySection items={data.why.items} />
        <FeaturedSKUs skus={data.skus} categoryLabel={data.label} baseUrl={baseUrl} />
        <ApplicationSection applications={data.applications} categoryLabel={data.label} />
        {data.faq && data.faq.length > 0 && (
          <section className="bg-white py-16 lg:py-20">
            <div className="container-wide max-w-[860px]">
              <p
                className="text-brand-gold mb-8"
                style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}
              >
                FAQ
              </p>
              <dl className="divide-y divide-brand-pine-dark/10">
                {data.faq.map(({ question, answer }) => (
                  <div key={question} className="py-6">
                    <dt
                      className="text-brand-pine-dark font-semibold mb-2"
                      style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", lineHeight: 1.4 }}
                    >
                      {question}
                    </dt>
                    <dd className="text-brand-pine-dark/70 text-sm leading-relaxed">{answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}
        {relatedCategories.length > 0 && (
          <section className="bg-brand-pine-dark/5 py-12 lg:py-16">
            <div className="container-wide max-w-[860px]">
              <p
                className="text-brand-gold mb-6"
                style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}
              >
                Related Categories
              </p>
              <ul className="flex flex-wrap gap-3">
                {relatedCategories.map(({ slug, label }) => (
                  <li key={slug}>
                    <Link
                      href={`/products/${slug}`}
                      className="inline-block rounded border border-brand-pine-dark/20 bg-white px-5 py-2.5 text-sm font-medium text-brand-pine-dark transition-colors hover:bg-brand-pine-dark hover:text-brand-ivory"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
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

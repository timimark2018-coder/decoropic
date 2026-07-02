import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getGuideBySlug, getAllGuideSlugs } from "@/lib/guides/getGuides";
import { GuideBody } from "@/components/guides/GuideBody";
import { siteConfig } from "@/lib/utils/constants";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    path: `/guides/${guide.frontmatter.slug}`
  });
}

export default async function GuidePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const { frontmatter, content } = guide;
  const baseUrl = siteConfig.siteUrl;
  const url = `${baseUrl}/guides/${frontmatter.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    author: { "@type": "Organization", name: "Decoropic", url: baseUrl },
    publisher: { "@type": "Organization", name: "Decoropic", url: baseUrl },
    url,
    image: `${baseUrl}/og/default.jpg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
      { "@type": "ListItem", position: 3, name: frontmatter.title, item: url }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="border-b border-brand-line bg-brand-sand py-3">
        <div className="container-shell flex items-center gap-2 text-sm text-brand-pine-dark/50">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/guides" className="hover:text-brand-gold transition-colors">Guides</Link>
          <span aria-hidden>/</span>
          <span className="truncate max-w-[220px] text-brand-pine-dark sm:max-w-none">
            {frontmatter.title}
          </span>
        </div>
      </nav>

      <GuideBody content={content} frontmatter={frontmatter} />
    </>
  );
}

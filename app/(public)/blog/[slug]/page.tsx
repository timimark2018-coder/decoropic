import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getPostBySlug, getAllSlugs, extractFaqs } from "@/lib/blog/getPosts";
import { PostBody } from "@/components/blog/PostBody";
import { siteConfig } from "@/lib/utils/constants";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${post.frontmatter.slug}`
  });
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const baseUrl = siteConfig.siteUrl;
  const faqs = extractFaqs(content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishDate,
    dateModified: frontmatter.publishDate,
    author: {
      "@type": "Organization",
      name: "Decoropic",
      url: baseUrl
    },
    publisher: {
      "@type": "Organization",
      name: "Decoropic",
      url: baseUrl
    },
    url: `${baseUrl}/blog/${frontmatter.slug}`,
    image: `${baseUrl}${frontmatter.ogImage ?? "/og/default.jpg"}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${frontmatter.slug}`
    }
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer }
          }))
        }
      : null;

  const schemas = faqSchema ? [articleSchema, faqSchema] : [articleSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="border-b border-brand-line bg-brand-sand py-3"
      >
        <div className="container-shell flex items-center gap-2 text-sm text-brand-pine-dark/50">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            href="/blog"
            className="hover:text-brand-gold transition-colors"
          >
            Blog
          </Link>
          <span aria-hidden>/</span>
          <span className="truncate max-w-[200px] text-brand-pine-dark sm:max-w-none">
            {frontmatter.title}
          </span>
        </div>
      </nav>
      <PostBody content={content} frontmatter={frontmatter} />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/lib/utils/constants";
import { localizePath } from "@/lib/utils/site-links";
import { WHATSAPP_LINK } from "@/lib/constants/contact";
import { getAllGuides } from "@/lib/guides/getGuides";
import { getAllProjects, getProjectBySlug, projectMeta } from "@/lib/projects/getProjects";

// 已交付案例页。/projects/hotels/* 与 /projects/villas/* 是早先的定制页，
// 静态路由优先，与这里的 [slug] 不冲突。
export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const locale = await getLocale();

  return buildMetadata({
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    path: `/projects/${slug}`,
    locale
  });
}

const RELATED_LABEL: Record<string, string> = {
  "/solutions/villas": "Villa packages",
  "/solutions/apartments": "Apartment packages",
  "/solutions/hotels": "Hotel FF&E",
  "/markets/ghana": "Ghana market",
  "/estimator": "Budget estimator",
  "/projects": "All delivered projects",
  "/contact": "Contact"
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const locale = await getLocale();
  const { frontmatter: fm, content } = project;
  const baseUrl = siteConfig.siteUrl;
  const url = `${baseUrl}/projects/${slug}`;

  const guideTitles = Object.fromEntries(getAllGuides().map((g) => [`/guides/${g.slug}`, g.title]));
  const relatedLabel = (href: string) => RELATED_LABEL[href] ?? guideTitles[href] ?? href;

  // —— JSON-LD:Article + BreadcrumbList + ImageObject(每张图一个，Article.image 引用它们)——
  const imageObjects = fm.images.map((img, i) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${url}#image-${i + 1}`,
    contentUrl: `${baseUrl}${img.src}`,
    url: `${baseUrl}${img.src}`,
    caption: img.alt,
    description: img.alt
  }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: fm.h1,
    description: fm.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(fm.lastmod ? { dateModified: fm.lastmod } : {}),
    image: imageObjects.length
      ? imageObjects.map((o) => ({ "@id": o["@id"] }))
      : `${baseUrl}/og/default.jpg`,
    author: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: siteConfig.name },
    publisher: { "@id": `${baseUrl}/#organization` }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${baseUrl}/projects` },
      { "@type": "ListItem", position: 3, name: fm.h1, item: url }
    ]
  };

  const { content: rendered } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } }
  });

  const [hero, ...gallery] = fm.images;
  const waText = `Hi Decoropic, I saw the ${fm.h1.split(" — ")[0]} project and would like a proposal for mine.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, ...imageObjects]) }}
      />

      <nav aria-label="breadcrumb" className="border-b border-brand-line bg-brand-sand py-3">
        <div className="container-shell flex items-center gap-2 text-sm text-brand-pine-dark/50">
          <Link href={localizePath("/", locale)} className="transition-colors hover:text-brand-gold">Home</Link>
          <span aria-hidden>/</span>
          <Link href={localizePath("/projects", locale)} className="transition-colors hover:text-brand-gold">Projects</Link>
          <span aria-hidden>/</span>
          <span className="max-w-[220px] truncate text-brand-pine-dark sm:max-w-none">{fm.h1.split(" — ")[0]}</span>
        </div>
      </nav>

      <section className="bg-[#efe7d9] pt-16 pb-12 lg:pt-24">
        <div className="container-wide max-w-[1100px]">
          <p
            className="text-brand-gold"
            style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}
          >
            Delivered project · {fm.projectType}
          </p>
          <h1
            className="mt-6 max-w-[900px] text-brand-pine-dark"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            {fm.h1}
          </h1>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-pine-dark/70">
            {projectMeta(fm)}
          </p>

          {hero && (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[6px] bg-brand-pine-dark/5">
              <Image src={hero.src} alt={hero.alt} fill priority sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover" />
            </div>
          )}
          {gallery.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {gallery.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-brand-pine-dark/5">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 360px" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-ivory py-14 lg:py-20">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none overflow-x-auto">{rendered}</div>

          {fm.related.length > 0 && (
            <p className="mt-12 border-t border-brand-line pt-6 text-sm text-brand-pine-dark/80">
              Related:{" "}
              {fm.related.map((href, i) => (
                <span key={href}>
                  {i > 0 && " · "}
                  <Link
                    href={localizePath(href, locale)}
                    className="text-brand-pine underline decoration-brand-gold/60 underline-offset-2 hover:text-brand-gold"
                  >
                    {relatedLabel(href)}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-sand py-16">
        <div className="container-narrow text-center">
          <h2
            className="mb-8 text-brand-pine-dark"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Planning a similar project?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={localizePath("/contact", locale)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-4 font-semibold text-brand-pine-dark transition-colors hover:bg-brand-gold/90"
            >
              Send your project brief →
            </Link>
            <a
              href={WHATSAPP_LINK(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-pine-dark/25 px-8 py-4 text-brand-pine-dark transition-colors hover:border-brand-gold"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

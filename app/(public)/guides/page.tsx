import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/utils/constants";
import { getAllGuides } from "@/lib/guides/getGuides";
import { Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: {
      en: "Sourcing Guides — Building Materials & FF&E from China",
      zh: "采购指南 — 从中国采购建材与FF&E"
    },
    description: {
      en: "Practical guides for developers and procurement teams sourcing complete project material packages from China — hotel FF&E, tiles, tariffs, QC, consolidation and export.",
      zh: "面向开发商与采购团队的实用指南：从中国采购整套项目材料包 — 酒店FF&E、瓷砖、关税、验货、拼柜与出口。"
    },
    path: "/guides"
  });
}

export default async function GuidesIndexPage() {
  const guides = getAllGuides();
  const baseUrl = siteConfig.siteUrl;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="border-b border-brand-line bg-brand-sand py-3">
        <div className="container-shell flex items-center gap-2 text-sm text-brand-pine-dark/50">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span aria-hidden>/</span>
          <span className="text-brand-pine-dark">Guides</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#efe7d9]" style={{ paddingTop: "96px", paddingBottom: "72px" }}>
        <div className="container-wide max-w-[1000px]">
          <Reveal>
            <p
              className="text-brand-gold mb-6"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              Sourcing Guides
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1
              className="text-brand-pine-dark mb-6"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.015em", maxWidth: "820px" }}
            >
              Sourcing project materials from China — practical guides
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-brand-pine-dark/75 max-w-[680px]" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.0625rem, 1.6vw, 1.375rem)", lineHeight: 1.5 }}>
              How developers and procurement teams design, specify, quality-control and export complete material packages from China — for hotel, villa and apartment projects worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guide list */}
      <section className="bg-[#f7f3ec] py-16 lg:py-24">
        <div className="container-wide max-w-[1000px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 80}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="group block h-full rounded-lg border border-brand-line/60 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  {g.readingTime && (
                    <p
                      className="text-brand-gold mb-4"
                      style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}
                    >
                      {g.readingTime}
                    </p>
                  )}
                  <h2
                    className="text-brand-pine-dark mb-3 group-hover:text-brand-gold transition-colors"
                    style={{ fontFamily: "var(--serif)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25 }}
                  >
                    {g.title}
                  </h2>
                  <p className="text-brand-pine-dark/75" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {g.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Link back to the global cluster */}
          <Reveal delay={200}>
            <div className="mt-14 border-t border-brand-gold/15 pt-8">
              <p
                className="text-brand-gold mb-3"
                style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Ready to source?
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/source-from-china" className="text-brand-pine-dark hover:text-brand-gold transition-colors" style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 600 }}>
                  Project sourcing hub →
                </Link>
                <Link href="/source-from-china/hotel-ff-e" className="text-brand-pine-dark hover:text-brand-gold transition-colors" style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 600 }}>
                  Hotel FF&amp;E from China →
                </Link>
                <Link href="/source-from-china/tiles-sanitary" className="text-brand-pine-dark hover:text-brand-gold transition-colors" style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 600 }}>
                  Tiles &amp; sanitary from China →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

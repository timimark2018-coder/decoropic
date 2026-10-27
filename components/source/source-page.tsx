import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import { faqPageSchema } from "@/lib/seo/schema";
import { WHATSAPP_LINK } from "@/lib/constants/contact";

// ─────────────────────────────────────────────────────────────────────────────
// Global-layer "Source from China" cluster — shared page shell.
//
// Scope (Kevin, must hold across every page in this cluster):
//   We provide the CHINA side only — sourcing, QC, consolidation and export,
//   shipping worldwide. Local import, customs, delivery and installation are
//   arranged by the buyer or their local contractor. Turnkey is Ghana-only.
//
// This shell renders the mandatory service-boundary statement identically on
// every page so the boundary is never dropped or reworded by accident.
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICE_BOUNDARY =
  "We provide design and material selection remotely — layouts, renders and specified material lists — then source, quality-control, consolidate and export the complete package from China, shipping worldwide. We do not carry out on-site construction, installation or customs clearance abroad: local import, clearance, delivery and installation are arranged by you or your local contractor. Full turnkey delivery, including on-site installation, is available only in Ghana, where our team has a 20-year track record.";

export type SourceFaq = { question: string; answer: string };

export type SourceListItem = { title: string; body: string; href?: string };

export type SourcePageProps = {
  eyebrow: string;
  h1: string;
  subtitle: string;
  /** 首屏副标题下的一条链接(例如指向同主题的指南);可选 */
  heroLink?: { lead: string; label: string; href: string };
  intro: string[];
  categoriesTitle?: string;
  categories?: SourceListItem[];
  buyersTitle?: string;
  buyers?: SourceListItem[];
  /** Target-market focus (region-level, e.g. Middle East / Australia / Africa). */
  marketsTitle?: string;
  markets?: SourceListItem[];
  /** Real project/product photos (E-E-A-T); each needs descriptive alt text. */
  showcaseTitle?: string;
  showcase?: { src: string; alt: string; caption?: string }[];
  /** Honest, cited tariff reference for buyers — not advice, not a fabricated figure. */
  tariffNote?: { body: string; sourceLabel: string; sourceHref: string };
  faqTitle: string;
  faqs: SourceFaq[];
  ctaHeading: string;
  ctaBody: string;
  whatsappText: string;
  /**
   * One-way capability proof pointing at delivered work (/projects).
   * Anchor labels stay neutral — no geo terms imported into this cluster.
   */
  proof?: { body: string; links: { label: string; href: string }[] };
  /** Related pages inside the cluster (kept separate from the Ghana cluster). */
  relatedTitle?: string;
  related?: { label: string; href: string }[];
  /** Related in-depth guides (bidirectional link with the /guides content area). */
  guidesTitle?: string;
  guides?: { label: string; href: string }[];
};

function ListGrid({ title, items }: { title: string; items: SourceListItem[] }) {
  return (
    <div>
      <Reveal>
        <h2
          className="text-brand-pine-dark mb-12"
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.1 }}
        >
          {title}
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={150 + i * 80}>
            <div className="border-l-2 border-brand-gold pl-6">
              <h3
                className="text-brand-pine-dark mb-3"
                style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.2 }}
              >
                {item.title}
              </h3>
              <p className="text-brand-pine-dark/75 mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {item.body}
              </p>
              {item.href && (
                <Link
                  href={item.href}
                  className="text-brand-gold hover:text-brand-pine-dark transition-colors"
                  style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  Learn more →
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function SourcePage(props: SourcePageProps) {
  const {
    eyebrow,
    h1,
    subtitle,
    heroLink,
    intro,
    categoriesTitle,
    categories,
    buyersTitle,
    buyers,
    marketsTitle,
    markets,
    showcaseTitle,
    showcase,
    tariffNote,
    faqTitle,
    faqs,
    ctaHeading,
    ctaBody,
    whatsappText,
    proof,
    relatedTitle,
    related,
    guidesTitle,
    guides
  } = props;

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      {/* HERO */}
      <section className="bg-[#efe7d9]" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
        <div className="container-wide max-w-[1000px]">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px max-w-[80px] flex-1 bg-brand-gold/60" />
              <p
                className="text-brand-gold whitespace-nowrap"
                style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
              >
                {eyebrow}
              </p>
              <div className="h-px flex-1 bg-brand-gold/60" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1
              className="text-brand-pine-dark mb-6"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 5.2vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.015em",
                maxWidth: "900px"
              }}
            >
              {h1}
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p
              className="text-brand-pine-dark/75 mb-10"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", lineHeight: 1.5, maxWidth: "720px" }}
            >
              {subtitle}
            </p>
          </Reveal>

          {heroLink && (
            <Reveal delay={420}>
              <p className="mb-8 text-sm text-brand-pine-dark/75">
                {heroLink.lead}{" "}
                <Link
                  href={heroLink.href}
                  className="font-semibold text-brand-pine underline decoration-brand-gold/60 underline-offset-2 hover:text-brand-gold"
                >
                  {heroLink.label}
                </Link>
              </p>
            </Reveal>
          )}

          <Reveal delay={500}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-gold/90"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Get a Project Material Plan
              </Link>
              <a
                href={WHATSAPP_LINK(whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-pine-dark/30 text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-pine-dark/5"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Talk on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro prose */}
      <section className="bg-[#f7f3ec] py-16 lg:py-24">
        <div className="container-wide max-w-[860px]">
          <Reveal>
            <div className="space-y-5 text-brand-pine-dark/85" style={{ fontSize: "1rem", lineHeight: 1.75 }}>
              {intro.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Real project/product showcase — E-E-A-T */}
      {showcase && showcase.length > 0 && (
        <section className="bg-[#efe7d9] py-16 lg:py-20">
          <div className="container-wide max-w-[1100px]">
            {showcaseTitle && (
              <Reveal>
                <p
                  className="text-brand-gold mb-10"
                  style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
                >
                  {showcaseTitle}
                </p>
              </Reveal>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {showcase.map((img, i) => (
                <Reveal key={img.src} delay={i * 80}>
                  <figure>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-brand-pine-dark/5">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="text-brand-pine-dark/60 mt-3" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mandatory service-boundary statement */}
      <section className="bg-brand-pine-dark py-14 lg:py-16">
        <div className="container-wide max-w-[900px]">
          <Reveal>
            <p
              className="text-brand-gold mb-4"
              style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              What we do — and where our service ends
            </p>
            <p
              className="text-brand-ivory"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", lineHeight: 1.55, fontWeight: 400 }}
            >
              {SERVICE_BOUNDARY}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capability proof — one-way link to delivered work */}
      {proof && (
        <section className="bg-[#f7f3ec] py-14 lg:py-16 border-b border-brand-gold/15">
          <div className="container-wide max-w-[900px]">
            <Reveal>
              <p
                className="text-brand-gold mb-4"
                style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Proven in delivered projects
              </p>
              <p className="text-brand-pine-dark/85 mb-5" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                {proof.body}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {proof.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-brand-gold hover:text-brand-pine-dark transition-colors"
                    style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Categories */}
      {categories && categories.length > 0 && (
        <section className="bg-[#efe7d9] py-16 lg:py-24">
          <div className="container-wide max-w-[1000px]">
            <ListGrid title={categoriesTitle ?? "Categories"} items={categories} />
          </div>
        </section>
      )}

      {/* Buyer types */}
      {buyers && buyers.length > 0 && (
        <section className="bg-[#f7f3ec] py-16 lg:py-24">
          <div className="container-wide max-w-[1000px]">
            <ListGrid title={buyersTitle ?? "Who we work with"} items={buyers} />
          </div>
        </section>
      )}

      {/* Target markets */}
      {markets && markets.length > 0 && (
        <section className="bg-[#efe7d9] py-16 lg:py-24">
          <div className="container-wide max-w-[1000px]">
            <ListGrid title={marketsTitle ?? "Markets we serve"} items={markets} />
          </div>
        </section>
      )}

      {/* Tariff reality — honest buyer reference with citation */}
      {tariffNote && (
        <section className="bg-[#f7f3ec] py-14 lg:py-16 border-t border-brand-gold/15">
          <div className="container-wide max-w-[900px]">
            <Reveal>
              <p
                className="text-brand-gold mb-4"
                style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Tariff reality — buyer reference, not advice
              </p>
              <p className="text-brand-pine-dark/85" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                {tariffNote.body}
              </p>
              <p className="text-brand-pine-dark/55 mt-4" style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>
                Rates change and vary by product code — confirm current duties with your customs broker before ordering. Source:{" "}
                <a
                  href={tariffNote.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-brand-pine-dark underline underline-offset-2"
                >
                  {tariffNote.sourceLabel}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-[#efe7d9] py-16 lg:py-24">
        <div className="container-wide max-w-[860px]">
          <Reveal>
            <p
              className="text-brand-gold mb-6"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              Frequently asked questions
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {faqTitle}
            </h2>
          </Reveal>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={150 + i * 100}>
                <div className="border-b border-brand-pine-dark/10 pb-8 last:border-b-0">
                  <h3
                    className="text-brand-pine-dark mb-4"
                    style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)", fontWeight: 700, lineHeight: 1.3 }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-brand-pine-dark/80" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages within the cluster */}
      {related && related.length > 0 && (
        <section className="bg-[#f7f3ec] py-12 border-t border-brand-gold/15">
          <div className="container-wide max-w-[1000px]">
            <p
              className="text-brand-gold mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {relatedTitle ?? "More sourcing pages"}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="text-brand-pine-dark hover:text-brand-gold transition-colors"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 600 }}
                >
                  {r.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related in-depth guides — bidirectional link with /guides */}
      {guides && guides.length > 0 && (
        <section className="bg-[#efe7d9] py-12 border-t border-brand-gold/15">
          <div className="container-wide max-w-[1000px]">
            <p
              className="text-brand-gold mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {guidesTitle ?? "Related guides"}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {guides.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="text-brand-pine-dark hover:text-brand-gold transition-colors"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 600 }}
                >
                  {g.label} →
                </Link>
              ))}
            </div>
            {/* Index link — every cluster page reaches the /guides hub, not just
                the individual guides it lists. */}
            <Link
              href="/guides"
              className="text-brand-gold hover:text-brand-pine-dark transition-colors mt-6 inline-block"
              style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              All sourcing guides →
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="relative"
        style={{
          background: "linear-gradient(135deg, var(--brand-pine-dark) 0%, #14241c 50%, var(--brand-pine-dark) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <div className="container-wide max-w-[800px] text-center">
          <Reveal>
            <h2
              className="text-brand-ivory mb-8"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mb-10 max-w-[560px] text-brand-ivory/80" style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}>
              {ctaBody}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Submit Your Project List
              </Link>
              <a
                href={WHATSAPP_LINK(whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-ivory/40 text-brand-ivory px-8 py-4 transition-colors hover:bg-brand-ivory/10"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Talk on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

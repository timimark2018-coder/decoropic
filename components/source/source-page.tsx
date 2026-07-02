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
  "We handle sourcing, quality control, consolidation and export from China, and ship worldwide. Local import, customs clearance, delivery and installation are arranged by you or your local contractor. Full turnkey delivery is available in Ghana, where our team has a 20-year track record.";

export type SourceFaq = { question: string; answer: string };

export type SourceListItem = { title: string; body: string; href?: string };

export type SourcePageProps = {
  eyebrow: string;
  h1: string;
  subtitle: string;
  intro: string[];
  categoriesTitle?: string;
  categories?: SourceListItem[];
  buyersTitle?: string;
  buyers?: SourceListItem[];
  /** Target-market focus (region-level, e.g. Middle East / Australia / Africa). */
  marketsTitle?: string;
  markets?: SourceListItem[];
  /** Honest, cited tariff reference for buyers — not advice, not a fabricated figure. */
  tariffNote?: { body: string; sourceLabel: string; sourceHref: string };
  faqTitle: string;
  faqs: SourceFaq[];
  ctaHeading: string;
  ctaBody: string;
  whatsappText: string;
  /** Related pages inside the cluster (kept separate from the Ghana cluster). */
  relatedTitle?: string;
  related?: { label: string; href: string }[];
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
    intro,
    categoriesTitle,
    categories,
    buyersTitle,
    buyers,
    marketsTitle,
    markets,
    tariffNote,
    faqTitle,
    faqs,
    ctaHeading,
    ctaBody,
    whatsappText,
    relatedTitle,
    related
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

          <Reveal delay={500}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-gold/90"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Request a China Sourcing Quote
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
                Request Export Quote
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

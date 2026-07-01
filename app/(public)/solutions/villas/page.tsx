import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { getLocale } from "@/lib/i18n/server";
import { Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "House Decoration in Ghana — Villa & Residential Fit-Out | Decoropic",
      zh: "加纳别墅与住宅装修 | Decoropic"
    },
    description: {
      en: "House decoration in Ghana for villas and private residences — China-sourced tiles, furniture, lighting, sanitary ware and doors delivered to Accra. Project pricing, one contract.",
      zh: "加纳别墅与住宅装修 — 从中国直采瓷砖、家具、灯饰、卫浴和门窗，配送至阿克拉。项目报价，一份合同。"
    },
    path: "/solutions/villas",
    locale
  });
}

const faqs = [
  {
    question: "How does house decoration in Ghana work with Decoropic?",
    answer:
      "We start with a site measurement in Accra, then produce a project brief covering every material category — tiles, furniture, lighting, sanitary ware, and doors. All items are sourced from our Foshan factory network, consolidated into one container, and shipped to Tema Port. We handle customs clearance and coordinate delivery to your site. One contract, one timeline."
  },
  {
    question: "Can I get China-sourced materials for my villa in Ghana?",
    answer:
      "Yes. Decoropic works with 1,000+ vetted factories in China — primarily in Foshan, Guangdong — to supply building materials for residential and villa projects across Ghana. We carry out factory QC before shipment, so you receive the quality you approved in the sample stage."
  },
  {
    question: "What materials can you source from China for a villa decoration project in Ghana?",
    answer:
      "We cover all five primary material categories: tiles and flooring (porcelain slab, marble, engineered stone), furniture (bedroom, dining, living, built-in wardrobes), lighting (chandeliers, pendants, LED recessed), bathroom and kitchen fittings (sanitary ware, taps, cabinetry), and doors and windows (aluminium, steel frame, timber). Custom finishes are available on request."
  },
  {
    question: "How long does it take from order to site delivery in Accra?",
    answer:
      "Typical lead time is 45–75 days from confirmed order: factory production 25–40 days, QC and packing 7–10 days, sea freight to Tema Port 13–25 days. We build a project-specific timeline into your quote so your construction programme can plan around the delivery."
  },
  {
    question: "What is the cost of decorating a villa in Ghana with China-sourced materials?",
    answer:
      "Costs vary widely by villa size, specification tier, and material choices. Use our 11-step estimator on the homepage for a project-specific range, or contact us with your floor plans and we will prepare a detailed material list with pricing within 48 hours."
  }
];

export default async function VillasPage() {
  const locale = await getLocale();
  void locale;

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
                Solutions · Villas & Residences
              </p>
              <div className="h-px flex-1 bg-brand-gold/60" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1
              className="text-brand-pine-dark mb-6"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                maxWidth: "820px"
              }}
            >
              House Decoration in Ghana
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p
              className="text-brand-pine-dark/75 mb-10"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
                lineHeight: 1.5,
                maxWidth: "700px"
              }}
            >
              China-sourced materials. Accra delivery. One contract from site measurement to container arrival.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-gold/90"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Start Your Villa Project
              </Link>
              <Link
                href="/#estimator"
                className="border border-brand-pine-dark/30 text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-pine-dark/5"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Estimate Budget
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro prose */}
      <section className="bg-[#f7f3ec] py-16 lg:py-24">
        <div className="container-wide max-w-[860px]">
          <Reveal>
            <div className="space-y-5 text-brand-pine-dark/85" style={{ fontSize: "1rem", lineHeight: 1.75 }}>
              <p>
                House decoration in Ghana — whether a two-storey villa in East Legon, a beachfront residence in Labadi, or a compound house in Kumasi — shares a common procurement challenge: high-quality materials are not consistently available locally at project quantities, and direct sourcing from China without a coordination layer creates its own logistical overhead.
              </p>
              <p>
                Decoropic provides that coordination layer. We source building materials for residential projects in Ghana directly from Foshan manufacturers: porcelain tile in large-format slabs, engineered hardwood, Italian-spec sanitary ware, bespoke timber and aluminium doors, custom kitchen cabinetry, and FF&amp;E across every room. All from China, shipped as one container to Tema Port, delivered to your site in Accra or anywhere in Ghana.
              </p>
              <p>
                Our process begins with your brief — floor plans, design references, and target budget — and ends when your material list is confirmed, QC-checked, and on its way. We have been doing this in Ghana for over twenty years. We know what size specification to specify for Ghanaian site conditions, which material grades hold in tropical humidity, and how to pack a container so it arrives without damage.
              </p>
              <p>
                The result is a house decoration project in Ghana where you deal with one team, sign one contract, and receive one delivery — not six separate supplier relationships, six different lead times, and six chances for something to arrive wrong.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-[#efe7d9] py-16 lg:py-24">
        <div className="container-wide max-w-[1000px]">
          <Reveal>
            <p
              className="text-brand-gold mb-6"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              Material categories
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-14"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              What we source for villa projects in Ghana
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tiles & Flooring",
                body: "Large-format porcelain slab (up to 1.5×3m), marble, engineered stone, and anti-slip pool and outdoor tile. Specified for Ghana's tropical climate.",
                href: "/products/tiles-flooring"
              },
              {
                title: "Furniture",
                body: "Dining rooms, bedrooms, living areas, home offices. Solid timber, veneer, upholstered — specified to Ghana's humidity and container-packing constraints.",
                href: "/products/furniture"
              },
              {
                title: "Bathroom & Kitchen",
                body: "Sanitary ware, brassware, vanity units, kitchen cabinetry, and custom island benchtops. European-spec fittings adapted for Ghana's plumbing standards.",
                href: "/products/bathroom-kitchen"
              },
              {
                title: "Lighting",
                body: "Chandeliers, pendants, wall sconces, LED recessed, outdoor landscape lighting. 230V Ghana-spec, K9 crystal, and commercial-grade drivers.",
                href: "/products/lights-lighting"
              },
              {
                title: "Doors & Windows",
                body: "Aluminium, steel frame, and solid timber doors. Double-glazed windows for noise and heat control. Fitted with Ghana-grade hardware and seals.",
                href: "/products/doors-windows"
              },
              {
                title: "Projects Reference",
                body: "See how our materials perform in completed Ghana villa and residential projects. Real photos, real sites, real clients.",
                href: "/projects"
              }
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={200 + i * 80}>
                <div className="border-l-2 border-brand-gold pl-6">
                  <h3
                    className="text-brand-pine-dark mb-3"
                    style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-brand-pine-dark/75 mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {cat.body}
                  </p>
                  <Link
                    href={cat.href}
                    className="text-brand-gold hover:text-brand-pine-dark transition-colors"
                    style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    Browse →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f3ec] py-16 lg:py-24">
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
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              House decoration in Ghana — your questions answered
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
              Ready to start your villa project in Ghana?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mb-10 max-w-[560px] text-brand-ivory/80" style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}>
              Tell us about your project — floor plans, style, budget, timeline. We reply within 24 hours with a material briefing.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Book Consultation
              </Link>
              <Link
                href="/products"
                className="border border-brand-ivory/40 text-brand-ivory px-8 py-4 transition-colors hover:bg-brand-ivory/10"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Browse Building Materials
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

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
      en: "Hotel Decoration in Ghana — Hospitality FF&E Sourcing from China | Decoropic",
      zh: "加纳酒店装修 — 中国直采酒店FF&E | Decoropic"
    },
    description: {
      en: "Hotel decoration in Ghana — hospitality FF&E and interior materials sourced from China. Guestrooms, lobbies, restaurants. Project pricing, Tema Port delivery, Accra installation support.",
      zh: "加纳酒店装修 — 从中国直采酒店室内材料与FF&E。客房、大堂、餐厅。项目报价，特马港配送，阿克拉现场支持。"
    },
    path: "/solutions/hotels",
    locale
  });
}

const faqs = [
  {
    question: "How does hotel decoration in Ghana work with Decoropic?",
    answer:
      "We start with your hotel's room count, brand standards, and per-room budget. Our sourcing team produces a material specification covering every category — guestroom furniture, lobby and corridor finishes, bathroom fittings, lighting, and door hardware. All items are sourced from Foshan factories, QC-inspected, and consolidated into container shipments to Tema Port. We coordinate customs clearance and delivery to site."
  },
  {
    question: "Can you source hotel FF&E from China for Ghana hospitality projects?",
    answer:
      "Yes. Decoropic has supplied FF&E and interior materials for hotel and hospitality projects in Ghana for over twenty years. We work with Foshan manufacturers across furniture (guestroom, lobby, restaurant), lighting (commercial-grade, 230V Ghana-spec), bathroom fittings, custom millwork, and flooring. We understand hospitality specification tiers — from budget hotels to four- and five-star properties."
  },
  {
    question: "What is the lead time for hotel decoration materials from China to Ghana?",
    answer:
      "For a standard hotel fit-out shipment, allow 50–80 days from confirmed specification: factory production 30–45 days (longer for custom upholstered furniture), QC and container loading 7–10 days, sea freight to Tema Port 13–25 days. We phase shipments to match your construction programme — lobby materials can arrive before guestroom furniture if your build schedule requires it."
  },
  {
    question: "How do you handle quality control for hotel materials?",
    answer:
      "Every hotel order includes a pre-shipment inspection at the factory in China. We verify dimensions, finish quality, hardware function, and quantity against your approved sample and specification. Our QC team photographs and documents each item category. Defective items are replaced before the container is sealed — not after arrival at Tema Port."
  },
  {
    question: "Can you supply materials for hotel decoration in Ghana that meet international brand standards?",
    answer:
      "Yes. We work with clients who need to meet specific brand standards for franchise hotels in Ghana, including fire-rated materials, particular upholstery grades, and lighting specifications. Share your brand standards document with us and we will source compliant products from our factory network, with samples available for brand approval before production."
  }
];

export default async function HotelsPage() {
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
                Solutions · Hotels & Hospitality
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
              Hotel Decoration in Ghana
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
              Hospitality FF&amp;E and interior materials sourced from China — delivered to Tema Port, installed in Accra.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-gold/90"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Start Your Hotel Project
              </Link>
              <Link
                href="/products"
                className="border border-brand-pine-dark/30 text-brand-pine-dark px-7 py-4 transition-colors hover:bg-brand-pine-dark/5"
                style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              >
                Browse Building Materials
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
                Hotel decoration in Ghana — from boutique guesthouses in Accra to full-service resort hotels on the coast — requires materials that perform to hospitality standards: fire ratings, commercial-grade wear resistance, consistent colour batching across hundreds of rooms, and brand-compliant specifications for franchise properties.
              </p>
              <p>
                China is the primary source of hospitality FF&amp;E for West Africa. Foshan manufacturers produce the guestroom furniture, lobby feature walls, bathroom fittings, lighting systems, and door hardware that equip hotels across the region — at specification tiers that range from three-star contract grade to five-star bespoke. Decoropic has been sourcing from this supply chain for Ghanaian hospitality clients for over two decades.
              </p>
              <p>
                For each hotel decoration project in Ghana, we work backwards from your room count and per-room budget to produce a full material specification. We source from our Foshan network, carry out pre-shipment QC at the factory, and ship in phased container loads timed to your construction programme. Lobby and public area materials can arrive first; guestroom furniture follows as those floors are ready.
              </p>
              <p>
                What hotel clients tell us sets us apart is not just the China-direct pricing — it is the coordination. One team handles procurement, QC, logistics, customs at Tema Port, and on-site delivery in Ghana. You manage one relationship. The material arrives as specified, on the timeline we committed to.
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
              Hospitality categories
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
              What we source for hotel projects in Ghana
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Guestroom Furniture",
                body: "Beds, bedside tables, desks, chairs, wardrobes, and soft furnishings. Contract-grade construction, brand-standard finishes, batch-consistent across all rooms.",
                href: "/products/furniture"
              },
              {
                title: "Lobby & Public Area Tiles",
                body: "Large-format porcelain, marble effect, anti-slip stone for pool decks. Specified for hospitality foot traffic and tropical climate expansion.",
                href: "/products/tiles-flooring"
              },
              {
                title: "Bathroom Fittings",
                body: "Sanitary ware, brassware, vanity units, shower systems, and accessories. Commercial-grade for hotel throughput, with brand-standard chrome and matte options.",
                href: "/products/bathroom-kitchen"
              },
              {
                title: "Hospitality Lighting",
                body: "Guestroom pendants, corridor recessed LED, lobby chandeliers, and exterior feature lighting. 230V Ghana-spec, CRI 90+, commercial drivers and controls.",
                href: "/products/lights-lighting"
              },
              {
                title: "Doors & Hardware",
                body: "Solid-core hotel room doors, fire-rated corridor doors, aluminium-framed glass facades. Specified to Ghana building code and hospitality security requirements.",
                href: "/products/doors-windows"
              },
              {
                title: "Projects Reference",
                body: "See completed hotel and hospitality projects in Ghana fitted with Decoropic-sourced materials.",
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
              Hotel decoration in Ghana — your questions answered
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
              Ready to equip your hotel in Ghana?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mb-10 max-w-[560px] text-brand-ivory/80" style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}>
              Share your room count, brand standards, and timeline. We will produce a full material specification within 48 hours.
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

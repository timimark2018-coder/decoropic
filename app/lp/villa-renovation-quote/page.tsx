import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, faqPageSchema, webPageSchema } from "@/lib/seo/schema";
import { getLocale } from "@/lib/i18n/server";
import { Reveal } from "@/components/ui";
import { EstimatorExperience } from "@/components/estimator/estimator-experience";
import { LpLeadForm } from "@/components/lp/lp-lead-form";
import { LpStickyCta } from "@/components/lp/lp-sticky-cta";
import { LpWhatsAppButton } from "@/components/lp/lp-whatsapp-button";
import { LpCtaGroup } from "@/components/lp/lp-cta-group";

const PATH = "/lp/villa-renovation-quote";
const WA_MESSAGE = "Hi Kevin, I'm looking at the Decoropic villa estimator and I'd like to chat.";
const TITLE = "Free Villa Renovation Budget Estimator (Ghana 2026)";
const DESCRIPTION =
  "90-second free estimator showing which of 4 budget tiers (USD 20K–245K+) fits your Accra villa project, in real 2026 prices. No signup.";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    locale
  });
}

const TIERS = [
  {
    name: "Functional Refresh",
    range: "≈ USD 20K – 45K",
    body: "Fresh paint, mid-range tile, basic sanitary ware, ready-made furniture, standard lighting. Owner-occupied retrofit, no structural change."
  },
  {
    name: "Mid-Range",
    range: "≈ USD 45K – 110K",
    body: "Imported 60×120 porcelain, branded sanitary, semi-custom millwork, designer pendants, accent walls. The most common Accra villa tier."
  },
  {
    name: "Premium",
    range: "≈ USD 110K – 245K",
    body: "1200×2700 supreme slabs, integrated wet-area systems, full custom cabinetry, statement chandeliers, 3000mm sliding doors. East Legon / Cantonments level."
  },
  {
    name: "Luxury",
    range: "USD 245K+",
    body: "Italian / Spanish imports across all categories, smart home integration, pivot entry doors with stone matching. Trasacco / Adjiringanor level."
  }
];

const PATTERNS = [
  {
    title: 'Pattern 1 · The "Local Quote" Trap',
    body: 'A contractor gives a verbal quote — "I can do your villa for X." Six months later, materials have arrived, half the specs are wrong, the marble was substituted, the hardware doesn\'t close. Final cost: nearly double.'
  },
  {
    title: 'Pattern 2 · The "Six-Supplier Spiral"',
    body: "Tiles from one vendor, sanitary from another, cabinets from a third, lighting from a fourth. None coordinate. The container arrives at Tema in three shipments over four months. Construction stalls. Labour cost doubles."
  },
  {
    title: 'Pattern 3 · The "Online Catalog Mirage"',
    body: "Beautiful items picked off Alibaba and Instagram — none of which work together in real space. The marble competes with the porcelain. The pendant clashes with the ceiling height. Owner rebuilds."
  }
];

const STEPS = [
  { n: "01", title: "Brief", body: "You tell us: floor plan, intended use, preferred aesthetic, hard budget ceiling. We return a tier recommendation and a written scope." },
  { n: "02", title: "Curate", body: "From 1,000+ vetted factories, we pre-select materials and finishes that work together as a system. You see the full palette before any container leaves Foshan." },
  { n: "03", title: "Sample", body: "Physical samples arrive at our Accra workshop. You touch the tile, see the wood grain, sit on the sofa frame. Anything you reject, we substitute — before mass order." },
  { n: "04", title: "Container", body: "One order, one container, one arrival at Tema, one installation team coordinated by our local supervisor. From sign-off to handover: 12–16 weeks, on a written schedule." }
];

const NUMBERS = [
  ["26", "Years in international building-materials trade"],
  ["20", "Years on the ground in Accra"],
  ["100+", "Villa and apartment projects delivered in Ghana"],
  ["1,000+", "Vetted factories in our sourcing network"],
  ["5,000+", "Products curated and quality-checked"],
  ["14", "Average weeks from contract to handover"]
];

const PROJECTS = [
  {
    title: "East Legon Villa",
    meta: "4-bed · Premium · 487 m²",
    body: "Marble-look porcelain feature wall, custom kitchen with Italian millwork, brass linear pendant in stairwell. Delivered in 14 weeks.",
    img: "/projects/01-east-legon-villa/living-room.webp",
    alt: "East Legon villa living room — Decoropic Premium tier project, Accra, 4-bed 487 m²"
  },
  {
    title: "Cantonments Penthouse",
    meta: "3-bed · Mid-Range · 220 m²",
    body: "Travertine porcelain throughout, wall-hung sanitary, designer Italian sofa. Delivered in 11 weeks.",
    img: "/projects/02-cantonments-penthouse/open-plan-living.webp",
    alt: "Cantonments penthouse open-plan living — Decoropic Mid-Range tier project, Accra, 3-bed 220 m²"
  },
  {
    title: "Airport Residential Apartment",
    meta: "2-bed · Functional Refresh · 140 m²",
    body: "Marble-look tile, fresh paint, ready-made furniture replacement. Delivered in 6 weeks.",
    img: "/projects/03-airport-residential-apt/living-room.webp",
    alt: "Airport Residential apartment living room — Decoropic Functional Refresh project, Accra, 2-bed 140 m²"
  }
];

const MINI_CASES = [
  {
    no: "01",
    name: "Adjiringanor Family Villa",
    spec: "Premium · 312 m² · 5-bed · 13 weeks",
    highlight: "Marble-look porcelain throughout, custom kitchen, smart lighting integration.",
    img: "/projects/04-adjiringanor-family-villa/exterior.webp",
    alt: "Adjiringanor family villa exterior — Decoropic Premium tier project, Accra, 5-bed 312 m²"
  },
  {
    no: "02",
    name: "Airport Hills Modern Build",
    spec: "Mid-Range · 240 m² · 4-bed · 11 weeks",
    highlight: "Travertine slab feature wall, designer Italian sofa, walk-in pantry millwork.",
    img: "/projects/05-airport-hills-modern-build/exterior.webp",
    alt: "Airport Hills modern build exterior — Decoropic Mid-Range tier project, Accra, 4-bed 240 m²"
  },
  {
    no: "03",
    name: "Trasacco Penthouse Refit",
    spec: "Luxury · 380 m² · 3-bed · 16 weeks",
    highlight: "Italian leather upholstery, full smart-home, pivot entrance door.",
    img: "/projects/06-trasacco-penthouse-refit/exterior-entry-door.webp",
    alt: "Trasacco penthouse refit pivot entrance door — Decoropic Luxury tier project, Accra, 3-bed 380 m²"
  }
];

const VALUE_STACK = [
  "A written tier recommendation based on your brief — which of the 4 tiers fits, and why",
  "A realistic budget range for your specific project — a real low/high, not a generic figure",
  "A PDF brief summarising your project parameters, ready to share with your spouse, contractor or planner",
  "A WhatsApp consultation slot with Kevin or a senior project lead — at a time you choose",
  "Access to our 2026 Ghana renovation price reference — the same document we use for client quotes"
];

const CONCERNS = [
  { q: "I'm just exploring. Do I have to commit?", a: "No. The estimate is free and binds neither side. Take it, share it, use it to negotiate with other suppliers. We just hope you call us back." },
  { q: "Will you spam me?", a: "No marketing emails unless you opt in. One email with your estimate, one optional WhatsApp from a project lead. That's it." },
  { q: "Is my data safe?", a: "Yes. Ghana Data Protection Act 2012 compliant. Your details are never shared, sold, brokered or rented." },
  { q: "What if my budget is below the 'Functional Refresh' tier?", a: "Tell us. We've done apartment retrofits at smaller budgets. We'll be honest about whether we're the right fit." }
];

const FAQS = [
  { question: "How long does a typical villa renovation take with Decoropic?", answer: "11–16 weeks from contract to handover, depending on scope and customs scheduling. Premium tier averages 14 weeks. We commit to a written schedule in the contract." },
  { question: "Do you handle just sourcing, or also installation?", answer: "Both. Sourcing from Foshan factories, shipping via 40HQ container to Tema port, customs clearance, and installation by our Accra-based site team. One contract covers all four stages." },
  { question: "Can I see materials before ordering?", answer: "Yes. Physical samples arrive at our Accra workshop before mass order. You touch and approve every primary material — tiles, wood, fabric, stone — before the container ships." },
  { question: "What if I already have an architect or interior designer?", answer: "We work alongside your designer. They define the aesthetic and space planning; we execute sourcing and delivery. Most of our clients come to us with a designer already in place." },
  { question: "Do you do commercial projects (hotels / offices)?", answer: "Yes. About 30% of our deliveries are commercial — boutique hotels, executive offices, hospitality fit-outs. Same process, larger containers." },
  { question: "What payment terms do you offer?", answer: "Typically 30% on contract signing, 40% on container loading in Foshan, 30% on final handover in Accra. Full terms are written into every contract." },
  { question: "What if there's a defect after handover?", answer: "18-month warranty on all primary fittings (cabinets, sanitary, lighting). We keep replacement stock in Accra. A defect call gets a site visit within 48 hours." }
];

const eyebrow = "text-brand-gold text-[0.78rem] font-bold uppercase tracking-[0.28em]";

export default async function VillaRenovationQuotePage() {
  const locale = await getLocale();

  const structuredData = [
    webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbListSchema([
      { name: "Home", path: "/" },
      { name: "Villa Renovation Estimate", path: PATH }
    ]),
    faqPageSchema(FAQS)
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* 01 HERO */}
      <section className="bg-brand-sand pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className={eyebrow}>Get your villa renovation estimate</p>
          </Reveal>
          <Reveal delay={150}>
            <h1
              className="mt-6 max-w-[960px] text-brand-pine-dark"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em" }}
            >
              Don&apos;t spend USD 200,000 guessing what you can afford.
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 max-w-[760px] text-lg leading-8 text-brand-ink/80">
              Most Accra villa owners overspend by 30–50% because no one ever told them what each tier actually includes.
              We&apos;ve watched it happen for 20 years. Our 90-second estimator tells you, in real 2026 prices, which of
              4 budget tiers your project fits — and exactly what you&apos;ll get for it.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 flex flex-col gap-4">
              <LpCtaGroup
                sourcePage={PATH}
                primaryLabel="Get My Estimate — 90 Seconds"
                primaryHref="#lp-estimator"
                whatsappMessage={WA_MESSAGE}
              />
              <span className="text-sm text-brand-ink/60">No signup. No phone call. No commitment. Just clarity.</span>
            </div>
          </Reveal>
          <Reveal delay={640}>
            <p className="mt-10 border-t border-brand-line/60 pt-6 text-sm font-medium text-brand-ink/70">
              26 Years International Trade · 20 Years in Ghana · 100+ Projects · 5,000+ Curated SKUs
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 PAIN POINTS */}
      <section className="bg-brand-pine-dark py-20 text-brand-ivory lg:py-28">
        <div className="container-wide">
          <Reveal>
            <h2 className="max-w-[780px]" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Why Most Accra Villa Renovations Go 30–50% Over Budget
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PATTERNS.map((p, i) => (
              <Reveal key={p.title} delay={200 + i * 120}>
                <div className="h-full rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-6">
                  <h3 className="mb-3 text-brand-gold" style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 700 }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-7 text-brand-ivory/80">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={620}>
            <p className="mt-10 max-w-[760px] text-lg italic text-brand-ivory/90" style={{ fontFamily: "var(--serif)" }}>
              The pattern behind all three: no one ever sat down and translated your project into a single, honest budget
              with realistic 2026 component prices. That&apos;s what this estimator does.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 TIER TABLE */}
      <section className="bg-brand-sand py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <p className={eyebrow}>Four tiers</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-4 max-w-[700px] text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Your Project Fits One of Four Tiers. Which One?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={200 + i * 120}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-7 shadow-card">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 700 }}>
                      {tier.name}
                    </h3>
                    <span className="whitespace-nowrap text-sm font-bold text-brand-gold-deep">{tier.range}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/75">{tier.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={680}>
            <div className="mt-10">
              <LpCtaGroup
                sourcePage={PATH}
                primaryLabel="Find My Tier in 90 Seconds →"
                primaryHref="#lp-estimator"
                whatsappMessage={WA_MESSAGE}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 SOLUTION STEPS */}
      <section className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <h2 className="max-w-[700px] text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              How Decoropic Keeps Your Project on Budget
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={200 + i * 120}>
                <div>
                  <span className="text-brand-gold" style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 800 }}>
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-ink/75">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={700}>
            <p className="mt-10 max-w-[820px] text-base leading-7 text-brand-ink/80">
              <strong className="text-brand-pine-dark">Why this works:</strong> we own the entire supply chain — sourcing,
              container, customs, install. No coordination gap, no blame shifting, no &quot;the other supplier delayed it.&quot;
            </p>
          </Reveal>
        </div>
      </section>

      {/* 05 NUMBERS */}
      <section className="bg-brand-pine-dark py-20 text-brand-ivory lg:py-24">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {NUMBERS.map(([value, label], i) => (
              <Reveal key={label} delay={120 + i * 90}>
                <div>
                  <p className="text-brand-gold" style={{ fontFamily: "var(--serif)", fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}>
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-brand-ivory/75">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={600}>
            <div className="mt-12 flex flex-col items-center gap-4 border-t border-brand-gold/20 pt-10 text-center">
              <p className="text-brand-ivory/80">Want to talk first?</p>
              <LpCtaGroup
                sourcePage={PATH}
                primaryLabel="Get My Estimate"
                primaryHref="#lp-estimator"
                whatsappMessage={WA_MESSAGE}
                whatsappLabel="Talk to a Project Lead"
                onDark
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 ESTIMATOR (embedded existing experience) */}
      <section id="lp-estimator" className="bg-brand-sand py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <p className={eyebrow}>90-second estimator</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-4 max-w-[760px] text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              See your budget range now
            </h2>
          </Reveal>
          <div className="mt-10">
            <EstimatorExperience locale={locale} />
          </div>
        </div>
      </section>

      {/* 07 PROJECT CASES */}
      <section className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
                Projects Like Yours
              </h2>
              <a
                href="https://diy.decoropic.com"
                target="_blank"
                rel="alternate"
                className="shrink-0 text-[0.95rem] font-semibold text-brand-gold-deep underline-offset-4 hover:underline"
              >
                Explore design styles →
              </a>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={200 + i * 120}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-6 shadow-card">
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-beige">
                    <Image src={p.img} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <h3 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700 }}>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-deep">{p.meta}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07b MINI CASES */}
      <section className="bg-brand-sand py-20 lg:py-24">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.1 }}>
                More Projects, At a Glance
              </h2>
              <a
                href="https://diy.decoropic.com"
                target="_blank"
                rel="alternate"
                className="shrink-0 text-[0.95rem] font-semibold text-brand-gold-deep underline-offset-4 hover:underline"
              >
                More design references →
              </a>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {MINI_CASES.map((c, i) => (
              <Reveal key={c.no} delay={180 + i * 120}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                  <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-brand-beige">
                    <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    <span
                      className="absolute left-2 top-2 rounded-md bg-brand-pine-dark/70 px-2 text-brand-sand"
                      style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 800 }}
                    >
                      {c.no}
                    </span>
                  </div>
                  <h3 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700 }}>
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-deep">{c.spec}</p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">{c.highlight}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={560}>
            <div className="mt-10">
              <a
                href="https://diy.decoropic.com"
                target="_blank"
                rel="alternate"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold-deep underline-offset-4 hover:underline"
              >
                Explore the Design Center →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 FOUNDER PROMISE */}
      <section className="bg-brand-pine-dark py-20 text-brand-ivory lg:py-28">
        <div className="container-wide max-w-container-narrow">
          <Reveal>
            <blockquote className="text-brand-ivory/95" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)", fontStyle: "italic", lineHeight: 1.5 }}>
              &quot;I&apos;ve been sourcing building materials for 26 years and walking Accra job sites for 20. Decoropic exists
              because I watched too many families overpay for renovations that didn&apos;t last. Every product I curate is
              something I&apos;d put in my own home. If we don&apos;t have the right material for your brief, I&apos;ll tell you —
              and tell you where to find it.&quot;
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm font-semibold text-brand-gold">
              — Kevin Lau, Founder, Decoropic · Foshan Home Style Import and Export Co., Ltd
            </p>
          </Reveal>
        </div>
      </section>

      {/* 09 VALUE STACK + CONCERNS */}
      <section className="bg-brand-sand py-20 lg:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15 }}>
                What You Get When You Submit
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-3 text-sm text-brand-ink/70">In 24 hours, free, no obligation:</p>
            </Reveal>
            <ul className="mt-6 grid gap-4">
              {VALUE_STACK.map((item, i) => (
                <Reveal key={item} delay={200 + i * 90}>
                  <li className="flex gap-3 text-sm leading-7 text-brand-ink/80">
                    <span className="text-brand-gold">✦</span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15 }}>
                Common Concerns — Answered Honestly
              </h2>
            </Reveal>
            <dl className="mt-6 grid gap-5">
              {CONCERNS.map((c, i) => (
                <Reveal key={c.q} delay={200 + i * 90}>
                  <div className="rounded-2xl border border-brand-line bg-white p-5">
                    <dt className="text-sm font-semibold text-brand-pine-dark">{c.q}</dt>
                    <dd className="mt-2 text-sm leading-7 text-brand-ink/75">{c.a}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
        <div className="container-wide">
          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-3 text-center">
              <p className="text-brand-ink/70">Have a question before you submit?</p>
              <LpWhatsAppButton sourcePage={PATH} message={WA_MESSAGE} label="Have a question? WhatsApp Kevin" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 FAQ */}
      <section className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-wide max-w-container-narrow">
          <Reveal>
            <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={120 + i * 70}>
                <details className="group rounded-2xl border border-brand-line bg-white p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-brand-pine-dark marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/75">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 MAIN LEAD FORM */}
      <section className="bg-brand-pine-dark py-20 text-brand-ivory lg:py-28">
        <div className="container-wide max-w-container-narrow">
          <Reveal>
            <h2 className="text-center" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Get Your Estimate — 90 Seconds, No Commitment
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 flex flex-col items-center gap-4 text-center">
              <p className="text-brand-ivory/75">Prefer to talk before submitting?</p>
              <LpCtaGroup
                sourcePage={PATH}
                primaryLabel="See My Estimate First"
                primaryHref="#lp-estimator"
                whatsappMessage={WA_MESSAGE}
                whatsappLabel="WhatsApp us"
                onDark
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10">
              <LpLeadForm sourcePage={PATH} locale={locale} variant="full" />
            </div>
          </Reveal>
        </div>
      </section>

      <LpStickyCta sourcePage={PATH} locale={locale} whatsappMessage={WA_MESSAGE} />
    </>
  );
}

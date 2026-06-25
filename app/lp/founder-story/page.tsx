import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, organizationSchema, personSchema, webPageSchema } from "@/lib/seo/schema";
import { getLocale } from "@/lib/i18n/server";
import { Reveal } from "@/components/ui";
import { LpWhatsAppButton } from "@/components/lp/lp-whatsapp-button";
import { LpCtaGroup } from "@/components/lp/lp-cta-group";

const ESTIMATE_URL = "https://decoropic.com/lp/villa-renovation-quote#lp-estimator";

const PATH = "/lp/founder-story";
const TITLE = "26 Years in Building Materials, 20 Years in Ghana — The Decoropic Founder Story";
const DESCRIPTION =
  "How one founder's two-decade journey through Accra job sites built Decoropic into Ghana's one-stop interior solutions partner.";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, locale });
}

const MOMENTS = [
  { year: "2008 · The Financial Crisis", body: "When global construction froze, every supplier raised prices. We held our prices in Ghana for nine months. Lost money. Kept clients. Built trust that's still paying back two decades later." },
  { year: "2014 · The First Local Team", body: "We stopped relying on third-party contractors and built our own Accra installation team — five people who learned every product we ship, so the same hands that receive the container set the tile in your living room." },
  { year: "2020 · Supply Chain Rebuild", body: "COVID broke factory-to-port logistics for nearly two years. We rebuilt by working directly with 1,000+ Pearl River Delta factories, cutting out middlemen. That price compression is why our 2026 prices look the way they do." },
  { year: "2026 · Decoropic Becomes a Brand", body: "For 26 years we operated as a B2B trade name. In 2026 we launched Decoropic publicly — same supply chain, same team — opening the door for villa owners who'd been getting our materials all along, just without knowing our name." }
];

const PRINCIPLES = [
  ["I don't sell what I wouldn't put in my own home.", "Every curated product passes Kevin's personal review."],
  ["One contract, one accountability.", "No subcontractor blame chains."],
  ["Sample before scale.", "You see, touch and approve every primary material before mass order."],
  ["The price you see is the price you pay.", "No “import duty surprise” at delivery."],
  ["18 months after handover, we still own it.", "Warranty service is in-house, not outsourced."]
];

const TEAM = [
  ["Kevin Lau", "Founder & Lead Curator · walks every premium-tier project"],
  ["Accra Site Team", "5 installation specialists, all trained on Decoropic SKUs"],
  ["Foshan Sourcing Team", "3 dedicated buyers, average 12 years in the industry"],
  ["Tema Logistics Coordinator", "Manages customs and last-mile delivery"],
  ["Design Liaison", "Coordinates with your architect or interior designer"]
];

const STORY_PROJECTS = [
  ["East Legon Villa", "Three brothers, one inherited family compound. We delivered three coordinated renovations over 18 months while keeping the family's design unity intact."],
  ["Cantonments Penthouse", "A returning Ghanaian-American family wanted “feels like London but works for Accra.” Italian materials, Ghana-spec wiring, 9-week turnaround."],
  ["Trasacco Valley New Build", "Working alongside the architect from foundation, we shipped 3 containers across 4 months, coordinated 7 sub-trades, hit the move-in date."]
];

const WA_MESSAGE = "Hi Kevin, I just read your founder story and I'd like to chat.";
const BRIEF_URL = "https://decoropic.com/lp/villa-renovation-quote#lp-lead-form";
const eyebrow = "text-brand-gold text-[0.78rem] font-bold uppercase tracking-[0.28em]";

export default async function FounderStoryPage() {
  const locale = await getLocale();

  const structuredData = [
    webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH }),
    organizationSchema(locale),
    personSchema(),
    breadcrumbListSchema([
      { name: "Home", path: "/" },
      { name: "Founder Story", path: PATH }
    ])
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* 01 HERO */}
      <section className="bg-brand-sand pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className={eyebrow}>26 Years · 30 Countries · One Founder</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 max-w-[960px] text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em" }}>
              Why one founder&apos;s 20 years in Ghana matters when you&apos;re investing in your villa.
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 max-w-[760px] text-lg leading-8 text-brand-ink/80">
              Most building-materials companies sell. Decoropic guides. The difference comes from one person who&apos;s
              spent half his career walking Accra job sites — and the other half sourcing from the factories that made it
              all possible.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <LpCtaGroup
                sourcePage={PATH}
                primaryLabel="Get a Villa Estimate"
                primaryHref={ESTIMATE_URL}
                whatsappMessage={WA_MESSAGE}
                whatsappLabel="Talk to Kevin Directly"
              />
              <Link href="#story" className="text-sm font-semibold text-brand-pine-dark underline-offset-4 hover:underline">
                Read the full story below ↓
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 ORIGIN */}
      <section id="story" className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-wide max-w-container-narrow">
          <Reveal>
            <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Where It Started — Foshan, 1999
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-base leading-8 text-brand-ink/80">
              In 1999, Foshan was already the world capital of ceramic tile — but most of what it produced shipped to
              Europe and the Middle East. Africa was an afterthought. That year, a young entrepreneur named Kevin Lau began
              visiting factories on weekends, learning the difference between &quot;export grade&quot; and &quot;domestic
              grade,&quot; between a glaze that survives tropical humidity and one that won&apos;t. By 2003, he&apos;d made
              his first shipment to West Africa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 FIRST TRIP */}
      <section className="bg-brand-pine-dark py-20 text-brand-ivory lg:py-28">
        <div className="container-wide max-w-container-narrow">
          <Reveal>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.1 }}>
              The First Trip to Accra — 2004
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-base leading-8 text-brand-ivory/85">
              In 2004, Kevin arrived in Accra to inspect a delivery that had gone wrong — tiles cracked in transit, the
              customer ready to refuse the whole container. Standing on a Cantonments site at 35°C, watching workers cut
              tiles by hand because nobody had spec&apos;d a wet saw, he realised something.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-brand-gold" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontStyle: "italic", lineHeight: 1.4 }}>
              The product was never the problem. The supply chain was.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-6 text-base leading-8 text-brand-ivory/85">
              He stayed two weeks. Three weeks. By the time he flew home, he&apos;d lined up an installation partner, a
              customs broker, and a small warehouse in Tema. Decoropic&apos;s roots in Ghana were planted.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 FOUR MOMENTS */}
      <section className="bg-brand-sand py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Four Moments That Shaped Decoropic
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.year} delay={180 + i * 120}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-7 shadow-card">
                  <h3 className="text-brand-gold-deep" style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 700 }}>
                    {m.year}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/75">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={560}>
            <div className="mt-12 flex flex-col items-center gap-3 text-center">
              <p className="text-brand-ink/70">Want to hear how this applies to your project?</p>
              <LpWhatsAppButton sourcePage={PATH} message={WA_MESSAGE} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 NUMBERS */}
      <section className="bg-brand-pine-dark py-16 text-brand-ivory">
        <div className="container-wide">
          <p className="text-center text-brand-gold" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)", fontWeight: 700 }}>
            26 Years · 20 Years Ghana · 100+ Projects · 1,000+ Factories · 5,000+ SKUs
          </p>
        </div>
      </section>

      {/* 06 PRINCIPLES */}
      <section className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Five Principles Behind Every Project
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-5">
            {PRINCIPLES.map(([title, body], i) => (
              <Reveal key={title} delay={150 + i * 90}>
                <li className="flex gap-5 rounded-2xl border border-brand-line bg-white p-6">
                  <span className="text-brand-gold" style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 800, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700 }}>
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-brand-ink/75">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 TEAM */}
      <section className="bg-brand-sand py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Who You&apos;ll Actually Work With
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(([name, role], i) => (
              <Reveal key={name} delay={150 + i * 90}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-6">
                  <p className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700 }}>
                    {name}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-brand-ink/75">{role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 STORY PROJECTS */}
      <section className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Some Projects We&apos;re Proud Of
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STORY_PROJECTS.map(([title, body], i) => (
              <Reveal key={title} delay={180 + i * 120}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-6 shadow-card">
                  <div aria-hidden className="mb-5 aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-brand-beige to-brand-mist" />
                  <h3 className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700 }}>
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/75">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 INVITATION */}
      <section className="bg-brand-pine-dark py-20 text-brand-ivory lg:py-28">
        <div className="container-wide max-w-container-narrow text-center">
          <Reveal>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 3.6vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1 }}>
              If You&apos;re Planning a Villa in Accra, I&apos;d Like to Hear About It.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-[640px] text-base italic leading-8 text-brand-ivory/85" style={{ fontFamily: "var(--serif)" }}>
              &quot;Whether you&apos;re three years away or three weeks, the conversation costs you nothing. I&apos;ll be
              honest about whether we&apos;re the right partner — and if we&apos;re not, I&apos;ll point you to who is.
              That&apos;s what 20 years in this market teaches you. Talk to me.&quot;
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-4 text-sm font-semibold text-brand-gold">— Kevin Lau</p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-8 flex justify-center">
              <LpCtaGroup
                sourcePage={PATH}
                primaryLabel="Send a Project Brief"
                primaryHref={BRIEF_URL}
                whatsappMessage={WA_MESSAGE}
                whatsappLabel="WhatsApp Kevin"
                onDark
                className="sm:justify-center"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

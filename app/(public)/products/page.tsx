import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { productsContent } from "@/content/products";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Products & Catalog | Decoropic",
      zh: "产品与精选 | Decoropic"
    },
    description: {
      en: "One source. One contract. One delivery. Curated material ecosystem for your project.",
      zh: "一站采购、一份合同、一次交付——为你的项目精选的材料生态系统。"
    },
    path: "/products",
    locale
  });
}

// =============================================================================
// SVG Illustrations — gold line art, brand-coherent with Local Services
// =============================================================================

function ProcurementProblemIllustration() {
  return (
    <svg viewBox="0 0 800 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden>
      {/* Ground line */}
      <line x1="0" y1="220" x2="800" y2="220" stroke="var(--brand-gold)" strokeWidth="1" opacity="0.4" />

      {/* Container 1 — intact */}
      <rect x="60" y="100" width="180" height="120" stroke="var(--brand-gold)" strokeWidth="1.6" />
      <line x1="100" y1="100" x2="100" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <line x1="140" y1="100" x2="140" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <line x1="180" y1="100" x2="180" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <line x1="220" y1="100" x2="220" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <text x="150" y="245" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="10" fontFamily="serif" letterSpacing="0.16em">SUPPLIER 01</text>

      {/* Container 2 — intact */}
      <rect x="290" y="100" width="180" height="120" stroke="var(--brand-gold)" strokeWidth="1.6" />
      <line x1="330" y1="100" x2="330" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <line x1="370" y1="100" x2="370" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <line x1="410" y1="100" x2="410" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <line x1="450" y1="100" x2="450" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" />
      <text x="380" y="245" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="10" fontFamily="serif" letterSpacing="0.16em">SUPPLIER 02</text>

      {/* Container 3 — missing parts (dashed top + missing right piece) */}
      <rect x="520" y="100" width="140" height="120" stroke="var(--brand-gold)" strokeWidth="1.6" strokeDasharray="6 4" />
      <line x1="560" y1="100" x2="560" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" strokeDasharray="4 3" />
      <line x1="600" y1="100" x2="600" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" strokeDasharray="4 3" />
      <line x1="640" y1="100" x2="640" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" strokeDasharray="4 3" />
      {/* Missing right corner indication */}
      <line x1="660" y1="100" x2="700" y2="100" stroke="var(--brand-gold)" strokeWidth="1.1" strokeDasharray="3 6" opacity="0.5" />
      <line x1="700" y1="100" x2="700" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" strokeDasharray="3 6" opacity="0.5" />
      <line x1="660" y1="220" x2="700" y2="220" stroke="var(--brand-gold)" strokeWidth="1.1" strokeDasharray="3 6" opacity="0.5" />
      <text x="678" y="165" textAnchor="middle" fill="var(--brand-gold)" fontSize="22" fontFamily="serif" fontStyle="italic">?</text>
      <text x="600" y="245" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="10" fontFamily="serif" letterSpacing="0.16em">SUPPLIER 03 — MISSING PARTS</text>

      {/* Top caption */}
      <text x="400" y="60" textAnchor="middle" fill="var(--brand-gold)" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.8">
        three suppliers, three contracts, three chances to fail
      </text>
      <line x1="240" y1="80" x2="560" y2="80" stroke="var(--brand-gold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

function OneSourceFunnelIllustration() {
  const inputs = [
    { x: 120, label: "FACTORY" },
    { x: 320, label: "FACTORY" },
    { x: 480, label: "FACTORY" },
    { x: 680, label: "FACTORY" }
  ];

  return (
    <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden>
      {/* 4 input nodes */}
      {inputs.map((p, i) => (
        <g key={`input-${i}`}>
          <circle cx={p.x} cy="50" r="16" fill="var(--brand-ivory)" stroke="var(--brand-gold)" strokeWidth="1.6" />
          <text
            x={p.x}
            y="90"
            textAnchor="middle"
            fill="var(--brand-pine-dark)"
            fontSize="10"
            fontFamily="serif"
            letterSpacing="0.16em"
          >
            {p.label}
          </text>
          <line x1={p.x} y1="66" x2="400" y2="170" stroke="var(--brand-gold)" strokeWidth="1.2" opacity="0.45" />
        </g>
      ))}

      {/* "200+" caption above inputs */}
      <text x="400" y="20" textAnchor="middle" fill="var(--brand-gold)" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.7">
        200+ vetted factories
      </text>

      {/* Central convergence */}
      <circle cx="400" cy="190" r="36" fill="var(--brand-pine-dark)" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <text x="400" y="186" textAnchor="middle" fill="var(--brand-gold)" fontSize="10" fontFamily="serif" letterSpacing="0.18em" fontWeight="700">
        DECORO-
      </text>
      <text x="400" y="200" textAnchor="middle" fill="var(--brand-gold)" fontSize="10" fontFamily="serif" letterSpacing="0.18em" fontWeight="700">
        PIC
      </text>

      {/* Output line */}
      <line x1="400" y1="226" x2="400" y2="280" stroke="var(--brand-gold)" strokeWidth="1.6" />
      <path d="M 392 270 L 400 280 L 408 270" stroke="var(--brand-gold)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Output caption */}
      <text x="400" y="305" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="11" fontFamily="serif" letterSpacing="0.16em" fontWeight="700">
        ONE CONTAINER · ONE CONTRACT · ONE CONTACT
      </text>
    </svg>
  );
}

function SourcingFlowIllustration() {
  const nodes = [100, 300, 500, 700];
  const arrows = [200, 400, 600];
  const labels = ["BRIEF", "CURATE", "SAMPLE", "ORDER"];

  return (
    <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden>
      <line x1="100" y1="100" x2="700" y2="100" stroke="var(--brand-gold)" strokeWidth="1.4" opacity="0.5" />
      {nodes.map((cx, i) => (
        <g key={`node-${i}`}>
          <circle cx={cx} cy="100" r="22" fill="var(--brand-ivory)" stroke="var(--brand-gold)" strokeWidth="1.8" />
          <text x={cx} y="106" textAnchor="middle" fill="var(--brand-gold)" fontSize="14" fontFamily="serif">
            {`0${i + 1}`}
          </text>
        </g>
      ))}
      {arrows.map((cx, i) => (
        <path
          key={`arrow-${i}`}
          d={`M ${cx - 15} 100 L ${cx + 15} 100 M ${cx + 10} 95 L ${cx + 15} 100 L ${cx + 10} 105`}
          stroke="var(--brand-gold)"
          strokeWidth="1.2"
          opacity="0.6"
        />
      ))}
      {nodes.map((cx, i) => (
        <text
          key={`label-${i}`}
          x={cx}
          y="160"
          textAnchor="middle"
          fill="var(--brand-pine-dark)"
          fontSize="11"
          fontFamily="serif"
          letterSpacing="0.18em"
        >
          {labels[i]}
        </text>
      ))}
    </svg>
  );
}

// =============================================================================
// Page
// =============================================================================

export default async function ProductsPage() {
  const locale = await getLocale();
  const c = productsContent;

  return (
    <main className="min-h-screen">
      {/* HERO — 杂志开场页（与 Solutions 主页 / Local Services 同款） */}
      <section className="bg-[#efe7d9]" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container-wide max-w-[1100px]">
          {/* Eyebrow — 横线 + 文字 + 横线 */}
          <Reveal>
            <div className="mb-12 flex items-center gap-4 lg:mb-16">
              <div className="h-px max-w-[80px] flex-1 bg-brand-gold/60" />
              <p
                className="text-brand-gold whitespace-nowrap"
                style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
              >
                {t(c.hero.eyebrow, locale)}
              </p>
              <div className="h-px flex-1 bg-brand-gold/60" />
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal delay={200}>
            <h1
              className="text-brand-pine-dark mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 6vw, 5.25rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                maxWidth: "900px"
              }}
            >
              {t(c.hero.title, locale)}
            </h1>
          </Reveal>

          {/* HandDrawnLine wave */}
          <Reveal delay={400}>
            <div className="mb-10 max-w-[280px] lg:mb-12">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.6} />
            </div>
          </Reveal>

          {/* Pull-quote italic */}
          <Reveal delay={600}>
            <p
              className="text-brand-gold mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
                lineHeight: 1.55,
                maxWidth: "720px",
                fontWeight: 400
              }}
            >
              &quot;{t(c.hero.pullQuote, locale)}&quot;
            </p>
          </Reveal>

          {/* Signature */}
          <Reveal delay={800}>
            <p
              className="text-brand-pine-dark/55"
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--sans)",
                letterSpacing: "0.02em",
                fontWeight: 400
              }}
            >
              {t(c.hero.author, locale)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 金色信息条 */}
      <div className="bg-brand-pine-dark text-brand-ivory" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p
              className="text-brand-gold"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t({ en: "05 — Products & Catalog", zh: "05 — 产品与精选" }, locale)}
            </p>
            <p
              className="text-brand-ivory/70"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500 }}
            >
              {t({ en: "One Source · One Contract · One Delivery", zh: "一个来源 · 一份合同 · 一次发货" }, locale)}
            </p>
          </div>
        </div>
      </div>

      {/* 01 — Procurement Problem */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[900px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.problem.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.problem.h2, locale)}
            </h2>
          </Reveal>

          {/* Procurement Problem SVG */}
          <Reveal delay={400}>
            <div className="mx-auto mb-16 w-full max-w-[820px]">
              <ProcurementProblemIllustration />
            </div>
          </Reveal>

          {/* Pull-quote */}
          <Reveal delay={500}>
            <blockquote className="mb-16 border-l-2 border-brand-gold pl-6 lg:pl-8">
              <p
                className="text-brand-pine-dark"
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)",
                  fontWeight: 400,
                  lineHeight: 1.4
                }}
              >
                {t(c.problem.pullQuote, locale)}
              </p>
            </blockquote>
          </Reveal>

          {/* 3 子标题（visible / invisible / hidden cost） */}
          <div className="space-y-10">
            {c.problem.items.map((item, i) => (
              <Reveal key={i} delay={700 + i * 150}>
                <div className="grid grid-cols-1 gap-4 border-b border-brand-pine-dark/10 pb-8 last:border-b-0 lg:grid-cols-[180px_1fr] lg:gap-10">
                  <div>
                    <p
                      className="text-brand-gold mb-1"
                      style={{ fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
                    >
                      {t(item.eyebrow, locale)}
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-6">
                    <h3
                      className="text-brand-pine-dark mb-3"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.25
                      }}
                    >
                      {t(item.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/80" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                      {t(item.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — The Decoropic Way */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide max-w-[900px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.ourWay.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.ourWay.h2, locale)}
            </h2>
          </Reveal>

          {/* OneSourceFunnel SVG */}
          <Reveal delay={400}>
            <div className="mx-auto mb-20 w-full max-w-[800px]">
              <OneSourceFunnelIllustration />
            </div>
          </Reveal>

          {/* 4 项 Editorial 列表 */}
          <div className="space-y-10">
            {c.ourWay.items.map((item, i) => (
              <Reveal key={i} delay={500 + i * 100}>
                <div className="grid grid-cols-1 gap-6 border-b border-brand-pine-dark/10 pb-8 last:border-b-0 lg:grid-cols-[100px_1fr] lg:gap-10">
                  <div>
                    <p
                      className="text-brand-gold"
                      style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1 }}
                    >
                      {item.number}
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-brand-pine-dark mb-3"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.2
                      }}
                    >
                      {t(item.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/80" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                      {t(item.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Selection Guides (5 大类目，Zigzag 布局) */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.selectionGuides.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-20"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.selectionGuides.h2, locale)}
            </h2>
          </Reveal>

          {/* 5 类目 — Zigzag 交替（奇偶左图右文 / 右图左文） */}
          <div className="space-y-20 lg:space-y-28">
            {c.selectionGuides.categories.map((cat, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <Reveal key={cat.slug} delay={idx * 100}>
                  <div
                    className={`flex flex-col gap-8 lg:gap-16 lg:items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                  >
                    {/* 图 */}
                    <div className="lg:w-1/2">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-pine-dark/5">
                        <img
                          src={cat.imageSrc}
                          alt={t(cat.title, locale)}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* 文字 */}
                    <div className="border-l-2 border-brand-gold pl-6 lg:w-1/2 lg:pl-8">
                      <h3
                        className="text-brand-pine-dark mb-4"
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                          fontWeight: 700,
                          lineHeight: 1.1
                        }}
                      >
                        {t(cat.title, locale)}
                      </h3>
                      <p
                        className="text-brand-gold mb-6"
                        style={{
                          fontFamily: "var(--serif)",
                          fontStyle: "italic",
                          fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                          lineHeight: 1.5
                        }}
                      >
                        {t(cat.tagline, locale)}
                      </p>

                      <ul className="mb-8 space-y-3">
                        {cat.tips.map((tip, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-brand-pine-dark/80"
                            style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                          >
                            <span className="text-brand-gold flex-shrink-0">✦</span>
                            <span>{t(tip, locale)}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={cat.catalogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
                        style={{
                          fontSize: "0.78rem",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          fontWeight: 700
                        }}
                      >
                        {t(cat.browseLabel, locale)}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — Featured Picks (3 重点推荐) */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide max-w-[1100px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.featuredPicks.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.featuredPicks.h2, locale)}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
            {c.featuredPicks.items.map((item, i) => {
              const title = locale === "zh" ? item.titleZh : item.titleEn;
              const reason = locale === "zh" ? item.reasonZh : item.reasonEn;
              return (
                <Reveal key={item.slug} delay={300 + i * 150}>
                  <article className="flex flex-col">
                    {/* Image placeholder (P4 will fill /images/products/*.jpg) */}
                    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-brand-line/40">
                      <img
                        src={item.imageSrc}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p
                      className="text-brand-gold mb-3"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}
                    >
                      {t(item.categoryLabel, locale)}
                    </p>
                    <h3
                      className="text-brand-pine-dark mb-4"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.125rem, 1.4vw, 1.375rem)",
                        fontWeight: 700,
                        lineHeight: 1.25
                      }}
                    >
                      {title}
                    </h3>
                    <p className="text-brand-pine-dark/80 mb-6 flex-1" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                      {reason}
                    </p>
                    <a
                      href={item.catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
                      style={{
                        fontSize: "0.78rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        fontWeight: 700
                      }}
                    >
                      {t({ en: "View on Catalog →", zh: "查看产品 →" }, locale)}
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — How Sourcing Works */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[900px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.howItWorks.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.howItWorks.h2, locale)}
            </h2>
          </Reveal>

          {/* Sourcing Flow SVG */}
          <Reveal delay={400}>
            <div className="mx-auto mb-20 w-full max-w-[800px]">
              <SourcingFlowIllustration />
            </div>
          </Reveal>

          {/* 4 Steps Editorial 列表 */}
          <div className="space-y-10">
            {c.howItWorks.steps.map((step, i) => (
              <Reveal key={i} delay={500 + i * 100}>
                <div className="grid grid-cols-1 gap-6 border-b border-brand-pine-dark/10 pb-8 last:border-b-0 lg:grid-cols-[100px_1fr] lg:gap-10">
                  <div>
                    <p
                      className="text-brand-gold"
                      style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1 }}
                    >
                      {step.number}
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-brand-pine-dark mb-3"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.2
                      }}
                    >
                      {t(step.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/80" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                      {t(step.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Full Catalog (深绿大 CTA) */}
      <section className="bg-brand-pine-dark py-24 lg:py-32">
        <div className="container-wide max-w-[900px] text-center">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.fullCatalog.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-ivory mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.fullCatalog.h2, locale)}
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <p
              className="mx-auto mb-12 max-w-[640px] text-brand-ivory/80"
              style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
            >
              {t(c.fullCatalog.body, locale)}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={c.fullCatalog.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t(c.fullCatalog.primaryCta, locale)}
              </a>
              <Link
                href="/contact"
                className="border border-brand-ivory/40 text-brand-ivory px-8 py-4 transition-colors hover:bg-brand-ivory/10"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t(c.fullCatalog.secondaryCta, locale)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA — 深绿渐变 */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-pine-dark) 0%, #14241c 50%, var(--brand-pine-dark) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <div className="container-wide max-w-[800px] text-center">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t({ en: "Ready to begin", zh: "准备开始" }, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-ivory mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.finalCta.h2, locale)}
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <p
              className="mx-auto mb-12 max-w-[560px] text-brand-ivory/80"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              {t(c.finalCta.subtitle, locale)}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t(c.finalCta.primaryCta, locale)}
              </Link>
              <Link
                href="/solutions"
                className="border border-brand-ivory/40 text-brand-ivory px-8 py-4 transition-colors hover:bg-brand-ivory/10"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t(c.finalCta.secondaryCta, locale)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

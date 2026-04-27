import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { projectsContent } from "@/content/projects";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Projects | Decoropic",
      zh: "项目作品 | Decoropic"
    },
    description: {
      en: "26 years of cross-border trade. The proof is the project. Hotels, villas, residential, and supply process across Ghana.",
      zh: "26 年跨境贸易。证据就是项目本身。覆盖加纳的酒店、别墅、住宅与供应流程。"
    },
    path: "/projects",
    locale
  });
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const c = projectsContent;

  return (
    <main className="min-h-screen">
      {/* HERO — 杂志开场页 */}
      <section className="bg-[#efe7d9]" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container-wide max-w-[1200px]">
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

          <Reveal delay={400}>
            <div className="mb-10 max-w-[280px] lg:mb-12">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.6} />
            </div>
          </Reveal>

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
              {t({ en: "06 — Projects", zh: "06 — 项目作品" }, locale)}
            </p>
            <p
              className="text-brand-ivory/70"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500 }}
            >
              {t(c.infoBar.text, locale)}
            </p>
          </div>
        </div>
      </div>

      {/* 01 — Hotel & Commercial Projects */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.hotelsSection.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.hotelsSection.h2, locale)}
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 mb-16 max-w-[840px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              {t(c.hotelsSection.intro, locale)}
            </p>
          </Reveal>

          {/* Featured: Kumasi */}
          <Reveal delay={400}>
            <article className="mb-20">
              <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden bg-brand-pine-dark/5">
                <img
                  src={c.hotelsSection.featured.imageSrc}
                  alt={t(c.hotelsSection.featured.title, locale)}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <p
                className="text-brand-gold mb-3"
                style={{ fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}
              >
                {t(c.hotelsSection.featured.subtitle, locale)}
              </p>

              <h3
                className="text-brand-pine-dark mb-6"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15
                }}
              >
                {t(c.hotelsSection.featured.title, locale)}
              </h3>

              <p
                className="text-brand-pine-dark/85 mb-10 max-w-[840px]"
                style={{ fontSize: "1rem", lineHeight: 1.7 }}
              >
                {t(c.hotelsSection.featured.summary, locale)}
              </p>

              {/* 4 stat 网格 */}
              <div className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
                {c.hotelsSection.featured.stats.map((stat, i) => (
                  <div key={i}>
                    <p
                      className="text-brand-gold mb-1"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(2rem, 3.8vw, 3rem)",
                        fontWeight: 700,
                        lineHeight: 1
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-brand-pine-dark/70"
                      style={{ fontSize: "0.8125rem", letterSpacing: "0.05em", lineHeight: 1.4 }}
                    >
                      {t(stat.label, locale)}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={c.hotelsSection.featured.detailUrl}
                className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t({ en: "Read Full Case Study →", zh: "阅读完整案例 →" }, locale)}
              </Link>
            </article>
          </Reveal>

          {/* Mini cases: Tamale + Accra */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 mb-12">
            {c.hotelsSection.miniCases.map((mc, i) => (
              <Reveal key={mc.slug} delay={500 + i * 150}>
                <article>
                  <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-brand-pine-dark/5">
                    <img src={mc.imageSrc} alt={t(mc.city, locale)} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <p
                    className="text-brand-gold mb-2"
                    style={{ fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}
                  >
                    {t(mc.city, locale)} · {mc.rooms} {t({ en: "rooms", zh: "间客房" }, locale)}
                  </p>
                  <h3
                    className="text-brand-pine-dark mb-3"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    {t(mc.completedAt, locale)}
                  </h3>
                  <p className="text-brand-pine-dark/80" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {t(mc.scope, locale)}
                  </p>
                  {mc.scopeNote ? (
                    <p
                      className="text-brand-pine-dark/55 mt-2"
                      style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "0.875rem", lineHeight: 1.5 }}
                    >
                      {t(mc.scopeNote, locale)}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>

          {/* View All */}
          <Reveal delay={900}>
            <Link
              href={c.hotelsSection.viewAllUrl}
              className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              {t(c.hotelsSection.viewAllLabel, locale)}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 02 — Villa Concept Cases */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.villaSection.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.villaSection.h2, locale)}
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 mb-16 max-w-[840px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              {t(c.villaSection.intro, locale)}
            </p>
          </Reveal>

          {/* 双栏：图 + 文字 */}
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal delay={400}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-pine-dark/5">
                <img
                  src={c.villaSection.imageSrc}
                  alt={t(c.villaSection.imageAlt, locale)}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={550}>
              <div>
                {/* 显眼 CONCEPT CASE 标签 */}
                <span
                  className="mb-6 inline-block border border-brand-gold bg-[#efe7d9] px-3 py-1 text-brand-gold"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontWeight: 700
                  }}
                >
                  {t(c.villaSection.conceptLabel, locale)}
                </span>
                <p
                  className="text-brand-pine-dark/85 max-w-[560px]"
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                    lineHeight: 1.55
                  }}
                >
                  {t(c.villaSection.imageAlt, locale)}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={700}>
            <Link
              href={c.villaSection.viewAllUrl}
              className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              {t(c.villaSection.viewAllLabel, locale)}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 — Residential References */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.residentialSection.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.residentialSection.h2, locale)}
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 mb-16 max-w-[840px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              {t(c.residentialSection.intro, locale)}
            </p>
          </Reveal>

          {/* Mosaic 网格 4 张 */}
          <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {c.residentialSection.images.map((img, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <div className="relative aspect-square w-full overflow-hidden bg-brand-pine-dark/5">
                  <img src={img.src} alt={t(img.alt, locale)} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={900}>
            <Link
              href={c.residentialSection.viewAllUrl}
              className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              {t(c.residentialSection.viewAllLabel, locale)}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 04 — China-to-Ghana Supply Process */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t(c.supplyProcessSection.eyebrow, locale)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(c.supplyProcessSection.h2, locale)}
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 mb-16 max-w-[840px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              {t(c.supplyProcessSection.intro, locale)}
            </p>
          </Reveal>

          {/* 4 阶段图（aspect-[4/5] 竖向） */}
          <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {c.supplyProcessSection.images.map((img, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <figure>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-pine-dark/5">
                    <img src={img.src} alt={t(img.alt, locale)} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <figcaption
                    className="mt-3 text-brand-gold"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 700
                    }}
                  >
                    {`0${i + 1}`} · {t(img.stage, locale)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={900}>
            <Link
              href={c.supplyProcessSection.viewAllUrl}
              className="text-brand-gold hover:text-brand-pine-dark transition-colors inline-flex items-center"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              {t(c.supplyProcessSection.viewAllLabel, locale)}
            </Link>
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

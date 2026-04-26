import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { solutionsContent } from "@/content/solutions";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Solutions by Space | Decoropic",
      zh: "按空间分类的解决方案 | Decoropic"
    },
    description: {
      en: "Every space tells a different story. Decoropic's interior solutions for living rooms, dining, kitchens, studies, family areas, outdoor spaces, and entrance halls in Ghana villas.",
      zh: "每个空间都讲述不同的故事。Decoropic 为加纳别墅提供客厅、餐厅、厨房、书房、家庭区、户外、玄关的室内解决方案。"
    },
    path: "/solutions",
    locale
  });
}

export default async function SolutionsPage() {
  const locale = await getLocale();
  const c = solutionsContent;

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#efe7d9] pt-32 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-8 h-16 w-16 border-t border-r border-brand-gold/50 sm:right-12 sm:top-12 lg:top-16"
        />
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-[2px] w-16 bg-brand-gold" />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
                {t(c.hero.eyebrow, locale)}
              </span>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <h1
              className="mt-8 text-brand-pine-dark max-w-[1000px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em"
              }}
            >
              {t(c.hero.title, locale)}
            </h1>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-10 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.4} />
            </div>
          </Reveal>
          <Reveal delay={700}>
            <p
              className="mt-12 text-brand-gold max-w-[820px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontStyle: "italic", lineHeight: 1.5, fontWeight: 400 }}
            >
              &quot;{t(c.hero.pullQuote, locale)}&quot;
            </p>
          </Reveal>
          <Reveal delay={900}>
            <p className="mt-6 text-brand-pine-dark/60 text-sm">{t(c.hero.pullQuoteAuthor, locale)}</p>
          </Reveal>
        </div>
      </section>

      {/* GRID INTRO + ASYMMETRIC LAYOUT */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-4" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              {t(c.gridIntro.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-16 max-w-[1100px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.8vw, 3rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              {t(c.gridIntro.title, locale)}
            </h2>
          </Reveal>

          {/* 4 等列稳定网格 — Hook 卡占 2 列制造视觉重点 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {c.spaces.map((space, i) => (
              <Reveal key={space.slug} delay={i * 80}>
                <Link
                  href={`/solutions/${space.slug}`}
                  className="group relative block rounded-3xl bg-transparent border border-brand-pine-dark/10 p-8 hover:bg-brand-pine-dark hover:border-brand-pine-dark transition-all duration-500 min-h-[280px] flex flex-col justify-between"
                >
                  {/* Geometric icon (top-left, gold) */}
                  <div
                    className="text-brand-gold group-hover:text-brand-gold mb-6"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <svg viewBox="0 0 60 60" width="60" height="60" dangerouslySetInnerHTML={{ __html: space.iconSvg }} />
                  </div>
                  <div>
                    <p
                      className="text-brand-gold/60 group-hover:text-brand-gold/80 mb-3"
                      style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.1em" }}
                    >
                      {space.number}
                    </p>
                    <h3
                      className="text-brand-pine-dark group-hover:text-white mb-3"
                      style={{ fontFamily: "var(--serif)", fontSize: space.cardSize === "large" ? "2rem" : "1.5rem", fontWeight: 700, lineHeight: 1.15 }}
                    >
                      {t(space.cardTitle, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/65 group-hover:text-white/75 text-sm leading-6 max-w-[280px]">
                      {t(space.cardTagline, locale)}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-brand-pine-dark/40 group-hover:text-brand-gold transition-colors">
                    <span className="text-xs uppercase tracking-wider">View</span>
                    <ChevronRight size={14} />
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Hook 卡 — small slot, dark theme */}
            <Reveal delay={c.spaces.length * 80}>
              <Link
                href="/#estimator"
                className="group relative block rounded-3xl bg-brand-pine-dark p-8 text-white hover:bg-brand-gold hover:text-brand-pine-dark transition-all duration-500 min-h-[280px] flex flex-col justify-between sm:col-span-2 lg:col-span-2"
              >
                <Sparkles size={28} className="text-brand-gold group-hover:text-brand-pine-dark mb-4" strokeWidth={1.5} />
                <div>
                  <h3
                    className="mb-3"
                    style={{ fontFamily: "var(--serif)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.15 }}
                  >
                    {t(c.hookCard.title, locale)}
                  </h3>
                  <p className="text-white/75 group-hover:text-brand-pine-dark/70 text-sm leading-6">
                    {t(c.hookCard.body, locale)}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-brand-gold group-hover:text-brand-pine-dark">
                  <span className="text-xs uppercase tracking-wider font-semibold">{t(c.hookCard.ctaLabel, locale)}</span>
                  <ChevronRight size={14} />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-pine-dark py-24 lg:py-32 text-white">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-6" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              {t(c.bottomCta.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mb-8 max-w-[800px]" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t(c.bottomCta.title, locale)}
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-white/85 max-w-[700px] text-lg leading-relaxed mb-10">
              {t(c.bottomCta.body, locale)}
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="flex flex-wrap gap-4">
              <Link href="/#estimator" className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors">
                <span>{t(c.bottomCta.primaryCtaLabel, locale)}</span>
                <ChevronRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-white hover:border-white hover:bg-white/5 transition-colors">
                <span>{t(c.bottomCta.secondaryCtaLabel, locale)}</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

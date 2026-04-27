import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { solutionsContent } from "@/content/solutions";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

export async function generateStaticParams() {
  return solutionsContent.spaces.map((s) => ({ space: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ space: string }>;
}): Promise<Metadata> {
  const { space } = await params;
  const data = solutionsContent.spaces.find((s) => s.slug === space);
  const locale = await getLocale();

  if (!data) {
    return buildMetadata({
      title: { en: "Solutions | Decoropic", zh: "解决方案 | Decoropic" },
      description: {
        en: "Explore Decoropic's solutions by space.",
        zh: "浏览 Decoropic 按空间分类的解决方案。"
      },
      path: "/solutions",
      locale
    });
  }

  return buildMetadata({
    title: {
      en: `${data.heroTitle.en} | Solutions | Decoropic`,
      zh: `${data.heroTitle.zh} | 解决方案 | Decoropic`
    },
    description: data.heroQuote,
    path: `/solutions/${data.slug}`,
    locale
  });
}

export default async function SpaceDetailPage({
  params
}: {
  params: Promise<{ space: string }>;
}) {
  const { space } = await params;
  const data = solutionsContent.spaces.find((s) => s.slug === space);
  if (!data) notFound();

  const locale = await getLocale();

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#efe7d9] pt-32 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-8 h-16 w-16 border-t border-r border-brand-gold/50 sm:right-12 sm:top-12"
        />
        <div className="container-wide">
          <Reveal>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-brand-pine-dark/60 hover:text-brand-gold text-xs uppercase tracking-widest mb-8"
            >
              <ChevronLeft size={14} />
              <span>Solutions / {data.number} {t(data.heroTitle, locale)}</span>
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <p
              className="text-brand-gold mb-6"
              style={{ fontFamily: "var(--serif)", fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}
            >
              {data.number}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <h1
              className="text-brand-pine-dark max-w-[900px] mb-8"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}
            >
              {t(data.heroTitle, locale)}
            </h1>
          </Reveal>
          <Reveal delay={500}>
            <div className="max-w-[220px] mb-10">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.4} />
            </div>
          </Reveal>
          <Reveal delay={700}>
            <p
              className="text-brand-gold max-w-[760px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontStyle: "italic", lineHeight: 1.5 }}
            >
              &quot;{t(data.heroQuote, locale)}&quot;
            </p>
          </Reveal>
        </div>
      </section>

      {/* 01 STORY */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-2" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              01 — Story
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-8 max-w-[800px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              {t(data.story.title, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-brand-pine-dark/85 max-w-[760px] mb-10 text-lg leading-relaxed">
              {t(data.story.body, locale)}
            </p>
          </Reveal>
          <Reveal delay={500}>
            <ul className="space-y-4 max-w-[760px]">
              {data.story.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-brand-pine-dark/85 leading-relaxed">
                  <span className="text-brand-gold mt-1">✦</span>
                  <span>{t(h, locale)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 SPECS */}
      <section className="bg-[#efe7d9] py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-2" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              02 — Specs
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-brand-pine-dark mb-12" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}>
              What we work with.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.specs.map((spec, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="rounded-2xl border border-brand-pine-dark/10 bg-white/60 p-6">
                  <h3
                    className="text-brand-pine-dark mb-3"
                    style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700 }}
                  >
                    {t(spec.category, locale)}
                  </h3>
                  <p className="text-brand-gold text-sm font-semibold mb-3">{t(spec.sources, locale)}</p>
                  <p className="text-brand-pine-dark/75 text-sm leading-6">{t(spec.details, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 PROCESS */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-2" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              03 — Process
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-brand-pine-dark mb-12" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}>
              How we shape it.
            </h2>
          </Reveal>
          <ol className="space-y-6 max-w-[840px]">
            {data.process.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <li className="flex gap-6 items-start">
                  <span
                    className="text-brand-gold flex-none"
                    style={{ fontFamily: "var(--serif)", fontSize: "1.875rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className="text-brand-pine-dark text-lg font-semibold">{t(step.label, locale)}</p>
                    <p className="text-brand-pine-dark/55 text-sm mt-1">{t(step.timing, locale)}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 HOW IT FEELS */}
      <section className="bg-[#efe7d9] py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-2" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              04 — How it feels
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-brand-pine-dark mb-12" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}>
              How it feels.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="max-w-[800px]">
              {t(data.howItFeels, locale).split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-brand-pine-dark/85 leading-relaxed text-lg mb-6"
                  style={{ fontFamily: "var(--serif)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 DESIGN CONCEPT */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-2" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              05 — Design Concept
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-brand-pine-dark mb-12" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}>
              {locale === "zh" ? "设计理念" : "The concept behind it."}
            </h2>
          </Reveal>
          <div className="max-w-[800px]">
            <Reveal delay={300}>
              <p
                className="text-brand-pine-dark mb-10 lg:mb-12"
                style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)", lineHeight: 1.4 }}
              >
                {t(data.designConcept.theme, locale)}
              </p>
            </Reveal>
            <Reveal delay={500}>
              <p className="text-brand-pine-dark/85 mb-10 lg:mb-12" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                {t(data.designConcept.summary, locale)}
              </p>
            </Reveal>
            <Reveal delay={700}>
              <div className="border-l-2 border-brand-gold pl-6 lg:pl-8">
                <p
                  className="text-brand-pine-dark"
                  style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)", lineHeight: 1.5 }}
                >
                  {t(data.designConcept.coreIdea, locale)}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 INVESTMENT */}
      <section className="bg-[#efe7d9] py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-2" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              06 — Investment
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-brand-pine-dark mb-4" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}>
              What it typically takes.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-brand-pine-dark/75 mb-8">{t(data.investment.sqmLabel, locale)}</p>
          </Reveal>
          <div className="space-y-3 max-w-[700px] mb-12">
            {[data.investment.standard, data.investment.premium, data.investment.luxury].map((tier, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <div className="rounded-2xl border border-brand-pine-dark/10 bg-white px-6 py-4 text-brand-pine-dark">
                  {t(tier, locale)}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={800}>
            <Link
              href="/#estimator"
              className="inline-flex items-center gap-3 rounded-full bg-brand-pine-dark px-8 py-4 text-white hover:bg-brand-pine-dark/90 transition-colors"
            >
              <span>Open the 11-step estimator</span>
              <ChevronRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-pine-dark py-24 lg:py-32 text-white">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-6" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              ━━ Ready
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="mb-10 max-w-[800px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              Ready to shape your {t(data.cardTitle, locale).toLowerCase()}?
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#estimator"
                className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors"
              >
                <span>Estimate your project</span>
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 hover:border-white hover:bg-white/5 transition-colors"
              >
                <span>See other spaces</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

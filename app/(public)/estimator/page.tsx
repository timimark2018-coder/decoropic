import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/content";
import { estimatorContent } from "@/content/estimator";
import { HomeEstimatorHook } from "@/components/home/home-estimator-hook";
import { Reveal, HandDrawnLine } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Project Budget Estimator — Interior & Material Packages",
      zh: "项目预算测算器 — 室内与材料配套"
    },
    description: {
      en: "Answer eleven questions for an early budget range on your interior or material package — finish level, scope and delivery timing. No contact details needed.",
      zh: "回答十一个问题，获得室内或材料配套项目的初步预算区间，涵盖完成标准、范围与交付时间。"
    },
    path: "/estimator",
    locale
  });
}

// 独立的 /estimator 路由。
// 此前测算器只以首页 #estimator 锚点存在，问题文本在客户端 JS 里，
// HTML 中一句都搜不到 —— 站点最核心的互动工具因此完全不被索引。
export default async function EstimatorRoute() {
  const locale = await getLocale();
  const { hero, questionsHeading, questionsIntro, questions, scope, disclaimer } = estimatorContent;

  return (
    <>
      <section className="bg-[#f7f3ec] pt-32 pb-16 lg:pt-40">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-[2px] w-16 bg-brand-gold" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase"
                }}
              >
                {locale === "zh" ? "预算测算" : "Budget estimator"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h1
              className="mt-8 max-w-[860px] text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em"
              }}
            >
              {t(hero.title, locale)}
            </h1>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.4} />
            </div>
          </Reveal>

          <Reveal delay={560}>
            <p className="mt-8 max-w-[760px] text-base leading-[1.8] text-brand-pine-dark/75">
              {t(hero.subtitle, locale)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 测算器本体 */}
      <section className="bg-[#f7f3ec] pb-24 lg:pb-32">
        <div className="container-wide">
          <HomeEstimatorHook locale={locale} />
        </div>
      </section>

      {/* 问题清单 —— 页面可见内容，同时也是这一页可被索引的实体 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <h2
              className="text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              {t(questionsHeading, locale)}
            </h2>
            <p className="mt-6 max-w-[520px] text-sm leading-[1.8] text-brand-pine-dark/70">
              {t(questionsIntro, locale)}
            </p>
          </div>

          <ol className="space-y-4">
            {questions.map((question, index) => (
              <li key={index} className="flex gap-4 border-b border-brand-pine-dark/10 pb-4">
                <span className="mt-0.5 shrink-0 text-xs font-bold tabular-nums text-brand-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-[1.6] text-brand-pine-dark/85">
                  {t(question, locale)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f7f3ec] py-20 lg:py-24">
        <div className="container-wide max-w-[820px]">
          <h2
            className="text-brand-pine-dark"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em"
            }}
          >
            {t(scope.heading, locale)}
          </h2>
          <p className="mt-6 text-base leading-[1.85] text-brand-pine-dark/80">
            {t(scope.body, locale)}
          </p>
          <p className="mt-8 border-l-2 border-brand-gold/60 pl-4 text-sm italic leading-[1.7] text-brand-pine-dark/60">
            {t(disclaimer, locale)}
          </p>
        </div>
      </section>
    </>
  );
}

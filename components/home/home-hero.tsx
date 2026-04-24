import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";
import { IconArrowDown } from "@/components/ui/icon";

type Props = {
  locale: Locale;
};

// Home Hero v2.5 — Breakout card (flush to the left page edge)
// Changes from v2.4:
//   - Grid layout removed. Card is now a free-positioned element anchored to
//     the page's left edge via responsive left margin (4vw / 6vw / 10vw).
//   - Container-wide wrapper removed around main card to break the 1200px
//     centering constraint (true "breakout layout" per editorial magazine syntax).
//   - Right side of viewport left completely untouched — image breathes fully
//     from card's right edge all the way to the right viewport edge.
//   - All other v2.4 design preserved (frosted ivory card, type sizes, 6-stage
//     entrance, "Grounded in Accra", pine-dark + gold palette, scroll cue).
export function HomeHero({ locale }: Props) {
  const { hero } = homeContent;

  const scrollLabel = locale === "zh" ? "向下滚动" : "Scroll";

  // Hero title — overridden here (not from content/home.ts) to introduce
  // "Grounded in Accra" positioning without a content.ts migration.
  const titleLine1 = locale === "zh" ? "一站式" : "One-stop";
  const titleLine2 = locale === "zh" ? "室内装饰" : "interior solutions";
  const titleLine3 = locale === "zh" ? "深耕阿克拉" : "Grounded in Accra.";

  return (
    <section
      id="home-hero"
      className="relative isolate w-full overflow-hidden bg-[#efe7d9]"
    >
      {/* Background photograph — zero overlay, full clarity */}
      <div
        className="absolute inset-0 editorial-hero-zoom"
        style={{
          backgroundImage: "url('/images/home/home-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat"
        }}
        aria-hidden
      />

      {/* Content — 90svh for strong immersion */}
      <div className="relative z-10 flex min-h-[90svh] flex-col justify-between pt-28 pb-12 sm:pt-32 lg:pt-40 lg:pb-16">
        {/* Top spacer */}
        <div aria-hidden />

        {/* Main card — flush to the left edge (breakout layout) */}
        <div
          className="relative rounded-[6px] p-8 sm:p-10 lg:p-12 w-full max-w-[460px] ml-[4vw] sm:ml-[6vw] lg:ml-[8vw] mr-auto"
          style={{
            background: "rgba(239, 231, 217, 0.72)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)"
          }}
        >
          {/* Eyebrow — strengthened */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-20 bg-brand-gold" />
              <span
                className="text-brand-gold"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase"
                }}
              >
                {t(hero.eyebrow, locale)}
              </span>
            </div>
          </Reveal>

          {/* Line 1 — anchor word in pine-dark */}
          <Reveal delay={180}>
            <h1
              className="block text-brand-pine-dark mt-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                WebkitTextStroke: "0.4px rgba(174, 146, 96, 0.3)"
              }}
            >
              {titleLine1}
            </h1>
          </Reveal>

          {/* Line 2 — connector in gold italic */}
          <Reveal delay={460}>
            <p
              className="block text-brand-gold mt-1"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.5rem, 3.5vw, 3.25rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.02em"
              }}
            >
              {titleLine2}
            </p>
          </Reveal>

          {/* Hand-drawn gold wave line */}
          <Reveal delay={740}>
            <div className="mt-5 max-w-[180px]">
              <HandDrawnLine
                variant="wave"
                height={20}
                color="var(--brand-gold)"
                strokeWidth={1.4}
              />
            </div>
          </Reveal>

          {/* Line 3 — final anchor phrase */}
          <Reveal delay={920}>
            <h2
              className="block text-brand-pine-dark mt-3"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 5.5vw, 5rem)",
                fontWeight: 800,
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                WebkitTextStroke: "0.4px rgba(174, 146, 96, 0.35)"
              }}
            >
              {titleLine3}
            </h2>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={1200}>
            <p className="mt-8 text-sm leading-[1.7] text-brand-pine-dark/90 sm:text-base sm:leading-[1.75]">
              {t(hero.subtitle, locale)}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={1400}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-3">
              {hero.ctas.map((cta, idx) => (
                <a
                  key={cta.label.en}
                  href={cta.href}
                  className="group relative inline-flex items-center gap-2 text-sm font-medium text-brand-pine-dark transition-colors duration-200 hover:text-brand-gold"
                >
                  <span className="relative">
                    {t(cta.label, locale)}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                  </span>
                  {idx === 0 ? (
                    <span className="text-brand-gold transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  ) : null}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom — scroll cue (wrapped in container-wide so it aligns with site-wide footer text) */}
        <div className="container-wide">
          <Reveal delay={1600}>
            <div className="flex items-center gap-3 text-brand-pine-dark/60">
              <IconArrowDown
                size={16}
                strokeWidth={1.2}
                className="translate-y-[1px] animate-bounce [animation-duration:2.4s]"
              />
              <span
                className="uppercase text-brand-pine-dark/70"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.32em",
                  fontWeight: 600
                }}
              >
                {scrollLabel}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Corner gold accent — mirrors About Hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-24 h-20 w-20 border-t border-r border-brand-gold/60 sm:right-12 sm:top-28 lg:top-32"
      />
    </section>
  );
}

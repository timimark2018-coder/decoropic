import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HomeEstimatorHook } from "./home-estimator-hook";
import { HandDrawnLine, Reveal } from "@/components/ui";

type HomeEstimatorSectionProps = {
  locale: Locale;
};

// Home Estimator Section — Editorial outer shell (Battle 2e)
// Design philosophy:
//   - This is a CHROME UPGRADE only. The EstimatorExperience component
//     (647 lines, 2 API endpoints, form state, analytics) is production
//     critical and untouched.
//   - Section gains Editorial vocabulary: eyebrow, Playfair title,
//     hand-drawn gold wave, italic gold subtitle, corner accent.
//   - The inner card-surface style of EstimatorExperience is preserved
//     intentionally — the visual contrast between the warm Editorial
//     container and the white "tool card" inside reads as:
//       "this is the interactive instrument embedded in the narrative"
export function HomeEstimatorSection({ locale }: HomeEstimatorSectionProps) {
  const eyebrowText =
    locale === "zh" ? "别墅项目预算测算器" : "Villa project budget estimator";

  return (
    <section
      id="estimator"
      className="relative bg-[#f7f3ec] pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden scroll-mt-32"
    >
      {/* Corner gold accent — mirrors Hero / Brand Positioning /
          Why Choose Us / Our Services / Solutions by Space */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-8 h-16 w-16 border-t border-r border-brand-gold/50 sm:right-12 sm:top-12 lg:top-16"
      />

      <div className="container-wide">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 text-brand-gold">
            <span className="h-[2px] w-16 bg-brand-gold" />
            <span
              className="text-brand-gold"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              {eyebrowText}
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={180}>
          <h2
            className="mt-8 text-brand-pine-dark max-w-[820px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em"
            }}
          >
            {t(homeContent.estimator.title, locale)}
          </h2>
        </Reveal>

        {/* Hand-drawn gold wave line */}
        <Reveal delay={440}>
          <div className="mt-10 max-w-[220px]">
            <HandDrawnLine
              variant="wave"
              height={24}
              color="var(--brand-gold)"
              strokeWidth={1.4}
            />
          </div>
        </Reveal>

        {/* Subtitle — italic gold */}
        {homeContent.estimator.subtitle.en && (
          <Reveal delay={700}>
            <p
              className="mt-10 text-brand-gold max-w-[780px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.4,
                letterSpacing: "-0.005em"
              }}
            >
              {t(homeContent.estimator.subtitle, locale)}
            </p>
          </Reveal>
        )}

        {/* Fine-print note — kept as subtle slate text */}
        <Reveal delay={900}>
          <p className="mt-6 max-w-[780px] text-sm leading-[1.75] text-brand-pine-dark/60">
            {t(homeContent.estimator.note, locale)}
          </p>
        </Reveal>

        {/* HOOK Estimator — Battle 3 replacement */}
        <Reveal delay={1100}>
          <div className="mt-16 lg:mt-20">
            <HomeEstimatorHook locale={locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

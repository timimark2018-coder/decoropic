import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

type Props = {
  locale: Locale;
};

// Home Our Services v5.0 — Editorial vertical timeline
// Design philosophy:
//   - Vertical full-width timeline with a continuous gold vertical line
//     threading through all 6 service stages (01 -> 06).
//   - Distinct vocabulary from Why Choose Us v4.0:
//       * Why Choose Us = parallel 6 reasons (2fr:3fr horizontal grid)
//       * Our Services = linear 6 stages (vertical timeline)
//   - Large Playfair numerals (clamp 2rem-3.5rem) mark each stage.
//   - Title in uppercase small caps, letter-spacing wide, pine-dark.
//   - Body in pine-dark/75, segmented by hard stops for rhythm.
//   - Corner gold accent (top-right) mirrors Hero / Brand Positioning /
//     Why Choose Us.
//   - Progressive reveal: eyebrow, title, wave, subtitle, then each of
//     six stages staggered (180ms apart) to give the impression of a
//     flowing chain.
//   - Closing "endNote" under the timeline — a one-line reinforcement
//     that every project goes through every stage.
export function HomeOurServices({ locale }: Props) {
  const { services } = homeContent;

  return (
    <section
      id="home-our-services"
      className="relative bg-[#f7f3ec] pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden"
    >
      {/* Corner gold accent — mirrors Hero v2.5, Brand Positioning v3.0, Why Choose Us v4.0 */}
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
              {t(services.eyebrow, locale)}
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
            {t(services.title, locale)}
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
        <Reveal delay={700}>
          <p
            className="mt-10 text-brand-gold"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.3,
              letterSpacing: "-0.01em"
            }}
          >
            {t(services.subtitle, locale)}
          </p>
        </Reveal>

        {/* Timeline — 6 stages with continuous gold vertical line */}
        <div className="relative mt-20 lg:mt-28">
          {/* Continuous gold vertical line — positioned on left edge of timeline */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-[22px] top-0 w-px bg-brand-gold/40 sm:left-[32px] lg:left-[56px]"
          />

          {/* Stage items */}
          <div className="flex flex-col gap-14 lg:gap-20">
            {services.items.map((item, idx) => {
              const number = String(idx + 1).padStart(2, "0");
              return (
                <Reveal key={item.title.en} delay={900 + idx * 180}>
                  <div className="relative flex items-start gap-6 sm:gap-10 lg:gap-16">
                    {/* Number column — overlaps the vertical line */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="flex items-center justify-center bg-[#f7f3ec]"
                        style={{
                          width: "clamp(44px, 6vw, 112px)",
                          minHeight: "clamp(44px, 6vw, 80px)",
                          paddingLeft: "0",
                          paddingRight: "0"
                        }}
                      >
                        <span
                          className="text-brand-gold leading-none"
                          style={{
                            fontFamily: "var(--serif)",
                            fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em"
                          }}
                        >
                          {number}
                        </span>
                      </div>
                    </div>

                    {/* Content column — 2 columns on lg: title left, body right */}
                    <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
                      {/* Title */}
                      <h3
                        className="text-brand-pine-dark pt-2"
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(1.25rem, 2vw, 1.875rem)",
                          fontWeight: 700,
                          lineHeight: 1.25,
                          letterSpacing: "-0.015em"
                        }}
                      >
                        {t(item.title, locale)}
                      </h3>

                      {/* Body */}
                      <p className="text-sm leading-[1.8] text-brand-pine-dark/75 sm:text-base sm:leading-[1.85] lg:pt-3">
                        {t(item.body, locale)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* End note — one-line reinforcement under timeline */}
        <Reveal delay={900 + 6 * 180 + 200}>
          <div className="mt-20 lg:mt-28 max-w-[640px]">
            <div className="h-px w-20 bg-brand-gold/60" />
            <p
              className="mt-6 text-brand-pine-dark/80"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.6,
                letterSpacing: "-0.005em"
              }}
            >
              {t(services.endNote, locale)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

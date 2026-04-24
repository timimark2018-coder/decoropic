import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

type Props = {
  locale: Locale;
};

// Home Why Choose Us v4.0 — Editorial Breakout with numbered items
// Design philosophy:
//   - Breakout 2fr:3fr: left narrative anchor, right numbered items list.
//   - Matches Brand Positioning v3.0 grid + eyebrow + gold-line + corner accent vocabulary.
//   - Each of 6 items uses numeric prefix (01-06) in Playfair + gold line
//     + title in pine-dark + body in pine-dark/75.
//   - Copy rewritten as counter-narrative against the "just a supplier" perception,
//     extending the Brand Positioning tone of voice.
//   - Left anchor shows oversized title + hand-drawn wave + italic supporting subtitle.
//   - Our Services has been extracted into a separate component (home-our-services.tsx).
export function HomeWhyChooseUs({ locale }: Props) {
  const { whyChooseUs } = homeContent;

  return (
    <section
      id="home-why-choose-us"
      className="relative bg-[#efe7d9] pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden"
    >
      {/* Corner gold accent — mirrors Brand Positioning v3.0 */}
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
              {t(whyChooseUs.eyebrow, locale)}
            </span>
          </div>
        </Reveal>

        {/* Main grid — 2fr narrative anchor : 3fr numbered items */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Left column — narrative anchor */}
          <div className="max-w-[540px]">
            {/* Title */}
            <Reveal delay={120}>
              <h2
                className="text-brand-pine-dark"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em"
                }}
              >
                {t(whyChooseUs.title, locale)}
              </h2>
            </Reveal>

            {/* Hand-drawn gold wave line */}
            <Reveal delay={280}>
              <div className="mt-10 max-w-[200px]">
                <HandDrawnLine
                  variant="wave"
                  height={20}
                  color="var(--brand-gold)"
                  strokeWidth={1.4}
                />
              </div>
            </Reveal>

            {/* Subtitle / supporting statement */}
            <Reveal delay={440}>
              <p
                className="mt-10 text-brand-pine-dark/85"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em"
                }}
              >
                {t(whyChooseUs.subtitle, locale)}
              </p>
            </Reveal>
          </div>

          {/* Right column — 6 numbered items */}
          <div className="flex flex-col gap-10">
            {whyChooseUs.items.map((item, idx) => {
              const number = String(idx + 1).padStart(2, "0");
              return (
                <Reveal key={item.title.en} delay={320 + idx * 140}>
                  <div className="flex items-start gap-6">
                    {/* Number column */}
                    <div className="flex flex-col items-start pt-1">
                      <span
                        className="text-brand-gold leading-none"
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "1.375rem",
                          fontWeight: 700,
                          letterSpacing: "-0.02em"
                        }}
                      >
                        {number}
                      </span>
                      <span className="mt-2 h-px w-8 bg-brand-gold/60" />
                    </div>

                    {/* Content column */}
                    <div className="flex-1">
                      <h3
                        className="text-brand-pine-dark"
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          letterSpacing: "-0.015em"
                        }}
                      >
                        {t(item.title, locale)}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.75] text-brand-pine-dark/75 sm:text-base sm:leading-[1.8]">
                        {t(item.body, locale)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { Reveal } from "@/components/ui";

type Props = { locale: Locale };

export function AboutApproach({ locale }: Props) {
  const { approach } = aboutContent;

  return (
    <section id="approach" className="section-rhythm-lg">
      <div className="container-wide">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-eyebrow-lg">{t(approach.eyebrow, locale)}</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2
              className="mt-6 text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em"
              }}
            >
              {t(approach.title, locale)}
            </h2>
          </Reveal>
        </div>

        {/* Numbered list — vertical narrative, oversized gold numerals */}
        <ol className="mx-auto mt-24 max-w-5xl space-y-20 lg:space-y-24">
          {approach.principles.map((principle, idx) => (
            <Reveal key={principle.number} delay={idx * 80}>
              <li className="group grid grid-cols-[5rem_1fr] gap-6 border-t border-brand-gold/20 pt-10 sm:grid-cols-[9rem_1fr] sm:gap-12 sm:pt-12 md:grid-cols-[14rem_1fr]">
                <span
                  className="text-brand-gold leading-[0.85] transition-colors duration-500 group-hover:text-brand-pine"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(4rem, 9vw, 7.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.05em"
                  }}
                >
                  {principle.number}
                </span>
                <div className="max-w-2xl">
                  <h3
                    className="text-brand-pine-dark"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15
                    }}
                  >
                    {t(principle.heading, locale)}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.85] text-brand-pine/75">
                    {t(principle.body, locale)}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

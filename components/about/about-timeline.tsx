import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { Reveal } from "@/components/ui";

type Props = { locale: Locale };

export function AboutTimeline({ locale }: Props) {
  const { timeline } = aboutContent;

  return (
    <section id="timeline" className="section-rhythm-lg bg-gradient-to-b from-transparent via-brand-ivory/70 to-transparent">
      <div className="container-wide">
        {/* Centered mega title */}
        <Reveal>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-eyebrow-lg">{t(timeline.eyebrow, locale)}</span>
              <span className="h-px w-8 bg-brand-gold" />
            </div>
            <h2
              className="max-w-4xl text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.035em"
              }}
            >
              <span className="block">{t(timeline.title.lineA, locale)}</span>
              <span className="block italic font-normal text-brand-pine">
                {t(timeline.title.lineB, locale)}
              </span>
              <span className="block">{t(timeline.title.lineC, locale)}</span>
            </h2>
          </div>
        </Reveal>

        {/* Vertical narrative timeline */}
        <ol className="relative mx-auto mt-20 max-w-5xl">
          {timeline.milestones.map((milestone, idx) => {
            const isLast = idx === timeline.milestones.length - 1;
            return (
              <li key={milestone.year} className="relative">
                <Reveal delay={idx * 80}>
                  <div className="grid grid-cols-[7rem_1fr] gap-6 py-10 sm:grid-cols-[12rem_1fr] sm:gap-12 md:grid-cols-[16rem_1fr]">
                    {/* Year column — oversized gold, right-aligned */}
                    <div className="relative flex items-start justify-end">
                      <span
                        className="text-brand-gold leading-none"
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(3.25rem, 8vw, 7.5rem)",
                          fontWeight: 900,
                          letterSpacing: "-0.04em"
                        }}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    {/* Content column */}
                    <div className="relative border-l border-brand-gold/40 pl-8 sm:pl-10">
                      {/* Gold node */}
                      <span
                        aria-hidden
                        className="absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(174,146,96,0.18)]"
                      />
                      <h3
                        className="text-brand-pine-dark"
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(1.25rem, 2.4vw, 1.875rem)",
                          fontWeight: 700,
                          letterSpacing: "-0.015em"
                        }}
                      >
                        {t(milestone.title, locale)}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-[1.8] text-brand-pine/75 sm:text-[17px]">
                        {t(milestone.body, locale)}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Connecting hairline between nodes */}
                {!isLast ? (
                  <div
                    aria-hidden
                    className="absolute left-[7rem] top-0 hidden h-full w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/25 to-brand-gold/0 sm:left-[12rem] sm:block md:left-[16rem]"
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

type Props = { locale: Locale };

export function AboutPositioning({ locale }: Props) {
  const { positioning } = aboutContent;

  return (
    <section id="positioning" className="section-rhythm-lg">
      <div className="container-narrow">
        <Reveal>
          <div className="flex items-center gap-3 text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="text-eyebrow-lg">{t(positioning.eyebrow, locale)}</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="mt-8 text-brand-pine-dark"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 7vw, 5.25rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.035em"
            }}
          >
            <span className="block">{t(positioning.headline.lineA, locale)}</span>
            <span className="block italic font-normal text-brand-pine">
              {t(positioning.headline.lineB, locale)}
            </span>
            <span className="block">{t(positioning.headline.lineC, locale)}</span>
          </h2>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12 max-w-md">
            <HandDrawnLine variant="wave" height={32} />
          </div>
        </Reveal>

        <div className="mt-10 space-y-7">
          {positioning.paragraphs.map((paragraph, idx) => (
            <Reveal key={paragraph.en} delay={340 + idx * 120}>
              <p className="text-lg leading-[1.85] text-brand-pine/85 sm:text-xl sm:leading-[1.85]">
                {t(paragraph, locale)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

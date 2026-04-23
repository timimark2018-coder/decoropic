import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { EditorialImage, Reveal } from "@/components/ui";
import { IconArrowRight } from "@/components/ui/icon";

type Props = { locale: Locale };

export function AboutFounder({ locale }: Props) {
  const { founder } = aboutContent;

  return (
    <section id="founder" className="section-rhythm-lg overflow-x-clip">
      <div className="container-wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — portrait, breaks out to left edge */}
          <Reveal className="lg:col-span-7">
            <div className="edge-bleed-left lg:pr-6">
              <EditorialImage
                ratio="portrait"
                tone="warm-dark"
                label={t(founder.imageLabel, locale)}
                caption={locale === "zh" ? "摄影 : 待定" : "Captured by : TBD"}
                className="shadow-[0_40px_80px_rgba(20,30,28,0.35)]"
              />
            </div>
          </Reveal>

          {/* Right — story */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-brand-gold">
                <span className="h-px w-10 bg-brand-gold" />
                <span className="text-eyebrow-lg">{t(founder.eyebrow, locale)}</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2
                className="mt-6 text-brand-pine-dark"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 4.6vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em"
                }}
              >
                {t(founder.title, locale)}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {founder.paragraphs.map((paragraph, idx) => (
                <Reveal key={paragraph.en} delay={260 + idx * 140}>
                  <p className="text-base leading-[1.85] text-brand-pine/80 sm:text-[17px]">
                    {t(paragraph, locale)}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={560}>
              <div className="mt-10">
                <ActionLink href="/contact" locale={locale}>
                  <span className="flex items-center gap-2">
                    {t(founder.ctaLabel, locale)}
                    <IconArrowRight size={16} />
                  </span>
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

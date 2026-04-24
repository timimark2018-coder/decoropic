import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { HandDrawnLine, Reveal } from "@/components/ui";

type HomeFinalCtaProps = {
  locale: Locale;
};

// Home Final CTA — Editorial dark closer (Battle 2f)
// Design philosophy:
//   - The CLIMAX of the Home page scroll. The only dark-colored
//     section on the page — by design — so that after 7 ivory
//     Editorial canvases, the close lands with visual weight.
//   - Massive white Playfair headline (Hero-scale), gold eyebrow
//     and italic gold subhead against dark pine-dark ground.
//   - Three CTAs retained (Consultation / Send Drawings / WhatsApp)
//     with primary / secondary / ghost variants, keeping the light
//     tone override for the WhatsApp ghost button visible.
//   - Corner gold accent positioned on dark; stroke color adapts.
export function HomeFinalCta({ locale }: HomeFinalCtaProps) {
  const finalCtaEyebrow = locale === "zh" ? "最终行动" : "Final";

  return (
    <section
      id="home-final-cta"
      className="relative bg-brand-pine-dark pt-28 pb-28 lg:pt-36 lg:pb-36 overflow-hidden text-white"
    >
      {/* Corner gold accent — visible on dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-8 h-16 w-16 border-t border-r border-brand-gold/70 sm:right-12 sm:top-12 lg:top-16"
      />

      <div className="container-wide">
        {/* Eyebrow — gold on dark */}
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
              {finalCtaEyebrow}
            </span>
          </div>
        </Reveal>

        {/* Title — massive white Playfair, Hero-scale */}
        <Reveal delay={180}>
          <h2
            className="mt-8 text-white max-w-[980px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: "-0.03em"
            }}
          >
            {t(homeContent.finalCta.title, locale)}
          </h2>
        </Reveal>

        {/* Hand-drawn gold wave line */}
        <Reveal delay={460}>
          <div className="mt-10 max-w-[240px]">
            <HandDrawnLine
              variant="wave"
              height={24}
              color="var(--brand-gold)"
              strokeWidth={1.6}
            />
          </div>
        </Reveal>

        {/* Body — soft white */}
        <Reveal delay={720}>
          <p
            className="mt-10 max-w-[820px] text-white/85"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: "-0.005em"
            }}
          >
            {t(homeContent.finalCta.body, locale)}
          </p>
        </Reveal>

        {/* CTAs — primary / secondary / ghost variants */}
        <Reveal delay={980}>
          <div className="mt-12 flex flex-wrap gap-3">
            {homeContent.finalCta.ctas.map((cta, index) => (
              <ActionLink
                key={cta.label.en}
                href={cta.href}
                variant={index === 0 ? "primary" : index === 1 ? "secondary" : "ghost"}
                className={index === 2 ? "text-white ring-white/25 hover:bg-white/10" : ""}
                locale={locale}
              >
                {t(cta.label, locale)}
              </ActionLink>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";
import { ActionLink } from "@/components/shared/action-link";
import {
  Home as HomeIcon,
  Building,
  Building2,
  Briefcase,
  UtensilsCrossed,
  Store,
  type LucideIcon
} from "lucide-react";

type Props = {
  locale: Locale;
};

// Home Solutions by Space v6.0 — Editorial space-type tease
// Design philosophy:
//   - Home page is a curated tease — six space types shown at a glance,
//     each with a one-line quote in the owner's voice, then a decisive
//     CTA to the Solutions page where full playbooks live.
//   - Distinct from Why Choose Us (parallel reasons) and Our Services
//     (linear timeline): this is a 3x2 icon grid with visual density.
//   - Gold line-drawn icons (lucide-react, stroke 1.4) give the page
//     its first non-typographic visual moment.
//   - Large Playfair title, italic gold subtitle, hand-drawn gold wave,
//     corner accent — same Editorial vocabulary as Hero / Brand Positioning /
//     Why Choose Us / Our Services.
//   - Primary CTA "Explore Solutions" routes to /solutions for full depth.
const iconMap: Record<string, LucideIcon> = {
  Home: HomeIcon,
  Building,
  Building2,
  Briefcase,
  UtensilsCrossed,
  Store
};

export function HomeSolutionsBySpace({ locale }: Props) {
  const { solutionsBySpace } = homeContent;

  return (
    <section
      id="home-solutions-by-space"
      className="relative bg-[#efe7d9] pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden"
    >
      {/* Corner gold accent */}
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
              {t(solutionsBySpace.eyebrow, locale)}
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
            {t(solutionsBySpace.title, locale)}
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
            {t(solutionsBySpace.subtitle, locale)}
          </p>
        </Reveal>

        {/* 3x2 space-type grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {solutionsBySpace.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? HomeIcon;
            const number = String(idx + 1).padStart(2, "0");
            return (
              <Reveal key={item.title.en} delay={900 + idx * 120}>
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="text-brand-gold">
                    <Icon size={48} strokeWidth={1.4} />
                  </div>

                  {/* Number */}
                  <span
                    className="mt-6 text-brand-gold"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em"
                    }}
                  >
                    {number}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-3 text-brand-pine-dark"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.25rem, 1.8vw, 1.625rem)",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: "-0.015em"
                    }}
                  >
                    {t(item.title, locale)}
                  </h3>

                  {/* Quote — italic pine-dark */}
                  <p
                    className="mt-4 text-brand-pine-dark/75"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      fontStyle: "italic",
                      lineHeight: 1.5,
                      letterSpacing: "-0.005em"
                    }}
                  >
                    {t(item.quote, locale)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Primary CTA + tagline */}
        <Reveal delay={900 + 6 * 120 + 200}>
          <div className="mt-20 flex flex-col items-center gap-6 lg:mt-28">
            <ActionLink
              href={solutionsBySpace.ctaHref}
              variant="primary"
              locale={locale}
            >
              {t(solutionsBySpace.ctaLabel, locale)}
            </ActionLink>

            {/* Tagline under CTA */}
            <p
              className="text-center text-brand-pine-dark/75 max-w-[540px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1rem",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.6,
                letterSpacing: "-0.005em"
              }}
            >
              {t(solutionsBySpace.tagline, locale)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

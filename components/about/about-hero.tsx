import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { CountUp } from "@/components/ui/count-up";
import { IconArrowDown } from "@/components/ui/icon";

type Props = { locale: Locale };

export function AboutHero({ locale }: Props) {
  const { hero } = aboutContent;

  return (
    <section id="hero" className="relative isolate -mt-px w-full overflow-hidden bg-[#0b1612]">
      {/* Background "photograph" — dim warm-light architectural scene */}
      <div className="absolute inset-0 warm-shadow-image hero-parallax film-grain editorial-hero-zoom" aria-hidden />

      {/* Pine-green overlay for contrast */}
      <div className="absolute inset-0 pine-overlay" aria-hidden />

      {/* Top-left corner marker (Lucide sparkle + eyebrow) */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pt-28 pb-10 sm:px-12 lg:px-20 lg:pt-36">
        <div className="flex items-center gap-3 text-brand-gold/90 editorial-fade">
          <span className="h-px w-10 bg-brand-gold/70" />
          <span className="text-eyebrow-lg text-brand-gold">{t(hero.eyebrow, locale)}</span>
        </div>

        {/* Oversized numeral — Decoropic's opening move */}
        <div className="max-w-[1100px] pt-10">
          <div className="flex items-baseline gap-6 editorial-rise" style={{ animationDelay: "80ms" }}>
            <span
              className="text-brand-gold leading-none"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(7rem, 22vw, 14rem)",
                fontWeight: 900,
                letterSpacing: "-0.06em",
                lineHeight: 0.85
              }}
            >
              <CountUp to={hero.numeral.value} duration={1400} />
            </span>
            <span
              className="text-white/50"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "-0.02em"
              }}
            >
              /
            </span>
          </div>

          <div className="mt-2 space-y-1 editorial-rise" style={{ animationDelay: "220ms" }}>
            <div
              className="text-white"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(3.25rem, 8vw, 6.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 0.95
              }}
            >
              {t(hero.numeral.lineOne, locale)}
            </div>
            <div
              className="text-white/90"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "-0.01em",
                lineHeight: 1.05
              }}
            >
              {t(hero.numeral.lineTwo, locale)}
            </div>
            <div
              className="text-white"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.05
              }}
            >
              {t(hero.numeral.lineThree, locale)}
            </div>
          </div>

          <div
            className="mt-10 max-w-2xl border-l border-brand-gold/60 pl-6 text-white/70 editorial-rise"
            style={{ animationDelay: "460ms" }}
          >
            <p className="text-base leading-7 sm:text-lg sm:leading-8">{t(hero.subtitle, locale)}</p>
          </div>
        </div>

        {/* Bottom row — scroll cue + photographer credit */}
        <div className="flex items-end justify-between gap-4 pt-12 text-white/55">
          <div className="editorial-fade flex items-center gap-3" style={{ animationDelay: "700ms" }}>
            <IconArrowDown size={18} strokeWidth={1.2} className="translate-y-[1px] animate-bounce [animation-duration:2.4s]" />
            <span className="text-[11px] uppercase tracking-[0.32em]">{t(hero.scroll, locale)}</span>
          </div>
          <div className="hidden text-right text-[10px] uppercase tracking-[0.28em] sm:block">
            {t(hero.imageCaption, locale)}
            <div className="mt-1 text-white/35">{t(hero.imageLabel, locale)}</div>
          </div>
        </div>
      </div>

      {/* Corner gold accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 h-20 w-20 border-t border-r border-brand-gold/60 sm:right-12 sm:top-12"
      />
    </section>
  );
}

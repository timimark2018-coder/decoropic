import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { Reveal } from "@/components/ui";

type Props = { locale: Locale };

export function AboutPullQuote({ locale }: Props) {
  const { pullQuote } = aboutContent;

  return (
    <section id="quote" className="full-bleed relative overflow-hidden bg-brand-pine-dark">
      {/* Subtle inner vignette */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 18% 20%, rgba(174,146,96,0.18), transparent 55%), radial-gradient(ellipse at 82% 80%, rgba(28,56,51,0.7), transparent 60%)"
        }}
      />
      <div className="film-grain relative px-6 py-40 sm:px-12 lg:py-56">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span
              aria-hidden
              className="mx-auto block select-none text-brand-gold/80"
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(7rem, 18vw, 14rem)",
                lineHeight: 0.7,
                letterSpacing: "-0.04em"
              }}
            >
              &ldquo;
            </span>
          </Reveal>

          <Reveal delay={200}>
            <blockquote
              className="mt-2 text-white"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.6vw, 3.5rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.25,
                letterSpacing: "-0.015em"
              }}
            >
              {t(pullQuote.quote, locale)}
            </blockquote>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-14 flex items-center justify-center gap-4 text-brand-gold">
              <span className="h-px w-12 bg-brand-gold/80" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.38em]">
                — {t(pullQuote.attribution, locale)}
              </span>
              <span className="h-px w-12 bg-brand-gold/80" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

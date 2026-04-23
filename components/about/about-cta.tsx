import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { Reveal } from "@/components/ui";
import { IconArrowRight, IconMessageSquare } from "@/components/ui/icon";

type Props = { locale: Locale };

export function AboutCta({ locale }: Props) {
  const { cta } = aboutContent;

  return (
    <section id="cta" className="full-bleed relative overflow-hidden bg-brand-sand/90">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(174,146,96,0.18), transparent 55%), linear-gradient(180deg, #f7f2e9 0%, #efe6d6 100%)"
        }}
      />
      <div className="relative flex min-h-[90svh] flex-col items-center justify-center px-6 py-40 text-center sm:px-10 lg:py-48">
        <Reveal>
          <div className="flex items-center gap-3 text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="text-eyebrow-lg">{t(cta.eyebrow, locale)}</span>
            <span className="h-px w-10 bg-brand-gold" />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h2
            className="mt-10 max-w-5xl text-brand-pine-dark"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.04em"
            }}
          >
            <span className="block">{t(cta.titleLineA, locale)}</span>
            <span className="block italic font-normal text-brand-pine">
              {t(cta.titleLineB, locale)}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-10 max-w-2xl text-[17px] leading-[1.8] text-brand-pine/75 sm:text-lg">
            {t(cta.body, locale)}
          </p>
        </Reveal>

        <Reveal delay={460}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
            <ActionLink
              href={cta.primary.href}
              locale={locale}
              className="!px-10 !py-5 text-base font-semibold"
            >
              <span className="flex items-center gap-2">
                {t(cta.primary.label, locale)}
                <IconArrowRight size={18} />
              </span>
            </ActionLink>
            <ActionLink
              href={cta.secondary.href}
              locale={locale}
              variant="ghost"
              className="!px-8 !py-5 text-base font-semibold"
            >
              <span className="flex items-center gap-2">
                <IconMessageSquare size={16} />
                {t(cta.secondary.label, locale)}
              </span>
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

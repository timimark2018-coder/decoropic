import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { HandDrawnLine, Reveal } from "@/components/ui";

type HomeProductBridgeProps = {
  locale: Locale;
};

// Home Product Bridge — Editorial light-weight transition (Battle 2f)
// Design philosophy:
//   - A QUIET transition section: "if you're still exploring, the
//     product center is here." Intentionally under-designed vs
//     the surrounding Editorial peaks — this section must not
//     compete with Hero, Brand Positioning, or the Final CTA.
//   - Matches the Editorial system (eyebrow + Playfair + wave +
//     corner accent + ivory bg) but with smaller title scale and
//     plain body copy (no italic gold subtitle).
//   - Reveal cascade kept short (4 steps) — quick read, no drama.
export function HomeProductBridge({ locale }: HomeProductBridgeProps) {
  const productCenterEyebrow =
    locale === "zh" ? "产品中心" : "Product center";

  return (
    <section
      id="home-product-bridge"
      className="relative bg-[#efe7d9] pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden"
    >
      {/* Corner gold accent — system consistency */}
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
              {productCenterEyebrow}
            </span>
          </div>
        </Reveal>

        {/* Title — deliberately smaller than peak sections */}
        <Reveal delay={160}>
          <h2
            className="mt-8 text-brand-pine-dark max-w-[760px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em"
            }}
          >
            {t(homeContent.productCenterBridge.title, locale)}
          </h2>
        </Reveal>

        {/* Hand-drawn gold wave line (short) */}
        <Reveal delay={320}>
          <div className="mt-8 max-w-[180px]">
            <HandDrawnLine
              variant="wave"
              height={20}
              color="var(--brand-gold)"
              strokeWidth={1.4}
            />
          </div>
        </Reveal>

        {/* Body — plain prose, no italic gold */}
        <Reveal delay={500}>
          <p className="mt-8 max-w-[720px] text-base leading-[1.8] text-brand-pine-dark/75 sm:text-lg sm:leading-[1.85]">
            {t(homeContent.productCenterBridge.body, locale)}
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={680}>
          <div className="mt-10 flex flex-wrap gap-3">
            {homeContent.productCenterBridge.ctas.map((cta, index) => (
              <ActionLink
                key={cta.label.en}
                href={cta.href}
                variant={index === 0 ? "primary" : "secondary"}
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

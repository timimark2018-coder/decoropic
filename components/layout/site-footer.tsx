import Link from "next/link";
import type { Locale } from "@/content/types";
import { siteNavContent } from "@/content/site-nav";
import { t } from "@/lib/i18n/content";
import { siteConfig } from "@/lib/utils/constants";
import { HandDrawnLine } from "@/components/ui/hand-drawn-line";

type SiteFooterProps = {
  locale: Locale;
};

// Footer Editorial v2.0
// Design principles:
//   - No white cards, no rounded capsule buttons, no glass backdrop-blur.
//   - Type sits directly on a deep pine-dark ground, like a magazine endpiece.
//   - Oversized "Decoropic" wordmark acts as both brand signature and edge-breaker,
//     satisfying the "oversized + break-edge" Editorial laws.
//   - Asymmetric 2fr:1fr:1fr grid — brand is the star, nav and contact ride quiet.
//   - Two hand-drawn gold lines bookend the composition (top entry / bottom sign-off).
//   - Footer is the closing full stop of the page: no CTAs, no phone line,
//     no sub-brand narrative. Clients leave, they don't re-engage here.
export function SiteFooter({ locale }: SiteFooterProps) {
  const eyebrow = locale === "zh" ? "加纳，二十载深耕" : "Ghana, for twenty years";
  const tagline = locale === "zh" ? "室内装饰，落地加纳。" : "Interiors, delivered.";
  const navigateTitle = locale === "zh" ? "导航" : "Navigate";
  const reachOutTitle = locale === "zh" ? "联系" : "Reach out";
  const copyright = locale === "zh"
    ? `© ${new Date().getFullYear()} Decoropic. 版权所有.`
    : `© ${new Date().getFullYear()} Decoropic. All rights reserved.`;

  return (
    <footer className="relative overflow-hidden bg-brand-pine-dark text-brand-ivory">
      {/* Top hand-drawn gold line — entry divider */}
      <div className="container-wide pt-20 lg:pt-24">
        <HandDrawnLine variant="wave" strokeWidth={1} className="w-full opacity-40" />
      </div>

      {/* Main content */}
      <div className="container-wide relative pt-12 pb-8">
        {/* Eyebrow */}
        <p className="text-eyebrow-lg text-brand-gold mb-12">
          {eyebrow}
        </p>

        {/* Asymmetric grid: brand (2fr) : navigate (1fr) : reach out (1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16 items-start">

          {/* Column 1 — brand signature (oversized + edge-breaking) */}
          <div className="relative">
            {/* Oversized Decoropic wordmark */}
            {/* - Serif via inline var(--serif) to stay Footer-scoped per project convention */}
            {/* - Gold at 8% opacity reads as a watermark rather than text */}
            {/* - translate-y nudges it to graze/kiss the footer bottom edge = break-edge */}
            <h2
              aria-hidden="true"
              className="select-none pointer-events-none font-normal leading-[0.9] tracking-tight text-brand-gold/10"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(88px, 14vw, 180px)",
                transform: "translateY(12px)"
              }}
            >
              Decoropic
            </h2>
            {/* Readable tagline, Playfair, sits just below the giant mark */}
            <p
              className="text-2xl lg:text-3xl leading-snug mt-6 max-w-md text-brand-ivory"
              style={{ fontFamily: "var(--serif)" }}
            >
              {tagline}
            </p>
          </div>

          {/* Column 2 — Navigate (plain text links, no capsules) */}
          <nav aria-label={navigateTitle}>
            <p className="text-eyebrow-lg text-brand-gold mb-6">{navigateTitle}</p>
            <ul className="space-y-3">
              {siteNavContent.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-block text-base text-brand-ivory/70 transition-colors duration-200 hover:text-brand-gold"
                  >
                    {t(item.label, locale)}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Reach out (email + location only; no tel, no badge) */}
          <div>
            <p className="text-eyebrow-lg text-brand-gold mb-6">{reachOutTitle}</p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="group relative inline-block text-base text-brand-ivory/70 transition-colors duration-200 hover:text-brand-gold"
              >
                {siteConfig.contactEmail}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <p className="text-base text-brand-ivory/70">
                {siteConfig.contactLocation}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom hand-drawn gold line — sign-off divider */}
        <div className="mt-20 mb-6">
          <HandDrawnLine variant="wave" strokeWidth={1} className="w-full opacity-30" />
        </div>

        {/* Copyright */}
        <p className="text-xs uppercase tracking-[0.22em] text-brand-ivory/40">
          {copyright}
        </p>
      </div>
    </footer>
  );
}

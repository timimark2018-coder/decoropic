import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { Reveal } from "@/components/ui";
import { IconArrowRight } from "@/components/ui/icon";

type Props = { locale: Locale };

// 3 个金色几何 SVG（36×36，1.2px stroke，与 Solutions 主页 iconSvg 风格一致）
function FounderIcon({ slug }: { slug: string }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  if (slug === "compass-line") {
    // 罗盘 / 经度线 — 起点 + 国际
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="18" cy="18" r="14" />
        <line x1="18" y1="4" x2="18" y2="32" />
        <line x1="4" y1="18" x2="32" y2="18" />
        <circle cx="18" cy="18" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (slug === "concentric-circles") {
    // 3 同心圆 — 26 年逐层深耕
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="18" cy="18" r="14" />
        <circle cx="18" cy="18" r="9" />
        <circle cx="18" cy="18" r="4" />
      </svg>
    );
  }

  if (slug === "arrow-through") {
    // 起点 → 终点 — 从贸易到交付
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="6" cy="18" r="2" fill="currentColor" />
        <line x1="6" y1="18" x2="26" y2="18" />
        <polyline points="22,14 30,18 22,22" />
      </svg>
    );
  }

  return null;
}

export function AboutFounder({ locale }: Props) {
  const { founder } = aboutContent;

  return (
    <section id="founder" className="section-rhythm-lg overflow-x-clip">
      <div className="container-wide">
        <div className="mx-auto max-w-[760px]">
          {/* Eyebrow */}
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-eyebrow-lg">{t(founder.eyebrow, locale)}</span>
            </div>
          </Reveal>

          {/* Title */}
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

          {/* Paragraphs — 金色 SVG icon + h3 subtitle + body */}
          <div className="mt-12 space-y-10 lg:space-y-12">
            {founder.paragraphs.map((paragraph, idx) => (
              <Reveal key={paragraph.iconSlug} delay={260 + idx * 140}>
                <div className="flex gap-5 sm:gap-6">
                  <div className="mt-1 flex-shrink-0 text-brand-gold">
                    <FounderIcon slug={paragraph.iconSlug} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="mb-3 text-brand-pine-dark"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.375rem, 2vw, 1.625rem)",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em"
                      }}
                    >
                      {t(paragraph.subtitle, locale)}
                    </h3>
                    <p className="text-base leading-[1.85] text-brand-pine/80 sm:text-[17px]">
                      {t(paragraph.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={700}>
            <div className="mt-12">
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
    </section>
  );
}

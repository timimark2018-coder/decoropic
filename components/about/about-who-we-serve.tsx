import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { Reveal } from "@/components/ui";
import {
  IconArrowRight,
  IconBriefcase,
  IconBuilding,
  IconHotel,
  IconPenTool,
  IconUsers
} from "@/components/ui/icon";

type Props = { locale: Locale };

const iconByKey = {
  developers: IconBuilding,
  hotels: IconHotel,
  designers: IconPenTool,
  hnw: IconUsers,
  wholesale: IconBriefcase
} as const;

/**
 * Asymmetric grid — 12-col × 3-row on desktop.
 * Developers:  col 1-7, row 1-2 (big, dominant)
 * Hotels:      col 8-12, row 1
 * Designers:   col 8-12, row 2
 * Wholesalers: col 1-7,  row 3
 * HNW:         col 8-12, row 3
 */
export function AboutWhoWeServe({ locale }: Props) {
  const { whoWeServe } = aboutContent;
  const PrimaryIcon = iconByKey[whoWeServe.primary.key as keyof typeof iconByKey] ?? IconBuilding;

  const placementBySecondaryKey: Record<string, string> = {
    hotels: "lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-2",
    designers: "lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:row-end-3",
    wholesale: "lg:col-start-1 lg:col-end-8 lg:row-start-3 lg:row-end-4",
    hnw: "lg:col-start-8 lg:col-end-13 lg:row-start-3 lg:row-end-4"
  };

  return (
    <section id="audience" className="section-rhythm bg-brand-ivory/50">
      <div className="container-wide">
        {/* Header — eyebrow right, title left, asymmetric */}
        <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:pb-20">
          <Reveal className="lg:col-span-8">
            <h2
              className="text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em"
              }}
            >
              {t(whoWeServe.title, locale)}
            </h2>
          </Reveal>
          <Reveal delay={140} className="flex items-start lg:col-span-4 lg:justify-end">
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-eyebrow-lg">{t(whoWeServe.eyebrow, locale)}</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:auto-rows-[180px]">
          {/* Primary — Property Developers (big, 2 rows tall) */}
          <Reveal className="lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-3">
            <article className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] bg-brand-pine-dark p-10 text-white transition duration-500 hover:bg-brand-pine lg:p-14">
              <div
                aria-hidden
                className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 85% 15%, rgba(174,146,96,0.22), transparent 45%), radial-gradient(circle at 10% 90%, rgba(174,146,96,0.1), transparent 55%)"
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 text-brand-gold">
                  <PrimaryIcon size={20} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
                    {locale === "zh" ? "主要服务" : "Primary Tier"}
                  </span>
                </div>
                <h3
                  className="mt-12 max-w-md"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.035em"
                  }}
                >
                  {t(whoWeServe.primary.label, locale)}
                </h3>
              </div>
              <div className="relative mt-12 max-w-md text-white/70">
                <p className="text-[15px] leading-[1.8]">{t(whoWeServe.primary.body, locale)}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-brand-gold">
                  <span className="text-eyebrow-lg">{locale === "zh" ? "了解更多" : "Learn more"}</span>
                  <IconArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          </Reveal>

          {/* Secondary cards, placed explicitly */}
          {whoWeServe.secondary.map((item, idx) => {
            const Icon = iconByKey[item.key as keyof typeof iconByKey] ?? IconBriefcase;
            const placement = placementBySecondaryKey[item.key] ?? "";
            return (
              <Reveal key={item.key} delay={120 + idx * 80} className={placement}>
                <SecondaryCard
                  locale={locale}
                  icon={<Icon size={18} />}
                  label={item.label}
                  body={item.body}
                  primaryTone={item.key === "wholesale"}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SecondaryCard({
  locale,
  icon,
  label,
  body,
  primaryTone
}: {
  locale: Locale;
  icon: React.ReactNode;
  label: { en: string; zh: string };
  body: { en: string; zh: string };
  primaryTone?: boolean;
}) {
  const tone = primaryTone
    ? "bg-brand-gold/10 border-brand-gold/40 hover:bg-brand-gold/15"
    : "bg-white border-brand-line/80 hover:border-brand-gold/60 hover:shadow-[0_30px_60px_rgba(20,32,29,0.12)]";

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border p-6 transition duration-500 hover:-translate-y-1 sm:p-7 ${tone}`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center justify-center rounded-full bg-brand-sand/70 p-2.5 text-brand-pine">
          {icon}
        </span>
        <IconArrowRight
          size={16}
          className="text-brand-pine/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-gold"
        />
      </div>
      <div>
        <h3
          className="text-brand-pine-dark"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            lineHeight: 1.15
          }}
        >
          {label[locale]}
        </h3>
        <p className="mt-2 text-[13.5px] leading-[1.7] text-brand-pine/70">{body[locale]}</p>
      </div>
    </article>
  );
}

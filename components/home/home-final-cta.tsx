import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { SectionTitle } from "@/components/shared/section-title";

type HomeFinalCtaProps = {
  locale: Locale;
};

export function HomeFinalCta({ locale }: HomeFinalCtaProps) {
  const finalCtaEyebrow = locale === "zh" ? "最终行动" : "Final CTA";

  return (
    <section className="site-section pt-0">
      <div className="container-shell">
        <div className="ink-gradient rounded-[2.25rem] px-8 py-10 text-white sm:px-10">
          <SectionTitle
            eyebrow={finalCtaEyebrow}
            title={t(homeContent.finalCta.title, locale)}
            description={t(homeContent.finalCta.body, locale)}
            tone="light"
          />
          <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}

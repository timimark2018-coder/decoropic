import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { EstimatorExperience } from "@/components/estimator/estimator-experience";
import { SectionTitle } from "@/components/shared/section-title";

type HomeEstimatorSectionProps = {
  locale: Locale;
};

export function HomeEstimatorSection({ locale }: HomeEstimatorSectionProps) {
  return (
    <section id="estimator" className="site-section pt-0 scroll-mt-32">
      <div className="container-shell">
        <SectionTitle
          eyebrow={locale === "zh" ? "别墅项目预算测算器" : "Villa project budget estimator"}
          title={t(homeContent.estimator.title, locale)}
          description={t(homeContent.estimator.subtitle, locale)}
        />
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{t(homeContent.estimator.note, locale)}</p>
        <div className="mt-10">
          <EstimatorExperience locale={locale} />
        </div>
      </div>
    </section>
  );
}

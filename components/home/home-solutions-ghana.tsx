import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { SectionTitle } from "@/components/shared/section-title";

type HomeSolutionsGhanaProps = {
  locale: Locale;
};

export function HomeSolutionsGhana({ locale }: HomeSolutionsGhanaProps) {
  const solutionsEyebrow = locale === "zh" ? "按空间查看解决方案" : "Solutions by space";
  const ghanaEyebrow = locale === "zh" ? "加纳服务" : "Ghana services";

  return (
    <section className="site-section pt-0">
      <div className="container-shell grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="card-surface p-8">
          <SectionTitle
            eyebrow={solutionsEyebrow}
            title={t(homeContent.solutionsBySpace.title, locale)}
            description={t(homeContent.solutionsBySpace.subtitle, locale)}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {homeContent.solutionsBySpace.items.map((item) => (
              <span key={item.en} className="pill-chip">
                {t(item, locale)}
              </span>
            ))}
          </div>
        </div>
        <div className="card-surface p-8">
          <SectionTitle
            eyebrow={ghanaEyebrow}
            title={t(homeContent.ghanaHighlight.title, locale)}
            description={t(homeContent.ghanaHighlight.body, locale)}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {homeContent.ghanaHighlight.bullets.map((item) => (
              <div key={item.en} className="rounded-[1.2rem] bg-brand-mist/45 px-4 py-4 text-sm font-medium text-brand-ink">
                {t(item, locale)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

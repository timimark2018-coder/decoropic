import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { SectionTitle } from "@/components/shared/section-title";

type HomeHowWeWorkProps = {
  locale: Locale;
};

export function HomeHowWeWork({ locale }: HomeHowWeWorkProps) {
  const howWeWorkEyebrow = locale === "zh" ? "合作流程" : "How we work";
  const stepLabel = locale === "zh" ? "步骤" : "Step";

  return (
    <section className="site-section pt-0">
      <div className="container-shell">
        <SectionTitle eyebrow={howWeWorkEyebrow} title={t(homeContent.howWeWork.title, locale)} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeContent.howWeWork.steps.map((step, index) => (
            <div key={step.en} className="card-surface p-6">
              <p className="eyebrow-label">
                {stepLabel} {index + 1}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">{t(step, locale)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

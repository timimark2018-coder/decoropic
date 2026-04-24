import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { EstimatorExperience } from "@/components/estimator/estimator-experience";
import { SectionTitle } from "@/components/shared/section-title";

type HomePageProps = {
  locale: Locale;
};

export async function HomePage({ locale }: HomePageProps) {
  const projectChainEyebrow = locale === "zh" ? "项目交付支持链路" : "Project-ready support chain";
  const projectChainBody =
    locale === "zh"
      ? "Decoropic 负责项目全流程——从采购到规格、到加纳现场落地。"
      : "Decoropic handles the full project, end to end — sourcing, specification, site execution.";
  const brandEyebrow = locale === "zh" ? "品牌定位" : "Brand positioning";
  const whyChooseUsEyebrow = locale === "zh" ? "为什么选择我们" : "Why choose us";
  const whyChooseUsDescription =
    locale === "zh"
      ? "高端项目体验不只是产品本身，更取决于前期规划是否清晰、执行过程是否顺畅。"
      : "A premium project experience depends on more than products. These are the capabilities that shape clearer planning and smoother execution.";
  const servicesEyebrow = locale === "zh" ? "我们的服务" : "Our services";
  const servicesDescription =
    locale === "zh"
      ? "这条服务链覆盖规划、采购与加纳现场落地，帮助不同阶段的项目更顺畅衔接。"
      : "The service chain is designed to support planning, sourcing and Ghana execution as one coordinated workflow.";
  const solutionsEyebrow = locale === "zh" ? "按空间查看解决方案" : "Solutions by space";
  const ghanaEyebrow = locale === "zh" ? "加纳服务" : "Ghana services";
  const howWeWorkEyebrow = locale === "zh" ? "合作流程" : "How we work";
  const stepLabel = locale === "zh" ? "步骤" : "Step";
  const productCenterEyebrow = locale === "zh" ? "产品中心桥接" : "Product center bridge";
  const finalCtaEyebrow = locale === "zh" ? "最终行动" : "Final CTA";

  return (
    <>
      <section className="site-section pt-10">
        <div className="container-shell">
          <div className="ink-gradient hero-sheen relative overflow-hidden rounded-[2.4rem] px-6 py-8 text-white sm:px-10 sm:py-12">
            <div className="absolute -left-14 top-8 h-44 w-44 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-white/8 blur-3xl" />
            <div className="site-grid relative lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <p className="eyebrow-label text-brand-gold/90">{t(homeContent.hero.eyebrow, locale)}</p>
                <h1 className="display-title mt-5 text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  {t(homeContent.hero.title, locale)}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{t(homeContent.hero.subtitle, locale)}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {homeContent.hero.tags.map((tag) => (
                    <span key={tag.en} className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/80">
                      {t(tag, locale)}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink href={homeContent.hero.ctas[0].href} locale={locale}>{t(homeContent.hero.ctas[0].label, locale)}</ActionLink>
                  <ActionLink href={homeContent.hero.ctas[1].href} variant="secondary" locale={locale}>
                    {t(homeContent.hero.ctas[1].label, locale)}
                  </ActionLink>
                  <ActionLink href={homeContent.hero.ctas[2].href} variant="ghost" className="text-white ring-white/25 hover:bg-white/10" locale={locale}>
                    {t(homeContent.hero.ctas[2].label, locale)}
                  </ActionLink>
                </div>
              </div>
              <div className="grid gap-4 self-end">
                {homeContent.hero.stats.map((stat) => (
                  <div key={stat.value + stat.label.en} className="metric-card">
                    <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-white/70">{t(stat.label, locale)}</p>
                  </div>
                ))}
                <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                  <p className="eyebrow-label text-brand-gold/90">{projectChainEyebrow}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{projectChainBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container-shell">
          <SectionTitle
            eyebrow={brandEyebrow}
            title={t(homeContent.brandPositioning.title, locale)}
            description={t(homeContent.brandPositioning.body, locale)}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {homeContent.whyChooseUs.items.slice(0, 3).map((item) => (
              <div key={item.title.en} className="card-surface p-6">
                <p className="display-title text-2xl font-semibold">{t(item.title, locale)}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="card-surface p-8">
            <SectionTitle
              eyebrow={whyChooseUsEyebrow}
              title={t(homeContent.whyChooseUs.title, locale)}
              description={whyChooseUsDescription}
            />
            <div className="mt-8 grid gap-4">
              {homeContent.whyChooseUs.items.map((item) => (
                <div key={item.title.en} className="rounded-[1.4rem] bg-brand-mist/40 px-5 py-4">
                  <p className="font-semibold text-brand-ink">{t(item.title, locale)}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface panel-grid relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-gold/10 blur-3xl" />
            <SectionTitle
              eyebrow={servicesEyebrow}
              title={t(homeContent.services.title, locale)}
              description={servicesDescription}
            />
            <div className="mt-8 grid gap-4">
              {homeContent.services.items.map((item) => (
                <div key={item.title.en} className="rounded-[1.35rem] border border-brand-line/70 bg-white/80 px-5 py-4">
                  <p className="font-semibold text-brand-ink">{t(item.title, locale)}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className="site-section pt-0">
        <div className="container-shell">
          <div className="card-surface panel-grid p-8 sm:p-10">
            <SectionTitle
              eyebrow={productCenterEyebrow}
              title={t(homeContent.productCenterBridge.title, locale)}
              description={t(homeContent.productCenterBridge.body, locale)}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {homeContent.productCenterBridge.ctas.map((cta, index) => (
                <ActionLink key={cta.label.en} href={cta.href} variant={index === 0 ? "primary" : "secondary"} locale={locale}>
                  {t(cta.label, locale)}
                </ActionLink>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}

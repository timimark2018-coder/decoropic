import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ActionLink } from "@/components/shared/action-link";
import { SectionTitle } from "@/components/shared/section-title";
import { solutionsContent } from "@/content/solutions";
import { t } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Solutions | Decoropic",
      zh: "解决方案 | Decoropic"
    },
    description: {
      en: "Project-focused interior solutions for villas, hospitality, office and commercial spaces in Ghana.",
      zh: "面向加纳别墅、酒店、办公与商业空间的项目型室内解决方案。"
    },
    path: "/solutions",
    locale
  });
}

export default async function SolutionsPage() {
  const locale = await getLocale();

  return (
    <>
      <PageHero
        eyebrow={locale === "zh" ? "解决方案" : "Solutions"}
        title={t(solutionsContent.hero.title, locale)}
        description={t(solutionsContent.hero.subtitle, locale)}
        actions={
          <>
            <ActionLink href="/contact" locale={locale}>{locale === "zh" ? "开始您的项目" : "Start Your Project"}</ActionLink>
            <ActionLink href="PRODUCT_CENTER" variant="secondary" locale={locale}>
              {locale === "zh" ? "浏览产品" : "Browse Products"}
            </ActionLink>
          </>
        }
      />
      <section className="site-section pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow={locale === "zh" ? "客户类型" : "Client types"} title={t(solutionsContent.clientTypes.title, locale)} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutionsContent.clientTypes.items.map((item) => (
              <div key={item.title.en} className="card-surface p-6">
                <h2 className="display-title text-2xl font-semibold">{t(item.title, locale)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section pt-0">
        <div className="container-shell">
          <div className="card-surface p-8">
            <SectionTitle eyebrow={locale === "zh" ? "空间类型" : "Space types"} title={t(solutionsContent.spaceTypes.title, locale)} />
            <div className="mt-8 flex flex-wrap gap-3">
              {solutionsContent.spaceTypes.items.map((item) => (
                <span key={item.en} className="pill-chip">
                  {t(item, locale)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="site-section pt-0">
        <div className="container-shell">
          <div className="ink-gradient rounded-[2.2rem] px-8 py-10 text-white">
            <SectionTitle
              eyebrow={locale === "zh" ? "立即咨询" : "CTA"}
              title={t(solutionsContent.cta.title, locale)}
              description={t(solutionsContent.cta.body, locale)}
              tone="light"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {solutionsContent.cta.ctas.map((cta, index) => (
                <ActionLink key={cta.label.en} href={cta.href} variant={index === 0 ? "primary" : "secondary"} locale={locale}>
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

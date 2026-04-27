import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ActionLink } from "@/components/shared/action-link";
import { SectionTitle } from "@/components/shared/section-title";
import { localServicesContent } from "@/content/local-services";
import { t } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Local Services | Decoropic",
      zh: "本地服务 | Decoropic"
    },
    description: {
      en: "Local site measurement, budget-led design support and on-site delivery coordination in Ghana.",
      zh: "提供加纳当地现场测量、预算导向设计支持与项目现场交付协调。"
    },
    path: "/local-services",
    locale
  });
}

export default async function LocalServicesPage() {
  const locale = await getLocale();

  return (
    <>
      <PageHero
        eyebrow={locale === "zh" ? "本地服务" : "Local Services"}
        title={t(localServicesContent.hero.title, locale)}
        description={t(localServicesContent.hero.subtitle, locale)}
        actions={<ActionLink href="/contact" locale={locale}>{locale === "zh" ? "预约现场测量" : "Book a Site Measurement"}</ActionLink>}
      />
      <section className="site-section pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-surface p-8">
            <SectionTitle
              eyebrow={locale === "zh" ? "为什么本地支持很重要" : "Why local support matters"}
              title={t(localServicesContent.whyItMatters.title, locale)}
              description={t(localServicesContent.whyItMatters.body, locale)}
            />
          </div>
          <div className="card-surface p-8">
            <SectionTitle eyebrow={locale === "zh" ? "服务价值" : "Value"} title={t(localServicesContent.value.title, locale)} />
            <div className="mt-8 grid gap-3">
              {localServicesContent.value.bullets.map((item) => (
                <div key={item.en} className="rounded-[1.2rem] bg-brand-mist/45 px-4 py-4 text-sm text-slate-700">
                  {t(item, locale)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="site-section pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow={locale === "zh" ? "加纳本地服务" : "Local services in Ghana"} title={t(localServicesContent.localServices.title, locale)} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {localServicesContent.localServices.items.map((item) => (
              <div key={item.title.en} className="card-surface p-6">
                <h2 className="display-title text-2xl font-semibold">{t(item.title, locale)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="card-surface p-8">
            <SectionTitle eyebrow={locale === "zh" ? "适合哪些客户" : "Who this is for"} title={t(localServicesContent.whoItsFor.title, locale)} />
            <div className="mt-8 grid gap-3">
              {localServicesContent.whoItsFor.items.map((item) => (
                <div key={item.en} className="rounded-[1.2rem] bg-white px-4 py-4 text-sm text-slate-700 ring-1 ring-brand-line">
                  {t(item, locale)}
                </div>
              ))}
            </div>
          </div>
          <div className="ink-gradient rounded-[2rem] px-8 py-10 text-white">
            <SectionTitle
              eyebrow={locale === "zh" ? "立即咨询" : "CTA"}
              title={t(localServicesContent.cta.title, locale)}
              description={t(localServicesContent.cta.body, locale)}
              tone="light"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {localServicesContent.cta.ctas.map((cta, index) => (
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

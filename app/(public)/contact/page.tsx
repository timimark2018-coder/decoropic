import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ActionLink } from "@/components/shared/action-link";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";
import { SectionTitle } from "@/components/shared/section-title";
import { contactContent } from "@/content/contact";
import { t } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/lib/utils/constants";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Contact | Decoropic",
      zh: "联系我们 | Decoropic"
    },
    description: {
      en: "Contact Decoropic for project consultation, site measurement, design support or sourcing coordination in Ghana.",
      zh: "联系 Decoropic，咨询加纳项目的方案沟通、现场测量、设计支持与采购协调。"
    },
    path: "/contact",
    locale
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  const channels = [
    { label: locale === "zh" ? "邮箱" : "Email", value: siteConfig.contactEmail },
    { label: locale === "zh" ? "电话" : "Tel", value: siteConfig.contactPhoneDisplay },
    { label: locale === "zh" ? "地址" : "Location", value: siteConfig.contactLocation }
  ];

  return (
    <>
      <PageHero
        eyebrow={locale === "zh" ? "联系我们" : "Contact"}
        title={t(contactContent.hero.title, locale)}
        description={t(contactContent.hero.subtitle, locale)}
        actions={<ActionLink href="WHATSAPP" locale={locale}>{locale === "zh" ? "WhatsApp联系" : "Talk on WhatsApp"}</ActionLink>}
      />
      <section className="site-section pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="card-surface p-8">
              <SectionTitle eyebrow={locale === "zh" ? "联系入口" : "Contact options"} title={t(contactContent.options.title, locale)} />
              <div className="mt-6 grid gap-4">
                {contactContent.options.items.map((item) => (
                  <div key={item.title.en} className="rounded-[1.25rem] bg-brand-mist/40 px-4 py-4 text-sm">
                    <p className="font-semibold text-brand-ink">{t(item.title, locale)}</p>
                    <p className="mt-2 leading-7 text-slate-600">{t(item.body, locale)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-surface p-8">
              <h2 className="display-title text-2xl font-semibold">{locale === "zh" ? "联系信息" : "Contact details"}</h2>
              <div className="mt-6 grid gap-4">
                {channels.map((channel) => (
                  <div key={channel.label} className="rounded-[1.25rem] bg-slate-50 px-4 py-4 text-sm">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{channel.label}</p>
                    <p className="mt-2 font-medium text-brand-ink">{channel.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-surface panel-grid p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">WhatsApp</p>
              <p className="mt-3 text-lg font-semibold">{t(contactContent.whatsapp.title, locale)}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {t(contactContent.whatsapp.body, locale)}
              </p>
              <div className="mt-6">
                <ActionLink href="WHATSAPP" locale={locale}>{t(contactContent.whatsapp.cta, locale)}</ActionLink>
              </div>
            </div>
          </div>
          <ProjectInquiryForm sourcePage="/contact" locale={locale} />
        </div>
      </section>
      <section className="site-section pt-0">
        <div className="container-shell">
          <div className="ink-gradient rounded-[2rem] px-8 py-10 text-white">
            <SectionTitle
              eyebrow={locale === "zh" ? "最终行动" : "Final CTA"}
              title={t(contactContent.cta.title, locale)}
              description={t(contactContent.cta.body, locale)}
              tone="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}

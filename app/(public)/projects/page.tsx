import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ActionLink } from "@/components/shared/action-link";
import { SectionTitle } from "@/components/shared/section-title";
import { projectsContent } from "@/content/projects";
import { t } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Projects | Decoropic",
      zh: "项目展示 | Decoropic"
    },
    description: {
      en: "Representative project directions for residential, hospitality and commercial interiors in Ghana.",
      zh: "展示加纳住宅、酒店与商业室内项目的代表性方向与服务方式。"
    },
    path: "/projects",
    locale
  });
}

export default async function ProjectsPage() {
  const locale = await getLocale();

  return (
    <>
      <PageHero
        eyebrow={locale === "zh" ? "项目展示" : "Projects"}
        title={t(projectsContent.hero.title, locale)}
        description={t(projectsContent.hero.subtitle, locale)}
        actions={<ActionLink href="/contact" locale={locale}>{locale === "zh" ? "开始您的项目" : "Start Your Project"}</ActionLink>}
      />
      <section className="site-section pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow={locale === "zh" ? "项目矩阵" : "Project grid"} title={t(projectsContent.projectGrid.title, locale)} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projectsContent.projectGrid.items.map((item) => (
              <div key={item.title.en} className="card-surface p-7">
                <p className="eyebrow-label">{t(item.tag, locale)}</p>
                <h2 className="display-title mt-4 text-3xl font-semibold">{t(item.title, locale)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="card-surface p-8">
            <SectionTitle eyebrow={locale === "zh" ? "合作方式" : "Approach"} title={t(projectsContent.approach.title, locale)} />
            <div className="mt-8 grid gap-3">
              {projectsContent.approach.items.map((item) => (
                <div key={item.en} className="rounded-[1.25rem] bg-brand-mist/45 px-4 py-4 text-sm text-slate-700">
                  {t(item, locale)}
                </div>
              ))}
            </div>
          </div>
          <div className="ink-gradient rounded-[2rem] px-8 py-10 text-white">
            <SectionTitle
              eyebrow={locale === "zh" ? "立即咨询" : "CTA"}
              title={t(projectsContent.cta.title, locale)}
              description={t(projectsContent.cta.body, locale)}
              tone="light"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {projectsContent.cta.ctas.map((cta, index) => (
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

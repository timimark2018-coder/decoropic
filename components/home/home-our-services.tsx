import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { SectionTitle } from "@/components/shared/section-title";

type Props = {
  locale: Locale;
};

// Home Our Services — Extracted from the former 2-in-1 home-why-choose-us.tsx
// during Battle 2b. Visual style preserved (rounded cards). Editorial upgrade
// scheduled for a future Battle 2c.
export function HomeOurServices({ locale }: Props) {
  const servicesEyebrow = locale === "zh" ? "我们的服务" : "Our services";
  const servicesDescription =
    locale === "zh"
      ? "这条服务链覆盖规划、采购与加纳现场落地，帮助不同阶段的项目更顺畅衔接。"
      : "The service chain is designed to support planning, sourcing and Ghana execution as one coordinated workflow.";

  return (
    <section className="site-section pt-0">
      <div className="container-shell">
        <div className="card-surface panel-grid relative overflow-hidden p-8">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-gold/10 blur-3xl" />
          <SectionTitle
            eyebrow={servicesEyebrow}
            title={t(homeContent.services.title, locale)}
            description={servicesDescription}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {homeContent.services.items.map((item) => (
              <div
                key={item.title.en}
                className="rounded-[1.35rem] border border-brand-line/70 bg-white/80 px-5 py-4"
              >
                <p className="font-semibold text-brand-ink">{t(item.title, locale)}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{t(item.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

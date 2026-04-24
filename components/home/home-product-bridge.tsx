import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { ActionLink } from "@/components/shared/action-link";
import { SectionTitle } from "@/components/shared/section-title";

type HomeProductBridgeProps = {
  locale: Locale;
};

export function HomeProductBridge({ locale }: HomeProductBridgeProps) {
  const productCenterEyebrow = locale === "zh" ? "产品中心桥接" : "Product center bridge";

  return (
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
  );
}

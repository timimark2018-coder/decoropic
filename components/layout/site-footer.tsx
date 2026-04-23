import type { Locale } from "@/content/types";
import { siteNavContent } from "@/content/site-nav";
import { t } from "@/lib/i18n/content";
import { siteConfig } from "@/lib/utils/constants";
import { ActionLink } from "@/components/shared/action-link";
import { BrandLogo } from "@/components/shared/brand-logo";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const brandLink = locale === "zh" ? "Decoropic 与 Decolovely" : "Decoropic x Decolovely";
  const readinessText = locale === "zh" ? "高端、项目导向、适配加纳市场" : "Premium, project-focused, Ghana-ready";
  const phoneLabel = locale === "zh" ? "电话" : "Tel";
  const locationLabel = locale === "zh" ? "地区" : "Location";

  return (
    <footer className="border-t border-brand-line/70 bg-[linear-gradient(180deg,#eee7db_0%,#f8f5ef_36%,#edf1eb_100%)] py-14">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <BrandLogo variant="footer" locale={locale} />
          <div className="max-w-2xl rounded-[1.8rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur">
            <p className="eyebrow-label">{brandLink}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {t(siteNavContent.footer.tagline, locale)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteNavContent.footer.ctas.map((cta) => (
                <ActionLink key={cta.href + cta.label.en} href={cta.href} variant="secondary" locale={locale}>
                  {t(cta.label, locale)}
                </ActionLink>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.6rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">{t(siteNavContent.footer.quickLinksTitle, locale)}</p>
            <div className="mt-4 space-y-3">
              {siteNavContent.mainNav.map((item) => (
                <ActionLink key={item.href} href={item.href} variant="ghost" className="w-full justify-start px-0 py-0 ring-0" locale={locale}>
                  {t(item.label, locale)}
                </ActionLink>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">{t(siteNavContent.footer.contactTitle, locale)}</p>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-slate-600">{siteConfig.contactEmail}</p>
              <p className="text-sm text-slate-600">{phoneLabel}: {siteConfig.contactPhoneDisplay}</p>
              <p className="text-sm text-slate-600">{locationLabel}: {siteConfig.contactLocation}</p>
              <p className="pt-3 text-xs uppercase tracking-[0.22em] text-slate-400">{readinessText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

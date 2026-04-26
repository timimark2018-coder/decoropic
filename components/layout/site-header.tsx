import type { Locale } from "@/content/types";
import { siteNavContent } from "@/content/site-nav";
import { t } from "@/lib/i18n/content";
import { isExternalHref, resolveSiteHref } from "@/lib/utils/site-links";
import { ActionLink } from "@/components/shared/action-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { HeaderNavLink } from "@/components/layout/header-nav-link";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {

  return (
    <header className="sticky top-0 z-40 border-b-[1.5px] border-brand-gold/35 bg-[rgba(250,247,242,0.86)] backdrop-blur-xl shadow-[0_2px_16px_rgba(174,146,96,0.08)]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/45 to-transparent" />
      <div className="container-shell flex min-h-28 flex-wrap items-center justify-between gap-4 py-6 lg:py-8">
        <div className="flex items-center gap-6">
          <BrandLogo variant="header" priority locale={locale} />
          <nav className="hidden items-center gap-7 xl:flex">
            {siteNavContent.mainNav.map((item) => {
              const resolved = resolveSiteHref(item.href, locale);
              return (
                <HeaderNavLink
                  key={item.href}
                  href={resolved}
                  label={t(item.label, locale)}
                  isHome={item.label.en === "Home"}
                  external={isExternalHref(resolved)}
                  className="text-[17px] tracking-wide text-brand-pine-dark hover:text-brand-gold transition-colors"
                />
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LocaleToggle locale={locale} />
          <ActionLink href={siteNavContent.headerCta.href} locale={locale}>
            {t(siteNavContent.headerCta.label, locale)}
          </ActionLink>
        </div>
        <nav className="flex w-full gap-5 overflow-x-auto pb-1 xl:hidden">
          {siteNavContent.mainNav.map((item) => {
            const resolved = resolveSiteHref(item.href, locale);
            return (
              <HeaderNavLink
                key={item.href}
                href={resolved}
                label={t(item.label, locale)}
                isHome={item.label.en === "Home"}
                external={isExternalHref(resolved)}
                className="whitespace-nowrap text-[15px] text-brand-pine-dark hover:text-brand-gold transition-colors"
              />
            );
          })}
        </nav>
      </div>
    </header>
  );
}

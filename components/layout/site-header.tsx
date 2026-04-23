import Link from "next/link";
import type { Locale } from "@/content/types";
import { siteNavContent } from "@/content/site-nav";
import { t } from "@/lib/i18n/content";
import { isExternalHref, resolveSiteHref } from "@/lib/utils/site-links";
import { ActionLink } from "@/components/shared/action-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { LocaleToggle } from "@/components/layout/locale-toggle";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line/70 bg-[rgba(250,247,242,0.86)] backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/45 to-transparent" />
      <div className="container-shell flex min-h-24 flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-6">
          <BrandLogo variant="header" priority locale={locale} />
          <nav className="hidden items-center gap-1 rounded-full border border-brand-line/90 bg-white/80 p-2 xl:flex">
            {siteNavContent.mainNav.map((item) => (
              <Link
                key={item.href}
                href={resolveSiteHref(item.href, locale)}
                target={isExternalHref(resolveSiteHref(item.href, locale)) ? "_blank" : undefined}
                rel={isExternalHref(resolveSiteHref(item.href, locale)) ? "noreferrer" : undefined}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-brand-mist/70 hover:text-brand-ink"
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LocaleToggle locale={locale} />
          <ActionLink href={siteNavContent.headerCta.href} locale={locale}>
            {t(siteNavContent.headerCta.label, locale)}
          </ActionLink>
        </div>
        <nav className="flex w-full gap-2 overflow-x-auto pb-1 xl:hidden">
          {siteNavContent.mainNav.map((item) => (
            <Link
              key={item.href}
              href={resolveSiteHref(item.href, locale)}
              target={isExternalHref(resolveSiteHref(item.href, locale)) ? "_blank" : undefined}
              rel={isExternalHref(resolveSiteHref(item.href, locale)) ? "noreferrer" : undefined}
              className="whitespace-nowrap rounded-full border border-brand-line/90 bg-white/80 px-4 py-2 text-sm text-slate-700"
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

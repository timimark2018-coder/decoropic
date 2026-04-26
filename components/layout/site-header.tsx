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

      {/* 桌面单行水平布局 — 三段对称：Logo 居左 / 菜单 flex-1 居中 (xl+) / 右组居右 */}
      <div className="container-shell flex min-h-20 items-center justify-between gap-6 py-4 lg:py-5 xl:gap-8">
        <div className="flex-shrink-0">
          <BrandLogo variant="header" priority locale={locale} />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex">
          {siteNavContent.mainNav.map((item) => {
            const resolved = resolveSiteHref(item.href, locale);
            return (
              <HeaderNavLink
                key={item.href}
                href={resolved}
                label={t(item.label, locale)}
                external={isExternalHref(resolved)}
                className="text-[17px] tracking-wide text-brand-pine-dark hover:text-brand-gold transition-colors"
              />
            );
          })}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3 lg:gap-4">
          <LocaleToggle locale={locale} />
          <ActionLink href={siteNavContent.headerCta.href} locale={locale}>
            {t(siteNavContent.headerCta.label, locale)}
          </ActionLink>
        </div>
      </div>

      {/* 移动端水平滚动 nav — 独立一行，<xl 显示 */}
      <nav className="container-shell flex gap-5 overflow-x-auto pb-3 pt-1 xl:hidden">
        {siteNavContent.mainNav.map((item) => {
          const resolved = resolveSiteHref(item.href, locale);
          return (
            <HeaderNavLink
              key={item.href}
              href={resolved}
              label={t(item.label, locale)}
              external={isExternalHref(resolved)}
              className="whitespace-nowrap text-[15px] text-brand-pine-dark hover:text-brand-gold transition-colors"
            />
          );
        })}
      </nav>
    </header>
  );
}

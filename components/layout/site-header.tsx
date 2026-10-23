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

      {/* 三段对称：Logo 居左 / 菜单 / 右组居右。
          导航只渲染一份 —— 过去桌面版和移动版是两个 <nav>，每条链接在 DOM 里出现两次。
          现在靠 flex-wrap + order 切换位置：窄屏换行成独立一行(可横向滚动)，
          xl 以上回到栏内居中。 */}
      <div className="container-shell flex min-h-20 flex-wrap items-center justify-between gap-x-6 py-4 lg:py-5 xl:flex-nowrap xl:gap-8">
        <div className="flex-shrink-0">
          <BrandLogo variant="header" priority locale={locale} />
        </div>

        <nav className="order-last flex w-full items-center gap-5 overflow-x-auto pb-1 pt-2 xl:order-none xl:w-auto xl:flex-1 xl:justify-center xl:gap-7 xl:overflow-visible xl:py-0">
          {siteNavContent.mainNav.map((item) => {
            const resolved = resolveSiteHref(item.href, locale);
            return (
              <HeaderNavLink
                key={item.href}
                href={resolved}
                label={t(item.label, locale)}
                external={isExternalHref(resolved)}
                className="whitespace-nowrap text-[15px] tracking-wide text-brand-pine-dark transition-colors hover:text-brand-gold xl:text-[17px]"
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
    </header>
  );
}

import Link from "next/link";
import type { Locale } from "@/content/types";
import { siteNavContent } from "@/content/site-nav";
import { siteConfig } from "@/lib/utils/constants";

type SiteFooterProps = {
  locale: Locale;
};

// Footer Editorial v3.0 (Battle 7 Phase 2.5)
// 4 等列简洁布局：Brand / Navigate / Reach out / Trust
// 删除：双 wave 装饰 + 巨型 Decoropic 水印 + mt-20 大间距
// 保留：深墨绿底 + Playfair serif + 金色 eyebrow（Editorial 调性核心）
// 目标高度：380-420px（之前 ~680px）
export function SiteFooter({ locale }: SiteFooterProps) {
  const eyebrowStyle = {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.28em",
    textTransform: "uppercase" as const
  };

  return (
    <footer className="bg-brand-pine-dark text-brand-ivory">
      <div className="container-wide pt-16 pb-8 lg:pt-20">
        {/* 4 等列网格 */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Col 1 — Brand */}
          <div>
            <p className="text-brand-gold mb-3" style={eyebrowStyle}>
              {locale === "zh" ? "品牌" : "Brand"}
            </p>
            <h3
              className="text-brand-ivory"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 2.2vw, 1.75rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Decoropic
            </h3>
            <p
              className="mt-3 text-brand-ivory/75 italic"
              style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", lineHeight: 1.5 }}
            >
              {locale === "zh" ? "室内空间，整套交付。" : "Interiors, delivered."}
            </p>
          </div>

          {/* Col 2 — Navigate */}
          <nav aria-label={locale === "zh" ? "导航" : "Navigate"}>
            <p className="text-brand-gold mb-3" style={eyebrowStyle}>
              {locale === "zh" ? "导航" : "Navigate"}
            </p>
            <ul className="space-y-2.5">
              {siteNavContent.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-ivory/80 transition-colors hover:text-brand-gold"
                  >
                    {locale === "zh" ? item.label.zh : item.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Reach out */}
          <div>
            <p className="text-brand-gold mb-3" style={eyebrowStyle}>
              {locale === "zh" ? "联系" : "Reach out"}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-brand-ivory/80 transition-colors hover:text-brand-gold"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="text-brand-ivory/80">
                {siteConfig.contactLocation}
              </li>
            </ul>
          </div>

          {/* Col 4 — Trust */}
          <div>
            <p className="text-brand-gold mb-3" style={eyebrowStyle}>
              {locale === "zh" ? "信任背书" : "Trust"}
            </p>
            <p
              className="text-brand-ivory/85"
              style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", lineHeight: 1.5, fontStyle: "italic" }}
            >
              {locale === "zh"
                ? "二十年深耕加纳。一个国家。数百个家。"
                : "Two decades. One country. Hundreds of homes shaped."}
            </p>
          </div>

        </div>

        {/* 底部分隔线 + Copyright */}
        <div className="border-t border-brand-gold/15 pt-8">
          <p className="text-xs uppercase tracking-wider text-brand-ivory/50">
            {locale === "zh"
              ? `© ${new Date().getFullYear()} Decoropic. 保留所有权利。`
              : `© ${new Date().getFullYear()} Decoropic. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

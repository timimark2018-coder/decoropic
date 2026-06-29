import Link from "next/link";
import type { Locale } from "@/content/types";
import { siteNavContent } from "@/content/site-nav";
import { siteConfig } from "@/lib/utils/constants";
import { resolveSiteHref } from "@/lib/utils/site-links";

type SiteFooterProps = {
  locale: Locale;
};

const PRODUCT_CATEGORIES = [
  { slug: "tiles-flooring", en: "Tiles & Flooring", zh: "瓷砖·地板" },
  { slug: "furniture", en: "Furniture", zh: "家具" },
  { slug: "bathroom-kitchen", en: "Bathroom & Kitchen", zh: "卫浴·厨房" },
  { slug: "lights-lighting", en: "Lights & Lighting", zh: "灯具·照明" },
  { slug: "doors-windows", en: "Doors & Windows", zh: "门窗" }
];

// Footer Editorial v3.1 (SSR product links)
// 5 等列: Brand / Navigate / Products / Reach out / Trust
// Products column added for crawlable SSR links to all 5 category pages
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
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

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
                    href={resolveSiteHref(item.href, locale)}
                    className="text-sm text-brand-ivory/80 transition-colors hover:text-brand-gold"
                  >
                    {locale === "zh" ? item.label.zh : item.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Products */}
          <nav aria-label={locale === "zh" ? "产品品类" : "Products"}>
            <p className="text-brand-gold mb-3" style={eyebrowStyle}>
              {locale === "zh" ? "产品品类" : "Products"}
            </p>
            <ul className="space-y-2.5">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-sm text-brand-ivory/80 transition-colors hover:text-brand-gold"
                  >
                    {locale === "zh" ? cat.zh : cat.en}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — Reach out */}
          <div>
            <p className="text-brand-gold mb-3" style={eyebrowStyle}>
              {locale === "zh" ? "联系" : "Reach out"}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contactPhoneDisplay.replace(/\s/g, "")}`}
                  className="text-brand-ivory/80 transition-colors hover:text-brand-gold"
                >
                  {siteConfig.contactPhoneDisplay}
                </a>
              </li>
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
              <li className="mt-4 border-t border-brand-ivory/10 pt-4">
                <a
                  href="https://diy.decoropic.com"
                  target="_blank"
                  rel="alternate"
                  className="text-brand-gold/80 transition-colors hover:text-brand-gold text-xs tracking-wider uppercase"
                  style={{ letterSpacing: "0.12em" }}
                >
                  Design Center →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5 — Trust */}
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

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { breadcrumbListSchema, itemListSchema } from "@/lib/seo/schema";
import { getAllContentPages } from "@/lib/content-pages/getContentPage";
import { localizePath } from "@/lib/utils/site-links";
import { HandDrawnLine, Reveal } from "@/components/ui";

// 市场索引页。子页顺序按内容包给的先后:加纳(交付基地)→ 西非 → 中东 → 东南亚 → 加勒比/拉美。
const ORDER = ["ghana", "west-africa", "middle-east", "southeast-asia", "caribbean-latin-america"];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Markets We Ship To — China Materials Export",
      zh: "我们服务的市场 — 中国建材出口"
    },
    description: {
      en: "Where we ship building materials and interior packages from China: Ghana, West Africa, the Middle East, Southeast Asia, the Caribbean and Latin America.",
      zh: "我们把中国建材与室内配套发往哪些市场:加纳、西非、中东、东南亚,以及加勒比与拉丁美洲,各市场含港口与清关要点。"
    },
    path: "/markets",
    locale
  });
}

export default async function MarketsIndexPage() {
  const locale = await getLocale();
  const pages = getAllContentPages("markets").sort(
    (a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug)
  );

  const schemas = [
    breadcrumbListSchema([
      { name: locale === "zh" ? "首页" : "Home", path: "/" },
      { name: locale === "zh" ? "市场" : "Markets", path: "/markets" }
    ]),
    itemListSchema(
      pages.map((p) => ({ name: p.h1, path: p.url, description: p.description })),
      "Markets served"
    )
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="bg-[#f7f3ec] pt-32 pb-16 lg:pt-40">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-[2px] w-16 bg-brand-gold" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase"
                }}
              >
                {locale === "zh" ? "市场" : "Markets"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h1
              className="mt-8 max-w-[880px] text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.4vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em"
              }}
            >
              {locale === "zh" ? "我们服务的市场" : "Markets we ship to"}
            </h1>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.4} />
            </div>
          </Reveal>

          <Reveal delay={500}>
            <p className="mt-8 max-w-[820px] text-base leading-[1.8] text-brand-pine-dark/80">
              {locale === "zh"
                ? "每个市场一页,写清到港航程、当地买家常订的品类、交付流程与进口注意事项。加纳是我们自有办公室与清关伙伴所在的交付基地。"
                : "One page per market, covering sea transit to your port, what buyers there usually order, how delivery works and what to watch at import. Ghana is our delivery base, with our own office and clearing partners."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-wide">
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, i) => (
              <Reveal key={page.slug} delay={i * 80}>
                <li>
                  <h2
                    className="text-brand-pine-dark"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: "-0.015em"
                    }}
                  >
                    <Link
                      href={localizePath(page.url, locale)}
                      className="transition-colors hover:text-brand-gold"
                    >
                      {page.h1}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-[1.8] text-brand-pine-dark/75">
                    {page.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/lib/utils/constants";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema";
import { ContentPage } from "@/components/content/content-page";
import { RecentHotelProject } from "@/components/projects/RecentHotelProject";
import { getAllGuides, type GuideFrontmatter } from "@/lib/guides/getGuides";
import { getContentPage, type ContentGroup } from "./getContentPage";

// 市场页底部的指南模块。
// /markets/ghana:第 2 周 5 篇(落地成本 → Tema 清关 → 工期 → 厨房进口 → 海外业主付款)
//   + 第 3 周 5 篇(Kumasi、西部地区/Takoradi 两个区域篇，整柜拼装、灯具电气标准、远程管理装修)。
// /markets/west-africa:第 3 周全部 9 篇西非指南(按 category 取)。
const GHANA_GUIDE_SLUGS = [
  "cost-to-finish-4-bedroom-villa-accra",
  "tema-port-clearing-building-materials",
  "ghana-house-finishing-timeline",
  "import-kitchen-cabinets-china-to-ghana",
  "diaspora-building-in-ghana-pay-by-milestones",
  "kumasi-house-finishing-materials",
  "takoradi-western-region-house-finishing",
  "container-consolidation-house-finishing-ghana",
  "ghana-electrical-standards-lighting-import",
  "managing-a-renovation-remotely-ghana"
];

const MARKET_GUIDES: Record<string, {
  pick: (g: GuideFrontmatter) => boolean;
  order?: string[];
  copy: { eyebrow: { en: string; zh: string }; heading: { en: string; zh: string } };
}> = {
  ghana: {
    pick: (g) => GHANA_GUIDE_SLUGS.includes(g.slug),
    order: GHANA_GUIDE_SLUGS,
    copy: {
      eyebrow: { en: "Guides for Ghana", zh: "加纳指南" },
      heading: { en: "What it costs, how it clears, how long it takes", zh: "落地成本、清关、工期与采购方式" }
    }
  },
  "west-africa": {
    pick: (g) => g.category === "West Africa guides",
    copy: {
      eyebrow: { en: "Guides", zh: "指南" },
      heading: {
        en: "Importing into Nigeria, Côte d'Ivoire and Togo",
        zh: "进口到尼日利亚、科特迪瓦与多哥"
      }
    }
  }
};

function marketGuides(slug: string) {
  const cfg = MARKET_GUIDES[slug];
  if (!cfg) return undefined;
  const list = getAllGuides().filter(cfg.pick);
  if (cfg.order) list.sort((a, b) => cfg.order!.indexOf(a.slug) - cfg.order!.indexOf(b.slug));
  return { guides: list, copy: cfg.copy };
}

const GROUP_LABEL: Record<ContentGroup, { en: string; zh: string; indexPath: string }> = {
  solutions: { en: "Solutions", zh: "解决方案", indexPath: "/solutions" },
  markets: { en: "Markets", zh: "市场", indexPath: "/markets" }
};

// 本页实际配的图。
// 内容包给了每页 3 条 image suggestions，但 public/projects 下只有 9 张实拍图、
// 全部是加纳住宅项目 —— 只有别墅与公寓两页能对上真实画面，其余按指令留空，不放占位图。
// alt 取自内容包的建议文案。
const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  "solutions/villas": {
    src: "/projects/01-east-legon-villa/living-room.webp",
    alt: "Villa living room finished with large-format porcelain floor tiles sourced from Foshan"
  },
  "solutions/apartments": {
    src: "/projects/03-airport-residential-apt/living-room.webp",
    alt: "Apartment living area fitted with porcelain tiles and aluminium sliding door from China"
  }
};

export async function contentMetadata(group: ContentGroup, slug: string): Promise<Metadata> {
  const page = getContentPage(group, slug);
  if (!page) return {};
  const locale = await getLocale();

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.url,
    locale
  });
}

export async function ContentRoute({ group, slug }: { group: ContentGroup; slug: string }) {
  const page = getContentPage(group, slug);
  if (!page) notFound();

  const locale = await getLocale();
  const baseUrl = siteConfig.siteUrl;
  const label = GROUP_LABEL[group];
  const guidesModule = group === "markets" ? marketGuides(slug) : undefined;

  const breadcrumb = breadcrumbListSchema([
    { name: locale === "zh" ? "首页" : "Home", path: "/" },
    { name: locale === "zh" ? label.zh : label.en, path: label.indexPath },
    { name: page.h1, path: page.url }
  ]);

  // FAQPage 收录页面上实际渲染出来的问答，与正文逐字一致。
  const faqItems = page.sections
    .flatMap((s) => s.blocks)
    .flatMap((b) => (b.kind === "faq" ? b.items : []));

  const schemas: object[] = [breadcrumb];
  if (faqItems.length > 0) {
    schemas.push(faqPageSchema(faqItems.map((i) => ({ question: i.question, answer: i.answer }))));
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ContentPage
        page={page}
        locale={locale}
        eyebrow={locale === "zh" ? label.zh : label.en}
        heroImage={HERO_IMAGES[`${group}/${slug}`]}
        relatedGuides={guidesModule?.guides}
        relatedGuidesCopy={guidesModule?.copy}
        recentProject={group === "solutions" && slug === "hotels" ? <RecentHotelProject locale={locale} /> : undefined}
      />
    </>
  );
}

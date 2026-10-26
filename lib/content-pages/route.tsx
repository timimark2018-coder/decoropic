import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/lib/utils/constants";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema";
import { ContentPage } from "@/components/content/content-page";
import { getAllGuides } from "@/lib/guides/getGuides";
import { getContentPage, type ContentGroup } from "./getContentPage";

// /markets/ghana 挂的加纳指南。取这 5 篇:落地成本、Tema 清关、工期、厨房进口、海外业主付款,
// 覆盖「要花多少 → 怎么清关 → 多久 → 怎么买 → 人不在怎么管」这条链路。
const GHANA_GUIDE_SLUGS = [
  "cost-to-finish-4-bedroom-villa-accra",
  "tema-port-clearing-building-materials",
  "ghana-house-finishing-timeline",
  "import-kitchen-cabinets-china-to-ghana",
  "diaspora-building-in-ghana-pay-by-milestones"
];

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
        relatedGuides={
          group === "markets" && slug === "ghana"
            ? getAllGuides().filter((g) => GHANA_GUIDE_SLUGS.includes(g.slug))
            : undefined
        }
      />
    </>
  );
}

import type { LocalizedText } from "@/content/types";

export type ProductsContent = {
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    pullQuote: LocalizedText;
    author: LocalizedText;
  };
  problem: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    pullQuote: LocalizedText;
    items: Array<{
      eyebrow: LocalizedText;
      title: LocalizedText;
      body: LocalizedText;
    }>;
  };
  ourWay: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    items: Array<{
      number: string;
      title: LocalizedText;
      body: LocalizedText;
    }>;
  };
  selectionGuides: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    categories: Array<{
      slug: string;
      title: LocalizedText;
      tagline: LocalizedText;
      tips: LocalizedText[];
      catalogUrl: string;
      browseLabel: LocalizedText;
    }>;
  };
  featuredPicks: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    items: Array<{
      slug: string;
      categoryLabel: LocalizedText;
      titleEn: string;
      titleZh: string;
      reasonEn: string;
      reasonZh: string;
      imageSrc: string;
      catalogUrl: string;
    }>;
  };
  howItWorks: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    steps: Array<{
      number: string;
      title: LocalizedText;
      body: LocalizedText;
    }>;
  };
  fullCatalog: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    body: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    catalogUrl: string;
  };
  finalCta: {
    h2: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
};

// P2 阶段会填充完整数据
export const productsContent: ProductsContent = {
  hero: {
    eyebrow: { en: "05 — Products & Catalog", zh: "05 — 产品与精选" },
    title: { en: "Products page coming online.", zh: "产品页面即将上线。" },
    pullQuote: { en: "Loading...", zh: "加载中..." },
    author: { en: "— The Decoropic Team", zh: "— Decoropic 团队" }
  },
  problem: { eyebrow: { en: "", zh: "" }, h2: { en: "", zh: "" }, pullQuote: { en: "", zh: "" }, items: [] },
  ourWay: { eyebrow: { en: "", zh: "" }, h2: { en: "", zh: "" }, items: [] },
  selectionGuides: { eyebrow: { en: "", zh: "" }, h2: { en: "", zh: "" }, categories: [] },
  featuredPicks: { eyebrow: { en: "", zh: "" }, h2: { en: "", zh: "" }, items: [] },
  howItWorks: { eyebrow: { en: "", zh: "" }, h2: { en: "", zh: "" }, steps: [] },
  fullCatalog: {
    eyebrow: { en: "", zh: "" },
    h2: { en: "", zh: "" },
    body: { en: "", zh: "" },
    primaryCta: { en: "", zh: "" },
    secondaryCta: { en: "", zh: "" },
    catalogUrl: "https://www.decolovely.com/"
  },
  finalCta: {
    h2: { en: "", zh: "" },
    subtitle: { en: "", zh: "" },
    primaryCta: { en: "", zh: "" },
    secondaryCta: { en: "", zh: "" }
  }
};

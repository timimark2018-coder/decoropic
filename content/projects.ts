import type { LocalizedText } from "@/content/types";

// ════════════════════════════════════════
// Type Definitions
// ════════════════════════════════════════

export type HotelMiniCase = {
  slug: string;
  city: LocalizedText;
  rooms: string;
  duration?: string;
  completedAt: LocalizedText;
  scope: LocalizedText;
  scopeNote?: LocalizedText;
  imageSrc: string;
};

export type FeaturedHotel = {
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  stats: Array<{ value: string; label: LocalizedText }>;
  imageSrc: string;
  detailUrl: string;
};

export type ProjectsContent = {
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    pullQuote: LocalizedText;
    author: LocalizedText;
  };
  infoBar: {
    text: LocalizedText;
  };
  hotelsSection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    featured: FeaturedHotel;
    miniCases: HotelMiniCase[];
    viewAllLabel: LocalizedText;
    viewAllUrl: string;
  };
  villaSection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    conceptLabel: LocalizedText;
    imageSrc: string;
    imageAlt: LocalizedText;
    viewAllLabel: LocalizedText;
    viewAllUrl: string;
  };
  residentialSection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    images: Array<{
      src: string;
      alt: LocalizedText;
    }>;
    viewAllLabel: LocalizedText;
    viewAllUrl: string;
  };
  supplyProcessSection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    images: Array<{
      src: string;
      alt: LocalizedText;
      stage: LocalizedText;
    }>;
    viewAllLabel: LocalizedText;
    viewAllUrl: string;
  };
  finalCta: {
    h2: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
};

// ════════════════════════════════════════
// Content Data
// ════════════════════════════════════════

export const projectsContent: ProjectsContent = {
  // ════════════════════════════════════════
  // HERO
  // ════════════════════════════════════════
  hero: {
    eyebrow: {
      en: "06 — Projects",
      zh: "06 — 项目作品"
    },
    title: {
      en: "Where We Build. What We've Built.",
      zh: "我们在哪里建造。我们建造了什么。"
    },
    pullQuote: {
      en: "26 years in cross-border trade. The proof is the project.",
      zh: "26 年跨境贸易。证据就是项目本身。"
    },
    author: {
      en: "— The Decoropic Team",
      zh: "— Decoropic 团队"
    }
  },

  // ════════════════════════════════════════
  // Info Bar
  // ════════════════════════════════════════
  infoBar: {
    text: {
      en: "26 years · 200+ projects · Ghana-based since 2005",
      zh: "26 年 · 200+ 项目 · 2005 年起深耕加纳"
    }
  },

  // ════════════════════════════════════════
  // 01 — Hotel & Commercial Projects
  // ════════════════════════════════════════
  hotelsSection: {
    eyebrow: {
      en: "01 — Hotel & Commercial Projects",
      zh: "01 — 酒店及商业空间"
    },
    h2: {
      en: "Hospitality at scale, delivered on time.",
      zh: "规模化精品酒店，按时交付。"
    },
    intro: {
      en: "Three hotel projects across Ghana — Kumasi, Tamale, Accra. 276+ rooms delivered. From boutique villas to mid-scale operations, we handle hospitality with method.",
      zh: "三个酒店项目，覆盖加纳南北中——Kumasi、Tamale、Accra。276+ 间客房交付。从精品酒店到中型运营，我们用系统化方法处理酒店项目。"
    },
    featured: {
      slug: "kumasi-boutique-hotel",
      title: {
        en: "Kumasi Boutique Hotel",
        zh: "Kumasi 精品酒店"
      },
      subtitle: {
        en: "Featured · Kumasi · 2025",
        zh: "重点项目 · Kumasi · 2025"
      },
      summary: {
        en: "76 rooms across two buildings — 32 new build, 40 renovation. Six coordinated container shipments. 180 days from signing to handover. Urban Luxury, redefined for Kumasi.",
        zh: "76 间客房，分布在 2 栋楼——32 间新建，40 间翻新。6 次精准发货协调。180 天从签约到交付。都市奢华，为 Kumasi 重新定义。"
      },
      stats: [
        { value: "76", label: { en: "Rooms", zh: "间客房" } },
        { value: "180", label: { en: "Days", zh: "天交付" } },
        { value: "6", label: { en: "Shipments", zh: "次发货" } },
        { value: "0", label: { en: "Wasted material", zh: "浪费材料" } }
      ],
      imageSrc: "/images/projects/hotel-kumasi.jpg",
      detailUrl: "/projects/hotels/kumasi-boutique-hotel"
    },
    miniCases: [
      {
        slug: "tamale-boutique-hotel",
        city: { en: "Tamale", zh: "Tamale" },
        rooms: "80+",
        duration: "12 months",
        completedAt: { en: "Dec 2024", zh: "2024 年 12 月" },
        scope: {
          en: "Turnkey delivery + supervision",
          zh: "交钥匙交付 + 现场监督"
        },
        imageSrc: "/images/projects/hotel-tamale.jpg"
      },
      {
        slug: "accra-hotel-partial",
        city: { en: "Accra", zh: "Accra" },
        rooms: "120+",
        completedAt: { en: "Apr 2026 (Just Delivered)", zh: "2026 年 4 月（刚交付）" },
        scope: {
          en: "Partial scope · Materials & supervision",
          zh: "部分参与 · 材料供应 + 安装监督"
        },
        scopeNote: {
          en: "Decoropic provided design, materials and installation supervision for selected zones.",
          zh: "Decoropic 为部分区域提供设计、材料供应及安装监督。"
        },
        imageSrc: "/images/projects/hotel-accra.jpg"
      }
    ],
    viewAllLabel: {
      en: "View All Hotel Projects →",
      zh: "查看所有酒店项目 →"
    },
    viewAllUrl: "/projects/hotels"
  },

  // ════════════════════════════════════════
  // 02 — Villa Concept Cases
  // ════════════════════════════════════════
  villaSection: {
    eyebrow: {
      en: "02 — Villa Concept Cases",
      zh: "02 — 高端别墅概念案例"
    },
    h2: {
      en: "Where design begins.",
      zh: "设计开始的地方。"
    },
    intro: {
      en: "Conceptual design proposals for Ghana's high-end residential market. Renderings — not built projects. We use these to start conversations with clients about what's possible.",
      zh: "面向加纳高端住宅市场的概念设计提案。这些是渲染图——不是已建成的项目。我们用它们与客户开启关于「可能性」的对话。"
    },
    conceptLabel: {
      en: "CONCEPT CASE",
      zh: "概念案例"
    },
    imageSrc: "/images/projects/villa-concept-east-legon.jpg",
    imageAlt: {
      en: "East Legon Luxury Villa concept rendering",
      zh: "East Legon 高端别墅概念渲染"
    },
    viewAllLabel: {
      en: "View All Concept Cases →",
      zh: "查看所有概念案例 →"
    },
    viewAllUrl: "/projects/villas"
  },

  // ════════════════════════════════════════
  // 03 — Residential References
  // ════════════════════════════════════════
  residentialSection: {
    eyebrow: {
      en: "03 — Residential References",
      zh: "03 — 住宅项目参考"
    },
    h2: {
      en: "Real homes. Real materials. Real Ghana.",
      zh: "真实住宅。真实材料。真实加纳。"
    },
    intro: {
      en: "Material applications, partial spaces, design proposals — drawn from a portfolio of Ghana residential projects. Selected glimpses of work shipped, installed, lived in.",
      zh: "材料应用、局部空间、设计提案——来自加纳住宅项目的精选片段。已交付、已安装、有人居住的真实作品。"
    },
    images: [
      { src: "/images/projects/residential-1.jpg", alt: { en: "Residential interior 1", zh: "住宅室内 1" } },
      { src: "/images/projects/residential-2.jpg", alt: { en: "Residential interior 2", zh: "住宅室内 2" } },
      { src: "/images/projects/residential-3.jpg", alt: { en: "Residential interior 3", zh: "住宅室内 3" } },
      { src: "/images/projects/residential-4.jpg", alt: { en: "Residential interior 4", zh: "住宅室内 4" } }
    ],
    viewAllLabel: {
      en: "View Full Gallery →",
      zh: "查看完整图集 →"
    },
    viewAllUrl: "/projects/residential"
  },

  // ════════════════════════════════════════
  // 04 — China-to-Ghana Supply Process
  // ════════════════════════════════════════
  supplyProcessSection: {
    eyebrow: {
      en: "04 — China-to-Ghana Supply Process",
      zh: "04 — 中国到加纳供应流程"
    },
    h2: {
      en: "How a container becomes a finished room.",
      zh: "一个集装箱如何变成一间完整的客房。"
    },
    intro: {
      en: "26 years of cross-border trade compressed into a single workflow. Factory inspection in China → packing → ocean freight → port clearance → inland transport to Kumasi or Accra → on-site installation supervision. We don't outsource any link.",
      zh: "26 年跨境贸易浓缩为一个工作流。中国工厂质检 → 装柜打包 → 海运 → 港口清关 → 内陆运输到 Kumasi 或 Accra → 现场安装监督。我们不外包任何一个环节。"
    },
    images: [
      {
        src: "/images/projects/supply-1.jpg",
        alt: { en: "Container packing", zh: "装柜" },
        stage: { en: "Packing", zh: "装柜" }
      },
      {
        src: "/images/projects/supply-2.jpg",
        alt: { en: "Factory inspection", zh: "工厂质检" },
        stage: { en: "Factory", zh: "工厂" }
      },
      {
        src: "/images/projects/supply-3.jpg",
        alt: { en: "Transport", zh: "运输" },
        stage: { en: "Transport", zh: "运输" }
      },
      {
        src: "/images/projects/supply-4.jpg",
        alt: { en: "On-site delivery", zh: "现场交付" },
        stage: { en: "Delivery", zh: "现场交付" }
      }
    ],
    viewAllLabel: {
      en: "View Full Process →",
      zh: "查看完整流程 →"
    },
    viewAllUrl: "/projects/supply-process"
  },

  // ════════════════════════════════════════
  // Final CTA
  // ════════════════════════════════════════
  finalCta: {
    h2: {
      en: "Have a project of your own?",
      zh: "你有自己的项目吗？"
    },
    subtitle: {
      en: "Tell us about your vision. We'll handle the method.",
      zh: "告诉我们你的愿景。方法我们来处理。"
    },
    primaryCta: {
      en: "Book Consultation",
      zh: "预约咨询"
    },
    secondaryCta: {
      en: "View Solutions",
      zh: "查看空间方案"
    }
  }
};

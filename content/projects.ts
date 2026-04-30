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
  images: string[];
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
    viewAllLabel?: LocalizedText;
    viewAllUrl?: string;
  };
  villaSection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    conceptLabel: LocalizedText;
    imageSrc: string;
    imageAlt: LocalizedText;
    viewAllLabel?: LocalizedText;
    viewAllUrl?: string;
  };
  residentialSection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    images: Array<{
      src: string;
      alt: LocalizedText;
    }>;
    viewAllLabel?: LocalizedText;
    viewAllUrl?: string;
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
    factoryStrip?: {
      eyebrow: LocalizedText;
      h3: LocalizedText;
      intro: LocalizedText;
      images: Array<{
        src: string;
        stage: LocalizedText;
        caption: LocalizedText;
      }>;
    };
    viewAllLabel?: LocalizedText;
    viewAllUrl?: string;
  };
  finalCta: {
    h2: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
};

// ════════════════════════════════════════
// Kumasi Detail Page Type
// ════════════════════════════════════════

export type KumasiDetailContent = {
  slug: string;
  meta: {
    title: LocalizedText;
    description: LocalizedText;
  };
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    pullQuote: LocalizedText;
    author: LocalizedText;
    heroImage: string;
  };
  infoBar: {
    text: LocalizedText;
  };
  brief: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    body: LocalizedText;
    stats: Array<{ value: string; label: LocalizedText }>;
  };
  vision: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    body: LocalizedText;
    image: string;
  };
  spaces: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    items: Array<{
      number: string;
      badge: LocalizedText;
      title: LocalizedText;
      body: LocalizedText;
      image: string;
    }>;
  };
  materials: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    items: Array<{
      title: LocalizedText;
      body: LocalizedText;
    }>;
  };
  build: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    items: Array<{
      number: string;
      title: LocalizedText;
      body: LocalizedText;
    }>;
  };
  numbers: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    stats: Array<{ value: string; label: LocalizedText }>;
  };
  reflection: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    body: LocalizedText;
    author: LocalizedText;
  };
  weCanDoBetter: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    items: Array<{
      area: LocalizedText;
      current: {
        label: LocalizedText;
        caption: LocalizedText;
        image: string;
      };
      improved: {
        label: LocalizedText;
        caption: LocalizedText;
        image: string;
      };
    }>;
    closingQuote: LocalizedText;
  };
  behindTheBuild: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    images: Array<{
      src: string;
      caption: LocalizedText;
      aspect?: "square" | "portrait" | "landscape";
    }>;
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
        images: [
          "/images/projects/hotels/tamale-01.jpg",
          "/images/projects/hotels/tamale-02.jpg",
          "/images/projects/hotels/tamale-03.jpg",
          "/images/projects/hotels/tamale-04.jpg",
          "/images/projects/hotels/tamale-05.jpg",
          "/images/projects/hotels/tamale-06.jpg",
          "/images/projects/hotels/tamale-07.jpg",
          "/images/projects/hotels/tamale-08.jpg",
          "/images/projects/hotels/tamale-09.jpg",
          "/images/projects/hotels/tamale-10.jpg",
          "/images/projects/hotels/tamale-11.jpg",
          "/images/projects/hotels/tamale-12.jpg",
          "/images/projects/hotels/tamale-13.jpg",
          "/images/projects/hotels/tamale-14.jpg"
        ]
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
        images: [
          "/images/projects/hotels/accra-01.jpg",
          "/images/projects/hotels/accra-02.jpg",
          "/images/projects/hotels/accra-03.jpg",
          "/images/projects/hotels/accra-04.jpg",
          "/images/projects/hotels/accra-05.jpg"
        ]
      }
    ]
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
      en: "Conceptual design proposals for Ghana's high-end residential market. We use these to start conversations with clients about what's possible.",
      zh: "面向加纳高端住宅市场的概念设计提案。我们用它们与客户开启关于「可能性」的对话。"
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
      en: "Read Full Case Study →",
      zh: "查看完整案例 →"
    },
    viewAllUrl: "/projects/villas/east-legon-luxury-villa"
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
    ]
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
    factoryStrip: {
      eyebrow: {
        en: "Inside the Factory",
        zh: "工厂深处"
      },
      h3: {
        en: "Behind the four steps above.",
        zh: "在以上四个阶段背后。"
      },
      intro: {
        en: "26 years of factory partnerships across China. Every order — every day — passes through our hands at every stage. Production, painting, packing, inspection, loading. We are there.",
        zh: "26 年中国工厂合作。每一笔订单——每一天——都经过我们手中的每一个环节。生产、上油漆、打包、验货、装柜。我们都在场。"
      },
      images: [
        {
          src: "/images/projects/factory/factory-01-production.jpg",
          stage: { en: "Production", zh: "生产" },
          caption: { en: "Production · 01", zh: "生产 · 01" }
        },
        {
          src: "/images/projects/factory/factory-02-production.jpg",
          stage: { en: "Production", zh: "生产" },
          caption: { en: "Production · 02", zh: "生产 · 02" }
        },
        {
          src: "/images/projects/factory/factory-03-painting.jpg",
          stage: { en: "Painting", zh: "上油漆" },
          caption: { en: "Painting · 03", zh: "上油漆 · 03" }
        },
        {
          src: "/images/projects/factory/factory-04-painting.jpg",
          stage: { en: "Painting", zh: "上油漆" },
          caption: { en: "Painting · 04", zh: "上油漆 · 04" }
        },
        {
          src: "/images/projects/factory/factory-05-packing.jpg",
          stage: { en: "Packing", zh: "成品打包" },
          caption: { en: "Packing · 05", zh: "打包 · 05" }
        },
        {
          src: "/images/projects/factory/factory-06-packing.jpg",
          stage: { en: "Packing", zh: "成品打包" },
          caption: { en: "Packing · 06", zh: "打包 · 06" }
        },
        {
          src: "/images/projects/factory/factory-07-inspection.jpg",
          stage: { en: "Inspection", zh: "验货" },
          caption: { en: "Inspection · 07", zh: "验货 · 07" }
        },
        {
          src: "/images/projects/factory/factory-08-inspection.jpg",
          stage: { en: "Inspection", zh: "验货" },
          caption: { en: "Inspection · 08", zh: "验货 · 08" }
        },
        {
          src: "/images/projects/factory/factory-09-inspection.jpg",
          stage: { en: "Inspection", zh: "验货" },
          caption: { en: "Inspection · 09", zh: "验货 · 09" }
        },
        {
          src: "/images/projects/factory/factory-10-loading.jpg",
          stage: { en: "Loading", zh: "装柜" },
          caption: { en: "Loading · 10", zh: "装柜 · 10" }
        },
        {
          src: "/images/projects/factory/factory-11-loading.jpg",
          stage: { en: "Loading", zh: "装柜" },
          caption: { en: "Loading · 11", zh: "装柜 · 11" }
        },
        {
          src: "/images/projects/factory/factory-12-loading.jpg",
          stage: { en: "Loading", zh: "装柜" },
          caption: { en: "Loading · 12", zh: "装柜 · 12" }
        },
        {
          src: "/images/projects/factory/factory-13-loading.jpg",
          stage: { en: "Loading", zh: "装柜" },
          caption: { en: "Loading · 13", zh: "装柜 · 13" }
        },
        {
          src: "/images/projects/factory/factory-14-loading.jpg",
          stage: { en: "Loading", zh: "装柜" },
          caption: { en: "Loading · 14", zh: "装柜 · 14" }
        }
      ]
    }
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

// ════════════════════════════════════════
// Kumasi Detail Content
// ════════════════════════════════════════

export const kumasiDetailContent: KumasiDetailContent = {
  slug: "kumasi-boutique-hotel",

  meta: {
    title: {
      en: "Kumasi Boutique Hotel — Decoropic Project Case Study",
      zh: "Kumasi 精品酒店 — Decoropic 项目案例"
    },
    description: {
      en: "76 rooms across two buildings. Six coordinated shipments. 180 days from contract to handover. Urban Luxury, redefined for Kumasi.",
      zh: "76 间客房，分布在 2 栋楼。6 次精准发货。180 天从签约到交付。都市奢华，为 Kumasi 重新定义。"
    }
  },

  hero: {
    eyebrow: {
      en: "Hotel Project · Kumasi · 2025",
      zh: "酒店项目 · Kumasi · 2025"
    },
    title: {
      en: "Kumasi Boutique Hotel",
      zh: "Kumasi 精品酒店"
    },
    subtitle: {
      en: "76 Rooms in 180 Days — Across Two Buildings.",
      zh: "76 间客房，180 天交付——分布在 2 栋楼。"
    },
    pullQuote: {
      en: "Two buildings. Six shipments. Zero waste. One vision.",
      zh: "两栋楼。六次发货。零浪费。一个愿景。"
    },
    author: {
      en: "— The Decoropic Project Team",
      zh: "— Decoropic 项目团队"
    },
    heroImage: "/images/projects/kumasi/hero-lobby.jpg"
  },

  infoBar: {
    text: {
      en: "Kumasi · Ghana · 6 months · Turnkey delivery",
      zh: "Kumasi · 加纳 · 6 个月 · 交钥匙工程"
    }
  },

  brief: {
    eyebrow: {
      en: "01 — The Brief",
      zh: "01 — 项目背景"
    },
    h2: {
      en: "What we were asked to deliver.",
      zh: "我们被委托交付什么。"
    },
    body: {
      en: "A boutique hotel in Kumasi. 76 rooms across two buildings — one new, one renovated. Six months from contract to opening. Turnkey delivery with on-site supervision. The owner had a vision; we had a method.",
      zh: "Kumasi 的一家精品酒店。76 间客房，分布在 2 栋楼——一栋新建，一栋翻新。从签约到开业 6 个月。交钥匙交付 + 现场监督。业主有愿景；我们有方法。"
    },
    stats: [
      { value: "32", label: { en: "New Build", zh: "间新建" } },
      { value: "40", label: { en: "Renovated", zh: "间翻新" } },
      { value: "4", label: { en: "Suites", zh: "间套房" } },
      { value: "76", label: { en: "Total Rooms", zh: "总客房" } }
    ]
  },

  vision: {
    eyebrow: {
      en: "02 — The Vision",
      zh: "02 — 设计灵魂"
    },
    h2: {
      en: "Urban Luxury, redefined for Kumasi.",
      zh: "都市奢华，为 Kumasi 重新定义。"
    },
    body: {
      en: "This is not another international chain hotel. This is Kumasi's first true Urban Luxury statement. Walnut. Marble. Brass. Layered light. We brought global hospitality standards. We kept West African warmth. The result speaks Kumasi — but in a global accent.",
      zh: "这不是又一家国际连锁酒店。这是 Kumasi 第一次真正的都市奢华表达。核桃木。大理石。黄铜。分层光线。我们带来了全球酒店标准。我们保留了西非的温暖。最终成果说着 Kumasi 的语言——但用全球口音。"
    },
    image: "/images/projects/kumasi/vision-fullshot.jpg"
  },

  spaces: {
    eyebrow: { en: "03 — The Spaces", zh: "03 — 空间篇" },
    h2: {
      en: "Six spaces. Six experiences.",
      zh: "六个空间。六种体验。"
    },
    items: [
      {
        number: "01 / 06",
        badge: { en: "THE ARRIVAL", zh: "到达时刻" },
        title: { en: "Lobby", zh: "大堂" },
        body: {
          en: "A 24-meter axis of walnut and warm light. Marble underfoot, framed art at eye level. The first impression sets the tone for everything that follows.",
          zh: "24 米胡桃木长廊与暖光中轴。脚下大理石，眼前画作。第一印象为之后的一切定调。"
        },
        image: "/images/projects/kumasi/space-lobby.jpg"
      },
      {
        number: "02 / 06",
        badge: { en: "THE STANDARD", zh: "标准之上" },
        title: { en: "Guest Rooms", zh: "客房" },
        body: {
          en: "72 rooms. Identical specifications. Italian solid walnut wardrobes, custom upholstered headboards, brass fittings throughout. No room is the lesser room.",
          zh: "72 间客房，规格统一。意大利实木胡桃柜体，定制软包床头，全屋黄铜配件。没有任何一间是次选。"
        },
        image: "/images/projects/kumasi/space-guestroom.jpg"
      },
      {
        number: "03 / 06",
        badge: { en: "THE PRIVILEGE", zh: "尊享之处" },
        title: { en: "Suites", zh: "套房" },
        body: {
          en: "Four suites. Each one larger by design — extended wood-clad TV wall, lounge chair by the corner, deeper headboard cove. Space measured in breathing room, not just square meters.",
          zh: "四间套房，皆经放大设计——延伸木饰电视墙、转角休闲椅、加深床头光带。空间以呼吸感丈量，而非平米。"
        },
        image: "/images/projects/kumasi/space-suite.jpg"
      },
      {
        number: "04 / 06",
        badge: { en: "THE PAUSE", zh: "停留之间" },
        title: { en: "Lobby Lounge", zh: "大堂休息区" },
        body: {
          en: "Where the day pauses. Deep tan leather, warm walnut paneling, soft cove light over polished cream marble. The kind of space you sit in for one more conversation before checking in.",
          zh: "日程在此停顿。深棕皮革、暖胡桃木墙、米色大理石上的柔和反光。让人愿意在入住前再多谈一会儿的那种空间。"
        },
        image: "/images/projects/kumasi/space-lounge.jpg"
      },
      {
        number: "05 / 06",
        badge: { en: "THE NIGHTCAP", zh: "夜深小酌" },
        title: { en: "Bar", zh: "酒吧" },
        body: {
          en: "Brass-framed back bar. Smoked mirror reflecting the bottle wall. Marble counter, leather stools at amber height. The kind of bar where one more drink makes sense.",
          zh: "黄铜框架背吧，烟熏镜映照酒墙。大理石吧台、琥珀色皮椅。让人愿意再点一杯的那种酒吧。"
        },
        image: "/images/projects/kumasi/space-bar.jpg"
      },
      {
        number: "06 / 06",
        badge: { en: "THE PASSAGE", zh: "归途回廊" },
        title: { en: "Corridors", zh: "走廊" },
        body: {
          en: "Most hotels treat corridors as transit. We treated them as arrival. Wood-clad walls, recessed light at floor and ceiling, room numbers backlit at eye level. Every step says: you've arrived somewhere.",
          zh: "多数酒店把走廊当通道。我们把它当作\"已到达\"。木饰墙板、上下双重光带、与视线齐平的房号背光。每一步都在说：你已抵达某处。"
        },
        image: "/images/projects/kumasi/space-corridor.jpg"
      }
    ]
  },

  materials: {
    eyebrow: {
      en: "04 — The Materials",
      zh: "04 — 关键材料"
    },
    h2: {
      en: "Five materials. Five stories.",
      zh: "五种材料。五个故事。"
    },
    items: [
      {
        title: { en: "Porcelain Slab", zh: "岩板" },
        body: {
          en: "1.5 × 3m slabs across 76 bathrooms — fewest grout lines, strongest visual continuity.",
          zh: "1.5 × 3 米岩板覆盖 76 间卫浴——缝隙最少，视觉延续最强。"
        }
      },
      {
        title: { en: "Marble", zh: "大理石" },
        body: {
          en: "Lobby and 4 suites only — where it earns its place.",
          zh: "仅大堂和 4 间套房使用——它配得上它的位置。"
        }
      },
      {
        title: { en: "Solid Wood Furniture", zh: "实木家具" },
        body: {
          en: "76 rooms, identical specifications. Italian walnut. No veneer.",
          zh: "76 间房，规格统一。意大利核桃木。非贴皮。"
        }
      },
      {
        title: { en: "Brass Hardware", zh: "黄铜五金" },
        body: {
          en: "20 years from now, the doors will still feel new.",
          zh: "20 年后，门把仍会有新品的手感。"
        }
      },
      {
        title: { en: "Smart Lighting", zh: "智能灯控" },
        body: {
          en: "Track + downlight + scene control. The room knows if it's morning or night.",
          zh: "轨道 + 筒灯 + 场景控制。房间知道现在是早晨还是夜晚。"
        }
      }
    ]
  },

  build: {
    eyebrow: {
      en: "05 — The Build",
      zh: "05 — 施工亮点"
    },
    h2: {
      en: "How we did it. In four moves.",
      zh: "我们如何做到。四个关键动作。"
    },
    items: [
      {
        number: "01",
        title: { en: "SPEED", zh: "交付速度" },
        body: {
          en: "180 days. 76 rooms. From contract to open doors.",
          zh: "180 天。76 间客房。从签约到开门迎客。"
        }
      },
      {
        number: "02",
        title: { en: "LOGISTICS", zh: "物流分批" },
        body: {
          en: "Six shipments, perfectly timed to construction phases. No materials waste. No on-site shortage.",
          zh: "六次发货，与施工进度精准匹配。没有材料浪费。没有现场短缺。"
        }
      },
      {
        number: "03",
        title: { en: "ADAPTATION", zh: "中途适应" },
        body: {
          en: "The owner changed plans mid-project. We adapted twice. Quality unchanged.",
          zh: "业主中途改变了计划。我们调整了两次。品质未变。"
        }
      },
      {
        number: "04",
        title: { en: "LOCAL TEAM", zh: "本地团队" },
        body: {
          en: "We trained 24+ Ghana craftsmen on-site. They didn't just build a hotel — they took home a craft.",
          zh: "我们现场培训了 24+ 加纳工匠。他们不只建了一座酒店——他们带走了一门手艺。"
        }
      }
    ]
  },

  numbers: {
    eyebrow: {
      en: "06 — The Numbers",
      zh: "06 — 数据见证"
    },
    h2: {
      en: "What the project measured.",
      zh: "项目的数字凭证。"
    },
    stats: [
      { value: "76", label: { en: "Rooms delivered", zh: "间客房交付" } },
      { value: "180", label: { en: "Days to handover", zh: "天到交付" } },
      { value: "6", label: { en: "Coordinated shipments", zh: "次精准发货" } },
      { value: "0", label: { en: "Wasted material", zh: "浪费材料" } }
    ]
  },

  reflection: {
    eyebrow: {
      en: "07 — A Reflection",
      zh: "07 — 创始人手记"
    },
    h2: {
      en: "The 15-year-old tile.",
      zh: "那块 15 年前的瓷砖。"
    },
    body: {
      en: "The hardest part wasn't the logistics, the timing, or the training. It was a tile. The owner insisted on a specific line — discontinued 15 years ago. We tracked it down. We adapted the entire Urban Luxury vision around its deeper-than-expected tone. We don't always get the design we envisioned. We don't always control what materials walk through the door. But we control everything we can about what we can control — the sourcing, the supervision, the standard. After 26 years in this trade, that's the only philosophy that keeps working.",
      zh: "最难的不是物流，不是工期，也不是培训。是一款瓷砖。业主坚持要用一款已停产 15 年的型号。我们把它找到了。我们围绕它比原计划更深的色调，重新调整了整个'都市奢华'的设计走向。我们无法每次都做出心中的完美设计。我们无法掌控走进门的每一种材料。但我们尽我们所能，做好我们能掌控的——采购、监督、标准。26 年了，只有这条原则一直管用。"
    },
    author: {
      en: "— The Decoropic Founder",
      zh: "— Decoropic 创始人"
    }
  },

  weCanDoBetter: {
    eyebrow: {
      en: "08 — We Can Do Better",
      zh: "08 — 可以做得更好"
    },
    h2: {
      en: "We Can Do Better.",
      zh: "可以做得更好。"
    },
    intro: {
      en: "Honesty is part of how we work. The owner's preferred tile carried a deeper tone than we'd have chosen — across the lobby, the lounge, and the corridors. With a lighter cream or beige porcelain, the entire ground floor would breathe differently. Three rooms, three side-by-side comparisons. This is what we'd push for next time.",
      zh: "诚实是我们工作的一部分。业主指定的瓷砖比我们会选择的色调更深——大堂、休息区、走廊都是。如果换成米黄或浅米色岩板，整个一层空间的呼吸感会完全不同。三个区域，三组并排对比。这是下一次我们会争取的。"
    },
    items: [
      {
        area: { en: "Lobby Overall", zh: "大堂整体" },
        current: {
          label: { en: "CURRENT", zh: "现状" },
          caption: {
            en: "Owner-specified darker tile.",
            zh: "业主指定的深色瓷砖。"
          },
          image: "/images/projects/kumasi/wcdb-lobby-current.jpg"
        },
        improved: {
          label: { en: "IMPROVED", zh: "改善后" },
          caption: {
            en: "Lighter cream porcelain — ~40% brighter.",
            zh: "浅米色岩板——明亮度提升约 40%。"
          },
          image: "/images/projects/kumasi/wcdb-lobby-improved.jpg"
        }
      },
      {
        area: { en: "Lobby Lounge Area", zh: "大堂休息区" },
        current: {
          label: { en: "CURRENT", zh: "现状" },
          caption: {
            en: "Heavy floor tone weighs the seating.",
            zh: "深色地面让座位显得沉重。"
          },
          image: "/images/projects/kumasi/wcdb-lounge-current.jpg"
        },
        improved: {
          label: { en: "IMPROVED", zh: "改善后" },
          caption: {
            en: "Lighter floor lifts the lounge.",
            zh: "浅色地面让休息区轻盈起来。"
          },
          image: "/images/projects/kumasi/wcdb-lounge-improved.jpg"
        }
      },
      {
        area: { en: "Corridors", zh: "走廊" },
        current: {
          label: { en: "CURRENT", zh: "现状" },
          caption: {
            en: "Dark floor compresses the corridor.",
            zh: "深色地面让走廊视觉上压缩。"
          },
          image: "/images/projects/kumasi/wcdb-corridor-current.jpg"
        },
        improved: {
          label: { en: "IMPROVED", zh: "改善后" },
          caption: {
            en: "Lighter floor extends the perspective.",
            zh: "浅色地面延展走廊的视觉纵深。"
          },
          image: "/images/projects/kumasi/wcdb-corridor-improved.jpg"
        }
      }
    ],
    closingQuote: {
      en: "Better is never finished. That's the work.",
      zh: "更好，永远未完。这就是工作的本质。"
    }
  },

  behindTheBuild: {
    eyebrow: {
      en: "09 — Behind the Build",
      zh: "09 — 幕后施工"
    },
    h2: {
      en: "From empty floors to opening doors.",
      zh: "从毛坯地板到开门迎客。"
    },
    intro: {
      en: "180 days of fieldwork condensed. Material arriving. Local craftsmen at work. Site supervision in motion. The hotel guests will never see this — but it is where the project actually got built.",
      zh: "180 天现场工作的浓缩。材料到场。本地工匠在工作。现场监督在进行。酒店的客人永远不会看到这些——但项目就是在这里真正建造完成的。"
    },
    images: [
      {
        src: "/images/projects/kumasi/build-1.jpg",
        caption: { en: "Material delivery", zh: "材料到场" },
        aspect: "landscape"
      },
      {
        src: "/images/projects/kumasi/build-2.jpg",
        caption: { en: "Floor preparation", zh: "地面基层" },
        aspect: "portrait"
      },
      {
        src: "/images/projects/kumasi/build-3.jpg",
        caption: { en: "Tile installation", zh: "瓷砖铺贴" },
        aspect: "square"
      },
      {
        src: "/images/projects/kumasi/build-4.jpg",
        caption: { en: "Local craftsmen at work", zh: "本地工匠施工" },
        aspect: "landscape"
      },
      {
        src: "/images/projects/kumasi/build-5.jpg",
        caption: { en: "On-site supervision", zh: "现场监督" },
        aspect: "portrait"
      },
      {
        src: "/images/projects/kumasi/build-6.jpg",
        caption: { en: "Joinery work", zh: "木作工艺" },
        aspect: "square"
      },
      {
        src: "/images/projects/kumasi/build-7.jpg",
        caption: { en: "Pre-opening details", zh: "开业前细节" },
        aspect: "landscape"
      },
      {
        src: "/images/projects/kumasi/build-8.jpg",
        caption: { en: "Final QC walkthrough", zh: "最终质检巡场" },
        aspect: "portrait"
      }
    ]
  },

  finalCta: {
    h2: {
      en: "Want this for your hotel project?",
      zh: "想为你的酒店项目这样做？"
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
      en: "View All Hotels",
      zh: "查看所有酒店项目"
    }
  }
};

// ════════════════════════════════════════
// East Legon Villa Concept Case Type
// ════════════════════════════════════════

export type EastLegonVillaContent = {
  slug: string;
  meta: {
    title: LocalizedText;
    description: LocalizedText;
  };
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    pullQuote: LocalizedText;
    author: LocalizedText;
    heroImage: string;
  };
  infoBar: {
    text: LocalizedText;
  };
  briefAndDesign: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    intro: LocalizedText;
    body: LocalizedText;
    images: Array<{
      src: string;
      caption: LocalizedText;
    }>;
  };
  materials: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    body: LocalizedText;
    images: Array<{
      src: string;
      caption: LocalizedText;
    }>;
  };
  onSite: {
    eyebrow: LocalizedText;
    h2: LocalizedText;
    body: LocalizedText;
    images: Array<{
      src: string;
      caption: LocalizedText;
    }>;
  };
  finalCta: {
    h2: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
};

// ════════════════════════════════════════
// East Legon Villa Concept Case Content
// ════════════════════════════════════════

export const eastLegonVillaContent: EastLegonVillaContent = {
  slug: "east-legon-luxury-villa",

  meta: {
    title: {
      en: "East Legon Luxury Villa — Concept Case Study | Decoropic",
      zh: "East Legon 奢华别墅 — 概念案例 | Decoropic"
    },
    description: {
      en: "From the first conversation to materials on site. A concept case showing how Decoropic transforms a client's vision into a delivered villa.",
      zh: "从第一次对话到材料到达工地。概念案例展示 Decoropic 如何把客户愿景变为交付的别墅。"
    }
  },

  hero: {
    eyebrow: {
      en: "Concept Case · East Legon · Ghana",
      zh: "概念案例 · East Legon · 加纳"
    },
    title: {
      en: "East Legon Luxury Villa",
      zh: "East Legon 奢华别墅"
    },
    subtitle: {
      en: "From conversation to completion.",
      zh: "从对话开始，到完工结束。"
    },
    pullQuote: {
      en: "Concept work shows how we think. Delivered work shows how we deliver. This is both.",
      zh: "概念展现我们如何思考。交付展现我们如何兑现。这两者都在这里。"
    },
    author: {
      en: "— The Decoropic Project Team",
      zh: "— Decoropic 项目团队"
    },
    heroImage: "/images/projects/villas/east-legon/hero.jpg"
  },

  infoBar: {
    text: {
      en: "Concept · East Legon · Ghana · Turnkey delivery",
      zh: "概念案例 · East Legon · 加纳 · 交钥匙交付"
    }
  },

  briefAndDesign: {
    eyebrow: {
      en: "01 — The Brief & The Design",
      zh: "01 — 了解需求与洽谈设计"
    },
    h2: {
      en: "We listen first. Then we draw.",
      zh: "我们先听，再画。"
    },
    intro: {
      en: "Every project starts with a conversation — not a portfolio. We understand the family, the lifestyle, the way light moves through the day. Only then do we propose.",
      zh: "每个项目都从对话开始——不是从作品集。我们了解家庭、生活方式、光线在一天中的流动。然后才提出方案。"
    },
    body: {
      en: "For East Legon, the client wanted a private villa that felt warm but expansive. Open public spaces during the day, intimate private quarters at night. Our design proposal came in four space studies — bedroom, bathroom, dining, and hall — each calibrated to that single brief.",
      zh: "在 East Legon 项目中，客户想要一栋私密但开阔的别墅。白天的公共空间开放，夜晚的私人区域亲密。我们的设计提案分为四个空间研究——卧室、卫浴、餐厅、客厅——每个都围绕这一份简单需求展开。"
    },
    images: [
      {
        src: "/images/projects/villas/east-legon/design-overview.jpg",
        caption: { en: "Design Overview", zh: "设计总览" }
      },
      {
        src: "/images/projects/villas/east-legon/space-bedroom.jpg",
        caption: { en: "Bedroom", zh: "卧室" }
      },
      {
        src: "/images/projects/villas/east-legon/space-bathroom.jpg",
        caption: { en: "Bathroom", zh: "卫浴" }
      },
      {
        src: "/images/projects/villas/east-legon/space-dining.jpg",
        caption: { en: "Dining", zh: "餐厅" }
      },
      {
        src: "/images/projects/villas/east-legon/space-hall.jpg",
        caption: { en: "Hall", zh: "客厅" }
      }
    ]
  },

  materials: {
    eyebrow: {
      en: "02 — The Materials",
      zh: "02 — 发货材料"
    },
    h2: {
      en: "From China factory floors to a Ghana villa.",
      zh: "从中国工厂到加纳别墅。"
    },
    body: {
      en: "Once the design is approved, we move into our 26-year specialty: cross-border material delivery. Production, painting, packing, inspection, container loading. Every shipment timed to the construction phase. Every container packed to maximize what arrives intact.",
      zh: "设计通过后，我们进入 26 年专长：跨境材料交付。生产、上漆、打包、验货、装柜。每一次发货精准对应施工阶段。每一个集装箱的打包都为了让到达的材料完好无损。"
    },
    images: [
      {
        src: "/images/projects/villas/east-legon/material-curation.jpg",
        caption: { en: "Material curation", zh: "材料选定" }
      },
      {
        src: "/images/projects/villas/east-legon/container-loading.jpg",
        caption: { en: "Container loading", zh: "装柜准备" }
      }
    ]
  },

  onSite: {
    eyebrow: {
      en: "03 — On Site",
      zh: "03 — 到工地"
    },
    h2: {
      en: "Where China meets Ghana.",
      zh: "中国遇见加纳。"
    },
    body: {
      en: "The materials arrive in Tema port, clear customs, travel inland. On site, our supervision teams work side-by-side with local craftsmen — translating Chinese factory specifications into Ghana installation reality. The villa comes together. The concept becomes a home.",
      zh: "材料抵达 Tema 港，完成清关，驶向内陆。到了工地，我们的现场监督团队与本地工匠并肩工作——把中国工厂的规格转化为加纳现场的施工。别墅成型。概念成为一个家。"
    },
    images: [
      {
        src: "/images/projects/villas/east-legon/delivery-local.jpg",
        caption: { en: "Materials delivered to site", zh: "材料抵达工地" }
      },
      {
        src: "/images/projects/villas/east-legon/villa-completion.jpg",
        caption: { en: "Villa completion", zh: "别墅完工" }
      }
    ]
  },

  finalCta: {
    h2: {
      en: "Have a villa project of your own?",
      zh: "想为你的别墅项目这样做？"
    },
    subtitle: {
      en: "Tell us about your vision. We'll handle the journey.",
      zh: "告诉我们你的愿景。旅程交给我们。"
    },
    primaryCta: {
      en: "Book Consultation",
      zh: "预约咨询"
    },
    secondaryCta: {
      en: "← Back to Projects",
      zh: "← 返回项目"
    }
  }
};

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
      slug: string;
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
    ]
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
    eyebrow: {
      en: "03 — The Spaces",
      zh: "03 — 空间集锦"
    },
    h2: {
      en: "Six spaces. Six experiences.",
      zh: "六个空间。六种体验。"
    },
    items: [
      {
        slug: "lobby",
        title: { en: "Lobby", zh: "大堂" },
        body: {
          en: "The arrival space — first impression of the hotel. Marble floor meets walnut paneling, layered lighting sets the evening mood.",
          zh: "抵达空间——酒店的第一印象。大理石地面与核桃木饰面相遇，分层灯光奠定夜晚的氛围。"
        },
        image: "/images/projects/kumasi/space-lobby.jpg"
      },
      {
        slug: "guest-rooms",
        title: { en: "Guest Rooms", zh: "客房" },
        body: {
          en: "72 rooms, identical specifications. Italian solid walnut. Custom upholstered headboards. Brass fittings throughout.",
          zh: "72 间客房，规格统一。意大利实木核桃。定制软包床头。全屋黄铜五金。"
        },
        image: "/images/projects/kumasi/space-guestroom.jpg"
      },
      {
        slug: "suites",
        title: { en: "Suites", zh: "套房" },
        body: {
          en: "Four suites — each gets the marble accent wall, the larger window seat, the bath with the better view.",
          zh: "四间套房——每一间都有大理石饰面墙、更大的窗边卡座、视野更好的浴室。"
        },
        image: "/images/projects/kumasi/space-suite.jpg"
      },
      {
        slug: "lounge",
        title: { en: "Lobby Lounge", zh: "大堂休息区" },
        body: {
          en: "Where the day pauses. Deep leather, warm wood paneling, soft cove light over polished cream marble. The kind of space you sit in for one more conversation, one more call, one more moment before checking in.",
          zh: "让一天停下脚步的地方。深棕真皮、暖色木饰墙板、浅米色岩板上的间接灯光。是那种你想多停留一刻的空间——多一段对话、多一通电话、check-in 前的最后片刻。"
        },
        image: "/images/projects/kumasi/space-lounge.jpg"
      },
      {
        slug: "bar",
        title: { en: "Bar", zh: "酒吧" },
        body: {
          en: "Brass-framed back bar. Smoked mirror. The kind of bar where you stay for one more drink.",
          zh: "黄铜框背柜。烟熏镜面。是那种让你想多留一杯的酒吧。"
        },
        image: "/images/projects/kumasi/space-bar.jpg"
      },
      {
        slug: "corridors",
        title: { en: "Corridors", zh: "走廊" },
        body: {
          en: "Most hotels treat corridors as transit. We treated them as narrative space. Wood paneling. Wall sconces every 2.4m. Carpets that tell guests they've arrived somewhere.",
          zh: "大多数酒店把走廊当成通道。我们把它当成叙事空间。木饰面。每 2.4 米一盏壁灯。地毯告诉客人：你已经到了某个特别的地方。"
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

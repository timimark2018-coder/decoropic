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
      imageSrc: string;
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

export const productsContent: ProductsContent = {
  // ════════════════════════════════════════
  // HERO
  // ════════════════════════════════════════
  hero: {
    eyebrow: {
      en: "05 — Products & Catalog",
      zh: "05 — 产品与精选"
    },
    title: {
      en: "From 1,000+ factories. One contract. One delivery.",
      zh: "从 1,000+ 家工厂。一份合同。一次发货。"
    },
    pullQuote: {
      en: "We don't sell furniture. We curate the entire material ecosystem of your project — so you don't have to.",
      zh: "我们不只卖产品。我们为你的项目甄选整个材料生态——这样你就不必亲自做。"
    },
    author: {
      en: "— The Decoropic Sourcing Team",
      zh: "— Decoropic 采购团队"
    }
  },

  // ════════════════════════════════════════
  // 01 — Problem
  // ════════════════════════════════════════
  problem: {
    eyebrow: {
      en: "01 — The Procurement Problem",
      zh: "01 — 真实问题"
    },
    h2: {
      en: "Where projects actually fail.",
      zh: "项目真正失败的地方。"
    },
    pullQuote: {
      en: "Most clients don't lose budget on bad designs. They lose it on managing six suppliers, three logistics agents, and one container that arrives missing parts.",
      zh: "大多数业主的预算不是输在差的设计上。他们输在管理 6 家供应商、3 家物流、和一个抵港后缺件的集装箱上。"
    },
    items: [
      {
        eyebrow: { en: "The visible cost", zh: "看得见的成本" },
        title: { en: "Price tags don't lie.", zh: "价格不会说谎。" },
        body: {
          en: "The price on the invoice is just the tip of the iceberg. The real procurement cost lives below the waterline.",
          zh: "价格表上写的成本，其实只是冰山一角。真正的采购成本藏在水面之下。"
        }
      },
      {
        eyebrow: { en: "The invisible cost", zh: "看不见的成本" },
        title: { en: "Coordination is the cost.", zh: "协调本身就是成本。" },
        body: {
          en: "Six suppliers means six contracts, six lead times, six WhatsApp threads, and six chances for something to go wrong.",
          zh: "6 家供应商 = 6 份合同、6 个交期、6 条微信沟通线、6 次出问题的机会。"
        }
      },
      {
        eyebrow: { en: "The hidden cost", zh: "看不见的隐藏成本" },
        title: { en: "Quality drift kills projects.", zh: "品质漂移摧毁项目。" },
        body: {
          en: "When 6 factories use 6 different standards, the project drifts. The marble doesn't match the tiles. The tiles don't match the cabinetry. The whole space loses coherence.",
          zh: "当 6 家工厂用 6 套标准，整个项目就漂移了。大理石和瓷砖对不上号。瓷砖和橱柜也对不上号。整个空间失去连贯性。"
        }
      }
    ]
  },

  // ════════════════════════════════════════
  // 02 — Our Way
  // ════════════════════════════════════════
  ourWay: {
    eyebrow: {
      en: "02 — The Decoropic Way",
      zh: "02 — Decoropic 之道"
    },
    h2: {
      en: "One contact. One contract. One delivery.",
      zh: "一个对接人。一份合同。一次发货。"
    },
    items: [
      {
        number: "01",
        title: { en: "One source", zh: "一个来源" },
        body: {
          en: "We work with 1,000+ vetted factories across China. You work with one contact at Decoropic. The complexity stays on our side.",
          zh: "我们对接 1,000+ 家精挑细选的中国工厂。你只对接 Decoropic 的 1 个人。复杂性留在我们这一侧。"
        }
      },
      {
        number: "02",
        title: { en: "One contract", zh: "一份合同" },
        body: {
          en: "All materials in a single document. One legal entity, one set of terms, one invoice. Not six.",
          zh: "所有材料一份合同。一个法律主体，一套条款，一张发票。不是 6 份。"
        }
      },
      {
        number: "03",
        title: { en: "One delivery", zh: "一次发货" },
        body: {
          en: "One container, one customs clearance, one delivery date. Everything arrives together — checked, packed, and tracked by us.",
          zh: "一个集装箱，一次清关，一个交货日期。一切同时抵达——由我们检验、打包、跟踪。"
        }
      },
      {
        number: "04",
        title: { en: "One language", zh: "一种语言" },
        body: {
          en: "English, Chinese, and your local language — handled in-house. No translation chains, no information loss between supplier and site.",
          zh: "英文、中文、当地语言——内部处理。没有翻译链条，工厂到工地之间不丢信息。"
        }
      }
    ]
  },

  // ════════════════════════════════════════
  // 03 — Selection Guides (5 大类目)
  // ════════════════════════════════════════
  selectionGuides: {
    eyebrow: {
      en: "03 — Selection Guides",
      zh: "03 — 选购指南"
    },
    h2: {
      en: "What we curate. How we curate it.",
      zh: "我们策展什么。我们如何策展。"
    },
    categories: [
      {
        slug: "tiles",
        imageSrc: "/images/products/tiles.jpg",
        title: { en: "Tiles & Flooring", zh: "瓷砖与地板" },
        tagline: {
          en: "The foundation that 5,000 daily footsteps walk on.",
          zh: "每天承载 5,000 次脚步的基础。"
        },
        tips: [
          { en: "Material grade matters more than brand. Italian / Spanish / Chinese — the real differences.", zh: "材料等级比品牌更重要。意大利 / 西班牙 / 中国砖的真实区别。" },
          { en: "Size logic — bigger tiles mean fewer grout lines, but installation gets harder.", zh: "尺寸逻辑——大砖少缝，但安装更难。两者要权衡。" },
          { en: "Climate match — substrate selection for tropical humidity is non-negotiable.", zh: "气候适配——基层选择对热带湿气至关重要，不能将就。" }
        ],
        catalogUrl: "https://www.decolovely.com/product-category/wall-flooring/tiles/",
        browseLabel: { en: "Browse Tile Catalog →", zh: "浏览瓷砖产品 →" }
      },
      {
        slug: "furniture",
        imageSrc: "/images/products/furniture.jpg",
        title: { en: "Furniture", zh: "家具" },
        tagline: {
          en: "What sits in the room for the next 20 years.",
          zh: "未来 20 年陪伴你房间的东西。"
        },
        tips: [
          { en: "Solid wood vs veneer — the 20-year truth no catalog will tell you.", zh: "实木 vs 贴皮——20 年的真实差距，没有目录会告诉你。" },
          { en: "Frame engineering — what matters under the upholstery is rarely visible.", zh: "框架工艺——软包内部真正的奥秘，往往看不见。" },
          { en: "Container packing — how to lose 30% of your shipment in transit if done wrong.", zh: "集装箱装载——做错了运输中可能损失 30%。" }
        ],
        catalogUrl: "https://www.decolovely.com/product-category/furniture/",
        browseLabel: { en: "Browse Furniture →", zh: "浏览家具产品 →" }
      },
      {
        slug: "bathroom-kitchen",
        imageSrc: "/images/products/bathroom-kitchen.jpg",
        title: { en: "Bathroom & Kitchen", zh: "卫浴与厨房" },
        tagline: {
          en: "The two rooms that get used three times a day.",
          zh: "一天使用三次的两个房间。"
        },
        tips: [
          { en: "Brass thickness — defines the next decade of your plumbing.", zh: "黄铜厚度——决定未来 10 年的用水体验。" },
          { en: "Ceramic firing — why some tubs crack in year three.", zh: "陶瓷烧制——为什么有些浴缸在第 3 年开裂。" },
          { en: "Fitting standards — UK / EU / US standards must match your house plumbing.", zh: "水路标准——UK / EU / US 不同标准必须与你的房屋管路匹配。" }
        ],
        catalogUrl: "https://www.decolovely.com/product-category/bathroom-kitchen/",
        browseLabel: { en: "Browse Bathroom & Kitchen →", zh: "浏览卫浴厨房 →" }
      },
      {
        slug: "lighting",
        imageSrc: "/images/products/lighting.jpg",
        title: { en: "Lighting", zh: "灯饰" },
        tagline: {
          en: "What the room actually feels like at 9pm.",
          zh: "晚上 9 点房间真正的感觉。"
        },
        tips: [
          { en: "Color temperature — 2700K vs 4000K, what changes about the room.", zh: "色温——2700K 暖光 vs 4000K 中性光，房间感觉完全不同。" },
          { en: "Power supply — Ghana's 230V reality vs Chinese 220V factory specs.", zh: "电源——加纳 230V 实际工程要求 vs 中国 220V 工厂标准。" },
          { en: "Crystal grade — K9 vs Egyptian crystal, what changes when light hits it.", zh: "水晶等级——K9 vs 埃及水晶，光线打上去的差别。" }
        ],
        catalogUrl: "https://www.decolovely.com/product-category/lights-lighting/",
        browseLabel: { en: "Browse Lighting →", zh: "浏览灯饰产品 →" }
      },
      {
        slug: "doors-windows",
        imageSrc: "/images/products/doors-windows.jpg",
        title: { en: "Doors & Windows", zh: "门窗" },
        tagline: {
          en: "The thresholds the project can't compromise on.",
          zh: "项目无法妥协的门槛。"
        },
        tips: [
          { en: "Frame material — aluminum vs steel vs wood for African climate realities.", zh: "框架材料——铝 vs 钢 vs 木材，针对非洲气候的真实选择。" },
          { en: "Glass spec — single / double / Low-E, what's worth paying for.", zh: "玻璃规格——单层 / 双层 / Low-E，哪个值得花钱。" },
          { en: "Hardware grade — hinges and locks define the daily experience for 20 years.", zh: "五金等级——铰链和锁，决定 20 年的日常体验。" }
        ],
        catalogUrl: "https://www.decolovely.com/product-category/door-windows/",
        browseLabel: { en: "Browse Doors & Windows →", zh: "浏览门窗产品 →" }
      }
    ]
  },

  // ════════════════════════════════════════
  // 04 — Featured Picks (3 重点推荐小类目)
  // ════════════════════════════════════════
  featuredPicks: {
    eyebrow: {
      en: "04 — Featured Picks",
      zh: "04 — 重点推荐"
    },
    h2: {
      en: "What we'd put in our own homes.",
      zh: "我们自己家里也会装的东西。"
    },
    items: [
      {
        slug: "porcelain-slab",
        categoryLabel: { en: "Tiles · Featured", zh: "瓷砖 · 重点推荐" },
        titleEn: "Porcelain Slab — One Material, Floor to Wall",
        titleZh: "岩板 — 一种材料，地墙合一",
        reasonEn: "Up to 1.5 × 3 metres in a single piece. The fewest grout lines, the strongest visual continuity. We specify it for villas, hotel lobbies, and any space where the floor and the wall should speak the same language.",
        reasonZh: "单板尺寸最大可达 1.5 × 3 米。缝隙最少，视觉延续最强。我们为别墅、酒店大堂、以及任何\"地面与墙面要说同一种语言\"的空间，推荐岩板作为基底材料。",
        imageSrc: "/images/products/porcelain-slab.jpg",
        catalogUrl: "https://www.decolovely.com/product-category/wall-flooring/tiles/porcelain-slab/"
      },
      {
        slug: "wall-hung-toilet",
        categoryLabel: { en: "Bathroom · Featured", zh: "卫浴 · 重点推荐" },
        titleEn: "Wall-Hung Toilet — Where the Floor Stays Clean",
        titleZh: "挂便器 — 让地面保持干净",
        reasonEn: "Tank concealed in the wall. Bowl floats above the floor. The quietest flush, the easiest to clean, and the cleanest visual line. Standard fitting in modern hotels and high-end residences across Europe.",
        reasonZh: "水箱嵌入墙内，便器悬空。冲水最静音，清洁最容易，视觉线条最干净。这是欧洲现代酒店和高端住宅的标配。",
        imageSrc: "/images/products/wall-hung-toilet.jpg",
        catalogUrl: "https://www.decolovely.com/product-category/bathroom-kitchen/toilets/wall-mounted-toilet/"
      },
      {
        slug: "kitchen-cabinet",
        categoryLabel: { en: "Kitchen · Featured", zh: "厨房 · 重点推荐" },
        titleEn: "Custom Kitchen Cabinetry — Built Around Your Workflow",
        titleZh: "定制橱柜 — 围绕你的烹饪动线打造",
        reasonEn: "Modular German framework. Integrated appliances. Soft-close drawers. Handleless fronts. We design the kitchen around how you actually cook — not around what catalogs sell.",
        reasonZh: "模块化德式框架。嵌入式电器。缓冲抽屉。无把手柜门。我们围绕你\"真实的烹饪方式\"设计厨房，而不是围绕\"目录推销\"。",
        imageSrc: "/images/products/kitchen-cabinet.jpg",
        catalogUrl: "https://www.decolovely.com/product-category/bathroom-kitchen/kitchen/"
      }
    ]
  },

  // ════════════════════════════════════════
  // 05 — How It Works
  // ════════════════════════════════════════
  howItWorks: {
    eyebrow: {
      en: "05 — How Sourcing Works",
      zh: "05 — 工作流"
    },
    h2: {
      en: "From your brief to your container — in four steps.",
      zh: "从你的需求，到你的集装箱——四步搞定。"
    },
    steps: [
      {
        number: "01",
        title: { en: "Brief", zh: "了解" },
        body: {
          en: "We listen to your project context — budget, style, timeline, and the one thing that must not be compromised.",
          zh: "我们倾听你的项目背景——预算、风格、工期、以及那一项绝不能妥协的事。"
        }
      },
      {
        number: "02",
        title: { en: "Curate", zh: "精选" },
        body: {
          en: "We shortlist from our 1,000+ factory network. You see options, prices, and trade-offs — clearly.",
          zh: "我们从 1,000+ 工厂网络中筛选。你看到的是选项、价格、取舍——一目了然。"
        }
      },
      {
        number: "03",
        title: { en: "Sample", zh: "样品" },
        body: {
          en: "Real samples shipped to you for review before any large order. You touch the material before you commit.",
          zh: "在大批量下单前，实物样品寄送给你确认。你先摸到材料，再决定。"
        }
      },
      {
        number: "04",
        title: { en: "Order", zh: "下单" },
        body: {
          en: "One contract, one delivery, one container. We handle factory coordination, QC, packing, shipping, and customs.",
          zh: "一份合同、一次发货、一个集装箱。我们处理工厂协调、质检、打包、运输、清关。"
        }
      }
    ]
  },

  // ════════════════════════════════════════
  // 06 — Full Catalog
  // ════════════════════════════════════════
  fullCatalog: {
    eyebrow: {
      en: "06 — Full Catalog",
      zh: "06 — 完整产品中心"
    },
    h2: {
      en: "5,000+ products. One catalog.",
      zh: "5,000+ 件产品。一个产品中心。"
    },
    body: {
      en: "Our complete catalog of tiles, furniture, sanitary, lighting, doors, and finishes — sourced from our trusted factory network.",
      zh: "瓷砖、家具、卫浴、灯饰、门窗、饰面材料的完整产品中心——全部来自我们信任的工厂网络。"
    },
    primaryCta: { en: "View Full Catalog →", zh: "查看完整产品中心 →" },
    secondaryCta: { en: "Book a Sourcing Call", zh: "预约采购沟通" },
    catalogUrl: "https://www.decolovely.com/"
  },

  // ════════════════════════════════════════
  // Final CTA
  // ════════════════════════════════════════
  finalCta: {
    h2: {
      en: "Stop chasing six suppliers. Talk to one.",
      zh: "停止追赶 6 家供应商。和一家对话。"
    },
    subtitle: {
      en: "Tell us about your project. We'll handle the rest.",
      zh: "告诉我们你的项目。剩下的我们来处理。"
    },
    primaryCta: { en: "Book Consultation", zh: "预约咨询" },
    secondaryCta: { en: "View Solutions", zh: "查看空间方案" }
  }
};

import type { CtaLink, LocalizedText } from "@/content/types";

export const homeContent = {
  hero: {
    eyebrow: {
      en: "One-Stop Interior Solutions",
      zh: "一站式室内装饰解决方案"
    },
    title: {
      en: "One-Stop Interior Solutions for Projects in Ghana",
      zh: "加纳项目的一站式室内装饰解决方案"
    },
    subtitle: {
      en: "From local site measurement and budget-led premium design to coordinated multi-category sourcing, shipment planning and on-site installation guidance in Ghana, we help developers, designers, wholesalers and commercial buyers move projects forward more efficiently.",
      zh: "从当地现场测量、按目标预算进行高端方案设计，到多品类产品整合、出货组织及加纳现场指导安装，我们帮助地产商、设计师、批发商及商业项目客户更高效地推进项目落地。"
    },
    tags: [
      { en: "Local Site Measurement", zh: "当地现场测量" },
      { en: "Budget-Led Premium Design", zh: "预算导向高端设计" },
      { en: "Multi-Category Sourcing", zh: "多品类整合供应" },
      { en: "Ghana On-Site Guidance", zh: "加纳现场指导安装" }
    ] satisfies LocalizedText[],
    ctas: [
      { label: { en: "Start Your Project", zh: "开始您的项目" }, href: "/contact" },
      { label: { en: "Browse Products", zh: "浏览产品" }, href: "PRODUCT_CENTER" },
      { label: { en: "Estimate Budget", zh: "预算测算" }, href: "ESTIMATOR" }
    ] satisfies CtaLink[],
    stats: [
      { value: "6", label: { en: "Core service stages", zh: "核心服务阶段" } },
      { value: "Multi", label: { en: "Category coordination", zh: "多品类整合" } },
      { value: "Ghana", label: { en: "Local execution support", zh: "本地执行支持" } }
    ]
  },
  brandPositioning: {
    title: {
      en: "From Early Planning to On-Site Delivery",
      zh: "从前期测量与设计，到产品落地与现场支持"
    },
    pullQuote: {
      en: "The project doesn't end when the container lands.",
      zh: "项目不在集装箱靠岸的那一刻结束。"
    },
    body: {
      en: "For most, \"supply\" ends at the dock. For us, it's where the real work begins. We measure before we source. We coordinate across furniture, lighting, stone, doors, bathroom and finishes so one project speaks in one voice. We plan shipments around your build calendar, not around our warehouse. And on installation day in Accra, someone from Decoropic is there — not to sell, but to make sure what was drawn is what actually stands. Twenty-six years of international trade. Twenty years on the ground in Ghana. One team across both.",
      zh: "对大多数人来说，\"供货\"止于港口。对我们来说，这里才是项目真正开始的地方。我们先测量，再订货；把家具、灯饰、石材、门类、卫浴和饰面协调成一个项目、一个声音；按你的工程节奏安排出货，不是按我们仓库的节奏；到加纳现场安装那天，Decoropic 的人在场——不是为了卖东西，是为了确认图纸上的东西真的站住了。二十六年国际贸易。二十年加纳深耕。一支团队贯穿前后。"
    },
    stats: [
      {
        value: "6",
        label: { en: "Core service stages", zh: "核心服务环节" }
      },
      {
        value: "3",
        label: { en: "Business pillars", zh: "业务板块" }
      },
      {
        value: "20",
        label: { en: "Years in Ghana", zh: "加纳深耕年数" }
      }
    ]
  },
  whyChooseUs: {
    eyebrow: {
      en: "Why Decoropic",
      zh: "为什么选择 Decoropic"
    },
    title: {
      en: "Six reasons clients trust us with their projects.",
      zh: "客户把项目交给我们，有六个理由。"
    },
    subtitle: {
      en: "We don't sell products to Ghana. We deliver projects in Ghana.",
      zh: "我们不是把产品卖到加纳——我们在加纳交付项目。"
    },
    items: [
      {
        title: {
          en: "We don't quote furniture. We quote projects.",
          zh: "我们不是报家具——我们报的是整个项目。"
        },
        body: {
          en: "Furniture, lighting, stone, doors, bathroom, finishes — not a line-item sheet, but one project speaking in one voice.",
          zh: "家具、灯饰、石材、门类、卫浴、饰面——不是一份单品清单，是一个项目的完整声音。"
        }
      },
      {
        title: {
          en: "We start with your drawing. Not our catalog.",
          zh: "我们从你的图纸开始——不是从我们的目录。"
        },
        body: {
          en: "Drawings, budget, style, timeline — we understand the structure of your project first, then talk about products.",
          zh: "图纸、预算、风格、交期——先懂你的项目结构，再谈产品选型。仓库有什么不是起点。"
        }
      },
      {
        title: {
          en: "What reads on paper may not stand in Accra.",
          zh: "图纸上合理的尺寸，未必能在阿克拉落地。"
        },
        body: {
          en: "The gaps between drawings and Ghana site conditions are where projects pay their hidden costs. We resolve them before orders ship.",
          zh: "图纸尺寸和加纳现场条件之间的误差，藏着项目最常见的隐性代价。我们在订货之前把它先解决。"
        }
      },
      {
        title: {
          en: "Budget isn't a ceiling. It's the starting line.",
          zh: "预算不是天花板，是起跑线。"
        },
        body: {
          en: "We treat budget as the decision about where to invest fully and where to restrain — not as a constraint on ambition.",
          zh: "我们把预算当作\"哪里要顶级、哪里要克制\"的决策起点——不是限制创意的天花板。"
        }
      },
      {
        title: {
          en: "On installation day, someone from us is standing there.",
          zh: "到安装那一天，我们的人站在现场。"
        },
        body: {
          en: "On Ghana installation day, a Decoropic person is on site — not to sell, but to make sure what was drawn actually stands.",
          zh: "到加纳安装那一天，Decoropic 的人在场——不为销售，为确认图纸上的东西真的站住了。"
        }
      },
      {
        title: {
          en: "One team across five voices of the project.",
          zh: "一支团队，贯穿项目的五种声音。"
        },
        body: {
          en: "Owner, designer, contractor, buyer, supplier — we reduce communication drift across all five so the project speaks in one voice.",
          zh: "业主、设计师、施工方、采购方、供应方——我们让这五方之间的沟通偏差降到最低，让项目只说一个声音。"
        }
      }
    ]
  },
  services: {
    eyebrow: {
      en: "Our services",
      zh: "我们的服务"
    },
    title: {
      en: "From measurement to installation.",
      zh: "从测量到安装。"
    },
    subtitle: {
      en: "Six stages. One team. One project.",
      zh: "六个阶段，一支团队，一个项目。"
    },
    endNote: {
      en: "Every project moves through every stage — no skipping, no handoffs to anyone outside the team.",
      zh: "每个项目都会完整走过六个阶段——不跳步，不转包给团队以外的任何人。"
    },
    items: [
      {
        title: {
          en: "We measure before we quote.",
          zh: "先测量，再报价。"
        },
        body: {
          en: "On-site measurement and dimension verification in Accra, before a single item gets ordered. Drawings lie. Sites tell the truth.",
          zh: "在订一件产品之前，先在阿克拉现场完成测量与尺寸核对。图纸会骗人，现场不会。"
        }
      },
      {
        title: {
          en: "Design shaped by your budget.",
          zh: "用你的预算塑造设计。"
        },
        body: {
          en: "We take your target budget, spatial needs and style direction, and turn them into design guidance that's both refined and actually buildable.",
          zh: "我们把你的预算、空间功能和风格方向，转化为既有品质感、又能真正落地的设计建议。"
        }
      },
      {
        title: {
          en: "One project scope. Many categories.",
          zh: "一个项目范围，覆盖多品类。"
        },
        body: {
          en: "Furniture, lighting, stone, doors, bathroom, finishes — sourced for residential, hospitality, office and commercial projects around one scope, not six invoices.",
          zh: "家具、灯饰、石材、门类、卫浴、饰面——围绕住宅、酒店、办公、商业项目统筹采购，一个范围，而不是六张发票。"
        }
      },
      {
        title: {
          en: "Specs that hold on paper and on site.",
          zh: "图纸上成立，现场也成立的规格。"
        },
        body: {
          en: "Dimensions, materials, colors, finishes, suitability — aligned across drawings, suppliers and Accra conditions before orders ship.",
          zh: "尺寸、材质、颜色、表面处理、适配性——在出货之前就在图纸、供应商和阿克拉现场条件之间对齐。"
        }
      },
      {
        title: {
          en: "Shipments timed to your build calendar.",
          zh: "按你的工程节奏安排出货。"
        },
        body: {
          en: "Multi-supplier, multi-category consolidation organized around when your site is ready — not when our warehouse is.",
          zh: "多供应商、多品类的集运组织，围绕你工地准备好的时间——不是围绕我们仓库的时间。"
        }
      },
      {
        title: {
          en: "We stand on site until it stands.",
          zh: "我们站在现场，直到它真的站住。"
        },
        body: {
          en: "On-site execution support in Ghana: installation guidance, communication, issue follow-up — from the first crate to the final detail.",
          zh: "加纳现场执行支持：安装指导、沟通协调、问题跟进——从第一个集装箱到最后一个细节。"
        }
      }
    ]
  },
  estimator: {
    title: {
      en: "Estimate Your Villa Project Budget",
      zh: "快速测算您的别墅项目预算"
    },
    subtitle: {
      en: "Get a preliminary budget range based on area, functional zones, finish level and service scope.",
      zh: "根据面积、功能区数量、配置档次和服务范围，获取初步预算参考。"
    },
    note: {
      en: "This tool provides a preliminary estimate only. Final scope and quotation will depend on site measurement, design requirements, material standards and project details.",
      zh: "本工具仅用于提供初步预算参考，最终方案及报价需根据现场测量、设计范围、材料标准和项目要求进一步确认。"
    }
  },
  solutionsBySpace: {
    title: {
      en: "Solutions by Space",
      zh: "按空间查看解决方案"
    },
    subtitle: {
      en: "Different spaces require different priorities in style, durability, budget and delivery timing. Our recommendations are shaped around real project use cases.",
      zh: "不同空间对风格、耐用性、预算和交付节奏的要求并不相同，我们围绕实际使用场景来组织建议。"
    },
    items: [
      { en: "Villas", zh: "别墅" },
      { en: "Apartments", zh: "公寓" },
      { en: "Hotels", zh: "酒店" },
      { en: "Offices", zh: "办公空间" },
      { en: "Restaurants", zh: "餐饮空间" },
      { en: "Showrooms & Retail", zh: "展厅与零售空间" }
    ] satisfies LocalizedText[]
  },
  ghanaHighlight: {
    title: {
      en: "More Than Supply, We Support Real Project Delivery in Ghana",
      zh: "不止于供货，更支持项目在加纳现场真正落地"
    },
    body: {
      en: "Many suppliers can ship products. The more difficult part often begins on site. We focus on site measurement, installation guidance, communication support and issue follow-up to help reduce risks caused by dimensional errors, unclear details and execution gaps.",
      zh: "很多供应商可以发货，但项目真正的难点往往出现在现场。我们重视现场测量、安装指导、沟通协调及后续问题跟进，帮助客户减少因尺寸偏差、理解不一致及施工衔接不足带来的风险。"
    },
    bullets: [
      { en: "Local Site Measurement", zh: "当地现场测量" },
      { en: "Installation Guidance", zh: "安装指导" },
      { en: "Local Communication Support", zh: "本地沟通协调" },
      { en: "Issue Follow-Up", zh: "问题跟进" },
      { en: "After-Sales Coordination", zh: "售后衔接" }
    ] satisfies LocalizedText[]
  },
  howWeWork: {
    title: {
      en: "How We Work",
      zh: "我们的合作流程"
    },
    steps: [
      { en: "Share your drawings, references or requirements", zh: "提交图纸、参考图或需求" },
      { en: "Align budget, style and project scope", zh: "沟通预算、风格与项目范围" },
      { en: "Conduct local site measurement and verification", zh: "当地现场测量与基础核对" },
      { en: "Develop a premium design direction based on target budget", zh: "按目标预算制定高端方案方向" },
      { en: "Recommend suitable products and package options", zh: "推荐合适的产品与配套方案" },
      { en: "Confirm specifications, materials and details", zh: "确认规格、材质与细节" },
      { en: "Coordinate production, consolidation and shipment", zh: "组织生产、整合与出货" },
      { en: "Support implementation and installation guidance in Ghana", zh: "支持加纳现场实施与安装指导" }
    ] satisfies LocalizedText[]
  },
  productCenterBridge: {
    title: {
      en: "Explore More Product Categories and Options",
      zh: "浏览更多产品类别与选择"
    },
    body: {
      en: "To explore specific categories, styles, and a broader product range, continue to our product center and browse by category, space, or project type.",
      zh: "如希望进一步查看具体品类、款式与更多产品选择，可进入我们的产品中心，按类别、空间或项目类型继续浏览。"
    },
    ctas: [
      { label: { en: "Explore Product Center", zh: "进入产品中心" }, href: "PRODUCT_CENTER" },
      { label: { en: "Send Project Requirements", zh: "提交项目需求" }, href: "/contact" }
    ] satisfies CtaLink[]
  },
  finalCta: {
    title: {
      en: "Let’s Move Your Project Forward More Efficiently",
      zh: "让您的项目推进得更清晰、更高效"
    },
    body: {
      en: "Send us your drawings, reference images, BOQ or product list. Based on your project type, budget and delivery priorities, we will help you build a more suitable sourcing and execution plan.",
      zh: "欢迎发送图纸、参考图片、BOQ 或产品清单给我们。我们将根据您的项目类型、预算和交付需求，协助您梳理更合适的产品与执行方案。"
    },
    ctas: [
      { label: { en: "Request Consultation", zh: "咨询项目方案" }, href: "/contact" },
      { label: { en: "Send Drawings / BOQ", zh: "发送图纸 / BOQ" }, href: "/contact" },
      { label: { en: "Talk on WhatsApp", zh: "WhatsApp联系" }, href: "WHATSAPP" }
    ] satisfies CtaLink[]
  }
};

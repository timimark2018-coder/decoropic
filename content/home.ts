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
      { label: { en: "Browse Products", zh: "浏览产品" }, href: "/products" },
      { label: { en: "Estimate Budget", zh: "预算测算" }, href: "/estimator" }
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
          en: "On-site measurement",
          zh: "先测量，再报价。"
        },
        body: {
          en: "Every project starts with real numbers. Our Accra team visits the site, measures each room, checks ceiling heights, wet areas, power points and door swings, and photographs existing conditions. For overseas projects outside Ghana we work from your architect's drawings and a short video walk-through, then confirm critical dimensions with you before anything is ordered. Accurate measurement is what keeps tile cuts, cabinet runs and window frames right the first time, and it is the reason our installations rarely need a second shipment.",
          zh: "在订一件产品之前，先在阿克拉现场完成测量与尺寸核对。图纸会骗人，现场不会。"
        }
      },
      {
        title: {
          en: "Budget-led design",
          zh: "用你的预算塑造设计。"
        },
        body: {
          en: "Tell us the budget before the mood board. We design to a number, not away from it: a material schedule, a quantity take-off and a landed-cost estimate for every space, with two or three price tiers so you can trade finishes against spend. Renders and 2D layouts come from our Foshan design desk, drawn to the dimensions taken on site. You see the cost of each choice as you make it, which keeps the project out of the usual overrun cycle.",
          zh: "我们把你的预算、空间功能和风格方向，转化为既有品质感、又能真正落地的设计建议。"
        }
      },
      {
        title: {
          en: "Multi-category sourcing",
          zh: "一个项目范围，覆盖多品类。"
        },
        body: {
          en: "One purchase order, every category. We source tiles, sanitaryware, kitchens, doors, windows, lighting, furniture and hardware directly from Foshan and the Guangdong manufacturing belt, one of the world's largest clusters for ceramics and furniture. Twenty-six years of factory relationships mean verified suppliers, negotiated prices and consistent quality across the whole package, rather than a dozen separate vendors with a dozen different lead times.",
          zh: "家具、灯饰、石材、门类、卫浴、饰面——围绕住宅、酒店、办公、商业项目统筹采购，一个范围，而不是六张发票。"
        }
      },
      {
        title: {
          en: "Quality control and consolidation",
          zh: "图纸上成立，现场也成立的规格。"
        },
        body: {
          en: "Every item is inspected before it is packed. Our QC team checks tile calibre and shade, furniture joints and finishes, glass thickness and hardware function against the approved samples, and photographs each batch. Goods from all suppliers are consolidated at our Foshan warehouse, packed for sea freight and loaded into one or more containers with a full packing list and photo record, so what arrives matches what was ordered.",
          zh: "尺寸、材质、颜色、表面处理、适配性——在出货之前就在图纸、供应商和阿克拉现场条件之间对齐。"
        }
      },
      {
        title: {
          en: "Shipment and clearance",
          zh: "按你的工程节奏安排出货。"
        },
        body: {
          en: "We book the vessel, prepare the commercial invoice, packing list and certificate of origin, and track the container from Shenzhen or Guangzhou to the port of discharge. For Ghana, our Tema clearing partners handle duties and release; for other markets we work with your nominated forwarder or recommend one. You receive a sailing schedule up front and status updates at each milestone until the container is at your site.",
          zh: "多供应商、多品类的集运组织，围绕你工地准备好的时间——不是围绕我们仓库的时间。"
        }
      },
      {
        title: {
          en: "Installation support",
          zh: "我们站在现场，直到它真的站住。"
        },
        body: {
          en: "Shipping the goods is half the job. In Ghana our site supervisors set out tiling, oversee kitchen and wardrobe fitting, and commission doors, windows and lighting with your contractor. For overseas projects we supply installation drawings, video guides and a WhatsApp line to the factory technicians, so your local team installs Chinese-made materials correctly. The result is a finished space that looks like the render you approved.",
          zh: "加纳现场执行支持：安装指导、沟通协调、问题跟进——从第一个集装箱到最后一个细节。"
        }
      }
    ]
  },
  estimator: {
    title: {
      en: "Get your renovation budget in 60 seconds.",
      zh: "60 秒得到你的装修预算。"
    },
    subtitle: {
      en: "",
      zh: ""
    },
    note: {
      en: "This is a preliminary estimate only. Final scope and quotation will depend on site measurement, design requirements, material standards and project details.",
      zh: "这只是初步预估。最终方案及报价需根据现场测量、设计范围、材料标准和项目要求进一步确认。"
    },
    hookIntro: {
      en: "In one minute, see what your project could cost.",
      zh: "一分钟，看看你的项目可能要多少预算。"
    },
    revealLabel: {
      en: "See what your project becomes →",
      zh: "看看你的项目会变成什么 →"
    },
    contactTitle: {
      en: "This is just the early sense.",
      zh: "这只是初步感觉。"
    },
    contactSubtitle: {
      en: "Want to see what your project actually becomes?",
      zh: "想看看你的项目实际会变成什么吗？"
    },
    contactBullets: [
      { en: "A refined budget breakdown", zh: "精细化预算拆解" },
      { en: "A few project references at your scale", zh: "几个同规模项目参考" },
      { en: "An honest scope discussion", zh: "一次坦诚的项目范围讨论" }
    ],
    contactPrincipal: {
      en: "Our team will reach out within 24 hours.",
      zh: "我们的团队将在 24 小时内联系你。"
    },
    contactDisclaimer: {
      en: "We respect your time. No mass marketing, no automated follow-ups. We reach out personally, once.",
      zh: "我们尊重你的时间。不发垃圾营销，不自动跟进。我们亲自联系，只联系一次。"
    },
    submitLabel: {
      en: "Submit — request consultation",
      zh: "提交 —— 请求咨询"
    },
    thankYouTitle: {
      en: "Thank you.",
      zh: "感谢你。"
    },
    thankYouBody: {
      en: "Your conversation with Decoropic has begun. Our team will reach out within 24 hours. Not before. Not later.",
      zh: "你和 Decoropic 的对话已经开始。我们的团队将在 24 小时内联系你——不会更早，也不会更晚。"
    }
  },
  solutionsBySpace: {
    eyebrow: {
      en: "Solutions by space",
      zh: "按空间查看解决方案"
    },
    title: {
      en: "Six spaces. Six playbooks.",
      zh: "六种空间，六套打法。"
    },
    subtitle: {
      en: "House & hotel decoration in Ghana — China-sourced materials, local project delivery.",
      zh: "加纳别墅与酒店装修 — 中国直供材料，本地项目交付。"
    },
    subtitleDetail: {
      en: "From private villas to hospitality — every space carries its own priorities, risks, and delivery calculus.",
      zh: "从私人别墅到酒店餐饮——每一种空间都有自己的优先级、风险和交付逻辑。"
    },
    tagline: {
      en: "Every space has its own playbook. See how we shape the delivery for yours.",
      zh: "每种空间都有自己的方法论。看看我们如何为你的项目量身打造。"
    },
    ctaLabel: {
      en: "Explore Solutions",
      zh: "查看解决方案"
    },
    ctaHref: "/solutions",
    items: [
      {
        icon: "Home",
        title: { en: "Private Villas", zh: "私人别墅" },
        quote: { en: "Your home, as drawn.", zh: "住进设计图里的房子。" },
        href: "/solutions/villas",
        ctaLabel: { en: "House decoration in Ghana →", zh: "加纳别墅装修 →" }
      },
      {
        icon: "Building",
        title: { en: "High-End Apartments", zh: "高端公寓" },
        quote: { en: "Every unit carries the same finishes.", zh: "每一户都讲同一个故事。" }
      },
      {
        icon: "Building2",
        title: { en: "Hotels & Hospitality", zh: "酒店与度假村" },
        quote: { en: "Every room tells one story.", zh: "每一间房说同一个故事。" },
        href: "/solutions/hotels",
        ctaLabel: { en: "Hotel decoration in Ghana →", zh: "加纳酒店装修 →" }
      },
      {
        icon: "Briefcase",
        title: { en: "Corporate Offices", zh: "企业办公" },
        quote: { en: "A workplace that says what you say.", zh: "办公空间替你说话。" }
      },
      {
        icon: "UtensilsCrossed",
        title: { en: "Restaurants & F&B", zh: "餐饮空间" },
        quote: { en: "Design that holds until the last table.", zh: "从第一桌到最后一桌。" }
      },
      {
        icon: "Store",
        title: { en: "Showrooms & Retail", zh: "展厅与零售" },
        quote: { en: "Where the brand doesn't get lost in shipping.", zh: "品牌不会在运输中丢失。" }
      }
    ]
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
    categories: [
      {
        slug: "tiles-flooring",
        title: { en: "Tiles and flooring", zh: "" },
        body: {
          en: "Porcelain, ceramic, marble-effect and outdoor tiles from Foshan, one of the world's largest tile-producing clusters, in 600x600 to 1200x2400 formats, plus SPC, laminate and engineered wood flooring. We supply full project quantities with matched shades and 5-8% cutting allowance, and can mix grades to suit front-of-house and back-of-house areas. Samples ship by courier within a week.",
          zh: ""
        }
      },
      {
        slug: "furniture",
        title: { en: "Furniture", zh: "" },
        body: {
          en: "Loose and fixed furniture for villas, apartments, hotels and offices: sofas, beds, dining sets, wardrobes, reception desks, hotel case goods and restaurant seating. We work from your drawings or our standard ranges, in solid wood, veneer, metal or upholstered finishes, and build to hotel FF&E specifications when required. Everything is inspected and photographed before container loading.",
          zh: ""
        }
      },
      {
        slug: "bathroom-kitchen",
        title: { en: "Bathroom and kitchen", zh: "" },
        body: {
          en: "Complete sanitaryware sets, shower enclosures, vanities, taps and accessories, together with modular kitchens in lacquer, melamine or stainless steel, with quartz or sintered-stone worktops. We match sizes to your measured rooms, supply installation drawings, and can include appliances and water heaters so the whole wet-area package arrives in one shipment.",
          zh: ""
        }
      },
      {
        slug: "lights-lighting",
        title: { en: "Lighting", zh: "" },
        body: {
          en: "Decorative and architectural lighting: chandeliers, pendants, wall lights, LED downlights, track systems, outdoor and landscape fittings. We check voltage, driver compatibility and IP ratings for your market, supply lighting layouts for each room, and provide bulk pricing for hotel and commercial projects where hundreds of identical fittings are needed.",
          zh: ""
        }
      },
      {
        slug: "doors-windows",
        title: { en: "Doors and windows", zh: "" },
        body: {
          en: "Aluminium and uPVC windows, sliding and folding door systems, interior wooden doors, security doors and fire-rated doors, made to the openings measured on site. Glass options include tempered, laminated and Low-E double glazing for hot climates. Each unit is labelled by room, packed in crates and shipped with hardware and installation guides.",
          zh: ""
        }
      }
    ],
    ctas: [
      { label: { en: "Explore Product Center", zh: "进入产品中心" }, href: "/products" },
      { label: { en: "Send Project Requirements", zh: "提交项目需求" }, href: "/contact" }
    ] satisfies CtaLink[]
  },
  finalCta: {
    title: {
      en: "Twenty years in Ghana. Hundreds of homes shaped. Yours next?",
      zh: "二十年深耕加纳。数百个家蜕变。下一个，是不是你？"
    },
    body: {
      en: "Two paths. The 11-step estimator gives you an early sense in one minute — no typing required. Or talk to our team directly. We reply personally within 24 hours.",
      zh: "两种方式。11 步预算测算器一分钟获得初步预估——无需打字。或直接联系我们的团队。我们 24 小时内亲自回复。"
    },
    ctas: [
      { label: { en: "Open the 11-step estimator", zh: "打开 11 步测算器" }, href: "/estimator" },
      { label: { en: "Talk to our team", zh: "联系我们" }, href: "/contact" }
    ] satisfies CtaLink[]
  }
};

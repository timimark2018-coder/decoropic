import type { LocalizedText } from "./types";

export const aboutContent = {
  hero: {
    eyebrow: { en: "Our Story", zh: "品牌故事" },
    numeral: {
      value: 26,
      lineOne: { en: "Years", zh: "载" },
      lineTwo: { en: "in Building", zh: "深耕" },
      lineThree: { en: "Materials", zh: "建材" }
    },
    scroll: { en: "Scroll to explore", zh: "向下浏览" },
    imageLabel: {
      en: "Hero Image — Ghana Villa Interior",
      zh: "主视觉 — 加纳别墅室内场景"
    },
    imageCaption: { en: "Captured by : TBD", zh: "摄影 : TBD" },
    title: {
      en: "A One-Stop Interior Service Partner for Project Clients in Ghana",
      zh: "面向加纳项目客户的一站式室内装饰服务伙伴"
    },
    subtitle: {
      en: "We combine local site service, budget-led design, coordinated sourcing and project execution support to help clients deliver spaces more smoothly.",
      zh: "我们结合现场服务、预算导向设计、多品类产品整合与项目执行支持，帮助客户更稳妥地推进空间落地。"
    }
  },

  positioning: {
    eyebrow: { en: "Who We Are", zh: "关于我们" },
    headline: {
      lineA: { en: "A project-first", zh: "以项目为先的" },
      lineB: { en: "interior solutions", zh: "室内整装方案" },
      lineC: { en: "partner for Ghana.", zh: "加纳合作伙伴。" }
    },
    paragraphs: [
      {
        en: "Decoropic is a service-led brand built for cross-border interior projects. We work alongside developers, hospitality operators and design teams — not catalogue buyers — so our tooling, timelines and product choices are all organised around one question: does this space actually get delivered?",
        zh: "Decoropic 是一个服务型品牌，专为跨境室内整装项目而建。我们的客户不是目录采购方，而是地产开发、酒店运营与设计团队——因此我们的流程、时间节奏与选品逻辑，都围绕同一个问题展开：这个空间最终能否真正落地？"
      },
      {
        en: "Rather than treating supply as the product, we treat it as one step inside a longer execution chain: site measurement, budget framing, design alignment, specification, shipping, and on-the-ground installation support in Ghana.",
        zh: "我们并不把供货视为终点，而是把它嵌入更长的执行链：现场测量 → 预算框定 → 方案对齐 → 规格确认 → 出货统筹 → 加纳本地安装支持。"
      }
    ]
  } as const,

  timeline: {
    eyebrow: { en: "Two Decades", zh: "二十载深耕" },
    title: {
      lineA: { en: "Two Decades of", zh: "二十载" },
      lineB: { en: "Building Material", zh: "建材行业" },
      lineC: { en: "Experience in Ghana", zh: "与加纳项目经验" }
    },
    milestones: [
      {
        year: "2000",
        title: { en: "Industry Entry", zh: "进入行业" },
        body: {
          en: "Founder entered the international building-materials trade, learning the category from the factory floor upward — tiles, sanitary ware, doors, cabinetry.",
          zh: "创始人进入国际建材行业，从工厂端开始梳理瓷砖、洁具、门窗、橱柜等品类。"
        }
      },
      {
        year: "2003",
        title: { en: "Formal Ghana Operations", zh: "加纳本地运营正式建立" },
        body: {
          en: "Established on-the-ground sourcing and supply operations in Accra, serving early wholesale and hospitality buyers looking for consistent supply.",
          zh: "在阿克拉建立本地采购与供应体系，服务于早期批发与酒店采购客户。"
        }
      },
      {
        year: "2005",
        title: { en: "Network Expansion", zh: "网络拓展" },
        body: {
          en: "Built on-the-ground relationships with freight, customs and installation partners in Ghana to move from pure supply into execution.",
          zh: "与加纳当地货代、报关与安装伙伴建立合作，从纯供货迈向执行落地。"
        }
      },
      {
        year: "2012",
        title: { en: "Project-Led Shift", zh: "向项目制转型" },
        body: {
          en: "Reorganised the service around project delivery: budget-led design, specification, and site-aligned product selection rather than catalogue pushing.",
          zh: "围绕项目交付重构服务流程：预算导向设计、规格对齐与贴合现场的选品，而非推销目录。"
        }
      },
      {
        year: "2018",
        title: { en: "Hospitality & HNW Focus", zh: "聚焦酒店与高净值业主" },
        body: {
          en: "Deepened delivery for hotels, resorts and private villa clients in Ghana, where design direction and installation quality have to land together.",
          zh: "深耕加纳酒店、度假村与高端别墅客户——这些项目要求设计方向与安装品质必须同步到位。"
        }
      },
      {
        year: "2026",
        title: { en: "Decoropic Brand", zh: "Decoropic 品牌正式发布" },
        body: {
          en: "Consolidated twenty-six years of practice into the Decoropic brand — a service-led project partner for interior work in Ghana.",
          zh: "将二十六年实践沉淀为 Decoropic 品牌——一个服务型的加纳室内整装项目合作伙伴。"
        }
      }
    ]
  },

  pullQuote: {
    quote: {
      en: "Clients don't live inside a bill of materials. They live inside a finished room.",
      zh: "客户不会住在材料清单里。他们住在一个建成的空间里。"
    },
    attribution: { en: "Decoropic Principle", zh: "Decoropic 服务信条" }
  },

  founder: {
    eyebrow: { en: "Founder's Story", zh: "创始人故事" },
    title: {
      en: "26 Years of Industry Experience",
      zh: "二十六年行业沉淀"
    },
    paragraphs: [
      {
        iconSlug: "compass-line",
        subtitle: { en: "Where it began — 2000.", zh: "起点 —— 2000 年。" },
        body: {
          en: "In the year 2000, our founder entered the international building-materials trade. At a time when Accra was not yet widely regarded as an emerging market, he had already begun working on the ground there — building long-term relationships with clients and project teams from different countries and regions.",
          zh: "2000 年，创始人进入建材国际贸易行业。彼时，阿克拉尚未被广泛视为新兴市场，而他已开始深入当地，与不同国家和地区的客户及项目方长期合作。"
        }
      },
      {
        iconSlug: "concentric-circles",
        subtitle: { en: "Twenty-six years on the ground.", zh: "二十六年在一线。" },
        body: {
          en: "Twenty-six years in the field have let him take part in and witness the delivery of projects across hotels, apartments, commercial spaces, private villas, and high-end residences. It is precisely these years of front-line experience that have led him to a conviction: a successful project is never the simple procurement of materials — it is the systemic integration of spatial effect, quality, cost, and on-the-ground execution.",
          zh: "二十六年的行业历练，让他参与并见证了从酒店、公寓、商业空间到私人别墅与高端住宅等多类项目的推进与落地。也正因这些一线经验，他始终坚信：一个成功的项目，不是材料的简单采购，而是对空间效果、品质、成本与落地执行的系统整合。"
        }
      },
      {
        iconSlug: "arrow-through",
        subtitle: { en: "From trade to delivery.", zh: "从贸易到交付。" },
        body: {
          en: "From international trade manager to a practitioner focused on end-to-end solutions, he has distilled years of experience into a method that begins with the client's needs and is anchored in project delivery. The founding purpose of Decoropic follows from this — not merely to supply products, but to help clients turn the space they envision into a space they can walk into.",
          zh: "从国际贸易经理，到专注整体解决方案的实践者，他逐步将多年积累沉淀为一套以客户需求为起点、以项目落地为核心的方法。创业的初心，也由此而来——不止于提供产品，更致力于帮助客户把理想空间真正变成现实。"
        }
      }
    ],
    ctaLabel: { en: "Talk with Our Team", zh: "与我们团队沟通" }
  },

  whoWeServe: {
    eyebrow: { en: "Who We Serve", zh: "我们服务的客户" },
    title: {
      en: "Built around the people who actually deliver Ghana projects.",
      zh: "围绕真正在加纳交付项目的人而构建。"
    },
    primary: {
      key: "developers",
      label: { en: "Property Developers", zh: "地产商与开发商" },
      body: {
        en: "Residential and mixed-use developers who need coordinated sourcing across tile, sanitary, door and cabinetry — on one timeline, against one budget.",
        zh: "住宅与综合体开发商——需要在同一时间线、同一预算下，统筹瓷砖、洁具、门窗与橱柜的协同采购。"
      }
    },
    secondary: [
      {
        key: "hotels",
        label: { en: "Hotels & Resorts", zh: "酒店与度假村" },
        body: {
          en: "Brand-standard hospitality specs with site-level flexibility.",
          zh: "符合酒店品牌标准，同时具备现场灵活度。"
        }
      },
      {
        key: "designers",
        label: { en: "Interior Designers", zh: "室内设计师" },
        body: {
          en: "A supply partner that respects your design direction, not one that pushes catalogue options.",
          zh: "尊重您方案方向的供应伙伴，而非只推目录选项的供应商。"
        }
      },
      {
        key: "hnw",
        label: { en: "HNW Private Buyers", zh: "高净值私人业主" },
        body: {
          en: "Private villa clients who want one team handling sourcing, shipping and installation coordination.",
          zh: "希望由同一团队统筹采购、出货与安装协调的私人别墅业主。"
        }
      },
      {
        key: "wholesale",
        label: { en: "Wholesale & Channel", zh: "批发与渠道伙伴" },
        body: {
          en: "Long-term partners who benefit from consistent supply and shared project pipelines.",
          zh: "通过持续的供应与共享项目机会，建立长期合作的伙伴。"
        }
      }
    ]
  },

  approach: {
    eyebrow: { en: "Our Approach", zh: "我们的方法论" },
    title: {
      en: "Four rules we run every project against.",
      zh: "我们用来对照每一个项目的四条原则。"
    },
    principles: [
      {
        number: "01",
        heading: { en: "Project-first thinking", zh: "以项目为先" },
        body: {
          en: "Understand the project, the site and the people delivering it — before recommending a single product.",
          zh: "先理解项目、现场与交付团队——再推荐任何一件产品。"
        }
      },
      {
        number: "02",
        heading: { en: "Budget-led design", zh: "预算导向设计" },
        body: {
          en: "Lock the budget frame first, then design inside it. No surprises at specification stage.",
          zh: "先锁定预算边界，再在此之内推进设计；规格阶段不再有意外。"
        }
      },
      {
        number: "03",
        heading: { en: "Site-aligned specification", zh: "现场对齐的规格" },
        body: {
          en: "Verify real site dimensions and installation conditions before customisation, not after it arrives at port.",
          zh: "在定制开启之前核对真实尺寸与安装条件，而不是等产品到港才发现问题。"
        }
      },
      {
        number: "04",
        heading: { en: "Execution-outcome focused", zh: "以执行结果为目标" },
        body: {
          en: "Our job isn't finished when the container ships. It's finished when the space is installed and accepted.",
          zh: "货柜发出并不是结束。空间完成安装、通过验收，才是结束。"
        }
      }
    ]
  },

  cta: {
    eyebrow: { en: "Let's Build Together", zh: "一起把项目落地" },
    titleLineA: { en: "Ready to", zh: "准备好" },
    titleLineB: { en: "build together?", zh: "一起开始了吗？" },
    body: {
      en: "Whether you are still at the early planning stage or already moving into sourcing and procurement, we can help you move forward with greater clarity.",
      zh: "无论您处于早期规划阶段，还是已经进入选型与采购阶段，我们都可以协助您更清晰地推进下一步。"
    },
    primary: { label: { en: "Talk with Our Team", zh: "与我们团队沟通" }, href: "/contact" },
    secondary: { label: { en: "WhatsApp Us", zh: "WhatsApp 联系" }, href: "WHATSAPP" }
  },

  /** Kept for backwards compatibility — existing consumers may still reference these */
  intro: {
    title: {
      en: "We Focus on More Than Supply, We Focus on Delivery",
      zh: "我们不仅做供货，更关注项目如何真正落地"
    },
    paragraphs: [
      {
        en: "Our service does not begin with a catalog alone, and it does not end when products are shipped. For many projects, what truly affects the outcome is whether site dimensions are accurate, whether the design direction fits the budget, whether products match the space, and whether communication on site remains clear during installation.",
        zh: "我们的服务不是从产品目录开始，也不是在出货后结束。对于很多项目而言，真正影响结果的，是前期测量是否准确、设计方向是否符合预算、产品与空间是否匹配，以及现场安装和沟通是否顺畅。"
      }
    ] as { en: string; zh: string }[]
  },
  howWeWork: {
    principles: [
      { en: "Understand the project before recommending products", zh: "先理解项目，再推荐产品" },
      { en: "Align the budget before advancing the design", zh: "先明确预算，再推进设计" },
      { en: "Verify the site before customization and installation", zh: "先核对现场，再安排定制与安装" },
      { en: "Stay focused on execution outcomes, not supply alone", zh: "以执行结果为导向，而非只停留在供货阶段" }
    ] as LocalizedText[]
  }
};

// ARCHIVED (2026-04-23) — Former paragraphs[1] in founderStory, relocated to a reusable asset.
// Original intent: four-joint breakdown of project execution pain points.
// Reuse target: likely Approach page OR Ghana Services "on-the-ground" section.
// EN: "The turning point was realising that the parts clients struggle with most are never 'the product'. They are the joints: budget vs design, design vs site, site vs shipping, shipping vs installation. Decoropic was built to hold those joints."
// ZH: "真正的转折在于意识到：客户最头疼的部分从来不是产品本身，而是各个衔接点——预算与设计、设计与现场、现场与出货、出货与安装。Decoropic 正是为了把这些衔接点承接下来而存在。"

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
    body: {
      en: "We do more than supply products. We support the key stages before and after procurement. Through site measurement, budget-led premium design, specification coordination, sourcing integration, shipment planning and on-site guidance, we help turn ideas into spaces that are more practical to execute and deliver.",
      zh: "我们不仅提供产品，更参与项目落地前后的关键环节。通过现场测量、预算导向的高端方案设计、规格协调、供货整合、出货组织及现场指导支持，我们帮助客户把想法更稳妥地转化为可执行、可落地的空间成果。"
    }
  },
  whyChooseUs: {
    title: {
      en: "Why Clients Choose Us",
      zh: "为什么客户选择我们"
    },
    items: [
      {
        title: { en: "Coordinated Multi-Category Sourcing", zh: "多品类一体化整合" },
        body: {
          en: "Furniture, lighting, rugs, bathroom products, doors, finishes and other interior categories can be coordinated around one project scope.",
          zh: "家具、灯饰、地毯、卫浴、门类、饰面材料及其他室内产品，可围绕同一项目进行统筹配置。"
        }
      },
      {
        title: { en: "Project-Focused Execution", zh: "以项目为导向的服务方式" },
        body: {
          en: "We work around drawings, budgets, style direction, positioning and timelines, not just product listings.",
          zh: "我们围绕图纸、预算、风格、定位和交期来组织建议，而不是简单罗列单品。"
        }
      },
      {
        title: { en: "More Accurate Site Dimensions", zh: "现场尺寸更准确" },
        body: {
          en: "On-site measurement helps reduce downstream issues caused by mismatches between drawings and actual site conditions.",
          zh: "通过现场测量与基础核对，减少图纸与实际条件不一致带来的后续问题。"
        }
      },
      {
        title: { en: "Premium Design Guided by Budget", zh: "预算导向的高端设计能力" },
        body: {
          en: "With a target budget in mind, we help shape spaces that feel more refined while remaining practical to deliver.",
          zh: "在明确大概预算的前提下，帮助客户做出更有品质感、同时更具可执行性的空间方案。"
        }
      },
      {
        title: { en: "Ghana On-Site Installation Guidance", zh: "加纳现场指导安装支持" },
        body: {
          en: "We provide practical follow-up and coordination support for real site execution.",
          zh: "我们提供更贴近实际施工落地的跟进与协调支持。"
        }
      },
      {
        title: { en: "Clearer Cross-Team Coordination", zh: "更清晰的跨团队协作" },
        body: {
          en: "We help reduce communication gaps across owners, designers, contractors, buyers and suppliers.",
          zh: "帮助业主、设计师、施工方、采购方与供应方之间减少沟通偏差。"
        }
      }
    ]
  },
  services: {
    title: {
      en: "Our Services",
      zh: "我们的服务"
    },
    items: [
      {
        title: { en: "Local Site Measurement", zh: "当地现场测量服务" },
        body: {
          en: "We provide on-site measurement and dimension verification to support more accurate customization, product selection and installation preparation.",
          zh: "在项目现场进行基础测量与尺寸核对，帮助更准确地推进定制、选型与安装准备。"
        }
      },
      {
        title: { en: "Budget-Led Premium Design", zh: "按目标预算进行高端方案设计" },
        body: {
          en: "Based on the client’s target budget, spatial needs and style direction, we provide premium design guidance that balances visual quality and implementation feasibility.",
          zh: "根据客户的大概预算、空间功能与风格方向，提供更具高级感且更可落地的设计建议。"
        }
      },
      {
        title: { en: "Interior Package Sourcing", zh: "室内产品整合配套" },
        body: {
          en: "We coordinate multiple interior product categories for residential, hospitality, office and commercial projects.",
          zh: "整合住宅、酒店、办公及商业空间项目所需的多类室内产品资源。"
        }
      },
      {
        title: { en: "Specification & Selection Coordination", zh: "选型与规格协调" },
        body: {
          en: "We help align dimensions, materials, colors, finishes and suitability.",
          zh: "协助确认尺寸、材质、颜色、表面处理及适配关系。"
        }
      },
      {
        title: { en: "Consolidation & Shipment Planning", zh: "出货与集运组织" },
        body: {
          en: "For multi-supplier and multi-category projects, we help organize shipment and delivery coordination.",
          zh: "针对多供应商、多品类项目进行发货组织与配套协调。"
        }
      },
      {
        title: { en: "Ghana Implementation Support", zh: "加纳现场落地支持" },
        body: {
          en: "We support on-site execution in Ghana through installation guidance, communication assistance and issue follow-up.",
          zh: "为项目现场提供安装指导、沟通协调及问题跟进支持。"
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

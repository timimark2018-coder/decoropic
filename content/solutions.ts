import type { LocalizedText } from "@/content/types";

// =============================================================================
// SOLUTIONS — Battle 4 (asymmetric layout + geometric icons + how-it-feels copy)
// 7 空间，每空间含: card data + how-it-feels (升级文案) + spec/process/investment
// 旧 client-types schema 已归档（git show f1b596c:content/solutions.ts 可恢复）
// 主页用错落布局 + 几何草图，非传统 4×2 网格
// =============================================================================

export type SolutionSpaceSlug =
  | "living-room"
  | "dining"
  | "family-area"
  | "study"
  | "kitchen"
  | "outdoor-area"
  | "entrance-hall";

export type SolutionSpace = {
  slug: SolutionSpaceSlug;
  number: string;
  cardTitle: LocalizedText;
  cardTagline: LocalizedText;
  // SVG geometric icon (path data, golden 1px stroke, 60×60 viewBox)
  iconSvg: string;
  // 错落布局尺寸（主页用） — small / medium / large
  cardSize: "small" | "medium" | "large";
  heroTitle: LocalizedText;
  heroQuote: LocalizedText;
  story: {
    title: LocalizedText;
    body: LocalizedText;
    highlights: LocalizedText[];
  };
  specs: Array<{
    category: LocalizedText;
    sources: LocalizedText;
    details: LocalizedText;
  }>;
  process: Array<{
    number: string;
    label: LocalizedText;
    timing: LocalizedText;
  }>;
  howItFeels: LocalizedText;
  designConcept: {
    theme: LocalizedText;
    summary: LocalizedText;
    coreIdea: LocalizedText;
  };
  investment: {
    sqmLabel: LocalizedText;
    standard: LocalizedText;
    premium: LocalizedText;
    luxury: LocalizedText;
  };
};

export const solutionsContent = {
  hero: {
    eyebrow: { en: "Solutions by space", zh: "按空间分类的解决方案" },
    title: {
      en: "Every space tells a different story.",
      zh: "每个空间都讲述着不同的故事。"
    },
    pullQuote: {
      en: "We don't sell furniture. We shape the experience of living in a space — one decision at a time.",
      zh: "我们不只卖家具。我们雕琢生活在空间中的体验——一次决策接一次决策。"
    },
    pullQuoteAuthor: {
      en: "— The Decoropic Team",
      zh: "—— Decoropic 团队"
    }
  },
  gridIntro: {
    eyebrow: { en: "Choose your space", zh: "选择你的空间" },
    title: {
      en: "How design principles meet your brief — and shape every space.",
      zh: "设计理念如何回应你的需求——塑造每一个空间。"
    }
  },
  hookCard: {
    title: { en: "Your space isn't here?", zh: "你的空间不在这里？" },
    body: {
      en: "Use our 11-step estimator to scope your project — any space, any scale.",
      zh: "用我们的 11 步预算测算器梳理你的项目——任何空间，任何规模。"
    },
    ctaLabel: { en: "Begin estimator", zh: "开始测算" }
  },
  bottomCta: {
    eyebrow: { en: "Ready to start?", zh: "准备好开始？" },
    title: { en: "Not sure where to begin?", zh: "不确定从哪里开始？" },
    body: {
      en: "Use our 11-step estimator to shape your project. Or talk to Lily directly.",
      zh: "使用我们的 11 步测算器梳理你的项目。或直接和 Lily 联系。"
    },
    primaryCtaLabel: { en: "Open the estimator", zh: "打开测算器" },
    secondaryCtaLabel: { en: "Talk to Lily", zh: "联系 Lily" }
  },
  spaces: [
    // ========================= 1. Living Room =========================
    {
      slug: "living-room",
      number: "01",
      cardTitle: { en: "Living Room", zh: "客厅" },
      cardTagline: { en: "The room you remember the project by.", zh: "让人记住整个项目的房间。" },
      iconSvg: `<rect x="8" y="14" width="44" height="32" fill="none" stroke="currentColor" stroke-width="1"/><path d="M14 36 Q30 30 46 36" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="30" cy="20" r="2" fill="currentColor"/><line x1="46" y1="14" x2="52" y2="6" stroke="currentColor" stroke-width="0.8"/>`,
      cardSize: "large",
      heroTitle: { en: "The Living Room", zh: "客厅" },
      heroQuote: {
        en: "The room where you remember why you built this home in the first place.",
        zh: "在这个房间里，你想起当初建造这个家的初心。"
      },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: {
          en: "At Decoropic, we approach the living room as the project's emotional anchor. Where every other room serves a function, this one carries weight.",
          zh: "在 Decoropic，我们把客厅视为项目的情感锚点。其他房间各有功能，这一间则承载重量。"
        },
        highlights: [
          { en: "A defining sofa, sized to actual proportions", zh: "尺寸符合实际比例的定调沙发" },
          { en: "A floor that grounds without showing off", zh: "稳重而不炫耀的地面" },
          { en: "A ceiling that breathes with layered light", zh: "层次照明的呼吸天花" }
        ]
      },
      specs: [
        { category: { en: "Sofas", zh: "沙发" }, sources: { en: "Italian leather, fabric upholstery", zh: "意大利皮革、面料软包" }, details: { en: "3-piece modular, customisable dimensions.", zh: "三件套模块化，尺寸可定制。" } },
        { category: { en: "Lighting", zh: "灯具" }, sources: { en: "German pendants, Italian decorative", zh: "德国吊灯、意大利装饰" }, details: { en: "Recessed at 4000K + decorative centerpiece.", zh: "4000K 嵌入式 + 装饰中央灯。" } },
        { category: { en: "Flooring", zh: "地面" }, sources: { en: "Spanish 800×800 porcelain", zh: "西班牙 800×800 瓷砖" }, details: { en: "Large-format slabs, minimal grout.", zh: "大尺寸石材，最小化接缝。" } }
      ],
      process: [
        { number: "01", label: { en: "Site measurement & lifestyle audit", zh: "现场测量 & 生活方式审视" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Design concept & reference selection", zh: "设计概念 & 参考选定" }, timing: { en: "Weeks 2-3", zh: "第 2-3 周" } },
        { number: "03", label: { en: "Material confirmation & sourcing", zh: "材料确认 & 采购" }, timing: { en: "Weeks 4-6", zh: "第 4-6 周" } },
        { number: "04", label: { en: "Logistics from Foshan to Accra", zh: "从佛山到阿克拉的物流" }, timing: { en: "Weeks 7-10", zh: "第 7-10 周" } },
        { number: "05", label: { en: "On-site installation & finish", zh: "现场安装 & 收尾" }, timing: { en: "Weeks 11-12", zh: "第 11-12 周" } }
      ],
      howItFeels: {
        en: "A 480 sqm villa in Accra. The brief is \"Modern Luxury that doesn't feel like a hotel lobby.\"\n\nMost studios default to a marble TV wall and a massive crystal chandelier. We don't.\n\nOur principle: a living room must hold three lives — the family's daily ease, the visitor's first impression, and the family's quiet evenings. Each of these has different lighting, scale, and material needs. We design for all three at once.\n\nAnchor furniture, sized for the room, not the catalog. The sofa is 3.6m Italian leather, custom-cut to leave 1.4m of breathing space on each side. Walking feels unforced. Sitting feels claimed.\n\nLighting in three layers, not three switches. A 1.8m crystal pendant defines the conversation zone. Recessed downlights at 4000K for daytime balance. A warm reading lamp at 2700K for 9pm quiet. The room shifts mood without anyone touching the wall plate.\n\nA floor that grounds without showing off. 800×800 bone-white Spanish porcelain — large enough to minimize grout, warm enough not to feel like a showroom.\n\nBy the third evening after move-in, you stop noticing any of these decisions. The room is yours. Not a magazine spread. Not a hotel. Your living room.\n\nThis is what we shape — every decision anchored to how you actually live.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "Not a hotel lobby, but a modern luxury living room that truly belongs to the family.",
          zh: "不是酒店大堂，而是真正属于家庭的现代奢华客厅。"
        },
        summary: {
          en: "The living room is not a single display space. It must support daily family comfort, visitor reception, and quiet evenings at home. Through furniture scaled to the room, layered lighting, and warm, restrained floor materials, the design creates an atmosphere that is comfortable, dignified, and built for long-term living.",
          zh: "客厅不是单一的展示空间。它要承载三种生活：家庭日常的安适、访客的第一印象、夜晚的安静相伴。通过尺度合宜的家具、分层照明、温润克制的地面材料，设计建立的是一种舒适、有尊严、适合长期居住的氛围。"
        },
        coreIdea: {
          en: "Luxury returns to real life, instead of remaining on the surface of decoration.",
          zh: "奢华回归真实生活，不再停留在装饰的表面。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 40-60 sqm living room:", zh: "40-60 平方米客厅参考：" },
        standard: { en: "Standard finish — $8,000 to $15,000", zh: "标准配置 —— $8,000 至 $15,000" },
        premium: { en: "Premium finish — $15,000 to $35,000", zh: "高级配置 —— $15,000 至 $35,000" },
        luxury: { en: "Luxury finish — $35,000+", zh: "奢华配置 —— $35,000 起" }
      }
    },

    // ========================= 2. Dining =========================
    {
      slug: "dining",
      number: "02",
      cardTitle: { en: "Dining", zh: "餐厅" },
      cardTagline: { en: "Where the conversation continues.", zh: "对话延续的地方。" },
      iconSvg: `<ellipse cx="30" cy="38" rx="20" ry="6" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="14" cy="42" r="1.5" fill="currentColor"/><circle cx="30" cy="44" r="1.5" fill="currentColor"/><circle cx="46" cy="42" r="1.5" fill="currentColor"/><circle cx="22" cy="32" r="1.5" fill="currentColor"/><circle cx="38" cy="32" r="1.5" fill="currentColor"/><line x1="22" y1="10" x2="22" y2="22" stroke="currentColor" stroke-width="0.8"/><line x1="30" y1="10" x2="30" y2="20" stroke="currentColor" stroke-width="0.8"/><line x1="38" y1="10" x2="38" y2="24" stroke="currentColor" stroke-width="0.8"/>`,
      cardSize: "small",
      heroTitle: { en: "The Dining Room", zh: "餐厅" },
      heroQuote: { en: "A table that holds long meals and longer conversations.", zh: "一张桌子，承载漫长的晚餐和更漫长的对话。" },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: { en: "A dining room is the most-used room with the highest stakes — daily meals and dinner parties at once.", zh: "餐厅是使用最频繁、责任最重的房间——日常用餐与正式宴请同时承担。" },
        highlights: [
          { en: "A table sized for the median day", zh: "符合日常使用尺寸的桌子" },
          { en: "Lighting that flatters food and faces", zh: "衬托食物与面孔的灯光" },
          { en: "Materials that age with the family", zh: "与家庭共同老化的材料" }
        ]
      },
      specs: [
        { category: { en: "Tables", zh: "餐桌" }, sources: { en: "Italian solid wood, ceramic-top", zh: "意大利实木、岩板面" }, details: { en: "8-12 seater configurations.", zh: "8-12 座配置。" } },
        { category: { en: "Chairs", zh: "椅子" }, sources: { en: "European upholstered", zh: "欧洲软包" }, details: { en: "Performance fabrics for daily use.", zh: "日常使用的功能性面料。" } },
        { category: { en: "Lighting", zh: "灯具" }, sources: { en: "Pendant clusters", zh: "吊灯组合" }, details: { en: "Centerpiece sized to table length.", zh: "中央吊灯尺寸与桌长匹配。" } }
      ],
      process: [
        { number: "01", label: { en: "Site measurement", zh: "现场测量" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Design & sourcing", zh: "设计与采购" }, timing: { en: "Weeks 2-5", zh: "第 2-5 周" } },
        { number: "03", label: { en: "Logistics & install", zh: "物流与安装" }, timing: { en: "Weeks 6-10", zh: "第 6-10 周" } }
      ],
      howItFeels: {
        en: "A 35 sqm dining room. The household is six. The brief is \"a table that holds breakfast and the holiday crowd without being two different rooms.\"\n\nMost studios pick a table by photographing-well. We pick by counting meals.\n\nOur principle: a dining room is the most-used room with the highest stakes. It feeds the family daily and performs at every dinner party. We design for the daily case, then make sure it scales to the perfect one.\n\nA table sized for the median day, with capacity to grow. 2.4m solid Italian walnut with a ceramic inlay running its length. Eight chairs by default — two more pull from the sideboard for holidays. The visual weight stays the same.\n\nLighting clustered, not symmetrical. Three pendants overhead, each at a different height. The asymmetry reads as care, not error. Warm at dinner, dimmable to candlelight when the talk runs late.\n\nA surface that earns its scratches. Solid walnut develops patina. Ceramic inlay survives the hot platter. We choose materials that age with the family, not against it.\n\nBy the second family meal, your kids have already chosen their seats. By the third, you stop adjusting anything.\n\nThe room earns its name. This is what we shape — every decision anchored to how you actually eat together.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "One dining table that carries everyday meals as well as important gatherings.",
          zh: "一张餐桌，既能承载日常一餐一饭，也能承载节日的重要聚会。"
        },
        summary: {
          en: "The dining room is designed from real eating habits, not from what photographs well. The table, seating, lighting, and materials are planned around two scenarios: daily family use and expanded holiday hospitality. The result is a room that feels intimate for everyday meals and dignified when guests arrive.",
          zh: "餐厅是从真实的饮食习惯出发设计的，不是从摄影效果出发。餐桌、座椅、灯光、材料，都围绕两个场景规划：家庭日常使用，与节日扩展待客。结果是一个让日常一餐也亲密、有客来访也得体的空间。"
        },
        coreIdea: {
          en: "The true luxury of a dining room comes from making the family genuinely want to sit down and eat together.",
          zh: "餐厅真正的奢华，是让家人真心愿意坐下来一起吃饭。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 20-35 sqm dining room:", zh: "20-35 平方米餐厅参考：" },
        standard: { en: "Standard — $5,000 to $10,000", zh: "标准 —— $5,000 至 $10,000" },
        premium: { en: "Premium — $10,000 to $22,000", zh: "高级 —— $10,000 至 $22,000" },
        luxury: { en: "Luxury — $22,000+", zh: "奢华 —— $22,000 起" }
      }
    },

    // ========================= 3. Family Area =========================
    {
      slug: "family-area",
      number: "03",
      cardTitle: { en: "Family Area", zh: "家庭活动区" },
      cardTagline: { en: "Where life actually happens.", zh: "真正的生活发生地。" },
      iconSvg: `<rect x="8" y="14" width="44" height="32" fill="none" stroke="currentColor" stroke-width="1"/><rect x="14" y="20" width="22" height="12" fill="none" stroke="currentColor" stroke-width="0.8"/><path d="M40 30 L40 40 L48 40" fill="none" stroke="currentColor" stroke-width="1"/>`,
      cardSize: "medium",
      heroTitle: { en: "The Family Area", zh: "家庭活动区" },
      heroQuote: { en: "The most lived-in room — where comfort outranks formality.", zh: "最有生活气息的房间——舒适胜过形式。" },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: { en: "A family room is where the household relaxes. Everything else must support comfort, durability, and quiet.", zh: "家庭活动区是家人放松的地方。一切设计都为舒适、耐用、安静服务。" },
        highlights: [
          { en: "A TV that disappears when off", zh: "关闭时消失的电视" },
          { en: "A sofa that doesn't worship the screen", zh: "不为屏幕而存在的沙发" },
          { en: "Storage that holds chaos invisibly", zh: "隐形吞噬混乱的收纳" }
        ]
      },
      specs: [
        { category: { en: "Sofas", zh: "沙发" }, sources: { en: "Performance leather", zh: "功能性皮革" }, details: { en: "Family-grade durability.", zh: "家庭级耐用度。" } },
        { category: { en: "Storage", zh: "收纳" }, sources: { en: "Built-in cabinetry", zh: "嵌入式柜体" }, details: { en: "Custom configurations.", zh: "定制配置。" } },
        { category: { en: "Flooring", zh: "地面" }, sources: { en: "Engineered wood, durable tile", zh: "工程木、耐用瓷砖" }, details: { en: "High-traffic ready.", zh: "高使用频率适用。" } }
      ],
      process: [
        { number: "01", label: { en: "Audit lifestyle needs", zh: "审视生活方式需求" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Design & source", zh: "设计与采购" }, timing: { en: "Weeks 2-5", zh: "第 2-5 周" } },
        { number: "03", label: { en: "Install", zh: "安装" }, timing: { en: "Weeks 6-10", zh: "第 6-10 周" } }
      ],
      howItFeels: {
        en: "A 40 sqm family area. The TV is a fact of family life. The brief is \"a room that handles screen time without being ruled by it.\"\n\nMost studios mount the TV at center stage and call it done. We work harder.\n\nOur principle: a family room is where the household relaxes. The TV serves that, not the reverse. Every other decision must support comfort, durability, and quiet.\n\nA TV that disappears when off. 75 inches, mounted flush in fluted walnut paneling. The panel reads as architecture, not a media wall. The TV becomes a quiet rectangle when powered down.\n\nA sofa that doesn't worship the screen. Angled 15 degrees toward the side window, where afternoon light comes in. Conversation feels natural. Watching is still comfortable.\n\nStorage that holds family chaos invisibly. Floor-to-ceiling cabinetry on one wall, painted in the same color as the wall itself. Toys go in. Games go in. Devices charge inside. Nothing visible.\n\nAfter three weeks, the room has the messiness only family rooms have — a throw on the sofa, a kid's drawing on the table.\n\nEverything else stays calm. The room holds the chaos without becoming it.\n\nThis is what we shape — every decision anchored to how you actually live with your family.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "Let the TV serve the family, rather than making the family orbit around the TV.",
          zh: "让电视服务家庭，而不是让家庭围绕电视运转。"
        },
        summary: {
          en: "The family area accepts that television is part of modern family life, but it does not allow the screen to dominate the room. A concealed TV wall, a sofa angled toward natural light, and invisible storage create a space that works for watching, talking, relaxing, and living together.",
          zh: "家庭区接受电视是现代家庭生活的一部分，但不让屏幕主宰整个空间。隐藏式电视墙、面向自然光的沙发角度、看不见的收纳系统，共同构成一个可以观影、对话、放松、共处的空间。"
        },
        coreIdea: {
          en: "A family room can carry signs of life without losing control or becoming visually chaotic.",
          zh: "家庭区可以承载生活的痕迹，但不会失序，也不会视觉混乱。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 25-45 sqm family area:", zh: "25-45 平方米家庭活动区参考：" },
        standard: { en: "Standard — $4,000 to $9,000", zh: "标准 —— $4,000 至 $9,000" },
        premium: { en: "Premium — $9,000 to $20,000", zh: "高级 —— $9,000 至 $20,000" },
        luxury: { en: "Luxury — $20,000+", zh: "奢华 —— $20,000 起" }
      }
    },

    // ========================= 4. Study =========================
    {
      slug: "study",
      number: "04",
      cardTitle: { en: "Study", zh: "书房" },
      cardTagline: { en: "Quiet by design.", zh: "为安静而设计。" },
      iconSvg: `<rect x="14" y="14" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1"/><line x1="20" y1="22" x2="40" y2="22" stroke="currentColor" stroke-width="0.8"/><line x1="20" y1="28" x2="40" y2="28" stroke="currentColor" stroke-width="0.8"/><rect x="22" y="34" width="16" height="8" fill="none" stroke="currentColor" stroke-width="1"/>`,
      cardSize: "small",
      heroTitle: { en: "The Study", zh: "书房" },
      heroQuote: { en: "Where the mind earns its rest.", zh: "心灵获得休息的地方。" },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: { en: "A study earns its name through silence and focus. Every decision serves concentration first; aesthetics follow.", zh: "书房凭借安静与专注获得它的名字。一切设计先服务专注，再考虑美学。" },
        highlights: [
          { en: "A door that closes correctly", zh: "真正关得上的门" },
          { en: "A desk sized for actual work", zh: "为真实工作而设的桌子" },
          { en: "Storage that grows with you", zh: "与你共同生长的收纳" }
        ]
      },
      specs: [
        { category: { en: "Desk", zh: "书桌" }, sources: { en: "Italian solid wood", zh: "意大利实木" }, details: { en: "Custom dimensions.", zh: "定制尺寸。" } },
        { category: { en: "Storage", zh: "收纳" }, sources: { en: "Floor-to-ceiling cabinetry", zh: "顶天立地柜体" }, details: { en: "Library configurations.", zh: "图书馆式配置。" } },
        { category: { en: "Lighting", zh: "灯具" }, sources: { en: "European task fixtures", zh: "欧洲工作灯具" }, details: { en: "Layered ambient + task.", zh: "环境光与工作光层次。" } }
      ],
      process: [
        { number: "01", label: { en: "Workflow audit", zh: "工作流程审视" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Design & source", zh: "设计与采购" }, timing: { en: "Weeks 2-5", zh: "第 2-5 周" } },
        { number: "03", label: { en: "Install", zh: "安装" }, timing: { en: "Weeks 6-10", zh: "第 6-10 周" } }
      ],
      howItFeels: {
        en: "An 18 sqm study. You've worked in three open-plan offices. The brief is \"a room where the door actually closes.\"\n\nMost studios design studies as decorative libraries. We design them as workspaces that happen to look beautiful.\n\nOur principle: a study earns its name through silence and focus. Every decision serves concentration first; aesthetics follow.\n\nA door that closes correctly. Solid core construction with a rubber gasket. Family voices fade rather than vanish — you stay connected without losing focus. The cost is invisible; the effect is profound.\n\nA desk sized for actual work. 2.2m solid walnut, scaled to fit a monitor, papers, a coffee, and a notebook without crowding. Cable management runs through a discreet grommet.\n\nLight layered for an 8-hour day. 4000K overhead for daylight balance. A warm 2700K desk lamp for evening. Both dimmable. The room feels alive at 10pm without feeling like an office.\n\nStorage that grows with you. Wall storage rises floor-to-ceiling on one side. Shelves you can fill in five years. The room reads composed, even when you're not.\n\nBy the second week, this is where you actually finish the things you used to procrastinate on.\n\nThe room earns the silence you came here for. This is what we shape — every decision anchored to how you actually concentrate.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "A private workspace where the door truly closes and concentration can begin.",
          zh: "一个真正能关上门、让专注开始的私人工作空间。"
        },
        summary: {
          en: "The study is not treated as a decorative library, but as a functional, quiet, long-use workspace. Acoustic separation, a properly scaled desk, lighting for extended work sessions, and expandable storage all contribute to a room built around focus.",
          zh: "书房不被当作装饰性图书馆，而是一个功能性、安静、可长期使用的工作空间。声学隔离、合宜尺度的书桌、适合长时间工作的照明、可扩展的收纳系统，每一项决策都围绕「专注」展开。"
        },
        coreIdea: {
          en: "Beauty is not the first goal of a study; helping you actually finish important work is.",
          zh: "美不是书房的第一目标；帮你真正完成重要工作才是。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 15-25 sqm study:", zh: "15-25 平方米书房参考：" },
        standard: { en: "Standard — $3,000 to $7,000", zh: "标准 —— $3,000 至 $7,000" },
        premium: { en: "Premium — $7,000 to $16,000", zh: "高级 —— $7,000 至 $16,000" },
        luxury: { en: "Luxury — $16,000+", zh: "奢华 —— $16,000 起" }
      }
    },

    // ========================= 5. Kitchen =========================
    {
      slug: "kitchen",
      number: "05",
      cardTitle: { en: "Kitchen", zh: "厨房" },
      cardTagline: { en: "The hardest room to get right.", zh: "最难做对的房间。" },
      iconSvg: `<rect x="6" y="32" width="48" height="10" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/><circle cx="30" cy="10" r="1.5" fill="currentColor"/><circle cx="44" cy="14" r="1.5" fill="currentColor"/><line x1="16" y1="14" x2="16" y2="28" stroke="currentColor" stroke-width="0.6"/><line x1="30" y1="10" x2="30" y2="28" stroke="currentColor" stroke-width="0.6"/><line x1="44" y1="14" x2="44" y2="28" stroke="currentColor" stroke-width="0.6"/>`,
      cardSize: "large",
      heroTitle: { en: "The Kitchen", zh: "厨房" },
      heroQuote: { en: "The room that survives every other trend.", zh: "经得起所有潮流考验的房间。" },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: { en: "A kitchen is engineering before it is decoration. Workflow, storage logic, and appliance integration all decided first.", zh: "厨房先是工程，再是装饰。动线、收纳逻辑、家电集成都先于美学决定。" },
        highlights: [
          { en: "An island sized for the household", zh: "符合家庭规模的岛台" },
          { en: "Cabinetry built to last 20 years", zh: "20 年寿命的柜体" },
          { en: "Appliances integrated, not mounted", zh: "嵌入式而非外挂的家电" }
        ]
      },
      specs: [
        { category: { en: "Cabinetry", zh: "柜体" }, sources: { en: "Italian, German modular", zh: "意大利、德国模块化" }, details: { en: "20-year frame warranties.", zh: "20 年框架质保。" } },
        { category: { en: "Countertops", zh: "台面" }, sources: { en: "Italian quartz, natural stone", zh: "意大利石英、天然石材" }, details: { en: "Seamless installation.", zh: "无缝安装。" } },
        { category: { en: "Appliances", zh: "家电" }, sources: { en: "German, Italian premium", zh: "德国、意大利高端" }, details: { en: "Brand options per project.", zh: "品牌选项因项目而异。" } }
      ],
      process: [
        { number: "01", label: { en: "Workflow audit", zh: "动线审视" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Layout design", zh: "布局设计" }, timing: { en: "Weeks 2-3", zh: "第 2-3 周" } },
        { number: "03", label: { en: "Sourcing", zh: "采购" }, timing: { en: "Weeks 4-6", zh: "第 4-6 周" } },
        { number: "04", label: { en: "Install", zh: "安装" }, timing: { en: "Weeks 7-12", zh: "第 7-12 周" } }
      ],
      howItFeels: {
        en: "A 30 sqm kitchen. You've cooked in three previous kitchens. The brief is \"a room where the workflow actually flows.\"\n\nMost studios choose kitchens by photographing-well. We choose by cooking through them.\n\nOur principle: a kitchen is engineering before it is decoration. The work triangle, the storage logic, the appliance integration — all decided first. Aesthetics come from getting these right.\n\nAn island sized for the household, not the showroom. 3.2m Italian quartz, with the prep zone clear of any decorative weight. The hob, the sink, and the fridge form a 2-meter triangle — measured, not guessed. You cook without crossing your own steps.\n\nCabinetry built to last 20 years. German modular framework with concealed hinges and soft-close drawers. Fronts in handleless matte lacquer or solid walnut, depending on the room's voice. Frames are the constant; finishes are the variable.\n\nAppliances integrated, not mounted. The fridge, the dishwasher, the wine cooler — all flush behind cabinet panels. The room reads as architecture, not a kitchen showroom. Visual quiet returns to the space.\n\nBy the second weekend, the kitchen has become the place where guests gather without anyone planning it.\n\nThe room cooks for itself. This is what we shape — every decision anchored to how you actually cook.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "A kitchen is engineering first, decoration second.",
          zh: "厨房首先是工程，其次才是装饰。"
        },
        summary: {
          en: "The kitchen begins with cooking logic rather than visual styling. Island size, the work triangle, cabinet structure, storage planning, and integrated appliances are all designed around real cooking behavior. Its beauty comes from functional decisions being handled correctly.",
          zh: "厨房从烹饪逻辑出发，而不是从视觉造型出发。岛台尺度、动线三角、橱柜结构、收纳规划、嵌入式电器，都是围绕真实烹饪行为设计。它的美感，来自每一个功能决策都被正确处理。"
        },
        coreIdea: {
          en: "A good kitchen is not simply one that looks premium; it is one that feels effortless to use.",
          zh: "好厨房不是看起来高端，而是用起来不费力。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 20-40 sqm kitchen:", zh: "20-40 平方米厨房参考：" },
        standard: { en: "Standard — $12,000 to $25,000", zh: "标准 —— $12,000 至 $25,000" },
        premium: { en: "Premium — $25,000 to $55,000", zh: "高级 —— $25,000 至 $55,000" },
        luxury: { en: "Luxury — $55,000+", zh: "奢华 —— $55,000 起" }
      }
    },

    // ========================= 6. Outdoor Area =========================
    {
      slug: "outdoor-area",
      number: "06",
      cardTitle: { en: "Outdoor Area", zh: "户外区域" },
      cardTagline: { en: "Designed for Ghana's climate.", zh: "为加纳气候而设计。" },
      iconSvg: `<polygon points="30,8 18,20 42,20" fill="none" stroke="currentColor" stroke-width="1"/><line x1="18" y1="20" x2="42" y2="20" stroke="currentColor" stroke-width="1"/><path d="M6 38 Q14 34 22 38 T38 38 T54 38" fill="none" stroke="currentColor" stroke-width="0.8"/><path d="M6 44 Q14 40 22 44 T38 44 T54 44" fill="none" stroke="currentColor" stroke-width="0.8"/>`,
      cardSize: "medium",
      heroTitle: { en: "The Outdoor Area", zh: "户外区域" },
      heroQuote: { en: "Where the home meets the climate, and wins.", zh: "家与气候交汇之处，并赢下一切。" },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: { en: "An outdoor area must earn its luxury through endurance. Beauty that lasts is the only kind that matters here.", zh: "户外区域必须以耐久赢得它的奢华。能持久的美才是真正重要的。" },
        highlights: [
          { en: "A floor that drains and grips", zh: "排水又防滑的地面" },
          { en: "Furniture for the climate first", zh: "先适应气候的家具" },
          { en: "Layered evening lighting", zh: "夜间多层照明" }
        ]
      },
      specs: [
        { category: { en: "Furniture", zh: "家具" }, sources: { en: "Teak, treated rattan", zh: "柚木、处理过的藤" }, details: { en: "Climate-tested.", zh: "经气候测试。" } },
        { category: { en: "Surfaces", zh: "表面" }, sources: { en: "Porcelain pavers, natural stone", zh: "瓷砖铺装、天然石材" }, details: { en: "Anti-slip rated.", zh: "防滑评级。" } },
        { category: { en: "Lighting", zh: "灯具" }, sources: { en: "IP65+ outdoor", zh: "IP65+ 户外等级" }, details: { en: "Layered for evening use.", zh: "为夜间使用做层次。" } }
      ],
      process: [
        { number: "01", label: { en: "Climate audit", zh: "气候审视" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Design & source", zh: "设计与采购" }, timing: { en: "Weeks 2-5", zh: "第 2-5 周" } },
        { number: "03", label: { en: "Install", zh: "安装" }, timing: { en: "Weeks 6-10", zh: "第 6-10 周" } }
      ],
      howItFeels: {
        en: "A 50 sqm outdoor area on a Ghana villa. The brief is \"a space that doesn't surrender to the rainy season.\"\n\nMost studios apply indoor luxury to outdoor space and watch it fail by November. We design for Ghana's climate from the first decision.\n\nOur principle: an outdoor area must earn its luxury through endurance. Materials, hardware, and detailing all considered against rain, sun, and humidity. Beauty that lasts is the only kind that matters here.\n\nA floor that drains and grips. Italian porcelain pavers, anti-slip rated, drainage-aware. The substrate is engineered for the November rains. Visual seamlessness with the indoor floor is deliberate. The threshold becomes invisible.\n\nFurniture chosen for the climate first. Teak frames, marine-grade hardware. Cushions in quick-dry performance fabric, removable for the heaviest storms. The pieces look indoor-quality but survive outdoor reality.\n\nLighting layered for evening use. Bollards along the paths. Sconces under the eaves. A single dramatic fixture over the dining table. All IP65+, all dimmable.\n\nBy the second dry season, neighbors are asking for the supplier list. By the third, your outdoor area has hosted more parties than your living room.\n\nThe room weathers everything except your memory of it. This is what we shape — every decision anchored to how your home actually meets the climate.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "Outdoor luxury for Ghana must withstand rainy seasons, strong sun, and humidity.",
          zh: "加纳的户外奢华，必须能经受雨季、烈日与湿度。"
        },
        summary: {
          en: "The outdoor area should not simply copy indoor luxury. It must be designed specifically for Ghana's climate. Anti-slip drainage-aware flooring, climate-resistant furniture, marine-grade hardware, quick-dry fabrics, and IP65+ outdoor lighting ensure that the space remains beautiful and usable over time.",
          zh: "户外区不能只是复制室内奢华，它必须为加纳的气候而专门设计。防滑且考虑排水的地面、抗气候家具、船舶级五金、速干面料、IP65+ 户外照明，共同确保空间在长时间使用中依然美观、实用。"
        },
        coreIdea: {
          en: "True outdoor refinement is proven after several rainy seasons, when the space still looks good and works well.",
          zh: "真正的户外精致，要经过几个雨季后还在工作、还在好看。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 30-60 sqm outdoor area:", zh: "30-60 平方米户外区域参考：" },
        standard: { en: "Standard — $5,000 to $12,000", zh: "标准 —— $5,000 至 $12,000" },
        premium: { en: "Premium — $12,000 to $28,000", zh: "高级 —— $12,000 至 $28,000" },
        luxury: { en: "Luxury — $28,000+", zh: "奢华 —— $28,000 起" }
      }
    },

    // ========================= 7. Entrance Hall =========================
    {
      slug: "entrance-hall",
      number: "07",
      cardTitle: { en: "Entrance Hall", zh: "玄关" },
      cardTagline: { en: "The first thing the project says.", zh: "项目说的第一句话。" },
      iconSvg: `<line x1="14" y1="6" x2="14" y2="54" stroke="currentColor" stroke-width="1"/><line x1="46" y1="6" x2="46" y2="54" stroke="currentColor" stroke-width="1"/><circle cx="30" cy="22" r="2" fill="currentColor"/><line x1="30" y1="6" x2="30" y2="20" stroke="currentColor" stroke-width="0.6"/><line x1="22" y1="44" x2="38" y2="44" stroke="currentColor" stroke-width="0.6"/>`,
      cardSize: "small",
      heroTitle: { en: "The Entrance Hall", zh: "玄关" },
      heroQuote: { en: "The shortest room — and the one that sets every tone.", zh: "最短的房间——却定下所有的基调。" },
      story: {
        title: { en: "The principle.", zh: "我们的原则。" },
        body: { en: "An entrance hall has three seconds to set the entire tone. Material, lighting, and scale must do their work immediately.", zh: "玄关有三秒钟定下整个基调。材料、灯光、尺度必须立刻起作用。" },
        highlights: [
          { en: "A surface that announces", zh: "宣告品质的表面" },
          { en: "A mirror that extends the room", zh: "延展空间的镜面" },
          { en: "Storage that disappears", zh: "隐形的收纳" }
        ]
      },
      specs: [
        { category: { en: "Surfaces", zh: "表面" }, sources: { en: "Statement stone, mirror walls", zh: "标志性石材、镜面墙" }, details: { en: "First-impression material.", zh: "第一印象的材料。" } },
        { category: { en: "Storage", zh: "收纳" }, sources: { en: "Concealed cabinetry", zh: "隐藏式柜体" }, details: { en: "Slim profile.", zh: "纤薄轮廓。" } },
        { category: { en: "Lighting", zh: "灯具" }, sources: { en: "Statement pendant or sconce", zh: "标志性吊灯或壁灯" }, details: { en: "Welcomes immediately.", zh: "立刻欢迎来客。" } }
      ],
      process: [
        { number: "01", label: { en: "Design vision", zh: "设计愿景" }, timing: { en: "Week 1", zh: "第 1 周" } },
        { number: "02", label: { en: "Source", zh: "采购" }, timing: { en: "Weeks 2-4", zh: "第 2-4 周" } },
        { number: "03", label: { en: "Install", zh: "安装" }, timing: { en: "Weeks 5-7", zh: "第 5-7 周" } }
      ],
      howItFeels: {
        en: "An 8 sqm entrance hall. The shortest room in the project. The brief is \"the first sentence the home says.\"\n\nMost studios treat entrance halls as transitional space. We treat them as the project's opening line.\n\nOur principle: an entrance hall has three seconds to set the entire tone. Material choice, lighting, and scale must do their work immediately, without ornament.\n\nA surface that announces. Book-matched marble or large-format porcelain on the floor, scaled to the room. The eye registers material quality before it registers any object.\n\nA mirror that extends the room. Full-height, lit from one side. The corridor reads twice as long as it measures. The brain expects more space behind it. The home feels generous before any room is seen.\n\nA pendant that anchors the height. Custom-sized to the ceiling. Sculptural, not decorative. The light falls in a way that flatters the floor and the visitor simultaneously. A welcome that doesn't perform.\n\nStorage that disappears. Concealed shoe storage behind the opposite wall. Visible only when needed.\n\nBy the first dinner party, three guests have asked \"who designed your house?\" before they've reached the living room.\n\nThe room sets the entire tone in three seconds. This is what we shape — every decision anchored to how your home greets every visitor.",
        zh: "Coming soon — Chinese version in preparation."
      },
      designConcept: {
        theme: {
          en: "The entrance hall is the home's first sentence, setting the tone in three seconds.",
          zh: "玄关是家的第一句话，三秒之内定下整个家的基调。"
        },
        summary: {
          en: "Although small, the entrance hall is the opening scene of the entire home. High-quality floor materials, a full-height mirror, a custom-scaled pendant, and concealed storage establish scale, quality, and welcome immediately.",
          zh: "玄关虽小，却是整个家的开场。高品质地面材料、整面镜面、定制比例的吊灯、隐藏式收纳，立刻确立尺度、品质与欢迎感。"
        },
        coreIdea: {
          en: "Even the shortest space can define the first impression of the entire home.",
          zh: "即使最短的空间，也能定义整个家的第一印象。"
        }
      },
      investment: {
        sqmLabel: { en: "For a 5-15 sqm entrance hall:", zh: "5-15 平方米玄关参考：" },
        standard: { en: "Standard — $2,000 to $5,000", zh: "标准 —— $2,000 至 $5,000" },
        premium: { en: "Premium — $5,000 to $12,000", zh: "高级 —— $5,000 至 $12,000" },
        luxury: { en: "Luxury — $12,000+", zh: "奢华 —— $12,000 起" }
      }
    }
  ] satisfies SolutionSpace[]
};

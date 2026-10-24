import type { LocalizedText } from "./types";

// /estimator 页的服务端文案。
//
// 估算器本体是客户端组件，问题文本只存在于 JS 里 —— HTML 中搜不到任何一句，
// 所以这个核心工具此前完全不被索引。这里把 11 步问题以**页面可见内容**的形式
// 服务端渲染出来(不是藏起来的文本，藏文本属于 cloaking)，既让买家在开始前
// 知道会被问什么，也让这一页有真正可索引的内容。
//
// 英文问句与 home-estimator-hook.tsx 里的 QuestionShell title 逐字一致。
export const estimatorContent = {
  hero: {
    title: {
      en: "Project budget estimator",
      zh: "项目预算测算器"
    },
    subtitle: {
      en: "Eleven questions, about a minute, and an early budget range for your project — before any drawing, quotation or site visit.",
      zh: "十一个问题、约一分钟，先得到项目的初步预算区间 —— 在任何图纸、报价或现场勘查之前。"
    } as LocalizedText
  },
  questionsHeading: {
    en: "What the estimator asks",
    zh: "测算器会问什么"
  } as LocalizedText,
  questionsIntro: {
    en: "Nothing here is binding and no contact details are needed to see a range. Each answer narrows the scope the estimate is built from.",
    zh: "这里没有任何约束性承诺，看到区间也不需要留联系方式。每个回答都会收窄估算所依据的范围。"
  } as LocalizedText,
  questions: [
    {
      en: "What kind of project?",
      zh: "什么类型的项目？"
    },
    {
      en: "What's the scale?",
      zh: "项目规模多大？"
    },
    {
      en: "Where in Ghana?",
      zh: "在加纳的哪个地区？"
    },
    {
      en: "How many bedrooms?",
      zh: "几间卧室？"
    },
    {
      en: "How many bathrooms?",
      zh: "几间卫生间？"
    },
    {
      en: "Which spaces matter most?",
      zh: "哪些空间最重要？"
    },
    {
      en: "What style speaks to you?",
      zh: "偏好什么风格？"
    },
    {
      en: "What level of finish?",
      zh: "完成标准到什么程度？"
    },
    {
      en: "How would you like us to support?",
      zh: "希望我们以什么方式参与？"
    },
    {
      en: "When do you need it ready?",
      zh: "希望什么时候交付？"
    },
    {
      en: "What investment range feels right for a project of this scale?",
      zh: "这个规模的项目，你心里的投入区间大概是多少？"
    }
  ] as LocalizedText[],
  scope: {
    heading: {
      en: "What the range covers",
      zh: "估算区间包含什么"
    } as LocalizedText,
    body: {
      en: "The range covers the material package and the scope you select — finishes, furniture, bathroom and kitchen, lighting, doors and windows — at the finish level you choose. It does not cover structural work, mechanical and electrical installation, local labour rates, import duty or clearance, which vary by site and by country and are quoted separately.",
      zh: "区间覆盖你所选范围内的材料配套 —— 饰面、家具、卫浴与厨房、灯具、门窗 —— 并按你选择的完成标准计算。不含结构工程、机电安装、当地人工、进口关税与清关费用,这些随项目与国别差异很大,需单独报价。"
    } as LocalizedText
  },
  disclaimer: {
    en: "This is a preliminary estimate only. Final scope and quotation depend on site measurement, design requirements, material standards and project details.",
    zh: "这只是初步预估。最终方案与报价需根据现场测量、设计范围、材料标准和项目要求进一步确认。"
  } as LocalizedText
};

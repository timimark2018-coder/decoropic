// =============================================================================
// CONTACT — Battle 7 Phase 2 (Editorial upgrade)
// 5 章节：Hero / Methods / Inquiry Form / What Happens Next / Estimator CTA
// PRESERVED: form + options.projectTypes (used by ProjectInquiryForm)
// =============================================================================

export const contactContent = {
  hero: {
    eyebrow: { en: "Contact", zh: "联系" },
    title: {
      en: "Let's start your project.",
      zh: "从你的项目开始。"
    },
    // Backwards-compat: subtitle is no longer rendered, but kept for any legacy import
    subtitle: {
      en: "Whether you are at the planning stage, exploring a budget, or already preparing drawings and procurement, we are ready to support your next step.",
      zh: "无论您正处于前期规划、预算评估，还是已经开始准备图纸与采购，我们都可以协助您推进下一步。"
    },
    pullQuote: {
      en: "Real conversations. Real timelines. No automated follow-ups.",
      zh: "真实对话。真实时间表。没有自动化推送。"
    }
  },
  methods: {
    eyebrow: { en: "Reach our team", zh: "联系我们" },
    title: { en: "Three ways to reach us.", zh: "三种方式联系我们。" },
    whatsapp: {
      title: { en: "WhatsApp", zh: "WhatsApp" },
      value: "+233 53 151 9347",
      note: { en: "Mon–Sat, 9:00–18:00 GMT", zh: "周一至周六，9:00–18:00 GMT" },
      href: "https://wa.me/233531519347"
    },
    email: {
      title: { en: "Email", zh: "邮箱" },
      value: "service@decoropic.com"
    },
    offices: {
      title: { en: "Offices", zh: "办公地点" },
      primary: {
        location: { en: "Accra, Ghana", zh: "加纳，阿克拉" },
        role: {
          en: "On-site service & installation team",
          zh: "现场服务与安装团队"
        }
      },
      secondary: {
        location: { en: "Foshan, China", zh: "中国，佛山" },
        role: { en: "Sourcing & quality control hub", zh: "采购与品控中心" }
      }
    }
  },
  inquirySection: {
    eyebrow: { en: "Or send the project details", zh: "或发送项目详情" },
    title: { en: "Tell us about your project.", zh: "告诉我们你的项目。" }
  },
  whatHappensNext: {
    eyebrow: { en: "After you reach out", zh: "联系我们之后" },
    title: { en: "What happens next.", zh: "接下来是这样。" },
    steps: [
      {
        number: "01",
        title: { en: "Our team replies within 24 hours", zh: "我们 24 小时内回复" },
        body: {
          en: "Direct response from our team. Personal, not automated.",
          zh: "团队直接回复。亲自处理，不是自动消息。"
        }
      },
      {
        number: "02",
        title: { en: "30-minute discovery call", zh: "30 分钟初次了解" },
        body: {
          en: "WhatsApp video or voice. We listen first, ask questions, share initial thoughts.",
          zh: "WhatsApp 视频或语音。我们先听、再提问、再分享初步想法。"
        }
      },
      {
        number: "03",
        title: {
          en: "Detailed proposal in 5 working days",
          zh: "5 个工作日内出详细方案"
        },
        body: {
          en: "Scope, timeline, investment ranges, sourcing strategy. Yours to compare and decide.",
          zh: "范围、时间表、投资区间、采购策略。供你对比与决策。"
        }
      }
    ]
  },
  estimatorCta: {
    eyebrow: { en: "Not ready to talk?", zh: "还没准备好？" },
    title: { en: "Try the 11-step estimator first.", zh: "先试 11 步预算测算器。" },
    ctaLabel: { en: "Open the estimator", zh: "打开测算器" },
    ctaHref: "/#estimator"
  },
  // ===================================================================
  // PRESERVED for ProjectInquiryForm.tsx
  // ===================================================================
  form: {
    title: {
      en: "Project Inquiry Form",
      zh: "项目咨询表单"
    },
    fields: {
      name: { en: "Name", zh: "姓名" },
      company: { en: "Company", zh: "公司名称" },
      whatsapp: { en: "WhatsApp", zh: "WhatsApp" },
      email: { en: "Email", zh: "邮箱" },
      projectType: { en: "Project Type", zh: "项目类型" },
      location: { en: "Project Location", zh: "项目所在地" },
      notes: { en: "Project Details", zh: "项目说明" },
      upload: { en: "Upload Drawings / BOQ", zh: "上传图纸 / BOQ" }
    },
    submitLabel: {
      en: "Send Inquiry",
      zh: "提交咨询"
    }
  },
  options: {
    projectTypes: [
      { en: "Villa", zh: "别墅" },
      { en: "Apartment", zh: "公寓" },
      { en: "Hospitality", zh: "酒店" },
      { en: "Office", zh: "办公空间" },
      { en: "Commercial", zh: "商业空间" },
      { en: "Mixed Project", zh: "综合项目" }
    ]
  }
};

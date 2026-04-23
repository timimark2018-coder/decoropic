import type { CtaLink, LocalizedText } from "@/content/types";

export const siteNavContent = {
  mainNav: [
    { label: { en: "Home", zh: "首页" }, href: "/" },
    { label: { en: "Solutions", zh: "解决方案" }, href: "/solutions" },
    { label: { en: "Products", zh: "产品中心" }, href: "PRODUCT_CENTER" },
    { label: { en: "Projects", zh: "项目展示" }, href: "/projects" },
    { label: { en: "Ghana Services", zh: "加纳服务" }, href: "/ghana-services" },
    { label: { en: "About", zh: "关于我们" }, href: "/about" },
    { label: { en: "Contact", zh: "联系我们" }, href: "/contact" }
  ] satisfies Array<{ label: LocalizedText; href: string }>,
  headerCta: {
    label: { en: "Start Your Project", zh: "开始您的项目" },
    href: "/contact"
  } satisfies CtaLink,
  footer: {
    tagline: {
      en: "One-stop interior solutions for project clients in Ghana.",
      zh: "面向加纳项目客户的一站式室内装饰解决方案。"
    },
    quickLinksTitle: {
      en: "Quick Links",
      zh: "快速导航"
    },
    contactTitle: {
      en: "Contact",
      zh: "联系方式"
    },
    ctas: [
      { label: { en: "Book a Site Measurement", zh: "预约现场测量" }, href: "/contact" },
      { label: { en: "Request Design Support", zh: "咨询设计方案" }, href: "/contact" },
      { label: { en: "Talk on WhatsApp", zh: "WhatsApp联系" }, href: "WHATSAPP" }
    ] satisfies CtaLink[]
  }
};

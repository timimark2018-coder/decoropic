export const siteConfig = {
  name: "Decoropic",
  description: "One-stop interior solutions for projects in Ghana.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  productCenterUrl: process.env.NEXT_PUBLIC_PRODUCT_CENTER_URL || "https://www.decolovely.com",
  whatsappNumber: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "",
  contactPhoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "Available via inquiry",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@decoropic.com",
  contactLocation: process.env.NEXT_PUBLIC_CONTACT_LOCATION || "Ghana"
};

export const faqs = [
  {
    question: "Can you support both product sourcing and project coordination?",
    answer: "Yes. We support category sourcing, specification alignment, shipment planning and Ghana-side execution guidance."
  },
  {
    question: "Is the villa budget estimator an exact quotation tool?",
    answer: "No. It is designed as a preliminary estimate only and should be refined after measurement, scope confirmation and design development."
  },
  {
    question: "Do you provide local support in Ghana?",
    answer: "Yes. Ghana local service is a key part of the offer, including site measurement, communication support and implementation guidance."
  },
  {
    question: "Can I browse products separately before starting a project discussion?",
    answer: "Yes. Our product center is available for independent browsing — explore categories, styles and project-type collections before reaching out."
  }
];

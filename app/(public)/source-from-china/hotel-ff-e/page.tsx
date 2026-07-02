import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Hotel FF&E from China — Worldwide Export & Sourcing",
      zh: "从中国采购酒店FF&E — 全球出口"
    },
    description: {
      en: "Source hotel FF&E from China for export worldwide — guestroom furniture, lobby finishes, lighting and bathroom fittings to brand standard. Factory selection, QC, consolidation and shipping. You handle local import and install.",
      zh: "从中国采购酒店FF&E并全球出口 — 客房家具、大堂饰面、灯饰与卫浴。工厂选品、验货、拼柜与发运。当地进口与安装由买方自办。"
    },
    path: "/source-from-china/hotel-ff-e",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "Can you source hotel FF&E from China to brand standards?",
    answer:
      "Yes. Share your brand standards or FF&E specification — including fire ratings, upholstery grades and finish requirements — and we source compliant products from our factory network, with samples available for brand approval before production. We work across contract-grade and bespoke tiers, from budget properties to four- and five-star."
  },
  {
    question: "What FF&E categories do you export for hotels?",
    answer:
      "Guestroom furniture (beds, casegoods, seating, wardrobes), lobby and public-area furniture and finishes, commercial lighting, bathroom fittings and sanitary ware, and custom millwork. Multiple categories are consolidated into phased export shipments timed to your construction programme."
  },
  {
    question: "How are shipments phased for a hotel project?",
    answer:
      "For larger fit-outs we phase export by area — lobby and public-space materials can ship ahead of guestroom furniture if your build sequence requires it. We consolidate each phase into full or shared containers and provide export documentation per shipment so your local team can clear and receive goods in the right order."
  },
  {
    question: "What is outside your scope for an overseas hotel project?",
    answer:
      "Import, customs clearance, duties, local delivery and on-site installation are arranged by you or your appointed local contractor. We deliver QC-inspected, export-packed FF&E with full documentation to your port or forwarder. Complete turnkey installation is offered only in Ghana, where our team executes projects directly."
  }
];

const related = [
  { label: "Sourcing hub", href: "/source-from-china" },
  { label: "Building Materials", href: "/source-from-china/building-materials" },
  { label: "Furniture", href: "/source-from-china/furniture" },
  { label: "Tiles", href: "/source-from-china/tiles" },
  { label: "Lighting", href: "/source-from-china/lighting" }
];

export default async function HotelFFEPage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Hospitality FF&E"
      h1="Hotel FF&E from China — Worldwide Export"
      subtitle="Guestroom furniture, lobby finishes, lighting and bathroom fittings — sourced to hospitality grade, quality-controlled, and consolidated for export to your project."
      intro={[
        "China is the primary manufacturing source of hotel FF&amp;E — furniture, fixtures and equipment — for the global hospitality industry. Foshan and the surrounding Guangdong factories produce the guestroom casegoods, lobby feature furniture, lighting systems and bathroom fittings that equip hotels on every continent, at specification tiers from three-star contract grade to five-star bespoke.",
        "Sourcing hotel FF&amp;E at project scale demands more than a good price. It demands consistency across hundreds of rooms, fire and durability compliance, batch colour control, and shipments phased to a construction programme. Decoropic operates that sourcing and export discipline: we qualify factories, hold samples against your brand standard, inspect every category before shipment, and consolidate FF&amp;E into export shipments timed to your build.",
        "We work backwards from your room count, brand standard and per-room budget to a full FF&amp;E specification, then source it across our factory network. Guestroom furniture, soft seating, lighting, sanitary ware and custom millwork ship under coordinated export documentation so your local team receives the right goods in the right sequence.",
        "Our service covers the China side through to export. Import, customs, duties, local delivery and installation at your property are arranged by you or your local fit-out contractor. Full turnkey delivery — including installation — is available only in Ghana, where our team has completed hospitality and residential projects for two decades. That record is the proof behind our sourcing capability, not a claim of local presence in your market."
      ]}
      categoriesTitle="Hotel FF&E categories we export"
      categories={[
        { title: "Guestroom Furniture", body: "Beds, headboards, casegoods, desks, seating and wardrobes — contract-grade, batch-consistent across all rooms." },
        { title: "Lobby & Public Areas", body: "Feature furniture, reception millwork, and large-format finishes that set the property's first impression." },
        { title: "Bathroom Fittings", body: "Sanitary ware, brassware, shower systems and accessories at commercial throughput grade." },
        { title: "Hospitality Lighting", body: "Guestroom, corridor and lobby lighting; CRI and voltage matched to your market and brand spec." }
      ]}
      buyersTitle="Who we supply"
      buyers={[
        { title: "Hotel Groups & Operators", body: "New-build and refurbishment programmes needing brand-standard FF&E under one sourcing partner." },
        { title: "Owners & Developers", body: "Property owners equipping independent or franchise hotels to a defined budget and standard." },
        { title: "Fit-Out Contractors", body: "Contractors sourcing consolidated FF&E shipments phased to a live construction schedule." }
      ]}
      faqTitle="Hotel FF&E from China — your questions"
      faqs={faqs}
      ctaHeading="Get a hotel FF&E export quote"
      ctaBody="Send your room count, brand standard or FF&E schedule. We return a compliant supplier plan, pricing and a phased export shipping arrangement."
      whatsappText="Hi Decoropic, I'd like to source hotel FF&E from China."
      related={related}
    />
  );
}

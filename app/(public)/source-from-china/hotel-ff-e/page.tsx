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
  { label: "Project sourcing hub", href: "/source-from-china" },
  { label: "Building Materials", href: "/source-from-china/building-materials" },
  { label: "Furniture", href: "/source-from-china/furniture" },
  { label: "Tiles & Sanitary", href: "/source-from-china/tiles-sanitary" },
  { label: "Lighting", href: "/source-from-china/lighting" }
];

export default async function HotelFFEPage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Hospitality FF&E"
      h1="Hotel FF&E from China — Worldwide Export"
      subtitle="Design and full FF&E supply for hotel projects — guestrooms, lobbies and bathrooms specified as one scheme, then sourced, quality-controlled and exported from China as a single package."
      intro={[
        "Decoropic equips hotel projects with a complete, designed FF&amp;E and finish-material package sourced from China — not loose furniture orders. We design and specify the interior remotely (layouts, renders and a room-by-room material schedule), then source every element for it: guestroom casegoods, lobby feature furniture, bathroom fittings, lighting and finishes, coordinated as one scheme.",
        "China is the primary manufacturing source of hotel FF&amp;E for the global hospitality industry, and Foshan and Lecong sit at its centre — producing the casegoods, seating, lighting and bathroom fittings that equip hotels on every continent, from three-star contract grade to five-star bespoke. The value is not a single cheap category; it is a whole property specified coherently and bought as one package.",
        "We work backwards from your room count, brand standard and per-room budget to a full FF&amp;E specification, then source it across our factory network, hold samples against your brand standard, inspect every category before shipment, and consolidate into export shipments phased to your construction programme — so your local team receives the right goods in the right sequence.",
        "Our service runs from design through export from China. Import, customs, duties, local delivery and on-site installation at your property are arranged by you or your local fit-out contractor. Full turnkey delivery — including installation — is available only in Ghana, where our team has completed hospitality and residential projects for two decades. That record is the proof behind our design and sourcing capability, not a claim of local presence in your market."
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
      marketsTitle="Markets we focus on"
      markets={[
        { title: "Middle East", body: "Fast-moving hotel and resort construction with widespread factory-direct FF&E sourcing from China — the single largest opportunity for hospitality furniture out of Foshan and Lecong." },
        { title: "Africa", body: "Growing hospitality investment across the continent; the region where our project delivery experience runs deepest and where we can advise most confidently." },
        { title: "Australia", body: "Low or zero tariffs under ChAFTA make China-sourced FF&E straightforward to land for Australian hotel and accommodation projects." }
      ]}
      tariffNote={{
        body:
          "Hospitality furniture and FF&E generally face milder import duties than tiles or aluminium across most markets, which is part of why hotel groups so often source it factory-direct from China. Australia (ChAFTA), the Middle East and much of Africa are especially friendly; the EU and US vary by product. We handle sourcing and export from China; your customs broker confirms the landed duty for your destination.",
        sourceLabel: "Felixdeco — China Import Tariffs on Building Materials 2026",
        sourceHref: "https://felixdeco.com/tariff-tracker/"
      }}
      faqTitle="Hotel FF&E from China — your questions"
      faqs={faqs}
      ctaHeading="Get a hotel project material plan"
      ctaBody="Send your room count, brand standard, drawings or FF&E schedule. We return design and selection guidance, a specified FF&E and finishes package, pricing and a phased export shipping plan."
      whatsappText="Hi Decoropic, I'd like a hotel project FF&E plan sourced from China."
      related={related}
    />
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Source Building Materials & Interior FF&E from China — Worldwide Export",
      zh: "从中国采购建材与室内FF&E — 全球出口"
    },
    description: {
      en: "Source building materials and interior FF&E from China with one export partner — tiles, furniture, bathroom, lighting, doors. Factory selection, QC, consolidation and worldwide shipping. You handle local import and installation.",
      zh: "与一个出口伙伴从中国采购建材与室内FF&E — 瓷砖、家具、卫浴、灯饰、门窗。工厂选品、验货、拼柜、全球发运。当地进口与安装由买方自办。"
    },
    path: "/source-from-china",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "What does Decoropic do when I source building materials from China?",
    answer:
      "We manage the China side end to end: qualifying factories from our 1,000+ network in Foshan and beyond, negotiating project pricing, running pre-shipment quality control, consolidating multiple categories into one shipment, and handling export documentation and freight booking. Your materials leave China checked, packed and documented under a single contract."
  },
  {
    question: "Which parts of the process are my responsibility?",
    answer:
      "Local import, customs clearance, duties and taxes, inland delivery and installation in your destination country are arranged by you or your local contractor. We provide the export paperwork (commercial invoice, packing list, bill of lading, certificates where applicable) so your customs broker has everything needed. Full turnkey — including local delivery and installation — is offered only in Ghana."
  },
  {
    question: "Can you ship worldwide, and how does freight work?",
    answer:
      "Yes. We export by sea (FCL full-container or LCL groupage) and, for urgent or small consignments, by air. We book freight to your nominated port or work with your forwarder on FOB terms. You choose the Incoterm that suits your setup — most international buyers use FOB or CIF to their local port."
  },
  {
    question: "What is the minimum order to source from China through Decoropic?",
    answer:
      "There is no fixed SKU minimum. For small projects we consolidate into shared containers (LCL); for developers, hotel groups and importers we fill one or more full containers. Send your material list or project scope and we will advise the most efficient consolidation and shipping arrangement."
  }
];

export default async function SourceFromChinaHub() {
  return (
    <SourcePage
      eyebrow="Global Sourcing · Worldwide Export"
      h1="Source Building Materials & Interior FF&E from China — Worldwide Export"
      subtitle="One partner for the China side: factory selection, quality control, consolidation and export. We ship worldwide; you handle local import and installation."
      intro={[
        "Decoropic is a China-side sourcing and export partner for building materials and interior FF&amp;E. We work with a network of over 1,000 manufacturers — concentrated in Foshan, Guangdong, the largest interior-materials manufacturing cluster in the world — across tiles, furniture, bathroom and kitchen fittings, lighting, and doors and windows.",
        "For international buyers, the hard part of sourcing from China is rarely finding a factory. It is qualifying the right one, consolidating orders across categories, controlling quality before money leaves your account, and getting a clean set of export documents so goods clear customs at the other end. That is exactly the layer we operate.",
        "We select and vet factories, negotiate project pricing, inspect goods before shipment, consolidate multiple categories into one shipment, and handle export from China to your nominated port. What we do not do abroad is import, clear customs, or install — those steps are arranged by you or your local contractor, who knows your market's duties, standards and trades far better than any exporter could.",
        "Our credibility rests on capability, not borrowed local presence: a 20-year turnkey track record delivering complete interior projects in Ghana, and a sourcing and export operation built to serve buyers anywhere. Explore the category pages below, or request an export quote to get started."
      ]}
      categoriesTitle="What we source and export"
      categories={[
        { title: "Building Materials", body: "Tiles, flooring, sanitary ware, doors, windows and finishes — the full material package for a project, consolidated into one export shipment.", href: "/source-from-china/building-materials" },
        { title: "Hotel FF&E", body: "Guestroom furniture, lobby finishes, lighting and bathroom fittings specified to hospitality grade for hotel groups and operators.", href: "/source-from-china/hotel-ff-e" },
        { title: "Furniture", body: "Residential and contract furniture — dining, bedroom, living, office and hospitality — from a vetted supplier base with QC before shipment.", href: "/source-from-china/furniture" },
        { title: "Tiles & Sanitary Ware", body: "Porcelain slab, ceramic, marble, toilets, basins and brassware at project volume — best value into tariff-friendly markets.", href: "/source-from-china/tiles-sanitary" },
        { title: "Lighting", body: "Chandeliers, pendants, architectural and commercial LED systems — voltage and certification matched to your market on request.", href: "/source-from-china/lighting" }
      ]}
      buyersTitle="Who we work with"
      buyers={[
        { title: "Developers", body: "Residential and mixed-use developers sourcing full material packages across multiple units under one contract." },
        { title: "Contractors", body: "Main contractors and fit-out firms needing reliable QC and consolidated shipments to hold a build schedule." },
        { title: "Hotel Groups", body: "Operators and owners equipping new-build or refurbishment projects to brand-standard FF&E specifications." },
        { title: "Importers & Distributors", body: "Trade buyers building inventory across categories who need vetted factories and clean export documentation." }
      ]}
      faqTitle="Sourcing from China — how it works"
      faqs={faqs}
      ctaHeading="Request a China sourcing & export quote"
      ctaBody="Send your material list, drawings or project scope. We reply with a vetted supplier plan, project pricing and an export shipping arrangement."
      whatsappText="Hi Decoropic, I'd like a China sourcing & export quote."
      relatedTitle="Explore by category"
      related={[
        { label: "Building Materials", href: "/source-from-china/building-materials" },
        { label: "Hotel FF&E", href: "/source-from-china/hotel-ff-e" },
        { label: "Furniture", href: "/source-from-china/furniture" },
        { label: "Tiles & Sanitary", href: "/source-from-china/tiles-sanitary" },
        { label: "Lighting", href: "/source-from-china/lighting" }
      ]}
      tariffNote={{
        body:
          "Duty on China-sourced goods varies sharply by destination and category. Tiles and aluminium can face high anti-dumping or Section 301 duties into the EU and US, while Australia (under ChAFTA), the Middle East and much of Africa apply low or zero tariffs on most interior materials. Furniture and lighting are generally treated more mildly across markets. We handle sourcing and export from China; you decide what to import based on your destination's current duty.",
        sourceLabel: "Felixdeco — China Import Tariffs on Building Materials 2026",
        sourceHref: "https://felixdeco.com/tariff-tracker/"
      }}
    />
  );
}

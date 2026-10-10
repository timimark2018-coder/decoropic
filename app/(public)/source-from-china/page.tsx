import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Source Building Materials & FF&E from China",
      zh: "从中国采购建材与室内FF&E — 全球出口"
    },
    description: {
      en: "Design + full material supply from China for hotel, villa & apartment projects worldwide — sourcing, QC, consolidation and export. You import locally.",
      zh: "为全球酒店·别墅·公寓项目提供中国侧设计+整套材料供应:选品、验货、拼柜、出口。当地进口安装由买方自办。"
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
  },
  {
    question: "How long does a project material package take from order to port?",
    answer:
      "For a typical package, plan 8–12 weeks: factory production 15–45 days depending on how much is custom, pre-shipment QC and consolidation 7–10 days, and sea freight 13–35 days to most ports. We issue a project-specific timeline with the quote so procurement stays off the critical path."
  },
  {
    question: "What payment and QC gates protect my order?",
    answer:
      "Standard terms are a deposit to start production and the balance released only after an accepted pre-shipment inspection. QC is run against your approved samples and a written spec matrix, with a photo report per category, before the container is sealed — so issues are fixed at the factory, not discovered at your port."
  }
];

export default async function SourceFromChinaHub() {
  return (
    <SourcePage
      eyebrow="Global Sourcing · Worldwide Export"
      h1="Source Building Materials & Interior FF&E from China — Worldwide Export"
      subtitle="Design and full-material supply for hotel, villa and apartment projects — we design and specify remotely, then source, QC, consolidate and export the whole package from China. You import and install locally."
      intro={[
        "Decoropic supplies complete interior material packages — with design and selection — for hotel, villa and apartment projects worldwide. Rather than selling loose categories, we work at project level: we help you design and specify the interior, then source every material for it from China and export the package as one coordinated shipment.",
        "The design side is remote. We produce layouts, renders and a fully specified material list — the schedule that turns a project brief into an orderable package. From there we work the China supply chain: qualifying factories from our 1,000+ network in Foshan, Guangdong, negotiating project pricing, inspecting goods before shipment, and consolidating tiles, furniture, sanitary ware, lighting, doors and finishes into a single export shipment.",
        "For a hotel, that means guestroom FF&amp;E, lobby finishes and bathrooms specified as one scheme. For a villa or apartment, it means the whole interior — floors, furniture, lighting, sanitary and doors — sourced to a single design intent instead of assembled from unrelated suppliers. One design, one material package, one export shipment.",
        "Our service runs from design through export from China. Local import, customs clearance, delivery and on-site installation are arranged by you or your local contractor. The one market where we deliver a complete turnkey project — including installation — is Ghana, where our team's 20-year track record stands behind the design and sourcing capability we offer everywhere else."
      ]}
      showcaseTitle="Real material we source and export"
      showcase={[
        { src: "/images/products/porcelain-slab.jpg", alt: "Large-format porcelain slab sourced from Foshan, China for project supply", caption: "Large-format porcelain slab" },
        { src: "/images/products/furniture.jpg", alt: "Contract-grade furniture prepared as part of a project material package", caption: "Furniture for project supply" },
        { src: "/images/products/lighting.jpg", alt: "Decorative and architectural lighting sourced from China", caption: "Project lighting" }
      ]}
      marketsTitle="Projects we design and supply"
      markets={[
        { title: "Hotels & Hospitality", body: "Guestrooms, lobbies and restaurants designed and specified as one scheme, with full FF&E and finish materials sourced from China.", href: "/source-from-china/hotel-ff-e" },
        { title: "Private Villas", body: "The whole residence — floors, furniture, lighting, sanitary and doors — designed to one intent and supplied as a single material package." },
        { title: "Apartments & Developments", body: "Consistent design and specification across every unit, with materials batched and consolidated for a single coordinated shipment." }
      ]}
      categoriesTitle="Every category in your project's material package"
      categories={[
        { title: "Building Materials", body: "Tiles, flooring, sanitary ware, doors, windows and finishes — the structural material layer of the package.", href: "/source-from-china/building-materials" },
        { title: "Hotel FF&E", body: "Guestroom furniture, lobby finishes, lighting and bathroom fittings, specified to hospitality grade within the project scheme.", href: "/source-from-china/hotel-ff-e" },
        { title: "Furniture", body: "Residential and contract furniture selected to the project's design intent, QC-checked before shipment.", href: "/source-from-china/furniture" },
        { title: "Tiles & Sanitary Ware", body: "Porcelain slab, ceramic, marble, toilets, basins and brassware — best value into tariff-friendly markets.", href: "/source-from-china/tiles-sanitary" },
        { title: "Lighting", body: "Decorative and architectural lighting matched to the scheme and to your market's voltage and certification.", href: "/source-from-china/lighting" }
      ]}
      buyersTitle="Who we work with"
      buyers={[
        { title: "Developers", body: "Residential and mixed-use developers equipping projects with a designed, consolidated material package across multiple units." },
        { title: "Contractors", body: "Main contractors and fit-out firms needing a specified material package, reliable QC and consolidated shipments to hold a build schedule." },
        { title: "Hotel Groups", body: "Operators and owners equipping new-build or refurbishment projects to brand-standard FF&E and finishes." },
        { title: "Importers & Distributors", body: "Trade buyers who need vetted factories, coherent specification and clean export documentation." }
      ]}
      faqTitle="Project material sourcing from China — how it works"
      faqs={faqs}
      ctaHeading="Get a project material plan"
      ctaBody="Send your project brief, drawings or material list. We reply with design and selection guidance, a specified material package, project pricing and an export shipping plan."
      whatsappText="Hi Decoropic, I'd like a project material plan for a project sourced from China."
      proof={{
        body: "26 years in cross-border trade and 200+ delivered projects stand behind every package we export — real hotels, villas and apartments furnished with materials we sourced, inspected and shipped.",
        links: [{ label: "See our completed projects", href: "/projects" }]
      }}
      relatedTitle="Explore by category"
      related={[
        { label: "Southeast Asia projects", href: "/source-from-china/southeast-asia" },
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
      guidesTitle="In-depth guides"
      guides={[
        { label: "China to Southeast Asia procurement checklist", href: "/guides/china-to-southeast-asia-project-materials" },
        { label: "How to source hotel FF&E from China", href: "/guides/how-to-source-hotel-ffe-from-china" },
        { label: "China → Middle East sourcing", href: "/guides/china-to-middle-east-materials-sourcing" },
        { label: "China → Australia (ChAFTA)", href: "/guides/china-to-australia-project-materials-chafta" },
        { label: "Villa & apartment fit-out package", href: "/guides/villa-apartment-fit-out-materials-from-china" },
        { label: "China tariffs (EU/US) & how to verify", href: "/guides/china-materials-tariffs-eu-us-how-to-verify" },
        { label: "QC & consolidation checklist", href: "/guides/china-export-qc-consolidation-checklist" },
        { label: "China → Africa project materials", href: "/guides/china-to-africa-project-materials" }
      ]}
    />
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Building Materials from China — Worldwide Export & Sourcing",
      zh: "从中国采购建材 — 全球出口"
    },
    description: {
      en: "Source building materials from China for export worldwide — tiles, sanitary ware, doors, windows and finishes. Factory selection, QC, consolidation and shipping. You handle local import and installation.",
      zh: "从中国采购建材并全球出口 — 瓷砖、卫浴、门窗与饰面。工厂选品、验货、拼柜与发运。当地进口与安装由买方自办。"
    },
    path: "/source-from-china/building-materials",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "How do I source building materials from China for export?",
    answer:
      "Send us your material list, drawings or a project scope. We shortlist factories from our network, quote project pricing, arrange samples for approval, run pre-shipment QC, then consolidate all categories into one export shipment with full documentation. You import and install at destination; we handle everything up to the port of loading (or your chosen Incoterm)."
  },
  {
    question: "What building materials can Decoropic export from China?",
    answer:
      "Tiles and flooring (porcelain slab, ceramic, marble, engineered stone), sanitary ware and bathroom fittings, doors and windows (aluminium, steel, timber), lighting, and interior finishes. Because we cover multiple categories, a full project package ships under one contract instead of six separate supplier relationships."
  },
  {
    question: "Who handles customs, duties and delivery in my country?",
    answer:
      "You or your local contractor. We provide the export documents — commercial invoice, packing list, bill of lading, and product certificates where applicable — so your customs broker can clear the goods. Import duties, taxes, local transport and installation are outside our scope, except in Ghana where we offer full turnkey delivery."
  },
  {
    question: "How is quality controlled before shipment?",
    answer:
      "Every order includes a pre-shipment inspection at the factory. We check dimensions, finish, batch colour consistency and quantity against your approved sample and specification, and document each category with photos. Issues are resolved before the container is sealed, not discovered after it arrives at your port."
  }
];

const related = [
  { label: "Sourcing hub", href: "/source-from-china" },
  { label: "Hotel FF&E", href: "/source-from-china/hotel-ff-e" },
  { label: "Furniture", href: "/source-from-china/furniture" },
  { label: "Tiles & Sanitary", href: "/source-from-china/tiles-sanitary" },
  { label: "Lighting", href: "/source-from-china/lighting" }
];

export default async function BuildingMaterialsPage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Building Materials"
      h1="Building Materials from China — Worldwide Export"
      subtitle="Source a complete building-materials package from China's largest manufacturing cluster — vetted, quality-controlled, and consolidated for export to your port."
      intro={[
        "China produces the majority of the world's interior building materials, and the Foshan region in Guangdong is its centre of gravity — tens of thousands of factories making tiles, sanitary ware, doors, windows and finishes at every specification tier. For an international buyer, that scale is both the opportunity and the problem: the choice is vast, quality is uneven, and coordinating a full material package across categories is a full-time job.",
        "Decoropic operates the sourcing and export layer so you don't have to. We qualify factories, negotiate project pricing, arrange samples, inspect goods before shipment, and consolidate everything into a single export shipment. One contract covers tiles, sanitary, doors and finishes together — not a stack of separate supplier agreements each with its own lead time and its own chance to go wrong.",
        "The categories we export cover the structural interior package: porcelain slab and ceramic tile, marble and engineered stone, sanitary ware and brassware, aluminium, steel and timber doors and windows, and surface finishes. Where a material has a market-specific requirement — voltage, fire rating, plumbing standard — we source to the specification you give us and confirm it at the sample stage.",
        "Our role ends at export. We deliver a checked, packed, and fully documented shipment to your port of loading or your forwarder; from there, import, customs, duties, inland transport and installation are handled by you or your local contractor, who understands your market's rules far better than any exporter could. The one exception is Ghana, where our own team delivers complete turnkey projects — the 20-year track record that stands behind everything we ship."
      ]}
      categoriesTitle="Categories in the building-materials package"
      categories={[
        { title: "Tiles & Flooring", body: "Porcelain slab up to 1.5×3m, ceramic, marble, engineered stone. Batch-consistent, export-packed on timber pallets." },
        { title: "Sanitary Ware", body: "Toilets, basins, tubs, brassware and vanity units. Fitting standards matched to your market on request." },
        { title: "Doors & Windows", body: "Aluminium, steel-frame and solid-timber doors; single, double and Low-E glazing. Hardware to specification." },
        { title: "Finishes", body: "Wall panels, mouldings, and surface materials that complete a coherent interior package." }
      ]}
      faqTitle="Building materials from China — your questions"
      faqs={faqs}
      ctaHeading="Get a building-materials export quote"
      ctaBody="Share your material list or drawings. We return a vetted supplier plan, project pricing and a consolidated export shipping arrangement."
      whatsappText="Hi Decoropic, I'd like to source building materials from China."
      related={related}
    />
  );
}

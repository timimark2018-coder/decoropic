import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Tiles from China — Worldwide Export & Sourcing",
      zh: "从中国采购瓷砖 — 全球出口"
    },
    description: {
      en: "Source tiles from China for export worldwide — porcelain slab, ceramic, marble and engineered stone at project volumes. Factory selection, QC, batch consistency and shipping. You handle local import and installation.",
      zh: "从中国采购瓷砖并全球出口 — 岩板、瓷砖、大理石与人造石，工程量供应。工厂选品、验货、批次一致与发运。当地进口与安装由买方自办。"
    },
    path: "/source-from-china/tiles",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "Can I source tiles from China at project volume for export?",
    answer:
      "Yes. We source porcelain slab, ceramic, marble and engineered stone at project quantities, hold the order to a single production batch for colour consistency, and export-pack on timber pallets for safe sea transit. One shipment can combine floor, wall and outdoor tile under a single contract."
  },
  {
    question: "How do you ensure tile batch consistency?",
    answer:
      "Tile colour and calibre can drift between production batches. We place project orders against a single batch wherever possible and verify shade and dimension against your approved sample at pre-shipment inspection — so what arrives matches what you signed off, across the whole quantity."
  },
  {
    question: "What tile formats and types are available?",
    answer:
      "Large-format porcelain slab (up to 1.5×3m), standard ceramic and porcelain, natural marble, and engineered stone, in polished, matte, anti-slip and outdoor finishes. We source to the technical spec your project needs — slip rating, thickness and frost or heat resistance."
  },
  {
    question: "Who handles import and installation of the tiles?",
    answer:
      "You or your local contractor. We deliver QC-inspected, export-packed tiles with documentation to your port or forwarder; import, customs, duties, local delivery and laying are outside our scope. Full turnkey delivery, including installation, is available only in Ghana."
  }
];

const related = [
  { label: "Sourcing hub", href: "/source-from-china" },
  { label: "Building Materials", href: "/source-from-china/building-materials" },
  { label: "Hotel FF&E", href: "/source-from-china/hotel-ff-e" },
  { label: "Furniture", href: "/source-from-china/furniture" },
  { label: "Lighting", href: "/source-from-china/lighting" }
];

export default async function TilesPage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Tiles & Flooring"
      h1="Tiles from China — Worldwide Export"
      subtitle="Porcelain slab, ceramic, marble and engineered stone at project volume — batch-consistent, quality-controlled and export-packed for shipping worldwide."
      intro={[
        "Foshan is the tile capital of the world. The concentration of porcelain and ceramic factories in and around the city means an international buyer can source almost any format, finish or technical grade from China — but it also means the range is overwhelming and quality varies sharply between plants that market themselves identically.",
        "Decoropic sources tiles from China as an export partner, not a marketplace. We match your project's technical requirements — slip rating, thickness, frost or heat resistance, format — to the right factory, place the order against a single production batch for colour consistency, and inspect calibre and shade against your approved sample before shipment.",
        "The range we export covers large-format porcelain slab up to 1.5×3 metres, standard ceramic and porcelain, natural marble, and engineered stone, in polished, matte, anti-slip and outdoor finishes. Floor, wall and external tile for one project consolidate into a single export shipment, packed on timber pallets to survive the sea voyage intact.",
        "We operate the China side through to export. Import, customs, duties, local transport and installation are arranged by you or your local contractor. The one market where we deliver a complete turnkey service — including laying — is Ghana, where our team's twenty-year record stands behind the sourcing capability we offer everywhere else."
      ]}
      categoriesTitle="Tile types we export"
      categories={[
        { title: "Porcelain Slab", body: "Large-format up to 1.5×3m for floor-to-wall continuity with minimal grout lines." },
        { title: "Ceramic & Porcelain", body: "Standard-format floor and wall tile across finishes, at contractor and premium grades." },
        { title: "Marble & Stone", body: "Natural marble and engineered stone, book-matched slabs available for feature areas." },
        { title: "Outdoor & Anti-Slip", body: "Pool decks, terraces and wet areas specified to the slip rating your project requires." }
      ]}
      faqTitle="Tiles from China — your questions"
      faqs={faqs}
      ctaHeading="Get a tile export quote"
      ctaBody="Send your tile schedule, areas and finish requirements. We return a factory-matched plan, project pricing and an export shipping arrangement."
      whatsappText="Hi Decoropic, I'd like to source tiles from China."
      related={related}
    />
  );
}

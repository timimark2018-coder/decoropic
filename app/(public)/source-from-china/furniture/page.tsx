import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Furniture Supplier from China — Worldwide Export & Sourcing",
      zh: "中国家具供应商 — 全球出口"
    },
    description: {
      en: "Source furniture from China with a vetted export partner — residential and contract furniture, quality-controlled and consolidated for worldwide shipping. You handle local import and installation.",
      zh: "与经验证的出口伙伴从中国采购家具 — 住宅与工程家具，验货后拼柜全球发运。当地进口与安装由买方自办。"
    },
    path: "/source-from-china/furniture",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "How do I find a reliable furniture supplier in China?",
    answer:
      "Rather than vetting factories yourself, work through Decoropic as your sourcing partner. We qualify furniture manufacturers from our network on construction standard, upholstery quality and export track record, arrange samples, and inspect production before shipment — so you deal with one accountable partner instead of unverified factory listings."
  },
  {
    question: "What furniture can you export from China?",
    answer:
      "Residential furniture (dining, bedroom, living, wardrobes), office and workspace furniture, and contract or hospitality furniture. Solid timber, veneer and upholstered pieces. We advise on frame engineering and container packing — the two factors that most affect whether furniture arrives intact after a long sea voyage."
  },
  {
    question: "How is furniture packed and shipped for export?",
    answer:
      "Furniture is the category where packing matters most. We specify export-grade packing — corner protection, moisture barriers, and knock-down where sensible — and consolidate into full or shared containers. Poor packing can damage up to a third of a furniture shipment in transit; getting it right is part of the QC we run before the container is sealed."
  },
  {
    question: "Do you deliver and assemble the furniture at my location?",
    answer:
      "No — local delivery and assembly are arranged by you or your local contractor, along with import and customs. We handle sourcing, QC, consolidation and export from China. Full turnkey delivery, including installation, is available only in Ghana, where our team completes projects directly."
  }
];

const related = [
  { label: "Sourcing hub", href: "/source-from-china" },
  { label: "Building Materials", href: "/source-from-china/building-materials" },
  { label: "Hotel FF&E", href: "/source-from-china/hotel-ff-e" },
  { label: "Tiles", href: "/source-from-china/tiles" },
  { label: "Lighting", href: "/source-from-china/lighting" }
];

export default async function FurniturePage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Furniture"
      h1="Furniture Supplier from China — Worldwide Export"
      subtitle="A vetted China furniture supply base, one accountable partner: sample approval, quality control, export-grade packing and worldwide shipping."
      intro={[
        "China is the world's largest furniture manufacturer, and buyers everywhere source from it — but finding a reliable furniture supplier in China from the outside is genuinely difficult. Factory listings are unverified, quality varies widely between workshops that look identical online, and the difference between solid-wood joinery and veneer over particleboard is invisible until the furniture arrives.",
        "Decoropic works as your furniture sourcing and export partner. We qualify manufacturers from our network on the things that matter over a twenty-year lifespan — frame construction, joinery, upholstery grade and finish durability — arrange physical samples for your approval, and inspect production before it ships. You get one accountable relationship instead of a spreadsheet of factories you have never met.",
        "The furniture we export spans residential (dining, bedroom, living, built-in wardrobes), office and workspace, and contract or hospitality ranges. Where a piece is custom, we manage the specification with the factory and confirm it at sample stage. Where it is catalogue, we hold the batch to a consistent standard across the order.",
        "Packing is where furniture sourcing succeeds or fails. We specify export-grade protection and sensible knock-down, then consolidate into full or shared containers — because a low unit price means nothing if a third of the shipment arrives damaged. Our service runs through export only: local import, customs, delivery and assembly are handled by you or your local contractor. Turnkey delivery with installation is offered exclusively in Ghana, the market where our own team executes projects and where our track record was built."
      ]}
      categoriesTitle="Furniture ranges we export"
      categories={[
        { title: "Residential", body: "Dining, bedroom, living and built-in wardrobes — solid timber, veneer and upholstered, to catalogue or custom spec." },
        { title: "Contract & Hospitality", body: "Durable furniture built for high-use commercial and hospitality environments, batch-consistent at volume." },
        { title: "Office & Workspace", body: "Desking, seating and storage for corporate fit-outs, sourced to ergonomic and durability requirements." },
        { title: "Custom Millwork", body: "Bespoke cabinetry and joinery produced to your drawings, confirmed at sample stage before production." }
      ]}
      faqTitle="Furniture from China — your questions"
      faqs={faqs}
      ctaHeading="Get a furniture export quote"
      ctaBody="Send your furniture schedule, references or drawings. We return a vetted supplier plan, pricing and an export-packed shipping arrangement."
      whatsappText="Hi Decoropic, I'd like to source furniture from China."
      related={related}
    />
  );
}

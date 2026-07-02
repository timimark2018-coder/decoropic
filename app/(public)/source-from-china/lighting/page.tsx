import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Lighting from China — Worldwide Export & Sourcing",
      zh: "从中国采购灯饰 — 全球出口"
    },
    description: {
      en: "Source lighting from China for export worldwide — chandeliers, pendants, architectural and commercial LED. Voltage and certification matched to your market. QC, consolidation and shipping; you handle local import and install.",
      zh: "从中国采购灯饰并全球出口 — 吊灯、壁灯、建筑与商业LED。电压与认证匹配你的市场。验货、拼柜与发运;当地进口与安装由买方自办。"
    },
    path: "/source-from-china/lighting",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "Can you match lighting to my country's voltage and certification?",
    answer:
      "Yes. Lighting is voltage- and standard-sensitive, so we source to your market's requirements — mains voltage, driver compatibility, and certifications such as CE, UL or SAA where your project or customs require them. Confirm the target market up front and we specify accordingly at the factory."
  },
  {
    question: "What lighting can Decoropic export from China?",
    answer:
      "Decorative lighting (chandeliers, pendants, wall sconces, table and floor lamps), architectural and recessed LED, track and linear systems, and commercial or hospitality-grade fittings. Crystal grade, colour temperature and driver quality are specified to your project brief."
  },
  {
    question: "How is lighting packed and consolidated for export?",
    answer:
      "Fragile and decorative fittings are export-packed with tailored protection and consolidated with your other categories where sensible, or shipped as a dedicated lighting consignment. We inspect function, finish and quantity at pre-shipment QC before the shipment is sealed."
  },
  {
    question: "Do you install the lighting at my site?",
    answer:
      "No — local import, customs, electrical installation and commissioning are handled by you or your local contractor and licensed electrician. We source, QC, consolidate and export from China. Turnkey delivery with installation is available only in Ghana, where our team executes projects directly."
  }
];

const related = [
  { label: "Sourcing hub", href: "/source-from-china" },
  { label: "Building Materials", href: "/source-from-china/building-materials" },
  { label: "Hotel FF&E", href: "/source-from-china/hotel-ff-e" },
  { label: "Furniture", href: "/source-from-china/furniture" },
  { label: "Tiles & Sanitary", href: "/source-from-china/tiles-sanitary" }
];

export default async function LightingPage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Lighting"
      h1="Lighting from China — Worldwide Export"
      subtitle="Chandeliers, pendants, architectural and commercial LED — sourced to your market's voltage and certification, quality-controlled and exported worldwide."
      intro={[
        "China manufactures the majority of the world's lighting, decorative and architectural alike. The variety available to an international buyer is enormous — but lighting carries a risk that most other categories don't: it has to match your market's electrical standards. A fitting sourced without regard to voltage, driver compatibility or certification can be unsellable or uninstallable when it lands.",
        "Decoropic sources lighting from China as an export partner and specifies to the destination from the start. Tell us the target market and we source to its mains voltage, confirm driver compatibility, and arrange certification — CE, UL, SAA or others — where your project or customs authority requires it. That is the difference between a shipment that clears and installs, and one that sits in a warehouse.",
        "The range we export runs from decorative — chandeliers, pendants, wall sconces, crystal fittings — to architectural and commercial: recessed and track LED, linear systems, and hospitality-grade fixtures with quality drivers and controls. Crystal grade, colour temperature and dimming behaviour are all specified to your brief and confirmed at sample stage.",
        "We handle the China side through export: sourcing, QC, protective packing and consolidation to your port or forwarder. Local import, customs, electrical installation and commissioning are arranged by you or your local licensed contractor. Full turnkey delivery, including installation, is offered only in Ghana — the market where our team works directly and where the track record behind our sourcing was earned."
      ]}
      categoriesTitle="Lighting types we export"
      categories={[
        { title: "Decorative", body: "Chandeliers, pendants, wall sconces and lamps; crystal grade and finish to your brief." },
        { title: "Architectural LED", body: "Recessed, track and linear systems for even, controllable interior lighting." },
        { title: "Commercial & Hospitality", body: "Fittings with quality drivers and controls built for continuous commercial use." },
        { title: "Exterior & Landscape", body: "Facade and landscape lighting rated for outdoor conditions and your local voltage." }
      ]}
      faqTitle="Lighting from China — your questions"
      faqs={faqs}
      ctaHeading="Get a lighting export quote"
      ctaBody="Send your lighting schedule and target market. We return a specification-matched supplier plan, pricing and an export shipping arrangement."
      whatsappText="Hi Decoropic, I'd like to source lighting from China."
      related={related}
    />
  );
}

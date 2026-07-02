import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { SourcePage, type SourceFaq } from "@/components/source/source-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Tiles & Sanitary Ware Supplier from China — Worldwide Export",
      zh: "中国瓷砖与卫浴供应商 — 全球出口"
    },
    description: {
      en: "Source tiles and sanitary ware from China — porcelain slab, ceramic, toilets, basins and brassware at project volume. Best value into tariff-friendly markets (Australia, Middle East, Africa). QC, consolidation and export; you handle local import.",
      zh: "从中国采购瓷砖与卫浴 — 岩板、瓷砖、坐便、面盆、龙头,工程量供应。面向关税友好市场(澳/中东/非洲)。验货、拼柜与出口;当地进口由买方自办。"
    },
    path: "/source-from-china/tiles-sanitary",
    locale
  });
}

const faqs: SourceFaq[] = [
  {
    question: "Which markets are best for sourcing tiles and sanitary ware from China?",
    answer:
      "Tariff-friendly markets get the most value. Australia (under the China–Australia Free Trade Agreement), the Middle East and much of Africa apply low or zero duties on Chinese tiles and sanitary ware, so China-direct pricing carries through. The EU and US impose anti-dumping and Section 301 duties on Chinese ceramic tile, which can erode or erase the saving — so buyers there should check duty first. We source from China; you decide by destination."
  },
  {
    question: "What tile and sanitary products can you export?",
    answer:
      "Tiles: large-format porcelain slab (up to 1.5×3m), ceramic and porcelain floor and wall tile, marble and engineered stone, in polished, matte, anti-slip and outdoor finishes. Sanitary ware: toilets (close-coupled and wall-hung), basins, tubs, brassware, showers and vanity units. Foshan is the centre for both, so one shipment can combine tile and sanitary under a single contract."
  },
  {
    question: "How do you keep tile batches consistent across a large order?",
    answer:
      "Tile shade and calibre drift between production batches, so we place project orders against a single batch wherever possible and verify colour and dimension against your approved sample at pre-shipment inspection. Sanitary ware is checked for finish, fitting standard and function before the container is sealed."
  },
  {
    question: "Who handles import, customs and installation?",
    answer:
      "You or your local contractor. We deliver QC-inspected, export-packed tiles and sanitary ware with documentation to your port or forwarder; import, duties, local delivery and installation are outside our scope. Full turnkey delivery, including installation, is available only in Ghana."
  }
];

const related = [
  { label: "Project sourcing hub", href: "/source-from-china" },
  { label: "Hotel FF&E", href: "/source-from-china/hotel-ff-e" },
  { label: "Building Materials", href: "/source-from-china/building-materials" },
  { label: "Furniture", href: "/source-from-china/furniture" },
  { label: "Lighting", href: "/source-from-china/lighting" }
];

export default async function TilesSanitaryPage() {
  return (
    <SourcePage
      eyebrow="Sourcing · Tiles & Sanitary Ware"
      h1="Tiles & Sanitary Ware Supplier from China — Worldwide Export"
      subtitle="Porcelain slab, ceramic, toilets, basins and brassware at project volume — sourced from Foshan, quality-controlled, and exported to tariff-friendly markets worldwide."
      intro={[
        "Tiles and sanitary ware are one part of the complete project material package Decoropic designs and supplies for hotel, villa and apartment projects — specified alongside furniture, lighting and finishes so the whole interior reads as one scheme. This page covers the tile and sanitary layer; you can source it on its own, or as part of a full project package from our <a href=\"/source-from-china\" style=\"color:var(--brand-gold);text-decoration:underline;text-underline-offset:2px\">project sourcing hub</a>.",
        "Foshan is the tile and sanitary capital of the world — it produces roughly 54% of China's ceramic tile and around a quarter of global output, alongside one of the densest concentrations of sanitary-ware factories anywhere. For a project buyer, that means almost any format, finish or fitting standard can be sourced from a single region, in one consolidated shipment.",
        "Decoropic sources tiles and sanitary ware from China as an export partner. We match your technical requirements — slip rating, thickness, fitting standard, finish — to the right factory, place project orders against a single batch for colour consistency, and inspect calibre, finish and function before shipment. Tile and sanitary for one project consolidate under a single contract, export-packed to survive the sea voyage.",
        "Where these categories pay off most is a market's duty position. Under the China–Australia Free Trade Agreement, Australia applies low or zero tariffs; the Middle East and much of Africa are similarly friendly. Those are the markets where China-direct tile and sanitary pricing carries all the way through. The EU and US, by contrast, apply anti-dumping and Section 301 duties on Chinese ceramic tile — so buyers there should confirm the landed duty before committing.",
        "Our service runs the China side through to export. Import, customs, duties, local transport and installation are arranged by you or your local contractor. The one market where we deliver a complete turnkey service — including laying and fitting — is Ghana, where our team's twenty-year record stands behind the sourcing capability we offer everywhere else."
      ]}
      categoriesTitle="Tiles & sanitary we export"
      categories={[
        { title: "Porcelain Slab", body: "Large-format up to 1.5×3m for floor-to-wall continuity with minimal grout lines." },
        { title: "Ceramic & Stone", body: "Standard ceramic and porcelain, natural marble and engineered stone across finishes." },
        { title: "Sanitary Ware", body: "Close-coupled and wall-hung toilets, basins, tubs and vanity units to your fitting standard." },
        { title: "Brassware & Showers", body: "Taps, mixers, shower systems and accessories at project volume, finish-matched to spec." }
      ]}
      marketsTitle="Markets we focus on"
      markets={[
        { title: "Australia", body: "Low or zero tariffs under ChAFTA make Australia the most straightforward English-language market for China-sourced tile and sanitary ware." },
        { title: "Middle East", body: "Active hotel and property construction with widespread factory-direct sourcing from China and buyer-friendly duty positions." },
        { title: "Africa", body: "Strong demand across residential and commercial projects; the region where our delivery experience runs deepest." }
      ]}
      tariffNote={{
        body:
          "Tariffs vary sharply by destination. The EU applies anti-dumping duties on Chinese ceramic tiles (reported at rates up to ~69.7%) and the US applies Section 301 duties (reported +25%, with a further forced-labour tariff proposal under review) — so China-sourced tile is often not competitive into those markets. Australia (ChAFTA), the Middle East and much of Africa apply low or zero tariffs on these goods. We handle sourcing and export from China; you decide based on your destination's duty.",
        sourceLabel: "Felixdeco — China Import Tariffs on Building Materials 2026",
        sourceHref: "https://felixdeco.com/tariff-tracker/"
      }}
      faqTitle="Tiles & sanitary ware from China — your questions"
      faqs={faqs}
      ctaHeading="Get a project material plan"
      ctaBody="Send your tile and sanitary schedule — or your whole project brief — with your destination market. We return selection guidance, a specified package, project pricing and an export shipping plan."
      whatsappText="Hi Decoropic, I'd like a project material plan including tiles and sanitary from China."
      related={related}
    />
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { SERVICE_BOUNDARY } from "@/components/source/source-page";
import { LpWhatsAppButton } from "@/components/lp/lp-whatsapp-button";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";
import styles from "./southeast-asia.module.css";

const sourcePage = "/source-from-china/southeast-asia";
const title = "China Sourcing for Southeast Asia — Hotel FF&E";
const description = "Source hotel FF&E, tiles and interior packages from China for Southeast Asian projects — factory QC, consolidation and shipping to your regional port.";

export const metadata: Metadata = {
  ...buildMetadata({ title, description, path: sourcePage }),
  alternates: { canonical: `https://www.decoropic.com${sourcePage}` },
  openGraph: {
    title, description, type: "website", locale: "en_US",
    url: `https://www.decoropic.com${sourcePage}`, siteName: "Decoropic",
    images: [{ url: "https://www.decoropic.com/images/products/furniture.jpg", alt: "Furniture available through Decoropic's China sourcing service" }]
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.decoropic.com/images/products/furniture.jpg"] }
};

const packages = [
  { title: "Hotel & resort FF&E", body: "Guestroom furniture, lobby seating, lighting, bathroom fittings and finishes coordinated against your room schedule.", image: "furniture.jpg", href: "/source-from-china/hotel-ff-e" },
  { title: "Villa & apartment interiors", body: "Floors, doors, furniture and lighting selected against your drawings, quantities and material budget.", image: "porcelain-slab.jpg", href: "/guides/villa-apartment-fit-out-materials-from-china" },
  { title: "Bathroom & kitchen packages", body: "Vanities, sanitary ware and fittings checked against dimensions and connections supplied by your local team.", image: "bathroom-kitchen.jpg", href: "/source-from-china/tiles-sanitary" }
];
const markets = [
  { title: "Malaysia", body: "Planning a hotel refurbishment or residential fit-out? Send the room or unit schedule and your delivery destination." },
  { title: "Philippines", body: "For hotels, resorts and multi-unit residences, specify the final island and site destination alongside your nominated import port." },
  { title: "Thailand", body: "Share your resort, hotel or villa brief together with approved finishes and the local contractor's installation requirements." },
  { title: "Vietnam", body: "Send your apartment or hospitality material schedule, sample requirements and receiving programme for a coordinated China-side proposal." },
  { title: "Indonesia", body: "Include the final project location, receiving port and your importer or contractor's requirements when requesting a package." },
  { title: "Singapore", body: "For design and procurement teams, share specifications, documentation requirements and site access constraints before selection." }
];
const faqs = [
  { question: "Do you install interiors in Southeast Asia?", answer: "Our Southeast Asia offer covers remote design and specification, China-side sourcing, quality control, consolidation and export. Your appointed local team handles import, clearance, inland delivery and installation. Full turnkey delivery is available only in Ghana." },
  { question: "What should I send for a sourcing proposal?", answer: "Send your country and city, project type, room or unit count, drawings or bill of quantities, budget range and target delivery date. Name your importer and installer if already appointed. We review the scope before agreeing prices or a programme." },
  { question: "Can several product categories ship together?", answer: "We coordinate multiple suppliers and categories into an export plan. Container type, packing, shipment phases and suitability for consolidation depend on the approved quantities, fragile items and production dates." },
  { question: "Are duties, delivery times or savings fixed?", answer: "No. Freight, production time, import requirements and duties vary by item and destination. We agree a project-specific scope and export quotation; your local customs broker verifies classification, permits, duties and taxes before ordering." },
  { question: "Are your published project cases in Southeast Asia?", answer: "The delivered hospitality cases presented on this website are in Ghana. They demonstrate design, sourcing and delivery experience and are not presented as Southeast Asian installations or evidence of a local office." }
];

export default function SoutheastAsiaPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <section className={styles.hero}>
        <Image src="/images/products/furniture.jpg" alt="Furniture selection for a coordinated interior material package" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={`container-wide ${styles.heroContent}`}>
          <p>Decoropic / China sourcing & export</p>
          <h1>Interior materials from China for Southeast Asia</h1>
          <p className={styles.subtitle}>Hotel FF&E, villa interiors and apartment packages. Design, sourcing, quality control and consolidated export from China, coordinated with your local project team.</p>
          <div className={styles.actions}>
            <a href="#project-brief" className={styles.primary}>Discuss your project <ArrowRight size={18} /></a>
            <LpWhatsAppButton sourcePage={sourcePage} message="Hi Decoropic, I have a Southeast Asia project. Country/city: __. Hotel/villa/apartment: __. Rooms/units: __. Target delivery: __. Please help with China sourcing and export." className={styles.whatsapp} />
          </div>
        </div>
      </section>
      <section className={styles.boundary}>
        <div className="container-wide">
          <h2>China-side supply. Your local team on site.</h2>
          <p>{SERVICE_BOUNDARY}</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container-wide">
          <h2>One project, coordinated categories</h2>
          <div className={styles.packages}>
            {packages.map((item) => <article key={item.title}>
              <div className={styles.image}><Image src={`/images/products/${item.image}`} alt={item.title} fill sizes="(max-width: 767px) 100vw, 33vw" /></div>
              <h3>{item.title}</h3><p>{item.body}</p>
              <Link href={item.href}>Explore the package <ArrowRight size={16} /></Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.light}`}>
        <div className="container-wide">
          <h2>Plan around your destination</h2>
          <div className={styles.markets}>{markets.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          <p className={styles.other}>Projects in Cambodia, Laos, Brunei, Myanmar or Timor-Leste? Send your scope and destination for an individual feasibility review. Availability and shipping arrangements are confirmed per project.</p>
          <Link href="/guides/china-to-southeast-asia-project-materials">Read the Southeast Asia procurement checklist <ArrowRight size={16} /></Link>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container-wide">
          <h2>From brief to export</h2>
          <ol className={styles.steps}>
            <li><h3>01 / Define the scope</h3><p>Drawings, quantities, budget, delivery destination and your local installation responsibilities.</p></li>
            <li><h3>02 / Agree specifications</h3><p>Materials, finishes, dimensions, approved samples and destination documentation requirements.</p></li>
            <li><h3>03 / Inspect and consolidate</h3><p>Check goods against the agreed specification and prepare an itemised packing and shipment plan.</p></li>
            <li><h3>04 / Export and receive</h3><p>Agree the export terms. Your importer and contractor coordinate clearance, delivery and installation locally.</p></li>
          </ol>
          <div className={styles.proof}><h3>Experience you can inspect</h3><p>Our published hotel projects are in Ghana. Review the Kumasi hotel case to see how design, multiple material categories and shipments were coordinated.</p><Link href="/projects/hotels/kumasi-boutique-hotel">View the Ghana hotel case <ArrowRight size={16} /></Link></div>
          <div className={styles.proof}><h3>Request comparable hotel quotations</h3><p>Organise room quantities, item specifications, sample approvals and quote exclusions before asking suppliers to price your package.</p><Link href="/guides/hotel-ffe-rfq-template-southeast-asia">Use the hotel FF&amp;E RFQ template <ArrowRight size={16} /></Link></div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.light}`}>
        <div className="container-narrow"><h2>Before you order</h2>{faqs.map((faq) => <details key={faq.question} className={styles.faq}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>
      <section id="project-brief" className={styles.section}>
        <div className={`container-narrow ${styles.brief}`}>
          <h2>Tell us about your project</h2><p>Include your country, city, room or unit count, drawings or BOQ, budget range and target delivery date. We will review the scope with you.</p>
          <ProjectInquiryForm sourcePage={sourcePage} locale="en" />
        </div>
      </section>
    </main>
  );
}

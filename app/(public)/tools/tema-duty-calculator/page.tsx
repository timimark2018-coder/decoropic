import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { TemaDutyAndContainerCalculator } from "@/components/tools/TemaDutyAndContainerCalculator";
import { faqPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/utils/constants";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: {
      en: "Ghana Tema Port Import Duty & Container Calculator (2026)",
      zh: "加纳 Tema 港建材清关税费与拼柜体积计算器（2026）"
    },
    description: {
      en: "Free planning calculator for importing building materials from China to Tema Port, Ghana: estimate ICUMS import duty, VAT, NHIL, GETFund and 20GP/40HQ container volume.",
      zh: "免费测算中国到加纳 Tema 港建材进口关税、VAT、NHIL、GETFund 综合税费与 20GP/40HQ 拼柜体积。"
    },
    path: "/tools/tema-duty-calculator",
    locale
  });
}

const faqs = [
  {
    question: "How are import duties and taxes calculated at Tema Port in Ghana?",
    answer:
      "Ghana's ICUMS system assesses Customs Duty on the CIF value (FOB + ocean freight + insurance). VAT (15%), NHIL (2.5%) and GETFund (2.5%) sit on CIF plus Customs Duty, alongside smaller CIF-based levies (ECOWAS, AU, EXIM and inspection). The pre-2026 COVID recovery levy has been withdrawn."
  },
  {
    question: "Should I ship a 20GP or 40HQ container for building materials to Ghana?",
    answer:
      "Use a 40HQ container (~66–68 m³ usable) for mixed finishing packages containing bulky items like kitchen cabinets, wardrobes, doors, lighting and furniture. Use a 20GP (~28 m³ usable) when heavy items like porcelain tiles or granite slabs would hit the container weight limit before filling a 40HQ."
  },
  {
    question: "How long does sea freight from Foshan/Guangzhou to Tema take?",
    answer:
      "Direct ocean transit from Shenzhen or Guangzhou (Nansha) to Tema typically runs 28–35 days port to port. Including production, Foshan warehouse QC and Tema clearance, plan 8–12 weeks from approved drawings to site delivery in Accra."
  },
  {
    question: "Is this calculator an official GRA customs quote?",
    answer:
      "No. It is an indicative planning tool to help homeowners, developers and hotel owners budget before ordering. Always verify the exact 10-digit HS code, duty band and current statutory levies with a GRA-licensed customs house agent prior to shipment."
  }
];

export default function TemaDutyCalculatorPage() {
  const baseUrl = siteConfig.siteUrl;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Ghana Tema Port Import Duty & Container Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      url: `${baseUrl}/tools/tema-duty-calculator`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    },
    faqPageSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Tema Duty & Container Calculator", item: `${baseUrl}/tools/tema-duty-calculator` }
      ]
    }
  ];

  return (
    <main className="bg-[#f7f3ec] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="pt-32 pb-12 lg:pt-40">
        <div className="container-wide max-w-[1040px]">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-brand-gold">Free Planning Tools · China to Ghana</p>
          <h1
            className="mt-5 text-brand-pine-dark"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em"
            }}
          >
            Ghana Tema Port Import Duty &amp; Container Calculator
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-[1.8] text-brand-pine-dark/75">
            Estimate indicative ICUMS port taxes (Customs Duty, NHIL, GETFund, VAT and levies) and check whether your Foshan
            building-materials package fits in LCL, a 20GP or a 40HQ container before you order.
          </p>

          <div className="mt-10">
            <TemaDutyAndContainerCalculator />
          </div>

          <p className="mt-6 border-l-2 border-brand-gold/60 pl-4 text-xs leading-[1.7] text-brand-pine-dark/60">
            Planning reference only — not formal customs advice. Actual GRA ICUMS assessments depend on your exact 10-digit HS
            code, valuation and current statutory rates. Confirm with a GRA-licensed clearing agent before booking.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-wide max-w-[860px]">
          <h2
            className="text-brand-pine-dark"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700 }}
          >
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-8">
            {faqs.map((f) => (
              <div key={f.question} className="border-b border-brand-pine-dark/10 pb-6 last:border-b-0">
                <h3 className="text-lg font-bold text-brand-pine-dark">{f.question}</h3>
                <p className="mt-2 text-base leading-[1.75] text-brand-pine-dark/80">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-brand-pine-dark/10 pt-8 text-sm font-semibold text-brand-pine-dark">
            <Link href="/guides/tema-port-clearing-building-materials" className="hover:text-brand-gold">
              Tema Port Clearing Guide →
            </Link>
            <Link href="/guides/china-to-tema-shipping-cost" className="hover:text-brand-gold">
              China to Tema Container Cost →
            </Link>
            <Link href="/blog/importing-building-materials-china-ghana-guide" className="hover:text-brand-gold">
              Full China-to-Ghana Import Guide →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

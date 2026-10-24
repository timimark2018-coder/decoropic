import Link from "next/link";
import type { Locale } from "@/content/types";
import { Reveal } from "@/components/ui";

type Props = { locale: Locale };

// Homepage exposure for the global "source from China" cluster.
// Neutral, project/export-oriented copy — deliberately NO Ghana geo terms in the
// outward anchor, so link equity flows to the global cluster without pulling
// Ghana geo-intent into it. One-way: home → hub.
export function HomeGlobalSourcing({ locale }: Props) {
  const eyebrow = locale === "zh" ? "海外项目 · 采购与出口" : "Overseas Projects · Sourcing & Export";
  const title =
    locale === "zh"
      ? "海外项目？从中国配齐整套材料并出口"
      : "Building overseas? Source the whole material package from China";
  const body =
    locale === "zh"
      ? "面向酒店、别墅与公寓项目：我们在中国侧做设计选型、验货、拼柜与出口，把整套材料发到你的港口。当地进口、清关与安装由你或当地承包商完成。"
      : "For hotel, villa and apartment projects abroad: we design and specify, run quality control, consolidate and export the complete material package from China to your port. Local import, clearance and installation stay with you or your local contractor.";
  const cta = locale === "zh" ? "了解采购与出口服务 →" : "Sourcing & export for overseas projects →";

  return (
    <section className="bg-brand-pine-dark text-brand-ivory py-20 lg:py-28">
      <div className="container-wide max-w-[1000px]">
        <Reveal>
          <p
            className="text-brand-gold mb-6"
            style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
          >
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2
            className="text-brand-ivory mb-6 max-w-[820px]"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)", fontWeight: 700, lineHeight: 1.12 }}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-brand-ivory/80 mb-10 max-w-[720px]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {body}
          </p>
        </Reveal>
        <Reveal delay={450}>
          <Link
            href="/source-from-china"
            className="inline-flex items-center bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
            style={{ fontFamily: "var(--serif)", fontSize: "0.875rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}
          >
            {cta}
          </Link>
          <Link href="/source-from-china/southeast-asia" className="mt-5 block text-brand-ivory underline underline-offset-4">
            {locale === "zh" ? "东南亚酒店、别墅与公寓项目采购 →" : "Sourcing for Southeast Asia hotel, villa & apartment projects →"}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

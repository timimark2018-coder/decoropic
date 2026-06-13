import Link from "next/link";
import { HandDrawnLine, Reveal } from "@/components/ui";
import { buildWhatsAppHref } from "@/lib/utils/site-links";

type Props = {
  eyebrow: string;
  h1: string;
  lead: string;
};

export function CategoryHero({ eyebrow, h1, lead }: Props) {
  const waHref = buildWhatsAppHref();

  return (
    <section className="bg-[#efe7d9]" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="container-wide max-w-[1100px]">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px max-w-[80px] flex-1 bg-brand-gold/60" />
            <p
              className="text-brand-gold whitespace-nowrap"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {eyebrow}
            </p>
            <div className="h-px flex-1 bg-brand-gold/60" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1
            className="text-brand-pine-dark mb-8"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.015em",
              maxWidth: "860px"
            }}
          >
            {h1}
          </h1>
        </Reveal>

        <Reveal delay={350}>
          <div className="mb-10 max-w-[240px]">
            <HandDrawnLine variant="wave" height={22} color="var(--brand-gold)" strokeWidth={1.5} />
          </div>
        </Reveal>

        <Reveal delay={500}>
          <p
            className="text-brand-ink/80 mb-12"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.7, maxWidth: "700px" }}
          >
            {lead}
          </p>
        </Reveal>

        <Reveal delay={650}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              Talk to Decoropic
            </Link>
            <a
              href={waHref || "/contact"}
              className="border border-brand-pine-dark/30 text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-pine-dark/5"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

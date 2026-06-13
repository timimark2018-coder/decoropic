import Link from "next/link";
import { Reveal } from "@/components/ui";
import { buildWhatsAppHref } from "@/lib/utils/site-links";

export function CtaSection() {
  const waHref = buildWhatsAppHref();

  return (
    <section className="bg-brand-pine-dark py-24 lg:py-32">
      <div className="container-wide max-w-[800px] text-center">
        <Reveal>
          <p
            className="text-brand-gold mb-8"
            style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
          >
            READY TO BEGIN
          </p>
        </Reveal>

        <Reveal delay={200}>
          <h2
            className="text-brand-ivory mb-8"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            Start your project.
          </h2>
        </Reveal>

        <Reveal delay={400}>
          <p
            className="text-brand-ivory/70 mx-auto mb-12"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "560px" }}
          >
            Tell us what you&apos;re building. We&apos;ll curate the right specification and price it for your Ghana project.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waHref || "/contact"}
              className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
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
            <Link
              href="/contact"
              className="border border-brand-ivory/40 text-brand-ivory px-8 py-4 transition-colors hover:bg-brand-ivory/10"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              Send Brief Form
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

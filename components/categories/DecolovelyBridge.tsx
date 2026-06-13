import { Reveal } from "@/components/ui";

type Props = {
  categoryLabel: string;
  count: string;
  archiveUrl: string;
};

export function DecolovelyBridge({ categoryLabel, count, archiveUrl }: Props) {
  return (
    <section className="bg-[#efe7d9] py-16 lg:py-20">
      <div className="container-wide max-w-[900px] text-center">
        <Reveal>
          <p
            className="text-brand-pine-dark/50 mb-6"
            style={{ fontSize: "0.78rem", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600 }}
          >
            PRODUCT ARCHIVE
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p
            className="text-brand-pine-dark mb-8"
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
              lineHeight: 1.55,
              maxWidth: "680px",
              margin: "0 auto 2rem"
            }}
          >
            Looking for more options? Browse our full archive at{" "}
            <strong style={{ fontStyle: "normal" }}>decolovely.com</strong> —{" "}
            <strong style={{ fontStyle: "normal" }}>{count}</strong> across {categoryLabel}.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={archiveUrl}
            rel="alternate"
            className="inline-block bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "0.875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700
            }}
          >
            Browse Archive →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

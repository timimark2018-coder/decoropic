import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

type Props = {
  locale: Locale;
};

// Home Brand Positioning v2.0 — Editorial
// Design principles:
//   - No card grid, no borrowed whyChooseUs.items (fixes TODO-12 data reuse bug).
//   - Pure prose layout — title + hand-drawn line + two paragraphs.
//   - Syntax mirrors AboutPositioning for site-wide consistency.
//   - container-narrow (760px) keeps reading line length measured.
export function HomeBrandPositioning({ locale }: Props) {
  const { brandPositioning } = homeContent;

  const brandEyebrow = locale === "zh" ? "品牌定位" : "Brand positioning";

  // Split body into two paragraphs on the period-space heuristic for paragraph rhythm.
  // Falls back to single paragraph if body has no internal sentence break we can use.
  const bodyText = t(brandPositioning.body, locale);
  const paragraphs = splitIntoParagraphs(bodyText);

  return (
    <section
      id="home-brand-positioning"
      className="bg-[#f7f3ec] pt-24 pb-24 lg:pt-32 lg:pb-32"
    >
      <div className="container-narrow">
        <Reveal>
          <div className="flex items-center gap-3 text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="text-eyebrow-lg">{brandEyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="mt-8 text-brand-pine-dark"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em"
            }}
          >
            {t(brandPositioning.title, locale)}
          </h2>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 max-w-md">
            <HandDrawnLine variant="wave" height={32} />
          </div>
        </Reveal>

        <div className="mt-10 space-y-7">
          {paragraphs.map((paragraph, idx) => (
            <Reveal key={idx} delay={340 + idx * 120}>
              <p className="text-lg leading-[1.85] text-brand-pine/85 sm:text-xl sm:leading-[1.85]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper: split body text into 1-2 paragraphs on a clear sentence break.
// Keeps output stable whether content has natural paragraph breaks or not.
function splitIntoParagraphs(text: string): string[] {
  // Prefer explicit double-newline split if the source has it.
  const explicit = text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  if (explicit.length > 1) return explicit;

  // Otherwise try to split roughly at the midpoint on a sentence boundary.
  const sentences = text.match(/[^.!?。！？]+[.!?。！？]+/g);
  if (!sentences || sentences.length < 2) return [text];

  const mid = Math.floor(sentences.length / 2);
  const first = sentences.slice(0, mid).join(" ").trim();
  const second = sentences.slice(mid).join(" ").trim();
  return [first, second].filter(Boolean);
}

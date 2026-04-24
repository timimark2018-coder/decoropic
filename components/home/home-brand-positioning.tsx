import { homeContent } from "@/content/home";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

type Props = {
  locale: Locale;
};

// Home Brand Positioning v3.0 — Editorial Breakout
// Design philosophy:
//   - Two-column asymmetric grid (2fr narrative : 1fr data pillars).
//   - Left: eyebrow + oversized Playfair title with gold italic "to"
//     connector (echoes Hero v2.5's gold italic "interior solutions").
//   - Gold hand-drawn wave line (continues Hero vocabulary).
//   - Pull quote in Playfair italic gold — the counter-punch against
//     "just a supplier" market perception.
//   - Body rhythm: short punchy opening, medium mid-weight coordination
//     sentences, then three short time-asset statements to close.
//   - Right: three oversized Playfair numerals (6 / 4 / 20) — evidence
//     of depth, breadth, and longevity.
//   - Corner gold accent (top-right, mirrors Hero) binds the two sections
//     into one Editorial system.
export function HomeBrandPositioning({ locale }: Props) {
  const { brandPositioning } = homeContent;

  const brandEyebrow =
    locale === "zh" ? "品牌立场" : "Brand positioning";

  // Split the English title on " to " for gold italic mid-word treatment.
  // Chinese uses a parallel split on "，到" to achieve similar visual beat.
  const titleText = t(brandPositioning.title, locale);
  const titleParts =
    locale === "zh"
      ? splitTitleChinese(titleText)
      : splitTitleEnglish(titleText);

  return (
    <section
      id="home-brand-positioning"
      className="relative bg-[#f7f3ec] pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden"
    >
      {/* Corner gold accent — mirrors Hero v2.5 */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-8 h-16 w-16 border-t border-r border-brand-gold/50 sm:right-12 sm:top-12 lg:top-16"
      />

      <div className="container-wide">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 text-brand-gold">
            <span className="h-[2px] w-16 bg-brand-gold" />
            <span
              className="text-brand-gold"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              {brandEyebrow}
            </span>
          </div>
        </Reveal>

        {/* Main grid — 2fr narrative : 1fr data pillars */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          {/* Left column — narrative */}
          <div className="max-w-[720px]">
            {/* Title with gold italic connector */}
            <Reveal delay={120}>
              <h2
                className="text-brand-pine-dark"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em"
                }}
              >
                {titleParts.before}
                <span
                  className="text-brand-gold"
                  style={{ fontWeight: 400, fontStyle: "italic" }}
                >
                  {titleParts.connector}
                </span>
                {titleParts.after}
              </h2>
            </Reveal>

            {/* Hand-drawn gold wave line */}
            <Reveal delay={280}>
              <div className="mt-10 max-w-[240px]">
                <HandDrawnLine
                  variant="wave"
                  height={24}
                  color="var(--brand-gold)"
                  strokeWidth={1.4}
                />
              </div>
            </Reveal>

            {/* Pull quote — Playfair italic gold */}
            <Reveal delay={440}>
              <blockquote
                className="mt-10 text-brand-gold"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em"
                }}
              >
                <span
                  aria-hidden
                  className="text-brand-gold/50 mr-1"
                  style={{ fontStyle: "normal" }}
                >
                  “
                </span>
                {t(brandPositioning.pullQuote, locale)}
                <span
                  aria-hidden
                  className="text-brand-gold/50 ml-1"
                  style={{ fontStyle: "normal" }}
                >
                  ”
                </span>
              </blockquote>
            </Reveal>

            {/* Divider */}
            <Reveal delay={600}>
              <div className="mt-10 h-px w-20 bg-brand-pine-dark/20" />
            </Reveal>

            {/* Body */}
            <Reveal delay={740}>
              <p className="mt-8 text-base leading-[1.8] text-brand-pine-dark/85 sm:text-lg sm:leading-[1.85]">
                {t(brandPositioning.body, locale)}
              </p>
            </Reveal>
          </div>

          {/* Right column — 3 data pillars */}
          <div className="flex flex-col gap-10 lg:pt-4">
            {brandPositioning.stats.map((stat, idx) => (
              <Reveal key={stat.value + stat.label.en} delay={360 + idx * 180}>
                <div className="flex flex-col">
                  <span
                    className="text-brand-pine-dark leading-none"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(4.5rem, 9vw, 8rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em"
                    }}
                  >
                    {stat.value}
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-gold" />
                    <span
                      className="text-brand-pine-dark/75"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.26em",
                        textTransform: "uppercase"
                      }}
                    >
                      {t(stat.label, locale)}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helpers — split the title so we can render "to" (or Chinese "，到") in gold italic.
// If the expected split marker is not found, we render the whole title as a
// single dark block (degrade gracefully rather than error).
function splitTitleEnglish(text: string): {
  before: string;
  connector: string;
  after: string;
} {
  const marker = " to ";
  const idx = text.indexOf(marker);
  if (idx === -1) return { before: text, connector: "", after: "" };
  return {
    before: text.slice(0, idx) + " ",
    connector: "to",
    after: " " + text.slice(idx + marker.length)
  };
}

function splitTitleChinese(text: string): {
  before: string;
  connector: string;
  after: string;
} {
  const marker = "，到";
  const idx = text.indexOf(marker);
  if (idx === -1) return { before: text, connector: "", after: "" };
  return {
    before: text.slice(0, idx) + "，",
    connector: "到",
    after: text.slice(idx + marker.length)
  };
}

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
};

export function SectionTitle({ eyebrow, title, description, tone = "dark" }: SectionTitleProps) {
  const titleClass = tone === "light" ? "text-white" : "text-brand-ink";
  const bodyClass = tone === "light" ? "text-white/72" : "text-slate-600";
  const eyebrowClass = tone === "light" ? "text-brand-gold/85" : "text-brand-gold";

  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`eyebrow-label mb-3 ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h2 className={`display-title text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-lg leading-8 ${bodyClass}`}>{description}</p> : null}
    </div>
  );
}

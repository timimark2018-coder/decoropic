import { Reveal } from "@/components/ui";

type Props = {
  applications: string[];
  categoryLabel: string;
};

export function ApplicationSection({ applications, categoryLabel }: Props) {
  return (
    <section className="bg-[#f7f3ec] py-20 lg:py-28">
      <div className="container-wide max-w-[1100px]">
        <Reveal>
          <p
            className="text-brand-gold mb-4"
            style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
          >
            {categoryLabel} · IN CONTEXT
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h2
            className="text-brand-pine-dark mb-14"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            Where we apply this
          </h2>
        </Reveal>

        <div className="space-y-8">
          {applications.map((text, i) => (
            <Reveal key={i} delay={200 + i * 120}>
              <div className="flex gap-6 border-b border-brand-pine-dark/10 pb-8 last:border-b-0">
                <span
                  className="text-brand-gold flex-shrink-0 mt-1"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 400, lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-brand-pine-dark/85" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

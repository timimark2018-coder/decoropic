import { Reveal } from "@/components/ui";

type WhyItem = {
  title: string;
  body: string;
};

type Props = {
  items: WhyItem[];
};

export function WhySection({ items }: Props) {
  return (
    <section className="bg-brand-pine-dark py-20 lg:py-28">
      <div className="container-wide max-w-[1100px]">
        <Reveal>
          <p
            className="text-brand-gold mb-10"
            style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
          >
            WHY THIS CATEGORY FROM DECOROPIC
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="border-t border-brand-gold/30 pt-8">
                <span
                  className="text-brand-gold mb-5 block"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 400, lineHeight: 1 }}
                >
                  ✦
                </span>
                <h3
                  className="text-brand-ivory mb-4"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(1.125rem, 1.4vw, 1.375rem)",
                    fontWeight: 700,
                    lineHeight: 1.25
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-brand-ivory/70" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

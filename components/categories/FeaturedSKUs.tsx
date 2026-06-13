import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";

type SKU = {
  name: string;
  spec: string;
  priceFrom: string;
  priceLow: number;
  image: string;
  detailUrl: string;
};

type Props = {
  skus: SKU[];
  categoryLabel: string;
  baseUrl: string;
};

export function FeaturedSKUs({ skus, categoryLabel, baseUrl }: Props) {
  const productSchemas = skus.map((sku) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: sku.name,
    description: sku.spec,
    image: sku.image,
    brand: {
      "@type": "Brand",
      name: "Decoropic"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      lowPrice: sku.priceLow,
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/contact?product=${encodeURIComponent(sku.name)}`
    }
  }));

  return (
    <section className="bg-[#efe7d9] py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchemas, null, 0)
        }}
      />

      <div className="container-wide max-w-[1200px]">
        <Reveal>
          <p
            className="text-brand-gold mb-4"
            style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
          >
            {categoryLabel} · FEATURED SELECTIONS
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
            Featured selections
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skus.map((sku, i) => (
            <Reveal key={sku.name} delay={i * 80}>
              <article className="group flex flex-col rounded-lg bg-[#EFE7D9] border border-brand-line/40 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-pine-dark/5">
                  <Image
                    src={sku.image}
                    alt={sku.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-brand-pine-dark mb-2"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    {sku.name}
                  </h3>

                  <p
                    className="text-brand-ink/55 mb-3"
                    style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}
                  >
                    {sku.spec}
                  </p>

                  <p
                    className="text-brand-gold mb-6 flex-1"
                    style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600 }}
                  >
                    From {sku.priceFrom}
                  </p>

                  <Link
                    href={`/contact?product=${encodeURIComponent(sku.name)}`}
                    className="inline-block bg-brand-gold text-brand-pine-dark text-center px-5 py-3 transition-colors hover:bg-brand-gold/90"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 700
                    }}
                  >
                    Inquire →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

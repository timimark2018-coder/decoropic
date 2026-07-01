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

function ProductCard({ sku, index, baseUrl }: { sku: SKU; index: number; baseUrl: string }) {
  void index;
  void baseUrl;
  return (
    <article className="group flex flex-col rounded-lg bg-white border border-brand-line/40 overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {/* Image container — object-contain so tall/vertical products aren't cropped.
          Outer: 4:3 bounding box + background.
          Absolute inset-16px creates the visual padding without box-sizing issues.
          Inner relative div is the fill-anchor for next/image. */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "4 / 3",
          backgroundColor: "#EFE7D9",
          borderRadius: "8px 8px 0 0"
        }}
      >
        <div className="absolute" style={{ inset: "16px" }}>
          <div className="relative w-full h-full">
            <Image
              src={sku.image}
              alt={sku.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3
          className="text-brand-pine-dark mb-2"
          style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 700, lineHeight: 1.3 }}
        >
          {sku.name}
        </h3>

        <p className="text-brand-ink/55 mb-3" style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}>
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
          style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
        >
          Inquire →
        </Link>
      </div>
    </article>
  );
}

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

        {/* Row 1: 3 cards centred */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mb-6">
          {skus.slice(0, 3).map((sku, i) => (
            <Reveal key={sku.name} delay={i * 80}>
              <ProductCard sku={sku} index={i} baseUrl={baseUrl} />
            </Reveal>
          ))}
        </div>
        {/* Row 2: 2 cards centred */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:max-w-[66.7%] lg:mx-auto">
          {skus.slice(3).map((sku, i) => (
            <Reveal key={sku.name} delay={(i + 3) * 80}>
              <ProductCard sku={sku} index={i + 3} baseUrl={baseUrl} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

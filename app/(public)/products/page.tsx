import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { productsContent } from "@/content/products";
import { t } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Products & Catalog | Decoropic",
      zh: "产品与精选 | Decoropic"
    },
    description: {
      en: "One source. One contract. One delivery. Curated material ecosystem for your project.",
      zh: "一站采购、一份合同、一次交付——为你的项目精选的材料生态系统。"
    },
    path: "/products",
    locale
  });
}

export default async function ProductsPage() {
  const locale = await getLocale();
  const c = productsContent;

  return (
    <main className="min-h-screen">
      {/* P3 阶段会重构为完整 7 章节 Editorial */}
      <section className="bg-[#efe7d9] pt-32 pb-24">
        <div className="container-wide max-w-[1100px]">
          <p
            className="text-brand-gold mb-8"
            style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
          >
            {t(c.hero.eyebrow, locale)}
          </p>
          <h1
            className="text-brand-pine-dark mb-8"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 6vw, 5.25rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.015em"
            }}
          >
            {t(c.hero.title, locale)}
          </h1>
          <p className="text-brand-pine-dark/60">
            [Page under construction. P3 will deliver full Editorial layout.]
          </p>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { getAllContentPages } from "@/lib/content-pages/getContentPage";

// /markets/west-africa 上的「Version française」模块:链到 /fr 下的法语页。
// 法语页本身不跟随站点语言(没有 /zh 版)，链接不做 localizePath。
const ORDER = ["cote-d-ivoire", "togo", "senegal"];

export function FrenchVersion() {
  const pages = getAllContentPages("fr").sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));
  if (pages.length === 0) return null;

  return (
    <section lang="fr" className="border-t border-brand-pine-dark/10 bg-white py-16 lg:py-20">
      <div className="container-wide max-w-[920px]">
        <p
          className="text-brand-gold"
          style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Version française
        </p>
        <h2
          className="mt-4 text-brand-pine-dark"
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", fontWeight: 700, lineHeight: 1.2 }}
        >
          Afrique de l&apos;Ouest francophone
        </h2>
        <ul className="mt-8 space-y-5">
          {pages.map((p) => (
            <li key={p.slug} className="border-b border-brand-pine-dark/10 pb-5">
              <h3
                className="text-brand-pine-dark"
                style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.3 }}
              >
                <Link href={p.url} hrefLang={p.hreflang} className="transition-colors hover:text-brand-gold">
                  {p.h1}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-[1.75] text-brand-pine-dark/75">{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

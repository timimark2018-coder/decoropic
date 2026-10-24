import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import type { ContentPage as ContentPageData } from "@/lib/content-pages/getContentPage";
import { filterSections } from "@/lib/content-pages/pending";
import { localizePath } from "@/lib/utils/site-links";
import { HandDrawnLine, Reveal } from "@/components/ui";
import { RichText } from "./rich-text";

type HeroImage = {
  src: string;
  alt: string;
};

type Props = {
  page: ContentPageData;
  locale: Locale;
  eyebrow: string;
  /** 本页实际配的图。源文件的 image suggestions 多数还没有对应素材 —— 没有就不传，留空不放占位图。 */
  heroImage?: HeroImage;
};

const PROSE = "text-base leading-[1.8] text-brand-pine-dark/80";

export function ContentPage({ page, locale, eyebrow, heroImage }: Props) {
  const sections = filterSections(page.sections);

  return (
    <>
      <section className="bg-[#f7f3ec] pt-32 pb-16 lg:pt-40">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-[2px] w-16 bg-brand-gold" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase"
                }}
              >
                {eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h1
              className="mt-8 max-w-[900px] text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.4vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em"
              }}
            >
              {page.h1}
            </h1>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.4} />
            </div>
          </Reveal>

          <Reveal delay={500}>
            <p className={`mt-8 max-w-[820px] ${PROSE}`}>
              <RichText text={page.intro} locale={locale} />
            </p>
          </Reveal>

          {heroImage && (
            <Reveal delay={660}>
              <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[6px]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={index % 2 === 0 ? "bg-white py-16 lg:py-20" : "bg-[#f7f3ec] py-16 lg:py-20"}
        >
          <div className="container-wide max-w-[920px]">
            <h2
              className="text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em"
              }}
            >
              {section.heading}
            </h2>

            <div className="mt-8 space-y-6">
              {section.blocks.map((block, bi) => {
                if (block.kind === "paragraph") {
                  return (
                    <p key={bi} className={PROSE}>
                      <RichText text={block.text} locale={locale} />
                    </p>
                  );
                }

                if (block.kind === "bullets") {
                  return (
                    <ul key={bi} className="space-y-3">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex gap-3">
                          <span aria-hidden className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-gold" />
                          <span className={PROSE}>
                            <RichText text={item} locale={locale} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.kind === "steps") {
                  return (
                    <ol key={bi} className="space-y-4">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex gap-4">
                          <span className="mt-[0.35em] shrink-0 text-xs font-bold tabular-nums text-brand-gold">
                            {String(ii + 1).padStart(2, "0")}
                          </span>
                          <span className={PROSE}>
                            <RichText text={item} locale={locale} />
                          </span>
                        </li>
                      ))}
                    </ol>
                  );
                }

                if (block.kind === "table") {
                  return (
                    <div key={bi} className="-mx-4 overflow-x-auto px-4">
                      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b-2 border-brand-gold/40">
                            {block.headers.map((h) => (
                              <th
                                key={h}
                                scope="col"
                                className="py-3 pr-5 align-bottom font-semibold text-brand-pine-dark"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, ri) => (
                            <tr key={ri} className="border-b border-brand-pine-dark/10">
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={`py-3 pr-5 align-top leading-[1.7] ${
                                    ci === 0 ? "font-semibold text-brand-pine-dark" : "text-brand-pine-dark/80"
                                  }`}
                                >
                                  <RichText text={cell} locale={locale} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (block.kind === "faq") {
                  return (
                    <dl key={bi} className="space-y-6">
                      {block.items.map((item, ii) => (
                        <div key={ii} className="border-l-2 border-brand-gold/50 pl-5">
                          <dt className="font-semibold text-brand-pine-dark">{item.question}</dt>
                          <dd className={`mt-2 ${PROSE}`}>
                            <RichText text={item.answer} locale={locale} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </section>
      ))}

      {page.internalLinks.length > 0 && (
        <section className="border-t border-brand-pine-dark/10 bg-white py-12">
          <div className="container-wide max-w-[920px]">
            <p className="text-brand-gold" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              {locale === "zh" ? "相关页面" : "Related"}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {page.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localizePath(link.href, locale)}
                  className="text-sm text-brand-pine underline decoration-brand-gold/50 underline-offset-2 transition-colors hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

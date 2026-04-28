import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { eastLegonVillaContent } from "@/content/projects";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

const villasBySlug = [eastLegonVillaContent];

export async function generateStaticParams() {
  return villasBySlug.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = villasBySlug.find((v) => v.slug === slug);
  const locale = await getLocale();

  if (!data) {
    return buildMetadata({
      title: { en: "Villa Concept Cases | Decoropic", zh: "别墅概念案例 | Decoropic" },
      description: {
        en: "Explore Decoropic's villa concept cases.",
        zh: "浏览 Decoropic 的别墅概念案例。"
      },
      path: "/projects",
      locale
    });
  }

  return buildMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/projects/villas/${data.slug}`,
    locale
  });
}

export default async function VillaDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = villasBySlug.find((v) => v.slug === slug);
  if (!data) notFound();

  const locale = await getLocale();

  return (
    <main className="min-h-screen">
      {/* HERO — 米色 #efe7d9 editorial */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <Link
              href="/projects"
              className="text-brand-pine-dark/60 hover:text-brand-gold transition-colors inline-block mb-10"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              ← Projects
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex items-center gap-4 mb-6">
              <span aria-hidden className="block h-px w-12 bg-brand-gold" />
              <p
                className="text-brand-gold"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t(data.hero.eyebrow, locale)}
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <h1
              className="text-brand-pine-dark mb-6 max-w-[900px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.01em"
              }}
            >
              {t(data.hero.title, locale)}
            </h1>
          </Reveal>

          <Reveal delay={450}>
            <p
              className="text-brand-pine-dark/75 mb-8 max-w-[760px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.125rem, 1.7vw, 1.375rem)",
                lineHeight: 1.4
              }}
            >
              {t(data.hero.subtitle, locale)}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="mb-10 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.6} />
            </div>
          </Reveal>

          <Reveal delay={750}>
            <div
              className="w-full mb-12 bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
              style={{ aspectRatio: "16 / 9" }}
            >
              <div
                aria-hidden
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${data.hero.heroImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={900}>
            <div className="border-l-2 border-brand-gold pl-6 lg:pl-8 max-w-[760px]">
              <p
                className="text-brand-pine-dark mb-3"
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  lineHeight: 1.5
                }}
              >
                &ldquo;{t(data.hero.pullQuote, locale)}&rdquo;
              </p>
              <p
                className="text-brand-gold"
                style={{
                  fontSize: "0.875rem",
                  letterSpacing: "0.12em",
                  fontWeight: 600
                }}
              >
                {t(data.hero.author, locale)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFO BAR */}
      <div
        className="bg-brand-pine-dark text-brand-ivory"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="container-wide max-w-[1200px]">
          <p
            className="text-brand-gold text-center"
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 700
            }}
          >
            {t(data.infoBar.text, locale)}
          </p>
        </div>
      </div>

      {/* 01 — The Brief & The Design */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-2"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              {t(data.briefAndDesign.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-8 max-w-[800px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              {t(data.briefAndDesign.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 max-w-[800px] mb-6"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.125rem",
                lineHeight: 1.7
              }}
            >
              {t(data.briefAndDesign.intro, locale)}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p
              className="text-brand-pine-dark/80 max-w-[800px] mb-12"
              style={{
                fontSize: "1rem",
                lineHeight: 1.7
              }}
            >
              {t(data.briefAndDesign.body, locale)}
            </p>
          </Reveal>

          {/* 1 大图（设计总览）+ 4 空间网格 */}
          {data.briefAndDesign.images.length > 0 ? (
            <>
              <Reveal delay={500}>
                <figure className="mb-8">
                  <div
                    className="w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <div
                      aria-hidden
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url('${data.briefAndDesign.images[0].src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-brand-gold"
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 700
                    }}
                  >
                    {t(data.briefAndDesign.images[0].caption, locale)}
                  </figcaption>
                </figure>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {data.briefAndDesign.images.slice(1).map((img, i) => (
                  <Reveal key={i} delay={600 + i * 80}>
                    <figure>
                      <div
                        className="relative w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
                        style={{ aspectRatio: "16 / 9" }}
                      >
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url('${img.src}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                          }}
                        />
                      </div>
                      <figcaption
                        className="mt-3 text-brand-gold"
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          fontWeight: 700
                        }}
                      >
                        {`0${i + 1}`} · {t(img.caption, locale)}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* 02 — The Materials */}
      <section className="bg-[#efe7d9] py-24">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-2"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              {t(data.materials.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-8 max-w-[800px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              {t(data.materials.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 max-w-[800px] mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.125rem",
                lineHeight: 1.7
              }}
            >
              {t(data.materials.body, locale)}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {data.materials.images.map((img, i) => (
              <Reveal key={i} delay={400 + i * 120}>
                <figure>
                  <div
                    className="relative w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url('${img.src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-brand-gold"
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 700
                    }}
                  >
                    {t(img.caption, locale)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — On Site */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-2"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              {t(data.onSite.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-8 max-w-[800px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              {t(data.onSite.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 max-w-[800px] mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.125rem",
                lineHeight: 1.7
              }}
            >
              {t(data.onSite.body, locale)}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {data.onSite.images.map((img, i) => (
              <Reveal key={i} delay={400 + i * 120}>
                <figure>
                  <div
                    className="relative w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url('${img.src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-brand-gold"
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 700
                    }}
                  >
                    {t(img.caption, locale)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-24 lg:py-32 text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-pine-dark) 0%, #0f2620 100%)"
        }}
      >
        <div className="container-wide max-w-[1200px]">
          <Reveal>
            <p
              className="text-brand-gold mb-6"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              ━━ Ready
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="mb-6 max-w-[820px] text-white"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.05
              }}
            >
              {t(data.finalCta.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="mb-12 max-w-[680px] text-white/80"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                lineHeight: 1.5
              }}
            >
              {t(data.finalCta.subtitle, locale)}
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors"
              >
                <span>{t(data.finalCta.primaryCta, locale)}</span>
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 hover:border-white hover:bg-white/5 transition-colors"
              >
                <span>{t(data.finalCta.secondaryCta, locale)}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

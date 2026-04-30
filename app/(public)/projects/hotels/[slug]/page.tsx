import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { kumasiDetailContent } from "@/content/projects";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

const projectsBySlug = [kumasiDetailContent];

export async function generateStaticParams() {
  return projectsBySlug.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = projectsBySlug.find((p) => p.slug === slug);
  const locale = await getLocale();

  if (!data) {
    return buildMetadata({
      title: { en: "Hotel Projects | Decoropic", zh: "酒店项目 | Decoropic" },
      description: {
        en: "Explore Decoropic's hotel projects across Ghana.",
        zh: "浏览 Decoropic 在加纳的酒店项目。"
      },
      path: "/projects/hotels",
      locale
    });
  }

  return buildMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/projects/hotels/${data.slug}`,
    locale
  });
}

export default async function HotelDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = projectsBySlug.find((p) => p.slug === slug);
  if (!data) notFound();

  const locale = await getLocale();

  return (
    <main className="min-h-screen">
      {/* HERO — 米色 #efe7d9，editorial 居中 */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[1200px]">
          {/* 返回链接 */}
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

          {/* 横线 eyebrow */}
          <Reveal delay={150}>
            <div className="flex items-center gap-4 mb-6">
              <span
                aria-hidden
                className="block h-px w-12 bg-brand-gold"
              />
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

          {/* H1 */}
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

          {/* Subtitle */}
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

          {/* HandDrawnLine wave */}
          <Reveal delay={600}>
            <div className="mb-10 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.6} />
            </div>
          </Reveal>

          {/* Hero image (placeholder — P1b 才接图) */}
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

          {/* Pull quote + author */}
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

      {/* INFO BAR — pine-dark */}
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

      {/* 01 — The Brief */}
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
              {t(data.brief.eyebrow, locale)}
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
              {t(data.brief.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-brand-pine-dark/85 max-w-[760px] mb-12 text-lg leading-relaxed">
              {t(data.brief.body, locale)}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {data.brief.stats.map((stat, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <div className="border-t-2 border-brand-gold pt-5">
                  <p
                    className="text-brand-pine-dark mb-2"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-brand-pine-dark/70"
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 600
                    }}
                  >
                    {t(stat.label, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — The Vision */}
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
              {t(data.vision.eyebrow, locale)}
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
              {t(data.vision.h2, locale)}
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
              {t(data.vision.body, locale)}
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div
              className="w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
              style={{ aspectRatio: "16 / 9" }}
            >
              <div
                aria-hidden
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${data.vision.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — The Spaces (zigzag editorial) */}
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
              {t(data.spaces.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              {t(data.spaces.h2, locale)}
            </h2>
          </Reveal>

          <div className="space-y-16 lg:space-y-24">
            {data.spaces.items.map((space, i) => (
              <Reveal key={space.number} delay={i * 80}>
                <div
                  className={`flex flex-col gap-8 lg:gap-12 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div
                    className="lg:w-1/2 w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <div
                      aria-hidden
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url('${space.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  </div>
                  <div className="lg:w-1/2 w-full flex flex-col">
                    <p
                      className="text-brand-gold mb-3"
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        fontWeight: 700
                      }}
                    >
                      {space.number}
                    </p>
                    {/* 金色边框小标题徽章 */}
                    <div className="inline-block mb-4 self-start">
                      <span
                        className="inline-block px-3.5 py-1.5 border text-[10px] font-medium tracking-[0.18em] uppercase"
                        style={{
                          borderColor: "var(--brand-gold)",
                          color: "var(--brand-gold)",
                          background: "transparent"
                        }}
                      >
                        {t(space.badge, locale)}
                      </span>
                    </div>
                    <h3
                      className="text-brand-pine-dark mb-4"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        fontWeight: 700,
                        lineHeight: 1.15
                      }}
                    >
                      {t(space.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/80 leading-relaxed text-lg">
                      {t(space.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — The Materials */}
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
              className="text-brand-pine-dark mb-12"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {data.materials.items.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 100}
              >
                <div
                  className={`border-l-2 border-brand-gold pl-6 lg:pl-8 py-2 ${
                    i === data.materials.items.length - 1 && data.materials.items.length % 2 === 1
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <h3
                    className="text-brand-pine-dark mb-3"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    {t(item.title, locale)}
                  </h3>
                  <p className="text-brand-pine-dark/80 leading-relaxed">
                    {t(item.body, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — The Build */}
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
              {t(data.build.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              {t(data.build.h2, locale)}
            </h2>
          </Reveal>
          <div className="space-y-10 lg:space-y-12 max-w-[920px]">
            {data.build.items.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex gap-6 lg:gap-10 items-start">
                  <span
                    className="text-brand-gold flex-none"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(2.25rem, 4vw, 3rem)",
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    {item.number}
                  </span>
                  <div className="flex-1 pt-1">
                    <p
                      className="text-brand-gold mb-3"
                      style={{
                        fontSize: "0.875rem",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        fontWeight: 700
                      }}
                    >
                      {t(item.title, locale)}
                    </p>
                    <p
                      className="text-brand-pine-dark"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                        lineHeight: 1.5
                      }}
                    >
                      {t(item.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — The Numbers */}
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
              {t(data.numbers.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              {t(data.numbers.h2, locale)}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {data.numbers.stats.map((stat, i) => (
              <Reveal key={i} delay={i * 120}>
                <div>
                  <p
                    className="text-brand-pine-dark mb-3"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-brand-pine-dark/70"
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 600
                    }}
                  >
                    {t(stat.label, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — A Reflection */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
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
              {t(data.reflection.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-12 max-w-[760px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                fontStyle: "italic"
              }}
            >
              {t(data.reflection.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="max-w-[800px]">
              <p
                className="text-brand-pine-dark mb-8"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                  lineHeight: 1.7
                }}
              >
                {t(data.reflection.body, locale)}
              </p>
              <p
                className="text-brand-gold"
                style={{
                  fontSize: "0.875rem",
                  letterSpacing: "0.16em",
                  fontWeight: 600
                }}
              >
                {t(data.reflection.author, locale)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 — We Can Do Better */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
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
              {t(data.weCanDoBetter.eyebrow, locale)}
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
              {t(data.weCanDoBetter.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 mb-16 max-w-[820px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.125rem",
                lineHeight: 1.7
              }}
            >
              {t(data.weCanDoBetter.intro, locale)}
            </p>
          </Reveal>

          {/* 3 区域 × 2 张对比图 */}
          <div className="space-y-16 lg:space-y-20 mb-16">
            {data.weCanDoBetter.items.map((item, idx) => (
              <Reveal key={idx} delay={400 + idx * 100}>
                <div>
                  <h3
                    className="text-brand-pine-dark mb-6"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                      fontWeight: 600,
                      lineHeight: 1.2
                    }}
                  >
                    {t(item.area, locale)}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* CURRENT */}
                    <div>
                      <div
                        className="relative w-full bg-brand-pine-dark/10 border border-brand-pine-dark/15 overflow-hidden mb-3"
                        style={{ aspectRatio: "4 / 3" }}
                      >
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url('${item.current.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                          }}
                        />
                        <span
                          className="absolute top-3 left-3 px-2.5 py-1 bg-brand-pine-dark/85 text-brand-ivory"
                          style={{
                            fontSize: "0.7rem",
                            letterSpacing: "0.24em",
                            textTransform: "uppercase",
                            fontWeight: 600
                          }}
                        >
                          {t(item.current.label, locale)}
                        </span>
                      </div>
                      <p
                        className="text-brand-pine-dark/70"
                        style={{ fontSize: "0.9rem", lineHeight: 1.5 }}
                      >
                        {t(item.current.caption, locale)}
                      </p>
                    </div>

                    {/* IMPROVED */}
                    <div>
                      <div
                        className="relative w-full bg-brand-pine-dark/10 border border-brand-gold/40 overflow-hidden mb-3"
                        style={{ aspectRatio: "4 / 3" }}
                      >
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url('${item.improved.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                          }}
                        />
                        <span
                          className="absolute top-3 left-3 px-2.5 py-1 bg-brand-gold text-brand-pine-dark"
                          style={{
                            fontSize: "0.7rem",
                            letterSpacing: "0.24em",
                            textTransform: "uppercase",
                            fontWeight: 700
                          }}
                        >
                          {t(item.improved.label, locale)}
                        </span>
                      </div>
                      <p
                        className="text-brand-pine-dark/70"
                        style={{ fontSize: "0.9rem", lineHeight: 1.5 }}
                      >
                        {t(item.improved.caption, locale)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={800}>
            <p
              className="text-brand-gold text-center max-w-[760px] mx-auto"
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                lineHeight: 1.5
              }}
            >
              &ldquo;{t(data.weCanDoBetter.closingQuote, locale)}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* 09 — Behind the Build */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
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
              {t(data.behindTheBuild.eyebrow, locale)}
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
              {t(data.behindTheBuild.h2, locale)}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="text-brand-pine-dark/85 mb-12 max-w-[820px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.125rem",
                lineHeight: 1.7
              }}
            >
              {t(data.behindTheBuild.intro, locale)}
            </p>
          </Reveal>

          {/* Mosaic 不规则网格 — 8 张图 */}
          <Reveal delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {data.behindTheBuild.images.map((img, idx) => {
                const aspectRatio =
                  img.aspect === "landscape"
                    ? "16 / 10"
                    : img.aspect === "portrait"
                      ? "3 / 4"
                      : "1 / 1";
                const colSpan = img.aspect === "landscape" ? "md:col-span-2" : "";

                return (
                  <figure
                    key={idx}
                    className={`group relative overflow-hidden bg-brand-pine-dark/10 border border-brand-pine-dark/15 ${colSpan}`}
                    style={{ aspectRatio }}
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
                    <figcaption
                      className="absolute inset-x-0 bottom-0 p-3 text-brand-ivory opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15, 38, 32, 0.85) 0%, transparent 100%)",
                        fontSize: "0.78rem",
                        letterSpacing: "0.12em",
                        fontWeight: 500
                      }}
                    >
                      {t(img.caption, locale)}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA — pine-dark gradient */}
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
              className="mb-6 max-w-[820px]"
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
                href="/projects/hotels"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 hover:border-white hover:bg-white/5 transition-colors"
              >
                <span>{t(data.finalCta.secondaryCta, locale)}</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

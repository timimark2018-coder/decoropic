import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { localServicesContent } from "@/content/local-services";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Local Services | Decoropic",
      zh: "本地服务 | Decoropic"
    },
    description: {
      en: "Local site measurement, budget-led design support and on-site delivery coordination in Ghana.",
      zh: "提供加纳当地现场测量、预算导向设计支持与项目现场交付协调。"
    },
    path: "/local-services",
    locale
  });
}

// =============================================================================
// SVG Illustrations — inline editorial-style line art, brand-gold stroke
// =============================================================================

function ContainerKeyIllustration() {
  return (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden>
      <rect x="50" y="100" width="240" height="120" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <line x1="100" y1="100" x2="100" y2="220" stroke="var(--brand-gold)" strokeWidth="1.2" />
      <line x1="150" y1="100" x2="150" y2="220" stroke="var(--brand-gold)" strokeWidth="1.2" />
      <line x1="200" y1="100" x2="200" y2="220" stroke="var(--brand-gold)" strokeWidth="1.2" />
      <line x1="240" y1="100" x2="240" y2="220" stroke="var(--brand-gold)" strokeWidth="1.2" />
      <circle cx="280" cy="160" r="8" stroke="var(--brand-gold)" strokeWidth="1.6" />
      <line x1="278" y1="160" x2="295" y2="160" stroke="var(--brand-gold)" strokeWidth="1.6" />
      <line
        x1="310"
        y1="160"
        x2="380"
        y2="160"
        stroke="var(--brand-gold)"
        strokeWidth="1.4"
        strokeDasharray="5 4"
      />
      <circle cx="430" cy="160" r="22" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <circle cx="430" cy="160" r="10" stroke="var(--brand-gold)" strokeWidth="1.4" />
      <line x1="452" y1="160" x2="540" y2="160" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <line x1="510" y1="160" x2="510" y2="172" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <line x1="525" y1="160" x2="525" y2="170" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <line x1="540" y1="160" x2="540" y2="174" stroke="var(--brand-gold)" strokeWidth="1.8" />
      <text
        x="170"
        y="255"
        textAnchor="middle"
        fill="var(--brand-gold)"
        fontSize="13"
        fontFamily="serif"
        fontStyle="italic"
        opacity="0.7"
      >
        arrives
      </text>
      <text
        x="430"
        y="255"
        textAnchor="middle"
        fill="var(--brand-gold)"
        fontSize="13"
        fontFamily="serif"
        fontStyle="italic"
        opacity="0.7"
      >
        we stay
      </text>
    </svg>
  );
}

function ServicesFlowIllustration() {
  const nodes = [80, 240, 400, 560, 720];
  const arrows = [160, 320, 480, 640];
  const labels = ["SITE", "DESIGN", "INSTALL", "SUPPORT", "FOLLOW-UP"];

  return (
    <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden>
      <line x1="80" y1="100" x2="720" y2="100" stroke="var(--brand-gold)" strokeWidth="1.4" opacity="0.5" />
      {nodes.map((cx, i) => (
        <g key={`node-${i}`}>
          <circle cx={cx} cy="100" r="22" fill="var(--brand-ivory)" stroke="var(--brand-gold)" strokeWidth="1.8" />
          <text x={cx} y="106" textAnchor="middle" fill="var(--brand-gold)" fontSize="14" fontFamily="serif">
            {`0${i + 1}`}
          </text>
        </g>
      ))}
      {arrows.map((cx, i) => (
        <path
          key={`arrow-${i}`}
          d={`M ${cx - 15} 100 L ${cx + 15} 100 M ${cx + 10} 95 L ${cx + 15} 100 L ${cx + 10} 105`}
          stroke="var(--brand-gold)"
          strokeWidth="1.2"
          opacity="0.6"
        />
      ))}
      {nodes.map((cx, i) => (
        <text
          key={`label-${i}`}
          x={cx}
          y="160"
          textAnchor="middle"
          fill="var(--brand-pine-dark)"
          fontSize="11"
          fontFamily="serif"
          letterSpacing="0.1em"
        >
          {labels[i]}
        </text>
      ))}
    </svg>
  );
}

function TimelineIllustration() {
  const ticks = [150, 200, 260, 310, 410, 470, 530, 600, 670];
  return (
    <svg viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden>
      <line x1="60" y1="60" x2="740" y2="60" stroke="var(--brand-gold)" strokeWidth="1.6" />
      <circle cx="60" cy="60" r="6" fill="var(--brand-gold)" />
      <text x="60" y="40" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="13" fontFamily="serif" fontWeight="700">
        1999
      </text>
      <text
        x="60"
        y="90"
        textAnchor="middle"
        fill="var(--brand-pine-dark)"
        fontSize="11"
        fontFamily="serif"
        fontStyle="italic"
        opacity="0.7"
      >
        Trade begins
      </text>
      <circle cx="350" cy="60" r="6" fill="var(--brand-gold)" />
      <text x="350" y="40" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="13" fontFamily="serif" fontWeight="700">
        2005
      </text>
      <text
        x="350"
        y="90"
        textAnchor="middle"
        fill="var(--brand-pine-dark)"
        fontSize="11"
        fontFamily="serif"
        fontStyle="italic"
        opacity="0.7"
      >
        Ghana market entry
      </text>
      <circle cx="740" cy="60" r="8" fill="var(--brand-gold)" stroke="var(--brand-pine-dark)" strokeWidth="1.5" />
      <text x="740" y="40" textAnchor="middle" fill="var(--brand-pine-dark)" fontSize="13" fontFamily="serif" fontWeight="700">
        Today
      </text>
      <text
        x="740"
        y="90"
        textAnchor="middle"
        fill="var(--brand-pine-dark)"
        fontSize="11"
        fontFamily="serif"
        fontStyle="italic"
        opacity="0.7"
      >
        Active across markets
      </text>
      {ticks.map((cx, i) => (
        <line
          key={`tick-${i}`}
          x1={cx}
          y1="55"
          x2={cx}
          y2="65"
          stroke="var(--brand-gold)"
          strokeWidth="1"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

// =============================================================================
// Page
// =============================================================================

export default async function LocalServicesPage() {
  const locale = await getLocale();
  const data = localServicesContent;

  return (
    <main className="min-h-screen">
      {/* HERO — 杂志开场页风格（与 Solutions 主页同款） */}
      <section className="bg-[#efe7d9]" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container-wide max-w-[1100px]">
          {/* Eyebrow — 横线 + 文字 + 横线对称 */}
          <Reveal>
            <div className="mb-12 flex items-center gap-4 lg:mb-16">
              <div className="h-px max-w-[80px] flex-1 bg-brand-gold/60" />
              <p
                className="text-brand-gold whitespace-nowrap"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t({ en: "04 — Local Services", zh: "04 — 本地服务" }, locale)}
              </p>
              <div className="h-px flex-1 bg-brand-gold/60" />
            </div>
          </Reveal>

          {/* 大字 H1 — 句子式标题 */}
          <Reveal delay={200}>
            <h1
              className="text-brand-pine-dark mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 6vw, 5.25rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                maxWidth: "900px"
              }}
            >
              {t(
                {
                  en: "Built where the project lives.",
                  zh: "在项目落地之处都能服务。"
                },
                locale
              )}
            </h1>
          </Reveal>

          {/* HandDrawnLine wave 金色 */}
          <Reveal delay={400}>
            <div className="mb-10 max-w-[280px] lg:mb-12">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.6} />
            </div>
          </Reveal>

          {/* 金句 italic */}
          <Reveal delay={600}>
            <p
              className="text-brand-gold mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
                lineHeight: 1.55,
                maxWidth: "720px",
                fontWeight: 400
              }}
            >
              {t(
                {
                  en: "\"We don't just ship containers. We stay where the project lives — through site, design, install, and after.\"",
                  zh: "\"我们不只是发集装箱。我们留在项目落地的现场——从测量、设计、安装，到完成之后。\""
                },
                locale
              )}
            </p>
          </Reveal>

          {/* 签名 */}
          <Reveal delay={800}>
            <p
              className="text-brand-pine-dark/55"
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--sans)",
                letterSpacing: "0.02em",
                fontWeight: 400
              }}
            >
              {t(
                {
                  en: "— The Decoropic Local Team",
                  zh: "— Decoropic 本地团队"
                },
                locale
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 金色信息条 — 紧接 HERO（与 Solutions 详情页一致） */}
      <div className="bg-brand-pine-dark text-brand-ivory" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p
              className="text-brand-gold"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {t({ en: "04 — Local Services", zh: "04 — 本地服务" }, locale)}
            </p>
            <p
              className="text-brand-ivory/70"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500 }}
            >
              {t({ en: "Twenty Years on the Ground", zh: "深耕本地二十年" }, locale)}
            </p>
          </div>
        </div>
      </div>

      {/* 01 — Why It Matters */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[800px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              01 — {locale === "zh" ? "为何重要" : "Why It Matters"}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(data.whyItMatters.title, locale)}
            </h2>
          </Reveal>

          {/* 反 SaaS 金句 — pull-quote */}
          <Reveal delay={400}>
            <blockquote className="mb-16 border-l-2 border-brand-gold pl-6 lg:pl-8">
              <p
                className="text-brand-pine-dark"
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                  fontWeight: 400,
                  lineHeight: 1.4
                }}
              >
                {t(
                  {
                    en: "Most overseas suppliers ship containers and disappear. We don't.",
                    zh: "大多数海外供应商发完集装箱就消失。我们不会。"
                  },
                  locale
                )}
              </p>
            </blockquote>
          </Reveal>

          {/* 集装箱 + 钥匙 SVG */}
          <Reveal delay={500}>
            <div className="mx-auto my-16 w-full max-w-[640px]">
              <ContainerKeyIllustration />
            </div>
          </Reveal>

          {/* 3 个子标题 — Before / During / After */}
          <div className="space-y-10">
            {[
              {
                eyebrow: { en: "Before the order", zh: "下单前" },
                title: { en: "Site measurements come first", zh: "现场测量先于决策" },
                body: {
                  en: "We measure the actual space, not interpret the floor plan. Decisions made on real dimensions, not guesses.",
                  zh: "我们测量真实空间，而不是解读图纸。所有决策基于实际尺寸，不是估算。"
                }
              },
              {
                eyebrow: { en: "During the design", zh: "设计阶段" },
                title: { en: "Budget-aligned recommendations", zh: "预算导向的建议" },
                body: {
                  en: "We work with what you have, not what catalogs sell. Every spec is justified against the brief and the budget.",
                  zh: "我们基于你的预算工作，而不是目录推销。每一项规格都经得起需求与预算的双重检验。"
                }
              },
              {
                eyebrow: { en: "After the container arrives", zh: "集装箱抵达后" },
                title: { en: "On-site guidance and follow-through", zh: "现场指导与长期跟进" },
                body: {
                  en: "Most overseas suppliers disappear after shipping. We stay until the project is complete — and beyond.",
                  zh: "大多数海外供应商发完货就消失。我们陪伴项目直到完成——以及完成之后。"
                }
              }
            ].map((item, i) => (
              <Reveal key={i} delay={700 + i * 150}>
                <div className="grid grid-cols-1 gap-4 border-b border-brand-pine-dark/10 pb-8 last:border-b-0 lg:grid-cols-[180px_1fr] lg:gap-10">
                  <div>
                    <p
                      className="text-brand-gold mb-1"
                      style={{ fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
                    >
                      {t(item.eyebrow, locale)}
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-6">
                    <h3
                      className="text-brand-pine-dark mb-3"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.25
                      }}
                    >
                      {t(item.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/80" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                      {t(item.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Our Disciplines */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide max-w-[900px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              02 — {locale === "zh" ? "我们的方法" : "Our Disciplines"}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(data.localServices.title, locale)}
            </h2>
          </Reveal>

          {/* 流程图 SVG */}
          <Reveal delay={400}>
            <div className="mx-auto mb-20 w-full max-w-[800px]">
              <ServicesFlowIllustration />
            </div>
          </Reveal>

          {/* 5 项 Editorial 列表 */}
          <div className="space-y-10">
            {data.localServices.items.map((item, i) => (
              <Reveal key={i} delay={500 + i * 100}>
                <div className="grid grid-cols-1 gap-6 border-b border-brand-pine-dark/10 pb-8 last:border-b-0 lg:grid-cols-[100px_1fr] lg:gap-10">
                  <div>
                    <p
                      className="text-brand-gold"
                      style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-brand-pine-dark mb-3"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.2
                      }}
                    >
                      {t(item.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/80" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                      {t(item.body, locale)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — By the Numbers */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide max-w-[1100px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              03 — {locale === "zh" ? "数字里" : "By the Numbers"}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-16"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t({ en: "What twenty years builds.", zh: "二十年沉淀的，不只是数字。" }, locale)}
            </h2>
          </Reveal>

          {/* 4 数字 stat 网格 */}
          <div className="mb-20 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {[
              { num: "26+", label: { en: "Years in International Trade", zh: "年国际贸易经验" } },
              { num: "20+", label: { en: "Years Active in Ghana", zh: "年深耕加纳" } },
              { num: "5", label: { en: "Local Service Disciplines", zh: "项本地服务" } },
              { num: "100%", label: { en: "Projects Followed-up Personally", zh: "项目亲自跟进" } }
            ].map((stat, i) => (
              <Reveal key={i} delay={300 + i * 100}>
                <div className="text-center lg:text-left">
                  <p
                    className="text-brand-gold mb-2"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 700,
                      lineHeight: 1
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-brand-pine-dark/70"
                    style={{ fontSize: "0.875rem", letterSpacing: "0.05em", lineHeight: 1.4 }}
                  >
                    {t(stat.label, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 时间轴 SVG */}
          <Reveal delay={700}>
            <div className="mx-auto w-full max-w-[900px]">
              <TimelineIllustration />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — Who It's For */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide max-w-[1000px]">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              04 — {locale === "zh" ? "适合谁" : "Who It's For"}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-pine-dark mb-12"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(data.whoItsFor.title, locale)}
            </h2>
          </Reveal>

          {/* 4 客户画像描述 — 双栏 + 金色左竖线 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {data.whoItsFor.items.map((item, i) => (
              <Reveal key={i} delay={300 + i * 100}>
                <div className="border-l-2 border-brand-gold pl-6">
                  <p className="text-brand-pine-dark/85" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                    {t(item, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — 深绿渐变 + 双 CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-pine-dark) 0%, #14241c 50%, var(--brand-pine-dark) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <div className="container-wide max-w-[800px] text-center">
          <Reveal>
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700 }}
            >
              {locale === "zh" ? "准备开始" : "Ready to begin"}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-brand-ivory mb-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              {t(data.cta.title, locale)}
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <p
              className="mx-auto mb-12 max-w-[560px] text-brand-ivory/80"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              {t(data.cta.body, locale)}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-pine-dark px-8 py-4 transition-colors hover:bg-brand-gold/90"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t({ en: "Book a Site Measurement", zh: "预约现场测量" }, locale)}
              </Link>
              <Link
                href="/#estimator"
                className="border border-brand-ivory/40 text-brand-ivory px-8 py-4 transition-colors hover:bg-brand-ivory/10"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                {t({ en: "Quick Estimate", zh: "在线估价" }, locale)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import type { Locale } from "@/content/types";
import { aboutContent } from "@/content/about";
import { t } from "@/lib/i18n/content";
import { Reveal } from "@/components/ui";

type Props = { locale: Locale };

// Editorial 升级 v2.0 (Battle 9)
// 单列居中编号目录 — 取代之前 12 列 asymmetric grid + 5 张卡片
// 删除：rounded / border / shadow / hover -translate / icon 圆容器 / "Learn more" 假按钮
// 保留：eyebrow + h2 + section-rhythm padding + bg-brand-ivory/50 + Reveal 阶梯
export function AboutWhoWeServe({ locale }: Props) {
  const { whoWeServe } = aboutContent;
  const items = [whoWeServe.primary, ...whoWeServe.secondary];

  return (
    <section id="audience" className="section-rhythm bg-brand-ivory/50">
      <div className="container-wide">
        {/* Header — vertical 排版（与 Founder Story 等章节一致：eyebrow 在 h2 正上方） */}
        <div className="pb-16 lg:pb-20">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-eyebrow-lg">{t(whoWeServe.eyebrow, locale)}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="mt-6 text-brand-pine-dark"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em"
              }}
            >
              {t(whoWeServe.title, locale)}
            </h2>
          </Reveal>
        </div>

        {/* 5 项列表 — 单列居中 + 编号 01-05 + 淡金色横线分隔 */}
        <div className="mx-auto max-w-[860px]">
          {items.map((item, index) => (
            <Reveal key={item.key} delay={120 + index * 100}>
              <article className="grid grid-cols-[auto_1fr] gap-6 border-t border-brand-gold/20 py-8 lg:gap-10 lg:py-10">
                {/* 编号 01-05 */}
                <div
                  className="text-brand-gold"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                    fontWeight: 400,
                    lineHeight: 1,
                    paddingTop: "0.4rem",
                    letterSpacing: "0.02em"
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* 内容 */}
                <div>
                  <h3
                    className="text-brand-pine-dark"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                      fontWeight: 600,
                      lineHeight: 1.25,
                      letterSpacing: "-0.015em"
                    }}
                  >
                    {t(item.label, locale)}
                  </h3>
                  <p
                    className="mt-4 text-brand-pine/75"
                    style={{
                      fontSize: "clamp(1rem, 1.1vw, 1.0625rem)",
                      lineHeight: 1.6,
                      maxWidth: "640px"
                    }}
                  >
                    {t(item.body, locale)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* 底部封口横线 */}
          <div className="border-t border-brand-gold/20" />
        </div>
      </div>
    </section>
  );
}

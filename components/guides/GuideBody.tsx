import Image from "next/image";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { WHATSAPP_LINK } from "@/lib/constants/contact";
import type { GuideFrontmatter } from "@/lib/guides/getGuides";
import { placeholderCard } from "@/lib/placeholder-card";

type GuideBodyProps = {
  content: string;
  frontmatter: GuideFrontmatter;
  /** 正文与 CTA 之间的附加模块(例如酒店指南的 <RecentHotelProject />) */
  children?: React.ReactNode;
};

// Renders the guide markdown VERBATIM (scope note + tariff disclaimers included)
// inside the prose container, then appends a standard project-oriented CTA that
// uses the site's unified WhatsApp link format.
export async function GuideBody({ content, frontmatter, children }: GuideBodyProps) {
  // 一页一个 H1:front-matter 的 h1，没有就取正文第一个 "# " 标题(并从正文里拿掉);
  // 正文里其余的 "# " 一律渲染成 H2。
  const firstHeading = content.match(/^# (.+)$/m);
  const h1 = frontmatter.h1 ?? firstHeading?.[1].trim() ?? frontmatter.title;
  const body = firstHeading && !frontmatter.h1 ? content.replace(firstHeading[0], "") : content;
  // 没有配图的指南用占位卡片(见 lib/placeholder-card.ts)，放在 H1 下面
  const card = placeholderCard(`/guides/${frontmatter.slug}`, frontmatter.targetKeyword ?? frontmatter.title);

  // remark-gfm:第 2 周起的指南大量使用表格。此前没配这个插件 —— 现有 9 篇恰好
  // 一个表格都没有，所以一直没暴露;不配的话 GFM 表格会原样渲染成一堆竖线。
  const { content: rendered } = await compileMDX({
    source: body,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] }
    },
    components: { h1: (props) => <h2 {...props} /> }
  });

  const waText = `Hi Decoropic, I read your guide "${frontmatter.title}" and would like a project material proposal.`;

  return (
    <div className="bg-brand-ivory">
      {/* Article body — verbatim markdown */}
      <section className="py-14 lg:py-20">
        <div className="container-narrow">
          {frontmatter.readingTime && (
            <p
              className="text-brand-gold mb-8"
              style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}
            >
              Guide · {frontmatter.readingTime}
            </p>
          )}
          <h1
            className="text-brand-pine-dark"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4.2vw, 3rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}
          >
            {h1}
          </h1>
          {card && (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[6px]">
              <Image src={card.src} alt={card.alt} fill priority sizes="(max-width: 860px) 100vw, 860px" className="object-cover" />
            </div>
          )}
          {frontmatter.keyTakeaways && frontmatter.keyTakeaways.length > 0 && (
            <div className="mt-8 rounded-[6px] border-l-4 border-brand-gold bg-white p-6 shadow-sm sm:p-8">
              <p
                className="text-brand-gold"
                style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}
              >
                Key takeaways
              </p>
              <ul className="mt-4 space-y-3">
                {frontmatter.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex gap-3 text-base leading-[1.75] text-brand-pine-dark/85">
                    <span aria-hidden className="mt-[0.65em] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-brand-pine-dark/10 pt-5">
                <Link
                  href="/estimator"
                  className="inline-flex items-center justify-center rounded-[4px] bg-brand-pine-dark px-5 py-2.5 text-sm font-semibold text-[#f7f3ec] transition-colors hover:bg-brand-gold hover:text-brand-pine-dark"
                >
                  Get a 60-Second Estimate →
                </Link>
                <a
                  href={WHATSAPP_LINK(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[4px] border border-brand-pine-dark/25 bg-white px-5 py-2.5 text-sm font-semibold text-brand-pine-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  WhatsApp Accra Team
                </a>
              </div>
            </div>
          )}
          <div className="mt-8 prose prose-lg max-w-none overflow-x-auto">{rendered}</div>
        </div>
      </section>

      {children}

      {/* CTA footer — /contact + unified WhatsApp link */}
      <section className="border-t border-brand-line bg-brand-sand py-16">
        <div className="container-narrow text-center">
          <p
            className="text-brand-gold mb-3"
            style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}
          >
            Start your project
          </p>
          <h2
            className="text-brand-pine-dark mb-8"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Get a project material proposal
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              Send your project brief →
            </Link>
            <a
              href={WHATSAPP_LINK(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-pine-dark/25 px-8 py-4 text-brand-pine-dark hover:border-brand-gold transition-colors"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

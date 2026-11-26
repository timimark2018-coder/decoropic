import Image from "next/image";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { PostFrontmatter } from "@/lib/blog/getPosts";

type PostBodyProps = {
  content: string;
  frontmatter: PostFrontmatter;
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GH", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export async function PostBody({ content, frontmatter }: PostBodyProps) {
  const takeaways = frontmatter.keyTakeaways ?? [];
  const { content: rendered } = await compileMDX({
    source: content,
    // remark-gfm:博文里的价格表是 GFM 表格，没有它会原样渲染成一串竖线
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
    components: {
      // 一页只有一个 H1(页首，取 front-matter 的 h1);正文里的 "# " 降为 H2
      h1: (props) => <h2 {...props} />,
      // 「Key takeaways」要点框:条目写在 front-matter，正文里用 <KeyTakeaways /> 决定位置
      KeyTakeaways: () =>
        takeaways.length ? (
          <aside className="not-prose my-10 rounded-[6px] border border-brand-gold/50 bg-[#f7f3ec] px-6 py-6 sm:px-8">
            <p
              className="mb-4 text-brand-gold"
              style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              Key takeaways
            </p>
            <ul className="list-disc space-y-2 pl-5 text-[1rem] leading-[1.7] text-brand-pine-dark/90">
              {takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        ) : null,
      // 文中段情境化转化卡片（减少长文读到一半流失）
      MidArticleCta: ({
        heading = "Planning a Ghana or West Africa project?",
        body = "Run our free Tema duty & container calculator or send your floor plan to our Accra team for a 3-tier Foshan quote."
      }: {
        heading?: string;
        body?: string;
      }) => (
        <aside className="not-prose my-10 rounded-[6px] border-l-4 border-brand-gold bg-[#f7f3ec] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Quick project tools</p>
          <p className="mt-2 text-lg font-bold text-brand-pine-dark">{heading}</p>
          <p className="mt-2 text-sm leading-[1.7] text-brand-pine-dark/75">{body}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/tools/tema-duty-calculator"
              className="inline-flex items-center justify-center rounded-[4px] bg-brand-pine-dark px-5 py-2.5 text-sm font-semibold text-[#f7f3ec] transition-colors hover:bg-brand-gold hover:text-brand-pine-dark"
            >
              Tema Duty &amp; Container Calculator →
            </Link>
            <a
              href="https://wa.me/233592470446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[4px] border border-brand-pine-dark/25 bg-white px-5 py-2.5 text-sm font-semibold text-brand-pine-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              WhatsApp Accra Team
            </a>
          </div>
        </aside>
      )
    }
  });

  return (
    <div className="bg-brand-ivory">
      {/* Hero */}
      <section className="bg-[#efe7d9] py-16 lg:py-24">
        <div className="container-narrow">
          <div className="flex items-center gap-4 mb-6">
            {frontmatter.readingTime && (
              <span
                className="text-brand-gold"
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase"
                }}
              >
                {frontmatter.readingTime}
              </span>
            )}
            <span
              className="block h-px w-6 bg-brand-pine-dark/20"
              aria-hidden
            />
            <time
              dateTime={frontmatter.publishDate}
              className="text-brand-pine-dark/50"
              style={{ fontSize: "0.78rem", letterSpacing: "0.1em" }}
            >
              {formatDate(frontmatter.publishDate)}
            </time>
          </div>

          <h1
            className="text-brand-pine-dark mb-6"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            {frontmatter.h1 ?? frontmatter.title}
          </h1>

          <p
            className="text-brand-pine-dark/75"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)",
              lineHeight: 1.5,
              fontStyle: "italic"
            }}
          >
            {frontmatter.description}
          </p>

          {frontmatter.cover && (
            <figure className="mt-10">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[6px] bg-brand-pine-dark/5">
                <Image
                  src={frontmatter.cover}
                  alt={frontmatter.coverAlt ?? frontmatter.title}
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 860px"
                  className="object-cover"
                />
              </div>
              {frontmatter.coverCaption && (
                <figcaption className="mt-3 text-sm text-brand-pine-dark/60">{frontmatter.coverCaption}</figcaption>
              )}
            </figure>
          )}
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none overflow-x-auto">
            {rendered}
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="border-t border-brand-line bg-brand-sand py-16">
        <div className="container-narrow text-center">
          <p
            className="text-brand-gold mb-3"
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase"
            }}
          >
            Ready to start your project
          </p>
          <h2
            className="text-brand-pine-dark mb-8"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            Get a real number for your project
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              Send your project brief →
            </Link>
            <Link
              href="/estimator"
              className="inline-flex items-center gap-2 rounded-full border border-brand-pine-dark/25 px-8 py-4 text-brand-pine-dark hover:border-brand-gold transition-colors"
            >
              Get an instant estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

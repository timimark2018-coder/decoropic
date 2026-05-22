import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
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
  const { content: rendered } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false }
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
            {frontmatter.title}
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
              href="/#estimator"
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

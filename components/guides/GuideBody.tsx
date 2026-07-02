import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { WHATSAPP_LINK } from "@/lib/constants/contact";
import type { GuideFrontmatter } from "@/lib/guides/getGuides";

type GuideBodyProps = {
  content: string;
  frontmatter: GuideFrontmatter;
};

// Renders the guide markdown VERBATIM (scope note + tariff disclaimers included)
// inside the prose container, then appends a standard project-oriented CTA that
// uses the site's unified WhatsApp link format.
export async function GuideBody({ content, frontmatter }: GuideBodyProps) {
  const { content: rendered } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false }
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
          <div className="prose prose-lg max-w-none overflow-x-auto">{rendered}</div>
        </div>
      </section>

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

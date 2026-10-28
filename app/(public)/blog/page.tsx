import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { getAllPosts } from "@/lib/blog/getPosts";
import { PostCard } from "@/components/blog/PostCard";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: "Renovation & Interior Design Resources for Ghana Projects",
    description:
      "Notes on sourcing, shipping and fitting out projects with Chinese-made materials — prices, lead times and what actually goes wrong, written from live projects.",
    path: "/blog",
    locale
  });
}

export default function BlogPage() {
  // pinned 的文章排在最前，其余仍按发布日期倒序
  const posts = getAllPosts().sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));

  return (
    <>
      {/* Hero */}
      <section className="bg-[#efe7d9] py-20 lg:py-32">
        <div className="container-shell">
          <Link
            href="/"
            className="text-brand-pine-dark/50 hover:text-brand-gold transition-colors inline-block mb-10"
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 700
            }}
          >
            ← Decoropic
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="block h-px w-12 bg-brand-gold" aria-hidden />
            <p
              className="text-brand-gold"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              Resources
            </p>
          </div>
          <h1
            className="text-brand-pine-dark mb-6 max-w-[760px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em"
            }}
          >
            Ghana Interior Project Resources
          </h1>
          <p
            className="text-brand-pine-dark/70 max-w-[600px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.125rem",
              lineHeight: 1.6
            }}
          >
            Real-world guides on renovation budgets, sourcing strategy and
            project delivery in Ghana — built from 20 years on the ground.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 lg:py-24 bg-brand-sand">
        <div className="container-shell">
          {posts.length === 0 ? (
            <p className="text-brand-pine-dark/50 text-lg">
              No articles yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related: global sourcing guides (crawlable path Blog → global cluster) */}
      <section className="py-14 lg:py-16 bg-[#efe7d9] border-t border-brand-gold/15">
        <div className="container-shell">
          <p
            className="text-brand-gold mb-4"
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase"
            }}
          >
            Related
          </p>
          <p
            className="text-brand-pine-dark max-w-[640px]"
            style={{ fontFamily: "var(--serif)", fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            Sourcing materials from China for a project abroad? Read our{" "}
            <Link href="/guides" className="text-brand-gold hover:text-brand-pine-dark underline underline-offset-2">
              in-depth sourcing guides
            </Link>{" "}
            or start at the{" "}
            <Link href="/source-from-china" className="text-brand-gold hover:text-brand-pine-dark underline underline-offset-2">
              Source from China overview
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

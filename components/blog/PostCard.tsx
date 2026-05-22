import Link from "next/link";
import type { PostFrontmatter } from "@/lib/blog/getPosts";

type PostCardProps = {
  post: PostFrontmatter;
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GH", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border border-brand-line bg-brand-ivory hover:border-brand-gold transition-colors duration-300">
      <Link href={`/blog/${post.slug}`} className="block p-8 lg:p-10">
        <div className="flex items-center gap-4 mb-5">
          {post.readingTime && (
            <span
              className="text-brand-gold"
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              }}
            >
              {post.readingTime}
            </span>
          )}
          <span className="block h-px w-6 bg-brand-line" aria-hidden />
          <time
            dateTime={post.publishDate}
            className="text-brand-pine-dark/50"
            style={{ fontSize: "0.78rem", letterSpacing: "0.1em" }}
          >
            {formatDate(post.publishDate)}
          </time>
        </div>

        <h2
          className="text-brand-pine-dark mb-4 group-hover:text-brand-gold transition-colors duration-300"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.01em"
          }}
        >
          {post.title}
        </h2>

        <p
          className="text-brand-pine-dark/75 mb-8"
          style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
        >
          {post.description}
        </p>

        <span
          className="text-brand-gold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase"
          }}
        >
          Read article
          <span aria-hidden>→</span>
        </span>
      </Link>
    </article>
  );
}

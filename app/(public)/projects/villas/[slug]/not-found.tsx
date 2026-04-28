import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#efe7d9] p-8">
      <div className="text-center">
        <h1
          className="text-brand-pine-dark mb-6"
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
        >
          That villa concept doesn&apos;t exist yet.
        </h1>
        <p className="text-brand-pine-dark/70 mb-8 max-w-md mx-auto">
          We&apos;re still shaping more villa concept cases. In the meantime, see what we&apos;ve already built.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 rounded-full bg-brand-pine-dark px-8 py-4 text-white hover:bg-brand-pine-dark/90 transition-colors"
        >
          See all projects →
        </Link>
      </div>
    </main>
  );
}

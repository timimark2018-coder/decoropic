import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { getProjectBySlug } from "@/lib/projects/getProjects";
import { localizePath } from "@/lib/utils/site-links";

// 「Recent hotel project」模块 —— 酒店相关的 4 个页面
// (/solutions/hotels、/source-from-china/hotel-ff-e、两篇酒店指南)共用，指向最新的酒店案例页。
// 换案例只改这里的 slug。
const RECENT_HOTEL_PROJECT = "08-tamale-hotel-room-renovation";

export function RecentHotelProject({ locale }: { locale: Locale }) {
  const project = getProjectBySlug(RECENT_HOTEL_PROJECT);
  if (!project) return null;
  const p = project.frontmatter;
  const href = localizePath(`/projects/${p.slug}`, locale);
  const cover = p.images[0];

  return (
    <section className="border-t border-brand-gold/15 bg-[#f7f3ec] py-14 lg:py-16">
      <div className="container-wide max-w-[1000px]">
        <p
          className="mb-6 text-brand-gold"
          style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          Recent hotel project
        </p>
        <Link href={href} className="group grid items-center gap-8 sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          {cover && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-brand-pine-dark/5">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          )}
          <div>
            {p.cardLabel && (
              <p
                className="text-brand-pine-dark/60"
                style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {p.cardLabel}
              </p>
            )}
            <h2
              className="mt-2 text-brand-pine-dark transition-colors group-hover:text-brand-gold"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.375rem, 2.4vw, 1.75rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              {p.h1}
            </h2>
            <p className="mt-3 text-sm leading-[1.75] text-brand-pine-dark/75">{p.description}</p>
            <span
              className="mt-5 inline-flex items-center gap-2 text-brand-gold"
              style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              See the room design <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

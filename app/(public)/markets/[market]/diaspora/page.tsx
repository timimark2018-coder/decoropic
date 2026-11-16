import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentMetadata, ContentRoute } from "@/lib/content-pages/route";

// /markets/ghana/diaspora —— 正文在 content/markets/ghana/diaspora.md(第 4 批内容包)。
// 只有加纳有这个子页，其余市场一律 404。
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ market: "ghana" }];
}

export async function generateMetadata({ params }: { params: Promise<{ market: string }> }): Promise<Metadata> {
  const { market } = await params;
  if (market !== "ghana") return {};
  return contentMetadata("markets", "ghana/diaspora");
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  if (market !== "ghana") notFound();
  return <ContentRoute group="markets" slug="ghana/diaspora" />;
}

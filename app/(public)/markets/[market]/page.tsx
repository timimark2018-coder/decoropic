import type { Metadata } from "next";
import { contentMetadata, ContentRoute } from "@/lib/content-pages/route";
import { getContentSlugs } from "@/lib/content-pages/getContentPage";

// 正文在 content/markets/*.md，由第 1 周内容包入库。
export async function generateStaticParams() {
  return getContentSlugs("markets").map((market) => ({ market }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ market: string }>;
}): Promise<Metadata> {
  const { market } = await params;
  return contentMetadata("markets", market);
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  return <ContentRoute group="markets" slug={market} />;
}

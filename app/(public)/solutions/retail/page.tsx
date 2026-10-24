import type { Metadata } from "next";
import { contentMetadata, ContentRoute } from "@/lib/content-pages/route";

// 正文在 content/solutions/retail.md，由第 1 周内容包入库。
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata("solutions", "retail");
}

export default async function Page() {
  return <ContentRoute group="solutions" slug="retail" />;
}

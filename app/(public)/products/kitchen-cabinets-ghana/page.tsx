import type { Metadata } from "next";
import { contentMetadata, ContentRoute } from "@/lib/content-pages/route";

// 正文在 content/products/kitchen-cabinets-ghana.md，由第 4 批内容包入库。
// 静态路由优先于 /products/[category](那边读 content/categories/*.json)。
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata("products", "kitchen-cabinets-ghana");
}

export default async function Page() {
  return <ContentRoute group="products" slug="kitchen-cabinets-ghana" />;
}

import fs from "node:fs";
import path from "node:path";

// 没有真实配图的页面先用品牌色纯色卡片(标题 + Decoropic 字标)作首图。
// 卡片由 scripts/make-placeholder-cards.mjs 生成到 public/cards/，清单在 docs/missing-images.md。
// 页面一旦配上真实图(front-matter 的 cover、route 里的 HERO_IMAGES)，就不再走这里;
// 删掉对应的卡片文件也会让它自动消失。

/** "/solutions/hotels" → public/cards/solutions-hotels.webp(存在才返回) */
export function placeholderCard(urlPath: string, alt: string): { src: string; alt: string } | undefined {
  const file = `${urlPath.replace(/^\//, "").replace(/\//g, "-")}.webp`;
  if (!fs.existsSync(path.join(process.cwd(), "public", "cards", file))) return undefined;
  return { src: `/cards/${file}`, alt };
}

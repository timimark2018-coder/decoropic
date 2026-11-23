#!/usr/bin/env node
// 给还没有真实配图的页面生成品牌色占位首图(1600×900 webp)，并重写 docs/missing-images.md。
//
//   node scripts/make-placeholder-cards.mjs
//
// 页面清单写在下面 PAGES 里;标题与主词从各页的内容文件读取。
// 补上真实图以后:把那一页从 PAGES 删掉、删掉 public/cards/ 里对应的文件，再跑一次。

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PINE = "#112824";
const GOLD = "#ae9260";
const IVORY = "#f7f3ec";

// [URL, 内容文件, 卡片上的分类字样, 内容包当初的配图建议(没有就留空)]
const PAGES = [
  ["/blog/kitchen-cabinets-ghana-cost-2026", "content/blog/kitchen-cabinets-ghana-cost-2026.mdx", "Blog · 2026 cost guide", "Modern L-shaped kitchen with flat laminate doors in an Accra villa"],
  ["/blog/building-materials-ghana-import-vs-local-2026", "content/blog/building-materials-ghana-import-vs-local-2026.mdx", "Blog", ""],
  ["/blog/how-to-choose-floor-tiles-ghana-climate", "content/blog/how-to-choose-floor-tiles-ghana-climate.mdx", "Blog", ""],
  ["/blog/importing-building-materials-china-ghana-guide", "content/blog/importing-building-materials-china-ghana-guide.mdx", "Blog", ""],
  ["/products/kitchen-cabinets-ghana", "content/products/kitchen-cabinets-ghana.md", "Products · Ghana", "L-shaped two-tone kitchen with quartz worktop in a Ghana villa"],
  ["/markets/ghana/diaspora", "content/markets/ghana/diaspora.md", "Markets · Ghana", "Client abroad reviewing a 3D kitchen design for their Ghana house on a video call"],
  ["/fr/cote-d-ivoire", "content/fr/cote-d-ivoire.md", "Afrique de l'Ouest", "Cuisine sur mesure installée dans une villa, vue d'ensemble des façades et du plan de travail"],
  ["/solutions/offices", "content/solutions/offices.md", "Solutions", ""],
  ["/solutions/retail", "content/solutions/retail.md", "Solutions", ""],
  ["/markets/west-africa", "content/markets/west-africa.md", "Markets", ""],
  ["/markets/middle-east", "content/markets/middle-east.md", "Markets", ""],
  ["/markets/southeast-asia", "content/markets/southeast-asia.md", "Markets", ""],
  ["/markets/caribbean-latin-america", "content/markets/caribbean-latin-america.md", "Markets", ""],
  ["/guides/ship-furniture-china-to-ghana", "content/guides/ship-furniture-china-to-ghana.md", "Guide", "Sofa packed with foam corner protection before shipping from China to Ghana"],
  ["/guides/china-to-tema-shipping-cost", "content/guides/china-to-tema-shipping-cost.md", "Guide", "Cost components of shipping a container from China to Tema"],
  ["/guides/qc-before-shipping-checklist", "content/guides/qc-before-shipping-checklist.md", "Guide", "Quality inspection of custom wardrobe before shipping from China"]
];

function frontMatter(file) {
  const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1];
  return {
    title: get("h1") || get("title"),
    keyword: get("primary_keyword") || get("focusKeyword") || get("targetKeyword") || get("title")
  };
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function wrap(text, maxChars) {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    if ((line + " " + word).trim().length > maxChars && line) {
      lines.push(line);
      line = word;
    } else line = (line + " " + word).trim();
  }
  if (line) lines.push(line);
  return lines;
}

function svg(title, eyebrow) {
  let size = 84;
  let lines = wrap(title, 30);
  if (lines.length > 4) {
    size = 68;
    lines = wrap(title, 38);
  }
  const lh = Math.round(size * 1.18);
  const top = 450 - ((lines.length - 1) * lh) / 2;
  const text = lines
    .map((l, i) => `<text x="120" y="${top + i * lh}" font-family="Georgia, serif" font-weight="700" font-size="${size}" fill="${IVORY}">${esc(l)}</text>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="${PINE}"/>
  <rect x="60" y="60" width="1480" height="780" fill="none" stroke="${GOLD}" stroke-opacity="0.45" stroke-width="2"/>
  <text x="120" y="170" font-family="Helvetica Neue, Arial, sans-serif" font-weight="700" font-size="26" letter-spacing="7" fill="${GOLD}">${esc(eyebrow.toUpperCase())}</text>
  ${text}
  <line x1="120" y1="730" x2="220" y2="730" stroke="${GOLD}" stroke-width="3"/>
  <text x="120" y="790" font-family="Helvetica Neue, Arial, sans-serif" font-weight="700" font-size="34" letter-spacing="14" fill="${GOLD}">DECOROPIC</text>
</svg>`;
}

const rows = [];
for (const [url, file, eyebrow, suggestion] of PAGES) {
  const { title, keyword } = frontMatter(file);
  const out = `${url.replace(/^\//, "").replace(/\//g, "-")}.webp`;
  await sharp(Buffer.from(svg(title, eyebrow))).webp({ quality: 88 }).toFile(path.join(ROOT, "public", "cards", out));
  rows.push(`| ${url} | public/cards/${out} | ${keyword} | ${suggestion || "—"} |`);
  console.log("card", out);
}

const doc = `# 待补真实图清单

由 \`node scripts/make-placeholder-cards.mjs\` 生成，请勿手改。

下面这些页面暂时用品牌色占位卡片(标题 + Decoropic 字标)作首图，alt 写的是页面主词。
补上真实图后:页面配上图(博文写 front-matter 的 \`cover\`，内容页加进 \`lib/content-pages/route.tsx\` 的 HERO_IMAGES，
法语页加进 \`app/(public)/fr/[country]/page.tsx\` 的 HERO_IMAGES，指南在正文里插图)，
再把该行从脚本的 PAGES 删掉、删掉 public/cards/ 里的文件，重新运行脚本。

共 **${rows.length}** 页。

| 页面 | 占位卡片 | alt(页面主词) | 内容包当初的配图建议 |
|---|---|---|---|
${rows.join("\n")}
`;
fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "docs/missing-images.md"), doc);
console.log(`docs/missing-images.md: ${rows.length} 页`);

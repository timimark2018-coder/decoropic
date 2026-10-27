#!/usr/bin/env node
// 生成 docs/url-inventory.md:现有全部 guides 的 URL 清单，供后续新页去重。
//
// 去重主要看两列:slug(URL 撞车)和 targetKeyword(关键词互相抢排名)。
// 新内容包入库前跑一次:node scripts/url-inventory.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.decoropic.com";
const GUIDES = path.join(ROOT, "content/guides");
const OUT = path.join(ROOT, "docs/url-inventory.md");

const rows = fs
  .readdirSync(GUIDES)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(GUIDES, f), "utf8"));
    return {
      slug: data.slug || f.replace(/\.md$/, ""),
      title: data.title || "",
      category: data.category || "Global guides",
      keyword: data.targetKeyword || "",
      lastmod: data.lastmod ? String(data.lastmod).slice(0, 10) : ""
    };
  });

const ORDER = ["Global guides", "Ghana guides", "West Africa guides"];
const rank = (category) => (ORDER.includes(category) ? ORDER.indexOf(category) : ORDER.length);
rows.sort((a, b) => rank(a.category) - rank(b.category) || a.slug.localeCompare(b.slug));

// 关键词重复检查:同一 targetKeyword 出现两次以上就列出来
const byKeyword = new Map();
for (const r of rows) {
  const k = r.keyword.trim().toLowerCase();
  if (!k) continue;
  byKeyword.set(k, [...(byKeyword.get(k) || []), r.slug]);
}
const dupes = [...byKeyword].filter(([, v]) => v.length > 1);

const esc = (s) => String(s).replace(/\|/g, "\\|");
let md = `# Guides URL 清单

由 \`node scripts/url-inventory.mjs\` 生成,请勿手改 —— 新内容包入库前重新运行一次。

- 共 **${rows.length}** 篇 guide,每篇都有英文与 \`/zh\` 两个 URL(中文版 = 英文 URL 前加 \`/zh\`)
- 新页去重看两列:**slug**(URL 不能撞)与 **targetKeyword**(主关键词不要重复，否则自家页面互相抢排名)
- targetKeyword 重复:${dupes.length ? dupes.map(([k, v]) => `\`${k}\` → ${v.join("、")}`).join(";") : "无"}

`;

const categories = [...ORDER, ...new Set(rows.map((r) => r.category).filter((c) => !ORDER.includes(c)))];
for (const cat of categories) {
  const list = rows.filter((r) => r.category === cat);
  if (!list.length) continue;
  md += `## ${cat}(${list.length})\n\n| URL | Title | targetKeyword | lastmod |\n|---|---|---|---|\n`;
  for (const r of list) {
    md += `| ${SITE}/guides/${r.slug} | ${esc(r.title)} | ${esc(r.keyword)} | ${r.lastmod} |\n`;
  }
  md += "\n";
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md);
console.log(`docs/url-inventory.md: ${rows.length} guides · targetKeyword 重复 ${dupes.length}`);

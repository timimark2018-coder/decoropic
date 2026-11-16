#!/usr/bin/env node
// 把 sitemap 里的 URL 推给 IndexNow(Bing、Yandex 等共用一个入口)。
//
//   node scripts/indexnow.mjs --all                 推 sitemap 里全部 URL(首次手动推送用)
//   node scripts/indexnow.mjs --changed <state>     只推 lastmod 有变化或新出现的 URL，
//                                                   然后把这次的 lastmod 写回 <state>
//   加 --dry-run 只打印，不推送
//
// --changed 由 .github/workflows/indexnow.yml 在每次生产部署成功后调用，
// <state> 存在 Actions 缓存里。没有 <state>(第一次)时只记录基线，不推送 ——
// 全站已经用 --all 推过一次。
// 没有 lastmod 的手写静态页不会被判定为「有变化」，这是有意的:没有可查证的日期。

import fs from "node:fs";

const HOST = "www.decoropic.com";
const KEY = "b35ad38eee7963fc3b8e69f2bb88755a";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const mode = args.includes("--all") ? "all" : args.includes("--changed") ? "changed" : null;
const statePath = mode === "changed" ? args[args.indexOf("--changed") + 1] : null;
if (!mode || (mode === "changed" && !statePath)) {
  console.error("用法: --all | --changed <state.json> [--dry-run]");
  process.exit(2);
}

async function readSitemap() {
  // 加查询参数绕过 CDN 缓存，拿到刚部署的版本
  const res = await fetch(`${SITEMAP}?indexnow=${Date.now()}`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  const entries = {};
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (loc) entries[loc] = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? "";
  }
  return entries;
}

async function push(urlList) {
  const body = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList };
  if (dryRun) {
    console.log(`[dry-run] 将推送 ${urlList.length} 条`, urlList.slice(0, 10));
    return;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body)
  });
  console.log(`IndexNow ${res.status} ${res.statusText} · ${urlList.length} 条`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    process.exit(1);
  }
}

const current = await readSitemap();
const urls = Object.keys(current);
console.log(`sitemap: ${urls.length} 条`);

if (mode === "all") {
  await push(urls);
} else {
  const previous = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, "utf8")) : null;
  if (!previous) {
    console.log("没有上一次的记录 —— 只保存基线，不推送");
  } else {
    const changed = urls.filter((u) => !(u in previous) || previous[u] !== current[u]);
    console.log(`有变化: ${changed.length} 条`, changed);
    if (changed.length) await push(changed);
  }
  if (!dryRun) fs.writeFileSync(statePath, JSON.stringify(current, null, 2));
}

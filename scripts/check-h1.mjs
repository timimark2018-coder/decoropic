#!/usr/bin/env node
// 构建期检查:sitemap 里的每个页面必须恰好有 1 个 <h1>，否则构建失败。
//
// 页面都是按请求渲染的(语言从请求头来)，构建产物里没有现成的 HTML，
// 所以这里在 next build 之后起一个本地 next start，把 sitemap 里的 URL 换成本地地址逐个抓取。
// package.json 的 build 脚本在 next build 之后调用它;单独跑:node scripts/check-h1.mjs

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = process.env.H1_CHECK_PORT || "3999";
const BASE = `http://127.0.0.1:${PORT}`;
const SITE = "https://www.decoropic.com";

const server = spawn(path.join(ROOT, "node_modules/.bin/next"), ["start", "-p", PORT, "-H", "127.0.0.1"], {
  cwd: ROOT,
  stdio: ["ignore", "ignore", "inherit"],
  env: { ...process.env, NODE_ENV: "production" }
});
const stop = () => server.kill("SIGTERM");

async function waitForServer() {
  for (let i = 0; i < 120; i++) {
    try {
      const res = await fetch(`${BASE}/sitemap.xml`);
      if (res.ok) return res.text();
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("next start 没有在 60 秒内就绪");
}

try {
  const sitemap = await waitForServer();
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, "") || "/");
  const bad = [];
  const queue = [...paths];
  async function worker() {
    while (queue.length) {
      const p = queue.shift();
      const res = await fetch(`${BASE}${p}`);
      const html = await res.text();
      const count = (html.match(/<h1[\s>]/g) || []).length;
      if (res.status !== 200 || count !== 1) bad.push(`${p} → HTTP ${res.status}, ${count} 个 <h1>`);
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  if (bad.length) {
    console.error(`\n✗ H1 检查失败:${bad.length} 个页面不是恰好 1 个 <h1>`);
    for (const line of bad.sort()) console.error(`  ${line}`);
    stop();
    process.exit(1);
  }
  console.log(`✓ H1 检查通过:${paths.length} 个页面各有 1 个 <h1>`);
  stop();
} catch (err) {
  console.error(`✗ H1 检查出错:${err.message}`);
  stop();
  process.exit(1);
}

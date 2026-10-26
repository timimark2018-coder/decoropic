#!/usr/bin/env node
// 维护 content/{guides,solutions,markets}/*.md 的 front-matter `lastmod` 字段。
//
// sitemap 的 lastmod 读的就是这个字段。之所以不读文件系统时间:git 不保存 mtime，
// Vercel 每次检出后所有文件的 mtime 都是部署时刻，线上 sitemap 因此全是同一个时间。
//
// 两种用法:
//   node scripts/update-lastmod.mjs --backfill   每个文件取 git log 的最后提交日期(一次性回填)
//   node scripts/update-lastmod.mjs --staged     提交前钩子用:暂存区里正文真的改了的文件，
//                                                lastmod 改成今天并重新 git add
//
// --staged 只看正文:如果和 HEAD 相比只差 lastmod 这一行，不改日期 —— 否则改日期这件事
// 本身又会触发改日期，回填提交也会把所有文件刷成今天。

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
const DIRS = ["content/guides", "content/solutions", "content/markets"];
const mode = process.argv[2];

function git(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" });
}

function isContentFile(rel) {
  return rel.endsWith(".md") && DIRS.some((d) => rel.startsWith(`${d}/`));
}

function setLastmod(text, date) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return text;
  let fm = m[1];
  fm = /^lastmod:/m.test(fm)
    ? fm.replace(/^lastmod:.*$/m, `lastmod: "${date}"`)
    : `${fm}\nlastmod: "${date}"`;
  return `---\n${fm}\n---\n` + text.slice(m[0].length);
}

/** 去掉 lastmod 行后的内容，用来判断正文是否真的变了。 */
function withoutLastmod(text) {
  return text.replace(/^lastmod:.*\n/m, "");
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

if (mode === "--backfill") {
  let n = 0;
  for (const dir of DIRS) {
    for (const f of fs.readdirSync(path.join(ROOT, dir)).filter((x) => x.endsWith(".md"))) {
      const rel = `${dir}/${f}`;
      const date = git(["log", "-1", "--format=%cs", "--", rel]).trim() || today();
      const file = path.join(ROOT, rel);
      const before = fs.readFileSync(file, "utf8");
      const after = setLastmod(before, date);
      if (after !== before) {
        fs.writeFileSync(file, after);
        n += 1;
      }
    }
  }
  console.log(`lastmod backfilled: ${n} file(s)`);
} else if (mode === "--staged") {
  const staged = git(["diff", "--cached", "--name-only", "--diff-filter=AM"])
    .split("\n")
    .filter(isContentFile);

  for (const rel of staged) {
    const file = path.join(ROOT, rel);
    const current = fs.readFileSync(file, "utf8");
    let previous = "";
    try {
      previous = git(["show", `HEAD:${rel}`]);
    } catch {
      previous = ""; // 新文件
    }
    if (previous && withoutLastmod(previous) === withoutLastmod(current)) continue;

    const updated = setLastmod(current, today());
    if (updated !== current) {
      fs.writeFileSync(file, updated);
      git(["add", "--", rel]);
      console.log(`lastmod → ${today()}: ${rel}`);
    }
  }
} else {
  console.error("usage: node scripts/update-lastmod.mjs --backfill | --staged");
  process.exit(1);
}

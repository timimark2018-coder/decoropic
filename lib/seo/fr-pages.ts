import { getAllContentPages } from "@/lib/content-pages/getContentPage";
import { siteConfig } from "@/lib/utils/constants";

// 法语试水页(content/fr/*.md → /fr/<slug>)。
//
// 三页对应同一个英文页 /markets/west-africa。同一语言不能在 hreflang 里出现三次，
// 所以每页用带地区的代码(fr-CI / fr-TG / fr-SN，写在 front-matter 的 hreflang)，
// 英文页与三页组成一组，互相列出全部成员，x-default 指英文页。
// 这组页面不走 /zh 的 noindex 开关 —— 它们本来就是翻译好的。

/** 某个英文页路径对应的整组 hreflang;没有法语页时返回 null。 */
export function frHreflangCluster(enPath: string): Record<string, string> | null {
  const base = siteConfig.siteUrl;
  const fr = getAllContentPages("fr").filter((p) => p.hreflangEn === enPath && p.hreflang);
  if (fr.length === 0) return null;
  return {
    en: `${base}${enPath}`,
    ...Object.fromEntries(fr.map((p) => [p.hreflang as string, `${base}${p.url}`])),
    "x-default": `${base}${enPath}`
  };
}

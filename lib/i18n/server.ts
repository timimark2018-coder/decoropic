import { headers } from "next/headers";
import type { Locale } from "@/content/types";

const supportedLocales: Locale[] = ["en", "zh"];

// 语言由 URL 决定（middleware 把 /zh/* 重写后写入 x-locale），cookie 不再参与。
// 一个 URL 只对应一种语言，中文版因此有了自己可索引的地址，也不再和英文版互为重复内容。
export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale");

  if (locale && supportedLocales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return "en";
}

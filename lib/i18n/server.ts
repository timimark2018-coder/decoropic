import { cookies } from "next/headers";
import type { Locale } from "@/content/types";

const supportedLocales: Locale[] = ["en", "zh"];

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;

  if (locale && supportedLocales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return "en";
}

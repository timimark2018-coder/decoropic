// ─── UTM parameter capture & sessionStorage persistence ──────────────────────
// Call captureUtm() once on page load; use getStoredUtm() in analytics events
// to automatically enrich every event with the originating campaign context.
//
// Ghana market: tracks Google Ads, Meta campaigns, and organic search sources.

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term"
] as const;

const SESSION_KEY = "decoropic_utm";
const REFERRER_KEY = "decoropic_referrer";

export type UtmParam = (typeof UTM_PARAMS)[number];
export type UtmData = Partial<Record<UtmParam, string>>;

/**
 * Read UTM params from the current URL and persist to sessionStorage.
 * Call once on page load. No-op if no UTM params are present or window
 * is unavailable.
 */
export function captureUtm(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utm: UtmData = {};
  let hasUtm = false;

  for (const key of UTM_PARAMS) {
    const val = params.get(key);
    if (val) {
      utm[key] = val;
      hasUtm = true;
    }
  }

  // Only overwrite if this page load actually carries UTM params (preserve
  // the original entry-point UTM if the user navigates to additional pages).
  if (hasUtm) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(utm));
  }

  // Always capture referrer on first landing (not overwritten on navigation)
  if (!sessionStorage.getItem(REFERRER_KEY) && document.referrer) {
    sessionStorage.setItem(REFERRER_KEY, document.referrer);
  }
}

/**
 * Retrieve stored UTM params from sessionStorage.
 * Returns an empty object if nothing was stored.
 */
export function getStoredUtm(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as UtmData) : {};
  } catch {
    return {};
  }
}

/**
 * Retrieve the original referrer captured on first landing.
 */
export function getStoredReferrer(): string {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(REFERRER_KEY) ?? "";
}

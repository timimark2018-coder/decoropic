// ─── Meta Pixel event SDK ────────────────────────────────────────────────────
// Thin wrapper around the global fbq() function injected by MetaPixel component.
// All functions are safe to call from SSR — they no-op when window is absent.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function fbqAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

/** Standard pixel event — e.g. "Lead", "CompleteRegistration", "Contact" */
export function pixelTrack(
  event: string,
  params?: Record<string, unknown>
): void {
  if (!fbqAvailable()) return;
  if (params) {
    window.fbq!("track", event, params);
  } else {
    window.fbq!("track", event);
  }
}

/** Custom event (not a Meta standard event) */
export function pixelTrackCustom(
  event: string,
  params?: Record<string, unknown>
): void {
  if (!fbqAvailable()) return;
  if (params) {
    window.fbq!("trackCustom", event, params);
  } else {
    window.fbq!("trackCustom", event);
  }
}

/** Grant analytics consent (called when user accepts cookie banner) */
export function pixelConsentGrant(): void {
  if (!fbqAvailable()) return;
  window.fbq!("consent", "grant");
}

/** Revoke analytics consent (called when user declines cookie banner) */
export function pixelConsentRevoke(): void {
  if (!fbqAvailable()) return;
  window.fbq!("consent", "revoke");
}

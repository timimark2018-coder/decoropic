# P0 SEO Fix · Completion Record

**Date:** 2026-05-21
**PR:** #1 (squash merged to main as commit 7c6f7c7)
**Verification:** scripts/verify_p0.sh → 42/42 ✅

## Fixes deployed
1. `metadataBase` now reads `NEXT_PUBLIC_SITE_URL` (was leaking `localhost:3000` to production canonical & og:url across all pages)
2. `og:locale` changed from `en_US` to `en_GH` (Ghana market)
3. Per-page `alternates.canonical` added for /, /solutions, /products, /projects, /local-services, /about, /contact
4. hreflang `en-GH` + `x-default` added (see note below on zh-CN)
5. Organization JSON-LD injected on root layout with real company info (Foshan Home Style Import and Export Co., Ltd, tax ID 91440604572379052M, address, contact)
6. `app/sitemap.ts` and `app/robots.ts` validated (Next.js programmatic, not static files)

## Verification result
- 42 checks total: basic reachability ×7, canonical ×7, og:url ×7, og:locale ×7, sitemap/robots ×4, JSON-LD ×4, hreflang ×3, security ×3
- 42/42 pass after script correction (see "Known exclusion" below)

## Known exclusion: zh-CN hreflang
- Project uses cookie-based language switching (`NEXT_LOCALE` cookie); there are no `/zh/*` routes.
- Emitting `hreflang="zh-CN" href="/zh/..."` would point to 404s, which Google treats as a broken hreflang cluster — worse than omitting the tag.
- Therefore `lib/seo/metadata.ts` intentionally outputs only `en-GH` + `x-default`.
- The verification script's zh-CN check is reversed accordingly (Section 7).
- To re-enable: build `app/[locale]/...` routes first (Phase 1.5 work), then flip the check back.

## Vercel environment
- Production: `NEXT_PUBLIC_SITE_URL=https://www.decoropic.com`
- Default locale env: `NEXT_PUBLIC_DEFAULT_LOCALE=en_GH`

## Next phase (not part of P0)
- Facebook OG cache refresh (Sharing Debugger)
- Google Search Console: resubmit sitemap
- Cloudflare Worker reverse proxy: decolovely.com → decoropic.com/catalog
- OG default image (1200×630) to `public/og/default.jpg`
- GTM container ID env injection

## Files of record
- Verification script: `scripts/verify_p0.sh`
- Latest verification log: `/tmp/decoropic_p0_<timestamp>.log` (local, not committed)

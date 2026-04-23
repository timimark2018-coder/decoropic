# Decoropic / Decolovely

Unified codebase for:

- `Decoropic` as the premium project-focused brand website
- `Decolovely.com` as the product center / catalog experience

The Next.js app powers the Decoropic brand site and shared lead flows. The bundled WordPress theme in [`wordpress-theme/decolovely-product-center`](/Users/Administrator/Documents/New%20project/decoropic-decolovely/wordpress-theme/decolovely-product-center) refreshes Decolovely.com so both experiences share a consistent visual and CTA system.

## Current scope

- Decoropic pages: `/`, `/solutions`, `/projects`, `/ghana-services`, `/about`, `/contact`
- Villa Project Budget Estimator with preview + gated detailed result
- Contact form with optional file upload handling
- Shared CTA paths into project inquiry, estimator and WhatsApp
- Decolovely WordPress theme refresh for homepage, product archive and product detail

## Local setup

Install dependencies with Node.js 20 or newer:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Important environment variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PRODUCT_CENTER_URL`
- `NEXT_PUBLIC_CONTACT_WHATSAPP`
- `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_LOCATION`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_STORAGE_BUCKET`
- `SUPABASE_STORAGE_PUBLIC`
- `ALLOW_LOCAL_UPLOADS_IN_PRODUCTION`
- `GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`
- `ADMIN_BASIC_USER`
- `ADMIN_BASIC_PASSWORD`

## Commands

```bash
npm run dev
npm run lint
npm run test
npm run typecheck
npm run build
npm run verify
npm run package:deploy
npm run package:theme
```

## Deployment artifacts

- Decoropic app deploy package: `decoropic-app-deploy.zip`
- Decolovely WordPress theme package: `decolovely-product-center.zip`

Detailed deployment steps:

- [DEPLOYMENT.md](/Users/Administrator/Documents/New%20project/decoropic-decolovely/DEPLOYMENT.md)

## Estimator + Contact capture

- Estimator preview endpoint: `/api/estimator/preview`
- Estimator lead endpoint: `/api/estimator/lead`
- Contact endpoint: `/api/contact`
- Health endpoint: `/api/health`

When Supabase or another backend is not configured for these new flows, submissions are written locally into `.submissions/`.

## WordPress theme

The Decolovely refresh theme lives at:

- [`wordpress-theme/decolovely-product-center`](/Users/Administrator/Documents/New%20project/decoropic-decolovely/wordpress-theme/decolovely-product-center)

Key templates:

- `front-page.php`
- `archive-product.php`
- `single-product.php`
- `style.css`

You can point brand-site bridges with WordPress filters such as:

- `decolovely_brand_site_url`
- `decolovely_contact_email`
- `decolovely_contact_phone`
- `decolovely_contact_location`
- `decolovely_whatsapp_number`

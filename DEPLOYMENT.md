# Deployment Guide

This project deploys as two coordinated sites:

1. `Decoropic` Next.js app
2. `Decolovely.com` WordPress theme

## 1. Decoropic app deployment

### Recommended target

- A VPS or Node.js hosting environment with persistent disk access
- Node.js `20+`

### Build locally

```bash
npm install
cp .env.example .env.local
npm run verify
npm run package:deploy
```

Output package:

- `decoropic-app-deploy.zip`
- production env template: `deploy/env/decoropic.production.env.example`

### Server contents

The package contains:

- standalone Next.js server
- `.next/static`
- `public`
- `node_modules`
- `package.json`
- `package-lock.json`
- `.env.example`

### Server start

After unzipping on the server:

```bash
cp .env.example .env.production
node server.js
```

Or use a process manager:

```bash
pm2 start server.js --name decoropic
```

You can also follow the step-by-step checklist in:

- `deploy/CHECKLIST.md`

### Required environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PRODUCT_CENTER_URL`
- `NEXT_PUBLIC_CONTACT_WHATSAPP`
- `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_LOCATION`

### Optional analytics variables

- `GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`

### Lead capture note

This build currently stores estimator and contact submissions under `.submissions/`.
Deploy on an environment with persistent writable disk if you want to keep this mode in production.

Health check endpoint:

- `/api/health`

## 2. Decolovely WordPress deployment

Theme package:

- `decolovely-product-center.zip`

### Install steps

1. Upload the zip in WordPress Appearance > Themes
2. Activate the theme
3. Make sure WooCommerce is active
4. Set the shop page and product categories
5. Configure these filters or equivalent site settings if needed:
   - `decolovely_brand_site_url`
   - `decolovely_contact_email`
   - `decolovely_contact_phone`
   - `decolovely_contact_location`
   - `decolovely_whatsapp_number`

## 3. Deployment order

1. Deploy `Decoropic` first
2. Confirm `https://www.decoropic.com/api/health`
3. Set `NEXT_PUBLIC_PRODUCT_CENTER_URL=https://www.decolovely.com`
4. Install the refreshed `Decolovely` theme
5. Verify language bridge between both sites
6. Verify estimator, contact form, WhatsApp CTA and product-detail CTAs

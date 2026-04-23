# Deployment Checklist

## Phase 1: Decoropic app

1. Confirm target server path, such as `/var/www/decoropic`
2. Upload `decoropic-app-deploy.zip`
3. Unzip package on the server
4. Create `.env.production` from `deploy/env/decoropic.production.env.example`
5. Start the app with one method:
   - PM2: `deploy/pm2/ecosystem.config.cjs`
   - systemd: `deploy/systemd/decoropic.service`
6. Point Nginx to the local app using `deploy/nginx/decoropic.conf`
7. Verify:
   - homepage loads
   - `/api/health` returns `200 OK`
   - `/contact` form loads
   - estimator opens and returns a preview

## Phase 2: Decolovely WordPress theme

1. Upload `decolovely-product-center.zip` in WordPress Appearance > Themes
2. Activate the theme
3. Confirm WooCommerce is active
4. Confirm shop page and product categories exist
5. Set bridge filters or site-level equivalents for:
   - main brand site URL
   - contact email
   - contact phone
   - contact location
   - WhatsApp number
6. Verify:
   - homepage hero loads
   - product archive uses custom product cards
   - product detail page shows project support blocks
   - bridge links to `Decoropic` open correctly

## Phase 3: Cross-site acceptance

1. `Decoropic` product-center links open `Decolovely.com`
2. Chinese mode keeps `lang=zh` across both sites
3. WhatsApp CTA works on both sites
4. Contact path is consistent across both experiences
5. Both domains show unified brand styling and CTA language

## External items still required

- Server or hosting login for `Decoropic`
- WordPress admin access for `Decolovely.com`
- Final production contact details
- Final WhatsApp number
- Optional analytics IDs

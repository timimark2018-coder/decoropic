# Release Manifest

## Decoropic app

- Artifact: `decoropic-app-deploy.zip`
- Size: `812992 bytes`
- SHA256: `f4e94bfce2ade789e77c2b08b8b32ea9ccf01f4ec851ab288e89202513e9ac27`
- Entry point after unzip: `server.js`
- Health check: `/api/health`
- Runtime mode: Next.js standalone package with bundled `node_modules`
- Local smoke test: packaged app started successfully and `/api/health` returned `200 OK`

## Decolovely WordPress theme

- Artifact: `decolovely-product-center.zip`
- Size: `23038 bytes`
- SHA256: `d90a6f225bdb358a0e8ff935d3638f7c59f085c314693a5eb0ba33f1ac5f508b`
- Install path: WordPress Appearance > Themes > Upload Theme
- Requires: WooCommerce

## Supporting deployment files

- Nginx config: `deploy/nginx/decoropic.conf`
- PM2 config: `deploy/pm2/ecosystem.config.cjs`
- systemd service: `deploy/systemd/decoropic.service`
- Production env template: `deploy/env/decoropic.production.env.example`
- Step-by-step checklist: `deploy/CHECKLIST.md`
- Deployment guide: `DEPLOYMENT.md`

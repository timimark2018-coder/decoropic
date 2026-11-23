# 待补真实图清单

由 `node scripts/make-placeholder-cards.mjs` 生成，请勿手改。

下面这些页面暂时用品牌色占位卡片(标题 + Decoropic 字标)作首图，alt 写的是页面主词。
补上真实图后:页面配上图(博文写 front-matter 的 `cover`，内容页加进 `lib/content-pages/route.tsx` 的 HERO_IMAGES，
法语页加进 `app/(public)/fr/[country]/page.tsx` 的 HERO_IMAGES，指南在正文里插图)，
再把该行从脚本的 PAGES 删掉、删掉 public/cards/ 里的文件，重新运行脚本。

共 **7** 页。

| 页面 | 占位卡片 | alt(页面主词) | 内容包当初的配图建议 |
|---|---|---|---|
| /blog/kitchen-cabinets-ghana-cost-2026 | public/cards/blog-kitchen-cabinets-ghana-cost-2026.webp | kitchen cabinets cost Ghana 2026 | Modern L-shaped kitchen with flat laminate doors in an Accra villa |
| /products/kitchen-cabinets-ghana | public/cards/products-kitchen-cabinets-ghana.webp | kitchen cabinets Ghana | L-shaped two-tone kitchen with quartz worktop in a Ghana villa |
| /solutions/offices | public/cards/solutions-offices.webp | office fit-out furniture and materials from China | — |
| /solutions/retail | public/cards/solutions-retail.webp | showroom and retail fit-out materials from China | — |
| /guides/ship-furniture-china-to-ghana | public/cards/guides-ship-furniture-china-to-ghana.webp | ship furniture from China to Ghana | Sofa packed with foam corner protection before shipping from China to Ghana |
| /guides/china-to-tema-shipping-cost | public/cards/guides-china-to-tema-shipping-cost.webp | China to Tema container cost | Cost components of shipping a container from China to Tema |
| /guides/qc-before-shipping-checklist | public/cards/guides-qc-before-shipping-checklist.webp | what to check before ordering custom furniture from China | Quality inspection of custom wardrobe before shipping from China |

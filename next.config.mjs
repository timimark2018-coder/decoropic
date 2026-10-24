/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    // Vercel 会把动态页面自身的 Cache-Control 强制成 private/no-store，
    // middleware 设的头在生产被覆盖(本地 next start 不会，所以本地测不出来)。
    // Vercel 的边缘另外认 Vercel-CDN-Cache-Control / CDN-Cache-Control，
    // 这两个头只作用于 CDN，不会下发给浏览器。
    return [
      {
        source: "/:path((?!_next|api|.*\\.[a-z0-9]+$).*)",
        headers: [
          { key: "Vercel-CDN-Cache-Control", value: "max-age=3600, stale-while-revalidate=86400" },
          { key: "CDN-Cache-Control", value: "max-age=3600, stale-while-revalidate=86400" }
        ]
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const __workspaceRoot = path.resolve(__dirname, "..");

const nextConfig = {
  output: "standalone",
  outputFileTracingRoot: __workspaceRoot,
  turbopack: {
    root: __workspaceRoot
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;

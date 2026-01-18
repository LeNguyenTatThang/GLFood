import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/GLFood",
  assetPrefix: "/GLFood/",
}

export default nextConfig
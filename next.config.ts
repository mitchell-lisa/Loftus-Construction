import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/projects/brownsville", destination: "/projects/brownsville-road", permanent: true }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

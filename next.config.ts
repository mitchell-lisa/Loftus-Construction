import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/projects/brownsville", destination: "/projects/brownsville-road", permanent: true },
      { source: "/record", destination: "/projects#record", permanent: false },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 82, 85],
  },
};

export default nextConfig;

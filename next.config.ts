import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;

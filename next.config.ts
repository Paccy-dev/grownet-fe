import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // add this to allow loading images from Unsplash
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

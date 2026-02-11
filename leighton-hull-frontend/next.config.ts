import type { NextConfig } from "next";

const NEXT_PUBLIC_API_URL = new URL(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001");

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    remotePatterns: [{ hostname: NEXT_PUBLIC_API_URL.hostname }]
  },

  async redirects() {
    return [
      {
        source: "/", // when user visits "/"
        destination: "/home", // redirect to "/home"
        permanent: true // true = 301 redirect, false = 302
      }
    ];
  }
};

export default nextConfig;

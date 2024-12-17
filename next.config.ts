import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/flag",
        destination: "https://youtu.be/dQw4w9WgXcQ",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

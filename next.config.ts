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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/scoreboard",
  //       destination: "http://webhook.scist.org:30030",
  //     },
  //   ];
  // },
};

export default nextConfig;

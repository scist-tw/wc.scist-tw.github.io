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
        source: "/signup",
        destination: "https://lihi.cc/ySu3Z",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

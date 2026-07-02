import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The city page moved from /east-renton-highlands to /renton-highlands;
      // Google still has the old URL indexed (impressions in GSC), so 301 it.
      {
        source: "/east-renton-highlands",
        destination: "/renton-highlands",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

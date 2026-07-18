import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AVIF first: ~30-40% smaller than WebP for the same visual quality.
  // Biggest single win for mobile LCP (hero image bytes).
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // HSTS: browsers skip the http->https redirect hop on every visit
          // after the first (and preload-list browsers skip it entirely).
          // This is the only site-side answer to PageSpeed's redirect flag.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www serves a full duplicate of the site (200) unless redirected.
      // Send every www request to the apex in one hop: kills the duplicate
      // host for SEO and the redirect-chain penalty PageSpeed flags.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.everpeakroof.com" }],
        destination: "https://everpeakroof.com/:path*",
        permanent: true,
      },
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

import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/essays/:slug",
        permanent: true,
      },
    ];
  },
  outputFileTracingIncludes: {
    "/*": ["./contents/**/*.mdx"],
  },
  async headers() {
    return [
      {
        source: "/.well-known/nostr.json",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      {
        source: "/essays/:slug",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, s-maxage=86400, stale-while-revalidate=31536000",
          },
        ],
      },
      {
        source: "/bookshelf/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, s-maxage=86400, stale-while-revalidate=31536000",
          },
        ],
      },
      {
        source: "/api/og",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, s-maxage=604800, stale-while-revalidate=31536000",
          },
        ],
      },
      {
        source: "/api/ogbook",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, s-maxage=604800, stale-while-revalidate=31536000",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

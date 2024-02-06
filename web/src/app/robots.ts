import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og/*"],
      disallow: "/contact/",
    },
    sitemap: "https://jshamsul.com/sitemap.xml",
  };
}

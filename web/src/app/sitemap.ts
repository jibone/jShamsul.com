import { MetadataRoute } from "next";
import { allBlogs } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jshamsul.com";
  const staticNav: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.2,
    },
  ];

  // Get all the posts
  const posts: MetadataRoute.Sitemap = allBlogs.map((p) => {
    return {
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "never",
      priority: 0.9,
    };
  });

  return [...staticNav, ...posts];
}

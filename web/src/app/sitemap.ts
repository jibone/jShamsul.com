import type { MetadataRoute } from "next";
import { BlogCollection } from "@/models";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jshamsul.com";

  const siteNav: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];

  // get all the blog posts
  const blogpostList = BlogCollection.slugList();

  const blogposts = blogpostList.map((p) => {
    return {
      url: `${baseUrl}/blog/${p}`,
      priority: 1,
    };
  });

  return [...siteNav, ...blogposts];
}

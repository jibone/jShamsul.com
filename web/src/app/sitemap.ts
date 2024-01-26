import { MetadataRoute } from "next";
import BlogModel from "@/models/blogpostModel";

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

  // get all the blogposts
  const blogModel = new BlogModel();
  const blogPostList = blogModel.list();
  const blogposts = blogPostList.map((p) => {
    return {
      url: `${baseUrl}/blog/${p}`,
      priority: 0.9,
    };
  });

  return [...staticNav, ...blogposts];
}

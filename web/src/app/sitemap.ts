import type { MetadataRoute } from "next";
import { EssayCollection, BookCollection } from "@/models";

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
    {
      url: `${baseUrl}/bookshelf`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];

  // get all the essyas listed
  const essayList = EssayCollection.slugList();

  const essays = essayList.map((p) => {
    return {
      url: `${baseUrl}/essays/${p}`,
      priority: 1,
    };
  });

  // get all the books listed in bookshelf
  const booklist = BookCollection.slugList();

  const books = booklist.map((b) => {
    return {
      url: `${baseUrl}/bookshelf/${b}`,
      priority: 1,
    };
  });

  return [...siteNav, ...essays, ...books];
}

import { Metadata } from "next";

export const defaultMetadata = {
  title: "jShamsul.com (@jibone)",
  author: "J.Shamsul (@jibone)",
  description:
    "J.Shamsul is a staff software engineer, aspiring writer, and digital wanderer sharing essays, ideas, and reflections on technology, culture, and modern society.",
  language: "en_US",
  siteUrl: "https://jshamsul.com",
  siteName: "jShamsul.com",
};

type GenSiteMetadataProps = {
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
};

export function getBaseUrl(): string {
  let baseURL = defaultMetadata.siteUrl;

  if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3000";
  }

  return baseURL;
}

export default function generateSiteMetadata({
  title,
  description,
  image,
  ...rest
}: GenSiteMetadataProps): Metadata {
  return {
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      title: title || defaultMetadata.title,
      description: description || defaultMetadata.description,
      url: "./",
      siteName: defaultMetadata.siteName,
      locale: defaultMetadata.language,
      type: "website",
      images: [image || ""],
    },
    twitter: {
      title: title || defaultMetadata.title,
      card: "summary_large_image",
      images: [image || ""],
    },
    ...rest,
  };
}

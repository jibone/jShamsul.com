import { Metadata } from "next";

export const defaultMetadata = {
  title: "jShamsul.com (@jibone)",
  author: "J.Shamsul (@jibone)",
  description:
    "A software builder, full-stack engineer, currently curious about AI and Web3.",
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

export default function generateSiteMetadata({
  title,
  description,
  image,
  ...rest
}: GenSiteMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} / ${defaultMetadata.title}`,
      description: description || defaultMetadata.description,
      url: "./",
      siteName: defaultMetadata.siteName,
      locale: defaultMetadata.language,
      type: "website",
      images: [image || ""],
    },
    twitter: {
      title: `${title} / ${defaultMetadata.title}`,
      card: "summary_large_image",
      images: [image || ""],
    },
    ...rest,
  };
}

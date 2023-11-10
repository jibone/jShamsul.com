import { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";

interface SiteMetadataProps {
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

// Returns page metadata with social.
export default function generateSiteMetadata({
  title,
  description,
  image,
  ...rest
}: SiteMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: "./",
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: "summary_large_image",
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  };
}

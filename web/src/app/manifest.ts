import type { MetadataRoute } from "next";
import { defaultMetadata } from "@/utils";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMetadata.siteName,
    short_name: defaultMetadata.title,
    description: defaultMetadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f1f5f9",
    theme_color: "#64748b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "images/x-icon",
      },
    ],
  };
}

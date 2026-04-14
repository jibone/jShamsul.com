import { OGBookshelf } from "@/components/og";

export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return OGBookshelf({
    title: "Bookshelf & Tsundoku stack",
    subtitle: "Read and to be read book list.",
  });
}
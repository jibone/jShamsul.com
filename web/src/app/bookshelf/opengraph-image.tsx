import { OGBookshelf, OGFont } from "@/components/og";

export const runtime = "edge";
export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { fontNormal, fontItalic, fontBold } = await OGFont();

  return OGBookshelf({
    title: "Bookshelf & Tsundoku stack",
    subtitle: "Read and to be read book list.",
    fontNormal,
    fontItalic,
    fontBold,
  });
}

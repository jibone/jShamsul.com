import { OGImageGen, OGFont } from "@/components/og";

export const runtime = "edge";
export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function TwitterImage() {
  const { fontNormal, fontItalic, fontBold } = await OGFont();

  return OGImageGen({
    title: "",
    subtitle: "_",
    fontNormal,
    fontItalic,
    fontBold,
  });
}

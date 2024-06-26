import { OGImageGen, OGFont } from "@/components/og";

export const runtime = "edge";
export const alt = "jShasul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { fontNormal, fontItalic } = await OGFont();

  return OGImageGen({
    title: "",
    subtitle: "",
    fontNormal,
    fontItalic,
  });
}

import { OGImageGen, OGFont } from "@/components/og";

export const runtime = "edge";
export const alt = "jShasul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { fontNormal, fontItalic, fontBold } = await OGFont();

  return OGImageGen({
    title: "About.",
    subtitle: "The person, and the website.",
    fontNormal,
    fontItalic,
    fontBold,
  });
}

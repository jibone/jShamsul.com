import { OGImageGen, OGFont } from "@/components/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "";
  const subtitle = searchParams.get("subtitle") || "";
  const coverImg = searchParams.get("cover") || "";
  const newsletter = searchParams.get("newsletter") || "";

  const { fontNormal, fontItalic, fontBold } = await OGFont();

  return OGImageGen({
    title,
    subtitle,
    fontNormal,
    fontItalic,
    fontBold,
    coverImg,
    newsletter,
  });
}

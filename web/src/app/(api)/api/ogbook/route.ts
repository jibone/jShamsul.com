import { OGBookSingle, OGFont } from "@/components/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "";
  const subtitle = searchParams.get("subtitle") || "";
  const author = searchParams.get("author") || "";
  const coverimg = searchParams.get("cover") || "";

  const { fontNormal, fontItalic, fontBold } = await OGFont();

  return OGBookSingle({
    title,
    subtitle,
    author,
    coverimg,
    fontNormal,
    fontItalic,
    fontBold,
  });
}

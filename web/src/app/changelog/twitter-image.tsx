import { OGImageGen } from "@/components/OGImageGen";
import { PageFrontmatter } from "@/models/pageModel";
import { OGFont } from "@/utils/pageOGData";
import fm from "front-matter";

export const runtime = "edge";
export const alt = "jShamsul.com/changelog";
export const contentType = "image/png";

export default async function TwitterImage() {
  const { robotoBlack, robotoMedium } = await OGFont();

  const pageContent = await fetch(
    new URL("../../../contents/pages/changelog.mdx", import.meta.url),
  ).then((res) => res.text());

  const pageProcessed = fm(pageContent);
  const pagefm = pageProcessed.attributes as PageFrontmatter;

  return OGImageGen({
    title: pagefm.ogTitle || "",
    subtitle: pagefm.ogSubtitle || "",
    page: "changelog",
    fontTitle: pagefm.ogTitleFont,
    fontSubtitle: pagefm.ogSubtitleFont,
    fontBlack: robotoBlack,
    fontMedium: robotoMedium,
  });
}

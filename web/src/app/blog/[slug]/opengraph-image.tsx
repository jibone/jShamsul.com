import { OGImageGen } from "@/components/OGImageGen";
import { siteMetadata } from "@/data/siteMetadata";
import { BlogFrontmatter } from "@/models/blogpostModel";
import { OGFont } from "@/utils/pageOGData";

export const runtime = "edge";
export const alt = "jShamsul.com/blog";
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  let baseUrl = siteMetadata.siteUrl;
  if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost:3000";
  }

  const { robotoBlack, robotoMedium } = await OGFont();

  const slug = params.slug;
  const pageMeta = await fetch(new URL(`${baseUrl}/api/blog/${slug}`)).then(
    (res) => res.json(),
  );

  const fm = pageMeta.blogfm as BlogFrontmatter;

  return OGImageGen({
    title: fm.ogTitle,
    subtitle: fm.ogSubtitle,
    page: "blog",
    fontTitle: fm.ogTitleFont,
    fontSubtitle: fm.ogSubtitleFont,
    fontBlack: robotoBlack,
    fontMedium: robotoMedium,
  });
}

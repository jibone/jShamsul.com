import { PageFrontmatter } from "@/models/pageModel";
import fm from "front-matter";

export async function OGFont() {
  const robotoBlack = await fetch(
    new URL(`../../public/fonts/Roboto-Black.ttf`, import.meta.url),
  ).then((res) => res.arrayBuffer());

  const robotoMedium = await fetch(
    new URL(`../../public/fonts/Roboto-Medium.ttf`, import.meta.url),
  ).then((res) => res.arrayBuffer());

  return { robotoBlack, robotoMedium };
}

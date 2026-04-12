import { OGImageGen } from "@/components/og";

export const runtime = "edge";
export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function TwitterImage() {
  return OGImageGen({
    title: "jShamsul.com",
    subtitle: "",
  });
}
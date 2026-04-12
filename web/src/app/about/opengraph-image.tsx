import { OGImageGen } from "@/components/og";

export const runtime = "edge";
export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return OGImageGen({
    title: "About.",
    subtitle: "The person, and the website.",
  });
}
import { OGImageGen } from "@/components/og";

export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return OGImageGen({
    title: "Connect.",
    subtitle: "Let's get in touch!",
  });
}
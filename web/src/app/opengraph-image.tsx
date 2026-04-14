import { OGImageGen } from "@/components/og";

export const alt = "jShamsul.com";
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return OGImageGen({
    title: "jShamsul.com",
    subtitle: "Staff software engineer, aspiring writer, digital wanderer.",
  });
}
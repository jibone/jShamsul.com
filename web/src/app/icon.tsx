/* eslint-disable @next/next/no-img-element */

import { siteMetadata } from "@/data/siteMetadata";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const contentType = "image/png";

export default function Icon() {
  let baseUrl = siteMetadata.siteUrl;
  if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost:3000";
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <img alt="logo" src={`${baseUrl}/jslogo.png`} width={96} height={96} />
      </div>
    ),
    {
      width: 96,
      height: 96,
    },
  );
}

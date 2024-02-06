/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt="logo"
          width={180}
          height={180}
          src={"http://localhost:3000/jslogo.png"}
        />
      </div>
    ),
    {
      width: 180,
      height: 180,
    },
  );
}

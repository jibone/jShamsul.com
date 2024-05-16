import { ImageResponse } from "@vercel/og";

export default async function OGImageGen({
  title,
  subtitle,
  fontNormal,
  fontItalic,
}: {
  title: string;
  subtitle: string;
  fontNormal: ArrayBuffer | Buffer;
  fontItalic: ArrayBuffer | Buffer;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          fontSize: 32,
          fontFamily: "iA Writter Quattro",
          padding: 40,
          backgroundColor: "#f1f5f9",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            color: "#020617",
            marginBottom: 5,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#64748b",
            fontStyle: "italic",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            width: 1000,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 40,
            left: 40,
          }}
        >
          <p
            style={{
              marginTop: 0,
              marginBottom: 5,
              color: "#020617",
            }}
          >
            jShamsul.com (@jibone)
          </p>
          <p
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontStyle: "italic",
              color: "#64748b",
            }}
          >
            Software builder, Full-stack Engineer,
          </p>
          <p
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontStyle: "italic",
              color: "#64748b",
            }}
          >
            and AI, Web3 Curious.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          weight: 400,
          name: "iA Writter Quattro",
          style: "normal",
          data: fontNormal,
        },
        {
          weight: 400,
          name: "iA Writter Quattro",
          style: "italic",
          data: fontItalic,
        },
      ],
    },
  );
}

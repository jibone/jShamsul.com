import { ImageResponse } from "@vercel/og";
import { getBaseUrl } from "@/utils/metadataUtil";

export default async function OGImageGen({
  title,
  subtitle,
  fontNormal,
  fontItalic,
  fontBold,
  coverImg,
}: {
  title: string;
  subtitle: string;
  fontNormal: ArrayBuffer | Buffer;
  fontItalic: ArrayBuffer | Buffer;
  fontBold: ArrayBuffer | Buffer;
  coverImg?: string;
}) {
  const baseUrl = getBaseUrl();
  const coverImgPath = `${baseUrl}/imgs/essays/${coverImg}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          fontSize: 36,
          fontFamily: "iA Writter Quattro Bold",
          fontStyle: "normal",
          padding: 40,
          backgroundColor: "#f1f5f9",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            color: "#000000",
            marginBottom: 5,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#334155",
            fontFamily: "iA Writter Quattro Italic",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          &gt; {subtitle}
        </div>
        <div
          style={{
            width: 280,
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
              color: "#000000",
            }}
          >
            jShamsul.com
          </p>
          <p
            style={{
              marginTop: 0,
              marginBottom: 5,
              color: "#000000",
            }}
          >
            @jibone
          </p>
        </div>
        {coverImg && (
          <div
            style={{
              width: 500,
              display: "flex",
              position: "absolute",
              bottom: 50,
              right: 50,
              color: "#000",
              border: "2px solid #fff",
            }}
          >
            <img src={coverImgPath} alt="cover image" />
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          weight: 400,
          name: "iA Writter Quattro Normal",
          style: "normal",
          data: fontNormal,
        },
        {
          weight: 400,
          name: "iA Writter Quattro Italic",
          style: "italic",
          data: fontItalic,
        },
        {
          weight: 800,
          name: "iA Writter Quattro Bold",
          style: "normal",
          data: fontBold,
        },
      ],
    },
  );
}

import { getBookCoverImg } from "@/utils/booksImg";
import { ImageResponse } from "@vercel/og";

export default async function OGBookshelf({
  title,
  subtitle,
  fontNormal,
  fontItalic,
  fontBold,
}: {
  title: string;
  subtitle: string;
  fontNormal: ArrayBuffer | Buffer;
  fontItalic: ArrayBuffer | Buffer;
  fontBold: ArrayBuffer | Buffer;
}) {
  const books = getBookCoverImg(4);

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
            width: 1000,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 80,
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
            jShamsul.com (@jibone)
          </p>
          <p
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontStyle: "italic",
              fontFamily: "iA Writter Quattro Italic",
              color: "#64748b",
            }}
          >
            Software builder, Full-stack.
          </p>
          <p
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontStyle: "italic",
              fontFamily: "iA Writter Quattro Italic",
              color: "#64748b",
            }}
          >
            AI and Web3 Curious.
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={books[0]}
            alt="book 1"
            style={{
              width: 200,
              position: "absolute",
              top: 0,
              right: 70,
              borderRadius: 8,
              border: "1px solid white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <img
            src={books[1]}
            alt="book 2"
            style={{
              width: 200,
              position: "absolute",
              top: 100,
              right: 180,
              borderRadius: 8,
              border: "1px solid white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <img
            src={books[2]}
            alt="book 3"
            style={{
              width: 200,
              position: "absolute",
              top: 190,
              right: 50,
              borderRadius: 8,
              border: "1px solid white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <img
            src={books[3]}
            alt="book 4"
            style={{
              width: 200,
              position: "absolute",
              top: 140,
              right: -20,
              borderRadius: 8,
              border: "1px solid white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
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

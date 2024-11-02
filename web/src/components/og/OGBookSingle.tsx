import { ImageResponse } from "@vercel/og";

export default async function OGBookSingle({
  title,
  subtitle,
  author,
  coverimg,
  fontNormal,
  fontItalic,
  fontBold,
}: {
  title: string;
  subtitle: string;
  author: string;
  coverimg: string;
  fontNormal: ArrayBuffer | Buffer;
  fontItalic: ArrayBuffer | Buffer;
  fontBold: ArrayBuffer | Buffer;
}) {
  // const book = "https://m.media-amazon.com/images/I/81pIICZO2PL._SY466_.jpg";

  const book = coverimg;
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
        {subtitle === "" ? null : (
          <div
            style={{
              color: "#334155",
              fontFamily: "iA Writter Quattro Italic",
              fontStyle: "italic",
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            color: "#334155",
            fontFamily: "iA Writter Quattro Italic",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          by {author}
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
            {"Bookshelf & Tsundoku Stack"}
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
            My read and to be read book list.
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={book}
            alt="book 1"
            style={{
              width: 300,
              position: "absolute",
              top: -100,
              right: 0,
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

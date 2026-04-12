import { ImageResponse } from "@vercel/og";

export default async function OGBookSingle({
  title,
  subtitle,
  author,
  coverimg,
}: {
  title: string;
  subtitle: string;
  author: string;
  coverimg: string;
}) {
  const book = coverimg;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "40px 50px",
            backgroundColor: "#1e293b",
            borderBottom: "4px solid #3b82f6",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 42,
              fontWeight: 700,
              fontFamily: "Inter",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                display: "flex",
                color: "#94a3b8",
                fontSize: 24,
                fontFamily: "Inter",
                fontStyle: "italic",
              }}
            >
              {subtitle}
            </div>
          )}
          <div
            style={{
              display: "flex",
              color: "#64748b",
              fontSize: 20,
              fontFamily: "Inter",
              marginTop: 8,
            }}
          >
            by {author}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={book}
            alt="book cover"
            style={{
              width: 220,
              height: 330,
              borderRadius: 8,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "8px 16px",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            borderRadius: 8,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: 20, fontFamily: "Inter" }}>
            @jibone
          </span>
          <span style={{ color: "#64748b", fontSize: 16, fontFamily: "Inter" }}>
            Bookshelf & Tsundoku Stack
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
import { getBookCoverImg } from "@/utils/booksImg";
import { ImageResponse } from "@vercel/og";

export default async function OGBookshelf({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
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
              marginBottom: 12,
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
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            position: "relative",
            padding: 40,
            gap: 20,
          }}
        >
          <img
            src={books[0]}
            alt="book 1"
            style={{
              width: 180,
              height: 270,
              borderRadius: 8,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
            }}
          />
          <img
            src={books[1]}
            alt="book 2"
            style={{
              width: 180,
              height: 270,
              borderRadius: 8,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
            }}
          />
          <img
            src={books[2]}
            alt="book 3"
            style={{
              width: 180,
              height: 270,
              borderRadius: 8,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
            }}
          />
          <img
            src={books[3]}
            alt="book 4"
            style={{
              width: 180,
              height: 270,
              borderRadius: 8,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 50,
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            borderRadius: 8,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: 20, fontFamily: "Inter" }}>
            @jibone
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
import { ImageResponse } from "@vercel/og";
import { getBaseUrl } from "@/utils/metadataUtil";

export default async function OGImageGen({
  title,
  subtitle,
  coverImg,
  newsletter,
}: {
  title: string;
  subtitle: string;
  coverImg?: string;
  newsletter?: string;
}) {
  const baseUrl = getBaseUrl();

  let imagePath = "";
  if (coverImg !== undefined && coverImg !== "") {
    imagePath = `${baseUrl}/imgs/essays/${coverImg}`;
  } else if (newsletter !== undefined && newsletter !== "") {
    imagePath = `${baseUrl}/imgs/newsletters/${newsletter}`;
  }

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
            padding: "20px 30px",
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
              marginBottom: subtitle ? 12 : 0,
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
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {imagePath ? (
            <img
              src={imagePath}
              alt="cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#3b82f6",
                  fontSize: 80,
                  fontWeight: 800,
                  fontStyle: "italic",
                  fontFamily: "Inter",
                }}
              >
                Stay glitched, stay human.
              </div>
              <div
                style={{
                  display: "flex",
                  color: "#64748b",
                  fontSize: 28,
                  fontFamily: "Inter",
                  marginTop: 16,
                }}
              >
                ...
              </div>
            </div>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 40,
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
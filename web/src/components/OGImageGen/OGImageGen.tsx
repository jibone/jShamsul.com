/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "@vercel/og";

export type OGImageGenProps = {
  bgImage?: string;
  logo?: string;
  title: string;
  subtitle: string;
  page?: string;
  fontTitle?: number;
  fontSubtitle?: number;
  fontBlack: ArrayBuffer | Buffer;
  fontMedium: ArrayBuffer | Buffer;
};

export default async function OGImageGen({
  bgImage,
  logo,
  title,
  subtitle,
  page,
  fontTitle = 80,
  fontSubtitle = 50,
  fontBlack,
  fontMedium,
}: OGImageGenProps) {
  if (logo === undefined) {
    logo = `http://localhost:3000/jslogo.png`;
  }

  if (bgImage === undefined) {
    bgImage = `url('http://localhost:3000/social-banner.png')`;
  }

  let pageLink = "";
  if (page !== undefined) {
    pageLink = `/ ${page}`;
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div // background image container.
          style={{
            display: "flex",
            backgroundImage: bgImage,
            width: "100%",
            height: "100%",
            padding: "30px",
          }}
        >
          <div // big area container
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              border: "1px white",
              borderRadius: "20px",
              padding: "20px",
              background: "rgba(255,255,255,0.6)",
              boxShadow: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                fontSize: 35,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                padding: "10px",
              }}
            >
              <img alt="logo" src={logo} width={80} height={80} />
            </div>
            <div // Main heading
              style={{
                display: "flex",
                width: "100%",
                marginTop: "30px",
                fontSize: fontTitle,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 900,
                padding: "10px",
                color: "#333333",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                width: "80%",
                marginTop: "25px",
                fontSize: fontSubtitle,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                padding: "10px",
                color: "#333333",
              }}
            >
              {subtitle}
            </div>
            <div
              style={{
                display: "flex",
                width: "60%",
                textAlign: "right",
                justifyContent: "flex-end",
                fontSize: 30,
                fontFamily: "Roboto",
                fontWeight: 900,
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: "20px",
                color: "#333333",
              }}
            >
              &gt;_ jShamsul.com {pageLink}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          weight: 900,
          name: "Roboto",
          style: "normal",
          data: fontBlack,
        },
        {
          weight: 400,
          name: "Roboto",
          style: "normal",
          data: fontMedium,
        },
      ],
    },
  );
}

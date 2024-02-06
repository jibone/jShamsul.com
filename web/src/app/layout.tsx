import "./globals.css";
import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteMetadata } from "@/data/siteMetadata";
import { SectionContainer } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopG, BottomG } from "@/components/BgGradient";

const signikaNegative = Signika_Negative({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `${siteMetadata.title} / %s`,
  },
  description: siteMetadata.title,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${signikaNegative.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-white text-black antialiased">
        <TopG />
        <SectionContainer>
          <div className="flex h-screen flex-col justify-between font-sans">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </SectionContainer>
        <BottomG />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Evitana Phoenix Holdings | Courier & Medical Courier Services in Reading & Lancaster PA",
    template: "%s | Evitana Phoenix Holdings",
  },
  description:
    "Evitana Phoenix Holdings provides reliable courier services, cargo van delivery, same-day delivery, logistics support, and medical courier services in Reading, Lancaster, Berks County, and Lancaster County, Pennsylvania.",
  keywords: [
    "courier service Reading PA",
    "courier service Lancaster PA",
    "medical courier Reading PA",
    "medical courier Lancaster PA",
    "same day delivery Reading PA",
    "cargo van delivery Pennsylvania",
    "last mile delivery Pennsylvania",
    "logistics company Reading PA",
    "delivery service Lancaster PA",
    "Evitana Phoenix Holdings",
  ],
  metadataBase: new URL("https://www.evitanaphoenixhldgs.com"),
  openGraph: {
    title: "Evitana Phoenix Holdings | Courier & Medical Courier Services",
    description:
      "Reliable courier, cargo van delivery, logistics, and medical courier services serving Reading, Lancaster, Berks County, and Lancaster County, PA.",
    url: "https://www.evitanaphoenixhldgs.com",
    siteName: "Evitana Phoenix Holdings",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Evitana Phoenix Holdings Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.evitanaphoenixhldgs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "DineTap — Scan. Order. Dine.";
const siteDescription =
  "A smarter restaurant ordering experience. Scan a table QR code, explore the menu, and order with ease.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "DineTap",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "DineTap",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

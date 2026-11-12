import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DineTap — Scan. Order. Dine.",
  description:
    "A smarter restaurant ordering experience. Scan a table QR code, explore the menu, and order with ease."
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
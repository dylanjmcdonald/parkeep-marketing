import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parkeep",
  description: "Golf league management made accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#061213] text-white" lang="en">
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const blackMango = localFont({
  src: "./fonts/black-mango-regular.ttf",
  variable: "--font-black-mango",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "2025 SCIST 資深玩家",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blackMango.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

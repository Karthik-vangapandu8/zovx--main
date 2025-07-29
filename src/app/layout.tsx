import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZOVX.PRO - AI Success Stories & Implementation Guides",
  description: "Discover how companies are saving millions with AI. Interactive case studies, tool comparisons, and implementation guides for enterprise AI adoption.",
  keywords: "AI implementation, artificial intelligence case studies, business AI, AI tools, enterprise AI solutions",
  authors: [{ name: "ZOVX Team" }],
  openGraph: {
    title: "ZOVX.PRO - AI Success Stories & Implementation Guides",
    description: "Discover how companies are saving millions with AI. Interactive case studies, tool comparisons, and implementation guides.",
    url: "https://zovx.pro",
    siteName: "ZOVX.PRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOVX.PRO - AI Success Stories",
    description: "Discover how companies are saving millions with AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}

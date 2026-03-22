import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XLeaks — Speak. Store. Stay.",
  description:
    "The decentralized, censorship-resistant, peer-to-peer social platform for journalists, whistleblowers, and anyone who needs to publish content that cannot be censored, deleted, or taken down.",
  openGraph: {
    title: "XLeaks — Speak. Store. Stay.",
    description:
      "The decentralized social platform that no one can shut down. Not governments. Not corporations. Not even us.",
    url: "https://xleaks.org",
    siteName: "XLeaks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "XLeaks — Speak. Store. Stay.",
    description:
      "The decentralized social platform that no one can shut down. Not governments. Not corporations. Not even us.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

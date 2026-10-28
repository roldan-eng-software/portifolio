import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

// Pruned to the weights actually used: 300 (font-light), 500 (font-medium),
// 700 (font-bold), 900 (font-black)
const kanit = Kanit({ 
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jack — 3D Creator",
  description:
    "Portfolio of Jack, a 3D creator crafting striking renders, motion design, and immersive web experiences.",
  openGraph: {
    title: "Jack — 3D Creator",
    description:
      "A high-end 3D creator portfolio: renders, motion, and immersive web experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack — 3D Creator",
    description:
      "A high-end 3D creator portfolio: renders, motion, and immersive web experiences.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} font-sans`}>
      <body className="overflow-x-clip">{children}</body>
    </html>
  );
}

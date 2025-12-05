import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prodinno.netlify.app'),
  title: "ProdInno | VIT Chennai",
  description: "ProdInno is the Product Innovation Club at VIT Chennai, fostering innovation, product development, and entrepreneurship among students. Join us to build, innovate, and create impactful products.",
  keywords: ["ProdInno", "VIT Chennai", "Product Innovation", "Innovation Club", "Product Development", "Entrepreneurship", "VIT", "Student Club"],
  authors: [{ name: "ProdInno" }],
  openGraph: {
    title: "ProdInno | VIT Chennai - Product Innovation Club",
    description: "ProdInno is the Product Innovation Club at VIT Chennai, fostering innovation, product development, and entrepreneurship among students.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProdInno | VIT Chennai",
    description: "ProdInno is the Product Innovation Club at VIT Chennai, fostering innovation, product development, and entrepreneurship among students.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

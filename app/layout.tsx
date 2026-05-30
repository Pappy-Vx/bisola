import type { Metadata, Viewport } from "next";
import { Syne, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alli Bisola Aminat",
  jobTitle: ["SEO Analyst", "Product Marketing Manager"],
  description:
    "SEO Analyst and Product Marketing Manager with 3+ years turning content into measurable growth.",
  url: "https://bisola.work/",
  knowsAbout: [
    "Search Engine Optimization",
    "Product Marketing",
    "Content Strategy",
    "Growth Marketing",
    "Technical SEO",
  ],
  sameAs: ["https://www.linkedin.com/", "https://x.com/"],
};

export const viewport: Viewport = {
  themeColor: "#1b1d20",
};

export const metadata: Metadata = {
  title: "Alli Bisola Aminat, SEO Analyst & Product Marketing Manager",
  description:
    "Alli Bisola Aminat is an SEO Analyst and Product Marketing Manager who turns content into measurable growth, from 0 to 6,000+ organic sessions to N659M in tracked transaction volume. I don't just drive traffic, I drive the right traffic.",
  keywords:
    "SEO Analyst, Product Marketing Manager, SEO strategy, content marketing, organic growth, fintech marketing, SaaS SEO, technical SEO, growth marketing, Alli Bisola Aminat",
  authors: [{ name: "Alli Bisola Aminat" }],
  robots: "index, follow, max-image-preview:large",
  alternates: { canonical: "https://bisola.work/" },
  openGraph: {
    type: "website",
    title: "Alli Bisola Aminat, SEO Analyst & Product Marketing Manager",
    description:
      "I don't just drive traffic, I drive the right traffic. 3+ years turning SEO and product marketing into measurable growth.",
    url: "https://bisola.work/",
    images: [{ url: "https://bisola.work/og-image.png" }],
    siteName: "Alli Bisola Aminat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alli Bisola Aminat, SEO Analyst & Product Marketing Manager",
    description:
      "I don't just drive traffic, I drive the right traffic. 3+ years turning SEO and product marketing into measurable growth.",
    images: ["https://bisola.work/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${hankenGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

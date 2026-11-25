import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mouadessalim.github.io"),
  title: {
    default: "Mouad Essalim | Medical Student & Software Developer",
    template: "%s | Mouad Essalim",
  },
  description:
    "Portfolio of Mouad Essalim, medical student and self-taught software developer building web applications with TypeScript, React, and Next.js.",
  keywords: [
    "Mouad Essalim",
    "mouadessalim",
    "Medical Student",
    "Software Developer",
    "Full-Stack Web Developer",
    "TypeScript",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Mouad Essalim", url: "https://mouadessalim.github.io" }],
  creator: "Mouad Essalim",
  publisher: "Mouad Essalim",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://mouadessalim.github.io",
    title: "Mouad Essalim | Medical Student & Software Developer",
    description:
      "Medical student and self-taught developer building fast, practical web software with TypeScript, React, and Next.js.",
    siteName: "Mouad Essalim Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Mouad Essalim | Medical Student & Software Developer",
    description:
      "Medical student and software developer building web applications with TypeScript, React, and Next.js.",
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
  verification: {
    google: "ZKarwuxH9AsG1DAqsTscsnVWiqd4Ghlf-OzdpbCQYUA",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#18212e" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mouadessalim.github.io/#person",
      name: "Mouad Essalim",
      jobTitle: ["Medical Student", "Software Developer"],
      url: "https://mouadessalim.github.io",
      email: "mailto:essalim99@gmail.com",
      description:
        "Medical student and self-taught software developer building web applications with TypeScript, React, and Next.js.",
      knowsAbout: [
        "Medicine",
        "Full-Stack Web Development",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
      ],
      sameAs: ["https://github.com/mouadessalim"],
    },
    {
      "@type": "WebSite",
      "@id": "https://mouadessalim.github.io/#website",
      url: "https://mouadessalim.github.io",
      name: "Mouad Essalim Portfolio",
      publisher: {
        "@id": "https://mouadessalim.github.io/#person",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${geistMono.variable}`}>
        {children}
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-ZC0D7QX7VQ" />
      )}
    </html>
  );
}

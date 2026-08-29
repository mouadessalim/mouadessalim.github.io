import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
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
    default: "Mouad Essalim | Medical Doctor & Software Developer",
    template: "%s | Mouad Essalim",
  },
  description:
    "Personal case file and engineering portfolio of Mouad Essalim — Medical Doctor and Full-Stack Software Developer building clean web and health systems.",
  keywords: [
    "Dr. Mouad Essalim",
    "Mouad Essalim",
    "mouadessalim",
    "Medical Doctor",
    "Software Developer",
    "Full Stack Developer",
    "Health Tech",
    "Clinical Software",
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
    title: "Mouad Essalim | Medical Doctor & Software Developer",
    description:
      "Turning clinical discipline and code into robust software systems. Explore projects, roadmap, and case notes.",
    siteName: "Mouad Essalim Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Dr. Mouad Essalim | Medical Doctor & Software Developer",
    description:
      "Medical Doctor & Software Developer building clean web and health systems.",
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
      jobTitle: ["Medical Doctor", "Software Developer"],
      url: "https://mouadessalim.github.io",
      email: "mailto:essalim99@gmail.com",
      description:
        "Medical Doctor and Full-Stack Software Developer building modern web applications and health systems.",
      knowsAbout: [
        "Medicine",
        "Clinical Systems",
        "Clinical Software",
        "Full-Stack Web Development",
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
    </html>
  );
}

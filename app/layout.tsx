import type { Metadata } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";

// Mono — terminal, labels, code-flavored chrome (drives --mono)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Sans — headings and prose (drives --sans)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const common = {
  title: "Cela Pablo — Full-stack + Web3 engineer",
  description:
    "Shipping production-grade Web3 products that don't break under real users. Solidity, Next.js, and the messy infrastructure in between.",
  image: "/icons/favicon.ico",
};

export const metadata: Metadata = {
  title: common.title,
  description: common.description,
  metadataBase: new URL("https://my-portfolio-tau-green-82.vercel.app/"),
  applicationName: "Cela Pablo — Web3 engineer",
  alternates: {
    canonical: "https://my-portfolio-tau-green-82.vercel.app//",
  },
  icons: {
    icon: [
      { rel: "icon", url: "/icons/favicon.ico", type: "image/svg+xml" },
      {
        url: "/icons/favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "apple-touch-icon",
        url: "/icons/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/icons/manifest.json",
  openGraph: {
    type: "website",
    url: "https://my-portfolio-tau-green-82.vercel.app/",
    title: common.title,
    description: common.description,
    siteName: "Cela Pablo",
    images: common.image,
  },
  twitter: {
    card: "summary_large_image",
    title: common.title,
    description: common.description,
    site: "@pabloan95553659",
    creator: "@pabloan95553659",
    images: common.image,
  },
  appleWebApp: {
    capable: true,
    title: common.title,
    statusBarStyle: "default",
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
      className={`${jetbrainsMono.variable} ${geistSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}

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

const common = {
  title: "Cela Pablo - Professional portfolio",
  description: "Professional portfolio showcasing my projects and skills",
  image: '/icons/favicon.ico'
}

export const metadata: Metadata = {
  title: common.title,
  description: common.description,
  metadataBase: new URL("https://my-portfolio-tau-green-82.vercel.app/"),
  applicationName: "Cela Pablo - Professional portfolio",
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
      }
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

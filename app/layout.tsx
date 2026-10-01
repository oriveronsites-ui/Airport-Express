import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MobileActionBar } from "@/components/MobileActionBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ViewportMotion } from "@/components/ViewportMotion";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Airport Express | San Francisco transportation",
    template: "%s | Airport Express",
  },
  description: site.shortDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Airport Express | San Francisco transportation",
    description: site.shortDescription,
    url: site.url,
    images: [
      {
        url: site.shareImage,
        width: 1200,
        height: 630,
        alt: "Airport Express van against a San Francisco Bay background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airport Express | San Francisco transportation",
    description: site.shortDescription,
    images: [site.shareImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#17335a",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phoneDisplay,
  email: site.email,
  image: `${site.url}${site.shareImage}`,
  description: site.shortDescription,
  areaServed: "San Francisco Bay Area",
  serviceType: [
    "Airport transportation",
    "Private point-to-point transportation",
    "Local and regional transportation",
    "Group and charter transportation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <SiteHeader />
        <ViewportMotion />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}

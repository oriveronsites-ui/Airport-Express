import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MobileActionBar } from "@/components/MobileActionBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
        url: "/images/san-francisco-bay.jpg",
        width: 1280,
        height: 853,
        alt: "San Francisco skyline across the Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airport Express | San Francisco transportation",
    description: site.shortDescription,
    images: ["/images/san-francisco-bay.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
  image: `${site.url}/images/san-francisco-bay.jpg`,
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

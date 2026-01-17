import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const primaryFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-primary",
  display: "swap",
})

const secondaryFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.horizonadv.co.za"),
  title: {
    default: "Horizon Adventures - Adventure Tourism in South Africa",
    template: "%s | Horizon Adventures"
  },
  description:
    "Horizon Adventures specializes in Team Building Tours, Youth Camps, School Camps, Church Camps, Leadership Camps, Events, and Hiking across South Africa. Based in Pretoria, Gauteng. Book your unforgettable adventure today!",
  keywords: [
    "adventure tourism South Africa",
    "team building tours",
    "youth camps South Africa",
    "school camps",
    "church camps",
    "leadership camps",
    "hiking tours South Africa",
    "Cape Town tours",
    "Mpumalanga Panorama Route",
    "Hartbeespoort adventure",
    "Durban tours",
    "adventure activities South Africa",
    "group tours South Africa",
    "outdoor experiences",
    "Pretoria adventure tourism"
  ],
  authors: [{ name: "Horizon Adventures" }],
  creator: "Horizon Adventures",
  publisher: "Horizon Adventures",
  applicationName: "Horizon Adventures",
  category: "Travel & Tourism",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.horizonadv.co.za",
    siteName: "Horizon Adventures",
    title: "Horizon Adventures - Adventure Tourism in South Africa",
    description: "Specialists in Team Building, Tour Packages, Youth Camps, Leadership Camps, Events, and Hiking across South Africa. Based in Pretoria.",
    images: [
      {
        url: "/images/panorama-route-scenic.webp",
        width: 1200,
        height: 630,
        alt: "Horizon Adventures - South African Adventure Tourism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Adventures - Adventure Tourism in South Africa",
    description: "Specialists in Team Building, Tour Packages, Youth Camps, Leadership Camps, Events, and Hiking across South Africa.",
    images: ["/images/panorama-route-scenic.webp"],
    creator: "@horizonadventuresza",
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
  icons: {
    icon: [
      {
        url: "/images/image.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/image.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/image.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/image.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/images/image.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.horizonadv.co.za",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Horizon Adventures",
    description: "Adventure tourism company specializing in Team Building Tours, Youth Camps, School Camps, Church Camps, Leadership Camps, Events, and Hiking across South Africa.",
    url: "https://www.horizonadv.co.za",
    logo: "https://www.horizonadv.co.za/images/image.png",
    image: "https://www.horizonadv.co.za/images/panorama-route-scenic.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria",
      addressRegion: "Gauteng",
      addressCountry: "ZA"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-60-438-1561",
      contactType: "Customer Service",
      email: "Horizonadventuresza@gmail.com"
    },
    sameAs: [
      "https://www.facebook.com/HorizonAdventuresZA/",
      "https://www.instagram.com/horizonadventuresza"
    ],
    areaServed: {
      "@type": "Country",
      name: "South Africa"
    },
    serviceType: [
      "Team Building Tours",
      "Youth Camps",
      "School Camps",
      "Church Camps",
      "Leadership Camps",
      "Adventure Tours",
      "Hiking Tours"
    ]
  }

  return (
    <html lang="en-ZA" suppressHydrationWarning className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body className={`${secondaryFont.className} antialiased overflow-x-hidden`} suppressHydrationWarning>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

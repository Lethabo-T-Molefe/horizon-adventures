import Navbar from "@/components/navbar"
import { FeaturedTours } from "@/components/featured-tours"
import { Activities } from "@/components/activities"
import { CouplesRetreat } from "@/components/couples-retreat"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tours & Adventures",
  description: "Explore our featured tours including Cape Town Heritage Tour, Mpumalanga Panorama Route, Hartbeespoort Adventure Tour, and Durban Coastal Adventure. From multi-day cultural tours to thrilling day activities.",
  keywords: ["Cape Town tours", "Mpumalanga tours", "Hartbeespoort tours", "Durban tours", "adventure tours South Africa", "cultural tours"],
  openGraph: {
    title: "Tours & Adventures | Horizon Adventures",
    description: "Explore our featured tours including Cape Town Heritage Tour, Mpumalanga Panorama Route, Hartbeespoort Adventure Tour, and Durban Coastal Adventure.",
    url: "https://www.horizonadv.co.za/tours",
  },
}

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Our Tours & Adventures"
        subtitle="Choose your adventure - from multi-day cultural tours to thrilling day activities"
        backgroundImage="/images/panorama-route-scenic.webp"
      />
      <FeaturedTours />
      <CouplesRetreat />
      <Activities />
      <Footer />
    </main>
  )
}

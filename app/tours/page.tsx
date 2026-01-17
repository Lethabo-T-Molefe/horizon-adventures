import Navbar from "@/components/navbar"
import { FeaturedTours } from "@/components/featured-tours"
import { Activities } from "@/components/activities"
import { CouplesRetreat } from "@/components/couples-retreat"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Our Tours & Adventures"
        subtitle="Choose your adventure - from multi-day cultural tours to thrilling day activities"
        backgroundImage="/dramatic-south-african-mountain-landscape-vista-pa.jpg"
      />
      <FeaturedTours />
      <CouplesRetreat />
      <Activities />
      <Footer />
    </main>
  )
}

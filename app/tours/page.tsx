import { Header } from "@/components/header"
import { FeaturedTours } from "@/components/featured-tours"
import { Activities } from "@/components/activities"
import { Footer } from "@/components/footer"

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FeaturedTours />
      <Activities />
      <Footer />
    </main>
  )
}

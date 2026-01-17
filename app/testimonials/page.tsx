import Navbar from "@/components/navbar"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Testimonials"
        subtitle="Hear from our guests about their unforgettable adventures with us"
        backgroundImage="/hartbeespoort-dam-sunset-serene-water-landscape.jpg"
      />
      <Testimonials />
      <Footer />
    </main>
  )
}

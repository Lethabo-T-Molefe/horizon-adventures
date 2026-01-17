import Navbar from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TripTypesShowcase } from "@/components/trip-types-showcase"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
              Adventure Tourism Specialists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based in Pretoria, Gauteng, South Africa. We're thrilled to be your adventure tourism specialists! 
              Join us for unforgettable experiences in Team Building, Tour Packages, Youth Camps, Leadership Camps, 
              Events, and Hiking. Join our growing community of adventure enthusiasts!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-muted rounded-lg">
              <div className="text-4xl font-bold text-accent mb-4">7+</div>
              <h3 className="text-xl font-bold text-primary mb-2">Service Types</h3>
              <p className="text-muted-foreground">
                From team building to cultural tours, we offer diverse experiences for every group
              </p>
            </div>
            <div className="text-center p-8 bg-muted rounded-lg">
              <div className="text-4xl font-bold text-accent mb-4">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Featured Tours</h3>
              <p className="text-muted-foreground">
                Cape Town, Mpumalanga Panorama Route, and Hartbeespoort Adventure Tours
              </p>
            </div>
            <div className="text-center p-8 bg-muted rounded-lg">
              <div className="text-4xl font-bold text-accent mb-4">R4,500+</div>
              <h3 className="text-xl font-bold text-primary mb-2">Starting From</h3>
              <p className="text-muted-foreground">
                Affordable multi-day tour packages with accommodation, meals, and activities included
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/tours">
              <button className="px-10 py-4 bg-primary text-white font-bold text-sm tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
                Explore All Tours
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Trip Types Section */}
      <TripTypesShowcase />

      <Footer />
    </main>
  )
}

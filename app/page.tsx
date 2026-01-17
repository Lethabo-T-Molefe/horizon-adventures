import Navbar from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TripTypesShowcase } from "@/components/trip-types-showcase"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-bold mb-3 sm:mb-4">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-4 sm:mb-6 px-4">
              Adventure Tourism Specialists
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Based in Pretoria, Gauteng, South Africa. We're thrilled to be your adventure tourism specialists! 
              Join us for unforgettable experiences in Team Building, Tour Packages, Youth Camps, Leadership Camps, 
              Events, and Hiking. Join our growing community of adventure enthusiasts!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div className="text-center p-4 sm:p-6 md:p-8 bg-muted rounded-lg">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-3 sm:mb-4">7+</div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Service Types</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                From team building to cultural tours, we offer diverse experiences for every group
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-muted rounded-lg">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-3 sm:mb-4">3</div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Featured Tours</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Cape Town, Mpumalanga Panorama Route, and Hartbeespoort Adventure Tours
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-muted rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-3 sm:mb-4">R4,500+</div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Starting From</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Affordable multi-day tour packages with accommodation, meals, and activities included
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/tours">
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary text-white font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
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

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </main>
  )
}

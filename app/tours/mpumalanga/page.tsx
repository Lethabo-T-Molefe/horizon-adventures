import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mpumalanga Panorama Route Tour",
  description: "Nothing short of spectacular! Experience the breathtaking Panorama Route with Blyde River Canyon, waterfalls, scenic viewpoints, pool relaxation, and braai dinners. From R4,851 per person.",
  keywords: ["Mpumalanga tour", "Panorama Route", "Blyde River Canyon", "Mpumalanga adventure", "scenic tours South Africa"],
  openGraph: {
    title: "Mpumalanga Panorama Route Tour | Horizon Adventures",
    description: "Experience the breathtaking Panorama Route with Blyde River Canyon, waterfalls, and scenic viewpoints.",
    url: "https://www.horizonadv.co.za/tours/mpumalanga",
  },
}

export default function MpumalangaTourPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Mpumalanga Panorama Route Tour"
        subtitle="Nothing short of spectacular! Experience breathtaking landscapes and natural wonders"
        backgroundImage="/blyde-river-canyon-panorama-route-viewpoint-waterf.jpg"
      />
      
      {/* Tour Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="text-center p-4 sm:p-6 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-2">Duration</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">4 Days</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">3 nights / 4 days</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-2">Price</p>
                <p className="text-xl sm:text-2xl font-bold text-accent">R4,851</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">per person</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">Mpumalanga</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Panorama Route</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nothing short of spectacular! Experience the breathtaking Panorama Route with its dramatic 
                landscapes, stunning waterfalls, and iconic viewpoints. This tour showcases the natural wonders 
                of Mpumalanga, including the magnificent Blyde River Canyon and numerous scenic stops along the route.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perfect for participants from North West and Northern Cape provinces! Join us for an unforgettable 
                experience from 28-31 March 2025. We're co-creating memorable experiences that blend adventure, 
                relaxation, and authentic South African culture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Day 2 of our Mpumalanga tour is particularly memorable, featuring the most spectacular views, 
                pool relaxation, and braai dinners under the African sky. Ready for a day of exploration? 
                This is the adventure for you!
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 1: Arrival & Panorama Route Introduction</h3>
                  <p className="text-muted-foreground">
                    Departure from Pretoria, arrival in Mpumalanga, and introduction to the Panorama Route. 
                    Settle into your accommodation and prepare for an incredible journey through nature's masterpiece.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 1: Arrival & Co-Creating Experiences</h3>
                  <p className="text-muted-foreground">
                    Arrive in Mpumalanga and begin co-creating memorable experiences together. Settle into your 
                    accommodation and get ready for an unforgettable adventure through the Panorama Route.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 2: Panorama Route & Natural Wonders</h3>
                  <p className="text-muted-foreground mb-3">
                    Day 2 was nothing short of spectacular! Explore the breathtaking Panorama Route with its must-see 
                    spots, visit iconic viewpoints, and witness natural wonders that will leave you in awe. This is 
                    the highlight of the tour featuring the most dramatic landscapes.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    After a day of exploration, wrap it up perfectly by unwinding at the pool—a refreshing way to 
                    relax and reflect on the day's adventures.
                  </p>
                  <p className="text-muted-foreground">
                    The evening brings a truly memorable experience: a delicious braai dinner under the African sky. 
                    Enjoy traditional South African cuisine while surrounded by the natural beauty of Mpumalanga—truly 
                    a day to remember!
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 3: Waterfalls & Cultural Heritage</h3>
                  <p className="text-muted-foreground">
                    Discover stunning waterfalls, take scenic drives through the region, and visit cultural 
                    heritage sites. Experience the diverse beauty of Mpumalanga's natural and cultural landscape.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 4: Final Explorations & Departure</h3>
                  <p className="text-muted-foreground">
                    Final explorations of the Panorama Route's hidden gems, last scenic stops, and return journey 
                    to Pretoria with unforgettable memories of South Africa's natural beauty.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Transportation",
                  "3 nights accommodation",
                  "Expert local guides",
                  "Panorama Route highlights",
                  "Blyde River Canyon visit",
                  "Waterfall tours",
                  "Scenic viewpoint stops",
                  "Meals included",
                  "All entrance fees",
                  "Cultural site visits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-muted rounded-lg">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Tour Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {["Blyde River Canyon", "Panorama Route", "Waterfalls", "Scenic Viewpoints", "Cultural Heritage", "Natural Wonders", "Expert Guides", "Small Groups"].map((highlight, idx) => (
                  <span key={idx} className="px-4 py-2 bg-accent/10 text-primary rounded-full text-sm font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Tour Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { src: "/images/panorama-route-scenic.webp", alt: "Panorama Route Scenic View" },
                  { src: "/images/panorama-mountain.webp", alt: "Panorama Mountain" },
                  { src: "/images/mpumalanga-mountain-view.webp", alt: "Mpumalanga Mountain View" },
                  { src: "/images/braai-dinner-activity1.webp", alt: "Braai Dinner Experience" },
                ].map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center p-4 sm:p-6 md:p-8 bg-muted rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Ready for Your Panorama Route Adventure?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Book now or contact us for custom group packages and special pricing.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs sm:text-sm tracking-wider">
                    Book This Tour
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 border-2 border-primary text-primary font-bold uppercase text-xs sm:text-sm tracking-wider hover:bg-primary hover:text-white">
                    Request Custom Package
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

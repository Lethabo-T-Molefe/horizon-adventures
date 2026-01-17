import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cape Town Heritage Tour",
  description: "Experience Cape Town's rich history with our 3+ day heritage tour. Visit Robben Island, explore Table Mountain, unwind at Camps Bay, and witness Atlantic Ocean sunsets. From R4,500 per person.",
  keywords: ["Cape Town tour", "Robben Island tour", "Table Mountain tour", "Cape Town heritage", "Western Cape tours"],
  openGraph: {
    title: "Cape Town Heritage Tour | Horizon Adventures",
    description: "Experience Cape Town's rich history with our 3+ day heritage tour. Visit Robben Island, explore Table Mountain, and more.",
    url: "https://www.horizonadv.co.za/tours/cape-town",
  },
}

export default function CapeTownTourPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Cape Town Heritage Tour"
        subtitle="Embark on a journey through South Africa's most historic city"
        backgroundImage="/cape-town-robben-island-table-mountain-aerial-view.jpg"
      />
      
      {/* Tour Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Duration</p>
                <p className="text-2xl font-bold text-primary">3+ Days</p>
                <p className="text-sm text-muted-foreground mt-1">3 nights / 4 days</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Price</p>
                <p className="text-2xl font-bold text-accent">R4,500</p>
                <p className="text-sm text-muted-foreground mt-1">per person</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</p>
                <p className="text-2xl font-bold text-primary">Cape Town</p>
                <p className="text-sm text-muted-foreground mt-1">Western Cape</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Embark on a journey through South Africa's most historic city. This multi-day tour takes you to 
                iconic landmarks including Robben Island—a place steeped in history and resilience. Explore Table 
                Mountain, discover the vibrant city culture, and immerse yourself in the rich heritage of Cape Town.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Cape Town Heritage Tour is nothing short of spectacular, offering a perfect blend of history, 
                culture, and natural beauty. Each day brings new discoveries and unforgettable experiences.
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 1: Arrival & Cape Town Magic</h3>
                  <p className="text-muted-foreground mb-3">
                    Thrilled to present Day 1 of our Cape Town Tour! Start your adventure with a delicious breakfast 
                    before heading to Table Mountain. Experience the magic of "painting the town pink" with themed 
                    activities and breathtaking cableway views.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    After exploring Table Mountain, unwind at Camps Bay—one of Cape Town's most beautiful beaches. 
                    Immerse yourself in the Atlantic Ocean's refreshing waters and soak up the vibrant beach atmosphere.
                  </p>
                  <p className="text-muted-foreground">
                    The day wraps up perfectly with a stunning Atlantic Ocean sunset viewing. Watch as the sun dips 
                    into the ocean, creating a spectacular display of nature's beauty—truly a moment to remember!
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 2: Robben Island & Historical Tour</h3>
                  <p className="text-muted-foreground">
                    Embarking on the journey to Robben Island—a place steeped in history and resilience. 
                    Experience a powerful historical tour, followed by afternoon city exploration and cultural sites.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 3: Table Mountain & Scenic Exploration</h3>
                  <p className="text-muted-foreground">
                    Table Mountain adventure with breathtaking views, scenic drives along the coast, and visits 
                    to cultural landmarks. Experience the natural beauty that makes Cape Town world-famous.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 4: Final Explorations & Departure</h3>
                  <p className="text-muted-foreground">
                    Final explorations of Cape Town's hidden gems, last-minute shopping or sightseeing, and 
                    return journey to Pretoria with memories to last a lifetime.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Transportation from Pretoria",
                  "Accommodation (3 nights)",
                  "Expert local guides",
                  "Robben Island visit & ferry",
                  "Table Mountain excursion",
                  "Comprehensive city tour",
                  "Historical site visits",
                  "Some meals included",
                  "All entrance fees",
                  "24/7 support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-muted rounded-lg">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {["Robben Island", "Table Mountain", "City Exploration", "Historical Sites", "Cultural Heritage", "Scenic Views", "Expert Guides", "Small Groups"].map((highlight, idx) => (
                  <span key={idx} className="px-4 py-2 bg-accent/10 text-primary rounded-full text-sm font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { src: "/images/cape-town-table-mountain.webp", alt: "Table Mountain" },
                  { src: "/images/cape-town-robben-island.webp", alt: "Robben Island" },
                  { src: "/images/cape-town-ocean-view.webp", alt: "Cape Town Ocean View" },
                  { src: "/images/cape-town-boat-ride.webp", alt: "Boat Ride" },
                  { src: "/images/cape-town-hike.webp", alt: "Cape Town Hiking" },
                  { src: "/images/cape-town-vineyard.webp", alt: "Cape Town Vineyard" },
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
            <div className="text-center p-8 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready for Your Cape Town Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Book now or contact us for custom group packages and special pricing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase text-sm tracking-wider">
                    Book This Tour
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 py-6 border-2 border-primary text-primary font-bold uppercase text-sm tracking-wider hover:bg-primary hover:text-white">
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

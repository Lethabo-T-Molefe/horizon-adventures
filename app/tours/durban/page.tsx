import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Durban Coastal Adventure",
  description: "Experience the warmth of the Indian Ocean and vibrant coastal culture in Durban. Discover golden beaches, Zulu heritage, and coastal activities. Custom tour packages available.",
  keywords: ["Durban tour", "Indian Ocean", "coastal tour", "KwaZulu-Natal tours", "Durban adventure"],
  openGraph: {
    title: "Durban Coastal Adventure | Horizon Adventures",
    description: "Experience the warmth of the Indian Ocean and vibrant coastal culture in Durban.",
    url: "https://www.horizonadv.co.za/tours/durban",
  },
}

export default function DurbanTourPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Durban Coastal Adventure"
        subtitle="Experience the warmth of the Indian Ocean and vibrant coastal culture"
        backgroundImage="/river-rafting-south-africa-adventure-action.jpg"
      />
      
      {/* Tour Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Duration</p>
                <p className="text-2xl font-bold text-primary">Custom</p>
                <p className="text-sm text-muted-foreground mt-1">Multi-day options</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Price</p>
                <p className="text-2xl font-bold text-accent">Custom</p>
                <p className="text-sm text-muted-foreground mt-1">Contact for details</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</p>
                <p className="text-2xl font-bold text-primary">Durban</p>
                <p className="text-sm text-muted-foreground mt-1">KwaZulu-Natal</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our guests arrive safely in Durban, greeted by the warmth of the Indian Ocean and the vibrant 
                energy of South Africa's coastal gem. May the warmth of Durban and the beauty of the Indian 
                Ocean make your stay truly unforgettable!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experience the perfect blend of coastal relaxation, cultural immersion, and adventure activities. 
                Durban offers a unique South African experience with its golden beaches, warm waters, and rich 
                cultural heritage.
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Highlights</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Indian Ocean Immersion</h3>
                  <p className="text-muted-foreground">
                    Experience the warmth and beauty of the Indian Ocean. Whether you're unwinding on the golden 
                    beaches, taking a refreshing dip, or enjoying water activities, the ocean provides the perfect 
                    backdrop for relaxation and adventure.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Coastal Culture & Cuisine</h3>
                  <p className="text-muted-foreground">
                    Discover Durban's vibrant culture, from the bustling Golden Mile to the rich Zulu heritage. 
                    Enjoy authentic coastal cuisine, including the famous bunny chow, and experience the warm 
                    hospitality of KwaZulu-Natal.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Adventure Activities</h3>
                  <p className="text-muted-foreground">
                    From water sports to cultural tours, Durban offers diverse activities for every adventure 
                    enthusiast. Explore the city's landmarks, enjoy beach activities, or venture into the 
                    surrounding natural areas.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Transportation",
                  "Accommodation",
                  "Expert local guides",
                  "Indian Ocean beach access",
                  "Cultural site visits",
                  "Coastal activities",
                  "Meals included",
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
                {["Indian Ocean", "Golden Beaches", "Coastal Culture", "Zulu Heritage", "Water Activities", "Cultural Tours", "Expert Guides", "Warm Hospitality"].map((highlight, idx) => (
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
                  { src: "/images/durban-ushaka-marine-world.webp", alt: "uShaka Marine World" },
                  { src: "/images/river-rafting.webp", alt: "Water Activities" },
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
              <h3 className="text-2xl font-bold text-primary mb-4">Ready for Your Durban Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for custom Durban tour packages tailored to your group's needs and preferences.
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

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hartbeespoort Adventure Tour",
  description: "Perfect for adventure lovers! Experience dam activities, accommodation, guided exploration, and adventure experiences at Hartbeespoort. From R4,990 per person for 2 nights/3 days.",
  keywords: ["Hartbeespoort tour", "Hartbeespoort Dam", "adventure tour", "dam activities", "North West Province tours"],
  openGraph: {
    title: "Hartbeespoort Adventure Tour | Horizon Adventures",
    description: "Perfect for adventure lovers! Experience dam activities and adventure experiences at Hartbeespoort.",
    url: "https://www.horizonadv.co.za/tours/hartbeespoort",
  },
}

export default function HartbeespoortTourPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Hartbeespoort Adventure Tour"
        subtitle="Perfect for adventure lovers! Experience dam activities and thrilling adventures"
        backgroundImage="/hartbeespoort-dam-adventure-activities-sunset.jpg"
      />
      
      {/* Tour Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Duration</p>
                <p className="text-2xl font-bold text-primary">3 Days</p>
                <p className="text-sm text-muted-foreground mt-1">2 nights / 3 days</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Price</p>
                <p className="text-2xl font-bold text-accent">R4,990</p>
                <p className="text-sm text-muted-foreground mt-1">per person</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</p>
                <p className="text-2xl font-bold text-primary">Hartbeespoort</p>
                <p className="text-sm text-muted-foreground mt-1">Dam Area</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perfect for adventure lovers! This comprehensive tour includes accommodation, guided exploration, 
                and a variety of dam-area activities. Experience the beauty of Hartbeespoort while enjoying 
                thrilling adventures and serene moments by the water.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking a romantic getaway, a friends' adventure, or a team-building experience, 
                our Hartbeespoort Adventure Tour offers the perfect blend of excitement and relaxation. The dam 
                area provides stunning sunsets and a peaceful atmosphere, making it ideal for couples and groups 
                looking to connect through adventure.
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 1: Arrival & Welcome Activities</h3>
                  <p className="text-muted-foreground">
                    Arrival at Hartbeespoort Dam, accommodation check-in, and welcome activities. Get oriented 
                    with the area and prepare for an exciting adventure ahead. Evening relaxation by the dam.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 2: Full Day of Adventure</h3>
                  <p className="text-muted-foreground">
                    Full day of dam activities and adventure experiences. Choose from water activities, hiking, 
                    quad biking, or other thrilling options. Experience the best of what Hartbeespoort has to offer 
                    with expert guidance and support.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Day 3: Morning Activities & Departure</h3>
                  <p className="text-muted-foreground">
                    Morning activities and final adventures, followed by departure. Leave with unforgettable memories 
                    of your Hartbeespoort adventure experience.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "2 nights accommodation",
                  "Transportation (optional)",
                  "Dam activities",
                  "Guided exploration",
                  "Adventure experiences",
                  "All meals included",
                  "Expert guides",
                  "Safety equipment",
                  "24/7 support",
                  "Scenic dam views"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-muted rounded-lg">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Available Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Water activities on the dam",
                  "Quad biking adventures",
                  "Hiking trails",
                  "Scenic boat rides",
                  "Sunset viewing",
                  "Team building challenges",
                  "Relaxation time",
                  "Photography opportunities"
                ].map((activity, idx) => (
                  <div key={idx} className="p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Tour Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {["Dam Activities", "Accommodation", "Adventure Experiences", "Scenic Views", "Expert Guides", "Small Groups", "Perfect for Couples", "Group Friendly"].map((highlight, idx) => (
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
                  { src: "/images/hartbeespoort-dam.webp", alt: "Hartbeespoort Dam" },
                  { src: "/images/hartbeespoort-hiking-activity.webp", alt: "Hiking Activity" },
                  { src: "/images/hartbeespoort-camp-activity-1.webp", alt: "Camp Activities" },
                  { src: "/images/quad-biking-activity-1.webp", alt: "Quad Biking" },
                  { src: "/images/braai-dinner-activity1.webp", alt: "Braai Dinner" },
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
              <h3 className="text-2xl font-bold text-primary mb-4">Ready for Your Hartbeespoort Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Book now or contact us for custom group packages, couples retreats, and special pricing.
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

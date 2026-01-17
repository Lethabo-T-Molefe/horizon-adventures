import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import BounceCards from "@/components/bounce-cards"
import { PageHero } from "@/components/page-hero"

const featuredImages = [
  "/images/cape-town-table-mountain.webp",
  "/images/panorama-route-scenic.webp",
  "/images/hartbeespoort-dam.webp",
  "/images/river-rafting.webp",
  "/images/kloofing-activity.webp",
  "/images/cape-town-ocean-view.webp",
  "/images/mpumalanga-mountain-view.webp",
  "/images/cape-town-vineyard.webp"
]

export default function FeaturedDestinationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Featured Destinations"
        subtitle="Discover the breathtaking destinations we visit on our unforgettable tours"
        backgroundImage="/images/cape-town-table-mountain.webp"
      />
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Featured Destinations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
              Explore Our Adventures
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the breathtaking destinations we visit on our unforgettable tours
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <BounceCards
              images={featuredImages}
              containerWidth={800}
              containerHeight={500}
              animationDelay={0.3}
              animationStagger={0.08}
              enableHover={true}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

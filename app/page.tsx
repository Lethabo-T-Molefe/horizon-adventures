import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TripTypesShowcase } from "@/components/trip-types-showcase"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import BounceCards from "@/components/bounce-cards"

const featuredImages = [
  "/cape-town-robben-island-table-mountain-aerial-view.jpg",
  "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg",
  "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
  "/river-rafting-south-africa-action-adventure-white-.jpg",
  "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg"
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      
      {/* Bounce Cards Section */}
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

      <TripTypesShowcase />
      <Testimonials />
      <Footer />
    </main>
  )
}

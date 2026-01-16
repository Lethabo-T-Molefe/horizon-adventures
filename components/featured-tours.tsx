import { Button } from "@/components/ui/button"

const tours = [
  {
    title: "Cape Town Heritage",
    location: "Western Cape",
    duration: "Three Days",
    price: "R4,500",
    image: "/cape-town-robben-island-table-mountain-aerial-view.jpg",
    highlights: "Robben Island · Table Mountain · City exploration · Historical sites",
  },
  {
    title: "Mpumalanga Panorama",
    location: "Mpumalanga Province",
    duration: "Four Days",
    price: "R4,851",
    image: "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg",
    highlights: "Blyde River Canyon · Waterfalls · Scenic viewpoints · Cultural heritage",
  },
  {
    title: "Hartbeespoort Adventure",
    location: "Hartbeespoort Dam",
    duration: "Three Days",
    price: "R4,990",
    image: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
    highlights: "Dam activities · Accommodation · Guided exploration · Adventure experiences",
  },
]

export function FeaturedTours() {
  return (
    <section id="tours" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Tour Collection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto">
            Featured Adventures
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Carefully curated multi-day journeys through South Africa's most iconic destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-muted hover:border-accent transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 font-bold text-sm">
                  From {tour.price}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-bold mb-2">{tour.location}</p>
                  <h3 className="text-2xl font-bold text-primary tracking-tight mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{tour.duration}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">{tour.highlights}</p>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider h-12 group-hover:bg-accent group-hover:text-primary transition-colors">
                  View Tour Details →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-secondary text-white font-bold text-sm tracking-wide uppercase hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
          >
            Request Custom Tour
          </a>
        </div>
      </div>
    </section>
  )
}

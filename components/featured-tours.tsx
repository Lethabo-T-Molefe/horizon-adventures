import { Button } from "@/components/ui/button"
import Link from "next/link"

const tours = [
  {
    title: "Cape Town Heritage Tour",
    location: "Western Cape",
    duration: "3+ Days",
    nights: "3 nights / 4 days",
    price: "R4,500",
    pricePerPerson: true,
    image: "/cape-town-robben-island-table-mountain-aerial-view.jpg",
    highlights: "Robben Island · Table Mountain · City exploration · Historical sites",
    description: "Thrilled to present our Cape Town Heritage Tour! Embark on a journey through South Africa's most historic city. Experience the magic of Table Mountain with themed activities, unwind at Camps Bay in the Atlantic Ocean, and witness breathtaking sunsets. This multi-day tour takes you to iconic landmarks including Robben Island—a place steeped in history and resilience. Truly unforgettable!",
    includes: [
      "Transportation from Pretoria",
      "Accommodation",
      "Expert guides",
      "Robben Island visit",
      "Table Mountain excursion",
      "City tour",
      "Historical site visits",
      "Some meals included"
    ],
    itinerary: [
      "Day 1: Departure from Pretoria, arrival in Cape Town, city orientation",
      "Day 2: Journey to Robben Island, historical tour, afternoon city exploration",
      "Day 3: Table Mountain adventure, scenic drives, cultural sites",
      "Day 4: Final explorations, return journey"
    ]
  },
  {
    title: "Mpumalanga Panorama Route Tour",
    location: "Mpumalanga Province",
    duration: "4 Days",
    nights: "3 nights / 4 days",
    price: "R4,851",
    pricePerPerson: true,
    image: "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg",
    highlights: "Blyde River Canyon · Waterfalls · Scenic viewpoints · Cultural heritage",
    description: "Nothing short of spectacular! Experience the breathtaking Panorama Route with its dramatic landscapes, stunning waterfalls, and iconic viewpoints. Day 2 wraps up perfectly with pool relaxation and delicious braai dinners under the African sky. We're co-creating memorable experiences that showcase Mpumalanga's natural wonders, including the magnificent Blyde River Canyon. Truly a day to remember!",
    includes: [
      "Transportation",
      "3 nights accommodation",
      "Expert guides",
      "Panorama Route highlights",
      "Blyde River Canyon visit",
      "Waterfall tours",
      "Scenic viewpoint stops",
      "Meals included"
    ],
    itinerary: [
      "Day 1: Departure, arrival in Mpumalanga, Panorama Route introduction",
      "Day 2: Blyde River Canyon exploration, breathtaking viewpoints, natural wonders",
      "Day 3: Waterfall tours, scenic drives, cultural heritage sites",
      "Day 4: Final explorations, return journey"
    ]
  },
  {
    title: "Hartbeespoort Adventure Tour",
    location: "Hartbeespoort Dam",
    duration: "3 Days",
    nights: "2 nights / 3 days",
    price: "R4,990",
    pricePerPerson: true,
    image: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
    highlights: "Dam activities · Accommodation · Guided exploration · Adventure experiences",
    description: "Perfect for adventure lovers! This comprehensive tour includes accommodation, guided exploration, and a variety of dam-area activities. Experience the beauty of Hartbeespoort while enjoying thrilling adventures and serene moments by the water.",
    includes: [
      "2 nights accommodation",
      "Transportation",
      "Dam activities",
      "Guided exploration",
      "Adventure experiences",
      "Meals included",
      "Expert guides"
    ],
    itinerary: [
      "Day 1: Arrival, accommodation check-in, welcome activities",
      "Day 2: Full day of dam activities and adventure experiences",
      "Day 3: Morning activities, departure"
    ]
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
            Join us for unforgettable experiences! We're co-creating memorable adventures through South Africa's 
            most iconic destinations. Nothing short of spectacular!
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">{tour.nights || tour.duration}</p>
                  <p className="text-lg font-bold text-accent">{tour.price} {tour.pricePerPerson ? "per person" : ""}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm mb-3">{tour.description || tour.highlights}</p>

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Includes:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {tour.includes?.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                    {tour.includes && tour.includes.length > 4 && (
                      <li className="text-accent">+ {tour.includes.length - 4} more</li>
                    )}
                  </ul>
                </div>

                <Link href={index === 0 ? "/tours/cape-town" : index === 1 ? "/tours/mpumalanga" : "/tours/hartbeespoort"}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider h-12 group-hover:bg-accent group-hover:text-primary transition-colors">
                    View Tour Details →
                  </Button>
                </Link>
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

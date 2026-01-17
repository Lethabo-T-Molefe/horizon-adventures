import { Button } from "@/components/ui/button"
import Link from "next/link"

const retreatPackages = [
  {
    title: "Day Adventure Retreat",
    duration: "08:00 - 19:00",
    price: "R960",
    priceUnit: "per couple",
    description: "Perfect for couples and friends seeking a day of adventure and connection. Experience the beauty of Hartbeespoort Dam with a full day of activities, meals, and guided experiences.",
    includes: [
      "Full day activities",
      "Lunch and refreshments",
      "Guided experiences",
      "Adventure activities",
      "Scenic exploration"
    ],
    highlights: "Dam activities · Scenic views · Adventure experiences · Quality time together"
  },
  {
    title: "Weekend Adventure Retreat",
    duration: "2 nights / 3 days",
    price: "Custom pricing",
    priceUnit: "per couple",
    description: "An extended adventure retreat perfect for couples and friend groups. Includes accommodation, all activities, meals, and guided experiences in the beautiful Hartbeespoort area.",
    includes: [
      "2 nights accommodation",
      "All meals included",
      "Adventure activities",
      "Guided experiences",
      "Transportation (optional)",
      "Expert guides"
    ],
    highlights: "Accommodation · All activities · Meals · Guided exploration · Relaxation time"
  }
]

export function CouplesRetreat() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-bold mb-3 sm:mb-4">Special Events</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            Couples & Friends Adventure Retreats
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Curated experiences for couples and small groups seeking meaningful connections through adventure. 
            Perfect for romantic getaways or friend group adventures at Hartbeespoort Dam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {retreatPackages.map((retreat, index) => (
            <div
              key={index}
              className="group bg-muted border-2 border-transparent hover:border-accent transition-all duration-300 hover:shadow-xl p-4 sm:p-6 md:p-8"
            >
              <div className="mb-4 sm:mb-6">
                <p className="text-xs uppercase tracking-wider text-accent font-bold mb-2">{retreat.duration}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight mb-2">{retreat.title}</h3>
                <p className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4">
                  {retreat.price} <span className="text-sm sm:text-base text-muted-foreground font-normal">{retreat.priceUnit}</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">{retreat.description}</p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">What's Included:</p>
                <ul className="space-y-2">
                  {retreat.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-accent mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-muted-foreground mb-6 italic">{retreat.highlights}</p>

              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider h-12">
                  Book This Retreat →
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Looking for a custom retreat experience? We can tailor packages to your group's needs.
          </p>
          <Link href="/contact">
            <Button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-secondary text-white font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg">
              Request Custom Package
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

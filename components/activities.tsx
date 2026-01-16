import { Button } from "@/components/ui/button"

const activities = [
  {
    title: "River Rafting",
    description: "Navigate thrilling rapids with expert guides through South Africa's most dramatic waterways.",
    image: "/river-rafting-south-africa-action-adventure-white-.jpg",
  },
  {
    title: "Kloofing",
    description: "Canyon exploration combining hiking, climbing, and swimming through pristine natural gorges.",
    image: "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg",
  },
]

export function Activities() {
  return (
    <section id="discover" className="py-0">
      {activities.map((activity, index) => (
        <div key={index} className="relative h-[70vh] md:h-screen flex items-center group">
          <div className="absolute inset-0">
            <img
              src={activity.image || "/placeholder.svg"}
              alt={activity.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 z-10 relative">
            <div className="max-w-2xl">
              <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Experience</p>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{activity.title}</h3>
              <p className="text-xl text-white/95 leading-relaxed font-medium mb-8">{activity.description}</p>

              <Button className="px-8 py-6 bg-accent text-primary font-bold text-sm tracking-wide uppercase hover:bg-accent/90 transition-all hover:scale-105 shadow-xl h-auto">
                Book This Activity →
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

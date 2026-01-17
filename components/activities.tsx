import { Button } from "@/components/ui/button"

const activities = [
  {
    title: "River Rafting",
    description: "Navigate thrilling rapids with expert guides through South Africa's most dramatic waterways. Experience the rush of white-water adventure while taking in stunning natural scenery. Perfect for thrill-seekers and adventure lovers!",
    image: "/river-rafting-south-africa-action-adventure-white-.jpg",
    details: "Suitable for groups, includes safety equipment and expert guides. Varying difficulty levels available."
  },
  {
    title: "Kloofing",
    description: "Canyon exploration combining hiking, climbing, and swimming through pristine natural gorges. Jump into crystal-clear pools, navigate through canyons, and experience nature's playground. An adventure that combines physical challenge with breathtaking beauty.",
    image: "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg",
    details: "Includes hiking, jumping, and swimming. Safety equipment provided. Suitable for moderate fitness levels."
  },
  {
    title: "Hot Air Balloon Rides",
    description: "Soar above South Africa's breathtaking landscapes in a hot air balloon. Experience the magic of floating through the sky while taking in panoramic views of mountains, valleys, and natural wonders. A truly unforgettable and empowering experience!",
    image: "/dramatic-south-african-mountain-landscape-vista-pa.jpg",
    details: "45-60 minute flights available. Includes safety briefing, equipment, and expert pilots. Perfect for special occasions and group experiences."
  },
  {
    title: "Braai Dinners Under African Sky",
    description: "Experience authentic South African culture with traditional braai dinners under the African sky. Enjoy delicious grilled cuisine, warm hospitality, and unforgettable evenings surrounded by nature's beauty. Perfect for group bonding and cultural immersion.",
    image: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
    details: "Traditional South African barbecue experience. Includes meals, setup, and cultural entertainment. Perfect for groups and special occasions."
  },
  {
    title: "Ocean Immersion & Pool Relaxation",
    description: "Unwind and relax with ocean immersion experiences at Camps Bay (Atlantic Ocean) or Durban (Indian Ocean), or enjoy pool relaxation after a day of adventure. Perfect for combining adventure with relaxation and rejuvenation.",
    image: "/cape-town-robben-island-table-mountain-aerial-view.jpg",
    details: "Beach access, pool facilities, and guided ocean activities. Perfect for unwinding after adventure activities. Suitable for all fitness levels."
  },
  {
    title: "Quad Biking",
    description: "Explore rugged terrain and scenic trails on powerful quad bikes. Perfect for adventure enthusiasts looking for an adrenaline rush while discovering South Africa's diverse landscapes.",
    image: "/dramatic-south-african-mountain-landscape-vista-pa.jpg",
    details: "Guided tours available. Safety briefing and equipment included. Suitable for beginners and experienced riders."
  },
  {
    title: "Guided Hiking",
    description: "Expert-led hiking expeditions through South Africa's most scenic trails and natural reserves. Discover hidden waterfalls, panoramic viewpoints, and diverse ecosystems with knowledgeable guides.",
    image: "/dramatic-south-african-mountain-landscape-panorama.jpg",
    details: "Various difficulty levels. Includes guide, trail fees, and safety equipment. Perfect for nature lovers."
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
              <p className="text-xl text-white/95 leading-relaxed font-medium mb-4">{activity.description}</p>
              {activity.details && (
                <p className="text-base text-white/80 mb-8 italic">{activity.details}</p>
              )}

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

import { Button } from "@/components/ui/button"

const activities = [
  {
    title: "River Rafting",
    description: "Navigate thrilling rapids with expert guides through South Africa's most dramatic waterways. Experience the rush of white-water adventure while taking in stunning natural scenery. Perfect for thrill-seekers and adventure lovers!",
    image: "/images/river-rafting.webp",
    details: "Suitable for groups, includes safety equipment and expert guides. Varying difficulty levels available."
  },
  {
    title: "Kloofing",
    description: "Canyon exploration combining hiking, climbing, and swimming through pristine natural gorges. Jump into crystal-clear pools, navigate through canyons, and experience nature's playground. An adventure that combines physical challenge with breathtaking beauty.",
    image: "/images/kloofing-activity.webp",
    details: "Includes hiking, jumping, and swimming. Safety equipment provided. Suitable for moderate fitness levels."
  },
  {
    title: "Hot Air Balloon Rides",
    description: "Soar above South Africa's breathtaking landscapes in a hot air balloon. Experience the magic of floating through the sky while taking in panoramic views of mountains, valleys, and natural wonders. A truly unforgettable and empowering experience!",
    image: "/images/couples-tour-hotair-balloon.webp",
    details: "45-60 minute flights available. Includes safety briefing, equipment, and expert pilots. Perfect for special occasions and group experiences."
  },
  {
    title: "Braai Dinners Under African Sky",
    description: "Experience authentic South African culture with traditional braai dinners under the African sky. Enjoy delicious grilled cuisine, warm hospitality, and unforgettable evenings surrounded by nature's beauty. Perfect for group bonding and cultural immersion.",
    image: "/images/braai-dinner-activity1.webp",
    details: "Traditional South African barbecue experience. Includes meals, setup, and cultural entertainment. Perfect for groups and special occasions."
  },
  {
    title: "Quad Biking",
    description: "Explore rugged terrain and scenic trails on powerful quad bikes. Perfect for adventure enthusiasts looking for an adrenaline rush while discovering South Africa's diverse landscapes.",
    image: "/images/quad-biking-activity-1.webp",
    details: "Guided tours available. Safety briefing and equipment included. Suitable for beginners and experienced riders."
  },
  {
    title: "Ziplining",
    description: "Soar through the air on thrilling zipline adventures across South Africa's stunning landscapes. Experience the rush of flying while taking in breathtaking views from above.",
    image: "/images/ziplining.webp",
    details: "Multiple zipline courses available. Safety equipment and expert guides included. Suitable for all adventure levels."
  },
  {
    title: "Horse Riding",
    description: "Explore South Africa's beautiful countryside on horseback. Perfect for nature lovers seeking a peaceful yet adventurous way to experience the landscape.",
    image: "/images/horse-riding-1.webp",
    details: "Guided horse riding tours available. Suitable for beginners and experienced riders. Includes safety equipment."
  },
  {
    title: "Guided Hiking",
    description: "Expert-led hiking expeditions through South Africa's most scenic trails and natural reserves. Discover hidden waterfalls, panoramic viewpoints, and diverse ecosystems with knowledgeable guides.",
    image: "/images/hartbeespoort-hiking-activity.webp",
    details: "Various difficulty levels. Includes guide, trail fees, and safety equipment. Perfect for nature lovers."
  },
  {
    title: "Wildlife Encounters",
    description: "Experience South Africa's incredible wildlife up close. From zebras to ostriches, discover the diverse fauna that calls this beautiful country home.",
    image: "/images/wildlife-zebra.webp",
    details: "Guided wildlife viewing experiences. Learn about local fauna and their habitats. Perfect for nature enthusiasts."
  },
]

export function Activities() {
  return (
    <section id="discover" className="py-0">
      {activities.map((activity, index) => (
        <div key={index} className="relative h-[60vh] sm:h-[70vh] md:h-screen min-h-[400px] flex items-center group">
          <div className="absolute inset-0">
            <img
              src={activity.image || "/placeholder.svg"}
              alt={activity.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 z-10 relative">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-bold mb-3 sm:mb-4">Experience</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">{activity.title}</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium mb-3 sm:mb-4">{activity.description}</p>
              {activity.details && (
                <p className="text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-6 md:mb-8 italic">{activity.details}</p>
              )}

              <Button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 bg-accent text-primary font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-accent/90 transition-all hover:scale-105 shadow-xl h-auto">
                Book This Activity →
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

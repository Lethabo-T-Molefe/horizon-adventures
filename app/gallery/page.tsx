import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import InteractiveBentoGallery from "@/components/interactive-bento-gallery"

// Gallery showcasing all our adventure experiences
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Cape Town Table Mountain",
    desc: "Iconic Table Mountain views",
    url: "/images/cape-town-table-mountain.webp",
    span: "sm:col-span-2 sm:row-span-2"
  },
  {
    id: 2,
    type: "image",
    title: "River Rafting Adventure",
    desc: "Thrilling white water adventures",
    url: "/images/river-rafting.webp",
    span: "sm:col-span-2"
  },
  {
    id: 3,
    type: "image",
    title: "Hot Air Balloon Experience",
    desc: "Soar above breathtaking landscapes",
    url: "/images/couples-tour-hotair-balloon.webp",
    span: "sm:col-span-1 sm:row-span-2"
  },
  {
    id: 4,
    type: "image",
    title: "Kloofing Adventure",
    desc: "Canyon exploration and waterfall jumping",
    url: "/images/kloofing-activity.webp",
    span: "sm:col-span-1"
  },
  {
    id: 5,
    type: "image",
    title: "Panorama Route Scenic",
    desc: "Stunning Mpumalanga vistas",
    url: "/images/panorama-route-scenic.webp",
    span: "sm:col-span-2"
  },
  {
    id: 6,
    type: "image",
    title: "Cape Town Robben Island",
    desc: "Historic landmark and heritage",
    url: "/images/cape-town-robben-island.webp",
    span: "sm:col-span-1"
  },
  {
    id: 7,
    type: "image",
    title: "Quad Biking",
    desc: "Rugged terrain exploration",
    url: "/images/quad-biking-activity-1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 8,
    type: "image",
    title: "Hartbeespoort Dam",
    desc: "Serene dam activities",
    url: "/images/hartbeespoort-dam.webp",
    span: "sm:col-span-2"
  },
  {
    id: 9,
    type: "image",
    title: "Team Building Activity",
    desc: "Corporate team building experiences",
    url: "/images/team-building-activity-1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 10,
    type: "image",
    title: "Cape Town Ocean View",
    desc: "Beautiful Atlantic Ocean vistas",
    url: "/images/cape-town-ocean-view.webp",
    span: "sm:col-span-1"
  },
  {
    id: 11,
    type: "image",
    title: "Ziplining Adventure",
    desc: "Thrilling aerial experiences",
    url: "/images/ziplining.webp",
    span: "sm:col-span-2"
  },
  {
    id: 12,
    type: "image",
    title: "Horse Riding",
    desc: "Scenic horseback exploration",
    url: "/images/horse-riding-2.webp",
    span: "sm:col-span-1"
  },
  {
    id: 13,
    type: "image",
    title: "Wildlife Encounter",
    desc: "South African wildlife experiences",
    url: "/images/wildlife.webp",
    span: "sm:col-span-1"
  },
  {
    id: 14,
    type: "image",
    title: "Mpumalanga Mountain View",
    desc: "Breathtaking mountain landscapes",
    url: "/images/mpumalanga-mountain-view.webp",
    span: "sm:col-span-2"
  },
  {
    id: 15,
    type: "image",
    title: "Camp Arrival",
    desc: "Welcome to adventure camps",
    url: "/images/camp-arrival.webp",
    span: "sm:col-span-1"
  },
  {
    id: 16,
    type: "image",
    title: "Braai Dinner",
    desc: "Traditional South African cuisine",
    url: "/images/braai-dinner-activity1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 17,
    type: "image",
    title: "Cape Town Vineyard",
    desc: "Wine country exploration",
    url: "/images/cape-town-vineyard.webp",
    span: "sm:col-span-2"
  },
  {
    id: 18,
    type: "image",
    title: "Hartbeespoort Hiking",
    desc: "Scenic hiking trails",
    url: "/images/hartbeespoort-hiking-activity.webp",
    span: "sm:col-span-1"
  },
  {
    id: 19,
    type: "image",
    title: "Wildlife - Zebra",
    desc: "African wildlife encounters",
    url: "/images/wildlife-zebra.webp",
    span: "sm:col-span-1"
  },
  {
    id: 20,
    type: "image",
    title: "Cape Town Boat Ride",
    desc: "Ocean adventures",
    url: "/images/cape-town-boat-ride.webp",
    span: "sm:col-span-2"
  },
  {
    id: 21,
    type: "image",
    title: "Sun City Group Adventure",
    desc: "Group adventure activities",
    url: "/images/sun-city-group-adventure-activity.webp",
    span: "sm:col-span-1"
  },
  {
    id: 22,
    type: "image",
    title: "Durban uShaka Marine World",
    desc: "Coastal adventures",
    url: "/images/durban-ushaka-marine-world.webp",
    span: "sm:col-span-1"
  },
  {
    id: 23,
    type: "image",
    title: "Camp Activities",
    desc: "Youth and school camp experiences",
    url: "/images/camp-activity-1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 24,
    type: "image",
    title: "Ostrich Encounter",
    desc: "Unique wildlife experiences",
    url: "/images/ostrich.webp",
    span: "sm:col-span-1"
  },
  {
    id: 25,
    type: "image",
    title: "Cape Town Hike",
    desc: "Mountain hiking adventures",
    url: "/images/cape-town-hike.webp",
    span: "sm:col-span-2"
  },
  {
    id: 26,
    type: "image",
    title: "Panorama Mountain",
    desc: "Scenic mountain views",
    url: "/images/panorama-mountain.webp",
    span: "sm:col-span-1"
  },
  {
    id: 27,
    type: "image",
    title: "Hartbeespoort Camp Activity",
    desc: "Camp experiences at Hartbeespoort",
    url: "/images/hartbeespoort-camp-activity-1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 28,
    type: "image",
    title: "Horizon Adventures Shuttles",
    desc: "Comfortable transportation services",
    url: "/images/horizon-adventures-shuttles-1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 29,
    type: "image",
    title: "Adventure Shuttles",
    desc: "Reliable transport for your journey",
    url: "/images/horizon-adventures-shuttles-2.webp",
    span: "sm:col-span-1"
  },
  {
    id: 30,
    type: "image",
    title: "Transport Services",
    desc: "Safe and comfortable travel",
    url: "/images/horizon-adventure-shuttles-3.webp",
    span: "sm:col-span-1"
  },
  {
    id: 31,
    type: "image",
    title: "Ready for Adventure",
    desc: "Your journey begins here",
    url: "/images/empty-bus.webp",
    span: "sm:col-span-2"
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 md:pt-28 md:pb-20">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="Adventure Gallery"
          description="Explore our collection of breathtaking moments and unforgettable experiences"
        />
      </div>
      <Footer />
    </main>
  )
}

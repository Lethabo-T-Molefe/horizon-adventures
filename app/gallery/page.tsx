import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import InteractiveBentoGallery from "@/components/interactive-bento-gallery"

// Gallery showcasing all images and videos from the public folder
const mediaItems = [
  // Images from /images/ folder
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
  {
    id: 32,
    type: "image",
    title: "Horse Riding Experience",
    desc: "Another beautiful horseback adventure",
    url: "/images/horse-riding-1.webp",
    span: "sm:col-span-1"
  },
  {
    id: 33,
    type: "image",
    title: "Cape Town Tour",
    desc: "Cape Town tour highlights",
    url: "/images/cape-town-tour-page.webp",
    span: "sm:col-span-2"
  },
  // Images from /public/ root folder
  {
    id: 34,
    type: "image",
    title: "Kloofing Canyon Jumping",
    desc: "Adventure waterfall experience",
    url: "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 35,
    type: "image",
    title: "River Rafting Action",
    desc: "White water adventure in South Africa",
    url: "/river-rafting-south-africa-action-adventure-white-.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 36,
    type: "image",
    title: "Hartbeespoort Sunset",
    desc: "Serene water landscape at sunset",
    url: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
    span: "sm:col-span-2 sm:row-span-2"
  },
  {
    id: 37,
    type: "image",
    title: "Blyde River Canyon",
    desc: "Dramatic panorama route landscape",
    url: "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 38,
    type: "image",
    title: "Cape Town Aerial View",
    desc: "Robben Island and Table Mountain from above",
    url: "/cape-town-robben-island-table-mountain-aerial-view.jpg",
    span: "sm:col-span-2 sm:row-span-2"
  },
  {
    id: 39,
    type: "image",
    title: "Mountain Landscape Vista",
    desc: "Dramatic South African mountain views",
    url: "/dramatic-south-african-mountain-landscape-vista-pa.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 40,
    type: "image",
    title: "Kloofing Adventure Waterfall",
    desc: "Canyon jumping adventure",
    url: "/kloofing-canyon-jumping-adventure-waterfall.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 41,
    type: "image",
    title: "River Rafting Adventure",
    desc: "Action-packed river rafting",
    url: "/river-rafting-south-africa-adventure-action.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 42,
    type: "image",
    title: "Hartbeespoort Adventure Activities",
    desc: "Sunset adventure activities",
    url: "/hartbeespoort-dam-adventure-activities-sunset.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 43,
    type: "image",
    title: "Panorama Route Viewpoint",
    desc: "Blyde River Canyon viewpoint and waterfall",
    url: "/blyde-river-canyon-panorama-route-viewpoint-waterf.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 44,
    type: "image",
    title: "Cape Town Scenic",
    desc: "Robben Island and Table Mountain scenic view",
    url: "/cape-town-robben-island-table-mountain-scenic.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 45,
    type: "image",
    title: "Mountain Landscape Panorama",
    desc: "Dramatic South African landscape panorama",
    url: "/dramatic-south-african-mountain-landscape-panorama.jpg",
    span: "sm:col-span-2"
  },
  // Video from /videos/ folder
  {
    id: 46,
    type: "video",
    title: "Adventure Tour Video",
    desc: "Experience our amazing adventure tours",
    url: "/videos/tour.mp4",
    span: "sm:col-span-2 sm:row-span-2"
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Adventure Gallery"
        subtitle="Explore our collection of breathtaking moments and unforgettable experiences"
        backgroundImage="/cape-town-robben-island-table-mountain-aerial-view.jpg"
      />
      <div className="py-8 sm:py-12 md:py-16 lg:py-24">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title=""
          description=""
        />
      </div>
      <Footer />
    </main>
  )
}

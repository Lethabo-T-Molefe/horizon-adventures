import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import InteractiveBentoGallery from "@/components/interactive-bento-gallery"

// Sample media items - replace with your actual media
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Cape Town Heritage",
    desc: "Historic landmarks and breathtaking views",
    url: "/cape-town-robben-island-table-mountain-aerial-view.jpg",
    span: "sm:col-span-2 sm:row-span-2"
  },
  {
    id: 2,
    type: "image",
    title: "Mpumalanga Panorama",
    desc: "Stunning canyon views and waterfalls",
    url: "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 3,
    type: "image",
    title: "Hartbeespoort Adventure",
    desc: "Serene dam activities and exploration",
    url: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
    span: "sm:col-span-1 sm:row-span-2"
  },
  {
    id: 4,
    type: "image",
    title: "River Rafting",
    desc: "Thrilling white water adventures",
    url: "/river-rafting-south-africa-action-adventure-white-.jpg",
    span: "sm:col-span-1"
  },
  {
    id: 5,
    type: "image",
    title: "Kloofing Adventure",
    desc: "Canyon exploration and waterfall jumping",
    url: "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg",
    span: "sm:col-span-2"
  },
  {
    id: 6,
    type: "image",
    title: "Mountain Landscape",
    desc: "Dramatic South African vistas",
    url: "/dramatic-south-african-mountain-landscape-vista-pa.jpg",
    span: "sm:col-span-1"
  },
  {
    id: 7,
    type: "image",
    title: "Panorama Route",
    desc: "Scenic viewpoints and natural beauty",
    url: "/blyde-river-canyon-panorama-route-viewpoint-waterf.jpg",
    span: "sm:col-span-1"
  },
  {
    id: 8,
    type: "image",
    title: "Adventure Activities",
    desc: "Hartbeespoort dam adventures",
    url: "/hartbeespoort-dam-adventure-activities-sunset.jpg",
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

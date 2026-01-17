import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import FlowingMenu from "@/components/flowing-menu"

const destinations = [
  {
    link: "/tours#hartbeespoort",
    text: "Hartbeespoort",
    image: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg"
  },
  {
    link: "/tours#cape-town",
    text: "Cape Town",
    image: "/cape-town-robben-island-table-mountain-aerial-view.jpg"
  },
  {
    link: "/tours#panorama-route",
    text: "Panorama Route",
    image: "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg"
  },
  {
    link: "/tours#kruger",
    text: "Kruger National Park",
    image: "/dramatic-south-african-mountain-landscape-vista-pa.jpg"
  },
  {
    link: "/tours#durban",
    text: "Durban",
    image: "/river-rafting-south-africa-action-adventure-white-.jpg"
  },
  {
    link: "/tours#lone-creek-falls",
    text: "Lone Creek Falls",
    image: "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg"
  },
  {
    link: "/tours#sun-city",
    text: "Sun City Resort",
    image: "/hartbeespoort-dam-adventure-activities-sunset.jpg"
  },
  {
    link: "/tours#magaliesburg",
    text: "Magaliesburg",
    image: "/dramatic-south-african-mountain-landscape-panorama.jpg"
  }
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-[calc(100vh-5rem)] mt-20">
        <FlowingMenu
          items={destinations}
          speed={20}
          textColor="#fff"
          bgColor="#0a0a0f"
          marqueeBgColor="#fff"
          marqueeTextColor="#0a0a0f"
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </div>
      <Footer />
    </main>
  )
}

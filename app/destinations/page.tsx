import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import FlowingMenu from "@/components/flowing-menu"

const destinations = [
  {
    link: "/tours/hartbeespoort",
    text: "Hartbeespoort",
    image: "/images/hartbeespoort-dam.webp"
  },
  {
    link: "/tours/cape-town",
    text: "Cape Town",
    image: "/images/cape-town-table-mountain.webp"
  },
  {
    link: "/tours/mpumalanga",
    text: "Panorama Route",
    image: "/images/panorama-route-scenic.webp"
  },
  {
    link: "/tours",
    text: "Wildlife Encounters",
    image: "/images/wildlife-zebra.webp"
  },
  {
    link: "/tours/durban",
    text: "Durban",
    image: "/images/durban-ushaka-marine-world.webp"
  },
  {
    link: "/tours",
    text: "Adventure Activities",
    image: "/images/kloofing-activity.webp"
  },
  {
    link: "/tours",
    text: "Sun City Resort",
    image: "/images/sun-city-group-adventure-activity.webp"
  },
  {
    link: "/tours",
    text: "Mountain Views",
    image: "/images/mpumalanga-mountain-view.webp"
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

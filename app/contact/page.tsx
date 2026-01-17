import Navbar from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Horizon Adventures to plan your perfect South African adventure. Contact Lebogang at 081 742 9417 or email Horizonadventuresza@gmail.com. Based in Pretoria, Gauteng.",
  keywords: ["contact Horizon Adventures", "book adventure tour", "South Africa adventure booking", "Pretoria adventure tours"],
  openGraph: {
    title: "Contact Us | Horizon Adventures",
    description: "Get in touch with Horizon Adventures to plan your perfect South African adventure.",
    url: "https://www.horizonadv.co.za/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch to start planning your unforgettable South African adventure"
        backgroundImage="/images/panorama-route-scenic.webp"
      />
      <ContactSection />
      <Footer />
    </main>
  )
}

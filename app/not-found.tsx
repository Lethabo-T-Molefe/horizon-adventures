"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Home } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[35vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/dramatic-south-african-mountain-landscape-panorama.jpg"
            alt="Mountain Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/40 to-background/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 z-10">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight drop-shadow-lg">
                404
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-lg">
                Page Not Found
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow px-4">
                We couldn't find the page you're looking for. It may have been moved or doesn't exist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              No worries! Let's get you back to the homepage where you can continue exploring our adventures.
            </p>
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-primary text-white font-bold text-sm sm:text-base tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 shadow-lg rounded-md"
            >
              <Home size={22} />
              Go to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

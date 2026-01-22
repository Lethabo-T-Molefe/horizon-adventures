"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Home, RefreshCw, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error)
  }, [error])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[35vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/kloofing-canyon-jumping-adventure-waterfall.jpg"
            alt="Adventure Waterfall"
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
              <div className="mb-4 sm:mb-6">
                <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-white drop-shadow-lg" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight drop-shadow-lg">
                Something Went Wrong
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow px-4">
                We're having trouble loading this page. Please try again or return to the homepage.
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
              You can try reloading this page, or go back to the homepage to continue browsing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-primary text-white font-bold text-sm sm:text-base tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 shadow-lg rounded-md"
              >
                <RefreshCw size={22} />
                Reload Page
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-secondary text-white font-bold text-sm sm:text-base tracking-wide uppercase hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg rounded-md"
              >
                <Home size={22} />
                Go to Homepage
              </Link>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-bold mb-4">
                  Technical Details (Development Mode)
                </p>
                <div className="bg-muted p-4 sm:p-6 rounded-lg text-left">
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-muted-foreground/70 mt-2 font-mono">
                      Reference: {error.digest}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

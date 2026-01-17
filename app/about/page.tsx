"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Ensure video autoplays when component mounts
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video autoplay prevented:", error)
        })
      }
    }
  }, [])
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/dramatic-south-african-mountain-landscape-vista-pa.jpg"
            alt="South African Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-background/90" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About Horizon Adventures
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
              Creating unforgettable experiences in the heart of South Africa
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
                Adventure Awaits
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Horizon Adventures is a premier adventure tourism company based in Pretoria, South Africa. 
                  We specialize in creating transformative experiences that combine the natural beauty of South 
                  Africa with meaningful connections and personal growth. With over 5,100 followers and a growing 
                  community of adventure enthusiasts, we've established ourselves as specialists in team building, 
                  tour packages, youth camps, leadership camps, events, and hiking.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From corporate team building programs to youth leadership camps, educational retreats, church 
                  camps, school camps, and guided expeditions, we offer a diverse range of experiences designed 
                  to inspire, challenge, and connect participants with nature and each other. Our services extend 
                  across various regions in South Africa, showcasing the country's diverse landscapes and cultural 
                  heritage.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our expert guides and carefully curated programs ensure that every adventure is not just a 
                  trip, but a journey of discovery and transformation. We believe in accessible adventures that 
                  cater to diverse groups, with an emphasis on safety, value, and authentic experiences. Whether 
                  you're seeking a thrilling river rafting experience, a cultural tour to Cape Town, or a 
                  team-building retreat, we create memorable outdoor experiences that foster teamwork, personal 
                  growth, and exploration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our ethos centers on community-driven adventures, emphasizing shared experiences, growth, and 
                  South Africa's natural heritage. We position ourselves as an "adventure for all" provider, 
                  offering inclusive packages that make thrilling experiences accessible to everyone.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5.1K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">7+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Service Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
                Connecting People with Nature
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border-2 border-muted hover:border-accent transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading adventure tourism company in South Africa, known for creating 
                  transformative experiences that inspire personal growth and environmental awareness.
                </p>
              </div>
              <div className="p-8 bg-white border-2 border-muted hover:border-accent transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Safety, sustainability, and authentic experiences guide everything we do. We believe 
                  in responsible tourism that benefits both our guests and the communities we visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
              Our Adventure Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our video to see the incredible adventures and experiences we offer across South Africa
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source 
                  src="https://elasticbeanstalk-eu-west-1-289318734812.s3.eu-west-1.amazonaws.com/tour.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

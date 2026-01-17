import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/dramatic-south-african-mountain-landscape-vista-pa.jpg"
          alt="South African Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-background/80" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95] text-balance drop-shadow-lg">
            Adventure Awaits in the Heart of Africa
          </h1>

          <p className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed font-medium mb-12 drop-shadow">
            We're thrilled to co-create memorable experiences! Discover breathtaking landscapes, build lasting 
            connections, and create unforgettable memories through our expertly guided tours and team experiences. 
            Nothing short of spectacular!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/tours"
              className="px-8 py-4 bg-secondary text-white font-bold text-sm tracking-wide uppercase hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
            >
              Explore Tours
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary font-bold text-sm tracking-wide uppercase hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[2px] h-16 bg-accent" />
      </div>
    </section>
  )
}

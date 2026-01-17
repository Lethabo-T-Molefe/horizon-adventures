interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({ title, subtitle, backgroundImage = "/kloofing-canyon-jumping-adventure-waterfall.jpg" }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-background/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight text-balance drop-shadow-lg px-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow px-4 sm:px-0">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

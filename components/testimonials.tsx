const testimonials = [
  {
    name: "Sarah M.",
    role: "Corporate Team Leader",
    content:
      "The team building tour was nothing short of spectacular. Our team bonded in ways we never imagined through these immersive experiences.",
  },
  {
    name: "David K.",
    role: "Youth Group Coordinator",
    content:
      "The leadership camp transformed our youth group. Professional guides and the Panorama Route created lasting memories.",
  },
  {
    name: "Lisa & James",
    role: "Couples Retreat",
    content:
      "Our Hartbeespoort adventure was the perfect blend of exploration and reflection. An experience we will treasure.",
  },
]

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-bold mb-3 sm:mb-4">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto px-4">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 md:p-8 bg-muted hover:bg-primary hover:text-white transition-all duration-300 border-l-4 border-accent group cursor-pointer"
            >
              <div className="text-accent text-3xl sm:text-4xl mb-3 sm:mb-4">"</div>
              <p className="text-sm sm:text-base text-foreground group-hover:text-white leading-relaxed mb-4 sm:mb-6 italic">
                {testimonial.content}
              </p>
              <div className="pt-3 sm:pt-4 border-t border-border group-hover:border-accent">
                <p className="text-xs sm:text-sm font-bold text-foreground group-hover:text-white">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground group-hover:text-white/80 uppercase tracking-wide mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

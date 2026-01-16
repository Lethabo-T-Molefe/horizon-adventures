const services = [
  {
    title: "Team Building",
    description:
      "Customized programs for corporate groups through outdoor challenges and collaborative experiences in natural settings.",
    number: "01",
  },
  {
    title: "Youth Leadership",
    description:
      "Adventure camps focusing on personal development and leadership skills through immersive nature exploration.",
    number: "02",
  },
  {
    title: "Educational Retreats",
    description:
      "Spiritual and educational programs blending team activities with outdoor adventures for schools and institutions.",
    number: "03",
  },
  {
    title: "Cultural Tours",
    description: "Multi-day guided journeys to iconic destinations including Cape Town, Mpumalanga, and Hartbeespoort.",
    number: "04",
  },
  {
    title: "Private Events",
    description: "Curated experiences for couples and small groups seeking meaningful connections through adventure.",
    number: "05",
  },
  {
    title: "Guided Expeditions",
    description:
      "Expert-led hiking and exploration programs through South Africa's most scenic trails and natural reserves.",
    number: "06",
  },
]

export function Services() {
  return (
    <section id="experiences" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto">
            Experiences That Transform
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            From corporate team building to adventure camps, we create meaningful connections through nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-muted hover:bg-primary hover:text-white transition-all duration-300 border-2 border-transparent hover:border-accent hover:shadow-xl cursor-pointer"
            >
              <p className="text-5xl font-bold text-accent group-hover:text-accent mb-6">{service.number}</p>
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white">{service.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/90 leading-relaxed">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: "Team Building & Strategic Planning",
    description:
      "Empowering strategic growth! We proudly facilitate multi-day strategic planning and team building sessions for organizations. Our customized programs strengthen vision, collaboration, and healthy organizational culture through outdoor challenges and collaborative experiences in natural settings. Perfect for corporate groups, university departments, and professional teams.",
    number: "01",
    details: "3-day sessions available. Includes strategic planning workshops, team building activities, and collaborative exercises. Perfect for organizations seeking to enhance teamwork, communication, and organizational culture.",
  },
  {
    title: "Youth Leadership",
    description:
      "Adventure camps focusing on personal development and leadership skills through immersive nature exploration. These camps combine outdoor adventures with leadership workshops, helping young people build confidence, resilience, and essential life skills.",
    number: "02",
    details: "Ideal for youth groups aged 13-25, focusing on character building, decision-making, and peer collaboration.",
  },
  {
    title: "School Camps",
    description:
      "Educational and fun outings for students, incorporating team activities and nature exploration. Our school camps blend curriculum-aligned learning with adventure experiences, making education engaging and memorable.",
    number: "03",
    details: "Designed for educational institutions, combining outdoor education with adventure activities suitable for all age groups.",
  },
  {
    title: "Church Camps",
    description:
      "Retreats for church or youth groups, blending spiritual elements with adventures. These camps provide opportunities for fellowship, reflection, and growth in a beautiful natural setting.",
    number: "04",
    details: "Spiritual retreats that combine worship, fellowship, and adventure activities for church communities and youth groups.",
  },
  {
    title: "Cultural Tours",
    description: "Multi-day guided journeys to iconic destinations including Cape Town (3+ days with Robben Island), Mpumalanga Panorama Route, and Hartbeespoort Adventure Tours. Experience South Africa's rich history, stunning landscapes, and cultural heritage.",
    number: "05",
    details: "Comprehensive tours covering historical sites, scenic viewpoints, waterfalls, and cultural landmarks across South Africa.",
  },
  {
    title: "Couples & Friends Retreats",
    description: "Curated experiences for couples and small groups seeking meaningful connections through adventure. From day events to multi-night stays, perfect for romantic getaways or friend group adventures.",
    number: "06",
    details: "Special packages starting from R960 per couple for day events, including activities, meals, and guided experiences.",
  },
  {
    title: "Adventure Activities",
    description:
      "Thrilling experiences including river rafting, kloofing (canyon jumping and swimming), quad biking, hiking, and guided expeditions through South Africa's most scenic trails and natural reserves.",
    number: "07",
    details: "Expert-led activities suitable for varying fitness levels, with emphasis on safety and group dynamics.",
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
            Empowering growth through adventure! From strategic planning sessions to adventure camps, we co-create 
            meaningful connections through nature. Join us for unforgettable experiences!
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
              <p className="text-muted-foreground group-hover:text-white/90 leading-relaxed mb-4">{service.description}</p>
              {service.details && (
                <p className="text-sm text-muted-foreground/80 group-hover:text-white/80 italic leading-relaxed">{service.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

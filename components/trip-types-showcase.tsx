import { AnimatedTripTypes } from "./animated-trip-types";

const tripTypes = [
  {
    name: "Team Building",
    description:
      "Customized programs for corporate groups through outdoor challenges and collaborative experiences in natural settings.",
    src: "/images/team-building-activity-1.webp",
  },
  {
    name: "Youth Leadership",
    description:
      "Adventure camps focusing on personal development and leadership skills through immersive nature exploration.",
    src: "/images/camp-arrival.webp",
  },
  {
    name: "Educational Retreats",
    description:
      "Spiritual and educational programs blending team activities with outdoor adventures for schools and institutions.",
    src: "/images/camp-activity-1.webp",
  },
  {
    name: "Cultural Tours",
    description:
      "Multi-day guided journeys to iconic destinations including Cape Town, Mpumalanga, and Hartbeespoort.",
    src: "/images/cape-town-tour-page.webp",
  },
  {
    name: "Private Events",
    description:
      "Curated experiences for couples and small groups seeking meaningful connections through adventure.",
    src: "/images/couples-tour-hotair-balloon.webp",
  },
  {
    name: "Guided Expeditions",
    description:
      "Expert-led hiking and exploration programs through South Africa's most scenic trails and natural reserves.",
    src: "/images/hartbeespoort-hiking-activity.webp",
  },
];

export function TripTypesShowcase() {
  return (
    <section id="trip-types" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">
            Trip Types
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto">
            Discover Your Perfect Adventure
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore our diverse range of trip types, each designed to create
            unforgettable experiences and lasting memories.
          </p>
        </div>

        <AnimatedTripTypes tripTypes={tripTypes} autoplay={true} />
      </div>
    </section>
  );
}

import { AnimatedTripTypes } from "./animated-trip-types";

const tripTypes = [
  {
    name: "Team Building",
    description:
      "Customized programs for corporate groups through outdoor challenges and collaborative experiences in natural settings.",
    src: "/dramatic-south-african-mountain-landscape-vista-pa.jpg",
  },
  {
    name: "Youth Leadership",
    description:
      "Adventure camps focusing on personal development and leadership skills through immersive nature exploration.",
    src: "/kloofing-canyon-jumping-south-africa-waterfall-cry.jpg",
  },
  {
    name: "Educational Retreats",
    description:
      "Spiritual and educational programs blending team activities with outdoor adventures for schools and institutions.",
    src: "/blyde-river-canyon-panorama-route-dramatic-landsca.jpg",
  },
  {
    name: "Cultural Tours",
    description:
      "Multi-day guided journeys to iconic destinations including Cape Town, Mpumalanga, and Hartbeespoort.",
    src: "/cape-town-robben-island-table-mountain-aerial-view.jpg",
  },
  {
    name: "Private Events",
    description:
      "Curated experiences for couples and small groups seeking meaningful connections through adventure.",
    src: "/hartbeespoort-dam-sunset-serene-water-landscape.jpg",
  },
  {
    name: "Guided Expeditions",
    description:
      "Expert-led hiking and exploration programs through South Africa's most scenic trails and natural reserves.",
    src: "/river-rafting-south-africa-action-adventure-white-.jpg",
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

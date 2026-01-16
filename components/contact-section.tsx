"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-bold mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto">
            Start Your Adventure Today
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to explore? Contact us to plan your perfect South African adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="p-8 bg-white border-l-4 border-accent">
              <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pretoria, South Africa
                <br />
                Operating across multiple regions
              </p>
            </div>

            <div className="p-8 bg-white border-l-4 border-accent">
              <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                +27 (0) 12 345 6789
                <br />
                info@horizonadventures.co.za
              </p>
            </div>

            <div className="p-8 bg-white border-l-4 border-accent">
              <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Hours</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monday – Saturday
                <br />
                8:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-xs tracking-widest uppercase text-primary font-bold mb-2 block"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="bg-muted border-border focus:border-accent rounded-none h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-xs tracking-widest uppercase text-primary font-bold mb-2 block"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="bg-muted border-border focus:border-accent rounded-none h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-xs tracking-widest uppercase text-primary font-bold mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-muted border-border focus:border-accent rounded-none h-12"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-xs tracking-widest uppercase text-primary font-bold mb-2 block">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27"
                  className="bg-muted border-border focus:border-accent rounded-none h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="groupSize"
                  className="text-xs tracking-widest uppercase text-primary font-bold mb-2 block"
                >
                  Group Size
                </label>
                <Input
                  id="groupSize"
                  placeholder="Number of participants"
                  className="bg-muted border-border focus:border-accent rounded-none h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs tracking-widest uppercase text-primary font-bold mb-2 block"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your adventure plans..."
                  className="bg-muted border-border focus:border-accent rounded-none min-h-32 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none tracking-wide uppercase text-xs"
              >
                Send Enquiry →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

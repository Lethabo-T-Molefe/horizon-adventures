"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-bold mb-3 sm:mb-4">Get in Touch</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl mx-auto px-4">
            Start Your Adventure Today
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Ready to explore? We're thrilled to help you plan your perfect South African adventure. 
            Get in touch with us today to start co-creating unforgettable experiences!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 md:p-8 bg-white border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pretoria, Gauteng, South Africa
                    <br />
                    Operating across multiple regions throughout South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Contact</h3>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <div>
                      <strong className="text-primary">Lebogang:</strong>{" "}
                      <a href="tel:0817429417" className="text-accent hover:underline">081 742 9417</a>
                    </div>
                    <div>
                      <strong className="text-primary">Phone:</strong>{" "}
                      <a href="tel:+27604381561" className="text-accent hover:underline">+27 60 438 1561</a>
                    </div>
                    <div>
                      <strong className="text-primary">Email:</strong>{" "}
                      <a href="mailto:Horizonadventuresza@gmail.com" className="text-accent hover:underline break-all">
                        Horizonadventuresza@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <a href="https://www.horizonadv.co.za" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        www.horizonadv.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Business Hours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                    <br />
                    <span className="text-sm text-muted-foreground/80">Sunday: By appointment</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-primary font-bold mb-3">Follow Us</h3>
                <div className="flex gap-4 mt-4">
                  <Link 
                    href="https://www.facebook.com/HorizonAdventuresZA/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="https://www.instagram.com/horizonadventuresza" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="https://www.tiktok.com/@horizonadventuresza" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/company/horizon-adventures/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 shadow-lg">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

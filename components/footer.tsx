import Image from "next/image"
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/image.png" alt="Horizon Adventures" width={64} height={64} className="w-16 h-16" />
              <h3 className="text-xl tracking-tight font-semibold">Horizon Adventures</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-4">
              Creating meaningful outdoor experiences across South Africa through team building, cultural tours, and
              wilderness exploration.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Specialists in: Team Building, Tour Packages, Youth Camps, Leadership Camps, Events, Hiking
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-accent font-semibold mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#experiences" className="hover:text-accent transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-accent transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#discover" className="hover:text-accent transition-colors">
                  Discover
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-accent font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://www.facebook.com/HorizonAdventuresZA/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/horizonadventuresza" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@horizonadventuresza" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/horizon-adventures/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-primary-foreground/70 mb-2">Based in Pretoria, South Africa</p>
              <p className="text-xs text-primary-foreground/70">Specialists in Adventure Tourism</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-primary-foreground/70 text-center sm:text-left">
          <p>© 2026 Horizon Adventures. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 md:gap-8">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

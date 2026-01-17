"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm border-b border-border shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image 
              src="/images/image.png" 
              alt="Horizon Adventures" 
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 hidden sm:block ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Horizon Adventures
            </span>
          </Link>

          {/* Desktop Nav - Minimal, calm */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-caption font-medium uppercase tracking-[0.1em] transition-colors duration-300 editorial-link ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-primary" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA - Brand colored */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`text-caption font-medium uppercase tracking-[0.1em] px-6 py-3 rounded-md transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-foreground"
              }`}
            >
              Plan Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full screen, minimal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-background z-40"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="container mx-auto px-6 py-12 flex flex-col gap-8"
            >
              {/* Mobile Logo */}
              <div className="flex items-center gap-3 pb-6 border-b border-border">
                <Image 
                  src="/images/image.png" 
                  alt="Horizon Adventures" 
                  width={64}
                  height={64}
                  className="h-16 w-auto" 
                />
                <span className="text-xl font-semibold text-foreground">
                  Horizon Adventures
                </span>
              </div>
              
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-display-md font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-border"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block text-caption font-medium uppercase tracking-[0.1em] px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Plan Your Journey
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

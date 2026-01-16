"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import BubbleMenu from "@/components/bubble-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const bubbleMenuItems = navLinks.map((link, index) => ({
    label: link.label.toLowerCase(),
    href: link.href,
    ariaLabel: link.label,
    rotation: index % 2 === 0 ? -8 : 8,
    hoverStyles: {
      bgColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'][index % 6],
      textColor: '#ffffff'
    }
  }))

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg" 
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Hidden on mobile, shown on desktop */}
          <Link href="/" className="hidden lg:flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
            <Image src="/images/image.png" alt="Horizon Adventures" width={64} height={64} className="h-16 w-auto" />
            <span
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white drop-shadow-lg"
              }`}
            >
              Horizon Adventures
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isScrolled 
                    ? "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" 
                    : "text-white drop-shadow-md hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-md transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-white text-gray-900 border-2 border-white hover:bg-yellow-400 hover:text-gray-900 shadow-lg"
              }`}
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </nav>

      {/* Bubble Menu - Mobile */}
      <div className="lg:hidden fixed top-4 left-0 right-0 z-[1001]">
        <BubbleMenu
          logo={
            <Image 
              src="/images/image.png" 
              alt="Horizon Adventures" 
              width={64} 
              height={64} 
              className="h-12 w-auto object-contain"
            />
          }
          items={bubbleMenuItems}
          menuBg={isScrolled ? "#fff" : "rgba(255, 255, 255, 0.95)"}
          menuContentColor={isScrolled ? "#111" : "#111"}
          useFixedPosition={true}
          className="relative"
        />
      </div>
    </motion.header>
  )
}

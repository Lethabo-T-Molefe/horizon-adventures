"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Menu, X, Home, MapPin, Camera, Info, Mail, Briefcase, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dragX = useMotionValue(0);
  const dragOpacity = useTransform(dragX, [0, 200], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Tours", href: "/tours", icon: Briefcase },
    { label: "Destinations", href: "/destinations", icon: MapPin },
    { label: "Gallery", href: "/gallery", icon: Camera },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
      setIsMobileMenuOpen(false);
    }
    dragX.set(0);
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 30,
        mass: 0.8,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 30,
        mass: 0.8,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.08,
        type: 'spring' as const,
        stiffness: 250,
        damping: 25,
      },
    }),
  };

  const overlayVariants = {
    closed: { 
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: { 
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

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
      <nav className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
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
              className={`text-caption font-medium uppercase tracking-[0.1em] px-4 xl:px-6 py-2.5 xl:py-3 rounded-md transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-foreground"
              }`}
            >
              <span className="hidden xl:inline">Plan Your Journey</span>
              <span className="xl:hidden">Plan Journey</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`lg:hidden p-2.5 rounded-md transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg relative z-[70] ${
              isMobileMenuOpen
                ? "bg-primary text-primary-foreground"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={2.5} className="shrink-0" />
            ) : (
              <Menu size={24} strokeWidth={2.5} className="shrink-0" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(false);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(false);
            }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Animated Side Menu */}
      <motion.nav
        variants={menuVariants}
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        drag="x"
        dragConstraints={{ left: 0, right: 320 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x: dragX }}
        className="lg:hidden fixed top-0 right-0 h-screen w-80 bg-white z-[60] shadow-2xl"
      >
        {/* Drag Indicator */}
        <motion.div
          style={{ opacity: dragOpacity }}
          className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: 180 }}
          >
            <ChevronLeft 
              size={32} 
              className="text-gray-400"
            />
          </motion.div>
        </motion.div>

        {/* Header - Fixed at top */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
            className="p-8 pt-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/image.png" 
                alt="Horizon Adventures" 
                width={48}
                height={48}
                className="h-12 w-auto" 
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Horizon Adventures
              </h2>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="h-1 mt-2 rounded bg-primary"
            />
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 pt-4 h-[calc(100vh-200px)] overflow-y-auto">
          {/* Navigation Links */}
          <ul className="space-y-3 mb-8">
            {navLinks.map((link, i) => {
              const IconComponent = link.icon;
              return (
                <motion.li
                  key={link.label}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-4 p-4 rounded-lg transition-all hover:bg-gray-100 text-gray-800 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-gray-200 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <IconComponent size={24} />
                    </motion.div>
                    <span className="text-lg font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-6 border-t border-gray-200"
          >
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center text-caption font-medium uppercase tracking-[0.1em] px-6 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Plan Your Journey
            </Link>
          </motion.div>

        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;

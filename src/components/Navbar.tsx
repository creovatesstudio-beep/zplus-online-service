import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Award, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBrochure?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Associate Pro", href: "#associate-pro" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Wait for menu close animation (250ms) before scrolling
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar */}
      <div className="bg-brand-navyDark text-slate-300 text-xs py-1.5 px-4 border-b border-brand-navy/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-brand-gold">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              MSME Registered Enterprise
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-light tracking-wide">
              Empowering Services, Enabling Earnings
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/919430195414"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+91 9430195414</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:zplusonlineservice@gmail.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>zplusonlineservice@gmail.com</span>
            </a>
            {onOpenBrochure && (
              <>
                <span className="text-slate-600">|</span>
                <button
                  onClick={onOpenBrochure}
                  className="text-xs text-brand-gold hover:underline font-medium"
                >
                  Official Brochure
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-brand-navy/30 py-2.5 border-b border-slate-700/50"
            : "bg-brand-navy/90 backdrop-blur-sm py-3.5 border-b border-slate-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group text-left"
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Zplusonlineservice Emblem"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 border border-brand-gold/40"
                />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-brand-gold transition-colors font-heading leading-tight">
                  Zplusonlineservice
                </span>
                <span className="text-[11px] font-medium tracking-wider text-brand-gold uppercase">
                  A unit of KD India
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-200 hover:text-brand-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#associate-pro"
                onClick={(e) => handleNavClick(e, "#associate-pro")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 hover:from-yellow-400 hover:to-brand-gold text-brand-navyDark font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md hover:shadow-brand-gold/30 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Become an Associate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="https://wa.me/919430195414?text=Hello%20Zplusonlineservice%2C%20I%20have%20an%20enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-gold hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-brand-gold hover:bg-slate-800/60 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#061334] border-b border-brand-navyLight px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              <div className="pb-2 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-brand-gold">
                  <Award className="w-3.5 h-3.5" /> MSME Registered
                </span>
                <span>A unit of KD India</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-white hover:text-brand-gold hover:bg-brand-navyLight/50 rounded-md transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-700/60 flex flex-col gap-2.5">
                <a
                  href="#associate-pro"
                  onClick={(e) => handleNavClick(e, "#associate-pro")}
                  className="w-full text-center bg-gradient-to-r from-brand-gold to-amber-500 text-brand-navyDark font-semibold text-sm py-2.5 rounded-lg shadow-md"
                >
                  Become an Associate Pro (₹300/mo)
                </a>

                <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-300">
                  <a
                    href="https://wa.me/919430195414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 9430195414
                  </a>
                  <span>•</span>
                  <a
                    href="mailto:zplusonlineservice@gmail.com"
                    className="text-slate-300 hover:underline"
                  >
                    zplusonlineservice@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

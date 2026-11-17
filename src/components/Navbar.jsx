import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080D1A]/85 backdrop-blur-md border-b border-slate-700/20 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Pirzada Mohammad Tabish - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 via-primary-blue to-electric-400 p-[1px] shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080D1A] rounded-[11px] flex items-center justify-center">
                <span className="font-heading font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-white">
                  PT
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-wide text-white group-hover:text-electric-400 transition-colors">
                Pirzada Tabish
              </span>
              <span className="text-[11px] text-slate-muted font-mono tracking-tight">
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-navy-850/60 p-1.5 rounded-full border border-slate-700/30 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-electric-600 to-electric-500 rounded-full shadow-glow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Pirzada_Mohammad_Tabish_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white bg-navy-800 hover:bg-navy-750 border border-slate-700/40 hover:border-electric-400/50 shadow-sm transition-all duration-200 group"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5 text-electric-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-navy-800 text-slate-muted hover:text-white border border-slate-700/40 focus:outline-none"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#080D1A]/95 backdrop-blur-xl border-b border-slate-700/30 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-electric-600 text-white font-semibold shadow-glow-sm'
                        : 'text-slate-muted hover:text-white hover:bg-navy-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Pirzada_Mohammad_Tabish_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-navy-800 border border-slate-700/50 hover:border-electric-400"
                >
                  <Download className="w-4 h-4 text-electric-400" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


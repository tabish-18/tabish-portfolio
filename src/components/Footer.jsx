import React from 'react';
import { ArrowUp, Mail, Linkedin, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#060A14] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-electric-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70 items-start">
          
          {/* Brand & Title */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-400 p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-[#080D1A] rounded-[11px] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-white">
                    PT
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Pirzada Mohammad Tabish
                </h3>
                <p className="text-xs font-mono text-electric-400">
                  Web Developer | React & Next.js
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-muted max-w-sm leading-relaxed">
              Crafting premium, high-performance web applications, responsive user interfaces, and dependable backend integrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-navy-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-navy-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm text-slate-400 hover:text-electric-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-muted">
              <p>
                <span className="text-slate-400">Email:</span>{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-electric-400 transition-colors break-all">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Phone:</span>{' '}
                <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-electric-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Location:</span>{' '}
                <span className="text-white">{personalInfo.location}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-muted">
          <p>
            &copy; {new Date().getFullYear()} Pirzada Mohammad Tabish. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-700/50 hover:border-electric-400/50 text-slate-300 hover:text-white transition-all duration-200"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}


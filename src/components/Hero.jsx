import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Linkedin, MapPin, Briefcase, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-14 lg:pt-28 lg:pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-electric-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-ambient-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1"
          >
            {/* Small Label & Status Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-ping" />
                HELLO, I'M
              </div>

              {/* Professional Status Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-slate-700/50 text-xs text-slate-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-white font-medium">{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-3"
            >
              PIRZADA MOHAMMAD{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-blue-400 to-indigo-300">
                TABISH
              </span>
            </motion.h1>

            {/* Professional Title */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-electric-400 flex items-center gap-2">
                <span>{personalInfo.title}</span>
              </h2>
            </motion.div>

            {/* Introduction Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl mb-7 font-light"
            >
              {personalInfo.heroIntro}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-electric-600 to-blue-600 hover:from-electric-500 hover:to-blue-500 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Pirzada_Mohammad_Tabish_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-navy-850 hover:bg-navy-800 border border-slate-700/50 hover:border-electric-400/60 transition-all duration-300 group transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-electric-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Location Info */}
            <motion.div
              variants={itemVariants}
              className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-navy-850 hover:bg-navy-800 border border-slate-700/40 text-xs font-medium text-slate-muted hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-navy-850 hover:bg-navy-800 border border-slate-700/40 text-xs font-medium text-slate-muted hover:text-white transition-colors"
                  aria-label="Email Tabish"
                >
                  <Mail className="w-4 h-4 text-electric-400" />
                  <span>Email</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-muted">
                <MapPin className="w-3.5 h-3.5 text-electric-400" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Real Photograph Positioned Prominently Higher */}
          <motion.div
            variants={imageRevealVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2 lg:-translate-y-8"
          >
            {/* Electric Blue Ambient Glow Layer behind portrait */}
            <div className="absolute -inset-4 bg-gradient-to-r from-electric-600/35 to-blue-500/25 rounded-[2.5rem] blur-2xl -z-10 opacity-80 transform -rotate-1 scale-100" />

            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]">
              
              {/* Outer Elegant Card Frame */}
              <div className="relative p-2.5 rounded-[2rem] bg-gradient-to-b from-navy-800 via-navy-850 to-navy-950 border border-slate-700/50 shadow-2xl overflow-visible transition-all duration-500 group-hover:border-electric-400/60">
                
                {/* Image Container with Perfect 4:5 Framing */}
                <div className="relative w-full aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-navy-900 shadow-inner">
                  <img
                    src="./images/tabish_portrait_cropped.jpg"
                    alt="Pirzada Mohammad Tabish - Web Developer Portrait"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/35 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Sleek Non-Blocking Floating Experience Pill at Bottom */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-navy-900/95 backdrop-blur-md border border-slate-700/60 shadow-xl flex items-center gap-2.5 whitespace-nowrap z-20 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white">Iplex Infotech</span>
                  <span className="text-[11px] font-mono text-electric-400">Intern</span>
                </div>
              </div>

              {/* Decorative Tech Tag Pill Top-Right */}
              <div className="hidden sm:flex absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-navy-900/95 backdrop-blur-md border border-electric-400/40 shadow-lg items-center gap-1.5 text-xs font-mono text-electric-400 z-20">
                <Sparkles className="w-3.5 h-3.5 text-electric-400" />
                <span>React & Next.js</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

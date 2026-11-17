import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, GraduationCap, Briefcase, Award, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const focusAreas = [
    {
      title: "Frontend Engineering",
      description: "Developing scalable interfaces with React, Next.js, and Tailwind CSS with emphasis on responsive layouts, clean code, and UI performance.",
      icon: Code,
    },
    {
      title: "Full-Stack Integration",
      description: "Connecting frontend clients with Node.js REST endpoints, JWT session tokens, OTP validation services, and MySQL relational schemas.",
      icon: Server,
    },
    {
      title: "Production Admin Panels",
      description: "Hands-on experience debugging data tables, form state flows, authentication lifecycles, and API synchronizations in enterprise dashboards.",
      icon: Database,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-600 to-electric-400 mx-auto rounded-full" />
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Focus Pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-800/80 border border-slate-700/30 shadow-card">
              <h3 className="text-xl font-heading font-semibold text-white mb-4 flex items-center gap-2">
                <span>Passionate about Clean Code & Practical Web Solutions</span>
              </h3>
              
              <div className="space-y-4 text-slate-muted text-base sm:text-lg leading-relaxed">
                {personalInfo.aboutText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Technical Interests / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-navy-850/60 border border-slate-700/30 hover:border-electric-400/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-electric-600/15 border border-electric-400/25 flex items-center justify-center text-electric-400 mb-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-heading font-semibold text-white mb-1.5">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Highlights & Experience / Education Snapshot */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-navy-800/90 border border-slate-700/30 text-center flex flex-col justify-center items-center hover:border-electric-400/30 transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white text-glow mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-electric-400 mb-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-muted">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Professional Experience Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-850 border border-slate-700/40 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-electric-600/20 border border-electric-400/30 flex items-center justify-center text-electric-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-electric-400">Current Role</h4>
                  <p className="text-base font-heading font-bold text-white">Web Development Intern</p>
                </div>
              </div>
              <p className="text-sm text-slate-muted mb-4 leading-relaxed">
                Iplex Infotech (2026 – Present). Focusing on Taxlink admin panel features, debugging data flows, and modernizing admin user authentication views.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-navy-950 text-xs font-mono text-electric-400 border border-slate-800">
                  Next.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-navy-950 text-xs font-mono text-electric-400 border border-slate-800">
                  React
                </span>
                <span className="px-2.5 py-1 rounded-md bg-navy-950 text-xs font-mono text-electric-400 border border-slate-800">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Education Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-850 border border-slate-700/40 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">Academic Foundation</h4>
                  <p className="text-base font-heading font-bold text-white">B.Tech in IT & Engineering</p>
                </div>
              </div>
              <p className="text-sm text-slate-muted leading-relaxed">
                P. P. Savani University (2022 – 2025) & Diploma in Software Engineering from A.Y. Dadabhai Technical Institute (CGPA: 8.25).
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


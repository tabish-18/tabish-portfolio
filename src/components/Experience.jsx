import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER PATH
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-600 to-electric-400 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-muted max-w-xl mx-auto">
            Practical development contributions within production agile engineering environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-slate-700/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Glowing Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border-2 border-electric-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-navy-800/85 hover:bg-navy-750 border border-slate-700/40 hover:border-electric-400/50 shadow-card transition-all duration-300">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <Building2 className="w-4 h-4 text-electric-400" />
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {exp.company}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-electric-600/20 text-electric-400 border border-electric-400/30">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-medium text-electric-400">
                      {exp.position}
                    </p>
                  </div>

                  {/* Duration & Location Badges */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-muted">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy-900 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-electric-400" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-navy-900 text-electric-400 border border-slate-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Responsibilities List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted">
                    Key Responsibilities & Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-700/30">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted mb-3">
                      Impact & Problem Solving:
                    </h4>
                    <div className="space-y-2">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-muted">
                          <ChevronRight className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


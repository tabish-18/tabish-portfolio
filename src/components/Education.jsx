import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Cloud, 
  FileCode, 
  Cpu, 
  Layout, 
  CheckCircle, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

// Map certification icons
const certIconMap = {
  Award,
  Cloud,
  FileCode,
  Cpu,
  Layout,
};

export default function Education() {
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

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC & PROFESSIONAL CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-600 to-electric-400 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto">
            Formal engineering degree background paired with industry credentials in full stack engineering, cloud architecture, and modern JavaScript.
          </p>
        </div>

        {/* Two-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-electric-400" />
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                Formal Education
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-5"
            >
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 sm:p-7 rounded-2xl bg-navy-800/85 hover:bg-navy-750 border border-slate-700/35 hover:border-electric-400/40 shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-electric-600/15 text-electric-400 border border-electric-400/25">
                      {edu.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-navy-900 px-2.5 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-electric-400" />
                      {edu.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-heading font-bold text-white mb-1.5">
                    {edu.degree}
                  </h4>

                  <p className="text-sm font-medium text-electric-400 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.institution}</span>
                  </p>

                  {edu.cgpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-slate-800 text-xs font-mono text-emerald-400 font-semibold mb-3">
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <Award className="w-5 h-5 text-electric-400" />
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                Certifications & Accreditations
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {certificationsData.map((cert, idx) => {
                const IconComponent = certIconMap[cert.icon] || Award;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-5 rounded-2xl bg-navy-800/85 hover:bg-navy-750 border border-slate-700/35 hover:border-electric-400/40 shadow-card transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy-900 border border-slate-700/40 flex items-center justify-center text-electric-400 shrink-0 shadow-sm mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h4 className="text-base font-heading font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="text-xs font-mono text-slate-400">
                          {cert.duration || cert.year}
                        </span>
                      </div>

                      {cert.institution && (
                        <p className="text-xs font-medium text-electric-400 mb-1">
                          {cert.institution}
                        </p>
                      )}

                      {cert.grade && (
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-1.5">
                          {cert.grade}
                        </span>
                      )}

                      <p className="text-xs text-slate-muted leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  X, 
  Sparkles, 
  ArrowUpRight,
  Info,
  ShieldCheck,
  CreditCard,
  Mail,
  Flame
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#090F1E]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            WORK & CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            FEATURED PROJECTS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-600 to-electric-400 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto">
            A curated showcase of production web applications, administration panels, and academic software engineering projects.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col rounded-2xl bg-navy-800/85 hover:bg-navy-750 border border-slate-700/35 hover:border-electric-400/50 shadow-card overflow-hidden transition-all duration-300"
            >
              {/* Project Image Preview Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-navy-950 border-b border-slate-700/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-75" />

                {/* Category & Status Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-navy-950/85 text-electric-400 border border-electric-400/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-900/80 text-slate-300 border border-slate-700 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2.5 group-hover:text-electric-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-muted mb-5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-900/90 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-electric-400 hover:text-white transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-muted">
                    {project.features.length} Features Documented
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-[#080D1A]/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-navy-850 border border-slate-700/50 shadow-2xl p-6 sm:p-8 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-muted hover:text-white border border-slate-700/40 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="pr-12 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-electric-600/20 text-electric-400 border border-electric-400/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-muted">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted mb-2">
                    Project Overview:
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted mb-2.5">
                    Technologies Utilized:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-navy-900 text-electric-400 border border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Metrics / Quick Highlights */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {selectedProject.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-xl bg-navy-900/80 border border-slate-800 text-center">
                        <p className="text-xs font-mono text-slate-muted">{metric.label}</p>
                        <p className="text-sm font-semibold text-white mt-0.5">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Comprehensive Features List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted mb-3">
                    Key Features & Implementations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Note */}
                <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between text-xs text-slate-muted">
                  <span className="italic">
                    Architecture verified from genuine project repository specifications.
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-medium border border-slate-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}


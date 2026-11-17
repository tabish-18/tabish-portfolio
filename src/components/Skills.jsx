import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  FileCode2, 
  Palette, 
  Atom, 
  Layers, 
  Server, 
  Sparkles, 
  HardDrive, 
  Network, 
  KeyRound, 
  ShieldCheck, 
  MailCheck, 
  Smartphone, 
  Bug,
  Terminal
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon map helper
const iconMap = {
  Code2,
  Database,
  FileCode2,
  Palette,
  Atom,
  Layers,
  Server,
  Sparkles,
  HardDrive,
  Network,
  KeyRound,
  ShieldCheck,
  MailCheck,
  Smartphone,
  Bug,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#0B1224]/50">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-electric-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            MY TECHNICAL SKILLS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-600 to-electric-400 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto">
            Practical development toolset utilized across production codebases, academic solutions, and responsive client architectures.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="space-y-12">
          {Object.entries(skillsData).map(([key, group]) => (
            <div key={key} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-800/80 pb-3 gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-electric-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <h3 className="text-base sm:text-lg font-heading font-bold tracking-wider text-white uppercase">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-muted font-mono">
                  {group.description}
                </p>
              </div>

              {/* Skills Cards Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {group.skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative p-4 sm:p-5 rounded-2xl bg-navy-800/85 hover:bg-navy-750 border border-slate-700/30 hover:border-electric-400/40 shadow-card transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-11 h-11 rounded-xl bg-navy-900 border border-slate-700/40 group-hover:border-electric-400/40 flex items-center justify-center text-electric-400 group-hover:text-white group-hover:bg-electric-600 transition-colors shadow-sm">
                          <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-navy-900 text-slate-muted border border-slate-800">
                          {skill.tag}
                        </span>
                      </div>

                      <h4 className="text-base font-heading font-semibold text-white group-hover:text-electric-400 transition-colors">
                        {skill.name}
                      </h4>
                      
                      {/* Subtle Bottom Accent Indicator */}
                      <div className="mt-3 w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-electric-600 to-electric-400 transition-all duration-300" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Layout,
  Terminal,
} from 'lucide-react';

export const ProjectModal = ({ isOpen, onClose, project }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999999] flex items-center justify-center md:p-8">
          {/* Architectural Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1d3557]/80 dark:bg-[#0a192f]/98 backdrop-blur-[30px]"
          />

          {/* Elite Modal Container - Full screen on mobile, max-width on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full h-full md:h-auto md:max-w-6xl md:max-h-[90vh] bg-white dark:bg-navy-deep md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] border-0 md:border md:border-navy/5 dark:md:border-mint/20 flex flex-col"
          >
            {/* UNIFIED SCROLL WRAPPER for Mouse Wheel Support */}
            <div className="flex-1 overflow-y-auto custom-scrollbar w-full">
              <div className="flex flex-col md:flex-row min-h-full">
                {/* Visual Column (Left) */}
                <div className="w-full md:w-5/12 bg-ghost/40 dark:bg-[#1e3a5f]/40 p-8 md:p-14 flex flex-col border-b md:border-b-0 md:border-r border-navy/5 dark:border-mint/5">
                  <div className="relative group/img mb-10">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-steel/20 to-mint/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-auto object-contain rounded-[2rem] transition-transform duration-700 group-hover/img:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-navy/30 dark:text-mint/40 mb-5 flex items-center gap-3">
                        <Terminal size={14} /> Technology Suite
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-5 py-2.5 rounded-2xl bg-white dark:bg-navy-deep/80 text-[11px] font-black text-navy/70 dark:text-ghost border border-navy/5 dark:border-mint/10 shadow-sm uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn relative flex items-center justify-center gap-3 py-5 rounded-[2rem] bg-navy text-white dark:bg-mint dark:text-navy font-black text-xs tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-95 shadow-xl overflow-hidden"
                        >
                          <Github size={18} /> Source Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn relative flex items-center justify-center gap-3 py-5 rounded-[2rem] bg-steel text-white dark:bg-transparent dark:text-mint dark:border-2 dark:border-mint font-black text-xs tracking-widest uppercase transition-all hover:bg-steel/10 active:scale-95 overflow-hidden"
                      >
                        <ExternalLink size={18} /> Live Experience
                      </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Column (Right) */}
                <div className="w-full md:w-7/12 p-8 md:p-16 relative bg-white dark:bg-navy-deep">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-steel/10 dark:bg-mint/10 text-steel dark:text-mint text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-steel/20 dark:border-mint/20">
                        <Layout size={12} /> Architectural Study 0{project.id || 1}
                      </span>
                      
                      <h2 className="text-4xl md:text-7xl font-black text-navy dark:text-ghost tracking-tighter leading-[0.85] mb-8 uppercase">
                        {project.title}
                      </h2>

                      <div className="w-24 h-2 bg-gradient-to-r from-steel to-mint rounded-full mb-12" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-12"
                    >
                      <div className="relative">
                        <span className="absolute -left-6 top-0 text-5xl font-black text-steel/10 dark:text-mint/10 italic">"</span>
                        <p className="text-lg md:text-xl font-medium text-navy/80 dark:text-ghost/80 leading-relaxed pl-2">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      <div className="space-y-8">
                        <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-navy/30 dark:text-mint/40 flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-steel dark:text-mint" /> Core Capabilities
                        </h4>
                        <ul className="grid gap-5">
                          {(project.keyFeatures || project.features)?.map((feature, i) => (
                            <li key={i} className="flex items-start gap-5 text-navy/70 dark:text-ghost/80 font-bold text-sm md:text-base group/item">
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-steel dark:bg-mint group-hover/item:scale-[1.5] transition-transform shadow-[0_0_10px_rgba(168,218,220,0.5)] flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-10 rounded-[2.5rem] bg-ghost/40 dark:bg-navy-light/30 border border-navy/5 dark:border-mint/10 mt-16">
                        <h5 className="text-[10px] uppercase font-black tracking-[0.3em] text-navy/40 dark:text-mint/50 mb-4 flex items-center gap-3">
                          <Cpu size={14} /> Production Mandate
                        </h5>
                        <p className="text-xs md:text-sm font-medium text-navy/50 dark:text-ghost/50 leading-relaxed">
                          Standardized for high-availability production environments. Built with rigorous architectural adherence to performance benchmarks and core web vitals.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button UI - FIXED POSITION HIGHER Z-INDEX */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 md:top-10 md:right-10 p-4 rounded-full bg-navy/10 dark:bg-white/10 text-navy dark:text-ghost hover:rotate-90 hover:scale-110 transition-all duration-500 group z-[99999999]"
            >
              <X size={24} className="group-hover:text-steel dark:group-hover:text-mint" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

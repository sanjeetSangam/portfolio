import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Projects = () => {
  return (
    <Section id="projects" className="py-20 md:py-24">
      <SectionHeading subtitle="Portfolio">Featured Works</SectionHeading>

      <div className="flex flex-col gap-24 md:gap-32 mt-12 md:mt-20">
        {portfolioData.projects.map((project, idx) => (
          <div
            key={project.title}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-14 items-center relative group`}
          >
            {/* Project Index Overlay */}
            <div
              className={`absolute -top-12 ${idx % 2 === 0 ? '-left-8' : '-right-8'} text-[100px] md:text-[140px] font-black text-primary/[0.02] dark:text-primary-light/[0.02] select-none pointer-events-none z-0`}
            >
              0{idx + 1}
            </div>

            {/* Showcase Image Area - Sharp Corners */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[52%] relative z-10"
            >
              <div className="relative aspect-[16/9] rounded-none overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-black/40 group-hover:shadow-accent/20 transition-all duration-700 border border-primary/5 dark:border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Status Badge - Floating Overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] border border-white/10">
                    {project.status || 'Active Project'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project Info Area */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`w-full lg:w-[48%] flex flex-col gap-6 relative z-10 ${idx % 2 === 0 ? 'text-left' : 'lg:text-right lg:items-end'}`}
            >
              <div
                className={`flex flex-col gap-4 ${idx % 2 === 0 ? 'items-start' : 'items-start lg:items-end'}`}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-none bg-accent/5 dark:bg-white/5 text-accent dark:text-accent-light text-[9px] font-bold uppercase tracking-widest border border-accent/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-primary dark:text-primary-light tracking-tighter leading-tight uppercase group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-400">
                  {project.title}
                </h3>

                <p className="text-secondary dark:text-primary-light/60 text-sm leading-relaxed font-medium max-w-lg">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div
                className={`grid grid-cols-2 gap-x-8 gap-y-3.5 border-y border-primary/5 dark:border-primary-light/5 py-6 w-full max-w-lg ${idx % 2 === 0 ? '' : 'lg:text-right'}`}
              >
                {project.keyFeatures.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-start gap-3 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent dark:bg-accent-light shrink-0" />
                    <span className="text-[10px] md:text-[11px] font-bold text-secondary dark:text-primary-light/40 tracking-tight leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-primary/40 dark:text-primary-light/30 hover:text-accent dark:hover:text-accent-light transition-all duration-300 font-bold text-[10px] uppercase tracking-widest group/link"
                  >
                    <Github
                      size={13}
                      className="group-hover/link:-translate-y-0.5 transition-transform"
                    />
                    Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-primary/40 dark:text-primary-light/30 hover:text-accent dark:hover:text-accent-light transition-all duration-300 font-bold text-[10px] uppercase tracking-widest group/link"
                  >
                    <ExternalLink
                      size={13}
                      className="group-hover/link:-translate-y-0.5 transition-transform"
                    />
                    View Live
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href={portfolioData.personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full sm:w-auto"
        >
          <Button
            variant="outline"
            size="md"
            className="w-full sm:w-auto border-secondary/20 text-secondary dark:border-primary-light/20 dark:text-primary-light/60 hover:bg-accent hover:text-white dark:hover:bg-accent-light dark:hover:text-primary rounded-lg px-12 text-[10px] uppercase tracking-[0.2em] font-black"
          >
            See Full Archive
          </Button>
        </a>
      </div>
    </Section>
  );
};

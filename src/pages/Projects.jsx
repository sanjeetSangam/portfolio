import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Projects = () => {
  return (
    <Section id="projects" className="bg-ghost dark:bg-navy/10">
      <SectionHeading subtitle="Portfolio">Featured Works</SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="group block relative bg-white dark:bg-navy rounded-[1.5rem] md:rounded-[2rem] border border-navy/5 dark:border-mint/10 overflow-hidden shadow-xl hover:shadow-steel/10 transition-all duration-500 h-full flex flex-col"
          >
            {/* Project Image Area */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-navy/40 dark:bg-navy/60 opacity-40 group-hover:opacity-10 transition-opacity" />

              {/* Floating Link Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-mint rounded-full flex items-center justify-center text-navy -translate-y-12 translate-x-12 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-[0.2em] font-black px-2.5 py-1 rounded-md bg-steel/10 dark:bg-steel/30 text-steel dark:text-mint border border-steel/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg md:text-xl font-black text-navy dark:text-ghost mb-3 group-hover:text-steel dark:group-hover:text-mint transition-colors tracking-tight uppercase">
                {project.title}
              </h3>

              <p className="text-navy/70 dark:text-ghost/70 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-navy/10 dark:border-ghost/5">
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy/40 dark:text-mint hover:text-steel dark:hover:text-ghost transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy/40 dark:text-mint hover:text-steel dark:hover:text-ghost transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-black text-[10px] group/btn p-0 hover:bg-transparent"
                >
                  DETAILS
                  <ChevronRight
                    size={12}
                    className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 md:mt-24 text-center">
        <a
          href={portfolioData.personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full sm:w-auto"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-4 px-10 border-navy dark:border-mint text-navy dark:text-mint hover:bg-navy dark:hover:bg-mint hover:text-white dark:hover:text-navy rounded-[2.5rem]"
          >
            Explore More on GitHub
          </Button>
        </a>
      </div>
    </Section>
  );
};

import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const Experiences = () => {
  return (
    <Section id="experience" className="bg-white dark:bg-background-dark">
      <SectionHeading subtitle="Career">Professional Experience</SectionHeading>

      <div className="relative max-w-5xl mx-auto py-4 md:py-8">
        <div className="flex flex-col gap-8 md:gap-10 relative">
          {/* Main Timeline Line - Monochrome Subtle */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 hidden md:block" />
          
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-5 md:gap-16 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start group pb-4 md:pb-8 last:pb-0`}
            >
              {/* Dot Indicator - Refined size */}
              <div className="absolute left-[15px] md:left-1/2 top-1.5 w-2 h-2 rounded-full bg-accent dark:bg-accent-light border-2 border-white dark:border-background-dark -translate-x-1/2 z-10 hidden md:block" />

              <div className={`w-full md:w-[42%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="flex flex-col gap-3">
                  <div className={`flex items-center gap-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center border border-zinc-200 dark:border-white/5 group-hover:bg-accent/10 dark:group-hover:bg-accent-light/10 transition-colors">
                      <Icons.Briefcase
                        size={16}
                        className="text-accent dark:text-accent-light"
                      />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-primary dark:text-primary-light group-hover:text-accent dark:group-hover:text-accent-light transition-colors tracking-tight uppercase leading-none">
                        {exp.role}
                      </h4>
                      <p className="text-accent dark:text-accent-light font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mb-1 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}
                  >
                    <span className="inline-block px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-secondary dark:text-secondary-light text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-zinc-200 dark:border-white/5">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-secondary dark:text-secondary-light text-xs md:text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="md:w-[42%] hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experiences;

import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Experiences = () => {
  return (
    <Section id="experience" className="bg-white dark:bg-background-dark">
      <SectionHeading subtitle="Career">Professional Experience</SectionHeading>

      <div className="relative max-w-5xl mx-auto py-10">
        {/* Main Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-navy/5 dark:bg-navy/40 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="w-full bg-steel dark:bg-mint"
          />
        </div>

        <div className="space-y-12 md:space-y-16">
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                x:
                  idx % 2 === 0
                    ? window.innerWidth < 768
                      ? -20
                      : -40
                    : window.innerWidth < 768
                      ? -20
                      : 40,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}
            >
              {/* Visual Marker */}
              <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-steel dark:bg-mint border-4 md:border-4 border-white dark:border-background-dark shadow-lg -translate-x-1/2 z-10" />

              <div className="md:w-1/2 pl-12 md:pl-0">
                <div
                  className={`group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-ghost dark:bg-navy border-2 border-transparent hover:border-steel/20 dark:hover:border-mint/30 transition-all duration-500 shadow-lg hover:shadow-steel/10`}
                >
                  <div
                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 mb-4 md:mb-6 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white overflow-hidden p-2 md:p-2.5 flex items-center justify-center border-4 border-steel/10 shrink-0 shadow-md">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="max-w-full max-h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-navy dark:text-ghost group-hover:text-steel dark:group-hover:text-mint transition-colors tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-steel dark:text-mint font-black text-[10px] md:text-xs uppercase tracking-widest mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mb-4 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}
                  >
                    <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-lg bg-steel/10 dark:bg-steel/40 text-navy dark:text-ghost text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] border border-steel/20 dark:border-mint/20">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-navy/70 dark:text-ghost/80 text-xs md:text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experiences;

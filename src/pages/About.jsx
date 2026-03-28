import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

export const About = () => {
  const { personal } = portfolioData;

  return (
    <Section id="about" className="bg-steel/5 dark:bg-navy/20">
      <SectionHeading subtitle="Profile">About Me</SectionHeading>

      <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative order-2 lg:order-1"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-navy/5 dark:border-mint/10 shadow-sm relative z-10 group ring-1 ring-inset ring-white/10">
            <img
              src={require('../assets/mine/pc.webp')}
              alt="Sanjeet"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-40 dark:opacity-20" />
          </div>
          {/* Accent Blobs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-steel rounded-full blur-[80px] opacity-10 dark:opacity-20 animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-mint rounded-full blur-[100px] opacity-10 dark:opacity-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <div className="space-y-8 md:space-y-12">
            <h3 className="text-xl md:text-3xl font-black text-navy dark:text-ghost leading-tight uppercase">
              {personal.aboutHeading}
            </h3>

            <p className="text-sm md:text-base text-navy/70 dark:text-ghost/70 leading-relaxed font-medium max-w-lg">
              {personal.about.split('\n\n').map((paragraph, i) => (
                <React.Fragment key={i}>
                  {paragraph}
                  {i < personal.about.split('\n\n').length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 pt-6 md:pt-10 border-t border-navy/10 dark:border-mint/10">
              {personal.stats.map(
                (stat, i) =>
                  stat.value && (
                    <div key={i} className="group">
                      <p className="text-steel dark:text-mint font-black text-2xl md:text-3xl group-hover:scale-110 transition-transform origin-left tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-navy/40 dark:text-ghost/50 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
                        {stat.label}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

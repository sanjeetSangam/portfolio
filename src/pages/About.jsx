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
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-steel/10 dark:border-mint/20 shadow-2xl relative z-10 group">
            <img
              src={require('../assets/mine/pc.JPG')}
              alt="Sanjeet"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-40 dark:opacity-60" />
          </div>
          {/* Accent Blobs */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-steel rounded-full blur-[60px] opacity-20 dark:opacity-30 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-mint rounded-full blur-[80px] opacity-10 dark:opacity-20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-4xl font-black text-navy dark:text-ghost leading-tight">
              {personal.aboutHeading}
            </h3>

            <p className="text-base md:text-lg text-navy/70 dark:text-ghost/80 leading-relaxed font-medium">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-10 border-t border-navy/10 dark:border-mint/10">
              {personal.stats.map(
                (stat, i) =>
                  i === 0 && (
                    <div key={i} className="group">
                      <p className="text-steel dark:text-mint font-black text-3xl md:text-4xl group-hover:scale-110 transition-transform origin-left">
                        {stat.value}
                      </p>
                      <p className="text-navy/40 dark:text-ghost/50 text-[10px] font-black uppercase tracking-widest mt-1">
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

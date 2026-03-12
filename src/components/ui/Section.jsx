import React from 'react';
import { cn } from './Button';
import { motion } from 'framer-motion';

export const Section = ({ id, className, children, ...props }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'py-12 md:py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full transition-colors duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const SectionHeading = ({ children, subtitle, className }) => {
  return (
    <div className={cn('mb-8 md:mb-12 text-center md:text-left', className)}>
      <motion.p
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-steel dark:text-mint font-black tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-black text-navy dark:text-ghost tracking-tighter uppercase"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="h-1.5 bg-steel dark:bg-mint mt-4 rounded-full mx-auto md:mx-0 shadow-lg shadow-steel/20 dark:shadow-mint/20"
      />
    </div>
  );
};

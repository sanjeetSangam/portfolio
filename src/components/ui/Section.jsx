import React from 'react';
import { cn } from './Button';
import { motion } from 'framer-motion';

export const Section = ({ id, className, children, ...props }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'py-12 md:py-18 px-6 md:px-12 max-w-7xl mx-auto w-full transition-colors duration-300',
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
    <div className={cn('mb-8 md:mb-16 text-center md:text-left', className)}>
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-accent dark:text-accent-light font-bold tracking-[0.3em] uppercase text-[9px] mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-5xl font-black text-primary dark:text-primary-light tracking-tighter uppercase leading-none"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="h-1 bg-accent mt-4 rounded-full mx-auto md:mx-0 opacity-80"
      />
    </div>
  );
};

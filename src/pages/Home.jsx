import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Button } from '../components/ui/Button';
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  ChevronDown,
  Download,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-scroll';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
};

export const Home = () => {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [personal.roles.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-16 transition-colors duration-300 md:pt-24"
    >
      {/* Decorative Background Elements - Enhanced for Depth */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-[300px] w-[300px] rounded-full bg-steel/5 blur-[80px] dark:bg-steel/10 md:h-[600px] md:w-[600px] md:blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-[250px] w-[250px] rounded-full bg-navy/5 blur-[70px] dark:bg-navy/20 md:h-[500px] md:w-[500px] md:blur-[100px]" />
      <div className="absolute top-1/4 left-1/4 h-[150px] w-[150px] rounded-full bg-mint/5 blur-[60px] dark:bg-mint/5 md:h-[300px] md:w-[300px] md:blur-[90px]" />

      <div className="z-10 grid h-full w-full max-w-7xl items-center gap-8 px-6 md:px-12 lg:grid-cols-12 md:gap-16">
        <div className="flex flex-col items-start text-left lg:col-span-12 xl:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-steel/20 bg-steel/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-steel dark:border-mint/20 dark:bg-steel/10 dark:text-mint md:mb-8 md:text-[10px]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-steel dark:bg-mint" />
            {personal.badge}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-2 text-lg font-medium text-navy/60 dark:text-ghost/60 md:mb-3 md:text-2xl"
          >
            {personal.heroSubtitle}
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-4xl font-black leading-[0.95] tracking-tighter text-navy dark:text-ghost md:mb-8 md:text-6xl lg:text-7xl"
          >
            {personal.name.split(' ').map((word, i) => (
              <span
                key={i}
                className={
                  i === personal.name.split(' ').length - 1
                    ? 'block text-steel dark:text-mint'
                    : 'block'
                }
              >
                {word}
              </span>
            ))}
          </motion.h1>

          <div className="mb-8 min-h-[40px] md:mb-10 md:min-h-[60px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'circOut' }}
                className="flex items-center gap-3 text-xl font-bold text-navy/70 dark:text-mint md:text-3xl lg:text-4xl"
              >
                <Sparkles className="text-steel dark:text-mint" size={24} />
                <span className="tracking-tight">{personal.roles[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-xl text-base font-medium leading-relaxed text-navy/60 dark:text-ghost/60 md:mb-10 md:text-lg"
          >
            {personal.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row md:gap-6"
          >
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="group w-full gap-3 shadow-2xl shadow-steel/20 dark:shadow-mint/10"
              >
                <Download
                  size={20}
                  className="transition-transform group-hover:translate-y-1"
                />
                Get Resume
              </Button>
            </a>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full border-steel text-steel transition-all duration-300 hover:bg-steel/10 dark:border-mint dark:text-mint"
              >
                Let's Talk
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 md:gap-8"
          >
            {Object.entries(personal.socials).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy/30 transition-all duration-300 hover:-translate-y-1 hover:text-steel dark:text-ghost/30 dark:hover:text-mint"
                >
                  <Icon size={26} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:col-span-12 xl:block xl:col-span-5"
        >
          <div className="relative z-10 overflow-hidden rounded-3xl border-4 border-steel/10 shadow-[0_0_50px_rgba(69,123,157,0.2)] dark:border-navy">
            <img
              src={require('../assets/mine/pc.JPG')}
              alt={personal.name}
              className="h-auto w-full scale-105 brightness-90 grayscale transition-all duration-1000 hover:scale-100 hover:brightness-100 hover:grayscale-0"
            />
          </div>
          <div className="absolute -top-10 -right-10 -z-0 h-40 w-40 rounded-full bg-mint/10 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 -z-0 h-60 w-60 rounded-full bg-steel/10 blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-3 text-navy/30 dark:text-mint/40 md:bottom-10"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

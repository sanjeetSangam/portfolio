import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Button } from '../components/ui/Button';
import { Tooltip } from '../components/ui/Tooltip';
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
            className="mb-6 flex items-center gap-2 rounded-full border border-primary/5 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent dark:border-accent-light/10 dark:bg-accent-light/5 dark:text-accent-light md:mb-8"
          >
            <span className="h-1 w-1 animate-pulse rounded-full bg-accent dark:bg-accent-light" />
            {personal.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-black leading-[1.2] tracking-tighter text-primary dark:text-primary-light md:mb-6 md:text-5xl lg:text-5xl uppercase"
          >
            {personal.name.split(' ').map((word, i) => (
              <span
                key={i}
                className={
                  i === personal.name.split(' ').length - 1
                    ? 'inline-block text-accent dark:text-accent-light ml-2 md:ml-3'
                    : 'inline-block mr-2'
                }
              >
                {word}
              </span>
            ))}
          </motion.h1>

          <div className="mb-6 min-h-[24px] md:mb-8 md:min-h-[40px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center gap-2.5 text-lg font-bold text-secondary dark:text-accent-light md:text-2xl tracking-tight"
              >
                <Sparkles
                  className="text-accent dark:text-accent-light shrink-0"
                  size={18}
                />
                <span className="leading-tight capitalize">
                  {personal.roles[roleIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 max-w-lg text-sm font-medium leading-[1.6] text-secondary dark:text-primary-light/60 md:mb-10 md:text-base"
          >
            {personal.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row md:gap-5"
          >
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="md"
                className="group w-full gap-2.5 shadow-md shadow-accent/5 dark:shadow-accent-light/5 px-6 py-5 text-sm bg-accent hover:bg-accent/90 dark:bg-accent-light dark:hover:bg-accent-light/90 dark:text-primary"
              >
                <Download
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
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
                size="md"
                className="w-full border-accent text-accent transition-all duration-300 hover:bg-accent/10 dark:border-accent-light dark:text-accent-light px-6 py-5 text-sm"
              >
                Inquiry
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 mt-4"
          >
            {[
              {
                icon: <Linkedin size={24} />,
                url: portfolioData.personal.socials.linkedin,
                label: 'LinkedIn',
              },
              {
                icon: <Github size={24} />,
                url: portfolioData.personal.socials.github,
                label: 'GitHub',
              },
              {
                icon: <Youtube size={24} />,
                url: portfolioData.personal.socials.youtube,
                label: 'YouTube',
              },
              {
                icon: <Instagram size={24} />,
                url: portfolioData.personal.socials.instagram,
                label: 'Instagram',
              },
            ].map((social, idx) => (
              <Tooltip key={idx} text={`${social.label}`}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center bg-white/5 dark:bg-ghost/5 text-navy/30 dark:text-ghost/30 hover:text-steel dark:hover:text-mint hover:scale-110 active:scale-95 transition-all duration-300 border border-navy/5 dark:border-mint/10"
                >
                  {social.icon}
                </a>
              </Tooltip>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:col-span-12 xl:block xl:col-span-5"
        >
          <div className="relative z-10 overflow-hidden rounded-[3rem] border-2 border-steel/5 shadow-2xl dark:border-navy-deep ring-1 ring-inset ring-white/10">
            <img
              src={require('../assets/mine/pc.webp')}
              alt={personal.name}
              className="h-auto w-full scale-105 transition-all duration-1000 hover:scale-100"
            />
          </div>
          <div className="absolute -top-20 -right-20 -z-0 h-64 w-64 rounded-full bg-mint/5 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 -z-0 h-80 w-80 rounded-full bg-steel/5 blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 md:bottom-10 z-10 flex cursor-pointer flex-col items-center gap-3 text-navy/30 dark:text-mint/40 animate-passive-float"
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

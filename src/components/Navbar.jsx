import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Sun,
  Moon,
  Youtube,
  Instagram,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { cn } from './ui/Button';
import { useThemeStore } from '../store/useThemeStore';

const allNavLinks = [
  { name: 'Home', to: 'home', key: 'home' },
  { name: 'About', to: 'about', key: 'about' },
  { name: 'Skills', to: 'skills', key: 'skills' },
  { name: 'Projects', to: 'projects', key: 'projects' },
  { name: 'Experience', to: 'experience', key: 'experience' },
  { name: 'Contact', to: 'contact', key: 'contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const { visibility } = portfolioData;

  const navLinks = allNavLinks.filter((link) => visibility[link.key]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-[9999] transition-all duration-300',
        scrolled
          ? 'bg-white/98 dark:bg-background-dark/98 backdrop-blur-2xl h-16 md:h-20 shadow-xl border-b border-navy/5 dark:border-mint/10'
          : 'bg-transparent h-20 md:h-24'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          className="text-2xl font-black text-navy dark:text-ghost tracking-tighter cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-steel rounded-xl flex items-center justify-center group-hover:bg-mint transition-all duration-300 shadow-lg shadow-steel/20">
            <span className="text-white font-black text-lg">
              {portfolioData.personal.firstName.charAt(0)}
            </span>
          </div>
          <span className="hidden sm:inline">
            {portfolioData.personal.firstName.toUpperCase()}.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              activeClass="!text-steel dark:!text-mint !opacity-100 scale-105"
              className="text-xs font-black uppercase tracking-widest text-navy/50 dark:text-ghost/50 hover:text-navy dark:hover:text-ghost transition-all cursor-pointer relative py-2 group/item"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-steel dark:bg-mint scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA & Theme toggle */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-navy/5 dark:hover:bg-ghost/10 transition-colors text-navy dark:text-ghost"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <div className="h-6 w-px bg-navy/10 dark:bg-ghost/10" />

          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-navy/40 dark:text-mint hover:text-navy dark:hover:text-ghost transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-navy/40 dark:text-mint hover:text-navy dark:hover:text-ghost transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Mobile Toggle & Theme toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-navy dark:text-ghost"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button
            className="p-2 text-navy dark:text-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] md:hidden h-screen"
          >
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-navy/60 dark:bg-background-dark/80 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full h-full bg-white dark:bg-background-dark p-8 md:p-12 flex flex-col justify-between shadow-[-20px_0_80px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col gap-12">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-black text-navy dark:text-ghost tracking-tighter">
                    NAVIGATION.
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-12 h-12 rounded-full bg-navy/5 dark:bg-ghost/10 flex items-center justify-center text-navy dark:text-ghost"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        activeClass="!text-steel dark:!text-mint pl-6 scale-110"
                        className="text-4xl font-black text-navy/40 dark:text-ghost/40 hover:text-navy dark:hover:text-ghost transition-all cursor-pointer block transform origin-left"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="h-px bg-navy/10 dark:bg-ghost/10 w-full" />
                <div className="flex gap-8">
                  {Object.entries(portfolioData.personal.socials).map(
                    ([platform, url], idx) => {
                      const Icon =
                        platform === 'github'
                          ? Github
                          : platform === 'linkedin'
                            ? Linkedin
                            : platform === 'youtube'
                              ? Youtube
                              : Instagram;
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="text-navy/40 dark:text-ghost/40 hover:text-steel dark:hover:text-mint transition-colors"
                        >
                          <Icon size={28} />
                        </motion.a>
                      );
                    }
                  )}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/20 dark:text-ghost/20">
                  © {new Date().getFullYear()} {portfolioData.personal.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

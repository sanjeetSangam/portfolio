import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { visibility } = portfolioData;

  const footerLinks = [
    { name: 'Home', to: 'home', key: 'home' },
    { name: 'About', to: 'about', key: 'about' },
    { name: 'Skills', to: 'skills', key: 'skills' },
    { name: 'Projects', to: 'projects', key: 'projects' },
    { name: 'Experience', to: 'experience', key: 'experience' },
  ].filter((link) => visibility[link.key]);

  return (
    <footer className="footer bg-white dark:bg-background-dark pt-20 md:pt-32 pb-12 md:pb-16 border-t border-navy/5 dark:border-navy/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <Link
              to="home"
              smooth={true}
              className="text-3xl md:text-4xl font-black text-navy dark:text-ghost tracking-tighter mb-8 block cursor-pointer"
            >
              {portfolioData.personal.firstName.toUpperCase()}
              <span className="text-steel">.</span>
            </Link>
            <p className="text-navy/50 dark:text-ghost/50 max-w-sm text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-10">
              {portfolioData.footer.description}
            </p>
            <div className="flex gap-6 md:gap-8">
              {Object.entries(portfolioData.personal.socials).map(
                ([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 text-navy/40 dark:text-mint hover:text-navy dark:hover:text-ghost transition-all hover:-translate-y-1"
                  >
                    {platform === 'github' && <Github size={22} />}
                    {platform === 'linkedin' && <Linkedin size={22} />}
                    {platform === 'youtube' && <Youtube size={22} />}
                    {platform === 'instagram' && <Instagram size={22} />}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-navy dark:text-ghost font-black text-xs uppercase tracking-[0.3em] mb-8 md:mb-10">
              Navigation
            </h4>
            <div className="flex flex-col gap-4 md:gap-6">
              {footerLinks.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  smooth={true}
                  className="text-navy/40 dark:text-ghost/40 hover:text-steel dark:hover:text-mint transition-colors cursor-pointer text-xs md:text-sm font-bold uppercase tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-navy dark:text-ghost font-black text-xs uppercase tracking-[0.3em] mb-8 md:mb-10">
              Contact
            </h4>
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-xs md:text-sm font-bold text-navy/40 dark:text-ghost/40 tracking-widest uppercase">
                {portfolioData.personal.contact.location}
              </p>
              <a
                href={`mailto:${portfolioData.personal.contact.email}`}
                className="text-sm md:text-base font-black text-navy dark:text-ghost hover:text-steel dark:hover:text-mint transition-colors underline decoration-navy/10 dark:decoration-mint/20 underline-offset-8"
              >
                {portfolioData.personal.contact.email}
              </a>
              <a
                href={`tel:${portfolioData.personal.contact.phoneRaw}`}
                className="text-sm md:text-base font-black text-navy dark:text-ghost hover:text-steel dark:hover:text-mint transition-colors"
              >
                {portfolioData.personal.contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-navy/5 dark:border-navy/40 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <p className="text-navy/20 dark:text-ghost/20 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-left">
            © {currentYear} {portfolioData.personal.name}.{' '}
            {portfolioData.footer.copyright}
          </p>
          <div className="flex items-center gap-3 text-navy/30 dark:text-ghost/30 text-[10px] md:text-xs font-black uppercase tracking-widest">
            ENGINEERED WITH{' '}
            <Heart size={14} className="text-steel fill-steel" />{' '}
            {portfolioData.footer.heartText}
          </div>
        </div>
      </div>
    </footer>
  );
};

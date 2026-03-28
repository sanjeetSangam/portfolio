import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Tooltip } from '../components/ui/Tooltip';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
};

export const Contact = () => {
  const { contact } = portfolioData.personal;

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phoneRaw}`,
    },
    { icon: MapPin, label: 'Location', value: contact.location, href: '#' },
  ];

  return (
    <Section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <SectionHeading subtitle="Connection">Get In Touch</SectionHeading>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <h3 className="text-3xl md:text-5xl font-black text-primary dark:text-primary-light mb-8 leading-[1.1] tracking-tighter uppercase transition-all duration-500">
            Let's build something{' '}
            <span className="text-accent dark:text-accent-light block md:inline">
              exceptional.
            </span>
          </h3>
          <p className="text-secondary dark:text-primary-light/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work and full-time
            opportunities. Reach out via any of the channels below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-primary/5 dark:border-white/5 shadow-xl shadow-primary/5 dark:shadow-black/20 hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/5 dark:bg-accent-light/5 flex items-center justify-center text-accent dark:text-accent-light mb-6 group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent-light dark:group-hover:text-primary-dark transition-all duration-500 ring-4 ring-transparent group-hover:ring-accent/10">
                <info.icon size={24} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary/40 dark:text-accent-light/40 mb-2">
                {info.label}
              </p>
              <p className="text-primary dark:text-primary-light font-black text-base md:text-lg text-center break-all transition-colors duration-300">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 pt-16 border-t border-primary/5 dark:border-white/5 flex flex-col items-center"
        >
          <p className="text-secondary/40 dark:text-primary-light/30 font-bold uppercase tracking-[0.4em] text-[10px] mb-10">
            Digital Footprint
          </p>
          <div className="flex gap-8 md:gap-12">
            {Object.entries(portfolioData.personal.socials).map(
              ([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <Tooltip
                    key={platform}
                    text={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile`}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary/60 dark:text-primary-light/40 hover:text-accent dark:hover:text-accent-light transition-all duration-300 hover:-translate-y-1 block p-2"
                    >
                      <Icon size={24} />
                    </a>
                  </Tooltip>
                );
              }
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

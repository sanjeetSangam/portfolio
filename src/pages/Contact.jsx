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
    <Section id="contact" className="bg-[#1d3557]/5 dark:bg-[#1d3557]/20">
      <SectionHeading subtitle="Connection">Get In Touch</SectionHeading>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-black text-navy dark:text-ghost mb-8 leading-tight">
            Let's build something{' '}
            <span className="text-steel dark:text-mint">exceptional.</span>
          </h3>
          <p className="text-navy/60 dark:text-ghost/70 text-xl font-medium max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time
            opportunities. Reach out via any of the channels below!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center p-10 rounded-[2.5rem] bg-white dark:bg-navy border border-navy/5 dark:border-mint/10 shadow-xl hover:shadow-steel/20 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-steel/10 dark:bg-mint/10 flex items-center justify-center text-steel dark:text-mint mb-6 group-hover:bg-steel group-hover:text-white dark:group-hover:bg-mint dark:group-hover:text-navy transition-all duration-500">
                <info.icon size={32} />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] font-black text-navy/40 dark:text-mint/50 mb-2">
                {info.label}
              </p>
              <p className="text-navy dark:text-ghost font-black text-lg text-center break-all">
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
          className="mt-20 pt-12 border-t border-navy/10 dark:border-ghost/10 flex flex-col items-center"
        >
          <p className="text-navy/40 dark:text-ghost/40 font-bold uppercase tracking-widest text-xs mb-8">
            Follow Me
          </p>
          <div className="flex gap-10">
            {Object.entries(portfolioData.personal.socials).map(
              ([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy/40 dark:text-ghost/40 hover:text-steel dark:hover:text-mint transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={32} />
                  </a>
                );
              }
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

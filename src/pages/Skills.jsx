import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { RiReactjsLine, RiNodejsLine, RiJavascriptLine } from 'react-icons/ri';
import { FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiSocketdotio,
  SiGithub,
  SiCanva,
  SiNetlify,
  SiHeroku,
  SiAtlassian,
} from 'react-icons/si';

const iconMap = {
  // Frontend
  ReactJs: RiReactjsLine,
  Redux: SiRedux,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: RiJavascriptLine,
  Typescript: SiTypescript,
  // Backend
  NodeJs: RiNodejsLine,
  MongoDB: SiMongodb,
  ExpressJs: SiExpress,
  'Socket.io': SiSocketdotio,
  Firebase: SiFirebase,
  Postman: SiPostman,
  // Others
  Java: Icons.Code2,
  Salesforce: Icons.Cloud,
  Git: FaGitAlt,
  Github: SiGithub,
  Figma: SiFigma,
  'Vs Code': Icons.Terminal,
  Canva: SiCanva,
  Sourcetree: SiAtlassian,
  Netlify: SiNetlify,
  Heroku: SiHeroku,
  Default: Icons.Code2,
};

export const Skills = () => {
  return (
    <Section id="skills" className="bg-ghost/30 dark:bg-background-dark/50">
      <SectionHeading subtitle="Expertise">Professional Skills</SectionHeading>

      <div className="flex flex-col gap-10 md:gap-16">
        {portfolioData.skills.map((category, idx) => (
          <div key={category.category} className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-steel/10 dark:bg-mint/10 flex items-center justify-center text-steel dark:text-mint">
                {idx === 0 ? (
                  <Icons.Layout size={20} />
                ) : idx === 1 ? (
                  <Icons.Server size={20} />
                ) : (
                  <Icons.Zap size={20} />
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-navy dark:text-ghost tracking-tight uppercase">
                {category.category}{' '}
                <span className="text-steel/30 dark:text-mint/30 font-light ml-2">
                  [{category.items.length}]
                </span>
              </h3>
              <div className="h-px bg-navy/5 dark:bg-ghost/10 flex-grow hidden sm:block" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-5">
              {category.items.map((skill, sIdx) => {
                const Icon = iconMap[skill.name] || iconMap.Default;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="group flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl bg-white dark:bg-navy border border-navy/5 dark:border-mint/10 hover:border-steel/30 dark:hover:border-mint/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-ghost dark:bg-background-dark/50 flex items-center justify-center text-navy/40 dark:text-ghost/40 group-hover:bg-steel dark:group-hover:bg-mint group-hover:text-white dark:group-hover:text-navy transition-all duration-500 shrink-0 mb-3 md:mb-4 shadow-inner">
                      <Icon size={24} className="md:size-28" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-navy dark:text-ghost uppercase tracking-wider text-center group-hover:text-steel dark:group-hover:text-mint transition-colors duration-500 truncate w-full">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

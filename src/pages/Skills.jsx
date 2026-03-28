import React from 'react';
import { Section, SectionHeading } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Tooltip } from '../components/ui/Tooltip';
import { useThemeStore } from '../store/useThemeStore';
import * as Icons from 'lucide-react';
import { RiReactjsLine, RiNodejsLine, RiJavascriptLine } from 'react-icons/ri';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from 'react-icons/fa';
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFigma,
  SiSocketdotio,
  SiGithub,
  SiCanva,
  SiNetlify,
  SiHeroku,
  SiAtlassian,
  SiDocker,
  SiGithubactions,
  SiCaddy,
  SiLinux,
  SiPython,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiReactrouter,
  SiPostgresql,
  SiRedis,
  SiVercel,
  SiJenkins,
  SiKubernetes,
  SiNginx,
  SiSalesforce,
  SiFastapi,
  SiApache,
  SiGnubash,
} from 'react-icons/si';

const iconMap = {
  // Frontend
  ReactJs: RiReactjsLine,
  Redux: SiRedux,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: RiJavascriptLine,
  Typescript: SiTypescript,
  Tailwind: SiTailwindcss,
  'Next.js': SiNextdotjs,
  Vite: SiVite,
  // Backend
  NodeJs: RiNodejsLine,
  'FastAPI (Python)': SiFastapi,
  Python: SiPython,
  MongoDB: SiMongodb,
  ExpressJs: SiExpress,
  'Socket.io': SiSocketdotio,
  Motor: Icons.Database,
  Supabase: SiSupabase,
  'React Router': SiReactrouter,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  // DevOps & Infra
  Docker: SiDocker,
  'Docker Compose': Icons.Layers,
  'GitHub Actions': SiGithubactions,
  Caddy: SiCaddy,
  'Linux/Bash': SiGnubash,
  Linux: SiLinux,
  Jenkins: SiJenkins,
  Kubernetes: SiKubernetes,
  Nginx: SiNginx,
  Apache: SiApache,
  Husky: SiGithub,
  // Others
  Java: FaJava,
  Salesforce: SiSalesforce,
  Git: FaGitAlt,
  Github: SiGithub,
  Figma: SiFigma,
  'Vs Code': Icons.Terminal,
  Canva: SiCanva,
  Sourcetree: SiAtlassian,
  Netlify: SiNetlify,
  Heroku: SiHeroku,
  Vercel: SiVercel,
  Postman: SiPostman,
  Default: Icons.Code2,
};

const brandColorMap = {
  // Frontend
  ReactJs: '#61DAFB',
  Redux: '#764ABC',
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  Typescript: '#3178C6',
  Tailwind: '#06B6D4',
  'Next.js': '#FFFFFF',
  Vite: '#646CFF',
  // Backend
  NodeJs: '#339933',
  'FastAPI (Python)': '#05998B',
  Python: '#3776AB',
  MongoDB: '#47A248',
  ExpressJs: '#FFFFFF',
  'Socket.io': '#FFFFFF',
  Motor: '#47A248',
  Supabase: '#3ECF8E',
  'React Router': '#CA4245',
  PostgreSQL: '#4169E1',
  Redis: '#DC382D',
  // DevOps & Infra
  Docker: '#2496ED',
  'Docker Compose': '#2496ED',
  'GitHub Actions': '#2088FF',
  Caddy: '#00ADEF',
  'Linux/Bash': '#FCC624',
  Linux: '#FCC624',
  Jenkins: '#D24939',
  Kubernetes: '#326CE5',
  Nginx: '#009639',
  Apache: '#D22128',
  Husky: '#FFFFFF',
  // Others
  Salesforce: '#00A1E0',
  Git: '#F05032',
  Github: '#FFFFFF',
  Figma: '#F24E1E',
  'Vs Code': '#007ACC',
  Postman: '#FF6C37',
};

export const Skills = () => {
  const { theme } = useThemeStore();

  return (
    <Section id="skills" className="bg-transparent">
      <SectionHeading subtitle="Expertise">Professional Skills</SectionHeading>

      <div className="flex flex-col gap-12 md:gap-20">
        {portfolioData.skills.map((category, idx) => (
          <div key={category.category} className="space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/5 dark:bg-white/5 border border-accent/10 dark:border-white/10 flex items-center justify-center text-accent dark:text-accent-light shadow-sm">
                {idx === 0 ? (
                  <Icons.Layout size={22} />
                ) : idx === 1 ? (
                  <Icons.Server size={22} />
                ) : (
                  <Icons.Zap size={22} />
                )}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-primary dark:text-primary-light tracking-tighter uppercase leading-none">
                  {category.category}
                </h2>
                <div className="h-1 w-12 bg-accent mt-2 rounded-full opacity-60" />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6">
              {category.items.map((skill, sIdx) => {
                const Icon = iconMap[skill.name] || iconMap.Default;
                const brandColor = brandColorMap[skill.name] || '#94A3B8'; // Fallback to Slate-400

                // Theme-aware color logic: Flip white or low-contrast icons to dark in light mode
                const isInvisibleOnWhite = 
                  brandColor.toLowerCase() === '#ffffff' || 
                  ['javascript', 'linux', 'linux/bash'].includes(skill.name.toLowerCase());
                
                const displayColor = (theme === 'light' && isInvisibleOnWhite) 
                  ? (skill.name.toLowerCase().includes('javascript') ? '#D97706' : '#09090B') // Amber-600 for JS, Zinc for others
                  : brandColor;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.05, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group flex flex-col items-center justify-center p-5 md:p-6 rounded-lg bg-accent/5 dark:bg-white/5 border border-accent/10 dark:border-white/5 hover:border-accent/30 dark:hover:border-white/20 transition-all duration-400"
                  >
                    <Tooltip text={skill.name}>
                      <div
                        className="transition-all duration-500 transform group-hover:scale-110 shrink-0"
                        style={{
                          color: displayColor,
                          filter: theme === 'light' ? 'saturate(0.8) opacity(0.9)' : 'saturate(0.6) opacity(0.8)',
                        }}
                      >
                        <div className="group-hover:filter-none group-hover:opacity-100 transition-all duration-500">
                          <Icon size={32} />
                        </div>
                      </div>
                    </Tooltip>

                    {/* Mobile-only micro-label for identity */}
                    <span className="md:hidden text-[8px] font-bold uppercase tracking-[0.2em] text-secondary/40 dark:text-primary-light/30 mt-3 text-center leading-none">
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

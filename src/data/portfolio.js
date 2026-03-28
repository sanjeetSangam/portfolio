import thekedar from '../assets/thekedar.png';
import gharbnao from '../assets/gharbnao.png';
import swiftlink from '../assets/swiftlink.png';
import tft from '../assets/companies/tft.jpg';
import codi from '../assets/companies/codinova.jpg';
import demandfarm from '../assets/companies/demandfarm.jpg';

export const portfolioData = {
  visibility: {
    home: true,
    about: true,
    skills: true,
    projects: true,
    experience: true,
    contact: true,
  },
  personal: {
    name: 'Sanjeet Kumar Sangam',
    firstName: 'Sanjeet',
    lastName: 'Sangam',
    title: 'GOAL: Senior Full Stack & DevOps Architect',
    badge: 'GOAL: Senior Software Architect & DevOps Lead',
    heroSubtitle: 'I am',
    heroDescription: 'Building Resilient, Scalable, and Automated Solutions for the Modern Web.',
    aboutHeading: 'Architecting high-performance ecosystems with engineering precision.',
    roles: ['Architect 🏗️', 'Full Stack Developer 👨‍💻', 'DevOps Specialist 🛡️'],
    about: 'Distinguished Full-Stack & DevOps Architect with over 3 years of hands-on experience in engineering production-grade, high-availability ecosystems. Expert in bridging the gap between sophisticated backend architectures and polished frontend experiences, with a core focus on security, automation (CI/CD), and accessibility (WCAG). Demonstrated track record in transforming complex business requirements into high-performance digital products while maintaining technical excellence and mentoring specialized engineering teams.',
    stats: [
      { label: 'Years Exp', value: '3+' },
      { label: 'Shipped', value: '' },
      { label: 'Technologies', value: '' },
    ],
    contact: {
      email: 'asanjeetsangam15@gmail.com',
      phone: '+91 9006079833',
      phoneRaw: '+919006079833',
      location: 'Madhepura, Bihar',
    },
    resumeUrl:
      'https://drive.google.com/file/d/1x9k4Xlm5WzUTcQpT95nS786HGFC_Z32q/view',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sanjeet-kumar-sangam-09097421a/',
      github: 'https://github.com/sanjeetSangam',
      youtube: 'https://www.youtube.com/channel/UCcqNqRLGolqqWUCFybH8adw',
      instagram: 'https://www.instagram.com/san_arts_official_/',
    },
  },
  footer: {
    description:
      'Transforming complex engineering challenges into minimalist, high-performance web experiences.',
    copyright: 'ARCHITECTED FOR EXCELLENCE.',
    heartText: 'BY SANJEET',
  },
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'ReactJs', icon: 'React' },
        { name: 'Redux', icon: 'Redux' },
        { name: 'HTML', icon: 'Html' },
        { name: 'CSS', icon: 'Css' },
        { name: 'JavaScript', icon: 'Javascript' },
        { name: 'Typescript', icon: 'Typescript' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'NodeJs', icon: 'Node' },
        { name: 'FastAPI (Python)', icon: 'Python' },
        { name: 'MongoDB', icon: 'Mongodb' },
        { name: 'ExpressJs', icon: 'Express' },
        { name: 'Socket.io', icon: 'Socket' },
        { name: 'Motor', icon: 'Python' },
      ],
    },
    {
      category: 'DevOps & Infra',
      items: [
        { name: 'Docker', icon: 'Docker' },
        { name: 'GitHub Actions', icon: 'Github' },
        { name: 'Caddy', icon: 'Api' },
        { name: 'Docker Compose', icon: 'Docker' },
        { name: 'Linux/Bash', icon: 'Vscode' },
        { name: 'Husky', icon: 'Git' },
      ],
    },
    {
      category: 'Others',
      items: [
        { name: 'Java', icon: 'Java' },
        { name: 'Salesforce', icon: 'Salesforce' },
        { name: 'Git', icon: 'Git' },
        { name: 'Github', icon: 'Github' },
        { name: 'Figma', icon: 'Figma' },
        { name: 'Vs Code', icon: 'Vscode' },
        { name: 'Canva', icon: 'Canva' },
        { name: 'Sourcetree', icon: 'Sourcetree' },
        { name: 'Netlify', icon: 'Netlify' },
        { name: 'Heroku', icon: 'Heroku' },
      ],
    },
  ],
  experiences: [
    {
      id: 3,
      company: 'Think Future Technologies',
      role: 'Fullstack Developer - Accessibility Specialist',
      period: '2024 - Present',
      description:
        'Fullstack Developer and Accessibility Specialist focused on building scalable applications while ensuring WCAG compliance. Implemented accessible UI components and performed accessibility audits.',
      logo: tft,
    },
    {
      id: 2,
      company: 'Codinova Technologies',
      role: 'Full Stack Developer',
      period: 'June 2024 - Nov 2024',
      description:
        'Full Stack Developer specializing in modern web technologies. Built responsive applications using React.js, Next.js with GraphQL APIs and developed cross-platform solutions using React Native.',
      logo: codi,
    },
    {
      id: 1,
      company: 'Demandfarm',
      role: 'Fullstack Developer',
      period: '2022 - 2024',
      description:
        'Fullstack Developer with 2-year tenure building end-to-end solutions. Developed intuitive frontend interfaces and robust backend systems, improving performance and user experience across platforms.',
      logo: demandfarm,
    },
  ],
  projects: [
    {
      title: 'Thekedar (Star Product)',
      description:
        "A premium Construction Management ERP for workforce and financial orchestration. Features automated wage calculation, expense categorization, and intelligent PDF site audits.",
      longDescription:
        "Thekedar is a comprehensive ERP solution designed specifically for construction contractors. It solves the fragmentation of site data by centralizing labor attendance, material expenses, and financial ledgers into a single source of truth. The application focuses on high-precision data entry and automated generation of complex financial reports, reducing administrative overhead by up to 40%.",
      keyFeatures: [
        'Automated Daily Wage & Attendance Engine',
        'Real-time Actual vs. Budget Monitoring',
        'Intelligent PDF Report Generation with jsPDF',
        'Secure Supabase Auth & Real-time DB Sync',
      ],
      image: thekedar,
      tags: ['React 19', 'Tailwind v4', 'Supabase', 'React Router 7'],
      status: 'Commercial / Private Repo',
      github: '',
      demo: 'https://thekedar.gharbnao.in/',
    },
    {
      title: 'SwiftLink Pro',
      description:
        "A DevOps-first URL redirection engine architected for extreme performance. Features secure reverse-proxy isolation (Caddy), Asynchronous I/O redirection, and CI/CD automated build gates.",
      longDescription:
        "SwiftLink Pro is an infrastructure-heavy project designed to handle deep-link redirection with sub-millisecond latency. The project demonstrates advanced container orchestration and security practices, including a hardened reverse-proxy setup and automated quality gates that prevent broken builds from ever reaching production.",
      keyFeatures: [
        'Asynchronous Python Backend (FastAPI)',
        'Isolated Dockerized Microservices Stack',
        'Caddy Reverse Proxy with Dynamic Routing',
        'Automated GitHub Actions CI/CD Pipeline',
        'Centralized Environment Management (12-Factor App)',
      ],
      image: swiftlink,
      tags: ['Next.js 16', 'FastAPI', 'MongoDB', 'Docker'],
      status: 'Will be Live Soon',
      github: 'https://github.com/sanjeetSangam/swiftlink-pro',
    },
    {
      title: 'GharBnao (Forecasting Engine)',
      description:
        "India's most advanced construction cost forecasting tool. Provides hyper-accurate material and labor estimates based on 2026 market projections with optimized SEO and Hindi i18n support.",
      longDescription:
        "GharBnao is a specialized forecasting engine that predicts construction costs with high precision. It uses complex mathematical models to account for inflation and market trends, providing users with a realistic glimpse into their future project budgets. It is built for maximum accessibility and SEO reach across India.",
      keyFeatures: [
        'Advanced Cost Calculation Algorithms',
        '2026 Market Trend Projections',
        'Optimized Next.js SEO & Meta Architecture',
        'Responsive, Mobile-First User Experience',
        'Hindi i18n Localization Engine',
      ],
      image: gharbnao,
      tags: ['Next.js', 'Tailwind CSS', 'i18n Metadata'],
      demo: 'https://gharbnao.in/',
      github: '',
      status: 'Commercial / Private Repo',
    },
  ],
};

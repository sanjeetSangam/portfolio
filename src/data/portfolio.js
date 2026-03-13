import { images } from '../constants';

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
    title: 'Full Stack Developer',
    badge: 'Full Stack Professional',
    heroSubtitle: 'I am',
    heroDescription: 'Mastering the art of Scalable Web Solutions.',
    aboutHeading: 'Solving complex problems with elegant engineering.',
    roles: ['Full Stack Developer 👨‍💻', 'Artist 🎨', 'YouTuber 📽️'],
    about: `Full-Stack Developer with 3+ years of experience building and shipping production-grade web and cross-platform applications. Brings pragmatic engineering expertise in shipping maintainable code and developing testable APIs with Node.js and Express. Collaborates closely with product and design teams to transform user problems into impactful, measurable features while mentoring teammates to elevate engineering quality across the stack.`,
    stats: [
      { label: 'Years Exp', value: '3+' },
      { label: 'Shipped', value: '20+' },
      { label: 'Technologies', value: '50+' },
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
        { name: 'MongoDB', icon: 'Mongodb' },
        { name: 'ExpressJs', icon: 'Express' },
        { name: 'Socket.io', icon: 'Socket' },
        { name: 'Firebase', icon: 'Firebase' },
        { name: 'Postman', icon: 'Postman' },
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
      logo: images.tft,
    },
    {
      id: 2,
      company: 'Codinova Technologies',
      role: 'Full Stack Developer',
      period: 'June 2024 - Nov 2024',
      description:
        'Full Stack Developer specializing in modern web technologies. Built responsive applications using React.js, Next.js with GraphQL APIs and developed cross-platform solutions using React Native.',
      logo: images.codi,
    },
    {
      id: 1,
      company: 'Demandfarm',
      role: 'Fullstack Developer',
      period: '2022 - 2024',
      description:
        'Fullstack Developer with 2-year tenure building end-to-end solutions. Developed intuitive frontend interfaces and robust backend systems, improving performance and user experience across platforms.',
      logo: images.demandfarm,
    },
  ],
  projects: [
    {
      title: 'GharBnao',
      description:
        "India's most advanced construction cost forecasting tool. It provides hyper-accurate estimates for materials, labor, and finishing based on 2026 market projections.",
      image: images.gharbnao,
      tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
      demo: 'https://gharbnao-web.vercel.app/',
      github: 'https://github.com/sanjeetSangam/gharbnao-web', // Assuming standard naming, or can leave as # if unknown
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A feature-rich MERN stack e-commerce platform with real-time inventory management, secure payments, and a dynamic dashboard.',
      image: images.api,
      tags: ['MERN', 'Web App', 'Stripe'],
      demo: '#',
      github: '#',
    },
  ],
};

import images from "../constants/images";
const { codi, demandfarm, tft } = images;

export const experiences = [
  {
    id: 3,
    imgUrl: {
      _type: "image",
      asset: {
        _ref: tft,
        _type: "reference",
      },
    },
    works: [
      {
        _key: "0e8ff9ab97d1",
        _type: "workExperience",
        company: "Think Future Technologies",
        desc: "Fullstack Developer and Accessibility Specialist focused on building scalable applications while ensuring WCAG compliance. Implemented accessible UI components and performed accessibility audits.",
        name: "Fullstack Developer - Accessibility Specialist",
      },
    ],
    year: "2024 - Present",
  },
  {
    id: 2,
    imgUrl: {
      _type: "image",
      asset: {
        _ref: codi,
        _type: "reference",
      },
    },
    works: [
      {
        _key: "96bc34d25c56",
        _type: "workExperience",
        company: "Codinova Technologies",
        desc: "Full Stack Developer specializing in modern web technologies. Built responsive applications using React.js, Next.js with GraphQL APIs and developed cross-platform solutions using React Native.",
        name: "Full Stack Developer",
      },
    ],
    year: "June 2024 - Nov 2024",
  },
  {
    id: 1,
    imgUrl: {
      _type: "image",
      asset: {
        _ref: demandfarm,
        _type: "reference",
      },
    },
    works: [
      {
        _key: "0e8ff9ab97d1",
        _type: "workExperience",
        company: "Demandfarm",
        desc: "Fullstack Developer with 2-year tenure building end-to-end solutions. Developed intuitive frontend interfaces and robust backend systems, improving performance and user experience across platforms.",
        name: "Fullstack Developer",
      },
    ],
    year: "2022 - 2024",
  },
];

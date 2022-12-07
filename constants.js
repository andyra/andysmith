import LogoAdobe from "./public/LogoAdobe.svg";
import LogoCss from "./public/LogoCss.svg";
import LogoFigma from "./public/LogoFigma.svg";
import LogoJs from "./public/LogoJs.svg";
import LogoNextJs from "./public/LogoNextJs.svg";
import LogoReact from "./public/LogoReact.svg";
import LogoSketch from "./public/LogoSketch.svg";

export const CONTACT_INFO = [
  {
    label: "Portfolio",
    value: "andysmith.io",
    href: "https://andysmith.io",
  },
  {
    label: "Email",
    value: "asmith.esq@gmail.com",
    href: "mailto:asmith.esq@gmail.com",
  },
  {
    label: "Phone",
    value: "(512) 731–6063",
    href: "phone:5127316063",
  },
];

export const HOW_I_CAN_HELP = [
  {
    title: "Product/UX Design",
    description: `The high-level "what should we build and why?" phase that balances product strategy and customer needs.`,
    notes: `I help with interviews, panel discussions, and market research get a handle on customer problems. With that in mind, I sketch out different approaches to solving those problems, work with PMs and Engineers to decide what the first version looks like, and write up feature pitches.
     `,
    logos: [],
  },
  {
    title: "UI Design",
    description: `The phase where loose requirements are turned into detailed, thoughtful user interfaces.`,
    notes: `I have an opinionated, detail-oriented approach to design across both web and mobile platforms. In addition to design specs, I write thoughtful UI copy, develop design systems, and build interactive prototypes to validate the effectiveness of my work.`,
    logos: [
      {
        title: "Figma",
        svg: <LogoFigma className="w-48 h-48" />,
      },
      {
        title: "Sketch",
        svg: <LogoSketch className="w-48 h-48" />,
      },
      {
        title: "Adobe Creative Cloud",
        svg: <LogoAdobe className="w-48 h-48" />,
      },
    ],
  },
  {
    title: "Front-End Development",
    description: `Connect the dots between static designs and fully functioning applications`,
    notes: `Building it right from the beginning reduces back-and-forth iteration between design and development. I can help define, build, and document design systems using a variety of CSS-in-JS frameworks. I also help to champion accessibilty best practices and speed up development. OH AND RESPONSIVE DESIGN`,
    logos: [
      {
        title: "CSS",
        svg: <LogoCss className="w-48 h-48" />,
      },
      {
        title: "JavaScript",
        svg: <LogoJs className="w-48 h-48" />,
      },
      {
        title: "React",
        svg: <LogoReact className="w-48 h-48" />,
      },
      {
        title: "Next.js",
        svg: <LogoNextJs className="w-48 h-48" />,
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Org Chart Redesign",
    image: "",
    href: "/projects/org-chart-redesign",
    details: "",
  },
  {
    title: "Pingboard Mobile App",
    image: "",
    href: "/projects/pingboard-mobile",
    details: "A cross-platform mobile app for Pingboard customers",
  },
  {
    title: "TES.fm",
    image: "",
    href: "/projects/tes",
    details: "Personal music player project built with React",
  },
  {
    title: "1:1 Meetings",
    image: "",
    href: "/projects/meetings",
    details: "1:1s • Surveys • Applause • Mobile App",
  },
];

export const EXPERIENCE = [
  {
    company: "Pingboard",
    notes: "B2B employee engagement software",
    duration: "8 years",
    jobs: [
      {
        title: "Senior UX Designer",
        years: "2020–2023",
        notes: `
          Worked closely with VP of Product and PMs to pivot to employee engagement software.
          Helped validate product decisions by conducting exploratory interviews, running user-testing sessions, and building interactive prototypes.
          Created complete specs for new features, wrote in-app copy, and helped define project priorities.
          Helped rebuild the mobile app using React Native.
          Built, maintained, and documented component libraries in React and Figma.
          Helped train new designer and ran educational "lunch-n-learn" classes on various front-end styling topics.
        `,
      },
      {
        title: "UX Designer",
        years: "2015–2020",
        notes: `
          Worked closely with the head of product on a B2B company directory tool.
          Designed interfaces for all our products across web, iOS, and Android platforms.
          Developed and maintained a CSS component system, and regularly contributed to front-end development in the Rails app.
          Designed an internal support app to help the effeciency of the support team.
          Designed and maintained the marketing site and blog, along with other marketing materials.
        `,
      },
    ],
    responsibilities: [],
  },
  {
    company: "ReturnPath",
    notes:
      "B2B email analytics and devliverability tools; acquired by Validity",
    duration: "3 years",
    jobs: [
      {
        title: "UX Designer",
        years: "2012–2015",
        notes: `
          Worked with a small UX team to design ReturnPath's large suite of enterprise email analytics tools.
          Maintained OtherInbox B2C products, including developing new apps for bnoth web and mobile.
          Improved UX by running user-testing sessions.
        `,
      },
    ],
    responsibilities: [],
  },
  {
    company: "OtherInbox",
    notes: "B2C email tools; acquired by ReturnPath",
    duration: "2 years",
    jobs: [
      {
        title: "Designer",
        years: "2010-2012",
        notes: `
          Started as an intern and promoted to full-time position within six months. Responsible for all design work, including web app, browser extension, emails, Wordpress site, and marketing materials.
        `,
      },
    ],
    responsibilities: [],
  },
];

export const MISC_JOBS = [
  {
    title: "School Bus Driver",
    years: "2008",
    notes: "A lot of good stories from this one",
  },
  {
    title: "Accidentally Designed Ads for Casinos",
    years: "2007",
    notes: "Worst two days of my life",
  },
  {
    title: "Freelance Web Designer",
    years: "2006",
    notes: "Gotta start somewhere, even if you don't know what you're doing",
  },
  {
    title: "Photo Retoucher",
    years: "2005",
    notes: "My boss looked and sounded like Sam Elliot",
  },
  {
    title: "Chinese Takeout Delivery Driver",
    years: "2004",
    notes: "Best job ever?",
  },
  {
    title: "Administrative Assistant",
    years: "2003",
    notes: "Pretty much just wrote short stories",
  },
];

export const TOOLS = [
  {
    title: "Design",
    notes: [
      "Figma",
      "Sketch",
      "Adobe CC (AI, PS, ID, XD)",
      "Framer",
      "Motion Graphics",
    ],
  },
  {
    title: "UX",
    notes: [
      "User Research",
      "UX Writing",
      "Usability Testing",
      "Prototyping",
      "InVision",
      "Marvel",
      "FullStory",
    ],
  },
  {
    title: "Code",
    notes: [
      "React",
      "React Native",
      "Next.js",
      "JavaScript",
      "CSS",
      "Tailwind",
      "Storybook",
      "SASS",
      "Ruby",
      "PHP",
    ],
  },
];

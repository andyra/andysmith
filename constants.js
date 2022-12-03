import LogoAdobe from "./public/LogoAdobe.svg";
import LogoCss from "./public/LogoCss.svg";
import LogoFigma from "./public/LogoFigma.svg";
import LogoJs from "./public/LogoJs.svg";
import LogoNextJs from "./public/LogoNextJs.svg";
import LogoReact from "./public/LogoReact.svg";
import LogoSketch from "./public/LogoSketch.svg";

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

export const CONTACT_INFO = [
  {
    label: "Phone",
    value: "(512) 731–6063",
    href: "phone:5127316063",
  },
  {
    label: "Email",
    value: "asmith.esq@gmail.com",
    href: "mailto:asmith.esq@gmail.com",
  },
  {
    label: "GitHub",
    value: "@andyra",
    href: "/",
  },
  {
    label: "Spotify",
    value: "Wonderful Land",
    href: "/",
  },
];

export const PROJECTS = [
  {
    title: "Pingboard Nav Redesign",
    image: "",
    href: "/projects/navigation",
    details:
      "A forward-looking update of the navigation and overall look & feel of the web app",
  },
  {
    title: "1:1 Meetings",
    image: "",
    href: "/projects/meetings",
    details: "1:1s • Surveys • Applause • Mobile App",
  },
  {
    title: "Pingboard Mobile",
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
  // {
  //   title: "Dotted Line Org Charts",
  //   image: "",
  //   href: "/project",
  //   details:
  //     "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis.",
  // },
  // {
  //   title: "Sharp Carousel Microwave",
  //   image: "",
  //   href: "/projects/microwave",
  //   details:
  //     "Can we do anything to make microwaves less weird? Not exactly a rigorous project, but fun to think through all the same."
  // }
];

export const EXPERIENCE = [
  {
    company: "Pingboard",
    duration: "7yr",
    jobs: [
      {
        title: "Senior UX Designer",
        years: "2020–now",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh.",
      },
      {
        title: "UX Designer",
        years: "2015–2020",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh.",
      },
    ],
    responsibilities: [],
  },
  {
    company: "ReturnPath",
    notes:
      "Started at OtherInbox, which was acquired by ReturnPath, which was subsequently acquired by Validity after I left.",
    duration: "5yr",
    jobs: [
      {
        title: "UI Designer",
        years: "2011–2015",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh.",
      },
      {
        title: "Design Intern",
        years: "2010–2011",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh.",
      },
    ],
    responsibilities: [],
  },
];

export const MISC_JOBS = [
  {
    title: "School bus driver",
    years: "2008",
    notes: "A lot of good stories from this one",
  },
  {
    title: "Accidentally designed ads for casinos",
    years: "2007",
    notes: "Worst two days of my life",
  },
  {
    title: "Photo retoucher",
    years: "2006",
    notes: "For a weird dude in Abilene, TX",
  },
  {
    title: "Chinese takeout delivery driver",
    years: "2004–06",
    notes: "Best job ever?",
  },
  {
    title: "TBD",
    years: "2003",
    notes: "Pretty much just wrote short stories",
  },
];

export const TOOLS = [
  {
    title: "Design",
    notes: "Figma, Sketch, Framer, Adobe CC (AI, PS, ID, XD), InVision, Marvel",
  },
  {
    title: "Code",
    notes:
      "React, React Native, Next.js, JavaScript, Modern CSS, CSS-in-JS, Tailwind, Storybook, SASS, GIT, Ruby, Rails, PHP",
  },
  {
    title: "Motion Graphics",
    notes: "Not an expert, but can do some damage in After Effects",
  },
  {
    title: "Misc",
    notes: "FullStory, HubSpot",
  },
];

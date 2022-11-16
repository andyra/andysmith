import LogoAdobe from "./public/LogoAdobe.svg";
import LogoCss from "./public/LogoCss.svg";
import LogoFigma from "./public/LogoFigma.svg";
import LogoJs from "./public/LogoJs.svg";
import LogoNextJs from "./public/LogoNextJs.svg";
import LogoReact from "./public/LogoReact.svg";
import LogoSketch from "./public/LogoSketch.svg";

export const HOW_I_CAN_HELP = [
  {
    title: "Feature Design",
    description:
      "Thinking through what features to build and how to develop the product. Talking to customers, discovering pain points. User testing, writing up specs. Data. Looking for weak spots, writing UI copy. I guess this is more like product design?",
    logos: [],
  },
  {
    title: "UX/UI Design",
    description:
      "Platforms: Web, iOS, and Android. Marketing. Emails. Both internal and customer-facing. Attention to detail, opinionated. My approach is to rely on concentions unless those conventions don't work. Organized, detailed design systems. Clear typography, balance, and harmony.",
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
    description:
      "I can help tighten the gap between designs and a working application. I work alongside engineers to translate pixel-perfect designs to pixel-perfect interfaces. Creating reusable components, documentation, and using best practices for a11y.",
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
    href: "/navigation",
    details:
      "A forward-looking update of the navigation and overall look & feel of the web app",
  },
  {
    title: "Dotted Line Org Chart",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis.",
  },
  {
    title: "Mobile Redesign",
    image: "",
    href: "/project",
    details:
      "Integer facilisis ex ac quam congue, eu tempor magna ullamcorper.",
  },
  {
    title: "Music Player",
    image: "",
    href: "/project",
    details:
      "Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue.",
  },
  {
    title: "Sharp Carousel Microwave",
    image: "",
    href: "/project/microwave",
    details:
      "Can we do anything to make microwaves less weird? Not exactly a rigorous project, but fun to think through all the same.",
  },
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
      "React, React Native, Next.js, JavaScript, Modern CSS, CSS-in-JS, Tailwind, SASS, GIT, Ruby, Rails, PHP",
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

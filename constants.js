import LogoAdobe from "./public/LogoAdobe.svg";
import LogoCss from "./public/LogoCss.svg";
import LogoFigma from "./public/LogoFigma.svg";
import LogoJs from "./public/LogoJs.svg";
import LogoNextJs from "./public/LogoNextJs.svg";
import LogoReact from "./public/LogoReact.svg";
import LogoSketch from "./public/LogoSketch.svg";

export const SKILLZ = [
  {
    title: "UX Design",
    description:
      "Quisque bibendum urna eu finibus varius. Quisque lectus ante, mattis sit amet blandit nec, auctor at lectus. Duis eu facilisis elit. Aliquam sed erat finibus.",
    logos: []
  },
  {
    title: "UI Design",
    description:
      "Platforms: Web, iOS, and Android. Marketing materials. Quisque bibendum urna eu finibus varius. Quisque lectus ante, mattis sit amet blandit nec, auctor at lectus. Duis eu facilisis elit. Aliquam sed erat finibus.",
    logos: [
      {
        title: "Figma",
        svg: <LogoFigma className="w-48 h-48" />
      },
      {
        title: "Sketch",
        svg: <LogoSketch className="w-48 h-48" />
      },
      {
        title: "Adobe Creative Cloud",
        svg: <LogoAdobe className="w-48 h-48" />
      }
    ]
  },
  {
    title: "Front-End Development",
    description:
      "Quisque bibendum urna eu finibus varius. Quisque lectus ante, mattis sit amet blandit nec, auctor at lectus. Duis eu facilisis elit. Aliquam sed erat finibus.",
    logos: [
      {
        title: "CSS",
        svg: <LogoCss className="w-48 h-48" />
      },
      {
        title: "JavaScript",
        svg: <LogoJs className="w-48 h-48" />
      },
      {
        title: "React",
        svg: <LogoReact className="w-48 h-48" />
      },
      {
        title: "Next.js",
        svg: <LogoNextJs className="w-48 h-48" />
      }
    ]
  }
];

export const CONTACT_LINKS = [
  {
    label: "Phone",
    value: "(512) 731–6063",
    href: "phone:5127316063"
  },
  {
    label: "Email",
    value: "asmith.esq@gmail.com",
    href: "mailto:asmith.esq@gmail.com"
  },
  {
    label: "GitHub",
    value: "@andyra",
    href: "/"
  },
  {
    label: "Spotify",
    value: "Wonderful Land",
    href: "/"
  }
];

export const PROJECTS = [
  {
    title: "Dotted Line Org Chart",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue, eu tempor magna ullamcorper."
  },
  {
    title: "Mobile Redesign",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue, eu tempor magna ullamcorper."
  },
  {
    title: "Music Player",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue, eu tempor magna ullamcorper."
  },
  {
    title: "Navigation Revamp",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue, eu tempor magna ullamcorper."
  },
  {
    title: "Amazing Slow-Downer Redesign",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue, eu tempor magna ullamcorper."
  },
  {
    title: "Microwave",
    image: "",
    href: "/project",
    details:
      "Cras vitae mauris auctor, rhoncus mi sit amet, lobortis dui. Phasellus convallis consectetur nulla, ac dictum felis tincidunt quis. Integer facilisis ex ac quam congue, eu tempor magna ullamcorper."
  }
];

export const EXPERIENCE = [
  {
    company: "Pingboard",
    duration: "7yr",
    jobs: [
      {
        title: "Senior UX Designer",
        years: "2020–current",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh."
      },
      {
        title: "UX Designer",
        years: "2015–2020",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh."
      }
    ],
    responsibilities: []
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
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh."
      },
      {
        title: "Design Intern",
        years: "2010–2011",
        notes:
          "Suspendisse bibendum sem quis nisl dictum, in vestibulum libero dignissim. Fusce dignissim sed sapien ut ultrices. Pellentesque consequat bibendum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat purus, ultrices quis feugiat vel, facilisis eu ipsum. Donec ante lacus, suscipit eget lobortis non, viverra vel nisl. Sed eget vestibulum justo, at eleifend nibh."
      }
    ],
    responsibilities: []
  }
];

export const MISC_JOBS = [
  {
    title: "School bus driver",
    years: "2008",
    notes: "A lot of good stories from this one"
  },
  {
    title: "Accidentally designed ads for casinos",
    years: "2007",
    notes: "Worst two days of my life"
  },
  {
    title: "Photo retoucher",
    years: "2006",
    notes: "For a weird dude in Abilene, TX"
  },
  {
    title: "Chinese takeout delivery driver",
    years: "2004–06",
    notes: "Best job ever?"
  },
  {
    title: "TBD",
    years: "2003",
    notes: "Pretty much just wrote short stories"
  }
];

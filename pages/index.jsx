import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import cn from "classnames";
import Content from "components/Content";
import Divider from "components/Divider";
import Tooltip from "components/Tooltip";
import { PROJECTS, HOW_I_CAN_HELP } from "../constants";

// Subcomonents
// ----------------------------------------------------------------------------

const PageNavLink = ({ emphasize, href, text }) => (
  <a
    href={href}
    className="flex items-center gap-8 text-secondary hover:text-primary transition duration-300 group"
  >
    <span className={cn(emphasize && "animate-float")}>↓</span> {text}
  </a>
);

const PageNav = ({ className, index }) => (
  <div
    className={cn(
      "flex flex-col xs:flex-row xs:items-center gap-24 text-lg sm:text-xl",
      className
    )}
  >
    {index === 0 && (
      <PageNavLink
        href="#how-i-can-help"
        text="How I Can Help"
        emphasize={index === 0}
      />
    )}
    <PageNavLink href="#projects" text="Projects" emphasize={index === 1} />
  </div>
);

const Intro = () => (
  <section className="flex items-center h-screen bg-secondary-10 transition-all">
    <Content className="space-y-vbig max-w-screen-lg">
      <p className="text-lg sm:text-xl">
        Hiya! I&apos;m Andy, a product designer with an affinity for front-end
        development.{" "}
        <span className="opacity-60">
          I have more than 10 years experience, aspire for clarity in my work,
          and believe that thoughtful design is essential to successful digital
          products. I live in Austin with my dog, Ernie.
        </span>
      </p>
      <PageNav index={0} />
    </Content>
  </section>
);

const HowICanHelp = () => (
  <section id="how-i-can-help" className="flex items-center min-h-screen">
    <Content className="space-y-vbig max-w-screen-2xl">
      <h2 className="font-semibold text-3xl sm:text-5xl py-24">
        How I can help
      </h2>
      <Divider />
      <p className="text-lg max-w-prose">
        <span className="underline">Product Design</span> is a somewhat
        amorphous term, but the gist is that it covers the entirety of the
        design process, from conception to development. My specific "experience
        cocktail" looks something like this:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-24">
        {HOW_I_CAN_HELP.map((skill, i) => (
          <li className="relative" key={skill.title}>
            <span
              className="absolute top-8 -left-8 -translate-x-full font-medium text-sm text-tertiary opacity-75 md:hidden"
              aria-hidden
            >
              {i + 1}
            </span>
            <h3 className="font-medium text-lg md:mb-12">{skill.title}</h3>
            <p className="opacity-75 mb-16 md:mb-24">{skill.description}</p>
            {skill.logos.length > 0 && (
              <ul className="flex gap-12">
                {skill.logos.map((logo) => (
                  <li
                    className="hover:-translate-y-4 transition duration-300"
                    key={logo.title}
                  >
                    <Tooltip content={logo.title} delayDuration={300}>
                      {logo.svg}
                    </Tooltip>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <PageNav index={1} className="hidden md:flex" />
    </Content>
  </section>
);

const Projects = () => (
  <section id="projects" className="bg-tertiary-05">
    <Content className="space-y-vbig max-w-screen-xl">
      <h2 className="font-extrabold text-3xl sm:text-5xl py-24">Projects</h2>
      <Divider />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-48" role="list">
        {PROJECTS.map((project) => (
          <li className="h-full" key={project.title}>
            <Link href={project.href}>
              <a className="flex flex-col justify-between h-full rounded-xl space-y-24 group transition">
                <div className="flex-1">
                  <h2 className="flex items-center font-medium text-lg sm:text-xl group-hover:text-tertiary transition">
                    {project.title}
                    <span className="text-tertiary opacity-0 transition group-hover:opacity-100 group-hover:translate-x-8">
                      →
                    </span>
                  </h2>
                  <p className="opacity-50 group-hover:opacity-100 transition">
                    {project.details}
                  </p>
                </div>
                <figure className="w-full h-256 bg-primary-10 rounded-lg group-hover:scale-105 transition" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Content>
  </section>
);

const Home = () => {
  return (
    <>
      <Intro />
      <HowICanHelp />
      <Projects />
    </>
  );
};

export default Home;

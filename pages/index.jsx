import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import cn from "classnames";
import Container from "components/Container";
import Divider from "components/Divider";
import Tooltip from "components/Tooltip";

import { PROJECTS, HOW_I_CAN_HELP } from "../constants";
import drawing from "../public/drawing.webp";

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
      "flex flex-col xs:flex-row xs:items-center gap-page text-lg sm:text-xl",
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
  <header className="px-page pb-page pt-page-lg flex items-center sm:h-screen bg-secondary-10">
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-page">
      <div className="lg:order-last w-192 sm:w-320">
        <Image
          alt="Picture of the author"
          className="dark:invert"
          placeholder="blur"
          sizes="(min-width: 640px) 320w, 192px"
          src={drawing}
        />
        <div className="text-xs text-primary-50 text-center font-mono mt-8">
          A photo of me
        </div>
      </div>
      <div className="flex-1 space-y-page">
        <p className="text-lg sm:text-xl">
          Hiya! I&apos;m Andy, a product designer with an affinity for front-end
          development.{" "}
          <span className="opacity-60">
            I have 10+ years experience, aspire for clarity in my work, and
            believe that thoughtful design is essential to successful digital
            products. I live in Austin with my dog, Ernie.
          </span>
        </p>
        <PageNav index={0} />
      </div>
    </div>
  </header>
);

const HowICanHelp = () => (
  <section
    id="how-i-can-help"
    className="px-page py-page-lg flex items-center min-h-screen"
  >
    <Container width="xl">
      <h2 className="font-semibold text-3xl sm:text-5xl py-24">
        How I can help
      </h2>
      <Divider />
      <p className="text-lg max-w-prose">
        <span className="underline">Product Design</span> is a somewhat
        amorphous term, but the gist is that it covers the entirety of the
        design process, from conception to release. My specific
        &ldquo;experience cocktail&rdquo; looks something like this:
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-32 lg:gap-24">
        {HOW_I_CAN_HELP.map((skill, i) => (
          <li
            className="flex flex-col border-t pt-24 lg:border-none lg:pt-0 relative"
            key={skill.title}
          >
            <span
              className="absolute top-8 -left-8 -translate-x-full font-medium text-sm text-tertiary opacity-75 lg:hidden"
              aria-hidden
            >
              {i + 1}
            </span>
            <h3 className="font-medium text-lg lg:mb-12">{skill.title}</h3>
            <p className="mb-12">{skill.description}</p>
            <p className="text-sm text-primary-75">{skill.notes}</p>
            {skill.logos.length > 0 && (
              <ul className="flex gap-12 mt-24">
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
    </Container>
  </section>
);

const Projects = () => (
  <section id="projects" className="p-page bg-tertiary-05">
    <Container width="xl">
      <h2 className="font-extrabold text-3xl sm:text-5xl py-24">Projects</h2>
      <Divider />
      <p class="text-lg max-w-prose">
        A smattering of projects—both professional and personal—to showcase a
        few of my skills and interests.
      </p>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-24"
        role="list"
      >
        {PROJECTS.map((project) => (
          <li className="h-full" key={project.title}>
            <Link href={project.href}>
              <a className="flex flex-col justify-between h-full border-2 hover:border-tertiary-25 p-24 rounded-xl space-y-24 group transition">
                <div className="flex-1">
                  <h2 className="flex items-baseline justify-between font-medium text-lg leading-tight mb-4 group-hover:text-tertiary transition">
                    {project.title}
                    <span className="text-tertiary opacity-0 -translate-x-8 transition group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </h2>
                  <p className="text-sm text-primary-75">{project.details}</p>
                </div>
                <figure className="w-full h-128 bg-primary-10 rounded-lg" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
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

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import slugify from "slugify";
import { Divider, Dot, Section, TimeStamp } from "components/Content";
import Button from "components/Button";
import Tooltip from "components/Tooltip";

// TODO: Button/link component
// TODO: Mobile images should include bezel

import {
  CONTACT_INFO,
  EXPERIENCE,
  HOW_I_CAN_HELP,
  MISC_JOBS,
  PROJECTS,
  TOOLS,
} from "../constants";
import walkingGuy from "public/drawings/walkingGuy.webp";

const SectionLink = ({ color = "indigo", text }) => (
  <Button
    className="group"
    href={`#${slugify(text, { lower: true })}`}
    color={color}
  >
    <span className="animate-float">↓</span> {text}
  </Button>
);

const Home = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center gap-base py-lg text-secondary">
        <div className="md:order-last w-192">
          <Image
            alt="Picture of the author"
            className="dark:invert"
            placeholder="blur"
            sizes="(min-width: 640px) 320w, 192px"
            src={walkingGuy}
          />
          <div className="text-xs text-primary-50 text-center font-mono mt-8">
            A photo of me
          </div>
        </div>
        <div className="flex-1 space-y-base">
          <p className="text-lg">
            Hiya! I&apos;m Andy, a product designer with an affinity for
            front-end development.{" "}
            <span className="opacity-60">
              I have 12+ years experience, aspire for clarity in my work, and
              believe that thoughtful design is essential to successful digital
              products. I live in Austin with my dog, Ernie.
            </span>
          </p>
        </div>
      </header>

      <section className="py-base">
        <h2 className="text-xl font-light">How I Can Help</h2>
        <p className="text-lg">
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
                className="absolute top-8 -left-8 -translate-x-full font-medium text-sm text-secondary opacity-75 lg:hidden"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="font-base font-semibold lg:mb-8">{skill.title}</h3>
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
      </section>

      <section className="py-base">
        <h2 className="text-xl font-light">Projects</h2>
        <ul className="divide-y border-y">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <Link
                href={project.href}
                className="flex items-center py-16 group transition"
              >
                <div className="w-192">
                  <span className="rounded-full px-8 bg-primary-10 text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-medium group-hover:text-secondary transition">
                    {project.title}
                  </div>
                  <div className="text-primary-75">{project.details}</div>
                </div>
                <span className="text-secondary opacity-0 -translate-x-8 transition group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Section
        title="Projects"
        className="hidden flex items-center min-h-screen bg-secondary-05"
      >
        <p class="text-lg max-w-prose">
          A smattering of projects—both professional and personal—to showcase a
          few of my skills and interests.
        </p>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24"
          role="list"
        >
          {PROJECTS.map((project) => (
            <li className="h-full" key={project.title}>
              <Link
                href={project.href}
                className={`flex flex-col justify-between h-full border-2 hover:border-secondary-25 p-24 rounded-xl space-y-24 group transition ${
                  project.disabled && "opacity-25"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-8 -ml-8">
                    {project.category && (
                      <span className="rounded-full px-8 bg-primary-10 text-sm">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <h2 className="flex items-baseline justify-between font-medium text-lg leading-tight mb-4 group-hover:text-secondary transition">
                    {project.title}
                    <span className="text-secondary opacity-0 -translate-x-8 transition group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </h2>
                  <p className="text-sm text-primary-75">{project.details}</p>
                </div>
                <figure className="w-full h-128 bg-primary-10 rounded-lg" />
              </Link>
            </li>
          ))}
        </ul>
        <Button color="secondary" href="/resume">
          Resumé
        </Button>
      </Section>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import cn from "classnames";
import slugify from "slugify";
import { Section } from "components/Content";
import Tooltip from "components/Tooltip";

import {
  CONTACT_INFO,
  EXPERIENCE,
  HOW_I_CAN_HELP,
  MISC_JOBS,
  PROJECTS,
  TOOLS,
} from "../constants";
import dareToWin from "../public/drawings/dareToWin.webp";
import shovel from "../public/drawings/shovel.webp";
import walkingGuy from "../public/drawings/walkingGuy.webp";

const PageNavLink = ({ text }) => (
  <a
    className="flex items-center gap-8 text-lg text-secondary hover:text-primary transition duration-300 group"
    href={`#${slugify(text, { lower: true })}`}
  >
    <span className="animate-float">↓</span> {text}
  </a>
);

const Header = () => (
  <header className="px-page pb-page pt-page-lg flex items-center sm:h-screen bg-secondary-10">
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-page">
      <div className="lg:order-last w-192 sm:w-320">
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
        <PageNavLink text="How I Can Help" />
      </div>
    </div>
  </header>
);

const HowICanHelp = () => (
  <Section title="How I Can Help" className="flex items-center min-h-screen">
    <p className="text-lg max-w-prose">
      <span className="underline">Product Design</span> is a somewhat amorphous
      term, but the gist is that it covers the entirety of the design process,
      from conception to release. My specific &ldquo;experience cocktail&rdquo;
      looks something like this:
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
    <PageNavLink text="Projects" />
  </Section>
);

const Projects = () => (
  <Section
    title="Projects"
    className="flex items-center min-h-screen bg-tertiary-05"
  >
    <p class="text-lg max-w-prose">
      A smattering of projects—both professional and personal—to showcase a few
      of my skills and interests.
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
    <PageNavLink text="Experience" />
  </Section>
);

const TimeStamp = ({ hideDot, subtle, time }) => (
  <time className={cn("font-normal text-sm", subtle && "opacity-50")}>
    {time}
  </time>
);

const Dot = ({ subtle, border }) => (
  <span
    aria-hidden
    className={cn(
      "absolute top-1/2 -left-16 -translate-x-1/2 -translate-y-1/2 z-10",
      "h-12 w-12 rounded-full",
      border && "bg-ground border-2",
      !subtle && !border && "bg-secondary",
      !subtle && border && "border-secondary-50",
      subtle && !border && "bg-primary-75",
      subtle && border && "border-primary-25"
    )}
  />
);

const Info = () => {
  return (
    <>
      <Section
        title="Experience"
        titleActions={
          <button
            className="flex items-center gap-8 px-16 h-48 rounded-full border-2 border-tertiary-50 hover:border-tertiary bg-tertiary-10 font-normal text-base text-tertiary mt-16 transition"
            onClick={() => {
              const printWindow = window.open("https://tes.fm");
              printWindow.print();
              return false;
            }}
          >
            Print Resumé
          </button>
        }
        columns
      >
        <ul className="flex flex-col gap-page relative">
          <span className="absolute top-12 bottom-32 -left-16 w-2 bg-primary-10 -translate-x-1/2" />
          {EXPERIENCE.map((item) => (
            <li key={item.company}>
              <hgroup className="mb-16">
                <h3 className="flex items-center gap-12 font-bold text-lg relative">
                  <Dot />
                  {item.company}
                </h3>
                <p className="text-primary-75XXX text-sm">{item.notes}</p>
              </hgroup>
              {item.jobs && (
                <ul className="space-y-16">
                  {item.jobs.map((job) => (
                    <li className="relative" key={job.title}>
                      <h4 className="font-medium flex gap-12 items-baseline relative">
                        <Dot border />
                        {job.title}
                        <TimeStamp time={job.years} />
                      </h4>
                      <p className="text-sm text-primary-75">{job.notes}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="text-sm">
            <h3 className="flex items-baseline gap-12 font-bold text-lg mb-8 text-primary-75 relative">
              <Dot subtle />
              Not important, but…
            </h3>
            <ul className="space-y-8">
              {MISC_JOBS.map((job) => (
                <li key={job.title}>
                  <div className="text-primary-75 font-medium relative">
                    <Dot subtle border />
                    {job.title} <TimeStamp time={job.years} />
                  </div>{" "}
                  <div className="text-primary-50">{job.notes}</div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </Section>

      <Section
        title="Education"
        columns
        contentClassName="grid sm:grid-cols-2 gap-24"
        noTopPadding
      >
        <ul className="flex flex-col gap-page relative">
          <li>
            <h3 className="flex items-baseline gap-12 font-bold text-lg mb-8 relative">
              <abbr title="Abilene Christian University">ACU</abbr>
            </h3>
            <ul className="space-y-16">
              <li className="relative">
                <h4 className="font-medium flex gap-12 items-baseline relative">
                  <Dot />
                  BFA Painting
                  <TimeStamp time="2002–2007" />
                </h4>
              </li>
            </ul>
          </li>
        </ul>
        <figure className="p-32 rounded-sm bg-gray-200 dark:bg-gray-300">
          <Image
            alt="Painting of a scene from The Rockford Files"
            placeholder="blur"
            sizes="(min-width: 640px) 50vw, (min-width: 960px) 30vw, (min-width: 1400px) 400px, 100vw"
            src={dareToWin}
          />
        </figure>
      </Section>

      <Section title="Skills & Tools" columns noTopPadding>
        <ul className="grid grid-cols-1 gap-24">
          {TOOLS.map((tool, i) => (
            <li className="md:rounded-lg md:p-16 md:border-2" key={tool.title}>
              <h3 className="font-medium md:mb-8">{tool.title}</h3>
              <p className="text-sm text-primary-75">
                {tool.notes.join(" • ")}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <HowICanHelp />
      <Projects />
      <Info />
    </>
  );
};

export default Home;

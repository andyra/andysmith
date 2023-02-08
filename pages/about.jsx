import React from "react";
import Image from "next/image";
import cn from "classnames";
import Button from "components/Button";
import { Divider, Dot, Section, TimeStamp } from "components/Content";
import { CONTACT_INFO, EXPERIENCE, MISC_JOBS, TOOLS } from "../constants";

import dareToWin from "public/drawings/dareToWin.webp";
import walkingGuy from "public/drawings/walkingGuy.webp";

const ResumeSection = ({ children, className, contentClassName, h1, h2 }) => (
  <section className={cn("flex", className)}>
    <hgroup className="w-1/4">
      {h1 ? h1 : <h2 className="font-medium">{h2}</h2>}
    </hgroup>
    <div className={cn("flex-1", contentClassName)}>{children}</div>
  </section>
);

// Subcomponents
// ----------------------------------------------------------------------------

const About = () => {
  return (
    <>
      <header className="grid grid-cols-[1fr,2fr] gap-base justify-between py-lg">
        <figure className="hidden xs:block order-last lg:order-first">
          <Image
            alt="Picture of the author"
            className="w-160 lg:w-1/2 lg:scale-x-[-1] ml-auto lg:ml-0 dark:invert"
            placeholder="blur"
            src={walkingGuy}
            priority
          />
        </figure>
        <div className="flex-1 space-y-base">
          <hgroup className="hidden lg:block">
            <h1 className="text-xl">Andy Smith</h1>
            <h2 className="font-base font-normal text-lg">Product Designer</h2>
          </hgroup>
          <ul>
            {CONTACT_INFO.map((item, i) => (
              <li key={item.value}>
                <a
                  className="flex items-center gap-12 h-40 hover:text-secondary"
                  href={item.href}
                >
                  {item.icon}
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="/Andy Smith • Product Designer Resumé.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé PDF
          </Button>
        </div>
      </header>

      <hr />

      <section className="py-base space-y-base border-b">
        <h2 className="text-xl">Experience</h2>
        <ul className="flex flex-col gap-base relative">
          <span className="absolute top-12 bottom-32 -left-16 w-2 bg-primary-10 -translate-x-1/2" />
          {EXPERIENCE.map((item) => (
            <li key={item.company}>
              <hgroup className="mb-16">
                <h3 className="flex items-center gap-12 font-base font-semibold text-lg relative">
                  <Dot />
                  {item.company}
                </h3>
                <p className="text-sm">{item.notes}</p>
              </hgroup>
              {item.jobs && (
                <ul className="space-y-16">
                  {item.jobs.map((job) => (
                    <li className="text-sm relative" key={job.title}>
                      <h4 className="font-semibold flex gap-12 items-baseline relative">
                        <Dot border />
                        {job.title}
                        <TimeStamp time={job.years} />
                      </h4>
                      <p className="text-primary-75">{job.notes}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="text-sm">
            <h3 className="flex items-baseline gap-12 font-base font-semibold text-lg mb-8 text-primary-75 relative">
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
      </section>

      <section className="py-base space-y-base border-b">
        <h2 className="text-xl">Education</h2>
        <div className="grid grid-cols-1 gap-24 sm:grid-cols-2">
          <div>
            <h3 className="flex items-baseline gap-12 font-base font-bold text-lg mb-8 relative">
              <abbr title="Abilene Christian University">ACU</abbr>
            </h3>
            <h4 className="font-medium flex gap-12 items-baseline relative">
              <Dot />
              BFA Painting
              <TimeStamp time="2002–2007" />
            </h4>
          </div>
          <figure className="p-32 rounded-sm bg-gray-200 dark:bg-gray-300">
            <Image
              alt="Painting of a scene from The Rockford Files"
              placeholder="blur"
              sizes="(min-width: 640px) 50vw, (min-width: 960px) 30vw, (min-width: 1400px) 400px, 100vw"
              src={dareToWin}
            />
          </figure>
        </div>
      </section>

      <section className="py-base space-y-base">
        <h2 className="text-xl">Skills & Tools</h2>
        <ul className="grid grid-cols-1 gap-24">
          {TOOLS.map((tool, i) => (
            <li className="md:rounded-lg md:p-16 md:border-2" key={tool.title}>
              <h3 className="font-base font-medium">{tool.title}</h3>
              <p className="text-sm text-primary-75">
                {tool.notes.join(" • ")}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "About",
    },
  };
}

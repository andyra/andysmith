import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import slugify from "slugify";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
        <h2 className="text-xl font-light mb-sm">How I Can Help</h2>
        <p className="text-lg mb-base">
          Product Design is a somewhat amorphous term, but the gist is that it
          covers the entirety of the design process, from conception to release.
          My specific &ldquo;experience cocktail&rdquo; looks something like
          this:
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-32 lg:gap-sm">
          {HOW_I_CAN_HELP.map((skill, i) => (
            <li className="flex flex-col" key={skill.title}>
              <h3 className="font-sans font-semibold lg:mb-8">{skill.title}</h3>
              <p className="mb-12 hidden">{skill.description}</p>
              <p className="text-sm text-primary-75">{skill.notes}</p>
              {skill.logos.length > 0 && (
                <ul className="flex gap-12 mt-12">
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
        <h2 className="text-xl font-light mb-sm">Projects</h2>
        <ul className="divide-y border-y">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <Link
                href={project.href}
                className="sm:flex items-center py-16 group transition"
              >
                <div className="flex-1">
                  <div className="font-medium group-hover:text-secondary transition">
                    {project.title}
                  </div>
                  <div className="text-sm text-primary-75">
                    {project.details}
                  </div>
                  <span className="inline-block rounded-full px-8 -ml-8 bg-secondary-10 text-sm">
                    {project.category}
                  </span>
                </div>
                <span className="text-secondary opacity-0 -translate-x-8 transition group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowRightIcon className="h-24 w-24" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps(context) {
  return {
    props: {
      maxWidth: "max-w-screen-lg",
    },
  };
}

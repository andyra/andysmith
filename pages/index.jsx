import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import cn from "classnames";
import Content from "components/Content";
import Divider from "components/Divider";
import Tooltip from "components/Tooltip";
import { PROJECTS, SKILLZ } from "../constants";

const PageNav = ({ index = 0 }) => {
  return (
    <>
      <Divider />
      <div className="flex flex-col xs:flex-row xs:items-center gap-24 text-lg sm:text-xl">
        {index === 0 && (
          <a
            href="#how-i-can-help"
            className="hover:text-accent transition group"
          >
            <span className="text-accent">↓</span> How I can help
          </a>
        )}
        <a href="#projects" className="hover:text-accent transition group">
          <span className="text-accent">↓</span> Projects
        </a>
      </div>
    </>
  );
};

const Intro = () => (
  <section className="h-screen bg-ground-accent transition-all">
    <Content className="space-y-[var(--page-padding)] pt-[calc(var(--page-padding)*3)] max-w-screen-lg">
      <p className="text-lg sm:text-xl">
        Hello! I&apos;m Andy, a product designer with an affinity for front-end
        development.{" "}
        <span className="opacity-60">
          I have more than 10 years experience, aspire for clarity in my work,
          and believe that thoughtful design is essential to successful digital
          products. I live in Austin with my dog, Ernie.
        </span>
      </p>
      <PageNav />
    </Content>
  </section>
);

const Skillz = () => (
  <section
    id="how-i-can-help"
    className="flex items-center h-screen bg-ground-accent2"
  >
    <Content className="space-y-[2vmax]">
      <h2 className="font-medium text-3xl sm:text-5xl py-24">How I can help</h2>
      <Divider />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-24">
        {SKILLZ.map(skill => (
          <li key={skill.title}>
            <h3 className="font-semibold text-lg">{skill.title}</h3>
            <p className="my-12">{skill.description}</p>
            {skill.logos.length > 0 && (
              <ul className="flex gap-12">
                {skill.logos.map(logo => (
                  <li key={logo.title}>
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
      <PageNav index={1} />
    </Content>
  </section>
);

const Projects = () => (
  <section id="projects">
    <Content className="max-w-screen-2xl">
      <h2 className="font-extrabold text-5xl py-24">Projects</h2>
      <Divider />
      <ul role="list">
        {PROJECTS.map(project => (
          <li key={project.title}>
            <Link href={project.href}>
              <a className="flex flex-col xl:flex-row items-start gap-24 py-[var(--page-padding)] group">
                <div className="flex-1">
                  <h2 className="flex items-center font-medium text-xl group-hover:text-accent transition">
                    {project.title}
                    <span className="text-accent opacity-0 transition group-hover:opacity-100 group-hover:translate-x-8">
                      →
                    </span>
                  </h2>
                  <p>{project.details}</p>
                  <div className="mt-24">
                    Showcases: <code>UX</code>, <code>UI</code>
                  </div>
                  <div className="mt-24">
                    Tools: <code>Framer</code>, <code>Sketch</code>
                  </div>
                </div>
                <figure className="w-full lg:w-1/2 h-256 border-2 border-primary rounded-lg" />
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
      <Skillz />
      <Projects />
    </>
  );
};

export default Home;

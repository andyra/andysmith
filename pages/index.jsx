import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import ContentWrapper from "components/ContentWrapper";
import { PROJECTS } from "../constants";

const Intro = () => (
  <section className="h-screen bg-ground-accent">
    <ContentWrapper className="pt-[calc(var(--page-padding)*3)] space-y-[var(--page-padding)] max-w-screen-lg text-lg">
      <p>
        <strong className="font-semibold">
          Hello! I&apos;m Andy, a product designer with an affinity for
          front-end development
        </strong>
        . I&apos;ve been in tech for 10+ years, aspire for clarity in my work,
        and believe that thoughtful design is essential to successful digital
        products.
      </p>
      <div className="flex items-center gap-24">
        <a href="#how-i-can-help" className="group">
          ↓ How I Can Help
        </a>
        <a href="#projects" className="group">
          ↓ Projects
        </a>
      </div>
    </ContentWrapper>
  </section>
);

const Skillz = () => (
  <section id="how-i-can-help" className="py-[var(--page-padding)]">
    <ContentWrapper>
      <h2>What I can help with</h2>
      <ul>
        <li>UX Design</li>
        <li>UI Design</li>
        <li>Front-End development</li>
      </ul>
    </ContentWrapper>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-[var(--page-padding)]">
    <ContentWrapper className="max-w-screen-2xl">
      <ul role="list">
        {PROJECTS.map(project => (
          <li key={project.title}>
            <Link href={project.href}>
              <a className="flex flex-col xl:flex-row items-start gap-24 py-[var(--page-padding)]">
                <div className="flex-1">
                  <h2 className="font-medium text-lg">{project.title}</h2>
                  <p>{project.details}</p>
                </div>
                <figure className="w-full lg:w-1/2 h-256 border-2 border-primary rounded-lg" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </ContentWrapper>
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

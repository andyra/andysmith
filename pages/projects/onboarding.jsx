import { useEffect, useState } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/future/image";
import { useTheme } from "next-themes";
import Carousel from "components/Carousel";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import { A, Callout, Divider, Section } from "components/Content";

import andy01 from "public/projects/onboarding/andy01.webp";
import andy02 from "public/projects/onboarding/andy02.webp";
import andy03 from "public/projects/onboarding/andy03.webp";
import andy04 from "public/projects/onboarding/andy04.webp";
import andy05 from "public/projects/onboarding/andy05.webp";
import andy06 from "public/projects/onboarding/andy06.webp";
import andy07 from "public/projects/onboarding/andy07.webp";
import andy08 from "public/projects/onboarding/andy08.webp";
import andy09 from "public/projects/onboarding/andy09.webp";
import andy10 from "public/projects/onboarding/andy10.webp";
import mary01 from "public/projects/onboarding/mary01.webp";
import mary02 from "public/projects/onboarding/mary02.webp";
import mary03 from "public/projects/onboarding/mary03.webp";
import mary04 from "public/projects/onboarding/mary04.webp";
import mary05 from "public/projects/onboarding/mary05.webp";
import mary06 from "public/projects/onboarding/mary06.webp";
import mary07 from "public/projects/onboarding/mary07.webp";
import mary08 from "public/projects/onboarding/mary08.webp";
import mary09 from "public/projects/onboarding/mary09.webp";
import mary10 from "public/projects/onboarding/mary10.webp";
import navProblem from "public/projects/onboarding/navProblem.webp";
import navWorseProblem from "public/projects/onboarding/navWorseProblem.webp";
import navSolution from "public/projects/onboarding/navSolution.webp";

const INTERVIEW_IMAGES = [
  {
    src: mary01,
    alt: "",
  },
  {
    src: mary02,
    alt: "",
  },
  {
    src: mary03,
    alt: "",
  },
  {
    src: mary04,
    alt: "",
  },
  {
    src: mary05,
    alt: "",
  },
  {
    src: andy02,
    alt: "",
  },
  {
    src: andy03,
    alt: "",
  },
  {
    src: andy04,
    alt: "",
  },
  {
    src: andy05,
    alt: "",
  },
  {
    src: andy01,
    alt: "",
  },
  {
    src: mary06,
    alt: "",
  },
  {
    src: mary07,
    alt: "",
  },
  {
    src: mary08,
    alt: "",
  },
  {
    src: mary10,
    alt: "",
  },
  {
    src: mary09,
    alt: "",
  },
  {
    src: andy06,
    alt: "",
  },
  {
    src: andy07,
    alt: "",
  },
  {
    src: andy08,
    alt: "",
  },
  {
    src: andy10,
    alt: "",
  },
  {
    src: andy09,
    alt: "",
  },
];

const Brackets = ({
  borderColor = "border-primary-25",
  children,
  className,
  horizontalBreakpoint = "none",
}) => {
  const BREAKPOINTS = {
    none: {
      container: "",
      bracket: "w-24 self-stretch border-y-2 border-r-2 rounded-r-xl",
      connector: "w-24 border-t-2",
    },
    md: {
      container: "flex-col md:flex-row",
      bracket: `
        w-full h-24 border-x-2 border-b-2 rounded-b-xl
        md:h-auto md:border-l-0 md:rounded-bl-none
        md:w-24 md:self-stretch md:border-y-2 md:border-r-2 md:rounded-r-xl`,
      connector:
        "h-24 border-l-2 md:h-auto md:border-l-0 md:w-24 md:border-t-2",
    },
    lg: {
      container: "flex-col lg:flex-row",
      bracket: `
        w-full h-24 border-x-2 border-b-2 rounded-b-xl
        lg:h-auto lg:border-l-0 lg:rounded-bl-none
        lg:w-24 lg:self-stretch lg:border-y-2 lg:border-r-2 lg:rounded-r-xl`,
      connector:
        "h-24 border-l-2 lg:h-auto lg:border-l-0 lg:w-24 lg:border-t-2",
    },
    xl: {
      container: "flex-col xl:flex-row",
      bracket: `
        w-full h-24 border-x-2 border-b-2 rounded-b-xl
        xl:h-auto xl:border-l-0 xl:rounded-bl-none
        xl:w-24 xl:self-stretch xl:border-y-2 xl:border-r-2 xl:rounded-r-xl`,
      connector:
        "h-24 border-l-2 xl:h-auto xl:border-l-0 xl:w-24 xl:border-t-2",
    },
  };

  return (
    <div
      className={cn(
        "flex items-center self-stretch",
        BREAKPOINTS[horizontalBreakpoint].container,
        className
      )}
    >
      <div
        className={cn(BREAKPOINTS[horizontalBreakpoint].bracket, borderColor)}
      />
      <div
        className={cn(BREAKPOINTS[horizontalBreakpoint].connector, borderColor)}
      />
      {children}
    </div>
  );
};

const Onboarding = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <ProjectHeader
        title="New Hire Onboarding"
        description="Pingboard was built to help people across diverse companies connect with each other. Helping companies onboard their new hires was a great fit for our product and an opportunity for growth. One problem, though: how do we know what to build?"
      />

      <Section
        title="Do people really need another tool?"
        columns
        className="hidden"
      >
        <p>
          Before getting too far down the garden path, we had to ask what our
          product could bring to the table that other tools [bla]. A cursory
          look at Google will tell you that there aren&apos;t a shortage of
          tools purpose-built for employee onboarding.
        </p>
        <p>
          Decided: For companies already using PB, it will be stickier. And we
          could deliver on our full lifecycle platform idea. Other tools will
          probably be able to do more fully-featured management—including{" "}
          <abbr title="Applicant Tracking System">ATS</abbr> abilities,
          connecting with 3rd parties, job postings, etc. But we could lean on
          improving the employee&apos;s experience; what is it like for them on
          their first day? That also fit in nicely with our market position as
          an &ldquo;employee experience platform&rdquo;
        </p>
      </Section>

      <Section title="Exploratory interviews" columns>
        <p>
          We set up interviews with 12 different customers to talk through their
          onboarding process. Where were the pain points? What was working well?
          How did the new hires feel after it was all said and done?
        </p>
        <p>
          This kind of interview is interesting because you&apos;re not sure
          what to expect. As the interviewer, you&apos;re their to learn about
          peoples&apos; experience, not figure out solutions. As such, the tone
          is more conversational—let the person lead and probe them about areas
          that are relevant to the project.
        </p>
        <Carousel
          autoPlay
          className="bg-black rounded"
          images={INTERVIEW_IMAGES}
          sizes="(min-width: 1360px) 825w, (min-width: 960px) 61vw, 100vw"
          transition={false}
        />
      </Section>

      <Section title="We've talked to a bunch of people; now what?" columns>
        <p>
          After interviewing, you end up with a lot of information:
          frustrations, anecdotes, half-baked ideas, problems both in-and-out of
          your control, etc. As convenient as it would be, there isn&apos;t a
          way to summarize those results using numbers (i.e. X% of our customers
          want Y feature).
        </p>
        <p>
          I&apos;ve found that the most helpful way to get use out of these is
          to summarize each interview into a few key points, then look for
          trends across interviews. Having a digestible set of takeaways from
          the interviews is important so the rest of the team doesn&apos;t have
          to wade through dozens of documents and notes.
        </p>
        <figure className="flex flex-col xl:flex-row items-center gap-16 bg-indigo-05 rounded p-24 text-sm text-primary-50 relative">
          <div className="h-256 w-full xl:h-auto xl:w-2/5 xl:self-stretch rounded overflow-hidden relative">
            <div className="bg-ground rounded p-24 space-y-8 absolute top-0 left-0 text-xs">
              <div className="font-medium text-sm text-primary-75">
                Interview A Notes
              </div>
              <p>
                Maecenas ut lacus non arcu tristique laoreet ut ut ligula. In eu
                luctus massa.
              </p>
              <p>
                Pellentesque metus mauris, dignissim sit amet tincidunt ac,
                iaculis varius mauris. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>
                Quisque mattis, nunc a ultricies placerat, odio metus tincidunt
                urna, quis euismod quam quam sed tellus. Etiam luctus leo in
                arcu sagittis pulvinar. Nullam auctor mollis nunc, id lacinia
                arcu pretium non.
              </p>
              <p>
                Maecenas bibendum porta urna sed iaculis. Aliquam sit amet
                rutrum sapien.
              </p>
              <p>
                Donec varius ultrices dui, consequat pellentesque diam venenatis
                ut. Aliquam aliquam mollis velit eu varius. Aenean augue nulla,
                pharetra ut pulvinar sed, placerat quis eros. Duis nec mollis
                odio, vel varius enim.Ut sollicitudin suscipit magna et semper.
                Donec condimentum ligula arcu, vel pretium lorem gravida vel.
                Vestibulum dapibus dignissim tortor eget auctor. Duis rhoncus
                molestie turpis vel facilisis.
              </p>
            </div>
          </div>
          <Brackets horizontalBreakpoint="xl" />
          <ul className="w-full xl:w-auto flex-1 flex gap-16 xl:flex-col">
            {["A", "B", "C"].map((item) => (
              <li
                className="flex-1 xl:flex-none border-2 border-primary-25 p-16 rounded"
                key={item}
              >
                <div className="font-medium text-primary-75">
                  Interview {item}
                </div>
                <ul className="list-disc ml-20 text-xs">
                  <li>Summary</li>
                  <li>Summary</li>
                  <li>Summary</li>
                  <li>Summary</li>
                </ul>
              </li>
            ))}
          </ul>
          <Brackets horizontalBreakpoint="xl" />
          <div className="flex-1 border-2 border-indigo-25 p-16 space-y-8 text-indigo-75 rounded">
            <div className="font-medium">😀 Takeaways</div>
            <ol className="list-decimal ml-20">
              <li>Frustrated by X</li>
              <li>Would love Y</li>
              <li>Opportunity Z</li>
            </ol>
          </div>
        </figure>
      </Section>

      <Section title="Cutting scope" columns>
        <p>
          After sketching out what that fully-realized future might look like,
          it was clear that it was too ambitious for a single release. Instead,
          we asked if there a piece we could bite off that would provide real
          value to customers without building out an entire suite of features.
        </p>
        <p>
          Our reponse was to focus on just the employee experience—the new hire
          during the first few weeks of being at a company, which dovetails
          nicely into our market strategy.
        </p>
        <figure className="rounded bg-green-05 p-24 space-y-24">
          <ul className="text-green">
            <li className="font-semibold">Useful and achievable!</li>
            {[
              "Checklists",
              "Checklist Templates",
              "Add due dates to checklist items",
              "Onboarding Buddy",
              "Calendar integration",
              "Introduce new hire to their team",
            ].map((item) => (
              <li className="flex items-center gap-12" key={item}>
                <span>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <ul className="text-primary-75">
            <li className="font-semibold">
              Also useful, but not achievable in a single release
            </li>
            {[
              "Multiple Checklists",
              "Delegate checklist items to users",
              "Dashboard for your to-dos",
              "Custom introduction message",
              "Set custom rules for automatically closing onboarding",
              "Special visibility for managers",
              "Notifications",
              "Preference for new hire visibility",
              "Relate onboarding profiles to Open Roles in org chart",
              "Tie employee onboarding and product onboarding together",
              "Integrate with 3rd parties",
            ].map((item) => (
              <li className="flex items-center gap-12" key={item}>
                <span>–</span>
                {item}
              </li>
            ))}
          </ul>
        </figure>
      </Section>

      <Section
        columns
        title="Where We Landed"
        contentClassName="lg:col-span-2 lg:grid lg:grid-cols-[1fr,2fr] gap-page items-start"
      >
        <div className="relative hidden lg:block lg:col-span-2">
          <div className="z-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center px-16 h-40 rounded-full bg-green text-ground">
              Try me!
            </div>
          </div>
          <iframe
            src="https://pingboard.github.io/pb-nav/onboarding"
            className="w-full h-[75vh] border-4 border-green-50 rounded"
          />
        </div>
      </Section>

      <Section title="Loose Threads" columns>
        <p>
          A wrinkle came up during development: what if the person being
          onboarded has Admin privileges? Since Admins have a page dedicated to
          managing other peoples&apos; onboarding, they would have no less than
          three similar-but-different items in the primary nav:
        </p>
        <ol className="list-decimal pl-24">
          <li>
            <strong>Getting Started</strong>: &ldquo;Welcome to Pingboard&rdquo;
            product onboarding
          </li>
          <li>
            <strong>Onboarding</strong>: &ldquo;Welcome to the company&rdquo;
            employee onboarding
          </li>
          <li>
            <strong>Onboarding</strong>: Manage onboarding checklists for all
            new hires
          </li>
        </ol>
        <figure className="flex gap-8 bg-primary-05 rounded border overflow-hidden relative">
          <Image
            className="w-1/4"
            alt="Too many nav items"
            placeholder="blur"
            sizes="(min-width: 1360px) 825w, (min-width: 960px) 61vw, 100vw"
            src={navWorseProblem}
          />
          <Brackets
            borderColor="border-orange"
            className="relative mt-[4%] mb-[7.5%]"
          >
            <div className="pl-12 text-sm lg:text-base text-orange">
              Not ideal!
            </div>
            <div className="w-24 border-t-2 border-orange absolute r-0 bottom-[11%]" />
          </Brackets>
        </figure>
        <p>
          In an ideal world, we would combine all three pages into a single
          place to get started, but the amount of work it would take was out of
          scope. Our solution here was to fold the last two items together under
          a collapsible nav item.
        </p>
        <figure className="flex gap-8 bg-primary-05 rounded border overflow-hidden relative">
          <Image
            className="w-1/4"
            alt="Too many nav items"
            placeholder="blur"
            sizes="(min-width: 1360px) 825w, (min-width: 960px) 61vw, 100vw"
            src={navSolution}
          />
          <Brackets
            borderColor="border-green"
            className="relative mt-[4%] mb-[7.5%]"
          >
            <div className="pl-12 text-sm lg:text-base text-green">
              Not ideal, but better!
            </div>
          </Brackets>
        </figure>
      </Section>

      <ProjectFooter />
    </>
  );
};

export default Onboarding;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "New Hire Onboarding",
    },
  };
}

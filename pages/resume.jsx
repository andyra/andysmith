import React from "react";
import Image from "next/future/image";
import cn from "classnames";
import Divider from "components/Divider";
import { Dot, Section, TimeStamp } from "components/Content";
import { CONTACT_INFO, EXPERIENCE, MISC_JOBS, TOOLS } from "../constants";

import walkingGuy from "public/drawings/walkingGuy.webp";

const ResumeSection = ({ children, className, contentClassName, h1, h2 }) => (
  <section className={cn("flex max-w-screen-lg mx-auto", className)}>
    <hgroup className="w-1/4">
      {h1 ? h1 : <h2 className="font-medium">{h2}</h2>}
    </hgroup>
    <div className={cn("flex-1", contentClassName)}>{children}</div>
  </section>
);

// Subcomponents
// ----------------------------------------------------------------------------

const Resume = () => (
  <div className="px-[1in] pt-[1in] pb-[0.5in] text-print-base space-y-[20pt]">
    <header className="flex justify-between max-w-screen-lg mx-auto">
      <figure className="w-1/4">
        <Image
          alt="Picture of the author"
          className="w-[0.85in] scale-x-[-1]"
          placeholder="blur"
          src={walkingGuy}
        />
      </figure>
      <div className="flex-1">
        <p className="flex-1 text-print-lg">
          <strong>Hi! I&apos;m Andy Smith, a Product Designer</strong> with an
          affinity for front-end development. I have 10+ years experience,
          aspire for clarity in my work, and believe that thoughtful design is
          essential to successful digital products.
        </p>
        <p className="font-semibold mt-[8pt]">
          {CONTACT_INFO.filter((item) =>
            ["Portfolio", "Email", "Phone"].some((label) =>
              item.label.includes(label)
            )
          ).map((item, i) => (
            <>
              <a
                className="underline underline-offset-2"
                href={item.href}
                key={item.value}
              >
                {item.value}
              </a>
              {i < 2 && <span className="px-[8pt]">•</span>}
            </>
          ))}
        </p>
      </div>
    </header>

    <hr />

    <ResumeSection h2="Experience">
      <ul className="list-disc space-y-[8pt]">
        {EXPERIENCE.map((item) => (
          <li key={item.company}>
            <h3 className="font-semibold mb-[4pt]">{item.company}</h3>
            {item.jobs && (
              <ul className="space-y-[4pt]">
                {item.jobs.map((job) => (
                  <li key={job.title}>
                    <h4 className="font-medium">
                      {job.title} •{" "}
                      <TimeStamp time={job.years} className="text-print-base" />
                    </h4>
                    <p className="text-print-sm text-primary-75">{job.notes}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </ResumeSection>

    <ResumeSection h2="Education">
      <ul className="list-disc space-y-[8pt]">
        <li>
          <h3 className="font-semibold">ACU</h3>
          <ul className="space-y-[4pt]">
            <li className="relative">
              <h4 className="font-medium">
                BFA Painting •{" "}
                <TimeStamp time="2002–2007" className="text-print-base" />
              </h4>
            </li>
          </ul>
        </li>
      </ul>
    </ResumeSection>

    <ResumeSection h2="Skills & Tools">
      <ul className="list-disc space-y-[4pt]">
        {TOOLS.map((tool, i) => (
          <li className="" key={tool.title}>
            <span className="font-semibold">{tool.title}:</span>{" "}
            <span className="text-primary-75">{tool.notes.join(", ")}</span>
          </li>
        ))}
      </ul>
    </ResumeSection>
  </div>
);

export default Resume;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Resume",
    },
  };
}

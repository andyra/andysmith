import React from "react";
import cn from "classnames";
import Content from "components/Content";
import Divider from "components/Divider";
import { CONTACT_INFO, EXPERIENCE, MISC_JOBS, TOOLS } from "../constants";

// Subcomponents
// ----------------------------------------------------------------------------

const Header = () => (
  <Content as="header" className="max-w-screen-xl">
    <div className="bg-primary-05 flex items-center gap-48 rounded">
      <figure className="rounded-full h-128 w-128 border-2 border-primary" />
      <div>
        <dl className="self-end grid grid-cols-[64px,1fr] gap-x-16 text-sm w-full xs:w-auto">
          {CONTACT_INFO.map((item) => (
            <React.Fragment key={item.label}>
              <dt className="font-medium">{item.label}</dt>
              <dd>
                <a
                  className="h-32 block font-mono underline underline-offset-4 decoration-primary hover:text-tertiary hover:decoration-accent transition"
                  href={item.href}
                >
                  {item.value}
                </a>
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  </Content>
);

const TimeStamp = ({ hideDot, subtle, time }) => {
  return (
    <time
      className={cn(
        "sm:absolute sm:top-1/2 sm:-left-32 sm:-translate-y-1/2 sm:-translate-x-full sm:w-96 sm:text-right",
        "font-mono font-normal text-sm",
        subtle && "opacity-50"
        // "-ml-16"
      )}
    >
      {time}
    </time>
  );
};

const Dot = ({ color }) => {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute top-1/2 -left-16 -translate-x-1/2 -translate-y-1/2",
        "h-8 w-8 rounded-full",
        color === "default" ? "bg-primary" : "bg-tertiary"
      )}
    />
  );
};

// Component
// ----------------------------------------------------------------------------

const Info = () => {
  return (
    <>
      <Header />
      <Content className="space-y-vbig max-w-screen-xl">
        <section id="experience" className="space-y-32">
          <h2 className="font-medium text-3xl">Experience</h2>
          <Divider />
          <ul className="flex flex-col gap-[2vw] relative sm:pl-96">
            <span className="absolute top-56 bottom-12 -left-16 sm:left-80 w-2 bg-primary opacity-10 -translate-x-1/2" />
            {EXPERIENCE.map((item) => (
              <li key={item.company}>
                <h3 className="flex items-baseline gap-12 font-bold text-lg mb-8 relative">
                  {item.company}
                  <time className="hidden font-mono font-normal text-sm opacity-50">
                    ~{item.duration}
                  </time>
                  <TimeStamp time={`~${item.duration}`} subtle hideDot />
                </h3>
                {item.jobs && (
                  <ul className="space-y-16">
                    {item.jobs.map((job) => (
                      <li className="relative" key={job.title}>
                        <h4 className="font-medium flex gap-12 items-baseline relative">
                          <Dot />
                          {job.title}
                          <TimeStamp time={job.years} />
                        </h4>
                        <p className="opacity-50">{job.notes}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="text-sm">
              <h3 className="flex items-baseline gap-12 font-bold text-lg mb-8 opacity-50 relative">
                Not important, but…
              </h3>
              <ul className="opacity-50">
                {MISC_JOBS.map((job) => (
                  <li key={job.title}>
                    <span className="font-medium relative">
                      <Dot color="default" />
                      <TimeStamp time={job.years} subtle />
                      {job.title}:
                    </span>{" "}
                    <span className="opacity-50">{job.notes}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
        <section id="education" className="space-y-32">
          <h2 className="font-medium text-3xl">Skillz, etc.</h2>
          <Divider />
          <h3>Tools I'm familiar With</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {TOOLS.map((tool, i) => (
              <li className="md:rounded-lg md:p-24 md:border-2">
                <h3 className="font-medium">{tool.title}</h3>
                <p className="opacity-50">{tool.notes}</p>
              </li>
            ))}
          </ul>
        </section>
        <section id="education" className="space-y-32">
          <h2 className="font-medium text-3xl">Education</h2>
          <Divider />
          <ul>
            <li>
              <h3>
                BFA Painting
                <time>2007</time>
              </h3>
              <p>
                <abbr title="Abilene Christian University">ACU</abbr>
              </p>
            </li>
          </ul>
        </section>
      </Content>
    </>
  );
};

export default Info;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Info",
    },
  };
}

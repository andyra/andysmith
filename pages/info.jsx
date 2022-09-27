import cn from "classnames";
import Content from "components/Content";
import Divider from "components/Divider";
import { EXPERIENCE, MISC_JOBS } from "../constants";

// Subcomponents
// ----------------------------------------------------------------------------

const TimeStamp = ({ hideDot, subtle, time }) => {
  return (
    <div className="absolute top-1/2 -left-16 -translate-y-1/2 -translate-x-full flex items-center justify-end gap-12 w-160">
      <time
        className={cn("font-mono font-normal text-sm", subtle && "opacity-50")}
      >
        {time}
      </time>
      <span
        aria-hidden
        className={cn(
          "h-8 w-8 rounded-full bg-primary translate-x-1/2",
          hideDot && "opacity-0"
        )}
      />
    </div>
  );
};

// Component
// ----------------------------------------------------------------------------

const Info = () => {
  return (
    <Content className="space-y-[var(--page-padding)] max-w-screen-xl">
      <section id="experience">
        <Divider />
        <h2 className="font-medium text-3xl py-48">Experience</h2>
        <Divider />
        <ul className="space-y-[var(--page-padding)] relative pl-160">
          <span className="absolute top-56 bottom-12 left-[144px] w-2 bg-primary opacity-10 -translate-x-1/2" />
          {EXPERIENCE.map(item => (
            <li key={item.company}>
              <h3 className="flex items-baseline gap-12 font-semibold text-lg mb-8 relative">
                {item.company}
                <time className="hidden font-mono font-normal text-sm opacity-50">
                  ~{item.duration}
                </time>
                <TimeStamp time={`~${item.duration}`} subtle hideDot />
              </h3>
              {item.jobs && (
                <ul className="space-y-16">
                  {item.jobs.map(job => (
                    <li className="relative" key={job.title}>
                      <h4 className="font-medium flex items-baseline gap-12 relative">
                        {job.title}
                        <TimeStamp time={job.years} />
                      </h4>
                      <p className="text-sm opacity-50">{job.notes}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="text-sm">
            <h3 className="flex items-baseline gap-12 text-lg mb-8 opacity-50 relative">
              Not important, but…
            </h3>
            <ul className="opacity-50">
              {MISC_JOBS.map(job => (
                <li key={job.title}>
                  <span className="font-medium relative">
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
      <section id="education">
        <Divider />
        <h2 className="font-medium text-3xl py-48">Education</h2>
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
  );
};

export default Info;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Info"
    }
  };
}

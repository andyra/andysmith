import cn from "classnames";
import Content from "components/Content";
import { EXPERIENCE, MISC_JOBS } from "../constants";

const Dot = ({ subtle, time }) => {
  return (
    <div className="absolute top-1/2 -left-16 -translate-y-1/2 -translate-x-full flex items-center justify-end gap-16 w-160">
      <time
        className={cn(
          "font-mono font-normal text-sm opacity-50",
          subtle && "opacity-50"
        )}
      >
        {time}
      </time>
      <span
        aria-hidden
        className={cn(
          "h-8 w-8 rounded-full bg-primary translate-x-1/2",
          subtle && "opacity-50"
        )}
      />
    </div>
  );
};

const Resume = ({}) => {
  return (
    <Content
      maxWidth="max-w-screen-xl"
      className="space-y-[var(--page-padding)]"
    >
      <h1>Resume</h1>

      <section id="experience">
        <h2 className="text-xl">Experience</h2>
        <ul className="space-y-16 relative pl-160">
          <span className="absolute top-48 bottom-12 left-[144px] w-2 bg-primary opacity-10 -translate-x-1/2" />
          {EXPERIENCE.map(item => (
            <li key={item.company}>
              <h3 className="flex items-baseline gap-12 font-semibold text-lg">
                {item.company}
                <time className="font-mono font-normal text-sm opacity-50">
                  ~{item.duration}
                </time>
              </h3>
              {item.jobs && (
                <ul className="space-y-16">
                  {item.jobs.map(job => (
                    <li className="relative" key={job.title}>
                      <h4 className="font-medium flex items-baseline gap-12 relative">
                        {job.title}
                        <Dot time={job.years} />
                      </h4>
                      <p>{job.notes}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="text-sm">
            <h2>Fun to know…</h2>
            <ul>
              {MISC_JOBS.map(job => (
                <li key={job.title}>
                  <span className="relative">
                    <Dot time={job.years} subtle />
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
        <h2 className="text-xl">Education</h2>
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

export default Resume;

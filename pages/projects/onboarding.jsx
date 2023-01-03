import Link from "next/link";
import Image from "next/future/image";
import { useTheme } from "next-themes";

import Callout from "components/Callout";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import { A, Divider, Section } from "components/Content";

const Onboarding = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <ProjectHeader
        title="New Hire Onboarding"
        description="Pingboard was built to help people across diverse companies connect with each other. One missing piece was making new hires feel welcome when they joined the company. This was a perfect opportunity for us."
      />

      <Section title="Do we really need another tool for this?" columns>
        <ol>
          <li>Do</li>
        </ol>
        <p>
          This project started off as a tool to help my band build randomized
          setlists from the hundreds of songs we&apos;ve written over the years.
          Once we had catalogued everything, we realized it would be helpful to
          be able to hear recordings, read the lyrics, and view chord sheets.
        </p>
      </Section>
      <Section title="Exploratory Interviews">
        <p>
          We started off with big ambitions: in an ideal world, what could we do
          to tie together all the various pieces required to successfully
          onboard a new hire?
        </p>
        <p>
          We set up interviews with 12 different customers to talk through their
          onboarding process. Where were the pain points? What was working well?
          How did the new hires feel after it was all said and done?
        </p>
        <p>
          This kind of interview is interesting because you&apos;re not sure
          what to expect. As the interviewer, you&apos;re their to learn about
          peoples&apos; experience, not solutionize.
        </p>
      </Section>

      <Section title="What do you do with the reasearch?">
        <p>
          After interviewing, you end up with a lot of information:
          frustrations, anecdotes, frustrations both in-and-out of your control
        </p>
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

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Button from "components/Button";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import { Callout, Divider, Section } from "components/Content";

import oldPanel from "public/projects/org-chart/old-panel.webp";

const GraphicPanelConflicts = ({ className }) => (
  <figure
    className={cn(
      "flex gap-16 text-center p-16 bg-primary-05 rounded relative",
      className
    )}
  >
    <div className="flex-1 space-y-16">
      <div className="font-medium text-sm text-primary-75">Old Layout</div>
      <div className="grid grid-cols-4 grid-rows-[32px,1fr] h-192 rounded-md bg-ground ring-1 ring-primary-25 font-mono text-xs">
        <header className="col-span-4 flex items-center justify-center px-8 bg-secondary-10 border-b border-secondary-25 text-secondary-75 rounded-t-md">
          Nav
        </header>
        <aside className="bg-tertiary-10 border-r border-tertiary-25 tertiary-25 flex items-center justify-center text-tertiary-75">
          Build
          <br />
          Panel
        </aside>
      </div>
    </div>
    <div className="flex-1 space-y-16">
      <div className="font-medium text-sm text-primary-75">New Layout</div>
      <div className="grid grid-cols-4 grid-rows-[32px,1fr] h-192 rounded-md bg-ground ring-1 ring-primary-25 font-mono text-xs">
        <header className="col-span-4 flex items-center justify-center px-8 border-b border-primary-25 text-primary-75 rounded-t-md">
          Top Bar
        </header>
        <aside className="bg-secondary-10 border-r border-secondary-25 secondary-25 flex items-center justify-center text-secondary-75">
          Nav
        </aside>
      </div>
      <p className="text-sm text-warning">☹ No room for the Build Panel</p>
    </div>
  </figure>
);

const OrgChart = ({ metaTitle }) => {
  return (
    <>
      <ProjectHeader
        title={metaTitle}
        description="After months of design and research, we had landed on a set of global design changes to update the look &amp; feel of Pingboard. While most pages wouldn't need to be updated, there were a handful that would need significant changes in order to work with the new layout, chief among them the Org Chart."
      />

      <Section title="Why?" columns>
        <p>
          Something here about business goals, customer success, bottom line,
          etc.
        </p>
      </Section>

      <Section title="Challenges" columns>
        <ul className="list-decimal ml-16 space-y-16">
          <li>
            <strong>Conflicting panels</strong>
            <p className="mb-16">
              The old layout used the left side of the screen for the org chart
              Build Panel, but the new layout places the primary nav in that
              space.
            </p>
            <figure className="p-16 rounded bg-primary-05 border space-y-16">
              <Image
                src={oldPanel}
                alt="Legacy org chart build panel"
                sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
              />
              <p className="text-sm text-warning w-fit relative">
                We&apos;re gonna need this space for the new nav!
                <span className="bg-warning w-2 h-96 absolute top-0 left-24 -translate-y-full" />
              </p>
            </figure>
          </li>
          <li>
            <strong>Accessing private org charts</strong>
            <p>
              The new navigation didn&apos;t provide an easy way to navigate to
              private org charts, so we would need to devise a way to navigate
              this second layer of hierarchy.
            </p>
            <figure className="h-128 rounded bg-primary-10" />
          </li>
          <li>
            <strong>Scope</strong>: We wanted to avoid a complete overhaul on
            the org chart and instead limit our changes to the toolbar and
            various panels. The code that handled rendering was far more complex
            and would have involved back-end changes and extensive testing, and
            we wanted to be able to get something releasable in a single season.
          </li>
          <li>
            <strong>Validation</strong>: Since the org chart was such a critical
            part of our app, we wanted to be doubly sure that these changes
            wouldn&apos;t disrupt workflows for existing customers. As such, we
            needed to test not only with people who were new to the app, but
            people who were intimately familiar with it.
          </li>
        </ul>
      </Section>

      <Section title="Let's get crackin'" columns>
        <p>
          I already knew some of the general UI conflicts we were trying to
          solve, so I started by mocking up ideas in Sketch. This was a useful
          excercise to try out a few different approaches without getting lost
          in the details.
        </p>
        <figure className="p-16 rounded bg-primary-10">
          - Where to move the Build panel? Can it remain on the left? - Nav
          collapsible or not? - Weird to have two panels on the right? - How to
          get to Private org charts? - Is there enough room for search, filter,
          zoom, plus everything else?
        </figure>
        <p>
          I like to brainstorm excessively, without judgement, then prune out
          the ideas that are clumsy, require out-of-scope changes, or are simply
          too weird. Once I had narrowed down to a small set of reasonable
          options, I worked with the VP of Product to pick a couple to flesh out
          in more detail.
        </p>
      </Section>

      <Section title="Yes, but is it any good?" columns>
        <p>
          At this point, we had narrowed it down to a couple sensible options,
          but we weren&apos;t sure which one would &ldquo;feel right.&rdquo;
          Something might look great sitting quietly on a Figma frame, but feel
          awkward when interacting in the browser.
        </p>
        <p>
          To get a better sense of how it might work, I built a React prototype
          on Next.js and published it to GitHub Pages. As a bonus, I wired up
          GitHub Actions to deploy automatically whenever I pushed changes to
          master. This ended up being a convenient way to quickly iterate and
          publish changes.
        </p>
        <Button href="https://pingboard.github.io/pb-nav/org-chart" newTab>
          View the Prototype
        </Button>
        <Callout>
          It&apos;s certainly possible make prototypes with design tools
          (Sketch, Figma, et. al.), but I&apos;ve found that building something
          in the browser gives testers a much better sense for what the app will
          _actually_ feel like. In addition, building with code gives you so
          much more power to build bespoke prototypes and teaches useful
          programming skills. It can also speed up development since many of the
          styles and interactions can be copied over to production code. I place
          my seal upon it!
        </Callout>
      </Section>

      <Section title="Testing" columns>
        <p>
          We wanted to make sure that the changes were intuitive for existing
          customers who had muscle memory with the org chart, as well as people
          who had never used Pingboard. To this end, we scheduled about 10
          interviews with people from both cohorts, along with a a round of
          preliminary interviews with 5 Pingboard employees; this helped us work
          out any obvious kinks before talking to other people.
        </p>
        <div className="grid grid-cols-3 gap-16">
          <figure className="h-128 rounded bg-primary-10">
            Internal Most familiar
          </figure>
          <figure className="h-128 rounded bg-primary-10">
            Existing Customers Familiar
          </figure>
          <figure className="h-128 rounded bg-primary-10">New people</figure>
        </div>
        <p>
          We gave a series of tasks for the user to complete and took notes on
          their success rate. We also asked them to say what was going through
          their heads as they went through the steps; this is a helpful way to
          understand not only what actions people take, but the mental models
          that shape their actions.
        </p>
        <figure className="h-128 rounded bg-primary-10">
          Show mockup of success rate for each task
        </figure>
        <p>
          After each cohort, we aggregated the results and found problem areas.
          If there were obvious solutions for them, I would make changes to the
          prototype before the next cohort to make sure they actually solved the
          problem.
        </p>
      </Section>

      <Section title="Where we landed" columns>
        <figure className="h-256 rounded bg-primary-10" />
        <p>[Interactive image thing? Show annotations]</p>
        <ul className="list-disc ml-16">
          <li>Less cramped</li>
          <li>Collapsible Nav</li>
          <li>Unified Toolbar (Unified Live and Private layouts)</li>
          <li>Org Chart selector</li>
          <li>Filter search unification</li>
          <li>Filter breadcrumbs</li>
          <li>Tool panels (icons and tooltips)</li>
          <li>Build panel</li>
          <li>Zoom/Expand</li>
        </ul>
      </Section>

      <Section title="Into the wild" columns>
        - User onboarding updates - Heads up to existing users - What we didn’t
        get to/Comprimises: Tools in modals instead of sidebar
      </Section>

      <ProjectFooter />
    </>
  );
};

export default OrgChart;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Org Chart Redesign",
    },
  };
}

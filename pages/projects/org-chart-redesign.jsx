import Image from "next/legacy/image";
import { useRouter } from "next/router";
import cn from "classnames";
import Button from "components/Button";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import {
  Callout,
  Divider,
  Figure,
  Highlight,
  ListItem,
  Meter,
  OrderedList,
  Section,
  SubSection,
} from "components/Content";

import oldPanel from "public/projects/org-chart/old-panel.webp";
import oldNav from "public/projects/org-chart/old-nav.webp";
import oldPrivate from "public/projects/org-chart/old-private.webp";
import oldFilterSearch from "public/projects/org-chart/old-filter-search.webp";
import newFinal from "public/projects/org-chart/new-final.webp";
import wireframes from "public/projects/org-chart/wireframes.webp";

const TableRow = ({ percent, title }) => (
  <li className="xs:flex xs:items-center xs:gap-16">
    <div className="xs:w-1/3">{title}</div>
    <div className="xs:flex-1 flex items-center gap-16 w-full">
      <div className="flex-1 h-8 rounded-full bg-primary-10 relative">
        <div
          className={cn(
            "rounded-full absolute top-0 left-0 bottom-0",
            percent < 75 ? "bg-orange-50" : "bg-green-50"
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-primary-75 w-48 text-right">{percent}%</span>
    </div>
  </li>
);

const OrgChart = ({ metaTitle }) => {
  return (
    <>
      <ProjectHeader
        title={metaTitle}
        description="After months of design and research, we had landed on a set of global design changes to update the look &amp; feel of Pingboard. While most pages wouldn't need to be updated, there were a handful that would need significant changes in order to work with the new layout, chief among them the Org Chart."
        color="indigo"
      />

      <Section title="Challenges" columns>
        <SubSection title="Conflicting panels">
          <Figure>
            <Image
              src={oldPanel}
              alt="Legacy org chart build panel"
              sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
            />
            <Highlight className="top-[11%] left-0 right-[80.5%] bottom-0" />
          </Figure>
          <p>
            The new nav designs use the left side of the screen for global
            navigation, but the org chart used that space for its own Build
            panel. To make matters worse, there was already a right panel in
            use!
          </p>
        </SubSection>
        <SubSection title="Accessing private org charts">
          <p>
            Since the new design didn&apos;t provide a secondary nav layer, we
            would need to devise a way for customers to get to their private org
            charts.
          </p>
          <Figure>
            <Image
              className="rounded-sm"
              src={oldNav}
              alt="Legacy org chart build panel"
              sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
            />
            <Highlight className="top-[10%] left-[10%] right-[70%] bottom-[45%]" />
          </Figure>
        </SubSection>
        <SubSection title="Private Org Chart Toolbar">
          <Figure>
            <Image
              className="rounded-sm"
              src={oldPrivate}
              alt="Legacy org chart build panel"
              sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
            />
            <Highlight className="top-0 left-0 right-0 bottom-1/2" />
          </Figure>
          <p>
            Private org charts have a custom toolbar that overrides the primary
            nav. Is there a way we can consolidate the title, collaborator list,
            and notifications with the existing toolbar and still keep the
            primary nav?
          </p>
        </SubSection>
        <SubSection title="Filter & Search">
          <Figure>
            <Image
              className="rounded-sm"
              src={oldFilterSearch}
              alt="Legacy org chart build panel"
              sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
            />
            <Highlight className="top-[33%] left-0 right-[38%] bottom-[29%]" />
            <Highlight className="top-0 left-[72.7%] right-0 bottom-[66%]" />
          </Figure>
          <p>
            A couple problems here! Filtering is a bit too subtle and it
            obfuscates the org chart title. Additionally, it&apos;s easy to get
            org chart search and global search confused.
          </p>
        </SubSection>
      </Section>

      <Section title="Figuring it out" columns>
        <SubSection title="Start without (too much) judgement">
          <p>
            I like to brainstorm excessively to start with, in case any novel
            approaches jump out. Tools like Sketch and Figma are great at
            allowing you to quickly dump ideas on a screen without getting lost
            in the details.
          </p>
          <Figure caption="One of several pages of Sketch iterations">
            <Image
              className="rounded-sm"
              src={wireframes}
              alt="Legacy org chart build panel"
              sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
            />
          </Figure>
        </SubSection>
        <SubSection title="Narrow down on the good bits">
          <p>
            After working for a few days, I pruned out the ideas that were
            clumsy, required out-of-scope changes, or were simply too weird. I
            then worked with the VP of Product to flesh out in more detail.
          </p>
          <p>
            After narrowing in on a couple of solid options, we wanted to get a
            better sense for how each might work in real life&mdash; something
            might look great sitting quietly on a Figma frame, but feel awkward
            when interacting in the browser.
          </p>
          <p>
            To this end, I built a React prototype on Next.js and published it
            to GitHub Pages. As a bonus, I wired up GitHub Actions to deploy
            automatically whenever I pushed changes to master. This ended up
            being a convenient way to quickly iterate and publish changes.
          </p>
          <Callout color="info" className="text-sm">
            <p>Why prototype with code?</p>
            <p className="text-indigo-75 mix-blend-multiply">
              I&apos;ve found that building prototypes in the browser gives
              people a much better sense for what the app will actually feel
              like, in addition to teaching useful programming skills.
            </p>
          </Callout>
          <Button href="https://pingboard.github.io/pb-nav/org-chart" newTab>
            View Prototype →
          </Button>
        </SubSection>
      </Section>

      <Section title="Validation" columns>
        <SubSection title="User Testing">
          <p>
            We scheduled <strong>UI testing-sessions</strong> with a couple
            cohorts: existing customers who had developed musicle memory with
            our tools and potential customers who had never heard of Pingboard.
            In addition, we started off with a round of internal testing so we
            could work out any obvious kinks before talking to other people.
          </p>
          <figure className="border rounded p-16 space-y-16">
            <ul className="flex items-center gap-8 text-center text-sm">
              <li className="flex-1 p-16 rounded bg-orange-10 text-orange-75 space-y-8">
                <div className="font-medium text-3xl">7</div>
                <div>Internal Sessions</div>
              </li>
              <li className="text-lg text-primary-50">→</li>
              <li className="flex-1 p-16 rounded bg-indigo-10 text-indigo-75 space-y-8">
                <div className="font-medium text-3xl">8</div>
                <div>Existing Customers</div>
              </li>
              <li className="text-lg text-primary-50">→</li>
              <li className="flex-1 p-16 rounded bg-green-10 text-green-75 space-y-8">
                <div className="font-medium text-3xl">6</div>
                <div>Potential Customers</div>
              </li>
            </ul>
            <div className="text-sm relative">
              <div className="flex items-center gap-16 text-primary-50">
                <span>Low</span>
                <hr className="border-t-2 border-primary-50 flex-1" />
                <span>High</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-8 bg-ground">
                Confidence
              </div>
            </div>
          </figure>
        </SubSection>
        <SubSection title="First Round of Results">
          <p>
            We gave each person a series of tasks and asked them to say what was
            going through their heads as they completed (or attempted to
            complete!) the steps; this is a helpful way to understand not only
            what actions people take, but the mental models that shape their
            actions.
          </p>
          <ul className="border rounded-md p-16 text-sm space-y-12">
            <li className="hidden xs:flex items-center gap-16 text-primary-75">
              <div className="w-1/3">Task</div>
              <div className="flex-1">Success Rate</div>
            </li>
            <TableRow title="Add new cards and people" percent={100} />
            <TableRow title="View a private org chart" percent={87} />
            <TableRow title="Customize the org chart layout" percent={62.5} />
            <TableRow title="Print the org chart" percent={100} />
            <TableRow title="Change the info on cards" percent={70} />
            <TableRow title="Filter the org chart" percent={87} />
            <li className="flex items-center gap-16 border-t pt-12 text-primary-75">
              <div className="flex items-center gap-8">
                <span className="h-12 w-12 rounded-full bg-green-50" />
                Pretty good!
              </div>
              <div className="flex items-center gap-8">
                <span className="h-12 w-12 rounded-full bg-orange-50" />
                Needs work
              </div>
            </li>
          </ul>
        </SubSection>
        <p>
          After each cohort, we aggregated the results and found problem areas.
          If there were obvious solutions for them, I would make changes to the
          prototype before the next cohort to make sure they actually solved the
          problem.
        </p>
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
            src="https://pingboard.github.io/pb-nav/org-chart"
            className="w-full h-[75vh] border-4 border-green-50 rounded"
          />
        </div>
        <Figure className="lg:hidden">
          <Image
            src={newFinal}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
        </Figure>
        <div className="lg:col-start-2">
          <ul className="list-disc ml-16 space-y-16 mb-16">
            <li>
              <strong className="font-semibold">
                Collapsible Nav &amp; Panels
              </strong>
              <p className="text-primary-75">
                Tuck the primary nav away to save space when editing the org
                chart. The Build and Edit panels both use the same slot on the
                right, which creates more real-estate.
              </p>
            </li>
            <li>
              <strong className="font-semibold">Unified Toolbar</strong>
              <p className="text-primary-75">
                By putting all the controls in the top bar, we can reduce the
                number of topbars as well as removing the special private org
                chart toolbar.
              </p>
            </li>
            <li>
              <strong className="font-semibold">
                Consolidated Title and Secondary Nav
              </strong>
              <p className="text-primary-75">
                A more intuitive—and compact—way to navigate between different
                charts.
              </p>
            </li>
            <li>
              <strong className="font-semibold">
                Search & Filter Improvements
              </strong>
              <p className="text-primary-75">
                Shunking these controls together saves space and helps organize
                the toolbar. Additionally, we added breadcrumbs when filtering
                to highlight your location.
              </p>
            </li>
            <li>
              <strong className="font-semibold">Move secondary controls</strong>
              <p className="text-primary-75">
                The zoom and Expand controls moved to the bottom of the screen.
                These have hotkeys associated with them, plus it&apos;s a fairly
                common place for other popular map-related apps to place view
                controls (Google Maps, Apple Maps, etc.).
              </p>
            </li>
          </ul>
          <Button
            color="green"
            href="https://pingboard.github.io/pb-nav/org-chart"
            newTab
          >
            <span className="hidden lg:flex">Open in New Tab</span>
            <span className="lg:hidden">Play With Prototype</span>→
          </Button>
        </div>
      </Section>

      <Section title="Postmortem" columns>
        <p>
          In order to ship on time, we decided to cut out updates to the
          individual settings panels. That felt like a good compromise since
          they weren&apos;t essential to the navigation updates.
        </p>
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

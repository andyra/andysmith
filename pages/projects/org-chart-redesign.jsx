import Image from "next/image";
import Link from "next/link";
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

const TableRow = ({ title, percent }) => (
  <li className="xs:flex xs:items-center xs:gap-16">
    <div className="xs:w-1/3">{title}</div>
    <div className="xs:flex-1 flex items-center gap-16 w-full">
      <div className="flex-1 h-8 rounded-full bg-primary-10 relative">
        <div
          className={cn(
            "rounded-full absolute top-0 left-0 bottom-0",
            percent < 75 ? "bg-warning-50" : "bg-tertiary-50"
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
      />

      <Section title="Why?" columns>
        <p>
          Something here about business goals, customer success, bottom line,
          etc.
        </p>
      </Section>

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
          <Figure>
            <Image
              className="rounded-sm"
              src={oldNav}
              alt="Legacy org chart build panel"
              sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
            />
            <Highlight className="top-[10%] left-[10%] right-[70%] bottom-[45%]" />
          </Figure>
          <p>
            Since the new design didn&apos;t provide a secondary nav layer, we
            would need to devise a way for customers to get to their private org
            charts.
          </p>
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

      <Section title="Validation" columns>
        <SubSection title="User Testing">
          <p>
            We scheduled UI testing-sessions with a couple cohorts: existing
            customers who had developed musicle memory with our tools and
            potential customers who had never heard of Pingboard. In addition,
            we started off with a round of internal testing so we could work out
            any obvious kinks before talking to other people.
          </p>
          <figure className="border rounded p-16 space-y-16">
            <ul className="flex items-center gap-8 text-center text-sm">
              <li className="flex-1 p-16 rounded bg-warning-10 text-warning-75 space-y-8">
                <div className="font-medium text-3xl">7</div>
                <div>Internal Sessions</div>
              </li>
              <li className="text-lg text-primary-50">→</li>
              <li className="flex-1 p-16 rounded bg-secondary-10 text-secondary-75 space-y-8">
                <div className="font-medium text-3xl">8</div>
                <div>Existing Customers</div>
              </li>
              <li className="text-lg text-primary-50">→</li>
              <li className="flex-1 p-16 rounded bg-tertiary-10 text-tertiary-75 space-y-8">
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
            <TableRow title="Add new cards and people" percent={100} />
            <TableRow title="View a private org chart" percent={87} />
            <TableRow title="Customize the org chart layout" percent={62.5} />
            <TableRow title="Print the org chart" percent={100} />
            <TableRow title="Change the info on cards" percent={70} />
            <TableRow title="Filter the org chart" percent={87} />
            <li className="flex items-center gap-16 border-t pt-12 text-primary-75">
              <div className="flex items-center gap-8">
                <span className="h-12 w-12 rounded-full bg-tertiary-50" />
                Pretty good!
              </div>
              <div className="flex items-center gap-8">
                <span className="h-12 w-12 rounded-full bg-warning-50" />
                Needs work
              </div>
            </li>
          </ul>
        </SubSection>
        <OrderedList></OrderedList>
        <p>
          After each cohort, we aggregated the results and found problem areas.
          If there were obvious solutions for them, I would make changes to the
          prototype before the next cohort to make sure they actually solved the
          problem.
        </p>
      </Section>

      <Section title="Where we landed" columns>
        <Figure>
          <Image
            src={newFinal}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
        </Figure>
        <ul className="list-disc ml-16 space-y-16">
          <li>
            <strong className="font-semibold">Better Panel Arrangement</strong>
            <p className="text-primary-75">
              Make the primary nav collapsible to save space when editing the
              org chart. The Build and Edit panels both use the same space on
              the right.
            </p>
          </li>
          <li>
            <strong className="font-semibold">Unify Toolbar</strong>
            <p className="text-primary-75">
              By putting all the controls in the top bar, we can remove the
              special private org chart version.
            </p>
          </li>
          <li>
            <strong className="font-semibold">
              Consolidate Title and Secondary Nav
            </strong>
            <p className="text-primary-75">This</p>
          </li>
          <li>
            <strong className="font-semibold">
              Search & Filter improvements
            </strong>
            <p className="text-primary-75">
              Clumping these controls together saves space and helps organize
              the toolbar. Additionally, we added breadcrumbs when filtering to
              highlight your location.
            </p>
          </li>
        </ul>
        <Button
          color="tertiary"
          href="https://pingboard.github.io/pb-nav/org-chart"
          newTab
        >
          Play with the Prototype →
        </Button>
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

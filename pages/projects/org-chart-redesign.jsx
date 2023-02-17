import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "components/Button";
import ProjectHeader from "components/ProjectHeader";
import Prototype from "components/Prototype";
import {
  Callout,
  Figure,
  Highlight,
  Section,
  SubSection,
  H2,
  WideDude,
} from "components/Content";

import oldPanel from "public/projects/org-chart/old-panel.webp";
import oldNav from "public/projects/org-chart/old-nav.webp";
import oldPrivate from "public/projects/org-chart/old-private.webp";
import oldFilterSearch from "public/projects/org-chart/old-filter-search.webp";
import newFinal from "public/projects/org-chart/new-final.webp";
import wireframes from "public/projects/org-chart/wireframes.webp";

// Page-level Components
// -----------------------------------------------------------------------------

const TableRow = ({ percent, title }) => (
  <li className="sm:flex sm:items-center sm:gap-16">
    <div className="sm:w-1/3">{title}</div>
    <div className="sm:flex-1 flex items-center gap-16 w-full">
      <div className="flex-1 h-8 rounded-full bg-primary-10 relative">
        <div
          className={cn(
            "rounded-full absolute top-0 left-0 bottom-0",
            percent < 75 ? "bg-highlight-50" : "bg-secondary-50"
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-primary-75 w-48 text-right">{percent}%</span>
    </div>
  </li>
);

// Page
// -----------------------------------------------------------------------------

const OrgChart = ({ metaTitle }) => (
  <>
    <ProjectHeader
      title={metaTitle}
      description="After months of design and research, we had landed on a set of global
    design changes to update the look &amp; feel of Pingboard. While most
    pages wouldn't need to be updated, there were a handful that
    would need significant changes in order to work with the new layout,
    chief among them the Org Chart."
    />
    <Section title="Where are we headed?">
      <p>
        The whole deal is to move away from a top-of-the-page navigation in
        favor of a left sidebar. This will give us more real estate for adding
        new features, make search more prominent, and give us more room for
        product onboarding, trial reminders, upgrade promos, etc.
      </p>
      <p>So instead of this:</p>
      <Figure
        className="rounded text-primary-75 mb-24"
        caption="Hmm, not much room to add new features…"
      >
        <nav className="flex items-center gap-12 h-32 px-12 border-b text-xs">
          <span className="w-[104px]">Pingboard</span>
          <span className="bg-secondary-75 h-12 w-64" />
          <span className="bg-secondary-75 h-12 w-96 relative">
            <ul className="absolute top-20 left-0 border border-secondary-50 bg-ground rounded text-xs text-secondary-50 p-8 space-y-8">
              <li className="h-8 w-96 bg-secondary-25" />
              <li className="h-8 w-64 bg-secondary-25" />
              <li className="h-8 w-96 bg-secondary-25" />
            </ul>
          </span>
          <span className="bg-secondary-75 h-12 w-48" />
          <span className="bg-secondary-75 h-12 w-64" />
          <span className="bg-secondary-75 h-12 w-96" />
          <span className="bg-primary-10 h-20 w-20 rounded-full flex-shrink-0 ml-auto" />
          <span className="bg-primary-10 h-20 w-20 rounded-full flex-shrink-0" />
        </nav>
        <div className="p-24">
          <div className="mb-24">Page Title</div>
          <div className="h-128 bg-primary-05 rounded-sm" />
        </div>
      </Figure>
      <p>We&apos;re moving to this:</p>
      <Figure
        className="rounded text-primary-75"
        contentClassName="grid grid-cols-[96px,1fr]"
        caption="Hey, now there's room and a consistent left sidebar!"
      >
        <nav className="col-span-2 flex items-center justify-between gap-12 h-32 px-12 border-b text-xs">
          <span>Pingboard</span>
          <span className="flex items-center h-20 w-1/3 rounded-full bg-primary-05 px-12 text-xs text-primary-50">
            Search
          </span>
          <div className="flex gap-8">
            <span className="bg-primary-10 h-20 w-20 rounded-full flex-shrink-0 ml-auto" />
            <span className="bg-primary-10 h-20 w-20 rounded-full flex-shrink-0" />
          </div>
        </nav>
        <aside className="flex flex-col gap-8 p-24">
          <span className="bg-secondary-75 h-8 w-64" />
          <span className="bg-secondary-75 h-8 w-64" />
          <span className="bg-secondary-75 h-8 w-64" />
          <span className="bg-secondary-75 h-8 w-64" />
          <span className="bg-secondary-75 h-8 w-64" />
          <span className="bg-secondary-75 h-8 w-64" />
          <span className="bg-secondary-75 h-8 w-64" />
        </aside>
        <div className="p-24">
          <div className="mb-24">Page Title</div>
          <ul className="flex gap-12 text-xs text-secondary-50 mb-12">
            <li className="h-8 w-96 bg-secondary-25" />
            <li className="h-8 w-64 bg-secondary-25" />
            <li className="h-8 w-96 bg-secondary-25" />
          </ul>
          <div className="h-128 bg-primary-05 rounded-sm" />
        </div>
      </Figure>
      <dl className="hidden flex items-center gap-24 text-sm">
        <div className="flex items-center gap-4">
          <dt
            className="h-12 w-12 rounded-full bg-secondary-75"
            aria-label="dark-blue"
          />
          <dt>Primary Nav</dt>
        </div>
        <div className="flex items-center gap-4">
          <dt
            className="h-12 w-12 rounded-full bg-secondary-25"
            aria-label="dark-blue"
          />
          <dt>Secondary Nav</dt>
        </div>
      </dl>
    </Section>
    <Section title="Challenges">
      <SubSection title="Conflicting Panels" count="01">
        <p>
          The new designs reserve the left side of the screen for global
          navigation, but the org chart is using that space for its own Build
          panel.
        </p>
        <Figure caption="The existing org chart design doesn't have room for the new primary nav menu">
          <Image
            src={oldPanel}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
          <Highlight className="top-[11%] left-0 right-[80.5%] bottom-0" />
          <Highlight className="top-[11%] right-0 left-[80.5%] bottom-0" />
        </Figure>
      </SubSection>

      <SubSection title="Accessing Private Org Charts" count="02">
        <p>
          Private org charts used to be accessed via a dropdown from the primary
          nav. Since the new designs require secondary nav to be handled within
          the page content, we need to devise a way for customers to get to
          their private org charts.
        </p>
        <Figure caption="The new nav design doesn't have a place for a dropdown like this">
          <Image
            className="rounded-sm"
            src={oldNav}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
          <Highlight className="top-[10%] left-[10%] right-[70%] bottom-[45%]" />
        </Figure>
      </SubSection>

      <SubSection title="Filter & Search" count="03">
        <p>
          A couple problems here! Filtering is a bit too subtle and it
          obfuscates the org chart title. Additionally, it&apos;s easy to get
          org chart search and global search confused.
        </p>
        <Figure caption="Which search should you use to find someone in the org chart?">
          <Image
            className="rounded-sm"
            src={oldFilterSearch}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
          <Highlight className="top-[33%] left-0 right-[38%] bottom-[29%]" />
          <Highlight className="top-0 left-[72.7%] right-0 bottom-[66%]" />
        </Figure>
      </SubSection>

      <SubSection title="Private Org Chart Toolbar" count="04">
        <p>
          Private org charts include additional controls in a toolbar that
          overrides the old primary nav. Is there a way we can consolidate these
          additional controls with the existing org chart toolbar and still keep
          the primary nav? This would make the experience more consistent
          between public and private org charts and remove one of the toolbars.
        </p>
        <Figure caption="Can we remove this specialized toolbar on private org charts?">
          <Image
            className="rounded-sm"
            src={oldPrivate}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
          <Highlight className="top-0 left-0 right-0 bottom-1/2" />
        </Figure>
      </SubSection>
    </Section>

    <Section title="Figuring it out">
      <SubSection title="Start without (too much) judgement" count="01">
        <p>
          I like to brainstorm excessively to start with, in case any novel
          approaches jump out. Tools like Sketch and Figma are great at allowing
          you to quickly dump ideas on a screen without getting lost in the
          details.
        </p>
        <Figure caption="One of several pages of Sketch iterations">
          <Image
            className="rounded-sm"
            src={wireframes}
            alt="Legacy org chart build panel"
            sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
          />
        </Figure>
        <Callout color="info">
          I like to put color-coded &ldquo;stickers&rdquo; on screens that seem
          especially promising (green sticker) or funky (red sticker). This is
          helpful for visually grepping a project in its early stages.
        </Callout>
      </SubSection>
      <SubSection title="Narrow down on the good bits" count="02">
        <p>
          After working for a few days, I pruned out the ideas that were clumsy,
          required out-of-scope changes, or were simply too weird. I then worked
          with the VP of Product to flesh out in more detail.
        </p>
        <p>
          After narrowing in on a couple of solid options, we wanted to get a
          better sense for how each might work in real life&mdash; something
          might look great sitting quietly on a Figma frame, but feel awkward
          when interacting in the browser.
        </p>
        <p>
          To this end, I built a React prototype on Next.js and published it to
          GitHub Pages. As a bonus, I wired up GitHub Actions to deploy
          automatically whenever I pushed changes to master. This ended up being
          a convenient way to quickly iterate and publish changes.
        </p>
        <Button
          color="secondary"
          href="https://pingboard.github.io/pb-nav/org-chart"
          newTab
        >
          Play With the Prototype
          <ArrowRightIcon className="h-16 w-16" />
        </Button>
      </SubSection>
    </Section>

    <Section title="Validation">
      <SubSection title="User Testing" count="01">
        <p>
          We scheduled <strong>UI testing-sessions</strong> with a couple
          cohorts: existing customers who had developed musicle memory with our
          tools and potential customers who had never heard of Pingboard. In
          addition, we started off with a round of internal testing so we could
          work out any obvious kinks before talking to other people.
        </p>
        <Figure contentClassName="flex sm:flex-col gap-16 border rounded p-16">
          <ul className="flex-1 flex flex-col items-center sm:flex-row sm:items-center gap-8 text-center text-sm">
            <li className="w-full flex-1 p-16 rounded bg-highlight-10 text-highlight-75 space-y-8">
              <div className="font-medium text-3xl">7</div>
              <div>Internal Sessions</div>
            </li>
            <li className="text-lg text-primary-50">
              <ArrowRightIcon className="rotate-90 sm:rotate-0 h-16 w-16" />
            </li>
            <li className="w-full flex-1 p-16 rounded bg-secondary-10 text-secondary-75 space-y-8">
              <div className="font-medium text-3xl">8</div>
              <div>Existing Customers</div>
            </li>
            <li className="text-lg text-primary-50">
              <ArrowRightIcon className="rotate-90 sm:rotate-0 h-16 w-16" />
            </li>
            <li className="w-full flex-1 p-16 rounded bg-secondary-10 text-secondary-75 space-y-8">
              <div className="font-medium text-3xl">6</div>
              <div>Potential Customers</div>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-16 text-sm relative">
            <span className="text-primary-50">Low</span>
            <span className="w-2 h-full sm:w-full sm:h-2 bg-primary-25" />
            <span>Confidence</span>
            <span className="w-2 h-full sm:w-full sm:h-2 bg-primary-25" />
            <span className="text-primary-50">High</span>

            <hr className="hidden border-t-2 border-primary-50 flex-1" />
            <hr className="hidden border-t-2 border-primary-50 flex-1" />
            <div className="hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-8 bg-ground">
              Confidence
            </div>
          </div>
        </Figure>
      </SubSection>
      <SubSection title="First Round of Results" count="02">
        <p>
          We gave each person a series of tasks and asked them to say what was
          going through their heads as they completed (or attempted to
          complete!) the steps; this is a helpful way to understand not only
          what actions people take, but the mental models that shape their
          actions.
        </p>
        <Figure>
          <ul className="p-16 text-sm space-y-12">
            <li className="hidden xs:flex items-center gap-16 font-medium text-primary-75">
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
                <span className="h-12 w-12 rounded-full bg-secondary-50" />
                Pretty good!
              </div>
              <div className="flex items-center gap-8">
                <span className="h-12 w-12 rounded-full bg-highlight-50" />
                Needs work
              </div>
            </li>
          </ul>
        </Figure>
        <p>
          After each cohort, we aggregated the results and found problem areas.
          If there were obvious solutions for them, I would make changes to the
          prototype before the next cohort to make sure they actually solved the
          problem.
        </p>
      </SubSection>
    </Section>

    <Section title="Where We Landed">
      <Prototype
        iframeSrc="https://pingboard.github.io/pb-nav/org-chart"
        imageSrc={newFinal}
        imageAlt="Legacy org chart build panel"
      />
      <SubSection title="Summary of Improvements">
        <ul className="list-decimal ml-16 space-y-16 mb-16 mt-base">
          <li>
            <strong className="font-medium">Collapsible Primary Nav</strong>
            <p className="text-primary-75">
              Allow users to tuck the primary nav away to save space when
              editing the org chart. The org chart&apos;s Build and Edit panels
              both use the same slot on the right, which creates more
              real-estate since only one can be open at a time.
            </p>
          </li>
          <li>
            <strong className="font-medium">Unified Toolbar</strong>
            <p className="text-primary-75">
              By putting all the org chart controls in the top bar, we can
              remove the special private org chart toolbar and get a bit more
              screen real estate to boot.
            </p>
          </li>
          <li>
            <strong className="font-medium">
              Consolidated Title and Secondary Nav
            </strong>
            <p className="text-primary-75">
              A more intuitive—and compact—way to navigate between different
              charts.
            </p>
          </li>
          <li>
            <strong className="font-medium">
              Search & Filter Improvements
            </strong>
            <p className="text-primary-75">
              Grouping these controls together saves space and helps organize
              the toolbar. Additionally, we added breadcrumbs when filtering to
              highlight your location.
            </p>
          </li>
          <li>
            <strong className="font-medium">Move secondary controls</strong>
            <p className="text-primary-75">
              The zoom and Expand controls moved to the bottom of the screen.
              These have hotkeys associated with them, plus it&apos;s a fairly
              common place for other popular map-related apps to place view
              controls (Google Maps, Apple Maps, etc.).
            </p>
          </li>
        </ul>
      </SubSection>
    </Section>

    <Section title="Compromises">
      <p>
        In order to ship on time, we decided to cut out design updates to the
        individual org chart settings panels. That felt like a good compromise
        since they weren&apos;t essential to the navigation updates.
      </p>
    </Section>
  </>
);

export default OrgChart;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Org Chart Redesign",
    },
  };
}

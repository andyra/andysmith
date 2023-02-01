import Link from "next/link";
import Callout from "components/Callout";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import { A, Divider, Section } from "components/Content";

const Navigation = () => {
  return (
    <>
      <ProjectHeader
        title="Pingboard Nav Redesign"
        description="Since launching in 2014, Pingboard's horizontal navbar had been
            more-or-less unchanged. Seven years and countless iterations later,
            the navigation was due for a rethink. If we were building this from
            scratch today, how would we do it differently?"
      />

      <Section title="What's the Problem?">
        <div className="space-y-16">
          <ul className="list list-disc space-y-16 pl-16">
            <li>
              <strong>Limited room</strong>: There’s a quickly shrinking amount
              of available space for new features. In addition to the normal nav
              items, we also have to account for the search bar, Success Center,
              upgrade promos, support link, and user menu.
            </li>
            <li>
              <strong>Inconsistent sidebar</strong>: A couple sections of the
              app use the left sidebar for secondary navigation, but the
              majority of the site has a blank sidebar, which isn&apos;t a great
              use of space.
            </li>
            <li>
              <strong>Few organizational options</strong>: as Pingboard grows
              from a product that shares company-wide info (directory, org
              chart, calendar) to a professional development platform with
              employee success tools (1:1s, Surveys, Reviews, etc.), it’s
              increasingly important to organize the app so it doesn&apos;t feel
              like a hodge-podge of features.
            </li>
          </ul>
          <Callout color="info">
            Note: this project was drivin by internal requirements, not customer
            feedback.
          </Callout>
        </div>
        <figure className="bg-secondary-25 p-24 rounded-lg pointer-events-none">
          <div className="bg-white rounded-lg h-256">
            <div className="flex items-center gap-16 p-8">
              <span className="bg-primary h-16 w-64 rounded-sm" />
              <span className="bg-primary h-12 w-56 rounded-sm" />
              <span className="bg-primary h-12 w-80 rounded-sm" />
              <span className="bg-primary h-12 w-64 rounded-sm" />
              <span className="bg-primary h-12 w-48 rounded-sm" />
              <div className="ml-auto flex items-center gap-8">
                <span className="bg-primary h-20 w-20 rounded-full" />
                <span className="bg-primary h-20 w-20 rounded-full" />
                <span className="bg-primary h-20 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </figure>
      </Section>

      <Section title="Solution">
        <div className="space-y-16">
          <p>
            Create a more robust, flexible foundation by moving the primary nav
            to a left sidebar. Some benefits:
          </p>
          <ul className="list list-disc space-y-16 pl-16">
            <li>
              <strong>More room for nav items</strong>: We can add many new
              items to the primary nav before running out of space.
              Future-proof!
            </li>
            <li>
              <strong>More flexibility</strong>: This extra room will allow us
              to consider new things like dedicated product and company
              onboarding pages, etc.
            </li>
            <li>
              <strong>Explain the product better</strong>: We can group similar
              parts of the app together to help “chunk” Pingboard’s features
              into logical sections without relying on dropdown menus. One look
              at the nav should give new customers a much clearer picture of
              what the product is all about.
            </li>
            <li>
              <strong>Free up the top bar</strong>: the global search can become
              much more prominent, and we can move all the org chart tools here
              to free up real estate for the chart itself.
            </li>
            <li>
              <strong>Better UX</strong>: Since each primary nav item has the
              same amount of room, we can be more verbose when needed (“Get
              Support” instead of a question mark icon, for instance)
            </li>
          </ul>
        </div>
        <figure className="bg-secondary-25 p-24 rounded-lg pointer-events-none" />
      </Section>

      <Section title="Challenges">
        <div className="space-y-16">
          <p>
            Although there&apos;s nothing particularly novel about navigation on
            the left side of the page, this projects shows how even a simple
            change can have broad ramifications.
          </p>
          <ul className="list list-disc space-y-16 pl-16">
            <li>
              <strong>Modifying complex pages</strong>: Most page layouts
              won&apos;t need to change, but a handful will need adjustments to
              work with the new layout.
            </li>
            <li>
              <strong>Scope</strong>: Every page will need to be touched. How
              can we break the work up into shippable pieces?
            </li>
            <li>
              <strong>Communicating changes</strong>: Existing customers may
              find the change suprising; how can we prepare them for the
              improvements?
            </li>
          </ul>
        </div>
        <figure className="bg-secondary-25 p-24 rounded-lg pointer-events-none" />
      </Section>

      <Section title="Research &amp; Validation">
        <div className="space-y-16">
          <p>
            That majority of the IA of the site remained the same, but we
            planned on a few key changes and wanted to make sure that existing
            customers would feel at home with the new layout. Here&apos;s what
            we did:
          </p>
          <ul className="list list-disc space-y-16 pl-16">
            <li>
              I built a{" "}
              <A href="https://pingboard.github.io/pb-nav/" newTab>
                React Prototype
              </A>
              to run task-based user testing.
            </li>
            <li>Internal testing with 5 people from various departments.</li>
            <li>Customer testing with 6 companies already using our product</li>
          </ul>
          <p>
            We intentionally chose people who were familiar with the app because
            we wanted to understand how disorienting these changes might be. We
            gave volunteers a series of tasks to find areas where they were
            getting confused
          </p>
          <p>
            Our initial IA involved separate "Company" and "Workspace" sections
            to distinguish between public and private info. like this:
          </p>
          <figure className="bg-primary-05 rounded-lg h-128 w-full" />
          <p>
            We assumed people would be confused by what info was public vs.
            private, but in testing we discovered that this model didn&apos;t
            provide a helpful &ldquo;information scent&rdquo;—people didn&apos;t
            always know where to find certain pages based on those two broad
            cateogries.
          </p>
          <p>
            Instead, we decided to flatten the options and separate them
            visually, thus:
          </p>
          <figure className="bg-primary-05 rounded-lg h-128 w-full" />
          <p>
            This turned out to be much more effective at helping people
            navigate.
          </p>
        </div>
        <figure className="bg-secondary-25 p-24 rounded-lg pointer-events-none" />
      </Section>
      <ProjectFooter />
    </>
  );
};

export default Navigation;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Pingboard Nav Redesign",
    },
  };
}

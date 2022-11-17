import Link from "next/link";
import Callout from "components/Callout";
import Content from "components/Content";
import Divider from "components/Divider";

const Navigation = () => {
  return (
    <>
      <header className="space-y-[2vmax] py-[8vmax] bg-tertiary-10 text-tertiary-75">
        <Content className="max-w-screen-xl space-y-[2vmax]">
          <h1 className="font-extrabold text-3xl md:text-5xl text-tertiary">
            Pingboard Nav Redesign
          </h1>
          <Divider />
          <p className="text-lg md:text-xl max-w-prose">
            Since launching in 2014, Pingboard&apos;s horizontal navbar had been
            more-or-less unchanged. Seven years and countless iterations later,
            the navigation was due for a rethink. If we were building this from
            scratch today, how would we do it differently?
          </p>
          <p className="text-lg">Sketch • Figma • Bla • Stakeholders</p>
        </Content>
      </header>
      <Content className="max-w-screen-2xl space-y-vbig">
        <section className="space-y-vbig">
          <h2 className="font-medium text-lg md:text-2xl max-w-screen-lg">
            <span className="block font-normal text-lg opacity-25">01</span>
            What&apos;s the problem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-48">
            <div className="space-y-8">
              <p>
                The web app started its life off with a horizontal nav, where
                primary links were displayed across the top of the page. While
                it had served us well over the years years, the number of new
                features we had added&mdash;not to mention what was on the
                roadmap&mdash;made it clear that we would soon hit the limits of
                this style of navigation.
              </p>
              <Callout color="info">
                Note: this project was drivin by internal requirements, not
                customer feedback.
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

            <figure className="h-256 w-full bg-secondary-25" />
          </div>
        </section>

        <Divider />
      </Content>
      <footer>
        <Content className="bg-tertiary-10">Next Project</Content>
      </footer>
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

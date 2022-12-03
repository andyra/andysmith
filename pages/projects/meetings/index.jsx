import Link from "next/link";
import Callout from "components/Callout";
import Container from "components/Container";
import Divider from "components/Divider";
import ExternalLink from "components/ExternalLink";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import Section from "components/Section";

const Meetings = () => {
  return (
    <>
      <ProjectHeader title="TES.fm" description="Placeholder" />

      <Section heading="What's the Problem?" i="01" columns={1}></Section>
      <ProjectFooter />
    </>
  );
};

export default Meetings;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "TES.fm",
    },
  };
}

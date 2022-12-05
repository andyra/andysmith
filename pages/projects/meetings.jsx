import Link from "next/link";
import Callout from "components/Callout";
import Divider from "components/Divider";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import { Section } from "components/Content";

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

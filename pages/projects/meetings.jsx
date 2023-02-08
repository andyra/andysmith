import Link from "next/link";
import Callout from "components/Callout";
import ProjectHeader from "components/ProjectHeader";
import { Divider, Section } from "components/Content";

const Meetings = ({ metaTitle }) => {
  return (
    <>
      <ProjectHeader title={metaTitle} description="" />
      <Section heading="What's the Problem?" i="01" columns={1}></Section>
    </>
  );
};

export default Meetings;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Meetings",
      maxWidth: "max-w-screen-lg prose",
    },
  };
}

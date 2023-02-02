import Link from "next/link";
import Callout from "components/Callout";
import ProjectLayout from "components/ProjectLayout";
import { Divider, Section } from "components/Content";

const Meetings = ({ metaTitle }) => {
  return (
    <ProjectLayout title={metaTitle} description="">
      <Section heading="What's the Problem?" i="01" columns={1}></Section>
    </ProjectLayout>
  );
};

export default Meetings;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Meetings",
    },
  };
}

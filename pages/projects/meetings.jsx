import Link from "next/link";
import ProjectHeader from "components/ProjectHeader";
import { Callout, Section } from "components/Content";

const Meetings = ({ metaTitle }) => {
  return (
    <>
      <ProjectHeader title={metaTitle} description="" />
    </>
  );
};

export default Meetings;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "1:1 Meetings",
    },
  };
}

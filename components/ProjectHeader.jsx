import { Divider } from "components/Content";

const COLORS = {
  green: {
    container: "bg-green-10 text-green-75",
    text: "text-green",
  },
  indigo: {
    container: "bg-indigo-10 text-indigo-75",
    text: "text-indigo",
  },
  orange: {
    container: "bg-orange-10 text-orange-75",
    text: "text-orange",
  },
};

const ProjectHeader = ({
  children,
  color = "green",
  description,
  link,
  title,
}) => (
  <header className="px-page">
    <div className="max-w-screen-xl mx-auto space-y-24 md:space-y-48 py-page border-b">
      <h1 className="text-xl">{title}</h1>
      <p className="text-lg max-w-prose">{description}</p>
      {children}
    </div>
  </header>
);

export default ProjectHeader;

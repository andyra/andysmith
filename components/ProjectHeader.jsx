import { Divider } from "components/Content";

const COLORS = {
  secondary: {
    container: "bg-secondary-10 text-secondary-75",
    text: "text-secondary",
  },
  highlight: {
    container: "bg-highlight-10 text-highlight-75",
    text: "text-highlight",
  },
};

const ProjectHeader = ({
  children,
  color = "secondary",
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

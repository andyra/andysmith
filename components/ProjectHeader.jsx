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
  <header className={`px-page pb-page pt-page-lg ${COLORS[color].container}`}>
    <div className="max-w-screen-xl mx-auto space-y-24 md:space-y-48">
      <h1
        className={`font-semibold text-2xl sm:text-3xl lg:text-5xl ${COLORS[color].text}`}
      >
        {title}
      </h1>
      <Divider />
      <p className="text-base sm:text-lg md:text-xl max-w-prose">
        {description}
      </p>
      {children}
    </div>
  </header>
);

export default ProjectHeader;

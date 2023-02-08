import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { PROJECTS } from "../constants";

const ProjectLink = ({ project, direction }) => {
  const linkClasses = cn(
    "flex flex-col xs:flex-row gap-8 p-16 text-secondary hover:bg-secondary-05 transition group",
    direction === "next" && "justify-end text-right"
  );

  const arrowClasses = cn(
    "transition-transform",
    direction === "prev"
      ? "group-hover:-translate-x-8 order-first"
      : "group-hover:translate-x-8 order-first xs:order-last"
  );

  return (
    <Link href={project.href} className={linkClasses}>
      <div className="flex-1">
        <div className="text-sm capitalize">{direction}</div>
        <div className="font-medium text-sm">{project.title}</div>
      </div>
      <span className={arrowClasses}>{direction === "prev" ? "←" : "→"}</span>
    </Link>
  );
};

const ProjectLayout = ({ children, description, link, title }) => {
  const router = useRouter();

  return (
    <>
      <header className="py-base border-b text-secondary">
        <h1 className="font-light text-2xl">{title}</h1>
        <p className="text-lg">{description}</p>
      </header>
      {children}
    </>
  );
};

export default ProjectLayout;

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
  const index = PROJECTS.map((project) => project.href).indexOf(
    router.pathname
  );
  const prev = PROJECTS[index === 0 ? PROJECTS.length - 1 : index - 1];
  const next = PROJECTS[index === PROJECTS.length - 1 ? 0 : index + 1];

  return (
    <div className="lg:flex lg:items-start">
      <aside className="lg:w-screen-sm lg:sticky lg:top-64 ">
        <div className="px-page max-w-screen-md mx-auto space-y-sm py-base border-b lg:border-none text-secondary">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="max-w-prose">{description}</p>
          <nav className="hidden lg:grid grid-cols-2 border-t">
            <ProjectLink project={prev} direction="prev" />
            <ProjectLink project={next} direction="next" />
          </nav>
        </div>
      </aside>
      <div class="flex-1 border-l">{children}</div>
    </div>
  );
};

export default ProjectLayout;

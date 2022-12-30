import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { PROJECTS } from "../constants";

const FooterLink = ({ project, direction }) => {
  const linkClasses = cn(
    "flex flex-col xs:flex-row gap-8 p-16 sm:p-24 rounded-lg border-2 border-tertiary-50 text-tertiary hover:bg-tertiary-05 transition group",
    direction === "next" && "justify-end text-right"
  );

  const arrowClasses = cn(
    "text-primary-75 transition-transform",
    direction === "prev"
      ? "group-hover:-translate-x-8 order-first"
      : "group-hover:translate-x-8 order-first xs:order-last"
  );

  return (
    <Link href={project.href}>
      <a className={linkClasses}>
        <div className="flex-1">
          <div className="text-sm sm:text-base text-primary-75 capitalize">
            {direction} Project
          </div>
          <div className="font-medium text-sm sm:text-lg">{project.title}</div>
        </div>
        <span className={arrowClasses}>{direction === "prev" ? "←" : "→"}</span>
      </a>
    </Link>
  );
};

const ProjectFooter = () => {
  const router = useRouter();
  const index = PROJECTS.map((project) => project.href).indexOf(
    router.pathname
  );
  const prev = PROJECTS[index === 0 ? PROJECTS.length - 1 : index - 1];
  const next = PROJECTS[index === PROJECTS.length - 1 ? 0 : index + 1];

  return (
    <footer className="px-page pb-page-lg">
      <nav className="max-w-screen-xl mx-auto py-page grid grid-cols-2 gap-16 sm:gap-24">
        <FooterLink project={prev} direction="prev" />
        <FooterLink project={next} direction="next" />
      </nav>
    </footer>
  );
};

export default ProjectFooter;

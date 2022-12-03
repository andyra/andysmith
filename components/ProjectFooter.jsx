import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import Container from "components/Container";
import { PROJECTS } from "../constants";

const FooterLink = ({ project, direction }) => {
  const linkClasses = cn(
    "flex flex-col xs:flex-row gap-8 p-16 sm:p-24 rounded-lg bg-tertiary-10 hover:text-tertiary transition group",
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
  const index = PROJECTS.map((project) => project.href).indexOf(router.asPath);
  const prev = PROJECTS[index === 0 ? PROJECTS.length - 1 : index - 1];
  const next = PROJECTS[index === PROJECTS.length - 1 ? 0 : index + 1];

  return (
    <footer className="px-page py-page-lg">
      <nav className="max-w-screen-xl mx-auto grid grid-cols-2 gap-16 sm:gap-24">
        <FooterLink project={prev} direction="prev" />
        <FooterLink project={next} direction="next" />
      </nav>
    </footer>
  );
};

export default ProjectFooter;

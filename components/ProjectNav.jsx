import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { PROJECTS } from "../constants";

const ProjectNavLink = ({ path, project }) => {
  const isCurrent = path === project.href;

  const attrs = {};
  if (isCurrent) {
    attrs["aria-current"] = "page";
  }

  return (
    <li key={project.title}>
      <Link
        href={project.href}
        className={cn(
          "flex items-center gap-8 h-32 text-sm",
          isCurrent && "text-secondary"
        )}
        {...attrs}
      >
        {project.title}
      </Link>
    </li>
  );
};

const ProjectNav = () => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <nav className="fixed top-lg left-base">
      <ul>
        {PROJECTS.map((project) => (
          <ProjectNavLink path={path} project={project} key={project.href} />
        ))}
      </ul>
    </nav>
  );
};

export default ProjectNav;

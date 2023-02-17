import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import cn from "classnames";
import { Menu as MenuPrimitive } from "@headlessui/react";
import ThemeSwitcher from "components/ThemeSwitcher";
import { CONTACT_INFO, PROJECTS } from "../constants";

// Subcomponents
// ----------------------------------------------------------------------------

const NAV_LINK_CLASSES = cn(
  "flex items-center gap-12 hover:text-secondary transition relative",
  "min-h-48 px-8",
  "lg:min-h-32 lg:px-0"
);

const NavLink = ({ disabled, href, className, children }) => {
  const router = useRouter();
  const isCurrent = href === router.pathname;
  const attrs = {};
  if (isCurrent) {
    attrs["aria-current"] = "page";
  }

  return (
    <Link
      href={href}
      className={cn(
        NAV_LINK_CLASSES,
        isCurrent && "text-secondary",
        disabled && "opacity-25 pointer-events-none",
        className
      )}
      {...attrs}
    >
      {children}
    </Link>
  );
};

const ProjectMenu = () => (
  <MenuPrimitive>
    <MenuPrimitive.Button className={cn(NAV_LINK_CLASSES, "font-medium")}>
      Projects
    </MenuPrimitive.Button>
    <MenuPrimitive.Items
      as="ul"
      className="absolute left-0 right-0 bg-ground shadow-2xl border divide-y"
    >
      {PROJECTS.map((project) => (
        <MenuPrimitive.Item as="li" key={project.title}>
          {({ active, close }) => (
            <Link
              className={cn(
                "block px-base py-16",
                active && "bg-secondary-05",
                project.disabled && "pointer-events-none opacity-25"
              )}
              href={project.href}
              onClick={close}
            >
              <div className="font-medium">{project.title}</div>
              <div className="text-primary-75">{project.details}</div>
            </Link>
          )}
        </MenuPrimitive.Item>
      ))}
    </MenuPrimitive.Items>
  </MenuPrimitive>
);

// Component
// ----------------------------------------------------------------------------

const Nav = () => {
  const router = useRouter();
  const isProjectPage = router.pathname.includes("projects");

  const classes = cn(
    "sticky top-0 flex text-sm bg-ground z-50 relative",
    "items-center justify-between border-b",
    "lg:flex-col lg:items-start lg:gap-base lg:h-screen lg:border-r",
    "lg:w-320 lg:px-48 lg:py-base"
  );

  return (
    <nav className={classes}>
      <div className="flex justify-between lg:w-full">
        <NavLink href="/" className="pl-base lg:block">
          <div className="font-serif text-base">Andy Smith</div>
          <div className="hidden lg:block">Product Designer</div>
        </NavLink>
        <ThemeSwitcher className="hidden lg:flex lg:translate-x-1/2" />
      </div>
      <ul className="flex lg:flex-col lg:mb-auto lg:w-full">
        <li className="lg:hidden">
          <ProjectMenu />
        </li>
        <li className="hidden lg:block">
          <NavLink href={PROJECTS[0].href} className="font-medium">
            Projects
          </NavLink>
          {isProjectPage && (
            <ul className="ml-16 text-xs mb-sm">
              {PROJECTS.map((project) => (
                <li key={project.href}>
                  <NavLink href={project.href} disabled={project.disabled}>
                    {project.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <NavLink href="/about" className="font-medium">
            About
          </NavLink>
        </li>
        <li className="lg:hidden">
          <ThemeSwitcher />
        </li>
      </ul>
      <ul className="hidden lg:block">
        {CONTACT_INFO.map((item, i) => (
          <li key={item.label}>
            <NavLink className="text-xs" href={item.href}>
              {item.icon}
              {item.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

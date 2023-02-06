import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import cn from "classnames";
import { Menu as MenuPrimitive } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import ClientOnly from "components/ClientOnly";
import { CONTACT_INFO, PROJECTS } from "../constants";

// Subcomponents
// ----------------------------------------------------------------------------

const NAV_LINK_CLASSES = cn(
  "flex items-center gap-4 hover:text-secondary hover:bg-primary-10",
  "h-48 px-8",
  "lg:h-32 lg:px-0"
);

const NavLink = ({ href, className, children }) => {
  const router = useRouter();
  const isCurrent = href === router.asPath;
  const attrs = {};
  if (isCurrent) {
    attrs["aria-current"] = "page";
  }

  return (
    <Link
      href={href}
      className={cn(NAV_LINK_CLASSES, isCurrent && "text-secondary", className)}
      {...attrs}
    >
      {children}
    </Link>
  );
};

const ProjectMenu = () => (
  <MenuPrimitive>
    <MenuPrimitive.Button className={NAV_LINK_CLASSES}>
      Projects
    </MenuPrimitive.Button>
    <MenuPrimitive.Items as="ul" className="absolute p-base bg-ground border">
      {PROJECTS.map((project) => (
        <MenuPrimitive.Item as="li" key={project.title}>
          {({ active }) => (
            <Link className={`${active && "bg-secondary"}`} href={project.href}>
              {project.title}
            </Link>
          )}
        </MenuPrimitive.Item>
      ))}
    </MenuPrimitive.Items>
  </MenuPrimitive>
);

const ThemeSwitcher = ({ className }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const buttonClasses = cn(
    "flex items-center justify-center h-48 w-48 rounded-full hover:bg-primary-10 transition",
    "lg:h-32 lg:w-32",
    className
  );

  const THEMES = [
    {
      name: "system",
      icon: <ComputerDesktopIcon className="h-24 w-24" />,
    },
    {
      name: "light",
      icon: <SunIcon className="h-24 w-24" />,
    },
    {
      name: "dark",
      icon: <MoonIcon className="h-24 w-24" />,
    },
  ];

  return (
    <ClientOnly>
      <MenuPrimitive>
        <MenuPrimitive.Button className={buttonClasses}>
          {resolvedTheme === "light" ? (
            <SunIcon className="h-24 w-24" />
          ) : (
            <MoonIcon className="h-24 w-24" />
          )}{" "}
        </MenuPrimitive.Button>
        <MenuPrimitive.Items
          as="ul"
          className="absolute right-8 p-8 rounded bg-ground border w-256"
        >
          {THEMES.map((theme) => (
            <MenuPrimitive.Item as="li" key={theme.name}>
              {({ active }) => (
                <button
                  className="flex items-center gap-12 h-48 w-full px-8 rounded hover:bg-secondary-10 capitalize transition"
                  onClick={() => {
                    setTheme(theme.name);
                  }}
                >
                  {theme.icon}
                  {theme.name}
                </button>
              )}
            </MenuPrimitive.Item>
          ))}
        </MenuPrimitive.Items>
      </MenuPrimitive>
    </ClientOnly>
  );
};

// Component
// ----------------------------------------------------------------------------

const Nav = () => {
  const classes = cn(
    "sticky top-0 flex text-sm bg-ground z-50 relative",
    "items-center justify-between border-b",
    "lg:flex-col lg:items-start lg:h-screen lg:p-base lg:border-r"
  );

  return (
    <nav className={classes}>
      <div className="flex justify-between lg:w-full">
        <Link
          className="flex items-center h-48 px-base lg:block lg:px-0 lg:h-auto hover:text-secondary transition lg:flex-1"
          href="/"
        >
          <div className="font-heading text-base">Andy Smith</div>
          <div className="hidden lg:block">Product Designer</div>
        </Link>
        <ThemeSwitcher className="hidden lg:flex lg:translate-x-1/2" />
      </div>
      <ul className="flex lg:flex-col mb-0 lg:mb-auto">
        <li className="lg:hidden">
          <ProjectMenu />
        </li>
        <li className="hidden lg:block">
          <NavLink href={PROJECTS[0].href}>Projects</NavLink>
          <ul className="ml-16 text-xs">
            {PROJECTS.map((project) => (
              <li key={project.href}>
                <NavLink href={project.href}>{project.title}</NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="lg:hidden">
          <ThemeSwitcher />
        </li>
      </ul>
      <ul className="hidden lg:block">
        {CONTACT_INFO.map((item, i) => (
          <li key={item.label}>
            <NavLink
              className="underline underline-offset-2 decoration-primary-25 hover:decoration-primary transition"
              href={item.href}
            >
              {item.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import cn from "classnames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ClientOnly from "components/ClientOnly";
import { PROJECTS } from "../constants";

// Subcomponents
// ----------------------------------------------------------------------------

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
      className={cn(
        "flex items-center h-64 px-12 xs:px-24 hover:text-secondary",
        "font-bold text-sm tracking-wider uppercase",
        isCurrent && "text-secondary",
        className
      )}
      {...attrs}
    >
      {children}
    </Link>
  );
};

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <button
        className="flex items-center justify-center h-64 px-12 -mr-12 xs:px-24 xs:-mr-24 hover:text-secondary transition"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {resolvedTheme === "light" ? (
          <SunIcon className="h-24 w-24" />
        ) : (
          <MoonIcon className="h-24 w-24" />
        )}
      </button>
    </ClientOnly>
  );
};

// Component
// ----------------------------------------------------------------------------

const Nav = () => (
  <nav className="hidden sticky top-0 z-10 flex items-center justify-between gap-8 px-base bg-ground border-b print:hidden">
    <NavLink href="/" className="-ml-12 xs:-ml-24">
      Andy Smith
    </NavLink>
    <div className="flex items-center">
      <NavLink href={PROJECTS[0].href}>Projects</NavLink>
      <NavLink href="/about">About</NavLink>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Nav;

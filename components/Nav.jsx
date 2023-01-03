import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import cn from "classnames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ClientOnly from "components/ClientOnly";

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
    <Link href={href}>
      <a
        className={cn(
          "text-sm xs:text-base flex items-center h-64 px-12 xs:px-24 hover:text-indigo font-medium transition",
          isCurrent && "text-indigo",
          className
        )}
        {...attrs}
      >
        {children}
      </a>
    </Link>
  );
};

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <button
        className="flex items-center justify-center h-64 px-12 -mr-12 xs:px-24 xs:-mr-24 hover:text-indigo transition"
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

const Nav = () => {
  const classes = cn(
    "fixed top-0 left-0 right-0 z-50",
    "px-page",
    // the mix-blend mode and BG color allows the nav to absorb colors behind it
    "bg-white mix-blend-darken dark:bg-black dark:mix-blend-lighten backdrop-blur transition duration-300",
    "print:hidden"
  );

  return (
    <nav className={classes}>
      <div className="flex items-center justify-between gap-8 max-w-screen-xl mx-auto">
        <NavLink href="/" className="-ml-12 xs:-ml-24">
          Andy Smith
        </NavLink>
        <div className="flex items-center">
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <ThemeSwitcher />
        </div>
      </div>
      {/* Phony border offset so the mix-blend-mode doesn't goof with it */}
      <div className="absolute -bottom-1 left-0 h-1 w-full bg-primary-10" />
    </nav>
  );
};

export default Nav;

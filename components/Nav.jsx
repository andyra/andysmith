import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import cn from "classnames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ClientOnly from "components/ClientOnly";
import { debounce } from "helpers/index";

// Subcomponents
// ----------------------------------------------------------------------------

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <button
        className="flex items-center h-64 hover:text-tertiary transition"
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
          "flex items-center h-64 px-8 hover:text-tertiary font-medium transition",
          className
        )}
        {...attrs}
      >
        {children}
      </a>
    </Link>
  );
};

// Component
// ----------------------------------------------------------------------------

const Nav = () => {
  const classes = cn(
    "fixed top-0 left-0 right-0 z-50",
    "flex items-center justify-between gap-8 px-vbig",
    // the mix-blend mode and BG color allows the nav to absorb colors behind it
    "bg-white mix-blend-darken dark:bg-black dark:mix-blend-lighten backdrop-blur transition duration-300"
  );

  return (
    <nav className={classes}>
      <NavLink href="/" className="-ml-8">
        Andy Smith
      </NavLink>
      <div className="flex items-center gap-12">
        <NavLink href="/info">Information</NavLink>
        <ThemeSwitcher />
      </div>
      {/* Phony border offset so the mix-blend-mode doesn't goof with it */}
      <div className="absolute -bottom-1 left-0 h-1 w-full bg-primary-10" />
    </nav>
  );
};

export default Nav;
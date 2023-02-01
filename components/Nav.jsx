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
    <Link
      href={href}
      className={cn(
        "flex items-center h-64 px-12 xs:px-24 hover:text-indigo",
        "font-bold text-sm tracking-wider uppercase",
        isCurrent && "text-indigo",
        className
      )}
      {...attrs}
      legacyBehavior>

        {children}

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

const Nav = () => (
  <nav className="sticky top-0 z-10 flex items-center justify-between gap-8 px-page bg-ground border-b print:hidden">
    <NavLink href="/" className="-ml-12 xs:-ml-24">
      Andy Smith
    </NavLink>
    <div className="flex items-center">
      <NavLink href="/#projects">Projects</NavLink>
      <NavLink href="/about">About</NavLink>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Nav;

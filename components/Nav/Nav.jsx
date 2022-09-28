import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { useTheme } from "next-themes";
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
        className="flex items-center h-64 hover:text-accent transition"
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
          "flex items-center h-64 px-8 hover:text-accent font-medium transition",
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    // setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible, handleScroll]);

  const classes = cn(
    "fixed top-0 left-0 right-0 z-50 border-b",
    "flex items-center justify-between gap-8 px-[var(--page-padding)]",
    "bg-white dark:bg-black backdrop-blur mix-blend-darken dark:mix-blend-lighten transition duration-300",
    !isVisible && "-translate-y-full opacity-0"
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
    </nav>
  );
};

export default Nav;

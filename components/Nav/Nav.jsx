import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import ClientOnly from "components/ClientOnly";
import { useTheme } from "next-themes";
import { CONTACT_LINKS } from "../../constants";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <div className="col-start-2">
        <button
          className={theme === "light" ? "underline" : ""}
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
        <button
          className={theme === "dark" ? "underline" : ""}
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
      </div>
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
      <a className={className} {...attrs}>
        {children}
      </a>
    </Link>
  );
};

const ResumeLink = () => {
  const classes = cn(
    "block w-fit ml-auto",
    "lg:col-start-2 lg:rounded-[100%] lg:border lg:border-primary lg:py-24 lg:px-32 lg:-mx-32 lg:font-mono lg:font-medium lg:text-sm lg:text-center lg:hover:bg-accent"
  );

  return (
    <NavLink href="/resume" className={classes}>
      View Resumé
    </NavLink>
  );
};

const Nav = () => {
  const classes = cn(
    "sticky top-0 flex gap-16 px-[var(--page-padding)]",
    "lg:top-auto lg:fixed lg:right-0 lg:bottom-0 lg:w-[var(--nav-width)]",
    "lg:grid lg:grid-cols-[80px,1fr]",
    "lg:pl-0 lg:pb-[calc(var(--page-padding)/1)] lg:pr-[calc(var(--page-padding)/1)]"
  );

  return (
    <nav className={classes}>
      <span className="w-40 h-40 bg-gray-300 rounded-full lg:ml-auto mix-blend-difference" />
      <NavLink href="/" className="font-base font-medium">
        Andy Smith
        <div className="text-sm opacity-50">Product Designer</div>
      </NavLink>
      <ThemeChanger />
      <ResumeLink />
      <dl className="col-span-2 hidden lg:grid grid-cols-[80px,1fr] gap-x-16 text-sm">
        {CONTACT_LINKS.map(item => (
          <React.Fragment key={item.label}>
            <dt className="font-medium">{item.label}</dt>
            <dd>
              <a
                className="h-32 block font-mono underline underline-offset-4 decoration-accent"
                href={item.href}
              >
                {item.value}
              </a>
            </dd>
          </React.Fragment>
        ))}
      </dl>
      <button className="lg:hidden" type="button">
        Contact
      </button>
    </nav>
  );
};

export default Nav;

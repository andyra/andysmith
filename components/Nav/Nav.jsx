import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import ClientOnly from "components/ClientOnly";
import { useTheme } from "next-themes";
import { CONTACT_LINKS } from "../../constants";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <div className="col-start-2">
        <button
          className="capitalize"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme} Mode
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
    "block w-fit ml-auto transition",
    "lg:col-start-2 lg:rounded-[100%] lg:border lg:border-primary lg:py-16 lg:px-24 lg:-mx-24 lg:font-mono lg:font-medium lg:text-sm lg:text-center lg:hover:bg-accent"
  );

  return (
    <NavLink href="/resume" className={classes}>
      <span className="hidden sm:inline">View</span> Resumé
    </NavLink>
  );
};

const Nav = () => {
  const classes = cn(
    "sticky top-0 flex items-center gap-16 py-8 px-[var(--page-padding)] text-sm",
    "lg:top-auto lg:fixed lg:right-0 lg:bottom-0 lg:w-[var(--nav-width)]",
    "lg:grid lg:grid-cols-[80px,1fr]",
    "lg:pl-0 lg:pb-[calc(var(--page-padding)/1)] lg:pr-[calc(var(--page-padding)/1)]"
  );

  return (
    <nav className={classes}>
      <NavLink href="/" className="col-start-2 font-base font-medium">
        Andy Smith
        <div className="font-normal text-xs lg:text-sm">Product Designer</div>
      </NavLink>
      <ResumeLink />
      <dl className="col-span-2 hidden lg:grid grid-cols-[80px,1fr] gap-x-16 text-sm">
        {CONTACT_LINKS.map(item => (
          <React.Fragment key={item.label}>
            <dt className="font-medium text-right">{item.label}</dt>
            <dd>
              <a
                className="h-32 block font-mono underline underline-offset-4 hover:decoration-wavy decoration-primary hover:text-accent hover:decoration-accent hover:underline-offset-2 transition"
                href={item.href}
              >
                {item.value}
              </a>
            </dd>
          </React.Fragment>
        ))}
        <dt className="font-medium text-right">Theme</dt>
        <dd>
          <ThemeSwitcher />
        </dd>
      </dl>
      <button className="lg:hidden" type="button">
        Contact
      </button>
    </nav>
  );
};

export default Nav;

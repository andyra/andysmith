import React from "react";
import Link from "next/link";
import cn from "classnames";

import { CONTACT_LINKS } from "../constants";

// Subcomponents
// ----------------------------------------------------------------------------

const ResumeLink = () => {
  const classes = cn(
    "flex items-center justify-center gap-8 w-128 h-128 sm:w-160 sm:h-160 rounded-full transition flex-shrink-0",
    "border border-primary text-sm text-center hover:bg-accent",
    "animate-float"
  );

  return (
    <Link href="/info">
      <a className={classes}>
        View
        <br />
        Resumé
      </a>
    </Link>
  );
};

// Component
// ----------------------------------------------------------------------------

const Footer = ({}) => {
  return (
    <footer className="flex flex-wrap bg-ground-accent gap-16 p-[var(--page-padding)]">
      <div className="w-full md:flex-1 flex-shrink-0">
        Andy Smith
        <div className="whitespace-nowrap">Product Designer</div>
      </div>
      <ResumeLink />
      <dl className="self-end grid grid-cols-[64px,1fr] gap-x-16 text-sm w-full xs:w-auto">
        {CONTACT_LINKS.map(item => (
          <React.Fragment key={item.label}>
            <dt className="font-medium xs:text-right">{item.label}</dt>
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
      </dl>
    </footer>
  );
};

export default Footer;

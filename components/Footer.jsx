import React from "react";
import Link from "next/link";
import cn from "classnames";
import { A } from "components/Content";
import { CONTACT_INFO } from "../constants";

// Component
// ----------------------------------------------------------------------------

const Footer = () => (
  <footer className="p-page bg-secondary-25 print:hidden">
    <div className="max-w-screen-xl mx-auto flex gap-16">
      <div className="flex-1">
        <strong className="font-semibold">Andy Smith</strong>
        <div className="text-sm whitespace-nowrap">Product Designer</div>
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center my-page text-sm text-left lg:text-base">
          {CONTACT_INFO.map((item, i) => (
            <>
              <a
                className="underline underline-offset-2 decoration-primary-25 hover:decoration-primary transition"
                href={item.href}
                key={item.label}
              >
                {item.value}
              </a>
              {i < 2 && <span className="hidden md:block">•</span>}
            </>
          ))}
        </div>
        <p className="text-2xs text-primary-50">
          Built with React and Next.js •{" "}
          <A href="https://github.com/andyra/andysmith" newTab>
            View it on GitHub
          </A>
        </p>
      </div>
      <Link href="/about">
        <a
          className={cn(
            "flex items-center justify-center gap-8 w-128 h-128 sm:w-160 sm:h-160 rounded-full transition flex-shrink-0",
            "border-2 border-secondary text-sm text-secondary font-medium text-center",
            "hover:bg-secondary hover:text-ground",
            "animate-float"
          )}
        >
          View
          <br />
          Resumé
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;

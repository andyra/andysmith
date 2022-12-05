import React from "react";
import Head from "next/head";
import Footer from "components/Footer";
import Nav from "components/Nav";
import SkipLink from "components/SkipLink";
import { A } from "components/Content";

const Layout = ({ children, ...props }) => {
  const metaTitle = props.metaTitle
    ? `${props.metaTitle} • Andy Smith`
    : "Andy Smith • Product Designer";

  return (
    <>
      <Head>
        <title key="meta-title">{metaTitle}</title>
      </Head>
      <SkipLink />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <footer className="px-page py-24 bg-tertiary-05 text-center text-2xs print:hidden hidden">
        Built with React and Next.js •{" "}
        <A href="https://github.com/andyra/andysmith" newTab>
          View it on GitHub
        </A>
      </footer>
    </>
  );
};

export default Layout;

import React from "react";
import Head from "next/head";
import Nav from "components/Nav";
import SkipLink from "components/SkipLink";

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
      <footer className="px-page py-24 bg-tertiary-05 text-center text-xs">
        Built with React and Next.js • View it on GitHub
      </footer>
    </>
  );
};

export default Layout;

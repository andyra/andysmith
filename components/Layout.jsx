import React from "react";
import Head from "next/head";
import cn from "classnames";
import Footer from "components/Footer";
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
      <Footer />
    </>
  );
};

export default Layout;
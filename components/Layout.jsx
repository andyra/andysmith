import React from "react";
import Head from "next/head";
import cn from "classnames";
import Content from "components/Content";
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
      <Content as="footer" className="text-center text-xs" py="py-24">
        Built with React and Next.js • View it on GitHub
      </Content>
    </>
  );
};

export default Layout;

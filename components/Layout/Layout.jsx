import React from "react";
import cn from "classnames";
import Nav from "components/Nav";
import SkipLink from "components/SkipLink";

const Layout = ({ children }) => (
  <>
    <SkipLink />
    <Nav />
    <main id="main">{children}</main>
  </>
);

export default Layout;

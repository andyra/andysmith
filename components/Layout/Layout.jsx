import React, { useEffect } from "react";
import cn from "classnames";
import Nav from "components/Nav";
import SkipLink from "components/SkipLink";

const Layout = ({ children }) => {
  // useEffect(() => {
  //   document.getElementById("__next").classList.add(...nextClasses.split(" "));
  // }, [nextClasses]);

  return (
    <>
      <SkipLink />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import cn from "classnames";
import Nav from "components/Nav";
import SkipLink from "components/SkipLink";

// NOTE: Desktop layout starts at screen-lg

const Layout = ({ children, ...props }) => {
  const router = useRouter();
  const isProject = router.pathname.includes("projects");

  const { maxWidth = "max-w-screen-md", metaTitle } = props;

  const nextClasses = cn("lg:flex lg:items-start");

  useEffect(() => {
    document.getElementById("__next").classList.add(...nextClasses.split(" "));
  }, [nextClasses]);

  return (
    <>
      <Head>
        <title key="meta-title">
          {metaTitle
            ? `${metaTitle} • Andy Smith`
            : "Andy Smith • Product Designer"}
        </title>
      </Head>
      <SkipLink />
      {<Nav />}
      <main className="lg:flex-1 px-base">
        <div className={cn(maxWidth, "mx-auto", isProject && "prose")}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;

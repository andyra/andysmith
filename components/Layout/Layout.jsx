import React, { useEffect } from "react";
import Nav from "components/Nav";
import SkipLink from "components/SkipLink";
import { CONTACT_LINKS } from "../../constants";
import styles from "./Layout.module.css";

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <dl>
        {CONTACT_LINKS.map(item => (
          <React.Fragment key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              <a href={item.href}>{item.value}</a>
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </footer>
  );
};

const Layout = ({ children }) => {
  useEffect(() => {
    document.getElementById("__next").classList.add(styles.next);
  }, [styles.next]);

  return (
    <>
      <SkipLink />
      <Nav />
      <main>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

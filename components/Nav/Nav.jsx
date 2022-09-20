import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./Nav.module.css";

const NavLink = ({ href, title }) => {
  const router = useRouter();
  const isCurrent = href === router.asPath;

  const attrs = {};
  if (isCurrent) {
    attrs["aria-current"] = "page";
  }

  const classes = cn(styles.navLink, { [styles.navLinkIsCurrent]: isCurrent });

  return (
    <li>
      <Link href={href}>
        <a className={classes} {...attrs}>
          {title}
        </a>
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <NavLink href="/" title="Andy Smith" />
        <NavLink href="#projects" title="Projects" />
        <NavLink href="/about" title="About" />
      </ul>
    </nav>
  );
};

export default Nav;

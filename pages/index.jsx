import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../constants"
import styles from "./home/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.intro}>
        <p className="text-lg">
          Hello! I'm Andy, a product designer with an affinity for front-end
          development. I've been in tech for 10+ years, aspire for clarity in my
          work, and believe that thoughtful design is essential to successful
          digital products.
        </p>
        <p className="text-lg">View projects ↓</p>
      </div>

      <ul role="list">
        {PROJECTS.map(project => (
          <li key={project.title}>
            <Link href={project.href}>
              <a className={styles.projectLink}>
                <div className={styles.projectContent}>
                  <h2 className="text-lg">{project.title}</h2>
                  <p>{project.details}</p>
                </div>
                <figure className={styles.projectFigure} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

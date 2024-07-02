import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Features from "../components/Features";
import Downloads from "../components/Downloads";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: "black" }}>
          {siteConfig.title}
        </Heading>
        <h2 className="hero__subtitle" style={{ color: "black" }}>
          {siteConfig.tagline}
        </h2>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/get-started"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Turn your mobile into a wireless mouse and keyboard combo with Peyara Remote Mouse.`}
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <main>
        <Downloads />

        <Features />
      </main>
    </Layout>
  );
}

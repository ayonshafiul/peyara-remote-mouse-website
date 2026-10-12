import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Features from "../components/Features";
import Downloads from "../components/Downloads";

const SERVER_REPO = "https://github.com/ayonshafiul/peyara-rust-server";
const CLIENT_REPO = "https://github.com/ayonshafiul/peyara-mouse";

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid}>
        <div>
          <span className={styles.badge}>
            Open source, no ads, works over Wi-Fi
          </span>
          <h1 className={styles.title}>Your phone is your mouse.</h1>
          <p className={styles.subtitle}>
            Peyara turns your phone into a wireless mouse, keyboard and media
            remote. Scan once, control everything. Private, local, and free.
          </p>
          <div className={styles.ctaRow}>
            <Link className="button--primary-cta" to="/docs/get-started">
              Get started
            </Link>
            <a className="button--ghost-cta" href={`${SERVER_REPO}/releases`}>
              Download server
            </a>
          </div>
          <ul className={styles.miniStats}>
            <li>
              <strong>1 min</strong>
              <span>setup with QR pair</span>
            </li>
            <li>
              <strong>~5 MB</strong>
              <span>tiny server app</span>
            </li>
            <li>
              <strong>Local only</strong>
              <span>no cloud, no tracking</span>
            </li>
            <li>
              <strong>Open</strong>
              <span>server and app on GitHub</span>
            </li>
          </ul>
          <div className={styles.osRow}>
            {["Windows", "macOS", "Linux", "Android", "iOS"].map((os) => (
              <span key={os} className={styles.osPill}>
                {os}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>How it works</div>
      <h2 className={styles.sectionTitle}>Three steps, no account.</h2>
      <p className={styles.sectionSub}>
        Both devices just need to be on the same Wi-Fi network.
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <span className={styles.stepNum}>01</span>
          <h3>Install the server</h3>
          <p>
            Get the Rust server for your OS from{" "}
            <a href={`${SERVER_REPO}/releases`}>releases</a> and run it. It
            shows a QR code.
          </p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>02</span>
          <h3>Install the app</h3>
          <p>
            Grab Peyara on your phone from{" "}
            <a href={CLIENT_REPO}>GitHub</a>, Google Play or the App Store.
          </p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>03</span>
          <h3>Scan and control</h3>
          <p>
            Tap <code>+</code> in the app, scan the QR, hit connect. Move,
            type, and control media.
          </p>
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className={styles.ossBanner}>
      <div className={styles.ossInner}>
        <div>
          <div className={styles.eyebrow}>Free and open source</div>
          <h2>No ads. No trackers.</h2>
          <p>
            The desktop server is written in Rust, and the mobile client is
            fully open. Star, fork, or contribute.
          </p>
          <div className={styles.ctaRow}>
            <a className="button--primary-cta" href={SERVER_REPO}>
              Star on GitHub
            </a>
            <Link className="button--ghost-cta" to="/docs/get-started">
              Read the docs
            </Link>
          </div>
        </div>
        <div className={styles.repoCards}>
          <a className={styles.repoCard} href={SERVER_REPO}>
            <strong>peyara-rust-server</strong>
            <small>github.com/ayonshafiul/peyara-rust-server</small>
          </a>
          <a className={styles.repoCard} href={CLIENT_REPO}>
            <strong>peyara-mouse</strong>
            <small>github.com/ayonshafiul/peyara-mouse</small>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Phone as Wireless Mouse, Keyboard & Media Remote"
      description="Peyara Remote Mouse turns your phone into a wireless mouse, keyboard and media remote. Tiny ~5 MB open-source server for Windows, macOS and Linux. Pair by QR over Wi-Fi. No ads, no tracking."
      keywords={[
        "remote mouse",
        "phone as mouse",
        "wireless touchpad app",
        "remote keyboard",
        "media remote",
        "open source",
      ]}
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Peyara Remote Mouse",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Windows, macOS, Linux, Android, iOS",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Turn your phone into a wireless mouse, keyboard and media remote. Tiny open-source server with QR pairing over Wi-Fi. No ads, no tracking.",
            downloadUrl:
              "https://github.com/ayonshafiul/peyara-rust-server/releases",
            author: { "@type": "Organization", name: "Peyara" },
          })}
        </script>
      </Head>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <OpenSource />
        <Downloads />
      </main>
    </Layout>
  );
}

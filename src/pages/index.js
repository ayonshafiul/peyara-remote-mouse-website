import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import HeroScene from "../components/HeroScene";
import Features from "../components/Features";
import StreamDeck from "../components/StreamDeck";
import Downloads from "../components/Downloads";

const SERVER_REPO = "https://github.com/ayonshafiul/peyara-rust-server";
const CLIENT_REPO = "https://github.com/ayonshafiul/peyara-mouse";
const PRESETS_REPO = "https://github.com/ayonshafiul/peyara-actions";

const PLATFORMS = ["Windows", "macOS", "Linux", "Android", "iOS"];

function Hero() {
  return (
    <header>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>
            Your phone is your mouse.
            <br />
            Now it&apos;s your <span className={styles.titleAccent}>shortcut&nbsp;deck.</span>
          </h1>
          <p className={styles.subtitle}>
            Peyara turns your phone into a wireless touchpad, keyboard and media
            remote — plus the free Deck: one-tap shortcuts for the desktop app
            in focus. Local, private, open source.
          </p>
          <div className={styles.ctaRow}>
            <Link className="button--primary-cta" to="/docs/get-started">
              Get started
            </Link>
            <a className="button--ghost-cta" href={`${SERVER_REPO}/releases`}>
              Download server
            </a>
          </div>
          <p className={styles.platformLine}>
            {PLATFORMS.map((os, i) => (
              <React.Fragment key={os}>
                {i > 0 ? <span className={styles.platformDot}>·</span> : null}
                {os}
              </React.Fragment>
            ))}
            <span className={styles.platformDot}>—</span>
            <strong>free, no ads, no account</strong>
          </p>
        </div>

        <HeroScene />
      </div>
    </header>
  );
}

function HowItWorks() {
  return (
    <section className={`${styles.container} ${styles.section}`} id="how-it-works">
      <div className={styles.eyebrow}>How it works</div>
      <h2 className={styles.sectionTitle}>Four steps, no account.</h2>
      <p className={styles.sectionSub}>
        Both devices just need to be on the same Wi-Fi network.
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <span className={styles.stepNum}>01</span>
          <h3>Install the server</h3>
          <p>
            Get the tiny Rust server from{" "}
            <a href={`${SERVER_REPO}/releases`}>releases</a> and run it. It shows
            a QR code.
          </p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>02</span>
          <h3>Install the app</h3>
          <p>
            Grab Peyara on your phone from Google Play, the App Store or{" "}
            <a href={CLIENT_REPO}>GitHub</a>.
          </p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>03</span>
          <h3>Scan and connect</h3>
          <p>
            Tap <code>+</code> in the app and scan the QR code. You only pair
            once per computer.
          </p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>04</span>
          <h3>Open the Deck</h3>
          <p>
            From the touchpad, tap the deck icon. Shortcuts for the app in focus
            are ready to fire.
          </p>
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className={`${styles.container} ${styles.section}`}>
      <div className={styles.ossGrid}>
        <div>
          <div className={styles.eyebrow}>Free and open source</div>
          <h2>No ads. No trackers.</h2>
          <p>
            The desktop server is written in Rust, the mobile client is fully
            open, and every Deck preset lives in a public repo.
          </p>
          <div className={styles.ctaRow}>
            <a className="button--primary-cta" href={SERVER_REPO}>
              Star on GitHub
            </a>
            <Link className="button--ghost-cta" to="/docs/deck">
              How the Deck works
            </Link>
          </div>
        </div>
        <div className={styles.repoList}>
          <a className={styles.repoRow} href={SERVER_REPO}>
            <span>
              <span className={styles.repoName}>peyara-rust-server</span>
            </span>
            <span className={styles.repoDesc}>Desktop server</span>
            <span className={styles.repoArrow}>↗</span>
          </a>
          <a className={styles.repoRow} href={CLIENT_REPO}>
            <span>
              <span className={styles.repoName}>peyara-mouse</span>
            </span>
            <span className={styles.repoDesc}>Mobile app</span>
            <span className={styles.repoArrow}>↗</span>
          </a>
          <a className={styles.repoRow} href={PRESETS_REPO}>
            <span>
              <span className={styles.repoName}>peyara-actions</span>
            </span>
            <span className={styles.repoDesc}>Deck presets</span>
            <span className={styles.repoArrow}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Is the Deck really free?",
    a: "Yes. The Deck is part of the mobile app, every bundled preset is free, and the preset library is open source. There is no subscription and no extra hardware to buy.",
  },
  {
    q: "Do I need to install anything else on my PC?",
    a: "No. The Deck works through the same Peyara desktop server that handles the touchpad, keyboard and media controls.",
  },
  {
    q: "How does the Deck know which app is open?",
    a: "The server and app track which desktop app has focus, and the Deck switches to the matching preset automatically. You can also pick an app yourself.",
  },
  {
    q: "Can I add shortcuts for my own app?",
    a: "Yes. Search and multi-select actions to build a set, arrange columns and drag keys into order. If a preset is missing entirely, add it to the open peyara-actions repo with a pull request.",
  },
  {
    q: "Which computers and phones are supported?",
    a: "The server runs on Windows, macOS and Linux. The app is available for Android on Google Play and for iPhone and iPad on the App Store.",
  },
];

function Faq() {
  return (
    <section className={`${styles.container} ${styles.section}`} id="faq">
      <div className={styles.eyebrow}>FAQ</div>
      <h2 className={styles.sectionTitle}>Quick answers.</h2>
      <p className={styles.sectionSub}>
        Everything else lives in the docs — or ask on GitHub.
      </p>
      <div className={styles.faqList}>
        {FAQ.map((item) => (
          <details key={item.q} className={styles.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Wireless Mouse, Keyboard & Free Shortcut Deck for Your PC"
      description="Peyara turns your phone into a wireless mouse, keyboard and media remote — plus the free Deck: one-tap shortcuts for the focused desktop app, a Stream Deck alternative built in. Tiny open-source server for Windows, macOS and Linux. Pair by QR over Wi-Fi."
      keywords={[
        "remote mouse",
        "phone as mouse",
        "wireless touchpad app",
        "remote keyboard",
        "media remote",
        "stream deck alternative",
        "free stream deck alternative",
        "mobile macro pad",
        "app shortcuts remote",
        "open source remote mouse",
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
              "Wireless mouse, keyboard, media remote and a free per-app shortcut deck for your PC — a Stream Deck alternative with no extra hardware. Tiny open-source server with QR pairing over Wi-Fi. No ads, no tracking.",
            downloadUrl:
              "https://github.com/ayonshafiul/peyara-rust-server/releases",
            author: { "@type": "Organization", name: "Peyara" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      </Head>
      <main>
        <Hero />
        <StreamDeck />
        <Features />
        <HowItWorks />
        <OpenSource />
        <Faq />
        <Downloads />
      </main>
    </Layout>
  );
}

import React from "react";
import styles from "../pages/index.module.css";

const SERVER_REPO = "https://github.com/ayonshafiul/peyara-rust-server";
const CLIENT_REPO = "https://github.com/ayonshafiul/peyara-mouse";

export default function Downloads() {
  return (
    <section className={styles.downloadSection} id="download">
      <div className={styles.eyebrow}>Download</div>
      <h2 className={styles.sectionTitle}>Set up in under a minute.</h2>
      <p className={styles.sectionSub}>
        Install the lightweight Rust server on your computer, grab the mobile
        app, and pair with a QR code.
      </p>
      <div className={styles.dlGrid}>
        <div className={styles.dlCard}>
          <h3>Desktop Server</h3>
          <p>
            Tiny (~5 MB) native Rust server for Windows, macOS and Linux.
            Runs quietly in the background.
          </p>
          <div className={styles.dlBtns}>
            <a
              className={`${styles.dlBtn} ${styles.dlBtnPrimary}`}
              href={`${SERVER_REPO}/releases`}
            >
              Latest release
            </a>
            <a className={styles.dlBtn} href="/docs/Installation/windows">
              Windows
            </a>
            <a className={styles.dlBtn} href="/docs/Installation/mac">
              macOS
            </a>
            <a className={styles.dlBtn} href="/docs/Installation/linux">
              Linux
            </a>
          </div>
          <div className={styles.dlNote}>
            Source: <a href={SERVER_REPO}>ayonshafiul/peyara-rust-server</a>
          </div>
        </div>
        <div className={styles.dlCard}>
          <h3>Mobile App</h3>
          <p>
            Touchpad, keyboard, media and clipboard controls for Android and
            iOS.
          </p>
          <div className={styles.dlBtns}>
            <a
              className={`${styles.dlBtn} ${styles.dlBtnPrimary}`}
              href="https://play.google.com/store/apps/details?id=io.github.ayonshafiul.peyara"
            >
              Google Play
            </a>
            <a
              className={styles.dlBtn}
              href="https://apps.apple.com/us/app/peyara-remote-mouse/id6743374036"
            >
              App Store
            </a>
            <a className={styles.dlBtn} href={CLIENT_REPO}>
              GitHub
            </a>
          </div>
          <div className={styles.dlNote}>
            Source: <a href={CLIENT_REPO}>ayonshafiul/peyara-mouse</a>
          </div>
        </div>
      </div>
    </section>
  );
}

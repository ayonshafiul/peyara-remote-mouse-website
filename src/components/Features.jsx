import React from "react";
import styles from "../pages/index.module.css";

const FEATURES = [
  {
    title: "Instant Wi-Fi Connect",
    text: "Scan a QR code once. Peyara auto-discovers your PC on the same network and reconnects in seconds.",
  },
  {
    title: "Precision Touchpad",
    text: "Single tap, double tap, two-finger scroll, two-finger right-click and three-finger drag.",
  },
  {
    title: "Full Keyboard",
    text: "Type from your phone with your own mobile keyboard. Enter, backspace and capitals supported.",
  },
  {
    title: "Media Remote",
    text: "Play, pause, skip tracks and change volume from the couch. Good for movies and presentations.",
  },
  {
    title: "Clipboard Sync",
    text: "Send links, notes and snippets from phone to PC, or pull text back, and paste instantly.",
  },
  {
    title: "Private and Open Source",
    text: "Local-only Wi-Fi traffic, no ads, no tracking. Server and app are free and open on GitHub.",
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Features</div>
      <h2 className={styles.sectionTitle}>Everything a remote needs.</h2>
      <p className={styles.sectionSub}>
        Mouse, keyboard, media and clipboard over your local network.
      </p>
      <div className={styles.cardGrid}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.card}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

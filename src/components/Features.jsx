import React from "react";
import { Icon } from "@iconify/react";
import styles from "../pages/index.module.css";

const FEATURES = [
  {
    icon: "lucide:layout-grid",
    title: "The free Deck",
    text: "A grid of one-tap shortcuts for the app in focus — like a Stream Deck, minus the hardware and the price. Hundreds of presets included.",
  },
  {
    icon: "lucide:crosshair",
    title: "Follows your focus",
    text: "Photoshop, Figma, VS Code — the grid reloads with each app's shortcuts as your focus changes. Prefer a fixed deck? Pick an app yourself.",
  },
  {
    icon: "lucide:sliders-horizontal",
    title: "Your layout, your rules",
    text: "Search actions, multi-select, add custom columns and drag keys into place. Import your own set and keep it on device.",
  },
  {
    icon: "lucide:touchpad",
    title: "Precision touchpad",
    text: "Tap, double-tap, two-finger scroll and right-click. Landscape or portrait layouts with a side scroll wheel.",
  },
  {
    icon: "lucide:keyboard",
    title: "Keyboard, media & clipboard",
    text: "Type with your own mobile keyboard, control playback and volume, and send text to the desktop clipboard.",
  },
  {
    icon: "lucide:shield-check",
    title: "Private by design",
    text: "Everything stays on your local Wi-Fi. No account, no ads, no tracking — the server, app and presets are open source.",
  },
];

export default function Features() {
  return (
    <section className={`${styles.container} ${styles.section}`} id="features">
      <div className={styles.eyebrow}>Everything in one app</div>
      <h2 className={styles.sectionTitle}>A remote and a shortcut deck. One app.</h2>
      <p className={styles.sectionSub}>
        Mouse, keyboard, media, clipboard and app-aware shortcuts — all over
        your local network.
      </p>
      <div className={styles.featureGrid}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.feature}>
            <span className={styles.featureIcon}>
              <Icon icon={f.icon} width={19} height={19} />
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import styles from "../pages/index.module.css";

const ICONS = {
  deck: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  touchpad: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <path d="M9 7.5h6M12 12v4" />
      <circle cx="12" cy="17.5" r="1" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2.5" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M9.5 14h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10v-6L12 2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

const FEATURES = [
  {
    icon: "deck",
    title: "Free Stream Deck",
    text: "Tap to fire shortcuts and macros on your PC. Hundreds of presets for popular desktop apps ship with the app.",
    tag: "Free",
  },
  {
    icon: "focus",
    title: "Follows your focus",
    text: "Switch from Photoshop to Figma or VS Code and the Deck switches with you. Prefer a fixed deck? Pick an app yourself instead.",
  },
  {
    icon: "sliders",
    title: "Your layout, your rules",
    text: "Search actions, multi-select, add custom columns and drag keys into place. Import your own set and keep it on device.",
  },
  {
    icon: "touchpad",
    title: "Precision touchpad",
    text: "Tap, double-tap, two-finger scroll and right-click. Landscape or portrait layouts with a side scroll wheel.",
  },
  {
    icon: "keyboard",
    title: "Keyboard, media & clipboard",
    text: "Type with your own mobile keyboard, control playback and volume, and send text to the desktop clipboard.",
  },
  {
    icon: "shield",
    title: "Private by design",
    text: "Everything stays on your local Wi-Fi. No account, no ads, no tracking — and the server, app and presets are open source.",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.eyebrow}>Everything in one app</div>
      <h2 className={styles.sectionTitle}>
        A remote and a shortcut deck. One app.
      </h2>
      <p className={styles.sectionSub}>
        Mouse, keyboard, media, clipboard and app-aware shortcuts — all over
        your local network.
      </p>
      <div className={styles.cardGrid}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.card}>
            {f.tag ? <span className={styles.cardTag}>{f.tag}</span> : null}
            <span className={styles.cardIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {ICONS[f.icon]}
              </svg>
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

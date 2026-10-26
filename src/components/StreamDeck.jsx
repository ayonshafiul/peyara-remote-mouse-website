import React from "react";
import Link from "@docusaurus/Link";
import styles from "../pages/index.module.css";
import AllDecksMock from "./AllDecksMock";

const PRESETS_REPO = "https://github.com/ayonshafiul/peyara-actions";

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

const POINTS = [
  "A square grid of one-tap shortcuts for whichever app has focus — Photoshop open? Every square is a Photoshop action.",
  "Switch focus to another app and the grid reloads with that app's shortcuts. No switching by hand — unless you want to.",
  "Hundreds of ready-made presets for popular apps — browse, search and multi-select actions to build a set.",
  "Custom columns and drag-to-reorder keys. Presets are open source, no account needed.",
];

export default function StreamDeck() {
  return (
    <section className={`${styles.container} ${styles.section}`} id="deck">
      <div className={styles.deckSplit}>
        <div>
          <div className={styles.eyebrow}>The free Deck</div>
          <h2 className={styles.sectionTitle}>
            All your shortcuts, under your thumb.
          </h2>
          <p className={styles.sectionSub}>
            Open the Deck from the touchpad and your phone shows a grid of
            shortcut keys for the app that&apos;s open on your desktop. Tap a
            square and the action fires on your PC.
          </p>
          <ul className={styles.checkList}>
            {POINTS.map((point) => (
              <li key={point}>
                {CHECK}
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className={styles.ctaRow}>
            <Link className="button--primary-cta" to="/docs/deck">
              Explore the Deck
            </Link>
            <a className="button--ghost-cta" href={PRESETS_REPO}>
              Browse presets
            </a>
          </div>
        </div>
        <div className={styles.deckSplitVisual}>
          <AllDecksMock />
        </div>
      </div>
    </section>
  );
}

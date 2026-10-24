import React from "react";
import Link from "@docusaurus/Link";
import DeckMock from "./DeckMock";
import styles from "../pages/index.module.css";

const PRESETS_REPO = "https://github.com/ayonshafiul/peyara-actions";

export default function StreamDeck() {
  return (
    <section className={styles.deckSection} id="deck">
      <div className={styles.deckPanel}>
        <div className={styles.deckCopy}>
          <div className={styles.eyebrow}>Free Stream Deck</div>
          <h2 className={styles.deckPanelTitle}>
            All your shortcuts,
            <br />
            under your thumb.
          </h2>
          <p className={styles.deckPanelSub}>
            Open the Deck from the touchpad and your phone becomes a shortcut
            pad for the desktop app in focus. Hundreds of ready-made presets,
            zero extra hardware.
          </p>
          <ul className={styles.deckList}>
            <li>Auto-follows the focused desktop app, so the right keys are always up.</li>
            <li>Hundreds of presets for popular apps — browse, search and multi-select actions.</li>
            <li>Build your own deck with custom columns and drag-to-reorder.</li>
            <li>Presets are open source and sync with the app, no account needed.</li>
          </ul>
          <div className={styles.ctaRow}>
            <Link className="button--primary-cta" to="/docs/stream-deck">
              Explore the Deck
            </Link>
            <a className="button--ghost-cta" href={PRESETS_REPO}>
              Browse presets
            </a>
          </div>
        </div>

        <div className={styles.deckVisual}>
          <div className={styles.focusToast}>
            <span className={styles.focusToastIcon}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="7" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              </svg>
            </span>
            <span>
              <strong>Photoshop focused</strong>
              <small>Deck switched automatically</small>
            </span>
          </div>
          <DeckMock />
        </div>
      </div>
    </section>
  );
}

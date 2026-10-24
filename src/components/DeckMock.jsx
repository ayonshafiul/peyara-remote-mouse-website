import React from "react";
import styles from "../pages/index.module.css";

const DEFAULT_ACTIONS = [
  { label: "Move", hint: "V" },
  { label: "Brush", hint: "B" },
  { label: "Eraser", hint: "E" },
  { label: "Undo", hint: "Ctrl + Z", accent: true },
  { label: "Redo", hint: "Ctrl + Shift + Z" },
  { label: "Zoom", hint: "Z" },
  { label: "Fit", hint: "Ctrl + 0" },
  { label: "New layer", hint: "Ctrl + Shift + N" },
  { label: "Deselect", hint: "Ctrl + D" },
  { label: "Colors", hint: "D" },
  { label: "Save", hint: "Ctrl + S", accent: true },
  { label: "Export", hint: "Ctrl + Shift + E" },
];

export default function DeckMock({
  app = "Photoshop",
  appGlyph = "Ps",
  appColor = "#31a8ff",
  appBg = "#001e36",
  actions = DEFAULT_ACTIONS,
  tabs = ["Ps", "Fig", "VS", "Chr"],
  className = "",
}) {
  return (
    <div className={`${styles.phone} ${className}`} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.deckTop}>
          <span className={styles.deckBrandDot} />
          Deck
          <span className={styles.deckAuto}>
            <span className={styles.deckAutoDot} />
            AUTO
          </span>
        </div>

        <div className={styles.deckTabs}>
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`${styles.deckTab} ${
                i === 0 ? styles.deckTabActive : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className={styles.deckAppRow}>
          <span
            className={styles.deckAppGlyph}
            style={{ color: appColor, background: appBg }}
          >
            {appGlyph}
          </span>
          <span>
            <span className={styles.deckAppName}>{app}</span>
            <br />
            <span className={styles.deckAppMeta}>focused on desktop</span>
          </span>
        </div>

        <div className={styles.deckGrid}>
          {actions.map((action) => (
            <div
              key={action.label}
              className={`${styles.deckKey} ${
                action.accent ? styles.deckKeyAccent : ""
              }`}
            >
              <span className={styles.deckKeyLabel}>{action.label}</span>
              <span className={styles.deckKeyHint}>{action.hint}</span>
            </div>
          ))}
        </div>

        <div className={styles.deckFooter}>
          <span className={styles.deckStatusDot} />
          Connected · DESKTOP-57EAJFT
        </div>
      </div>
    </div>
  );
}

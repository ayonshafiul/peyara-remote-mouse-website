import React from "react";
import { Icon } from "@iconify/react";
import styles from "../pages/index.module.css";
import { photoshopIcon } from "./deckAppIcons";

const STATUS_ICONS = (
  <>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="14" width="3.4" height="7" rx="1" />
      <rect x="7.4" y="10.5" width="3.4" height="10.5" rx="1" />
      <rect x="12.8" y="7" width="3.4" height="14" rx="1" />
      <rect x="18.2" y="3.5" width="3.4" height="17.5" rx="1" opacity="0.5" />
    </svg>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 9a14 14 0 0 1 19 0" />
      <path d="M5.5 12.5a9.5 9.5 0 0 1 13 0" />
      <path d="M8.5 16a5.5 5.5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
    <svg width="14" height="10" viewBox="0 0 30 20">
      <rect
        x="1"
        y="1.5"
        width="24"
        height="17"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <rect x="4" y="4.5" width="15" height="11" rx="2" fill="currentColor" />
      <rect x="27" y="7" width="2.5" height="6" rx="1" fill="currentColor" opacity="0.5" />
    </svg>
  </>
);

/* Shortcut keys for the focused app — Photoshop preset */
const KEYS = [
  { label: "Move", hint: "V" },
  { label: "Brush", hint: "B" },
  { label: "Eraser", hint: "E" },
  { label: "Undo", hint: "Ctrl+Z", hot: true },
  { label: "Redo", hint: "Ctrl+Shift+Z" },
  { label: "Zoom", hint: "Z" },
  { label: "Fit", hint: "Ctrl+0" },
  { label: "New Layer", hint: "Ctrl+Shift+N" },
  { label: "Deselect", hint: "Ctrl+D" },
  { label: "Colors", hint: "D" },
  { label: "Save", hint: "Ctrl+S" },
  { label: "Export", hint: "Ctrl+Shift+E" },
];

export default function DeckMock({ app = "Photoshop", icon = photoshopIcon, keys = KEYS, className = "" }) {
  return (
    <div className={`${styles.phone} ${className}`} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.dStatus}>
          <span className={styles.dTime}>5:43</span>
          <span className={styles.dStatusIcons}>{STATUS_ICONS}</span>
        </div>

        <div className={styles.kHead}>
          <span className={styles.kHeadIcon}>
            <Icon icon={icon} height="19" />
          </span>
          <span>
            <span className={styles.kHeadName}>{app}</span>
            <br />
            <span className={styles.kHeadMeta}>focused on desktop</span>
          </span>
          <span className={styles.dSyncPill}>
            <span className={styles.dSyncDot} />
            AUTO
          </span>
        </div>

        <div className={styles.kGrid}>
          {keys.map((key) => (
            <div
              key={key.label}
              className={`${styles.kKey} ${key.hot ? styles.kHot : ""}`}
            >
              <span className={styles.kLabel}>{key.label}</span>
              <span className={styles.kHint}>{key.hint}</span>
            </div>
          ))}
        </div>

        <span className={styles.dGesture} />
      </div>
    </div>
  );
}

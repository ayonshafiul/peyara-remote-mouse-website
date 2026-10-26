import React from "react";
import { Icon } from "@iconify/react";
import styles from "../pages/index.module.css";
import {
  photoshopIcon,
  chromeIcon,
  figmaIcon,
  vscodeIcon,
  androidStudioIcon,
  illustratorIcon,
  spotifyIcon,
  discordIcon,
  slackIcon,
} from "./deckAppIcons";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* Mode toolbar icons, in the app's order */
const MODE_ICONS = [
  {
    id: "deck",
    active: true,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
      </>
    ),
  },
  {
    id: "touchpad",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2.6" />
        <path d="M9 7.5h6M12 12v4" />
      </>
    ),
  },
  {
    id: "keyboard",
    icon: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="2.6" />
        <path d="M6.5 10h.01M10.5 10h.01M14.5 10h.01M18.5 10h.01M6.5 13.5h.01M18.5 13.5h.01M9.5 13.5h5" />
      </>
    ),
  },
  {
    id: "media",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <path d="m10 8.8 5.4 3.2L10 15.2V8.8Z" />
      </>
    ),
  },
  {
    id: "clipboard",
    icon: (
      <>
        <rect x="6" y="4.5" width="12" height="16" rx="2.2" />
        <path d="M9.5 4.5c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2" />
      </>
    ),
  },
  {
    id: "files",
    icon: (
      <path d="M3.5 7.3c0-1.2 1-2.2 2.2-2.2h3.2l2 2.2h7.4c1.2 0 2.2 1 2.2 2.2v7.9c0 1.2-1 2.2-2.2 2.2H5.7c-1.2 0-2.2-1-2.2-2.2V7.3Z" />
    ),
  },
  {
    id: "settings",
    icon: (
      <>
        <circle cx="12" cy="12" r="3.1" />
        <path d="M12 2.9v2.3M12 18.8v2.3M21.1 12h-2.3M5.2 12H2.9M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6M18.5 18.5l-1.6-1.6M7.1 7.1 5.5 5.5" />
      </>
    ),
  },
];

const REFRESH_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" {...stroke}>
    <path d="M20 12a8 8 0 1 1-2.4-5.7" />
    <path d="M20 3.8v4.4h-4.4" />
  </svg>
);

const SEARCH_ICON = (
  <svg width="9" height="9" viewBox="0 0 24 24" {...stroke} strokeWidth="2.4">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 4.5 4.5" />
  </svg>
);

const GRID_VIEW_ICON = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="2" />
    <rect x="13" y="3" width="8" height="8" rx="2" />
    <rect x="3" y="13" width="8" height="8" rx="2" />
    <rect x="13" y="13" width="8" height="8" rx="2" />
  </svg>
);

const LIST_VIEW_ICON = (
  <svg width="10" height="10" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6">
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </svg>
);

const CARD_MENU_DOTS = (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
    <circle cx="1.6" cy="5" r="1.2" />
    <circle cx="5" cy="5" r="1.2" />
    <circle cx="8.4" cy="5" r="1.2" />
  </svg>
);

const STATUS_ICONS = (
  <>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="14" width="3.4" height="7" rx="1" />
      <rect x="7.4" y="10.5" width="3.4" height="10.5" rx="1" />
      <rect x="12.8" y="7" width="3.4" height="14" rx="1" />
      <rect x="18.2" y="3.5" width="3.4" height="17.5" rx="1" opacity="0.5" />
    </svg>
    <svg width="11" height="11" viewBox="0 0 24 24" {...stroke} strokeWidth="2.2">
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

/* App presets shown in the deck grid — mirrors the real app's All Decks view */
const DEFAULT_APPS = [
  { name: "Photoshop", icon: photoshopIcon, count: 18, current: true },
  { name: "Chrome", icon: chromeIcon, count: 12, menu: true },
  { name: "Figma", icon: figmaIcon, count: 15 },
  { name: "VS Code", icon: vscodeIcon, count: 20, menu: true },
  { name: "Android Studio", icon: androidStudioIcon, count: 14 },
  { name: "Illustrator", icon: illustratorIcon, count: 10 },
  { name: "Spotify", icon: spotifyIcon, count: 8, menu: true },
  { name: "Discord", icon: discordIcon, count: 9 },
  { name: "Slack", icon: slackIcon, count: 7 },
];

export default function AllDecksMock({ apps = DEFAULT_APPS, className = "" }) {
  return (
    <div className={`${styles.phone} ${className}`} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.dStatus}>
          <span className={styles.dTime}>5:43</span>
          <span className={styles.dStatusIcons}>{STATUS_ICONS}</span>
        </div>

        <div className={styles.dModes}>
          {MODE_ICONS.map((mode) => (
            <span
              key={mode.id}
              className={`${styles.dModeBtn} ${
                mode.active ? styles.dModeBtnActive : ""
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" {...stroke}>
                {mode.icon}
              </svg>
            </span>
          ))}
        </div>

        <div className={styles.dToolbar}>
          <span className={styles.dToolBtn} aria-hidden="true">
            {GRID_VIEW_ICON}
          </span>
          <span className={`${styles.dToolBtn} ${styles.dToolBtnDim}`} aria-hidden="true">
            {LIST_VIEW_ICON}
          </span>
          <span className={styles.dStepper}>
            <span className={styles.dToolBtn} aria-hidden="true">
              −
            </span>
            <span className={styles.dStepVal}>3 × 3</span>
            <span className={styles.dToolBtn} aria-hidden="true">
              +
            </span>
          </span>
          <span className={styles.dToolBtn} aria-hidden="true">
            {REFRESH_ICON}
          </span>
          <span className={styles.dSyncPill}>
            <span className={styles.dSyncDot} />
            AUTO SYNC
          </span>
        </div>

        <div className={styles.dHeader}>
          <span className={styles.dHeaderTitle}>All Decks</span>
          <span className={styles.dSearch}>
            {SEARCH_ICON}
            Search decks
          </span>
          <span className={styles.dAddBtn} aria-hidden="true">
            +
          </span>
        </div>

        <div className={styles.dGrid}>
          {apps.map((app) => (
            <div
              key={app.name}
              className={`${styles.dCard} ${
                app.current ? styles.dCardCurrent : ""
              }`}
            >
              {app.menu ? (
                <span className={styles.dCardMenu}>{CARD_MENU_DOTS}</span>
              ) : null}
              <span className={styles.dAppIcon}>
                <Icon icon={app.icon} height="32" />
              </span>
              <span className={styles.dAppName}>{app.name}</span>
              <span className={styles.dAppCount}>{app.count} Shortcuts</span>
            </div>
          ))}
        </div>

        <span className={styles.dGesture} />
      </div>
    </div>
  );
}

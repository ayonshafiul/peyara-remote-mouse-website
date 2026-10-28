import React from "react";
import { Icon } from "@iconify/react";
import styles from "../pages/index.module.css";
import StatusBar from "./StatusBar";
import { PHOTOSHOP_KEYS } from "./deckKeys";
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

/* Mode toolbar icons, in the app's order */
const MODE_ICONS = [
  { id: "deck", active: true, icon: "lucide:layout-grid" },
  { id: "touchpad", icon: "lucide:touchpad" },
  { id: "keyboard", icon: "lucide:keyboard" },
  { id: "media", icon: "lucide:circle-play" },
  { id: "clipboard", icon: "lucide:clipboard" },
  { id: "files", icon: "lucide:folder" },
  { id: "settings", icon: "lucide:settings" },
];

/* Apps with ready-made presets — scrolling marquee below the phone */
const DEFAULT_APPS = [
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Chrome", icon: chromeIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Android Studio", icon: androidStudioIcon },
  { name: "Illustrator", icon: illustratorIcon },
  { name: "Spotify", icon: spotifyIcon },
  { name: "Discord", icon: discordIcon },
  { name: "Slack", icon: slackIcon },
];

export default function AllDecksMock({
  apps = DEFAULT_APPS,
  app = "Photoshop",
  icon = photoshopIcon,
  keys = PHOTOSHOP_KEYS,
}) {
  return (
    <div className={styles.deckShowcase}>
      <div className={styles.phone} aria-hidden="true">
        <div className={styles.phoneScreen}>
          <div className={styles.dStatus}>
            <span className={styles.dTime}>5:43</span>
            <StatusBar />
          </div>

          <div className={styles.dModes}>
            {MODE_ICONS.map((mode) => (
              <span
                key={mode.id}
                className={`${styles.dModeBtn} ${
                  mode.active ? styles.dModeBtnActive : ""
                }`}
              >
                <Icon icon={mode.icon} width={15} height={15} />
              </span>
            ))}
          </div>

          <div className={styles.dToolbar}>
            <span className={styles.dToolBtn} aria-hidden="true">
              <Icon icon="lucide:layout-grid" width={10} height={10} />
            </span>
            <span className={`${styles.dToolBtn} ${styles.dToolBtnDim}`} aria-hidden="true">
              <Icon icon="lucide:align-justify" width={10} height={10} />
            </span>
            <span className={styles.dStepper}>
              <span className={styles.dToolBtn} aria-hidden="true">
                <Icon icon="lucide:minus" width={10} height={10} />
              </span>
              <span className={styles.dStepVal}>3 × 4</span>
              <span className={styles.dToolBtn} aria-hidden="true">
                <Icon icon="lucide:plus" width={10} height={10} />
              </span>
            </span>
          <span
            className={`${styles.dToolBtn} ${styles.dToolBtnAccent}`}
            aria-hidden="true"
          >
            <Icon icon="lucide:rotate-cw" width={12} height={12} />
          </span>
            <span className={styles.dSyncPill}>
              <span className={styles.dSyncDot} />
              AUTO SYNC
            </span>
          </div>

          <div className={styles.dHeader}>
            <span className={styles.dHeaderApp}>
              <Icon icon={icon} height={13} />
            </span>
            <span className={styles.dHeaderTitle}>{app}</span>
            <span className={styles.dSearch}>
              <Icon icon="lucide:search" width={9} height={9} />
              Search actions
            </span>
            <span className={styles.dAddBtn} aria-hidden="true">
              <Icon icon="lucide:plus" width={12} height={12} />
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
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...apps, ...apps].map((supported, i) => (
            <span key={`${supported.name}-${i}`} className={styles.marqueeItem}>
              <Icon icon={supported.icon} height={18} />
              {supported.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../pages/index.module.css";
import DeckMock from "./DeckMock";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* Touchpad toolbar — first tool (pointer) active, as in the real app */
const TOUCH_MODES = [
  {
    id: "pointer",
    active: true,
    icon: <path d="M6.5 4.5 17 11l-4.6 1.2L9.8 17.5z" />,
  },
  {
    id: "grid",
    icon: (
      <>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
      </>
    ),
  },
  {
    id: "keyboard",
    icon: (
      <>
        <rect x="3" y="6.5" width="18" height="11" rx="2.2" />
        <path d="M7 10h.01M10.5 10h.01M14 10h.01M17 10h.01M7 13.5h.01M17 13.5h.01M10 13.5h4" />
      </>
    ),
  },
  {
    id: "arrows",
    icon: (
      <path d="M12 3.5 14 6.5h-4zM12 20.5l2-3h-4zM3.5 12l3-2v4zM20.5 12l-3 2v-4z" />
    ),
  },
  {
    id: "clipboard",
    icon: (
      <>
        <rect x="6.5" y="4.5" width="11" height="15" rx="2" />
        <path d="M9.5 4.5c0-1 1.1-1.8 2.5-1.8s2.5.8 2.5 1.8" />
      </>
    ),
  },
  {
    id: "phone",
    icon: (
      <>
        <rect x="7.5" y="3" width="9" height="18" rx="2.2" />
        <path d="M10.5 17.5h3" />
      </>
    ),
  },
  {
    id: "help",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9.8 9.6a2.3 2.3 0 1 1 3.1 2.1c-.7.3-.9.8-.9 1.5" />
        <path d="M12 16.2h.01" />
      </>
    ),
  },
  {
    id: "close",
    icon: <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />,
  },
];

const TOUCH_CHIPS = [
  ["Touch", "1.10"],
  ["Scroll", "0.05"],
  ["Rate", "4ms"],
];

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

function TouchpadPhone() {
  return (
    <div
      className={`${styles.phone} ${styles.scenePhone} ${styles.scenePhoneTouch}`}
      aria-hidden="true"
    >
      <div className={styles.phoneScreen}>
        <div className={styles.dStatus}>
          <span className={styles.dTime}>5:43</span>
          <span className={styles.dStatusIcons}>{STATUS_ICONS}</span>
        </div>

        <div className={styles.tModes}>
          {TOUCH_MODES.map((mode) => (
            <span
              key={mode.id}
              className={`${styles.tModeBtn} ${
                mode.active ? styles.tModeBtnActive : ""
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" {...stroke}>
                {mode.icon}
              </svg>
            </span>
          ))}
        </div>

        <div className={styles.tChips}>
          {TOUCH_CHIPS.map(([label, value]) => (
            <span key={label} className={styles.tChip}>
              <span className={styles.tChipBtn}>−</span>
              <span className={styles.tChipLabel}>
                {label} {value}
              </span>
              <span className={`${styles.tChipBtn} ${styles.tChipBtnPlus}`}>+</span>
            </span>
          ))}
        </div>

        <div className={styles.tSurface}>
          <span className={styles.tHint}>
            Keep awake settings is active.
            <br />
            The screen will not turn off while connected.
          </span>
          <span className={styles.tScrollLine}>
            <span className={styles.tScrollHandle}>
              <i />
              <i />
              <i />
            </span>
          </span>
          <span className={styles.tFinger} />
        </div>

        <div className={styles.tClicks}>
          <span className={`${styles.tClick} ${styles.tClickFlash}`}>Left Click</span>
          <span className={styles.tClick}>Right Click</span>
        </div>

        <span className={styles.dGesture} />
      </div>
    </div>
  );
}

const CURSOR_SVG = (
  <svg width="15" height="15" viewBox="0 0 24 24">
    <path
      d="M5 2.5 18.5 10.6l-5.6 1.4-2.8 6-1.9-.9 2.6-6.2z"
      fill="#ffffff"
      stroke="#0b1220"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

function DesktopWindow() {
  return (
    <div className={styles.deskWindow} aria-hidden="true">
      <div className={styles.deskTitlebar}>
        <span className={styles.deskDots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.deskTitle}>Photoshop</span>
        <span className={styles.deskConn}>
          <i />
          Connected
        </span>
      </div>
      <div className={styles.deskBody}>
        <div className={styles.deskRail}>
          <i />
          <i />
          <i />
        </div>
        <div className={styles.deskCanvas}>
          <span className={`${styles.deskShape} ${styles.deskShapeA}`} />
          <span
            className={`${styles.deskShape} ${styles.deskShapeB} ${styles.layerAnim}`}
          />
          <span className={styles.deskCursor}>
            <span className={styles.cursorRing} />
            {CURSOR_SVG}
          </span>
        </div>
        <div className={styles.deskLayers}>
          <span className={`${styles.deskLayerChip} ${styles.layerAnim}`}>
            <i />
            Layer 2
          </span>
          <span className={styles.deskLayerChip}>
            <i className={styles.deskDotYellow} />
            Layer 1
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroScene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <TouchpadPhone />
      <div className={styles.sceneWindow}>
        <DesktopWindow />
      </div>
      <DeckMock className={`${styles.scenePhone} ${styles.scenePhoneDeck}`} />
    </div>
  );
}

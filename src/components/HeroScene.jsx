import React from "react";
import { Icon } from "@iconify/react";
import styles from "../pages/index.module.css";
import StatusBar from "./StatusBar";
import { PHOTOSHOP_KEYS } from "./deckKeys";
import { photoshopIcon } from "./deckAppIcons";

/* Touchpad toolbar — pointer starts active; the grid button is the Deck
 * toggle, and the active state travels to it when the view switches */
const TOUCH_MODES = [
  { id: "pointer", icon: "lucide:mouse-pointer-2", anim: "modeAnimPointer" },
  { id: "grid", icon: "lucide:layout-grid", anim: "modeAnimDeck" },
  { id: "keyboard", icon: "lucide:keyboard" },
  { id: "arrows", icon: "lucide:move" },
  { id: "clipboard", icon: "lucide:clipboard" },
  { id: "phone", icon: "lucide:smartphone" },
  { id: "help", icon: "lucide:circle-question-mark" },
  { id: "close", icon: "lucide:x" },
];

const TOUCH_CHIPS = [
  ["Touch", "1.10"],
  ["Scroll", "0.05"],
  ["Rate", "4ms"],
];

function PhoneMock() {
  return (
    <div className={`${styles.phone} ${styles.scenePhone}`} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.dStatus}>
          <span className={styles.dTime}>5:43</span>
          <StatusBar />
        </div>

        <div className={styles.tModes}>
          {TOUCH_MODES.map((mode) => (
            <span
              key={mode.id}
              className={`${styles.tModeBtn} ${
                mode.active ? styles.tModeBtnActive : ""
              } ${mode.anim ? styles[mode.anim] : ""}`}
            >
              <Icon icon={mode.icon} width={13} height={13} />
            </span>
          ))}
        </div>

        <div className={styles.tStage}>
          <div className={styles.tView}>
            <div className={styles.tChips}>
              {TOUCH_CHIPS.map(([label, value]) => (
                <span key={label} className={styles.tChip}>
                  <span className={styles.tChipBtn}>
                    <Icon icon="lucide:minus" width={8} height={8} />
                  </span>
                  <span className={styles.tChipLabel}>
                    {label} {value}
                  </span>
                  <span className={`${styles.tChipBtn} ${styles.tChipBtnPlus}`}>
                    <Icon icon="lucide:plus" width={8} height={8} />
                  </span>
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
              <span className={`${styles.tClick} ${styles.tClickFlash}`}>
                Left Click
              </span>
              <span className={styles.tClick}>Right Click</span>
            </div>
          </div>

          <div className={styles.kView}>
            <div className={styles.kHead}>
              <span className={styles.kHeadIcon}>
                <Icon icon={photoshopIcon} height={19} />
              </span>
              <span>
                <span className={styles.kHeadName}>Photoshop</span>
                <br />
                <span className={styles.kHeadMeta}>focused on desktop</span>
              </span>
              <span className={styles.dSyncPill}>
                <span className={styles.dSyncDot} />
                AUTO
              </span>
            </div>

            <div className={styles.kGrid}>
              {PHOTOSHOP_KEYS.map((key) => (
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
      </div>
    </div>
  );
}

function DesktopWindow() {
  return (
    <div className={styles.deskWindow} aria-hidden="true">
      <div className={styles.deskTitlebar}>
        <span className={styles.deskDots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.deskTitle}>
          <Icon icon={photoshopIcon} height={11} />
          Photoshop
        </span>
        <span className={styles.deskConn}>
          <i />
          Connected
        </span>
      </div>
      <div className={styles.deskBody}>
        <div className={styles.deskRail}>
          <Icon icon="lucide:mouse-pointer" width={12} height={12} />
          <Icon icon="lucide:pen-tool" width={12} height={12} />
          <Icon icon="lucide:type" width={12} height={12} />
          <Icon icon="lucide:shapes" width={12} height={12} />
        </div>
        <div className={styles.deskCanvas}>
          <span className={`${styles.deskShape} ${styles.deskShapeA}`} />
          <span
            className={`${styles.deskShape} ${styles.deskShapeB} ${styles.layerAnim}`}
          />
          <span className={styles.deskCursor}>
            <span className={styles.cursorRing} />
            <Icon
              icon="mdi:cursor-default"
              width={16}
              height={16}
              className={styles.deskCursorIcon}
            />
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
      <div className={styles.sceneWindow}>
        <DesktopWindow />
      </div>
      <PhoneMock />
    </div>
  );
}

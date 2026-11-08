import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import styles from "../pages/index.module.css";

const SERVER_REPO = "https://github.com/ayonshafiul/peyara-rust-server";
const API_LATEST =
  "https://api.github.com/repos/ayonshafiul/peyara-rust-server/releases/latest";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.github.ayonshafiul.peyara";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/peyara-remote-mouse/id6743374036";

const TABS = [
  { id: "windows", label: "Windows" },
  { id: "macos", label: "macOS" },
  { id: "linux-deb", label: "Linux (.deb)" },
  { id: "linux-rpm", label: "Linux (.rpm)" },
];

const ASSET_PATTERNS = {
  windows: /windows-x86_64-setup\.exe$/i,
  macos: /macos-arm64\.dmg$/i,
  "linux-deb": /linux-amd64\.deb$/i,
  "linux-rpm": /linux-x86_64\.rpm$/i,
};

export function detectOS() {
  if (typeof navigator === "undefined") {
    return "windows";
  }
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  if (/Win/i.test(platform) || /Windows/i.test(ua)) {
    return "windows";
  }
  if (/Mac/i.test(platform) || /Macintosh/i.test(ua)) {
    return "macos";
  }
  if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
    return "linux-deb";
  }
  return "windows";
}

const CONTENT = {
  windows: {
    file: "Peyara-Server-<version>-windows-x86_64-setup.exe",
    docs: "/docs/Installation/windows",
    steps: [
      "Run the downloaded .exe and follow the installer wizard.",
      'Windows SmartScreen may warn because community builds are not signed — click "More info", then "Run anyway".',
      'When Windows Firewall asks, allow the app on private networks so your phone can reach it over Wi-Fi.',
      "Start Peyara Server. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.",
    ],
  },
  macos: {
    file: "Peyara-Server-<version>-macos-arm64.dmg",
    docs: "/docs/Installation/mac",
    steps: [
      "Open the downloaded .dmg and drag the Peyara app into Applications.",
      "The app is unsigned, so Gatekeeper will block it. Open Terminal, then copy and paste the following command and press Enter (enter your Mac password when asked):",
      "Grant Accessibility permission (System Settings → Privacy & Security → Accessibility) so the phone can drive your mouse and keyboard.",
      "Start the server. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.",
    ],
    command: "sudo xattr -cr /Applications/Peyara*.app",
    update: {
      title: "Updating from a previous version?",
      intro:
        "macOS ties Accessibility to the exact app binary, so the mouse and keyboard stop working after an update until you reset it. Do one of these before launching the new version:",
      options: [
        "Uninstall first (recommended): delete the old app from Applications, install fresh, and grant Accessibility again.",
        "Or remove and re-toggle: System Settings → Privacy & Security → Accessibility, select Peyara and press -, install the new version, then toggle it back on and relaunch.",
      ],
    },
  },
  "linux-deb": {
    file: "Peyara-Server-<version>-linux-amd64.deb",
    docs: "/docs/Installation/linux",
    note: "For Debian, Ubuntu and derivatives. Installs to /usr/bin with a desktop entry and app icon.",
    steps: [
      "Install the package:",
      "Launch Peyara from your app menu. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.",
      "On GNOME / Wayland (e.g. Ubuntu 24), approve the one-time “remote interaction” prompt so the phone can control the whole desktop.",
    ],
    command: "sudo dpkg -i Peyara-Server-<version>-linux-amd64.deb",
  },
  "linux-rpm": {
    file: "Peyara-Server-<version>-linux-x86_64.rpm",
    docs: "/docs/Installation/linux",
    note: "For Fedora and other RPM-based distros. Installs to /usr/bin with a desktop entry and app icon.",
    steps: [
      "Install the package:",
      "Launch Peyara from your app menu. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.",
      "On GNOME / Wayland, approve the one-time “remote interaction” prompt so the phone can control the whole desktop.",
    ],
    command: "sudo rpm -i Peyara-Server-<version>-linux-x86_64.rpm",
  },
};

export default function DownloadModal({ onClose }) {
  const [tab, setTab] = useState(() => detectOS());
  const [assets, setAssets] = useState(null);
  const [version, setVersion] = useState("");
  const [copied, setCopied] = useState(false);

  const copyCommand = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    let cancelled = false;
    fetch(API_LATEST)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data || cancelled || !Array.isArray(data.assets)) {
          return;
        }
        const found = {};
        for (const asset of data.assets) {
          for (const [id, pattern] of Object.entries(ASSET_PATTERNS)) {
            if (pattern.test(asset.name)) {
              found[id] = asset.browser_download_url;
            }
          }
        }
        setAssets(found);
        if (data.tag_name) {
          setVersion(data.tag_name);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const content = CONTENT[tab];
  const directUrl = assets && assets[tab];
  const fileName = version
    ? content.file.replace("<version>", version.replace(/^v/, ""))
    : content.file;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.modalDialog}
        role="dialog"
        aria-modal="true"
        aria-label="Download the Peyara server"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHead}>
          <div>
            <div className={styles.eyebrow} style={{ marginBottom: 4 }}>
              Desktop server
            </div>
            <h2 className={styles.modalTitle}>
              Download for{" "}
              {TABS.find((t) => t.id === tab).label}
              {version ? ` (${version})` : ""}
            </h2>
          </div>
          <button
            type="button"
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className={styles.modalTabs} role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`${styles.modalTab} ${
                tab === t.id ? styles.modalTabActive : ""
              }`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.modalFile}>
          <code>{fileName}</code>
        </div>

        <ol className={styles.modalSteps}>
          {content.steps.map((step, i) => (
            <li key={i}>
              {step}
              {content.command && step.trimEnd().endsWith(":") && (
                <div className={styles.modalCodeWrap}>
                  <pre className={styles.modalCode}>
                    <code>{content.command}</code>
                  </pre>
                  <button
                    type="button"
                    className={styles.modalCopyBtn}
                    onClick={() => copyCommand(content.command)}
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ol>

        {content.note && <p className={styles.modalNote}>{content.note}</p>}

        {content.update && (
          <div className={styles.modalUpdate}>
            <h3 className={styles.modalUpdateTitle}>{content.update.title}</h3>
            <p>{content.update.intro}</p>
            <ul>
              {content.update.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.modalActions}>
          <a
            className="button--primary-cta"
            href={directUrl || `${SERVER_REPO}/releases/latest`}
          >
            {directUrl ? "Download now" : "Open releases page"}
          </a>
          <Link className="button--ghost-cta" to={content.docs}>
            Full install guide
          </Link>
        </div>

        <p className={styles.modalFoot}>
          After installing, connect your phone to the same Wi-Fi, scan the
          on-screen QR code, and press Connect.{" "}
          <a href={`${SERVER_REPO}/releases`}>All versions</a>
        </p>

        <div className={styles.modalStores}>
          <span className={styles.modalStoresLabel}>Then get the mobile app</span>
          <div className={styles.storeBadgesLeft}>
            <a href={PLAY_STORE_URL} aria-label="Get Peyara on Google Play">
              <img src="/img/google-play.png" alt="Get it on Google Play" />
            </a>
            <a href={APP_STORE_URL} aria-label="Download Peyara on the App Store">
              <img src="/img/appstore.png" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

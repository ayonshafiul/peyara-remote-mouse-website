---
title: Installation For Mac
sidebar_position: 2
---

Download the latest release from the [**Releases** page](https://github.com/ayonshafiul/peyara-rust-server/releases). Look for the file named `Peyara-Server-<version>-macos-arm64.dmg` (Apple Silicon).

[See all versions](https://github.com/ayonshafiul/peyara-rust-server/releases)

## Installation

1. Open the downloaded `.dmg` file.
2. Drag the Peyara app into the **Applications** folder.
3. The app is unsigned, so macOS Gatekeeper will block it on first launch ("app is damaged" / "cannot be opened"). Open **Terminal**, then copy and paste the following command and press Enter to clear the quarantine flag:

```bash
sudo xattr -cr /Applications/Peyara*.app
```

Enter your Mac password when prompted. Then launch Peyara from Applications. (Alternatively, right-click the app, choose "Open", then confirm — but the `xattr` command above is the reliable fix for unsigned builds.)
4. Grant **Accessibility** permission when prompted (System Settings → Privacy & Security → Accessibility). This is required so the phone can control your mouse and keyboard.
5. Start the server. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.

## Open the Deck

Once connected, tap the **Deck** icon on the touchpad to fire shortcuts for the app in focus. See the [Deck guide](/docs/deck).

## Updating

macOS ties the Accessibility permission to the exact app binary. If you install a new version over the old one, the mouse and keyboard will stop working until the permission is re-granted. Do **one** of the following before launching the new version:

**Option A — uninstall first (recommended):** delete the old Peyara app from Applications (drag it to the Bin), then follow the Installation steps above. macOS clears the stale permission entry and you grant it fresh.

**Option B — remove and re-toggle the permission:** go to System Settings → Privacy & Security → Accessibility, select Peyara and press `-` to remove it, then install the new version, launch it, and toggle the permission back on when prompted. Quit and relaunch Peyara afterwards.

Without one of these, the updated app keeps the old permission entry and input silently stops working.

## Troubleshooting

- App won't open ("damaged" / "unidentified developer"): re-run `sudo xattr -cr /Applications/Peyara*.app`, then launch again.
- Input not working (especially right after an update): the Accessibility permission is tied to the old binary — remove it and re-toggle per [Updating](/docs/Installation/mac#updating), then quit and relaunch the app.
- Phone cannot find the PC: make sure both are on the same Wi-Fi.

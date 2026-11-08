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
sudo xattr -cr "/Applications/Peyara Server.app"
```

Enter your Mac password when prompted. Then launch Peyara from Applications. (Alternatively, right-click the app, choose "Open", then confirm — but the `xattr` command above is the reliable fix for unsigned builds.)
4. Grant **Accessibility** permission when prompted (System Settings → Privacy & Security → Accessibility). This is required so the phone can control your mouse and keyboard.
5. Start the server. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.

## Open the Deck

Once connected, tap the **Deck** icon on the touchpad to fire shortcuts for the app in focus. See the [Deck guide](/docs/deck).

## Updating

Install the new version and launch it. macOS ties the Accessibility permission to the exact app binary, so after updating the mouse and keyboard may stop working. If that happens:

1. Go to System Settings → Privacy & Security → Accessibility, click the Peyara entry to highlight it, then press the minus (-) button below the list to remove it.
2. Launch Peyara again — when the app asks for permission, toggle Accessibility back on.
3. Quit and relaunch the app.

## Troubleshooting

- App won't open ("damaged" / "unidentified developer"): re-run `sudo xattr -cr "/Applications/Peyara Server.app"`, then launch again.
- Input not working (especially right after an update): remove the Peyara entry with minus and toggle it back on when the app asks — see [Updating](/docs/Installation/mac#updating).
- Phone cannot find the PC: make sure both are on the same Wi-Fi.

---
title: Installation For Mac
sidebar_position: 2
---

Download the latest release from the [**Releases** page](https://github.com/ayonshafiul/peyara-rust-server/releases). Look for the file named `Peyara-Server-<version>-macos-arm64.dmg` (Apple Silicon).

[See all versions](https://github.com/ayonshafiul/peyara-rust-server/releases)

## Installation

1. Open the downloaded `.dmg` file.
2. Drag the Peyara app into the **Applications** folder.
3. The app is unsigned, so macOS Gatekeeper will block it on first launch ("app is damaged" / "cannot be opened"). Clear the quarantine flag with:

```bash
sudo xattr -cr /Applications/Peyara*.app
```

Enter your Mac password when prompted. Then launch Peyara from Applications. (Alternatively, right-click the app, choose "Open", then confirm — but the `xattr` command above is the reliable fix for unsigned builds.)
4. Grant **Accessibility** permission when prompted (System Settings → Privacy & Security → Accessibility). This is required so the phone can control your mouse and keyboard.
5. Start the server. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.

Note: screen sharing is intentionally not part of Peyara, so no screen-recording permission is needed.

## Open the Deck

Once connected, tap the **Deck** icon on the touchpad to fire shortcuts for the app in focus. See the [Stream Deck guide](/docs/stream-deck).

## Updating

1. Before installing a newer version, remove the old Accessibility permission (System Settings → Privacy & Security → Accessibility, select Peyara and press `-`). This ensures macOS picks up the new build cleanly.
2. Then follow the Installation steps above.

## Troubleshooting

- App won't open ("damaged" / "unidentified developer"): re-run `sudo xattr -cr /Applications/Peyara*.app`, then launch again.
- Input not working: check that Accessibility permission is enabled for Peyara, then quit and relaunch the app.
- Phone cannot find the PC: make sure both are on the same Wi-Fi.

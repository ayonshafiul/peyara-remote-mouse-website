---
title: Troubleshooting
sidebar_position: 3
---

# Troubleshooting

Fix the most common connection and control issues.

## Invalid QR code scanned

If you get this error, make sure your mobile and desktop are connected to the **same Wi-Fi network**. Also make sure you scan only the QR code shown on the desktop server window — other QR codes won't work.

## The phone cannot find the desktop

- Check that both devices are on the same network and not on a guest or client-isolated Wi-Fi.
- On Windows, allow Peyara on **private networks** in the firewall prompt.
- On macOS, make sure the server is running from Applications and that the local network permission is enabled.
- Restart the server and check its log panel for the detected network address.

## Touchpad or keyboard input does nothing

- **macOS:** grant **Accessibility** permission (System Settings → Privacy & Security → Accessibility) and relaunch the app.
- **Linux / Wayland:** approve the "remote interaction" portal prompt on launch. If it never appears, relaunch and check the server log.
- Reconnect from the server list in the app.

## The Deck shows no keys for my app

The Deck falls back to the app in focus. Make sure the desktop app is actually focused, then reopen the Deck or pick the app manually. If the app has no preset yet, you can build a custom deck for it from the available actions.

## Deck keys do nothing

- Confirm the server is connected and the touchpad still responds.
- Check that the deck belongs to the app that currently has focus, or pick the app manually in the Deck.
- Some shortcuts depend on the app's own settings or profile. Try the same shortcut on your keyboard first.
- If a shortcut needs OS permissions, grant them to the Peyara server (Accessibility on macOS, the portal prompt on Wayland).

## Add or fix a preset

Presets are open source in [ayonshafiul/peyara-actions](https://github.com/ayonshafiul/peyara-actions). Open a pull request there with a new preset or a correction. See the [Deck guide](/docs/deck) for how decks work.

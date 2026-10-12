---
title: Installation For Linux
sidebar_position: 3
---

Download the latest release from the [**Releases** page](https://github.com/ayonshafiul/peyara-rust-server/releases):

- Debian / Ubuntu and derivatives: `Peyara-Server-<version>-linux-amd64.deb`
- Fedora and RPM-based distros: `Peyara-Server-<version>-linux-x86_64.rpm`

[See all versions](https://github.com/ayonshafiul/peyara-rust-server/releases)

## Installation

For Debian / Ubuntu:

```bash
sudo dpkg -i Peyara-Server-<version>-linux-amd64.deb
```

For Fedora / RPM-based distros:

```bash
sudo rpm -i Peyara-Server-<version>-linux-x86_64.rpm
```

This installs the binary to `/usr/bin` along with a desktop entry and app icon. Then launch **Peyara** from your app menu. It shows a QR code — scan it with the mobile app while both devices are on the same Wi-Fi.

## Wayland (Ubuntu 24 default session)

On GNOME / Wayland, input goes through the Remote Desktop portal:

1. Launch the app — a system prompt asks to allow remote interaction.
2. Approve it (the choice is remembered per app).
3. The phone now drives the whole desktop.

Requirements (`xdg-desktop-portal` and `xdg-desktop-portal-gnome`) are preinstalled on stock Ubuntu 24. If you deny the prompt or it never appears, relaunch the app and check the in-app Log panel. As a fallback, pick "Ubuntu on Xorg" at the login screen, where plain X11 injection works.

## Updating

Install the new package the same way as above. Your pairing is kept; just re-scan the QR code if needed.

## Build from source (optional)

Requires a recent stable [Rust](https://www.rust-lang.org/tools/install) toolchain:

```bash
cargo run --release
```

On Linux the GUI and input libraries are needed first:

```bash
sudo apt-get install -y \
  libx11-dev libxcb1-dev libxcb-render0-dev libxcb-shape0-dev \
  libxcb-xfixes0-dev libxkbcommon-dev libxkbcommon-x11-dev \
  libwayland-dev libegl1-mesa-dev libgl1-mesa-dev
```

Windows and macOS need nothing extra.

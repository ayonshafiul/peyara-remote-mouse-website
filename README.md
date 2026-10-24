# Peyara Remote Mouse — website

The marketing site and documentation for [Peyara Remote Mouse](https://peyara-remote-mouse.vercel.app), a wireless mouse, keyboard and media remote for your PC — plus a free Stream Deck that follows the focused desktop app.

Built with [Docusaurus](https://docusaurus.io/).

## Local development

```sh
yarn install
yarn start
```

Most changes are reflected live without restarting the dev server.

## Build

```sh
yarn build
yarn serve
```

The static site is generated into `build/` and can be deployed to any static host.

## Content map

- `src/pages/index.js` — homepage (hero, Stream Deck feature, features, FAQ, downloads)
- `src/components/DeckMock.jsx` — CSS mock of the in-app Deck
- `docs/get-started.mdx` — setup, pairing and first connection
- `docs/stream-deck.mdx` — Stream Deck guide
- `docs/Installation/` — per-OS server installation
- `blog/` — release notes and announcements

## Related repositories

- [peyara-rust-server](https://github.com/ayonshafiul/peyara-rust-server) — desktop server
- [peyara-mouse](https://github.com/ayonshafiul/peyara-mouse) — mobile app
- [peyara-actions](https://github.com/ayonshafiul/peyara-actions) — open Deck presets

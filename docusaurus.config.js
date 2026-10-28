// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Peyara Remote Mouse",
  tagline:
    "Wireless mouse, keyboard and media remote for your PC — plus the free Deck: one-tap shortcuts for the app in focus. Tiny ~5 MB open-source server, no ads.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://peyara-remote-mouse.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#facc15",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:site_name",
        content: "Peyara Remote Mouse",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "Peyara",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://peyara-remote-mouse.vercel.app/",
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  plugins: [
    // renamed pages keep their old URLs working
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs/stream-deck",
            to: "/docs/deck",
          },
          {
            from: "/blog/free-stream-deck-for-your-pc",
            to: "/blog/free-shortcuts-deck-for-your-pc",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-banner.png",
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
  announcementBar: {
        id: "deck-launch",
        content:
          'New: the Deck is here — one-tap shortcuts for the app in focus, with hundreds of presets. <a href="/docs/deck">See how it works →</a>',
        backgroundColor: "#0b1220",
        textColor: "#f8fafc",
        isCloseable: true,
      },
      navbar: {
        title: "Peyara",
        logo: {
          alt: "Peyara Remote Mouse",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
            to: "/docs/get-started",
          },
          {
            to: "/docs/deck",
            label: "Deck",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ayonshafiul/peyara-rust-server",
            label: "Server",
            position: "right",
          },
          {
            href: "https://github.com/ayonshafiul/peyara-mouse",
            label: "App",
            position: "right",
          },
          {
            href: "https://github.com/ayonshafiul/peyara-rust-server/releases",
            label: "Download",
            position: "right",
            className: "navbar-download-btn",
          },
        ],
      },
      metadata: [
          {
            name: "keywords",
            content:
              "remote mouse, phone as mouse, wireless mouse app, remote keyboard, wifi mouse, wifi keyboard, media remote, clipboard sync, stream deck alternative, free stream deck alternative, phone stream deck, mobile macro pad, app shortcut presets, shortcut pad, qr pair touchpad, android remote mouse, ios remote mouse, open source remote mouse, rust remote mouse, tiny mouse server, windows mac linux remote control",
          },
          {
            name: "description",
            content:
              "Peyara turns your phone into a wireless mouse, keyboard and media remote — plus the free Deck: one-tap shortcuts for the desktop app in focus, a Stream Deck alternative built in. Tiny ~5 MB open-source Rust server for Windows, macOS and Linux. Pair by QR over Wi-Fi. No ads, no tracking, no account.",
          },
          {
            property: "og:title",
            content:
              "Peyara Remote Mouse — Wireless Mouse & Free Shortcut Deck",
          },
          {
            property: "og:description",
            content:
              "Wireless mouse, keyboard, media and clipboard control from your phone, plus the free Deck — one-tap shortcuts for the app in focus, with hundreds of presets. A free Stream Deck alternative. Tiny open-source server, QR pairing over Wi-Fi, no ads.",
          },
          {
            property: "og:image",
            content:
              "https://peyara-remote-mouse.vercel.app/img/social-banner.png",
          },
          {
            name: "twitter:title",
            content:
              "Peyara Remote Mouse — Wireless Mouse & Free Shortcut Deck",
          },
          {
            name: "twitter:description",
            content:
              "Control your PC from your phone and fire app shortcuts from a free, focus-aware per-app deck — a Stream Deck alternative. Open source, local-only and ad-free.",
          },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "google-site-verification",
          content: "oLCr8VPTgZN1qiVRA2tA_Vfj2MAnr9hR79DQpfdJ1_o",
        },
        {
          name: "msvalidate.01",
          content: "0B78E31A23555001C9082A53830A4373",
        },
      ],
      footer: {
        style: "light",
        links: [
          {
            title: "Product",
            items: [
              {
                label: "Get Started",
                to: "/docs/get-started",
              },
              {
                label: "Deck Guide",
                to: "/docs/deck",
              },
              {
                label: "Troubleshooting",
                to: "/docs/troubleshooting",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Download",
            items: [
              {
                label: "Desktop Server (Rust)",
                href: "https://github.com/ayonshafiul/peyara-rust-server/releases",
              },
              {
                label: "Mobile App",
                href: "https://github.com/ayonshafiul/peyara-mouse",
              },
              {
                label: "Deck Presets",
                href: "https://github.com/ayonshafiul/peyara-actions",
              },
              {
                label: "Windows Setup",
                to: "/docs/Installation/windows",
              },
              {
                label: "macOS Setup",
                to: "/docs/Installation/mac",
              },
              {
                label: "Linux Setup",
                to: "/docs/Installation/linux",
              },
            ],
          },
          {
            title: "Open Source",
            items: [
              {
                label: "Rust Server Source",
                href: "https://github.com/ayonshafiul/peyara-rust-server",
              },
              {
                label: "Mobile Client Source",
                href: "https://github.com/ayonshafiul/peyara-mouse",
              },
              {
                label: "Preset Library",
                href: "https://github.com/ayonshafiul/peyara-actions",
              },
              {
                label: "Privacy Policy",
                to: "/docs/privacypolicy",
              },
            ],
          },
        ],
        copyright: `Made with ❤️ in Bangladesh · Peyara is free, open source & ad-free.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

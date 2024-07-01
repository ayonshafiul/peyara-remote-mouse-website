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
    "Turn your mobile into a wireless mouse and keyboard combo with Peyara Remote Mouse.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://peyara-remote-mouse.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-banner.png",
      navbar: {
        title: "Peyara Remote Mouse",
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
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ayonshafiul/peyara-mouse-server",
            label: "GitHub Server",
            position: "right",
          },
          {
            href: "https://github.com/ayonshafiul/peyara-mouse-client",
            label: "GitHub Client",
            position: "right",
          },
        ],
      },
      metadata: [
        {
          name: "keywords",
          content:
            "remote mouse, remote keyboard, wifi mouse, wifi keybaord, media controls, android remote mouse",
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
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/get-started",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Server Source",
                href: "https://github.com/ayonshafiul/peyara-mouse-server",
              },
              {
                label: "Client Source",
                href: "https://github.com/ayonshafiul/peyara-mouse-client",
              },
            ],
          },
        ],
        copyright: `Made with ❤️ in Bangladesh. Site Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

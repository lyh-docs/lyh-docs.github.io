import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LiuYuhe Docs",
  description: "LiuYuhe Docs",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
  ],
  themeConfig: {
    logo: { src: "/logo.png" },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    editLink: {
      pattern:
        "https://github.com/lyh-docs/lyh-docs.github.io/edit/main/docs/:path",
      text: "在 GitHub 编辑",
    },
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lyh-docs/lyh-docs.github.io",
      },
    ],
    footer: {
      message: "Released under the CC-BY-SA-4.0 license.",
      copyright: `Copyright © 2025-${new Date().getFullYear()} <a href="https://github.com/lyh-docs">lyh-docs</a>`,
    },
  },
});

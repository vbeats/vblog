import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import sidebar from "./sidebar";
import navbar from "./navbar";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/",
  dest: "./docs",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "128x128",
        href: `/favicon.ico`,
      },
    ],
  ],
  lang: "zh-CN",
  title: "Vbeats",
  description: "Good Good Study 👍 Day Day UP",
  themeConfig: {
    logo: "/logo.jpg",
    repoLabel: "GitHub",
    repo: "https://github.com/boot-vue",
    docsRepo: "https://github.com/vbeats/vblog",
    docsBranch: "next",
    sidebarDepth: 3,
    navbar,
    sidebar,
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-ERE4E7HP60",
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "按下 / 搜索",
          },
        },
      },
    ],
    /* [
      "@vuepress/docsearch",
      {
        apiKey: "<API_KEY>",
        indexName: "<INDEX_NAME>",
        placeholder: "Search",
      },
    ], */
  ],
});

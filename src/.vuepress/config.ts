import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { resolve } from 'path'


export default defineUserConfig({
  base: "/backend-study/",

  lang: "zh-CN",
  title: "后端开发笔记",
  description: "以 Java 为主",

  theme,

  head: [
    ['script', {}, `
      console.log("111");
    `]
  ]

  // Enable it with pwa
  // shouldPrefetch: true,
});

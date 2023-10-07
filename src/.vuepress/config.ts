import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { resolve } from 'path'


export default defineUserConfig({
  base: "/java-interview/",

  lang: "zh-CN",
  title: "后端开发经验",
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

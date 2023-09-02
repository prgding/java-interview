import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "后端面试经验",
  description: "以 Java 为主",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

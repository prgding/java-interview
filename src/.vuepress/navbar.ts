import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    link: "/",
    icon: "tabler:home",
  },
  {
    text: "题目",
    link: "/questions/",
    icon: "ph:seal-question",
  },
  {
    text: "专业技能",
    link: "skills/",
    icon: "carbon:skill-level-intermediate",
  },
  {
    text: "项目",
    link: "/projects/",
    icon: "octicon:project-roadmap-16",
  },
  {
    text: "Java",
    link: "/java/java/",
    icon: "logos:java",
  },
  {
    text: "框架",
    link: "/framework/spring/",
    icon: "devicon:spring",
  },
  {
    text: "MySQL",
    link: "/mysql/",
    icon: "devicon:mysql",
  },
  {
    text: "Redis",
    link: "/redis/",
    icon: "logos:redis",
  },
  // {
  //   text: "计算机网络",
  //   link: "network/",
  //   icon: "eos-icons:network",
  // },
  // {
  //   text: "操作系统",
  //   link: "os/",
  //   icon: "wpf:mac-os",
  // },
  // {
  //   text: "算法",
  //   link: "algorithm/",
  //   icon: "tabler:math",
  // },
  {
    text: "Linux",
    icon: "devicon:linux",
    link: "linux/",
  },
  {
    text: "Docker",
    icon: "logos:docker-icon",
    link: "/docker/",
  },
]);

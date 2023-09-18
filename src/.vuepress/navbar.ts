import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    link: "/",
    icon: "tabler:home",
  },
  {
    text: "题目",
    icon: "ph:seal-question",
    link: "/questions/",
  },
  {
    text: "专业技能",
    icon: "carbon:skill-level-intermediate",
    link: "skills/",
  },
  {
    text: "项目",
    icon: "octicon:project-roadmap-16",
    link: "/projects/",
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

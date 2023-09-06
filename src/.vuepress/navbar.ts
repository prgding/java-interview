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
    text: "Java",
    link: "/java/",
    icon: "logos:java",
  },
  {
    text: "MySQL",
    link: "/mysql/",
    icon: "devicon:mysql",
  },
  {
    text: "Spring",
    link: "/spring/",
    icon: "devicon:spring",
  },
  {
    text: "Docker",
    icon: "teenyicons:docker-outline",
    link: "/docker/",
  },
]);

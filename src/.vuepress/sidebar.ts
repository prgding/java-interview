import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "主页",
      icon: "tabler:home",
      link: "/",
    },
    {
      text: "题目",
      icon: "ph:seal-question",
      link: "questions/",
    },
    {
      text: "专业技能",
      icon: "carbon:skill-level-intermediate",
      link: "skills/",
    },
    {
      text: "项目",
      icon: "octicon:project-roadmap-16",
      link: "projects/",
    },
    {
      text: "Java",
      icon: "logos:java",
      // link: "java/",

      prefix: "java/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "框架",
      icon: "devicon:spring",
      // link: "spring/",

      prefix: "framework/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "MySQL",
      icon: "devicon:mysql",
      link: "mysql/",
    },
    {
      text: "Redis",
      icon: "logos:redis",
      link: "redis/",
    },
    {
      text: "Linux",
      icon: "devicon:linux",
      link: "linux/",
    },
    {
      text: "Docker",
      icon: "logos:docker-icon",
      link: "docker/",
    },
  ],
});

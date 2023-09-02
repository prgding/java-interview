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
      // link: "question/",
      prefix: "question/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "Java",
      icon: "logos:java",
      link: "java/",
    },
    {
      text: "MySQL",
      icon: "devicon:mysql",
      link: "mysql/",
    },
    {
      text: "Spring",
      icon: "devicon:spring",
      link: "spring/",
    },
    {
      text: "Docker",
      icon: "teenyicons:docker-outline",
      link: "docker/",
    },
  ],
});

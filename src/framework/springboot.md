---
order: 2
---

# Spring Boot

## Spring Boot 常用注解

```java
// 启动：
@SpringBootApplication
@Configuration
@EnableAutoConfiguration

// 分层：
@Repository
@Service
@Controller
@RestController

// 应用：
@Component
@Bean
@AutoWired
@ResponseBody
@RequestParam
```

## 自动装配原理

1. 什么是 SpringBoot 自动装配？

    当在项目中添加了某些特定的库或依赖时，Spring Boot 会自动配置这些库或依赖所需要的 Beans 和默认设置。

1. SpringBoot 是如何实现自动装配的？如何实现按需加载？
    1. 
2. 如何实现一个 Starter？

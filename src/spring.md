# Spring

## Spring 、Spring MVC、Spring Boot、Spring Cloud 简介

- Spring Framework 是这些的基础，是控制反转容器。
- Spring MVC 是 Spring 的快速搭建 Web 应用的一个模块。
- Spring Boot 简化了配置，做到开箱即用。
- Spring Cloud 是一个微服务框架，结合 Spring Boot 可以快速开发分布式应用。

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

## Spring 核心模块

1. Spring Core (IoC)
2. Spring AOP
3. Spring DAO
4. Spring ORM
5. Spring Web
6. Spring Web MVC
7. Spring WebFlux

## AOP

### 是什么？

将事务、日志、安全等非业务代码穿插于业务代码中的一种编程方式叫做 AOP，面向切面编程。

### 实现方式

1. 静态织入（AspectJ）：编译时增强
2. 动态代理（Spring AOP）：运行时增强
   1. 要代理的对象实现了某个接口，则使用 JDK 代理
   2. 没有实现接口的对象使用 CGLib 代理

### AOP 能做什么？

1. AOP适合用来做一些**「比较通用的、与业务关系不大的」**事情。
2. 日志记录，性能统计，安全控制，事务处理，异常处理等等。

## Spring 事务

### Spring 中的实现方式

1. 编程式
   1. TransactionTemplate
   2. TransactionManager
2. 声明式
   1. @Transactional 注解

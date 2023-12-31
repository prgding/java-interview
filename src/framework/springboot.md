---
order: 2
icon: healthicons:2-outline
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
    1. Spring Boot 启动类上有一个注解 @SpringBootApplication, 这个注解里面有三个主要注解：
        1. SpringBootConfiguration
        2. EnableAutoConfiguration
        3. ComponentScan
    2. 其中 EnableAutoConfiguration 是实现自动化的核心注解，该注解通过 @Import 一个AutoConfigurationImportSelector.class，这个类中读取了该项目和引用的 Jar 包中的 META-INF/spring.factoreis 中的内容
    3. 使用一系列 `@Conditional` 注解，确保只有在满足条件情况下配置才会生效，实现按需加载。
    

## 多环境配置

### 文件命名

- 主配置文件：application.properties / yml
- 多配置：
    - 开发环境：application-dev.properties / yml
    - 测试环境：application-test.properties / yml
    - 生产环境：application-prod.properties / yml

### 激活配置方式

1. 主配置文件方式：

```yml
spring.profiles.active=dev
```

2. 命令行方式：

```bash
java -jar myapp.jar --spring.profiles.active=test
```

3. 环境变量方式：

```bash
export SPIRNG_PROFILES_ACTIVE=prod
```

### 分环境创建 Bean

```java
@Configuration
public class DevConfig {
    @Bean
    @Profile("dev")
    public MyBean devBean() {
        return new MyDevBean();
    }
}
```

### 特殊情况

当特定的环境配置不提供某些属性，会使用主配置中的内容

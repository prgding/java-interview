---
order: 1
---

# Spring

## Spring 、Spring MVC、Spring Boot、Spring Cloud 简介

- Spring Framework 是这些的基础，是控制反转容器。
- Spring MVC 是 Spring 的快速搭建 Web 应用的一个模块。
- Spring Boot 简化了配置，做到开箱即用。
- Spring Cloud 是一个微服务框架，结合 Spring Boot 可以快速开发分布式应用。

## Spring 核心模块

1. Spring Core (IoC)
2. Spring AOP
3. Spring DAO
4. Spring ORM
5. Spring Web
6. Spring Web MVC
7. Spring WebFlux

## IoC

### 是什么

思想：控制反转，一种设计思想，将**对象的创建权**和**对象关系管理权**交出去，由第三方容器负责创建与维护。

### 实现

IoC 最常见以及最合理的实现方式叫做 DI 依赖注入

## AOP

### 是什么？

将事务、日志、安全等非业务代码在不改变原代码的情况下穿插于业务代码中的一种编程方式叫做 AOP，面向切面编程。

### AOP 能做什么？

1. AOP 适合用来做一些「**比较通用的、与业务关系不大的**」事情。
2. 事务、日志、安全控制、性能统计，异常处理等等。

### 实现方式

1. 静态织入（AspectJ）：编译时增强
2. 动态代理（Spring AOP）：运行时增强
   1. 要代理的对象实现了某个接口，则使用 JDK 代理
   2. 没有实现接口的对象使用 CGLib 代理

### 基本步骤

1. **定义切面**：切面就是你要在目标对象上增强的部分。
2. **定义切入点**：切入点决定了哪些连接点会得到增强。可以使用表达式或模式来匹配连接点。
3. **定义连接点**：连接点是你要插入切面代码的位置，例如方法调用或异常抛出的时候。
4. **定义通知**：通知是真正的增强操作，例如：前置通知、后置通知、环绕通知、异常通知等。
5. **进行织入**：将切面代码插入到目标代码中，创建一个被增强的对象。

### AOP 的缺点？

- 调试困难：某些功能是在运行时动态应用的，这可能导致代码调试困难。
- 性能影响：大量使用切面时，可能对性能造成影响。
- Spring AOP 不是完全的 AOP 解决方案：与 AspectJ 等完整的 AOP 解决方案相比，Spring AOP 的功能相对有限。例如，它只支持方法级的切面编程。

##  Bean

### Bean 的作用域

- singleton：默认的，单例
- prototype：多例
- request：一个请求一个 Bean（Web 专用）
- session：一个会话一个 Bean（Web 专用）
- global session：portlet 专用
- application：一个应用一个 Bean（Web 专用）
- websocket：一个 websocket 生命周期一个 Bean（Web 专用）
- 自定义 scope：很少使用

### Bean 的生命周期

1. 实例化 Bean
2. 属性赋值：构造注入或 set 注入
3. 初始化 Bean `init-method`
4. 使用 Bean `getBean();`
5. 销毁 Bean `destroy-method`

编写一个类实现 `BeanPostProcessor`，重写 `postProcessBeforeInitialization` 和 `postProcessAfterInitialization` 方法，可以在第 3 步初始化 Bean 之前和之后添加代码。

1. 实例化 Bean
2. 属性赋值：构造注入或 set 注入
3. **Bean 后处理器的 before 方法**
4. 初始化 Bean `init-method`
5. **Bean 后处理器的 after 方法**
6. 使用 Bean `getBean();`
7. 销毁 Bean `destroy-method`

## Spring 事务

### Spring 中的实现方式

1. 编程式
   1. TransactionTemplate
   2. TransactionManager
2. 声明式
   1. `@Transactional` 注解

### Spring 事务有哪几种传播级别

1. TransactionDefinition.PROPAGATION_**REQUIRED**
   - 使用最多，`@Transactional` 注解默认
   - 如果当前存在事务则加入
   - 没有则新建
2. TransactionDefinition.PROPAGATION_**REQUIRES_NEW**
   - 有则挂起
   - 新建事务，相互独立
3. TransactionDefinition.PROPAGATION_**NESTED**
   - 有则嵌套
   - 没有则新建。（等价于 ...REQUIRED）
4. TransactionDefinition.PROPAGATION_**MANDATORY**
   - 有则加入
   - 没有则抛出异常
5. TransactionDefinition.PROPAGATION_**SUPPORTS**
   - 有则加入
   - 没有以非事务运行
6. TransactionDefinition.PROPAGATION_**NOT_SUPPORTED**
   - 以非事务运行
   - 有则挂起
7. TransactionDefinition.PROPAGATION_**NEVER**
   - 以非事务运行
   - 有则抛出异常


















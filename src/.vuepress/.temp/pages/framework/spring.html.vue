<template><div><h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h1>
<h2 id="spring-、spring-mvc、spring-boot、spring-cloud-简介" tabindex="-1"><a class="header-anchor" href="#spring-、spring-mvc、spring-boot、spring-cloud-简介" aria-hidden="true">#</a> Spring 、Spring MVC、Spring Boot、Spring Cloud 简介</h2>
<ul>
<li>Spring Framework 是这些的基础，是控制反转容器。</li>
<li>Spring MVC 是 Spring 的快速搭建 Web 应用的一个模块。</li>
<li>Spring Boot 简化了配置，做到开箱即用。</li>
<li>Spring Cloud 是一个微服务框架，结合 Spring Boot 可以快速开发分布式应用。</li>
</ul>
<h2 id="spring-和-spring-boot-的区别" tabindex="-1"><a class="header-anchor" href="#spring-和-spring-boot-的区别" aria-hidden="true">#</a> Spring 和 Spring Boot 的区别</h2>
<ol>
<li>目的和设计思路上
<ol>
<li>Spring 目的在于提供一个控制反转和依赖注入的容器，更便于开发低耦合的应用</li>
<li>Spring Boot 目的在于简化 Spring 应用的创建和部署，采用“约定大于配置”的思想</li>
</ol>
</li>
<li>依赖上
<ol>
<li>Spring 需要手动管理依赖</li>
<li>Spring Boot 通过 “starters” 简化了依赖管理</li>
</ol>
</li>
<li>配置上
<ol>
<li>Spring 需要大量的 XML 或 Java 配置</li>
<li>Spring Boot 有自动配置的功能。</li>
</ol>
</li>
<li>项目启动
<ol>
<li>Spring 需要配置在服务器上</li>
<li>Spring Boot 内置 Tomcat、Jetty 等服务器，使得应用可以独立运行，不需要外部服务器。</li>
</ol>
</li>
</ol>
<h2 id="spring-核心模块" tabindex="-1"><a class="header-anchor" href="#spring-核心模块" aria-hidden="true">#</a> Spring 核心模块</h2>
<ol>
<li>Spring Core (IoC)</li>
<li>Spring AOP</li>
<li>Spring DAO</li>
<li>Spring ORM</li>
<li>Spring Web</li>
<li>Spring Web MVC</li>
<li>Spring WebFlux</li>
</ol>
<h2 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IoC</h2>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<p>思想：控制反转，一种设计思想，将<strong>对象的创建权</strong>和<strong>对象关系管理权</strong>交出去，由第三方容器负责创建与维护。</p>
<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>
<p>IoC 最常见以及最合理的实现方式叫做 DI 依赖注入</p>
<h2 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h2>
<h3 id="是什么-1" tabindex="-1"><a class="header-anchor" href="#是什么-1" aria-hidden="true">#</a> 是什么？</h3>
<p>将事务、日志、安全等非业务代码在不改变原代码的情况下穿插于业务代码中的一种编程方式叫做 AOP，面向切面编程。它是基于代理模式实现的</p>
<h3 id="aop-能做什么" tabindex="-1"><a class="header-anchor" href="#aop-能做什么" aria-hidden="true">#</a> AOP 能做什么？</h3>
<ol>
<li>AOP 适合用来做一些「<strong>比较通用的、与业务关系不大的</strong>」事情。</li>
<li>事务、日志、安全控制、性能统计，异常处理等等。</li>
</ol>
<h3 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h3>
<ol>
<li>静态织入（AspectJ）：编译时增强</li>
<li>动态代理（Spring AOP）：运行时增强
<ol>
<li>要代理的对象实现了某个接口，则使用 JDK 代理</li>
<li>没有实现接口的对象使用 CGLib 代理</li>
</ol>
</li>
</ol>
<h3 id="基本步骤" tabindex="-1"><a class="header-anchor" href="#基本步骤" aria-hidden="true">#</a> 基本步骤</h3>
<ol>
<li><strong>定义切面</strong>：切面就是你要在目标对象上增强的部分。</li>
<li><strong>定义切入点</strong>：切入点决定了哪些连接点会得到增强。可以使用表达式或模式来匹配连接点。</li>
<li><strong>定义连接点</strong>：连接点是你要插入切面代码的位置，例如方法调用或异常抛出的时候。</li>
<li><strong>定义通知</strong>：通知是真正的增强操作，例如：前置通知、后置通知、环绕通知、异常通知等。</li>
<li><strong>进行织入</strong>：将切面代码插入到目标代码中，创建一个被增强的对象。</li>
</ol>
<h3 id="如何实现基于注解的-aop" tabindex="-1"><a class="header-anchor" href="#如何实现基于注解的-aop" aria-hidden="true">#</a> 如何实现基于注解的 AOP</h3>
<ol>
<li>引入 spring-boot-starter-aop 依赖</li>
<li>配置类上 @EnableAspectJAutoProxy 启动 AOP 代理</li>
<li>使用 @Aspect, @Component 定义切面</li>
<li>@Pointcut 定义连接点、@Before, @After 定义通知</li>
<li>运行程序</li>
</ol>
<h3 id="aop-的缺点" tabindex="-1"><a class="header-anchor" href="#aop-的缺点" aria-hidden="true">#</a> AOP 的缺点？</h3>
<ul>
<li>调试困难：某些功能是在运行时动态应用的，这可能导致代码调试困难。</li>
<li>性能影响：大量使用切面时，可能对性能造成影响。</li>
<li>可读性差：AOP 代码可读性差，因为它包含大量的切入点和通知逻辑。</li>
<li>配置复杂：使用 AOP 需要编写大量的配置代码，这可能导致配置过程变得复杂。</li>
<li>Spring AOP 不是完全的 AOP 解决方案：与 AspectJ 等完整的 AOP 解决方案相比，Spring AOP 的功能相对有限。例如，它只支持方法级的切面编程。</li>
</ul>
<h2 id="bean" tabindex="-1"><a class="header-anchor" href="#bean" aria-hidden="true">#</a> Bean</h2>
<h3 id="bean-的作用域" tabindex="-1"><a class="header-anchor" href="#bean-的作用域" aria-hidden="true">#</a> Bean 的作用域</h3>
<ul>
<li>singleton：默认的，单例</li>
<li>prototype：多例</li>
<li>request：一个请求一个 Bean（Web 专用）</li>
<li>session：一个会话一个 Bean（Web 专用）</li>
<li>global session：portlet 专用</li>
<li>application：一个应用一个 Bean（Web 专用）</li>
<li>websocket：一个 websocket 生命周期一个 Bean（Web 专用）</li>
<li>自定义 scope：很少使用</li>
</ul>
<h3 id="bean-的生命周期" tabindex="-1"><a class="header-anchor" href="#bean-的生命周期" aria-hidden="true">#</a> Bean 的生命周期</h3>
<ol>
<li>实例化 Bean</li>
<li>属性赋值：构造注入或 set 注入</li>
<li>初始化 Bean <code v-pre>init-method</code></li>
<li>使用 Bean <code v-pre>getBean();</code></li>
<li>销毁 Bean <code v-pre>destroy-method</code></li>
</ol>
<p>编写一个类实现 <code v-pre>BeanPostProcessor</code>，重写 <code v-pre>postProcessBeforeInitialization</code> 和 <code v-pre>postProcessAfterInitialization</code> 方法，可以在第 3 步初始化 Bean 之前和之后添加代码。</p>
<ol>
<li>实例化 Bean</li>
<li>属性赋值：构造注入或 set 注入</li>
<li><strong>Bean 后处理器的 before 方法</strong></li>
<li>初始化 Bean <code v-pre>init-method</code></li>
<li><strong>Bean 后处理器的 after 方法</strong></li>
<li>使用 Bean <code v-pre>getBean();</code></li>
<li>销毁 Bean <code v-pre>destroy-method</code></li>
</ol>
<h2 id="spring-事务" tabindex="-1"><a class="header-anchor" href="#spring-事务" aria-hidden="true">#</a> Spring 事务</h2>
<h3 id="spring-中的实现方式" tabindex="-1"><a class="header-anchor" href="#spring-中的实现方式" aria-hidden="true">#</a> Spring 中的实现方式</h3>
<ol>
<li>编程式
<ol>
<li>TransactionTemplate</li>
<li>TransactionManager</li>
</ol>
</li>
<li>声明式
<ol>
<li><code v-pre>@Transactional</code> 注解</li>
</ol>
</li>
</ol>
<h3 id="spring-事务有哪几种传播行为" tabindex="-1"><a class="header-anchor" href="#spring-事务有哪几种传播行为" aria-hidden="true">#</a> Spring 事务有哪几种传播行为</h3>
<ol>
<li>TransactionDefinition.PROPAGATION_<strong>REQUIRED</strong>
<ul>
<li>使用最多，<code v-pre>@Transactional</code> 注解默认</li>
<li>如果当前存在事务则加入</li>
<li>没有则新建</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_<strong>REQUIRES_NEW</strong>
<ul>
<li>有则挂起</li>
<li>新建事务，相互独立</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_<strong>NESTED</strong>
<ul>
<li>有则嵌套</li>
<li>没有则新建。（等价于 ...REQUIRED）</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_<strong>MANDATORY</strong>
<ul>
<li>有则加入</li>
<li>没有则抛出异常</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_<strong>SUPPORTS</strong>
<ul>
<li>有则加入</li>
<li>没有以非事务运行</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_<strong>NOT_SUPPORTED</strong>
<ul>
<li>以非事务运行</li>
<li>有则挂起</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_<strong>NEVER</strong>
<ul>
<li>以非事务运行</li>
<li>有则抛出异常</li>
</ul>
</li>
</ol>
</div></template>



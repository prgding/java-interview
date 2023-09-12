<template><div><h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h1>
<h2 id="spring-、spring-mvc、spring-boot、spring-cloud-简介" tabindex="-1"><a class="header-anchor" href="#spring-、spring-mvc、spring-boot、spring-cloud-简介" aria-hidden="true">#</a> Spring 、Spring MVC、Spring Boot、Spring Cloud 简介</h2>
<ul>
<li>Spring Framework 是这些的基础，是控制反转容器。</li>
<li>Spring MVC 是 Spring 的快速搭建 Web 应用的一个模块。</li>
<li>Spring Boot 简化了配置，做到开箱即用。</li>
<li>Spring Cloud 是一个微服务框架，结合 Spring Boot 可以快速开发分布式应用。</li>
</ul>
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
<p>将事务、日志、安全等非业务代码在不改变原代码的情况下穿插于业务代码中的一种编程方式叫做 AOP，面向切面编程。</p>
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
<h3 id="aop-能做什么" tabindex="-1"><a class="header-anchor" href="#aop-能做什么" aria-hidden="true">#</a> AOP 能做什么？</h3>
<ol>
<li>AOP适合用来做一些「<strong>比较通用的、与业务关系不大的</strong>」事情。</li>
<li>日志记录，性能统计，安全控制，事务处理，异常处理等等。</li>
</ol>
<h3 id="aop-的缺点" tabindex="-1"><a class="header-anchor" href="#aop-的缺点" aria-hidden="true">#</a> AOP 的缺点？</h3>
<ul>
<li>调试困难：某些功能是在运行时动态应用的，这可能导致代码调试困难。</li>
<li>性能影响：大量使用切面时，可能对性能造成影响。</li>
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
<h3 id="spring-事务有哪几种传播级别" tabindex="-1"><a class="header-anchor" href="#spring-事务有哪几种传播级别" aria-hidden="true">#</a> Spring 事务有哪几种传播级别</h3>
<ol>
<li>TransactionDefinition.PROPAGATION_REQUIRED
<ul>
<li>使用最多，<code v-pre>@Transactional</code> 注解默认</li>
<li>如果当前存在事务则加入</li>
<li>没有则新建</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_REQUIRES_NEW
<ul>
<li>有则挂起</li>
<li>新建事务，相互独立</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_NESTED
<ul>
<li>有则嵌套</li>
<li>没有则新建。（等价于 ...REQUIRED）</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_MANDATORY
<ul>
<li>有则加入</li>
<li>没有则抛出异常</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_SUPPORTS
<ul>
<li>有则加入</li>
<li>没有以非事务运行</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_NOT_SUPPORTED
<ul>
<li>以非事务运行</li>
<li>有则挂起</li>
</ul>
</li>
<li>TransactionDefinition.PROPAGATION_NEVER
<ul>
<li>以非事务运行</li>
<li>有则抛出异常</li>
</ul>
</li>
</ol>
</div></template>



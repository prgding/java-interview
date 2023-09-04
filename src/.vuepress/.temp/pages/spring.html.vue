<template><div><h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h1>
<h2 id="spring-、spring-mvc、spring-boot、spring-cloud-简介" tabindex="-1"><a class="header-anchor" href="#spring-、spring-mvc、spring-boot、spring-cloud-简介" aria-hidden="true">#</a> Spring 、Spring MVC、Spring Boot、Spring Cloud 简介</h2>
<ul>
<li>Spring Framework 是这些的基础，是控制反转容器。</li>
<li>Spring MVC 是 Spring 的快速搭建 Web 应用的一个模块。</li>
<li>Spring Boot 简化了配置，做到开箱即用。</li>
<li>Spring Cloud 是一个微服务框架，结合 Spring Boot 可以快速开发分布式应用。</li>
</ul>
<h2 id="spring-boot-常用注解" tabindex="-1"><a class="header-anchor" href="#spring-boot-常用注解" aria-hidden="true">#</a> Spring Boot 常用注解</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 启动：</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>

<span class="token comment">// 分层：</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RestController</span>

<span class="token comment">// 应用：</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@AutoWired</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@RequestParam</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-核心模块" tabindex="-1"><a class="header-anchor" href="#spring-核心模块" aria-hidden="true">#</a> Spring 核心模块</h2>
<ol>
<li>Spring Core (IoC)</li>
<li>Spring AOP</li>
<li>Spring DAO</li>
<li>Spring ORM</li>
<li>Spring Web</li>
<li>Spring Web MVC</li>
<li>Spring WebFlux</li>
</ol>
<h2 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h2>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么？</h3>
<p>将事务、日志、安全等非业务代码穿插于业务代码中的一种编程方式叫做 AOP，面向切面编程。</p>
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
<li>AOP适合用来做一些**「比较通用的、与业务关系不大的」**事情。</li>
<li>日志记录，性能统计，安全控制，事务处理，异常处理等等。</li>
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
<li>@Transactional 注解</li>
</ol>
</li>
</ol>
</div></template>



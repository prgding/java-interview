<template><div><h1 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot" aria-hidden="true">#</a> Spring Boot</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动装配原理" tabindex="-1"><a class="header-anchor" href="#自动装配原理" aria-hidden="true">#</a> 自动装配原理</h2>
<ol>
<li>
<p>什么是 SpringBoot 自动装配？</p>
<p>当在项目中添加了某些特定的库或依赖时，Spring Boot 会自动配置这些库或依赖所需要的 Beans 和默认设置。</p>
</li>
<li>
<p>SpringBoot 是如何实现自动装配的？如何实现按需加载？</p>
<ol>
<li>Spring Boot 启动类上有一个注解 @SpringBootApplication, 这个注解里面有三个主要注解：
<ol>
<li>SpringBootConfiguration</li>
<li>EnableAutoConfiguration</li>
<li>ComponentScan</li>
</ol>
</li>
<li>其中 EnableAutoConfiguration 是实现自动化的核心注解，该注解通过 @Import 一个AutoConfigurationImportSelector.class，这个类中读取了该项目和引用的 Jar 包中的 META-INF/spring.factoreis 中的内容</li>
<li>使用一系列 <code v-pre>@Conditional</code> 注解，确保只有在满足条件情况下配置才会生效，实现按需加载。</li>
</ol>
</li>
</ol>
<h2 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置" aria-hidden="true">#</a> 多环境配置</h2>
<h3 id="文件命名" tabindex="-1"><a class="header-anchor" href="#文件命名" aria-hidden="true">#</a> 文件命名</h3>
<ul>
<li>主配置文件：application.properties / yml</li>
<li>多配置：
<ul>
<li>开发环境：application-dev.properties / yml</li>
<li>测试环境：application-test.properties / yml</li>
<li>生产环境：application-prod.properties / yml</li>
</ul>
</li>
</ul>
<h3 id="激活配置方式" tabindex="-1"><a class="header-anchor" href="#激活配置方式" aria-hidden="true">#</a> 激活配置方式</h3>
<ol>
<li>主配置文件方式：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring.profiles.active=dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>命令行方式：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> myapp.jar <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>环境变量方式：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">SPIRNG_PROFILES_ACTIVE</span><span class="token operator">=</span>prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分环境创建-bean" tabindex="-1"><a class="header-anchor" href="#分环境创建-bean" aria-hidden="true">#</a> 分环境创建 Bean</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DevConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">"dev"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBean</span> <span class="token function">devBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyDevBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊情况" tabindex="-1"><a class="header-anchor" href="#特殊情况" aria-hidden="true">#</a> 特殊情况</h3>
<p>当特定的环境配置不提供某些属性，会使用主配置中的内容</p>
</div></template>



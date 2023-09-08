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
<p>SpringBoot 是如何实现自动装配的？如何实现按需加载？<br>
1.</p>
</li>
<li>
<p>如何实现一个 Starter？</p>
</li>
</ol>
</div></template>



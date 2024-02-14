<template><div><h1 id="spring-cloud" tabindex="-1"><a class="header-anchor" href="#spring-cloud" aria-hidden="true">#</a> Spring Cloud</h1>
<h2 id="how-to-create-a-demo" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-demo" aria-hidden="true">#</a> How to create a demo?</h2>
<ol>
<li>
<p>Use IDEA <code v-pre>Spring Initializr</code> to create a template. Just choose Maven, Ignore the version.</p>
</li>
<li>
<p>Select <code v-pre>Spring Web</code>、<code v-pre>Lombok</code>、 <code v-pre>DevTools</code>、<code v-pre>MySQL Driver(Optional)</code>, then <code v-pre>create</code>.</p>
</li>
<li>
<p>We assume that the <code v-pre>oneApp</code> module is the caller, so when we use <code v-pre>Spring Initializr</code> to create it, we select <code v-pre>openfeign</code> and <code v-pre>loadbalancer</code> dependencies. At the same time, we create a callee called <code v-pre>twoApp</code> without any dependencies.</p>
</li>
<li>
<p>Delete unnecessary dirs and files: <code v-pre>(rm -rf src .mvn HELP.md mvnw mvnw.cmd); (cd oneApp; rm -rf .mvn HELP.md mvnw mvnw.cmd;); (cd twoApp; rm -rf .mvn HELP.md mvnw mvnw.cmd;)</code></p>
</li>
<li>
<p>Open top pom.xml</p>
<ol>
<li>Add <code v-pre>&lt;packaging&gt;pom&lt;/packaging&gt;</code></li>
<li>Google <code v-pre>nacos 版本对应</code>
<ol>
<li>Change the <code v-pre>spring-boot-starter-parent</code> version.</li>
<li>Maven search <code v-pre>spring-cloud-starter-alibaba-nacos-discovery</code> and select the right version.</li>
<li>Change <code v-pre>&lt;spring-cloud.version&gt;</code> in <code v-pre>oneApp's</code> pom.xml to suitable version.</li>
</ol>
</li>
<li>Add <code v-pre>&lt;modules&gt;</code></li>
<li>Copy <code v-pre>&lt;groupId&gt;</code>, <code v-pre>&lt;artifactId&gt;</code>,<code v-pre>&lt;version&gt;</code> (outside <code v-pre>&lt;parent&gt;</code>)to submodules' <code v-pre>&lt;parent&gt;</code>, rewrite original content.</li>
</ol>
</li>
<li>
<p>Open <code v-pre>oneApp's</code> application.properties add content following:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">server.port</span><span class="token operator">=</span><span class="token number">8001</span>
<span class="token assign-left variable">spring.application.name</span><span class="token operator">=</span>oneApp
spring.cloud.nacos.server-addr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Open <code v-pre>twoApp's</code>, add:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">server.port</span><span class="token operator">=</span><span class="token number">8002</span>
<span class="token assign-left variable">spring.application.name</span><span class="token operator">=</span>twoApp
spring.cloud.nacos.server-addr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Add <code v-pre>@EnableFeignClients</code> to <code v-pre>oneApp's</code> startup class.</p>
</li>
<li>
<p>Run nacos: <code v-pre>cd path-to-your-nacos/bin; sh startup.sh -m standalone</code></p>
</li>
<li>
<p>Now we add a controller in <code v-pre>twoApp</code>, which returns a String: <code v-pre>This is from twoApp project</code>, example:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/twoUrl"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"This is from twoApp project"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Then we add an interface in <code v-pre>oneApp</code>, example like this:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// This depend on two's 'spring.application.name'</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">"twoApp"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TwoFeignController</span> <span class="token punctuation">{</span>
    <span class="token comment">// map to two's controller mapping.</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/twoUrl"</span><span class="token punctuation">)</span>
    <span class="token comment">// function name is customizable.</span>
    <span class="token class-name">String</span> <span class="token function">invokeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Add a controller in <code v-pre>oneApp</code>, like this:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">TwoFeignController</span> twoFeignController<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/one"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"From oneApp"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/two"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> twoFeignController<span class="token punctuation">.</span><span class="token function">invokeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Start <code v-pre>oneApp</code> and <code v-pre>twoApp</code></p>
</li>
<li>
<p>Open URL: <code v-pre>http://127.0.0.1:8848/nacos</code>, username/password is the same <code v-pre>nacos</code>. Go to <code v-pre>ServiceManagement/Service List</code>, we will find these two application.</p>
</li>
<li>
<p>Then we can access <code v-pre>http://127.0.0.1:8001/one</code>, result will be <code v-pre>&quot;From oneApp&quot;</code>, means that the application is running fine. Then we access <code v-pre>http://127.0.0.1:8001/two</code>, we can see the message from the other application, it means that remote invoke successfully.</p>
</li>
</ol>
</div></template>



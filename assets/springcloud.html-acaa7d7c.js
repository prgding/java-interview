import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,d as s}from"./app-a9a45d1d.js";const o={},t=s(`<h1 id="spring-cloud" tabindex="-1"><a class="header-anchor" href="#spring-cloud" aria-hidden="true">#</a> Spring Cloud</h1><h2 id="how-to-create-a-demo" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-demo" aria-hidden="true">#</a> How to create a demo?</h2><ol><li><p>Use IDEA <code>Spring Initializr</code> to create a template. Just choose Maven, Ignore the version, called <code>cloud-study</code>.</p></li><li><p>Select <code>Spring Web</code>、<code>Lombok</code>、 <code>DevTools</code>、<code>MySQL Driver(Optional)</code>, then <code>create</code>.</p></li><li><p>We assume that the <code>oneApp</code> module is the caller, so when we use <code>Spring Initializr</code> to create it, we select <code>openfeign</code> and <code>loadbalancer</code> dependencies. At the same time, we create a callee called <code>twoApp</code> without any dependencies.</p></li><li><p>Delete unnecessary dirs and files: <code>(rm -rf src .mvn HELP.md mvnw mvnw.cmd); (cd oneApp; rm -rf .mvn HELP.md mvnw mvnw.cmd;); (cd twoApp; rm -rf .mvn HELP.md mvnw mvnw.cmd;)</code></p></li><li><p>Open top pom.xml</p><ol><li>Add <code>&lt;packaging&gt;pom&lt;/packaging&gt;</code></li><li>Google <code>nacos 版本对应</code><ol><li>Change the <code>spring-boot-starter-parent</code> version.</li><li>Maven search <code>spring-cloud-starter-alibaba-nacos-discovery</code> and select the right version.</li><li>Change <code>&lt;spring-cloud.version&gt;</code> in <code>oneApp&#39;s</code> pom.xml to suitable version.</li></ol></li><li>Add <code>&lt;modules&gt;</code></li><li>Copy <code>&lt;groupId&gt;</code>, <code>&lt;artifactId&gt;</code>,<code>&lt;version&gt;</code> (outside <code>&lt;parent&gt;</code>)to submodules&#39; <code>&lt;parent&gt;</code>, rewrite original content.</li></ol></li><li><p>Open <code>oneApp&#39;s</code> application.properties add content following:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">server.port</span><span class="token operator">=</span><span class="token number">8001</span>
<span class="token assign-left variable">spring.application.name</span><span class="token operator">=</span>oneApp
spring.cloud.nacos.server-addr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Open <code>twoApp&#39;s</code>, add:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">server.port</span><span class="token operator">=</span><span class="token number">8002</span>
<span class="token assign-left variable">spring.application.name</span><span class="token operator">=</span>twoApp
spring.cloud.nacos.server-addr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Add <code>@EnableFeignClients</code> to <code>oneApp&#39;s</code> startup class.</p></li><li><p>Run nacos: <code>cd path-to-your-nacos/bin; sh startup.sh -m standalone</code></p></li><li><p>Now we add a controller in <code>twoApp</code>, which returns a String: <code>This is from twoApp project</code>, example:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/twoUrl&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;This is from twoApp project&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Then we add an interface in <code>oneApp</code>, example like this:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// This depends on twoApp&#39;s &#39;spring.application.name&#39;</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">&quot;twoApp&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TwoFeignController</span> <span class="token punctuation">{</span>
    <span class="token comment">// Map to two&#39;s controller mapping.</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/twoUrl&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// Function name is customizable.</span>
    <span class="token class-name">String</span> <span class="token function">invokeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Add a controller in <code>oneApp</code>, like this:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">TwoFeignController</span> twoFeignController<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/one&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;From oneApp&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/two&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> twoFeignController<span class="token punctuation">.</span><span class="token function">invokeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Start <code>oneApp</code> and <code>twoApp</code></p></li><li><p>Open URL: <code>http://127.0.0.1:8848/nacos</code>, username/password is the same <code>nacos</code>. Go to <code>ServiceManagement/Service List</code>, we will find these two application.</p></li><li><p>Then we can access <code>http://127.0.0.1:8001/one</code>, result will be <code>&quot;From oneApp&quot;</code>, means that the application is running fine. Then we access <code>http://127.0.0.1:8001/two</code>, we can see the message from the other application, it means that the remote call is successful.</p></li></ol><h2 id="how-to-use-connection-pool" tabindex="-1"><a class="header-anchor" href="#how-to-use-connection-pool" aria-hidden="true">#</a> How to use connection pool?</h2><ol><li>One way is that adding <code>feign-okhttp</code> dependency to caller&#39;s pom.xml.</li><li>Add config <code>spring.cloud.openfeign.okhttp.enabled=true</code> to <code>oneApp</code></li><li>Check: <ol><li>Add breakpoint to <code>execute()</code> in <code>FeignBlockingLoadBalancerClient.java</code></li><li>Access feign controller, wait for IDEA to run to breakpoint, see <code>this -&gt; delegate</code>, will find something about okhttp.</li></ol></li></ol><h2 id="extract-feign-api-a-better-implementation" tabindex="-1"><a class="header-anchor" href="#extract-feign-api-a-better-implementation" aria-hidden="true">#</a> Extract feign api(A better implementation)</h2><ol><li>New Submodule of <code>cloud-study</code></li></ol>`,7),i=[t];function c(p,l){return e(),a("div",null,i)}const u=n(o,[["render",c],["__file","springcloud.html.vue"]]);export{u as default};
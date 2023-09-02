<template><div><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1>
<h2 id="mysql-常见字段类型" tabindex="-1"><a class="header-anchor" href="#mysql-常见字段类型" aria-hidden="true">#</a> MySQL 常见字段类型</h2>
<figure><img src="@source/mysql.assets/fields.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="mysql-常用语句" tabindex="-1"><a class="header-anchor" href="#mysql-常用语句" aria-hidden="true">#</a> mysql 常用语句</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">`</span>tname<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	<span class="token identifier"><span class="token punctuation">`</span>column_name<span class="token punctuation">`</span></span> <span class="token keyword">type</span><span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token identifier"><span class="token punctuation">`</span>tname<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>f1<span class="token punctuation">,</span>f2<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> tname <span class="token keyword">set</span> f1<span class="token operator">=</span>v1<span class="token punctuation">,</span> f2<span class="token operator">=</span>v2 <span class="token punctuation">[</span><span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> tname <span class="token punctuation">[</span><span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> f1 <span class="token keyword">from</span> tname <span class="token keyword">where</span> f1 <span class="token operator">like</span> condition<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mysql-函数" tabindex="-1"><a class="header-anchor" href="#mysql-函数" aria-hidden="true">#</a> mysql 函数</h2>
<h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>char_length<span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
concat<span class="token punctuation">(</span>str1<span class="token punctuation">,</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
locate<span class="token punctuation">(</span>s<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span> s <span class="token operator">in</span> str<span class="token punctuation">;</span>
lower<span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
upper<span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
trim<span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token function">min</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">max</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sum</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">avg</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
abs<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
pow<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> x<span class="token operator">^</span>y<span class="token punctuation">;</span>
rand<span class="token punctuation">(</span><span class="token punctuation">)</span> rand num <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期" tabindex="-1"><a class="header-anchor" href="#日期" aria-hidden="true">#</a> 日期</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>curdate<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
curtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">date</span> <span class="token operator">+</span> <span class="token keyword">time</span><span class="token punctuation">;</span>

<span class="token keyword">year</span><span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> the <span class="token keyword">year</span> <span class="token keyword">of</span> <span class="token keyword">date</span><span class="token punctuation">;</span>
<span class="token keyword">month</span><span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">day</span><span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">hour</span><span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">minute</span><span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">second</span><span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

adddate<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">,</span>days<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">add</span> days <span class="token keyword">to</span> <span class="token keyword">date</span><span class="token punctuation">;</span>
addtime<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> timeexp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">add</span> timeexp <span class="token keyword">to</span> <span class="token keyword">time</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效" aria-hidden="true">#</a> 索引失效</h2>
<ol>
<li><a href="https://mp.weixin.qq.com/s/lEx6iRRP3MbwJ82Xwp675w" target="_blank" rel="noopener noreferrer">6 种失效情况<ExternalLinkIcon/></a></li>
</ol>
<figure><img src="@source/mysql.assets/640.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<ol start="2">
<li><a href="https://www.xiaolincoding.com/mysql/index/index_interview.html#%E9%98%B2%E6%AD%A2%E7%B4%A2%E5%BC%95%E5%A4%B1%E6%95%88" target="_blank" rel="noopener noreferrer">防止索引失效<ExternalLinkIcon/></a></li>
</ol>
<h2 id="慢查询优化" tabindex="-1"><a class="header-anchor" href="#慢查询优化" aria-hidden="true">#</a> <a href="https://chat.openai.com/c/b37ae682-d06e-48d3-b1d6-2d8fae025ada" target="_blank" rel="noopener noreferrer">慢查询优化<ExternalLinkIcon/></a></h2>
<ol>
<li>使用 explain 分析执行计划</li>
<li>为经常查询的字段创建索引</li>
<li>尽量避免 select *</li>
<li>调整mysql缓存大小配置，定期检查慢查询日志</li>
<li>硬件升级</li>
</ol>
<h2 id="表连接查询种类及区别" tabindex="-1"><a class="header-anchor" href="#表连接查询种类及区别" aria-hidden="true">#</a> 表连接查询种类及区别</h2>
<ol>
<li>内查询</li>
<li>左外查询</li>
<li>右外查询</li>
<li>全外查询</li>
<li>交叉查询。笛卡尔积</li>
</ol>
<h2 id="mybatis-xml-标签" tabindex="-1"><a class="header-anchor" href="#mybatis-xml-标签" aria-hidden="true">#</a> mybatis xml 标签</h2>
<ol>
<li><strong>&lt;mapper&gt;</strong>：映射文件的根元素。它通常包含一个或多个 SQL 映射语句。</li>
<li><strong>&lt;select&gt;</strong>：定义一个 SELECT 语句。</li>
<li><strong>&lt;insert&gt;</strong>：定义一个 INSERT 语句。</li>
<li><strong>&lt;update&gt;</strong>：定义一个 UPDATE 语句。</li>
<li><strong>&lt;delete&gt;</strong>：定义一个 DELETE 语句。</li>
<li><strong>&lt;sql&gt;</strong>：定义可重用的 SQL 片段。</li>
<li><strong>&lt;include&gt;</strong>：在其他语句中插入一个 SQL 片段。</li>
<li><strong>&lt;resultMap&gt;</strong>：描述如何从数据库结果集中加载对象。它可以定义列到字段的映射、关联、集合等。</li>
<li><strong>&lt;parameterMap&gt;</strong>：虽然现在不推荐使用，但它可以描述传递给语句的参数。</li>
<li><strong>&lt;typeAliases&gt;</strong>：提供一个类型的别名，使其在 XML 中的引用更加简洁。</li>
<li><strong>&lt;typeHandlers&gt;</strong>：定义如何转换 Java 类型到 JDBC 类型。</li>
<li>动态 SQL 元素：如 <code v-pre>&lt;if&gt;</code>, <code v-pre>&lt;choose&gt;</code>, <code v-pre>&lt;when&gt;</code>, <code v-pre>&lt;otherwise&gt;</code>, <code v-pre>&lt;foreach&gt;</code>, <code v-pre>&lt;set&gt;</code>, <code v-pre>&lt;trim&gt;</code>, <code v-pre>&lt;where&gt;</code>, <code v-pre>&lt;bind&gt;</code>。这些可以用于构造动态的 SQL 语句。</li>
</ol>
</div></template>



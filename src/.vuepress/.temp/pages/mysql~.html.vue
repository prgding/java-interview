<template><div><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1>
<h2 id="mysql-常见字段类型" tabindex="-1"><a class="header-anchor" href="#mysql-常见字段类型" aria-hidden="true">#</a> MySQL 常见字段类型</h2>
<figure><img src="@source/mysql.assets/fields.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="mysql-常用语句" tabindex="-1"><a class="header-anchor" href="#mysql-常用语句" aria-hidden="true">#</a> MySQL 常用语句</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">`</span>tname<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	<span class="token identifier"><span class="token punctuation">`</span>column_name<span class="token punctuation">`</span></span> <span class="token keyword">type</span><span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token identifier"><span class="token punctuation">`</span>tname<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>f1<span class="token punctuation">,</span>f2<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> tname <span class="token keyword">set</span> f1<span class="token operator">=</span>v1<span class="token punctuation">,</span> f2<span class="token operator">=</span>v2 <span class="token punctuation">[</span><span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> tname <span class="token punctuation">[</span><span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> f1 <span class="token keyword">from</span> tname <span class="token keyword">where</span> f1 <span class="token operator">like</span> condition<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mysql-函数" tabindex="-1"><a class="header-anchor" href="#mysql-函数" aria-hidden="true">#</a> MySQL 函数</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表连接查询种类及区别" tabindex="-1"><a class="header-anchor" href="#表连接查询种类及区别" aria-hidden="true">#</a> 表连接查询种类及区别</h2>
<ol>
<li>内查询</li>
<li>左外查询</li>
<li>右外查询</li>
<li>全外查询</li>
<li>交叉查询。笛卡尔积</li>
</ol>
<h2 id="mybatis-xml-标签" tabindex="-1"><a class="header-anchor" href="#mybatis-xml-标签" aria-hidden="true">#</a> MyBatis XML 标签</h2>
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
<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<p>是一种排好序的数据结构，能够快速检索数据。MySQL 中使用 B+ 树作为索引结构。</p>
<h3 id="mysql-索引种类" tabindex="-1"><a class="header-anchor" href="#mysql-索引种类" aria-hidden="true">#</a> MySQL 索引种类</h3>
<ul>
<li>按数据结构：B+ 树、哈希、全文</li>
<li>物理存储：
<ul>
<li>聚簇索引：索引 + 数据，例如 B+ 树中，上面是索引，下面叶子有数据。</li>
<li>二级索引：叶子节点存主键值，不存数据。</li>
</ul>
</li>
<li>字段特性：
<ul>
<li>主键索引（PRIMARY KEY）：非空、列值唯一、表中唯一</li>
<li>唯一索引（UNIQUE KEY）：可为空、值唯一、表中可多个</li>
<li>普通索引（INDEX）：加速查询</li>
<li>联合索引：多列</li>
</ul>
</li>
</ul>
<h3 id="为什么-mysql-选择-b-树" tabindex="-1"><a class="header-anchor" href="#为什么-mysql-选择-b-树" aria-hidden="true">#</a> 为什么 MySQL 选择 B+ 树</h3>
<p>对一个没有使用索引的 MySQL 进行逐步优化，大概是这样的流程：</p>
<ol>
<li>使用数组，排好序，二分查找，但是
<ol>
<li>每次查找需要计算中间位置</li>
<li>插入新元素性能低。</li>
</ol>
</li>
<li>二分查找树（Binary Search Tree）解决了上述两个问题，但是有一个新的问题，如果每次插入的元素都是最大的元素，或者越来越小，那么 BST 就退化成一条链表了。</li>
<li>自平衡二叉树（Adelson-Velsky and Landis Tree）有左右子树高度差不超过 1 的约束，这样就解决了 BST 退化成链表的问题。但是随着元素增多，树的高度会变高，意味着 I/O 次数多。</li>
<li>B 树允许 2 个以上子节点，解决了树过高问题。但是每个节点都存有数据，导致很多不必要的 I/O 操作。</li>
<li>B+ 树则数据仅存储在叶子节点，这样不仅减少了不必要的 I/O，也为提高了更新节点的效率。</li>
</ol>
<h3 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效" aria-hidden="true">#</a> <a href="https://mp.weixin.qq.com/s/lEx6iRRP3MbwJ82Xwp675w" target="_blank" rel="noopener noreferrer">索引失效<ExternalLinkIcon/></a></h3>
<ol>
<li>左或左右模糊匹配</li>
<li>使用函数（查询索引列）</li>
<li>索引列是字符串，查询参数为数字（使用 CAST 函数）</li>
<li>使用表达式计算（索引列）</li>
<li>联合索引未遵循最左匹配</li>
<li>WHERE 子句中，OR 前是索引列，OR 后不是索引列</li>
</ol>
<h2 id="sql-优化" tabindex="-1"><a class="header-anchor" href="#sql-优化" aria-hidden="true">#</a> SQL 优化</h2>
<h3 id="定位慢查询" tabindex="-1"><a class="header-anchor" href="#定位慢查询" aria-hidden="true">#</a> 定位慢查询</h3>
<ol>
<li>
<p>使用工具：</p>
<ol>
<li>调试工具：Arthas</li>
<li>运维工具：Prometheus、Skywalking</li>
</ol>
</li>
<li>
<p>MySQL 自带慢日志</p>
<ol>
<li>在 /etc/my.cnf 中写入配置</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 开启慢日志</span>
<span class="token assign-left variable">slow_query_log</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 超过 2 秒会被记录</span>
<span class="token assign-left variable">long_query_time</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在 /var/lib/mysql/localhost-slow.log 中可以查看具体内容</li>
</ol>
</li>
</ol>
<h3 id="优化慢查询" tabindex="-1"><a class="header-anchor" href="#优化慢查询" aria-hidden="true">#</a> 优化慢查询</h3>
<ol>
<li>使用 explain 分析执行计划
<ol>
<li>通过 key 或 key_len 检查是否命中索引</li>
<li>通过 type 字段查看是否有进一步优化空间</li>
<li>通过 extra 判断是否出现了回表的情况，如果出现可以：
<ol>
<li>添加索引</li>
<li>修改返回字段</li>
</ol>
</li>
</ol>
</li>
<li>为经常查询的字段创建索引</li>
<li>尽量避免 select *</li>
<li>调整 MySQL 缓存大小配置，定期检查慢查询日志</li>
<li>硬件升级</li>
</ol>
</div></template>



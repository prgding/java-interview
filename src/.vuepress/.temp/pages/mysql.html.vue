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
<h2 id="sql-执行流程" tabindex="-1"><a class="header-anchor" href="#sql-执行流程" aria-hidden="true">#</a> SQL 执行流程</h2>
<ol>
<li>客户端和服务端的连接：MySQL 登陆，数据库表权限验证</li>
<li>核心层：查询缓存、分析器分析语句、优化器优化语句</li>
<li>存储引擎：执行器调用存储引擎 API 获取数据</li>
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
<li>唯一索引（UNIQUE KEY）：可为空、列值唯一、表中可多个</li>
<li>普通索引（INDEX）：加速查询</li>
<li>联合索引：多列</li>
</ul>
</li>
</ul>
<h3 id="为什么-mysql-选择-b-树" tabindex="-1"><a class="header-anchor" href="#为什么-mysql-选择-b-树" aria-hidden="true">#</a> 为什么 MySQL 选择 B+ 树</h3>
<p>因为其他的数据结构都无法达到 B+ 树的这种性能。</p>
<p>例如：</p>
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
<li>类型隐式转换（索引列是字符串，查询参数为数字，本质是使用了 CAST 函数）</li>
<li>使用表达式计算（索引列）</li>
<li>联合索引未遵循最左匹配</li>
<li>WHERE 子句中，OR 前面是索引列，后面不是索引列</li>
</ol>
<h2 id="mysql-优化" tabindex="-1"><a class="header-anchor" href="#mysql-优化" aria-hidden="true">#</a> MySQL 优化</h2>
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
<li><strong>SQL 语句优化</strong>：
<ol>
<li>尽量避免 select *</li>
<li>避免索引失效的写法</li>
<li>聚合查询尽量用 union all 代替 union，因为 union 多一层重复过滤</li>
<li>表关联查询 join 的优化，优先使用内连接，外连接要以小表为驱动</li>
</ol>
</li>
<li>主从复制，读写分离</li>
<li>分库分表</li>
<li>调整 MySQL 缓存大小配置，定期检查慢查询日志</li>
<li>硬件升级</li>
</ol>
<h2 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h2>
<h3 id="锁的种类" tabindex="-1"><a class="header-anchor" href="#锁的种类" aria-hidden="true">#</a> 锁的种类</h3>
<ol>
<li>全局锁：可以用来全库逻辑备份</li>
<li>表级锁
<ol>
<li>表锁</li>
<li>元数据锁</li>
<li>意向锁</li>
<li>自增锁</li>
</ol>
</li>
<li>行锁
<ol>
<li>记录锁</li>
<li>间隙锁</li>
<li>临键锁</li>
<li>插入意向锁</li>
</ol>
</li>
</ol>
<h3 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h3>
<ol>
<li>全局锁</li>
</ol>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># 上锁</span>
flush <span class="token keyword">tables</span> <span class="token keyword">with</span> <span class="token keyword">read</span> <span class="token keyword">lock</span>

<span class="token comment"># 解锁</span>
<span class="token keyword">unlock</span> <span class="token keyword">tables</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>表锁</li>
</ol>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># 加读锁（共享锁）</span>
<span class="token keyword">lock</span> <span class="token keyword">tables</span> <span class="token punctuation">[</span>t_name<span class="token punctuation">]</span> <span class="token keyword">read</span><span class="token punctuation">;</span>

<span class="token comment"># 加写锁（独占锁）</span>
<span class="token keyword">lock</span> <span class="token keyword">tables</span> <span class="token punctuation">[</span>t_name<span class="token punctuation">]</span> <span class="token keyword">write</span><span class="token punctuation">;</span>

<span class="token comment"># 解锁</span>
<span class="token keyword">unlock</span> <span class="token keyword">tables</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="innodb-存储引擎支持哪种锁" tabindex="-1"><a class="header-anchor" href="#innodb-存储引擎支持哪种锁" aria-hidden="true">#</a> InnoDB 存储引擎支持哪种锁？</h3>
<p>InnoDB 主要支持行锁，并在需要的时候也会使用表锁。</p>
<h3 id="简述-mysql-中的乐观锁和悲观锁。" tabindex="-1"><a class="header-anchor" href="#简述-mysql-中的乐观锁和悲观锁。" aria-hidden="true">#</a> 简述 MySQL 中的乐观锁和悲观锁。</h3>
<ul>
<li>乐观锁：认为数据一般情况下不会造成冲突，所以在数据操作前不会加锁，只在提交操作时去检查是否有其他操作更新了这个数据。</li>
<li>悲观锁：认为数据会导致冲突，所以在数据操作前会先加锁，确保数据操作的完整性。</li>
</ul>
<h3 id="什么是死锁-如何避免" tabindex="-1"><a class="header-anchor" href="#什么是死锁-如何避免" aria-hidden="true">#</a> 什么是死锁？如何避免？</h3>
<p>死锁是多个事务在资源上形成循环等待的情况。</p>
<p>MySQL 处理死锁的方式是通过等待超时和死锁检测。</p>
<ul>
<li>使用锁超时，当事务等待锁超过特定时间后，事务自动回滚。</li>
<li>使用死锁检测机制，当检测到死锁时，主动回滚某个事务，打破死锁。</li>
</ul>
<h3 id="mysql-如何实现行锁" tabindex="-1"><a class="header-anchor" href="#mysql-如何实现行锁" aria-hidden="true">#</a> MySQL 如何实现行锁？</h3>
<p>MySQL 主要通过 InnoDB 存储引擎来实现行锁，它使用索引来锁定数据行。如果没有索引，InnoDB 会退化使用表锁。</p>
<h3 id="什么是读锁和写锁" tabindex="-1"><a class="header-anchor" href="#什么是读锁和写锁" aria-hidden="true">#</a> 什么是读锁和写锁？</h3>
<ul>
<li>读锁（共享锁）：允许多个事务同时读取数据，但不允许其他事务进行写操作。</li>
<li>写锁（排他锁）：当事务持有写锁时，不允许其他事务进行读或写操作。</li>
</ul>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2>
<h3 id="四大特性" tabindex="-1"><a class="header-anchor" href="#四大特性" aria-hidden="true">#</a> 四大特性</h3>
<p>Atomicity：原子性<br>
Consistency：一致性<br>
Isolation：隔离性<br>
Durability：持久性</p>
<h3 id="并发事务问题" tabindex="-1"><a class="header-anchor" href="#并发事务问题" aria-hidden="true">#</a> 并发事务问题</h3>
<ol>
<li>脏读：读取未提交的数据（A 读取 B 未提交的数据，B 回滚后 A 的数据是脏数据）</li>
<li>不可重复读：一个事务中多次读取的内容不一样</li>
<li>幻读：多行或少行，数据总量不一样</li>
<li>丢失修改：两个事务同时修改，提交后其中一个事务的修改被覆盖</li>
</ol>
<h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2>
<ol>
<li>读未提交（Read uncommitted）：一个事务可以读到另一个事务未提交的数据</li>
<li>读已提交（Read committed）：一个事务要等另一个事务提交后才能读取数据。解决脏读。</li>
<li>可重复读（Repeatable read）：默认隔离级别，一个事务开始读数据时，不允许其他事务修改。解决脏读和不可重复读。</li>
<li>串行化（Serializable）：最高的隔离级别，可以避免所有问题，但是效率低、消耗数据库性能，一般不使用。</li>
</ol>
<h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc" aria-hidden="true">#</a> MVCC</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>全称 Multi-Versioin Concurrency Control，多版本并发控制。是解决读写冲突的一种机制。</p>
<h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h3>
<ol>
<li>读操作
<ol>
<li>当事务想要读取数据时，它会读取满足其快照的数据版本。</li>
<li>一个事务只能看到它开始时（或之前）存在的数据，不会看到后来其他食物所做的修改</li>
</ol>
</li>
<li>写操作：
<ol>
<li>不覆盖原有数据，而是创建新的版本</li>
</ol>
</li>
</ol>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项：</h3>
<ol>
<li>每个版本都有一个时间戳，表示其创建或失效的时间</li>
<li>垃圾回收是必要的</li>
</ol>
<h3 id="项目中的应用" tabindex="-1"><a class="header-anchor" href="#项目中的应用" aria-hidden="true">#</a> 项目中的应用：</h3>
<ol>
<li>并发控制：高并发系统中，很可能出现多个事务同时读写，使用 MVCC 可以减少冲突和等待时间。</li>
<li>历史查询： MVCC 保存了数据的多个版本，便于查询历史状态。</li>
<li>在线备份：使用 MVCC，可以在不阻塞正常操作的情况下进行数据库备份。</li>
<li>读取的一致性：确保事务读取的数据是一致的，即使在该事务读取过程中，其他事务在修改。</li>
</ol>
<h2 id="一条-sql-语句的执行顺序" tabindex="-1"><a class="header-anchor" href="#一条-sql-语句的执行顺序" aria-hidden="true">#</a> 一条 SQL 语句的执行顺序</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 
    u<span class="token punctuation">.</span>username<span class="token punctuation">,</span> 
    o<span class="token punctuation">.</span>order_id<span class="token punctuation">,</span> 
    p<span class="token punctuation">.</span>product_name<span class="token punctuation">,</span> 
    o<span class="token punctuation">.</span>quantity
<span class="token keyword">FROM</span> users u
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o <span class="token keyword">ON</span> u<span class="token punctuation">.</span>user_id <span class="token operator">=</span> o<span class="token punctuation">.</span>user_id
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> products p <span class="token keyword">ON</span> o<span class="token punctuation">.</span>product_id <span class="token operator">=</span> p<span class="token punctuation">.</span>product_id
<span class="token keyword">WHERE</span> o<span class="token punctuation">.</span>order_date <span class="token operator">BETWEEN</span> <span class="token string">'2023-01-01'</span> <span class="token operator">AND</span> <span class="token string">'2023-12-31'</span>
<span class="token operator">AND</span> p<span class="token punctuation">.</span>product_type <span class="token operator">=</span> <span class="token string">'electronics'</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> o<span class="token punctuation">.</span>order_date <span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>先执行 FROM，确定主查询表。</li>
<li>使用 JOIN 连接其他的表。</li>
<li>使用 WHERE 过滤查询结果。</li>
<li>使用 SELECT 过滤列。</li>
<li>ORDER BY 排序。</li>
<li>LIMIT 限制数量。</li>
</ol>
<h2 id="limit-与分页查询" tabindex="-1"><a class="header-anchor" href="#limit-与分页查询" aria-hidden="true">#</a> Limit 与分页查询</h2>
<ul>
<li>查询前 5 条</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">limit</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>每页 6 条，查询第 2 页。（size = 6, page = 2）</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">limit</span> <span class="token number">6</span> <span class="token keyword">offset</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">limit</span> <span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token keyword">offset</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>page<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>size<span class="token punctuation">]</span>

<span class="token keyword">limit</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">limit</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>page<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>size<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>size<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



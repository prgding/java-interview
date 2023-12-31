<template><div><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1>
<h2 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h2>
<p>原因：大量请求的 key 既不在缓存中，也不在数据库中，导致这些请求直接冲击数据库，数据库可能因过大压力导致宕机。</p>
<p>解决：</p>
<ol>
<li>布隆过滤器：使用布隆过滤器存储所有可能的 key，查询之前先检查过滤器，如果 key 可能存在，再去缓存或数据库中查询，否则直接返回空结果。</li>
<li>空值缓存：对于结果为空的 key，也存入缓存并设置一个较短的过期时间。这样，即使是恶意或异常的查询，也只会在第一次访问数据库，之后的一段时间都会从缓存中获取空结果。</li>
</ol>
<h2 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h2>
<p>原因：大量请求也就是热点数据查询的前一刻，缓存刚好失效，导致这些请求直接冲击数据库，数据库面临瞬时压力过大。</p>
<p>解决：</p>
<ol>
<li>互斥锁：不要让大量请求都进入到数据库中查询，只放行一个，其他的则等待缓存被更新。</li>
<li>热点数据永不过期：某些明确知道的热点数据，可以设置为不过期，采用主动更新的策略</li>
</ol>
<h2 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h2>
<p>原因：同一时间缓存大面积失效，导致这些请求直接冲击数据库，数据库会面临较大压力。</p>
<p>解决：</p>
<ol>
<li>随机过期时间：为不同缓存设置稍微不同的过期时间，避免大量 key 同时过期。</li>
<li>缓存预热：在缓存可能过期前，提前加载所需要的数据。</li>
</ol>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<ul>
<li>
<p>5 种基础类型：String, Hash, List, Set, Zset（有序集合Sorted Set）</p>
</li>
<li>
<p>3 种特殊类型：HyperLogLogs（基数统计）、Bitmap（位存储）、Geospatial（地理位置）、Stream</p>
</li>
<li>
<p>应用场景：</p>
<ul>
<li>
<p>String：缓存、验证码、分布式锁、计数器</p>
</li>
<li>
<p>Hash：对象（用户的多个属性）、配置（动态配置、元数据）、数据缓存（数据库表行数据）</p>
</li>
<li>
<p>List：队列、时间线或动态、最新消息列表</p>
</li>
<li>
<p>Set：IP 地址去重、共同好友</p>
</li>
<li>
<p>Zset：游戏排行榜、时间序列数据、延迟任务队列</p>
</li>
<li>
<p>Bitmap：用户活跃度、特性开关、在线用户数</p>
</li>
<li>
<p>Geo：地理位置查询、计算两点距离</p>
</li>
<li>
<p>HLL：基数统计、数据流中的元素计数</p>
</li>
<li>
<p>Stream：消息队列</p>
</li>
</ul>
</li>
</ul>
<h2 id="redis-为什么快" tabindex="-1"><a class="header-anchor" href="#redis-为什么快" aria-hidden="true">#</a> Redis 为什么快</h2>
<ol>
<li>基于内存</li>
<li>设计了高效的事件处理模型：IO 多路复用、单线程时间循环</li>
<li>内置了多种优化了的数据结构</li>
</ol>
<h2 id="持久化机制" tabindex="-1"><a class="header-anchor" href="#持久化机制" aria-hidden="true">#</a> 持久化机制</h2>
<ol>
<li>RDB (Redis Database)：以快照方式写入磁盘</li>
<li>AOF (Append Only Files)：将 Redis 写操作追加到文件中</li>
<li>RDB + AOF 混合持久化</li>
</ol>
<h2 id="数据一致性" tabindex="-1"><a class="header-anchor" href="#数据一致性" aria-hidden="true">#</a> 数据一致性</h2>
<ol>
<li>
<p>无论是先更新数据库，再更新缓存；或者先更新缓存，再更新数据库。在并发环境下都会出现问题</p>
</li>
<li>
<p>那么就可以考虑删除缓存，请求来到之后发现缓存没有数据，再从数据库中查到，并存入缓存中。这叫做 Cache Aside 策略</p>
</li>
<li>
<p>先删除缓存再更新数据库，会出现不一致的问题</p>
</li>
<li>
<p>先更新数据库再删除缓存，也会出现问题，但是出现的概率不高</p>
</li>
<li>
<p>延迟双删</p>
</li>
<li>
<p>一致性要求高</p>
<ol>
<li>采用 Redisson 的读写锁
<ol>
<li>共享锁：读锁 readLock，其他线程可读</li>
<li>排他锁：独占锁 writeLock，阻塞其他读写</li>
</ol>
</li>
</ol>
</li>
<li>
<p>允许延迟一致</p>
<ol>
<li>使用 MQ 中间件，更新数据后，通知缓存删除</li>
<li>利用 canal 中间件，不需要修改业务代码，伪装 MySQL 的一个从节点，canal 通过读取 binlog 数据更新缓存</li>
</ol>
</li>
</ol>
</div></template>



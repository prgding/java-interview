<template><div><h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> MyBatis</h1>
<h2 id="mybatis-的缓存机制" tabindex="-1"><a class="header-anchor" href="#mybatis-的缓存机制" aria-hidden="true">#</a> MyBatis 的缓存机制</h2>
<ol>
<li>
<p>一级缓存：</p>
<ol>
<li>基于 PerpetualCache 的 HashMap 本地缓存</li>
<li>作用域是 session 级别， session flush 或 close 中，缓存清空</li>
<li>默认打开</li>
</ol>
</li>
<li>
<p>二级缓存：</p>
<ol>
<li>基于 PerpetualCache 的 HashMap 本地缓存</li>
<li>作用域是 namespace 和 mapper 的作用域， 不依赖于 session（范围更大）</li>
</ol>
</li>
<li>
<p>更新机制：某个作用域进行了新增、修改、删除操作后，默认该作用域下的所有 select 中的缓存清空</p>
</li>
<li>
<p>二级缓存需要缓存的数据实现 Serializable 接口</p>
</li>
</ol>
</div></template>



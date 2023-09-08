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
</div></template>



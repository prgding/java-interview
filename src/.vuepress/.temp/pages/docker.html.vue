<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1>
<h2 id="常用命令-以-mysql-为例" tabindex="-1"><a class="header-anchor" href="#常用命令-以-mysql-为例" aria-hidden="true">#</a> 常用命令（以 MySQL 为例）</h2>
<ol>
<li>
<p>拉取镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建容器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>主机端口<span class="token punctuation">]</span>:<span class="token punctuation">[</span>容器应用端口<span class="token punctuation">]</span> <span class="token parameter variable">--name</span> <span class="token punctuation">[</span>自定义容器名称<span class="token punctuation">]</span> <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> 主机文件路径:容器内路径 <span class="token punctuation">\</span>
<span class="token parameter variable">-e</span> 环境变量键<span class="token operator">=</span>值 <span class="token punctuation">\</span>
<span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>:<span class="token punctuation">[</span>版本号<span class="token punctuation">]</span> 或 <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span> <span class="token punctuation">(</span>默认使用 latest<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql8 <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> ~/Dev/Docker/mysql/data:/var/lib/mysql <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> ~/Dev/Docker/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> ~/Dev/Docker/mysql/log:/var/log <span class="token punctuation">\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">111</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>进入容器内的 Terminal，或执行容器内的命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器名称<span class="token punctuation">]</span> <span class="token punctuation">[</span>命令<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql8 /bin/bash
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql8 mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>停止容器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> stop mysql8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除容器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> mysql8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
</div></template>



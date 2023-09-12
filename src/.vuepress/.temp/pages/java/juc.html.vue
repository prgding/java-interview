<template><div><h1 id="java-并发编程" tabindex="-1"><a class="header-anchor" href="#java-并发编程" aria-hidden="true">#</a> Java 并发编程</h1>
<h2 id="线程的创建" tabindex="-1"><a class="header-anchor" href="#线程的创建" aria-hidden="true">#</a> 线程的创建</h2>
<ol>
<li>继承 Thread 类</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> myThread extens <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">myThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>实现 Runnable 接口</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> myRunnable <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">myRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h2>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<p>是一个线程的资源池，有任务时直接从线程池中取出线程来处理，处理完后不立即销毁，而是等待下一个任务。</p>
<h3 id="线程池的参数" tabindex="-1"><a class="header-anchor" href="#线程池的参数" aria-hidden="true">#</a> 线程池的参数</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span> <span class="token comment">//核心线程数量</span>
<span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span> <span class="token comment">//最大线程数</span>
<span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span> <span class="token comment">//多余线程的存活时间</span>
<span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span> <span class="token comment">//时间单位</span>
<span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> workQueue<span class="token punctuation">,</span> <span class="token comment">//任务队列</span>
<span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span> <span class="token comment">//线程工厂</span>
<span class="token class-name">RejectedExecutionHandler</span> handler <span class="token comment">//拒绝策略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池的执行原理" tabindex="-1"><a class="header-anchor" href="#线程池的执行原理" aria-hidden="true">#</a> 线程池的执行原理</h3>
<ol>
<li>判断核心线程数是否已满，若没有，则创建线程</li>
<li>判断等待队列，若没有，则加入队列等待</li>
<li>判断最大线程数，若没有，则创建线程</li>
<li>执行拒绝策略</li>
</ol>
<h3 id="线程池的拒绝策略" tabindex="-1"><a class="header-anchor" href="#线程池的拒绝策略" aria-hidden="true">#</a> 线程池的拒绝策略</h3>
<ol>
<li>AbortPolicy：直接抛出异常，默认策略</li>
<li>CallerRunsPolicy：调用者线程执行任务</li>
<li>DiscardPolicy：直接丢弃任务</li>
<li>DiscardOldestPolicy：丢弃等待队列中最老的，并执行当前任务</li>
</ol>
</div></template>



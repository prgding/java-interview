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
<h2 id="进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#进程和线程的区别" aria-hidden="true">#</a> 进程和线程的区别</h2>
<ol>
<li>基本定义：
<ol>
<li>进程是操作系统分配资源的基本单位</li>
<li>线程是操作系统调度执行的基本单位，是进程内部的一个执行流程。</li>
<li>一个进程可以产生多个线程，同一个进程中的线程共享该进程的资源</li>
</ol>
</li>
<li>资源分配
<ol>
<li>进程间资源相互独立</li>
<li>线程间共享该进程的资源</li>
</ol>
</li>
<li>通信方式
<ol>
<li>进程间通信需要特殊的技术</li>
<li>线程间可以通过读写进程中的共享变量来通信</li>
</ol>
</li>
<li>创建、切换、中止开销
<ol>
<li>进程开销大</li>
<li>线程开销小</li>
</ol>
</li>
<li>独立性与风险
<ol>
<li>进程独立，一个崩溃不影响别的</li>
<li>同一进程间线程紧密相关，一个线程的错误可能影响其他线程</li>
</ol>
</li>
</ol>
<h2 id="有了进程为什么还需要线程" tabindex="-1"><a class="header-anchor" href="#有了进程为什么还需要线程" aria-hidden="true">#</a> 有了进程为什么还需要线程?</h2>
<ol>
<li>线程各方面<strong>开销小</strong>。</li>
<li>线程更<strong>轻量</strong>，一个进程可以创建多个线程。</li>
<li>多个线程可以<strong>并发</strong>处理不同任务，充分利用了 cpu 的多核性能。</li>
<li>同一进程内的线程<strong>共享</strong>内存和文件，相互通信无须调用内核。</li>
</ol>
<h2 id="synchronized-的作用" tabindex="-1"><a class="header-anchor" href="#synchronized-的作用" aria-hidden="true">#</a> synchronized 的作用</h2>
<ol>
<li>控制并发访问，确保某一时刻只有一个线程可以执行特定的代码段</li>
<li>可以同步方法，也可以同步代码块</li>
<li>底层由 monitor 实现</li>
</ol>
<h2 id="volatile-关键字" tabindex="-1"><a class="header-anchor" href="#volatile-关键字" aria-hidden="true">#</a> volatile 关键字</h2>
<ul>
<li>中文翻译：不稳定的</li>
<li>如果声明变量为 volatile ，这就告诉 JVM 这个变量是共享且不稳定的，每次使用都到主存中读取</li>
<li>保证线程间的可见性</li>
<li>禁止进行指令重排序</li>
</ul>
<h2 id="cas" tabindex="-1"><a class="header-anchor" href="#cas" aria-hidden="true">#</a> CAS</h2>
<p>体现乐观锁的思想，在无锁的情况下保证线程操作共享数据的原子性。</p>
<h2 id="reentrantlock-可重入锁相比于-sychronized" tabindex="-1"><a class="header-anchor" href="#reentrantlock-可重入锁相比于-sychronized" aria-hidden="true">#</a> ReentrantLock 可重入锁相比于 sychronized</h2>
<ol>
<li>可中断</li>
<li>可以设置超时时间</li>
<li>可以设置公平锁</li>
<li>支持多个条件变量</li>
<li>与 synchronized 一样，都支持重入</li>
</ol>
</div></template>



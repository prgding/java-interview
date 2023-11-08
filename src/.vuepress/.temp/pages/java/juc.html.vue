<template><div><h1 id="java-并发编程" tabindex="-1"><a class="header-anchor" href="#java-并发编程" aria-hidden="true">#</a> Java 并发编程</h1>
<h2 id="线程的创建" tabindex="-1"><a class="header-anchor" href="#线程的创建" aria-hidden="true">#</a> 线程的创建</h2>
<ol>
<li>继承 Thread 类</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> myThread extens <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
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
    <span class="token annotation punctuation">@Override</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>实现 Callable 接口并使用 FutureTask</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> myCallable <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyCallable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>使用线程池</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="runnable、callable-的区别" tabindex="-1"><a class="header-anchor" href="#runnable、callable-的区别" aria-hidden="true">#</a> Runnable、Callable 的区别</h2>
<ol>
<li>Runnable 接口没有返回值，Callable 接口可以有一个泛型的返回值。</li>
<li>Runnable 的 run 方法不能抛出异常，任务异常时需要使用 ’try-catch‘ 块来处理；Callable的 call 方法可以抛出异常</li>
</ol>
<h2 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h2>
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
<h3 id="reentrantlock-使用场景" tabindex="-1"><a class="header-anchor" href="#reentrantlock-使用场景" aria-hidden="true">#</a> ReentrantLock 使用场景</h3>
<h4 id="确保多线程访问时-数据库连接池的初始化是线程安全的" tabindex="-1"><a class="header-anchor" href="#确保多线程访问时-数据库连接池的初始化是线程安全的" aria-hidden="true">#</a> 确保多线程访问时，数据库连接池的初始化是线程安全的</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">"mysqlStrategyImpl"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MysqlStrategyImpl</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractSqlParser</span> <span class="token keyword">implements</span> <span class="token class-name">SqlStrategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Lock</span> <span class="token constant">LOCK</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Override</span>
    <span class="token comment">// 线程尝试获取一个连接池对象</span>
    <span class="token keyword">public</span> <span class="token class-name">DruidDataSource</span> <span class="token function">getJdbcConnectionPool</span><span class="token punctuation">(</span><span class="token class-name">PeisApiConfig</span> ds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 检查 MAP 中是否已经存在</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">MAP</span><span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>ds<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">MAP</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ds<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不存在，尝试获得锁（这里确保给定时刻只有一个线程可进入初始化代码块）</span>
            <span class="token constant">LOCK</span><span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// MAP 为空时，可能会有多个线程进入到 else 排队获得锁，但是初始化只需要一次，所以下面需要用双重检查锁定（Double-Checked Locking, DCL）</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">MAP</span><span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>ds<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 初始化数据库连接池</span>
                    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
                    <span class="token constant">MAP</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>ds<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> druidDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> <span class="token constant">MAP</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ds<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                <span class="token comment">// 显式解锁，相比 synchronized 更清晰，易维护</span>
                <span class="token constant">LOCK</span><span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="executorservice-使用场景" tabindex="-1"><a class="header-anchor" href="#executorservice-使用场景" aria-hidden="true">#</a> ExecutorService 使用场景</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReportService</span> <span class="token punctuation">{</span>
    <span class="token class-name">ExecutorService</span> es <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/**
     * 发放体检报告
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">grant</span><span class="token punctuation">(</span><span class="token class-name">PeisCheckOrderPo</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Long</span> id <span class="token operator">:</span> p<span class="token punctuation">.</span><span class="token function">getOrderIdList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 体检报告属性赋值</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
            <span class="token comment">// 更新数据库</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
            
            <span class="token comment">// 同步报告</span>
            es<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token function">synReport</span><span class="token punctuation">(</span>peisCheckOrder<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"同步报告异常"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 撤销发放体检报告
     * <span class="token keyword">@author</span> dingshuai
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ungrant</span><span class="token punctuation">(</span><span class="token class-name">PeisCheckOrderPo</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Long</span> id <span class="token operator">:</span> p<span class="token punctuation">.</span><span class="token function">getOrderIdList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">PeisCheckOrder</span> peisCheckOrder <span class="token operator">=</span> peisCheckOrderService<span class="token punctuation">.</span><span class="token function">queryById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 取消授权</span>
            peisCheckOrder<span class="token punctuation">.</span><span class="token function">setGrantStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 除了1，其他都表示未发送</span>
            peisCheckOrder<span class="token punctuation">.</span><span class="token function">setAppointmentContent</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getOrderIdList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                peisCheckOrder<span class="token punctuation">.</span><span class="token function">setReceiveType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                peisCheckOrder<span class="token punctuation">.</span><span class="token function">setReceiveType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            peisCheckOrderService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>peisCheckOrder<span class="token punctuation">)</span><span class="token punctuation">;</span>

            es<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token function">synReport</span><span class="token punctuation">(</span>peisCheckOrder<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"同步报告异常"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



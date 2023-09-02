<template><div><h1 id="_23-08-28" tabindex="-1"><a class="header-anchor" href="#_23-08-28" aria-hidden="true">#</a> 23.08.28</h1>
<h2 id="金蝶一面-专业api工程师" tabindex="-1"><a class="header-anchor" href="#金蝶一面-专业api工程师" aria-hidden="true">#</a> 金蝶一面 - 专业api工程师</h2>
<ol>
<li>自我介绍</li>
<li>说一下Java面向对象的三大特征<br>
1.封装：我直接举得例子：人可以看成一个对象，有属性比如身高体重，如何有行为吃饭运动等<br>
2.继承：父类子类，举例子：鸟，然后子类鹦鹉，燕子等<br>
3.多态：不记得了</li>
<li>简历上看你项目使用了spring微服务那些组件，能不能讲一下<br>
那些微服务组件我只会使用，原理我不太懂，然后把nacos作为注册中心，dubbo来服务远程调用，然后网关权限校验，fastDFS做分布式存储等讲一下</li>
<li>redis和数据库怎么保存数据一致性
<ol>
<li>redis中不存储重要数据，就算丢失也无所谓</li>
<li>先删数据库，再更新redis</li>
<li>延迟双删。</li>
</ol>
</li>
<li>讲一下hashmap<br>
分1.7和1.8讲<br>
数组+链表 数组+链表+红黑树（链表长度大于8，且数组长度大于64变成红黑树）<br>
1.7并发扩容头插存在死循环<br>
1.8使用尾插解决死循环</li>
<li>除了简历上这个项目还有其他项目吗：
<ol>
<li>之前还做过一个聊天室项目，使用socket和线程池实现聊天，群聊功能，通过io流实现文件传输功能</li>
<li>还做过一个个人博客项目，jwt存到threadlocal，然后拦截器验证权限，进入的时候存基本信息，出去的时候remove，防止内存溢出</li>
<li>因为我感觉这两个项目比较low，所以就没写到简历上面</li>
</ol>
</li>
<li>你现在在哪（回答深圳，讲述为什么来深圳），<br>
我主要是学习了redis和mysql，然后就讲自己会哪些知识点</li>
<li>那你能不能讲一下mysql的锁<br>
全局锁，表锁，行锁，间隙锁</li>
<li>讲一下mysql索引，并且什么时候会失效<br>
建立索引过程<br>
最左前缀原则<br>
讲一下B+树<br>
讲一下索引怎么失效，以及一些处理办法</li>
<li>并发，synchronized，volatile，reentrantlock，线程池</li>
<li>有没有了解过我们公司<br>
了解过，做erp服务的</li>
<li>反问?<br>
公司的业务是啥？<br>
一面过了有二面吗？
<ul>
<li>面试官：实习岗位就一面，一周内等电话通知</li>
</ul>
</li>
</ol>
<h2 id="北京数坤科技-实习-50分钟-zzz" tabindex="-1"><a class="header-anchor" href="#北京数坤科技-实习-50分钟-zzz" aria-hidden="true">#</a> 北京数坤科技-实习 50分钟 - zzz</h2>
<ol>
<li>自我介绍</li>
<li>项目 (10分钟)</li>
<li>对封装. 继承. 多态怎么理解的?</li>
<li>Java的集合类有哪些?</li>
<li>ArrayList和LinkedList的区别?</li>
<li>HashMap说一下? (初始化，put流程，扩容)</li>
<li>说下JVM的运行时数据区(各部分存储内容)</li>
<li>说一下垃圾回收算法</li>
<li>线程池的参数和执行任务流程</li>
<li>简单说一下CAP理论</li>
<li>Spring Bean加载的过程</li>
<li>说一下mysql索引有哪些?</li>
<li>MQ的消息重复消费和消息堆积问题的解决思路</li>
<li>反问:
<ol>
<li>对实习生的要求和培养机制?</li>
<li>面试回答中有什么不足的地方?</li>
<li>什么时候出结果?几轮?</li>
</ol>
</li>
</ol>
<h2 id="北京鲸算科技-实习一面-45分钟-zzz" tabindex="-1"><a class="header-anchor" href="#北京鲸算科技-实习一面-45分钟-zzz" aria-hidden="true">#</a> 北京鲸算科技 实习一面 45分钟 - zzz</h2>
<ol>
<li>自我介绍.</li>
<li>介绍一下项目。(10分钟)</li>
<li>为什么使用ES去优化mysqL查询? mysqL模糊查询问题?</li>
<li>SpringBoot的特点?</li>
<li>SpringBoot的starter?</li>
<li>Spring的容器启动和Bean加载(被打断说问循环依赖和三级缓存是啥)</li>
<li>使用过Spring后置处理器吗，后置处理器可以拿来干嘛?</li>
<li>一道算法题。先减后增求最小值<br>
类似于 <a href="https://leetcode.cn/problems/B1IidL/description/" target="_blank" rel="noopener noreferrer">LCR 069，山脉数组的峰顶索引<ExternalLinkIcon/></a><br>
暴力 + 二分查找优化 (10分钟A)</li>
<li>反问:
<ol>
<li>面试中有什么不足?</li>
<li>部门业务是什么?</li>
<li>新人进公司负责什么?</li>
</ol>
</li>
</ol>
<h2 id="深圳依时货拉拉一面-实习-橘子精" tabindex="-1"><a class="header-anchor" href="#深圳依时货拉拉一面-实习-橘子精" aria-hidden="true">#</a> 深圳依时货拉拉一面，实习 - 橘子精</h2>
<ol>
<li>sql优化，</li>
<li>sql执行的很慢怎么排查，怎么解决</li>
<li>springmvc执行过程</li>
<li>线程池的参数</li>
<li>线程拒绝策略</li>
<li>线程池执行过程</li>
<li>redis数据结构，应用</li>
<li>hashMap和hashTable区别</li>
<li>Feign的原理</li>
<li>设计模式</li>
<li>会什么常见中间件</li>
<li>mysql的事务隔离级别</li>
<li>主从复制如果从库数据还没有加载好就有用户进行访问，出异常了要怎么解决</li>
<li>主从复制的方式</li>
<li>mybatis的#{}和${}，为什么${}还在使用</li>
</ol>
<h2 id="浩鲸科技-郑重" tabindex="-1"><a class="header-anchor" href="#浩鲸科技-郑重" aria-hidden="true">#</a> 浩鲸科技 - 郑重</h2>
<ol>
<li>介绍项目亮点</li>
<li>Redis 为什么快</li>
<li>SpringBoot.的自动装配原理</li>
<li>Redis 的缓存击穿和解决方案</li>
<li>hashmap 的原理和扩容机制</li>
<li>介绍 JVM 的内存情况</li>
<li>list 和 set 的区别</li>
<li>redis 的数据类型</li>
<li>介绍 MySQL 的索引结构</li>
<li>索引什么时候会失效</li>
<li>如何查询 sql 是否命中索引</li>
<li>类存储在 JVM 哪一块空间</li>
<li>HashMap和 ConcurrentHashMap 的区别</li>
<li>Redis 的数据一致性问题</li>
<li>介绍红黑树</li>
<li>Hashmap 的负载因子是否可变</li>
</ol>
</div></template>



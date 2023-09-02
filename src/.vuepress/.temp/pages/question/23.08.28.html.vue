<template><div><h1 id="_23-08-28" tabindex="-1"><a class="header-anchor" href="#_23-08-28" aria-hidden="true">#</a> 23.08.28</h1>
<h2 id="金蝶一面-tyh" tabindex="-1"><a class="header-anchor" href="#金蝶一面-tyh" aria-hidden="true">#</a> 金蝶一面 - tyh</h2>
<ol>
<li>自我介绍</li>
<li>说一下 Java 面向对象的三大特征<br>
1.封装：我直接举得例子：人可以看成一个对象，有属性比如身高体重，如何有行为吃饭运动等<br>
2.继承：父类子类，举例子：鸟，然后子类鹦鹉，燕子等<br>
3.多态：不记得了</li>
<li>简历上看你项目使用了 Spring 微服务那些组件，能不能讲一下<br>
那些微服务组件我只会使用，原理我不太懂，然后把 Nacos 作为注册中心，Dubbo 来服务远程调用，然后网关权限校验，fastDFS 做分布式存储等讲一下</li>
<li>Redis 和数据库怎么保存数据一致性
<ol>
<li>Redis 中不存储重要数据，就算丢失也无所谓</li>
<li>先删数据库，再更新 Redis</li>
<li>延迟双删。</li>
</ol>
</li>
<li>讲一下 HashMap<br>
分 1.7 和 1.8 讲<br>
数组 + 链表 数组 + 链表+红黑树（链表长度大于 8，且数组长度大于 64 变成红黑树）<br>
1.7 并发扩容头插存在死循环<br>
1.8 使用尾插解决死循环</li>
<li>除了简历上这个项目还有其他项目吗：
<ol>
<li>之前还做过一个聊天室项目，使用 Socket 和线程池实现聊天，群聊功能，通过 IO 流实现文件传输功能</li>
<li>还做过一个个人博客项目，JWT 存到 ThreadLocal，然后拦截器验证权限，进入的时候存基本信息，出去的时候 remove，防止内存溢出</li>
<li>因为我感觉这两个项目比较 low，所以就没写到简历上面</li>
</ol>
</li>
<li>你现在在哪（回答深圳，讲述为什么来深圳），<br>
我主要是学习了 Redis 和 MySQL，然后就讲自己会哪些知识点</li>
<li>那你能不能讲一下 MySQL 的锁<br>
全局锁，表锁，行锁，间隙锁</li>
<li>讲一下 MySQL 索引，并且什么时候会失效<br>
建立索引过程<br>
最左前缀原则<br>
讲一下 B+ 树<br>
讲一下索引怎么失效，以及一些处理办法</li>
<li>并发，Synchronized，Volatile，ReentrantLock，线程池</li>
<li>有没有了解过我们公司<br>
了解过，做 erp 服务的</li>
<li>反问?<br>
公司的业务是啥？<br>
一面过了有二面吗？
<ul>
<li>面试官：实习岗位就一面，一周内等电话通知</li>
</ul>
</li>
</ol>
</div></template>



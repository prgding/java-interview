<template><div><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h2>
<p>设计模式是解决软件设计中常见问题的最佳实践。</p>
<h2 id="面向对象设计原则" tabindex="-1"><a class="header-anchor" href="#面向对象设计原则" aria-hidden="true">#</a> 面向对象设计原则</h2>
<ul>
<li>
<p>单一职责原则（Single Responsibility Principle）</p>
<ul>
<li>一个类应该只有一个理由引起变化</li>
</ul>
</li>
<li>
<p>开闭原则（Open Close Principle）</p>
</li>
<li>
<p>里氏替换（Liskov Substitution Principle）</p>
</li>
<li>
<p>接口隔离（Interface Segregation Principle）</p>
</li>
<li>
<p>依赖倒置（Dependency Inversion Principle）</p>
</li>
<li>
<p>合成 / 聚合复用原则（Composite/Aggregate Reuse Principle，C/ARP）</p>
</li>
<li>
<p>迪米特法则（Law of Demeter）或最少知识原则（Least Knowledge Principle）</p>
</li>
</ul>
<h2 id="创建性模式" tabindex="-1"><a class="header-anchor" href="#创建性模式" aria-hidden="true">#</a> 创建性模式</h2>
<h3 id="工厂方法" tabindex="-1"><a class="header-anchor" href="#工厂方法" aria-hidden="true">#</a> 工厂方法</h3>
<ul>
<li>
<p>定义一个创建对象的接口，让子类决定实例化哪一个类。</p>
</li>
<li>
<p>Spring 提供了各种工厂 Bean 来创建对象</p>
</li>
</ul>
<h3 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂" aria-hidden="true">#</a> 抽象工厂</h3>
<h3 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h3>
<h3 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h3>
<h3 id="单例" tabindex="-1"><a class="header-anchor" href="#单例" aria-hidden="true">#</a> 单例</h3>
<ul>
<li>确保一个类只有一个实例，并提供全局访问点。</li>
<li>Spring 中的 bean 作用域默认是单例的。</li>
</ul>
<h2 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h2>
<h3 id="适配器" tabindex="-1"><a class="header-anchor" href="#适配器" aria-hidden="true">#</a> 适配器</h3>
<h3 id="桥接" tabindex="-1"><a class="header-anchor" href="#桥接" aria-hidden="true">#</a> 桥接</h3>
<h3 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h3>
<h3 id="装饰" tabindex="-1"><a class="header-anchor" href="#装饰" aria-hidden="true">#</a> 装饰</h3>
<ul>
<li>允许你通过将对象放入包含特殊行为的封装对象中</li>
</ul>
<p>Spring 使用装饰模式来增加某些服务，例如对一个数据源进行装饰以提供事务支持</p>
<h3 id="外观" tabindex="-1"><a class="header-anchor" href="#外观" aria-hidden="true">#</a> 外观</h3>
<h3 id="享元" tabindex="-1"><a class="header-anchor" href="#享元" aria-hidden="true">#</a> 享元</h3>
<h3 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h3>
<p>Spring AOP 功能基于代理模式</p>
<h2 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h2>
<h3 id="责任链" tabindex="-1"><a class="header-anchor" href="#责任链" aria-hidden="true">#</a> 责任链</h3>
<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3>
<h3 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h3>
<h3 id="中介者" tabindex="-1"><a class="header-anchor" href="#中介者" aria-hidden="true">#</a> 中介者</h3>
<h3 id="备忘录" tabindex="-1"><a class="header-anchor" href="#备忘录" aria-hidden="true">#</a> 备忘录</h3>
<h3 id="观察者" tabindex="-1"><a class="header-anchor" href="#观察者" aria-hidden="true">#</a> 观察者</h3>
<ul>
<li>Spring 事件处理</li>
</ul>
<h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3>
<h3 id="策略" tabindex="-1"><a class="header-anchor" href="#策略" aria-hidden="true">#</a> 策略</h3>
<p>Spring 中的资源访问、事务管理</p>
<h3 id="模版方法" tabindex="-1"><a class="header-anchor" href="#模版方法" aria-hidden="true">#</a> 模版方法</h3>
<p>Spring 中的 <code v-pre>JdbcTemplate</code>、<code v-pre>HibernateTemplate</code> 是模版方法模式的应用</p>
<h3 id="访问者" tabindex="-1"><a class="header-anchor" href="#访问者" aria-hidden="true">#</a> 访问者</h3>
</div></template>



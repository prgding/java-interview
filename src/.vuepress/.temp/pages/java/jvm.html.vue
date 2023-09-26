<template><div><h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h1>
<h2 id="jvm-架构" tabindex="-1"><a class="header-anchor" href="#jvm-架构" aria-hidden="true">#</a> JVM 架构</h2>
<ol>
<li><strong>类加载器</strong>
<ol>
<li>加载
<ol>
<li>双亲委派</li>
</ol>
</li>
<li>链接
<ol>
<li>验证</li>
<li>准备</li>
<li>解析</li>
</ol>
</li>
<li>初始化</li>
</ol>
</li>
<li><strong>运行时数据区域</strong></li>
<li><strong>执行引擎</strong>
<ol>
<li>解释器
<ol>
<li>读取 class 文件或者字节码并执行。</li>
<li>缺点：如果一个方法被多次调用，代码会被它多次编译</li>
</ol>
</li>
<li>JIT 编译器
<ol>
<li>解决了解释器的问题</li>
<li>如果出现了重复调用，JIT 会把字节码编译成本地代码，能够直接被调用</li>
<li>组件
<ol>
<li>中间代码生成器</li>
<li>代码优化器</li>
<li>目标代码生成器：将中间代码转换为本地机器码</li>
<li>profiler：定位重复被调用的热点代码</li>
</ol>
</li>
</ol>
</li>
<li>垃圾回收器</li>
<li>Java 本地方法接口：负责与本地库交互，提供给 JVM 执行引擎使用</li>
</ol>
</li>
</ol>
<h2 id="jvm-运行流程" tabindex="-1"><a class="header-anchor" href="#jvm-运行流程" aria-hidden="true">#</a> JVM 运行流程</h2>
<ol>
<li>类加载器采用双亲委派机制<strong>加载</strong> .class 文件</li>
<li><strong>链接</strong>：
<ol>
<li>验证：确保字节码安全、结构完整</li>
<li>准备：为类变量分配内存、初始化默认值</li>
<li>解析：将符号引用转为直接引用</li>
</ol>
</li>
<li><strong>初始化</strong>：类初始化、静态代码块执行、类的全局变量赋值</li>
<li>使用：执行主类的 main 方法</li>
<li>类卸载</li>
</ol>
<h2 id="运行时数据区域" tabindex="-1"><a class="header-anchor" href="#运行时数据区域" aria-hidden="true">#</a> 运行时数据区域</h2>
<ol>
<li>线程共享：
<ol>
<li><strong>堆</strong>
<ol>
<li>保存对象实例、数组等</li>
<li>垃圾回收的主要区域</li>
<li>内存不够抛出异常 OutOfMemoryError</li>
<li>（1.7）<strong>方法区</strong>（概念）：永久代（具体实现）：存储类信息、类变量、方法信息、常量</li>
</ol>
</li>
</ol>
</li>
<li>线程私有
<ol>
<li><strong>栈</strong>
<ol>
<li>虚拟机栈</li>
<li>本地方法栈</li>
</ol>
</li>
<li><strong>程序计数器</strong></li>
</ol>
</li>
<li>本地内存
<ol>
<li>直接内存</li>
<li>（1.8）方法区：元空间：存储类信息、类变量、方法信息、常量</li>
</ol>
</li>
</ol>
<h2 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a> 垃圾回收机制</h2>
<h3 id="对象什么时候被回收" tabindex="-1"><a class="header-anchor" href="#对象什么时候被回收" aria-hidden="true">#</a> 对象什么时候被回收</h3>
<ol>
<li>对于引用计数法，对象的引用计数为 0 时被回收，但是难以解决循环引用问题。</li>
<li>对于可达性分析法，当对象与 GC Roots 没有关联时会被回收。</li>
</ol>
<h3 id="垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法" aria-hidden="true">#</a> 垃圾回收算法</h3>
<ol>
<li>
<p>标记 - 清除</p>
<ol>
<li>使用可达性分析标记出存活对象，然后把其他的回收掉。</li>
<li>缺点是会产生不连续的内存碎片。</li>
</ol>
</li>
<li>
<p>标记 - 整理</p>
<ol>
<li>使用可达性分析标记存活。</li>
<li>存活对象向一端移动，清理边界以外的内存。</li>
</ol>
</li>
<li>
<p>复制</p>
<ol>
<li>将内存分为两块，回收时将存活对象复制到另一块，然后把原来的空间清空。</li>
<li>缺点是内存缩小为原来的一半，且存活数量大时，复制性能差。</li>
</ol>
</li>
<li>
<p>分代收集</p>
<ol>
<li>当前虚拟机都采用这种方式。</li>
<li>将 Java 堆分成新生代和老年代。</li>
<li>新生代经常会有大量对象死去，可以使用标记-复制。</li>
<li>老年代中存活几率比较高，而且没有额外空间进行分配，可以选择标记-清除或标记-整理。</li>
</ol>
</li>
</ol>
<h2 id="双亲委派机制" tabindex="-1"><a class="header-anchor" href="#双亲委派机制" aria-hidden="true">#</a> 双亲委派机制</h2>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<p>当类加载器加载一个类时，加载器会委托父类加载器完成，父类加载器会再去找父类，就这样一直传递到顶层。只有当父加载器无法加载时，子加载器才会加载这个类。</p>
<h3 id="为什么使用双亲委派" tabindex="-1"><a class="header-anchor" href="#为什么使用双亲委派" aria-hidden="true">#</a> 为什么使用双亲委派？</h3>
<ul>
<li>防止一个类重复加载</li>
<li>Java 核心类库由 Bootstrap ClassLoader 加载，可以防止核心类库代码不被恶意篡改或替换</li>
<li>维护程序安全性和稳定性</li>
</ul>
<h3 id="打破双亲委派机制" tabindex="-1"><a class="header-anchor" href="#打破双亲委派机制" aria-hidden="true">#</a> 打破双亲委派机制</h3>
<h4 id="哪些场景需要打破该机制" tabindex="-1"><a class="header-anchor" href="#哪些场景需要打破该机制" aria-hidden="true">#</a> 哪些场景需要打破该机制？</h4>
<ol>
<li>热部署：能够重新加载修改过的类</li>
<li>Tomcat：Tomcat 中需要用到热部署，以及类隔离。类隔离可以实现部署多个 Web 应用。</li>
</ol>
<h4 id="如何打破该机制" tabindex="-1"><a class="header-anchor" href="#如何打破该机制" aria-hidden="true">#</a> 如何打破该机制</h4>
<ol>
<li>继承 ClassLoader，自定义一个加载器</li>
<li>重写 loadClass() 方法</li>
</ol>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<ul>
<li>双亲委派规定：一个类及其依赖类要由同一个类加载器加载</li>
<li>但是可能会遇到下面的情况
<ol>
<li>Java 的 SPI （Service Provider Interface）
<ol>
<li>SPI 接口，例如 <code v-pre>java.sql.Driver</code>是由核心库提供的，应该用 Bootstrap ClassLoader 加载。</li>
<li>但是 SPI 的实现例如 <code v-pre>com.mysql.cj.jdbc.Driver</code> 由第三方供应，要由 Applicaiton ClassLoader 或者自定义加载器加载。</li>
</ol>
</li>
<li>Spring 的 jar 包
<ol>
<li>Spring 的 jar 包应该是 Web 应用共享的，如果使用 Tomcat，要用 Tomcat 中的 Shared ClassLoader 加载</li>
<li>但是项目的其他地方还会用到 Spring 提供的业务类、接口实现、注解等，那么按照规定，Shared ClassLoader 也要加载这些内容。</li>
<li>但是这些类是单个Web程序私有的，并不是共享的，所以 Shared ClassLoader 加载不了它们。</li>
</ol>
</li>
</ol>
</li>
<li>这些情况下，SPI 高层类加载器需要加载低层的类，或 Spring 的不同部分要被不同的类加载器加载。</li>
<li>如何解决这个问题呢？</li>
<li>可以使用 <strong>线程上下文 类加载器（ThreadContext ClassLoader）</strong></li>
</ul>
</div></template>



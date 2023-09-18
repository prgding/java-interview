<template><div><h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h1>
<h2 id="jvm-运行流程" tabindex="-1"><a class="header-anchor" href="#jvm-运行流程" aria-hidden="true">#</a> JVM 运行流程</h2>
<ol>
<li>类加载器加载 .class 文件</li>
<li>链接：
<ol>
<li>验证：确保字节码安全、结构完整</li>
<li>准备：为类变量分配内存、初始化默认值</li>
<li>解析：将符号引用转为直接引用</li>
</ol>
</li>
<li>初始化：类初始化、静态代码块执行、类的全局变量赋值</li>
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
<li>（1.7）<strong>方法区</strong>：永久代：存储类信息、类变量、方法信息、常量</li>
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
<li>标记 - 清除
<ol>
<li>使用可达性分析标记出存活对象，然后把其他的回收掉</li>
<li>缺点是会产生不连续的内存碎片</li>
</ol>
</li>
<li>标记 - 整理
<ol>
<li>使用可达性分析标记存活</li>
<li>存活对象向一端移动，清理边界以外的内存</li>
</ol>
</li>
<li>复制
<ol>
<li>将内存分为两块，回收时将存活对象复制到另一块，然后把原来的空间清空。</li>
<li>缺点是内存缩小为原来的一半，且存活数量大时，复制性能差</li>
</ol>
</li>
</ol>
</div></template>



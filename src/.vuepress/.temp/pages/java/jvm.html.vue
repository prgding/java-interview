<template><div><h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h1>
<h2 id="运行时数据区域" tabindex="-1"><a class="header-anchor" href="#运行时数据区域" aria-hidden="true">#</a> 运行时数据区域</h2>
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
<li>复制
<ol>
<li>将内存分为两块，回收时将存活对象复制到另一块，然后把原来的空间清空。</li>
<li>缺点是内存缩小为原来的一半，且存活数量大时，复制性能差</li>
</ol>
</li>
<li>标记 - 整理
<ol>
<li>使用可达性分析标记存活</li>
<li>存活对象向一端移动，清理边界以外的内存</li>
</ol>
</li>
</ol>
</div></template>



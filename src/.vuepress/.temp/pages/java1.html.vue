<template><div><h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1>
<h3 id="string、stringbuffer、stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-的区别" aria-hidden="true">#</a> String、StringBuffer、StringBuilder 的区别？</h3>
<ol>
<li>
<p>可变性</p>
<ol>
<li>String 不可变、后两者可变</li>
</ol>
</li>
<li>
<p>线程安全</p>
<ol>
<li>String, StringBuffer 线程安全</li>
</ol>
</li>
<li>
<p>性能</p>
<ol>
<li>String 每次要 new 对象，性能低。</li>
<li>StringBuffer 可变但是线程安全，略微提升。</li>
<li>StringBuilder 可变而且非线程安全。三者中提供最好的性能。</li>
</ol>
</li>
<li>
<p>选择</p>
<ol>
<li>
<p>少量数据，String</p>
</li>
<li>
<p>单线程大量数据 StringBuilder</p>
</li>
<li>
<p>多线程大量数据 StringBuffer</p>
</li>
</ol>
</li>
</ol>
<h3 id="string-为什么是不可变的" tabindex="-1"><a class="header-anchor" href="#string-为什么是不可变的" aria-hidden="true">#</a> String 为什么是不可变的？</h3>
<ol>
<li>首先 String 类是用 final 修饰的，这说明 String 不可继承，避免子类破坏 String 不可变。</li>
<li>其次，String 的主力成员字段 value 的 char 数组（Java 9 之后改为使用 byte[] 存储）被 private final 修饰，并且 String 类中没有提供修改这个 char 数组的方法。</li>
</ol>
<h3 id="java-9-为何要将-string-的底层实现由-char-改成了-byte" tabindex="-1"><a class="header-anchor" href="#java-9-为何要将-string-的底层实现由-char-改成了-byte" aria-hidden="true">#</a> Java 9 为何要将 <code v-pre>String</code> 的底层实现由 <code v-pre>char[]</code> 改成了 <code v-pre>byte[]</code> ?</h3>
<ol>
<li>目的是节省空间。</li>
<li>原理是
<ol>
<li>新版 Sting 支持 Latin-1 和 UTF-16 两个编码方案，大多数字符串只包含 Latin-1 可表示的字符。</li>
<li>字符串包含的汉字在 Latin-1 范围内时，使用 Latin-1 char 需要两个字节，而 byte  只占一个字节。</li>
<li>而超过 Latin-1 范围时，char 和 byte 占用的空间是一样的。</li>
</ol>
</li>
</ol>
<h3 id="string-s1-new-string-abc-这段代码创建了几个字符串对象" tabindex="-1"><a class="header-anchor" href="#string-s1-new-string-abc-这段代码创建了几个字符串对象" aria-hidden="true">#</a> String s1 = new String(&quot;abc&quot;); 这段代码创建了几个字符串对象？</h3>
<p>分为两种情况。</p>
<ol>
<li>字符串常量池中不存在时，现在常量池中创建 1 个，然后在堆中创建 1 个，一共 2 个。</li>
<li>字符串常量池中存在时，只会在堆中创建 1 个。</li>
</ol>
<h3 id="和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#和-equals-的区别" aria-hidden="true">#</a> == 和 equals() 的区别</h3>
<ol>
<li>== 可以比较基本数据类型的值，也能比较引用类型变量的内存地址，equals() 只能比较引用数据类型。</li>
<li>当类没有重写 equals() 时，因为所有的类都直接或间接继承 Object 类，使用的是 Object 类中的 equals() 方法，等价于通过 == 比较两个对象。</li>
<li>当类重写了 equals() 方法时，我们一般让它比较两个对象中的属性是否相等。</li>
</ol>
</div></template>



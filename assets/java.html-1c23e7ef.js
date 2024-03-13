import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as l}from"./app-a9a45d1d.js";const i="/backend-study/assets/shallow_deep-copy-a9c72fb6.png",e={},t=l(`<h1 id="java-基础" tabindex="-1"><a class="header-anchor" href="#java-基础" aria-hidden="true">#</a> Java 基础</h1><h2 id="string、stringbuffer、stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-的区别" aria-hidden="true">#</a> String、StringBuffer、StringBuilder 的区别？</h2><ol><li>可变性 <ol><li>String 不可变、后两者可变</li></ol></li><li>线程安全 <ol><li>String, StringBuffer 线程安全</li></ol></li><li>性能 <ol><li>String 每次要 new 对象，性能低。</li><li>StringBuffer 可变但是线程安全，略微提升。</li><li>StringBuilder 可变而且非线程安全。三者中提供最好的性能。</li></ol></li><li>选择 <ol><li>少量数据，String</li><li>单线程大量数据 StringBuilder</li><li>多线程大量数据 StringBuffer</li></ol></li></ol><h2 id="string-为什么不可变" tabindex="-1"><a class="header-anchor" href="#string-为什么不可变" aria-hidden="true">#</a> String 为什么不可变</h2><ol><li>首先 String 类是用 final 修饰的，这说明 String 不可继承，避免子类破坏 String 不可变。</li><li>其次，String 的主力成员字段 value 的 char 数组（Java 9 之后改为使用 byte[] 存储）被 private final 修饰，并且 String 类中没有提供修改这个 char 数组的方法。</li></ol><h2 id="string-s1-new-string-abc-这段代码创建了几个字符串对象" tabindex="-1"><a class="header-anchor" href="#string-s1-new-string-abc-这段代码创建了几个字符串对象" aria-hidden="true">#</a> <code>String s1 = new String(&quot;abc&quot;);</code> 这段代码创建了几个字符串对象？</h2><p>2个或1个，分为两种情况。</p><ol><li>字符串常量池中不存在时，现在常量池中创建 1 个，然后在堆中创建 1 个，一共 2 个。</li><li>字符串常量池中存在时，只会在堆中创建 1 个。</li></ol><h2 id="和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#和-equals-的区别" aria-hidden="true">#</a> == 和 equals() 的区别</h2><ol><li>== 可以比较基本数据类型的值，也能比较引用类型变量的内存地址，equals() 只能比较引用数据类型。</li><li>当类没有重写 equals() 时，因为所有的类都直接或间接继承 Object 类，使用的是 Object 类中的 equals() 方法，等价于通过 == 比较两个对象。</li><li>当类重写了 equals() 方法时，我们一般让它比较两个对象中的属性是否相等。</li></ol><h2 id="hashcode-作用" tabindex="-1"><a class="header-anchor" href="#hashcode-作用" aria-hidden="true">#</a> hashCode() 作用</h2><ol><li>生成哈希码</li><li>这个哈希码的作用是确定这个对象在哈希表中的索引位置</li></ol><h2 id="为什么重写-equals-时必须重写-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#为什么重写-equals-时必须重写-hashcode-方法" aria-hidden="true">#</a> 为什么重写 equals() 时必须重写 hashCode() 方法？</h2><ol><li>根据规定，两个相等的对象的 hashCode() 必须是相等的。</li><li>重写 equals() 而不重写 hashCode() 会导致两个相等的对象 hashCode() 不相等。</li><li>这样的话如果使用 HashMap 或者 HashSet 时，相同的对象会存储到不同的位置，也就是HashMap中出现了重复的 key ，HashSet 出现了重复的元素。</li></ol><h2 id="包装类型的缓存机制" tabindex="-1"><a class="header-anchor" href="#包装类型的缓存机制" aria-hidden="true">#</a> 包装类型的缓存机制</h2><ol><li>目的： <ol><li>提升性能</li></ol></li><li>缓存值 <ol><li><strong>Byte, Short, Integer, Long</strong> 缓存了 <strong>[-128, 127]</strong> 的数值。</li><li><strong>Float, Double</strong> <strong>没有</strong>缓存。</li><li><strong>Boolean</strong> 缓存了 <strong>True</strong>, <strong>False</strong>，<strong>Character</strong> 缓存了 <strong>[0. 127]</strong> 的数据。</li></ol></li><li>怎样使用缓存？ <ol><li>使用 <code>Integer.valueOf()</code> 方法</li><li><code>Integer i = 40;</code> 自动装箱会调用 <code>Integer.valueOf()</code> 方法</li></ol></li><li>注意： <ol><li>使用<code>new Integer(40)</code>这样的构造方法时，它不会使用缓存。</li></ol></li></ol><h2 id="自动装箱与拆箱" tabindex="-1"><a class="header-anchor" href="#自动装箱与拆箱" aria-hidden="true">#</a> 自动装箱与拆箱</h2><ol><li>定义： <ol><li>装箱：将基本类型包装起来</li><li>拆箱：将包装类型转为基本类型</li></ol></li><li>原理： <ol><li>装箱： <ol><li><code>Integer i = 10;</code></li><li>底层是 <code>Integer i = Integer.valueOf(10);</code></li></ol></li><li>拆箱： <ol><li><code>int i = Integer.valueOf(10);</code></li><li>底层是<code>Int i = Integer.valueOf(10).intValue();</code></li></ol></li></ol></li></ol><h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2><ol><li><p>是什么</p><ul><li>Java 5 引入的一种注释机制</li></ul></li><li><p>举出一些内置注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token annotation punctuation">@Deprecated</span>
<span class="token annotation punctuation">@SuppressWarnings</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解决了什么问题？有哪些好处？</p><ol><li><strong>替换配置文件</strong>：替代复杂的 XML 配置</li><li><strong>代码生成</strong>：例如 Lombok 生成的 Getter 和 Setter</li><li><strong>减少样板代码</strong>：例如 Spring 中的 @Transactional</li><li><strong>文档说明</strong>：可以提供代码说明，使开发者更容易理解和使用。</li></ol></li><li><p>如何自定义一个注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解析方式</p><ol><li>编译期扫描，比如 <code>@Override</code></li><li>运行期反射处理：框架中的自带注解都是通过反射处理的。</li></ol></li></ol><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><h3 id="为什么要设计异常" tabindex="-1"><a class="header-anchor" href="#为什么要设计异常" aria-hidden="true">#</a> 为什么要设计异常？</h3><ol><li>目的是：提高软件的健壮性和可维护性</li><li>如何做到的： <ol><li>异常处理机制为开发者提供了一个结构化的方法来捕获、处理和传递错误。</li></ol></li></ol><h3 id="层次结构" tabindex="-1"><a class="header-anchor" href="#层次结构" aria-hidden="true">#</a> 层次结构</h3><ul><li>java.lang.Exception <ul><li>Error</li><li>Exception <ul><li>受检异常，必须用 try-catch 处理或 throws 声明</li><li>非受检异常。不需要强制处理。通常可以通过更好的编程来避免。</li></ul></li></ul></li></ul><h2 id="重写和重载区别" tabindex="-1"><a class="header-anchor" href="#重写和重载区别" aria-hidden="true">#</a> 重写和重载区别</h2><ul><li><p>重写</p><ul><li>是子类继承父类后，对父类的方法体进行重写。</li><li>遵循&quot;两同两小一大&quot;，即方法名、参数列表相同，返回值类型和异常小于等于父类，访问权限大于父类。</li><li>发生在运行期。</li></ul></li><li><p>重载</p><ul><li>多个方法名相同但是参数列表必须不同（类型、个数、顺序）、返回值部分有所不同。</li><li>发生在编译期。</li></ul></li><li><p>补充：</p><ul><li>无法重写父类的 private / final / static 方法</li><li>无法重写构造方法</li></ul></li></ul><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><h3 id="两大集合以及实现类" tabindex="-1"><a class="header-anchor" href="#两大集合以及实现类" aria-hidden="true">#</a> 两大集合以及实现类</h3><ul><li>Collection：存放元素值 <ul><li>List：有序、可重复 <ul><li>ArrayList：Object[] 数组</li><li>LinkedList：双向链表</li><li>Vector：Object[] 数组，线程安全</li></ul></li><li>Set：无序、不可重复 <ul><li>HashSet：HashMap 实现 <ul><li>LinkedHashSet：LinkedHashMap 实现</li></ul></li><li>TreeSet：TreeMap 实现</li></ul></li><li>Queue：有序、可重复</li></ul></li><li>Map：存放键值对 <ul><li>HashMap：数组 + 链表 / 红黑树（链表长度 &gt;= 8，且数组长度 &gt;= 64 时，转化为红黑树） <ul><li>LinkedHashMap：数组 + 链表 / 红黑树 + 双向链表</li></ul></li><li>Hashtable：数组 + 链表，线程安全</li><li>TreeMap：红黑树（自平衡的排序二叉树）</li></ul></li></ul><h3 id="arraylist-和-linkedlist-的区别" tabindex="-1"><a class="header-anchor" href="#arraylist-和-linkedlist-的区别" aria-hidden="true">#</a> ArrayList 和 LinkedList 的区别</h3><ul><li><p>存储结构</p><ul><li>ArrayList：Object [] 数组</li><li>LinkedList：双向链表</li></ul></li><li><p>操作数据效率</p><ul><li>ArrayList 按下标查询效率为 O(1)，LinkedList 不支持下标查询</li><li>ArrayList 尾部增删为 O(1)，其他部分为 O(n)</li><li>LinkedList 头尾增删为 O(1)，其他部分为 O(n)</li></ul></li><li><p>内存消耗</p><ul><li>LinkedList 每个节点需要前一个和后一个两个引用，通常比 ArrayList 占用更多的内存。</li></ul></li></ul><h3 id="hashmap-与-hashtable-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-与-hashtable-区别" aria-hidden="true">#</a> HashMap 与 Hashtable 区别</h3><ul><li>线程安全 <ul><li>HashMap 非线程安全，Hashtable 线程安全</li></ul></li><li>性能 <ul><li>Hashtable 线程安全，多线程环境中性能低与 HashMap</li></ul></li><li>Null 键 / 值 <ul><li>HashMap：允许键值为<code>null</code>（键只能有一个，值可以多个）</li><li>Hashtable：不允许键值为<code>null</code></li></ul></li><li>实现与继承 <ul><li>两者都是 Map 的实现</li><li>HashMap 继承了 AbstractMap</li><li>Hashtable 继承了 Dictionary</li></ul></li><li>内部结构 <ul><li>HashMap 可以变化为红黑树</li></ul></li><li>初始容量 <ul><li>HashMap: 16</li><li>Hashtable: 11</li><li>负载因子都是 0.75</li></ul></li><li>扩容机制 <ul><li>HashMap: 已用容量 &gt; 总容量 * 负载因子时，容量翻倍</li><li>Hashtable: 已用容量 &gt; 总容量 * 负载因子时，容量翻倍 + 1</li></ul></li><li>遍历方式 <ul><li>HashMap：只支持 Iterator 遍历</li><li>Hashtable：支持 Iterator 和 Enumeration 两种方式遍历</li></ul></li></ul><h3 id="线程安全的-list-和-map" tabindex="-1"><a class="header-anchor" href="#线程安全的-list-和-map" aria-hidden="true">#</a> 线程安全的 List 和 Map</h3><ol><li>List <ol><li>Vector: 古老的线程安全实现，使用内部同步来确保线程安全。每次方法调用都要同步，并发性能不佳。</li><li>Collections.synchronizedList() 包装，但是这样会导致全局锁定，影响并发性能</li><li>CopyOnWriteArrayList: JUC 包中一个线程安全的 ArrayList 实现</li></ol></li><li>Map <ol><li>Hashtable：古老的实现，使用同步</li><li>Collections.synchronizedMap() 包装</li><li>ConcurrentHashMap： JUC 包中一个线程安全的 HashMap 实现</li></ol></li></ol><h3 id="hashmap-的源码" tabindex="-1"><a class="header-anchor" href="#hashmap-的源码" aria-hidden="true">#</a> HashMap 的源码</h3><ol><li>可以从 HashSet 说起</li><li>new 一个 HashSet，放入一个 String，使用 set.add() 方法</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> str <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>add() 点进去调用了 map.put()，两个参数，key / value</li><li>key 是元素，value 是占位的 new Object()</li><li>put() 点进去调用了 putVal()，五个参数</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">putVal</span><span class="token punctuation">(</span>
        <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 生成哈希值</span>
        key<span class="token punctuation">,</span> 
        value<span class="token punctuation">,</span> 
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>putVal中，hash(key) 是为了得到哈希值，也就是确定一个位置</li><li>在 putVal 方法执行中，还会经历 map 的初始化，初始容量为 16，负载因子是 0.75，在容量达到 16 * 0.75 时进行翻倍扩容。</li></ol><h3 id="arraylist-的扩容机制" tabindex="-1"><a class="header-anchor" href="#arraylist-的扩容机制" aria-hidden="true">#</a> ArrayList 的扩容机制</h3><ol><li>关于默认容量大小，指定的话，写多少是多少。</li><li>如果不指定，默认大小是 10。</li><li>超过默认 10，1.5 倍扩容。</li><li>扩容的方式是创建一个新的、更大的数组，旧的复制到新的。</li></ol><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="三大特征" tabindex="-1"><a class="header-anchor" href="#三大特征" aria-hidden="true">#</a> 三大特征</h3><ol><li><p>封装（Encapsulation）：</p><ol><li>定义：将类的属性和方法组合一起，隐藏方法的实现细节，提供有限的外部接口。</li><li>例子：汽车有“颜色”和“速度”属性，有“启动”和“停车”方法，我们不需要知道启动和停车的实现细节，只需要踩油门或踩刹车就行了。</li></ol></li><li><p>继承（Inheritance）：</p><ol><li>定义：子类可以通过继承获得父类的属性和方法。</li><li>例子：小狗类可以通过继承动物类来获得共有的属性和方法。</li></ol></li><li><p>多态（Polymorphism）：</p><ol><li>定义：父类的方法在子类中可以有不同的实现，具体表现为父类引用指向子类的实例</li><li>例子：动物大多数都会叫，但是不同动物叫声不同，动物类如果有个“发出声音”的方法，那么子类可以根据不同动物重写这个方法。</li></ol></li></ol><h3 id="深拷贝和浅拷贝区别了解吗-什么是引用拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝区别了解吗-什么是引用拷贝" aria-hidden="true">#</a> 深拷贝和浅拷贝区别了解吗？什么是引用拷贝？</h3><ol><li>引用拷贝</li></ol><p>两个不同的引用指向同一个对象</p><ol start="2"><li>浅拷贝：复制整个对象，不包含内部对象，而是复制内部对象的引用地址。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>原对象： <span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Person</span><span class="token annotation punctuation">@111</span> <span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Address</span><span class="token annotation punctuation">@222</span>
复制对象：<span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Person</span><span class="token annotation punctuation">@333</span> <span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Address</span><span class="token annotation punctuation">@222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>深拷贝：复制整个对象以及内部所包含的对象</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>原对象： <span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Person</span><span class="token annotation punctuation">@111</span> <span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Address</span><span class="token annotation punctuation">@222</span>
复制对象：<span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Person</span><span class="token annotation punctuation">@333</span> <span class="token class-name"><span class="token namespace">string<span class="token punctuation">.</span></span>Address</span><span class="token annotation punctuation">@444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="拷贝类型" tabindex="0" loading="lazy"><figcaption>拷贝类型</figcaption></figure><h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2><h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3><p>反射是指程序在运行期间可以拿到一个对象的所有信息。</p>',58),o=[t];function r(c,p){return n(),s("div",null,o)}const h=a(e,[["render",r],["__file","java.html.vue"]]);export{h as default};
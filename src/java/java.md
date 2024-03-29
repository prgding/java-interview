---
order: 1
icon: healthicons:1-outline
---

# Java 基础

## String、StringBuffer、StringBuilder 的区别？

1. 可变性
   1. String 不可变、后两者可变
2. 线程安全
   1. String, StringBuffer 线程安全
3. 性能
   1. String 每次要 new 对象，性能低。
   2. StringBuffer 可变但是线程安全，略微提升。
   3. StringBuilder 可变而且非线程安全。三者中提供最好的性能。
4. 选择
   1. 少量数据，String
   2. 单线程大量数据 StringBuilder
   3. 多线程大量数据 StringBuffer

      

## String 为什么不可变

1. 首先 String 类是用 final 修饰的，这说明 String 不可继承，避免子类破坏 String 不可变。
2. 其次，String 的主力成员字段 value 的 char 数组（Java 9 之后改为使用 byte[] 存储）被 private final 修饰，并且 String 类中没有提供修改这个 char 数组的方法。



## `String s1 = new String("abc");` 这段代码创建了几个字符串对象？

2个或1个，分为两种情况。

1. 字符串常量池中不存在时，现在常量池中创建 1 个，然后在堆中创建 1 个，一共 2 个。
2. 字符串常量池中存在时，只会在堆中创建 1 个。



## == 和 equals() 的区别

1. == 可以比较基本数据类型的值，也能比较引用类型变量的内存地址，equals() 只能比较引用数据类型。
2. 当类没有重写 equals() 时，因为所有的类都直接或间接继承 Object 类，使用的是 Object 类中的 equals() 方法，等价于通过 == 比较两个对象。
3. 当类重写了 equals() 方法时，我们一般让它比较两个对象中的属性是否相等。



## hashCode() 作用

1. 生成哈希码
2. 这个哈希码的作用是确定这个对象在哈希表中的索引位置



## 为什么重写 equals() 时必须重写 hashCode() 方法？

1. 根据规定，两个相等的对象的 hashCode() 必须是相等的。
2. 重写 equals() 而不重写 hashCode() 会导致两个相等的对象 hashCode() 不相等。
3. 这样的话如果使用 HashMap 或者 HashSet 时，相同的对象会存储到不同的位置，也就是HashMap中出现了重复的 key ，HashSet 出现了重复的元素。



## 包装类型的缓存机制

1. 目的：
   1. 提升性能
2. 缓存值
   1. **Byte, Short, Integer, Long** 缓存了 **[-128, 127]** 的数值。
   2. **Float, Double** **没有**缓存。
   3. **Boolean** 缓存了 **True**, **False**，**Character** 缓存了 **[0. 127]** 的数据。
3. 怎样使用缓存？
   1. 使用 `Integer.valueOf()` 方法
   2. `Integer i = 40;` 自动装箱会调用 `Integer.valueOf()` 方法
4. 注意：
   1. 使用`new Integer(40)`这样的构造方法时，它不会使用缓存。



## 自动装箱与拆箱

1. 定义：
   1. 装箱：将基本类型包装起来
   2. 拆箱：将包装类型转为基本类型
2. 原理：
   1. 装箱：
      1. `Integer i = 10;`
      2. 底层是 `Integer i = Integer.valueOf(10);`
   2. 拆箱：
      1. `int i = Integer.valueOf(10);`
      2. 底层是`Int i = Integer.valueOf(10).intValue();`

## 注解

1. 是什么

   - Java 5 引入的一种注释机制

2. 举出一些内置注解

   ```java
   @Override
   @Deprecated
   @SuppressWarnings
   ...
   ```

3. 解决了什么问题？有哪些好处？

   1. **替换配置文件**：替代复杂的 XML 配置
   2. **代码生成**：例如 Lombok 生成的 Getter 和 Setter
   3. **减少样板代码**：例如 Spring 中的 @Transactional
   4. **文档说明**：可以提供代码说明，使开发者更容易理解和使用。

4. 如何自定义一个注解

   ```java
   public @interface MyAnno{
     String value() default "";
   }
   ```

5. 解析方式

   1. 编译期扫描，比如 `@Override`
   2. 运行期反射处理：框架中的自带注解都是通过反射处理的。

## 异常

### 为什么要设计异常？

1. 目的是：提高软件的健壮性和可维护性
2. 如何做到的：
    1. 异常处理机制为开发者提供了一个结构化的方法来捕获、处理和传递错误。
    
### 层次结构

- java.lang.Exception
    - Error
    - Exception
        - 受检异常，必须用 try-catch 处理或 throws 声明
        - 非受检异常。不需要强制处理。通常可以通过更好的编程来避免。

## 重写和重载区别

- 重写
  - 是子类继承父类后，对父类的方法体进行重写。
  - 遵循"两同两小一大"，即方法名、参数列表相同，返回值类型和异常小于等于父类，访问权限大于父类。
  - 发生在运行期。

- 重载
  - 多个方法名相同但是参数列表必须不同（类型、个数、顺序）、返回值部分有所不同。
  - 发生在编译期。
- 补充：
  - 无法重写父类的 private / final / static 方法
  - 无法重写构造方法

## 集合

### 两大集合以及实现类

- Collection：存放元素值
  - List：有序、可重复
    - ArrayList：Object[] 数组
    - LinkedList：双向链表
    - Vector：Object[] 数组，线程安全
  - Set：无序、不可重复
    - HashSet：HashMap 实现
      - LinkedHashSet：LinkedHashMap 实现
    - TreeSet：TreeMap 实现
  - Queue：有序、可重复
- Map：存放键值对
  - HashMap：数组 + 链表 / 红黑树（链表长度 >= 8，且数组长度 >= 64 时，转化为红黑树）
    - LinkedHashMap：数组 + 链表 / 红黑树 + 双向链表
  - Hashtable：数组 + 链表，线程安全
  - TreeMap：红黑树（自平衡的排序二叉树）

### ArrayList 和 LinkedList 的区别

- 存储结构
  - ArrayList：Object [] 数组
  - LinkedList：双向链表

- 操作数据效率

    - ArrayList 按下标查询效率为 O(1)，LinkedList 不支持下标查询
    - ArrayList 尾部增删为 O(1)，其他部分为 O(n)
    - LinkedList 头尾增删为 O(1)，其他部分为 O(n)

- 内存消耗

    - LinkedList 每个节点需要前一个和后一个两个引用，通常比 ArrayList 占用更多的内存。

### HashMap 与 Hashtable 区别

- 线程安全
    - HashMap 非线程安全，Hashtable 线程安全
- 性能
    - Hashtable 线程安全，多线程环境中性能低与 HashMap
- Null 键 / 值
    - HashMap：允许键值为`null`（键只能有一个，值可以多个）
    - Hashtable：不允许键值为`null`
- 实现与继承
    - 两者都是 Map 的实现
    - HashMap 继承了 AbstractMap
    - Hashtable 继承了 Dictionary
- 内部结构
    - HashMap 可以变化为红黑树
- 初始容量
    - HashMap: 16
    - Hashtable: 11
    - 负载因子都是 0.75
- 扩容机制
    - HashMap: 已用容量 > 总容量 * 负载因子时，容量翻倍
    - Hashtable: 已用容量 > 总容量 * 负载因子时，容量翻倍 + 1
- 遍历方式
    - HashMap：只支持 Iterator 遍历
    - Hashtable：支持 Iterator 和 Enumeration 两种方式遍历

### 线程安全的 List 和 Map

1. List
    1. Vector: 古老的线程安全实现，使用内部同步来确保线程安全。每次方法调用都要同步，并发性能不佳。
    2. Collections.synchronizedList() 包装，但是这样会导致全局锁定，影响并发性能
    3. CopyOnWriteArrayList: JUC 包中一个线程安全的 ArrayList 实现
2. Map
    1. Hashtable：古老的实现，使用同步
    2. Collections.synchronizedMap() 包装
    3. ConcurrentHashMap： JUC 包中一个线程安全的 HashMap 实现

### HashMap 的源码

1. 可以从 HashSet 说起
2. new 一个 HashSet，放入一个 String，使用 set.add() 方法

```java
HashSet<String> set = new HashSet<>();
boolean str = set.add("abc");
```

3. add() 点进去调用了 map.put()，两个参数，key / value
4. key 是元素，value 是占位的 new Object()
5. put() 点进去调用了 putVal()，五个参数

```java
public V put(K key, V value) {
    return putVal(
        hash(key), // 生成哈希值
        key, 
        value, 
        false,
        true
    );
}
```

6. putVal中，hash(key) 是为了得到哈希值，也就是确定一个位置
7. 在 putVal 方法执行中，还会经历 map 的初始化，初始容量为 16，负载因子是 0.75，在容量达到 16 * 0.75 时进行翻倍扩容。

### ArrayList 的扩容机制

1. 关于默认容量大小，指定的话，写多少是多少。
2. 如果不指定，默认大小是 10。
3. 超过默认 10，1.5 倍扩容。
4. 扩容的方式是创建一个新的、更大的数组，旧的复制到新的。

## 面向对象

### 三大特征

1. 封装（Encapsulation）：
    1. 定义：将类的属性和方法组合一起，隐藏方法的实现细节，提供有限的外部接口。
    2. 例子：汽车有“颜色”和“速度”属性，有“启动”和“停车”方法，我们不需要知道启动和停车的实现细节，只需要踩油门或踩刹车就行了。

2. 继承（Inheritance）：
    1. 定义：子类可以通过继承获得父类的属性和方法。
    2. 例子：小狗类可以通过继承动物类来获得共有的属性和方法。

3. 多态（Polymorphism）：
    1. 定义：父类的方法在子类中可以有不同的实现，具体表现为父类引用指向子类的实例
    2. 例子：动物大多数都会叫，但是不同动物叫声不同，动物类如果有个“发出声音”的方法，那么子类可以根据不同动物重写这个方法。


### 深拷贝和浅拷贝区别了解吗？什么是引用拷贝？

1. 引用拷贝

两个不同的引用指向同一个对象

2. 浅拷贝：复制整个对象，不包含内部对象，而是复制内部对象的引用地址。

```java
原对象： string.Person@111 string.Address@222
复制对象：string.Person@333 string.Address@222
```

3. 深拷贝：复制整个对象以及内部所包含的对象

```java
原对象： string.Person@111 string.Address@222
复制对象：string.Person@333 string.Address@444
```

![拷贝类型](java.assets/shallow&deep-copy.png)

## 反射

### 是什么

反射是指程序在运行期间可以拿到一个对象的所有信息。




---
order: 3
---

# Java 并发编程

## 线程的创建

1. 继承 Thread 类

```java
class myThread extens Thread{
    @override
    public void run(){
        System.out.println("hello");
    }
}

public class Main{
    public static void main(String[] args){
        Thread t = new myThread();
        t.start();
    }
}
```

2. 实现 Runnable 接口

```java
class myRunnable implements Runnable{
    @override
    public void run(){
        System.out.println("hello");
    }
}

public class Main(){
    public static void main(String[] args){
        Thread t = new Thread(new myRunnable());
        t.start();
    }
}
```

## 线程池

### 是什么

是一个线程的资源池，有任务时直接从线程池中取出线程来处理，处理完后不立即销毁，而是等待下一个任务。

### 线程池的参数

```java
int corePoolSize, //核心线程数量
int maximumPoolSize, //最大线程数
long keepAliveTime, //多余线程的存活时间
TimeUnit unit, //时间单位
BlockingQueue<Runnable> workQueue, //任务队列
ThreadFactory threadFactory, //线程工厂
RejectedExecutionHandler handler //拒绝策略
```

### 线程池的执行原理

1. 判断核心线程数是否已满，若没有，则创建线程
2. 判断等待队列，若没有，则加入队列等待
3. 判断最大线程数，若没有，则创建线程
4. 执行拒绝策略

### 线程池的拒绝策略

1. AbortPolicy：直接抛出异常，默认策略
2. CallerRunsPolicy：调用者线程执行任务
3. DiscardPolicy：直接丢弃任务
4. DiscardOldestPolicy：丢弃等待队列中最老的，并执行当前任务

## 进程和线程的区别

1. 基本定义：
    1. 进程是操作系统分配资源的基本单位
    2. 线程是操作系统调度执行的基本单位，是进程内部的一个执行流程。
    3. 一个进程可以产生多个线程，同一个进程中的线程共享该进程的资源
2. 资源分配
    1. 进程间资源相互独立
    2. 线程间共享该进程的资源
3. 通信方式
    1. 进程间通信需要特殊的技术
    2. 线程间可以通过读写进程中的共享变量来通信
4. 创建、切换、中止开销
    1. 进程开销大
    2. 线程开销小
5. 独立性与风险
    1. 进程独立，一个崩溃不影响别的
    2. 同一进程间线程紧密相关，一个线程的错误可能影响其他线程

## 有了进程为什么还需要线程?

1. 线程各方面**开销小**。
2. 线程更**轻量**，一个进程可以创建多个线程。
3. 多个线程可以**并发**处理不同任务，充分利用了 cpu 的多核性能。
4. 同一进程内的线程**共享**内存和文件，相互通信无须调用内核。
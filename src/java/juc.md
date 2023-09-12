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
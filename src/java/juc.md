---
order: 3
icon: healthicons:3-outline
---

# Java 并发编程

## 线程的创建

1. 继承 Thread 类

```java
class myThread extens Thread{
    @Override
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
    @Override
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

3. 实现 Callable 接口并使用 FutureTask

```java
class myCallable implements Callable<Integer>{
    @Override
    public Integer call() throws Exception{
        return 123;
    }
}

public class Main(){
    public static void main(String[] args){
		Thread thread = new FutureTask<>(new MyCallable());
        thread.start();
    }
}
```

4. 使用线程池

```java
ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(()->{
    System.out.println("hello");
})
```

## Runnable、Callable 的区别

1. Runnable 接口没有返回值，Callable 接口可以有一个泛型的返回值。
2. Runnable 的 run 方法不能抛出异常，任务异常时需要使用 ’try-catch‘ 块来处理；Callable的 call 方法可以抛出异常

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

## synchronized 的作用

1. 控制并发访问，确保某一时刻只有一个线程可以执行特定的代码段
2. 可以同步方法，也可以同步代码块
3. 底层由 monitor 实现

## volatile 关键字

- 中文翻译：不稳定的
- 如果声明变量为 volatile ，这就告诉 JVM 这个变量是共享且不稳定的，每次使用都到主存中读取
- 保证线程间的可见性
- 禁止进行指令重排序

## CAS

体现乐观锁的思想，在无锁的情况下保证线程操作共享数据的原子性。

## ReentrantLock 可重入锁相比于 sychronized

1. 可中断
2. 可以设置超时时间
3. 可以设置公平锁
4.  支持多个条件变量
5. 与 synchronized 一样，都支持重入

### ReentrantLock 使用场景

#### 确保多线程访问时，数据库连接池的初始化是线程安全的

```java
@Service("mysqlStrategyImpl")
public class MysqlStrategyImpl extends AbstractSqlParser implements SqlStrategy {
    protected static final Lock LOCK = new ReentrantLock();
	@Override
    // 线程尝试获取一个连接池对象
    public DruidDataSource getJdbcConnectionPool(PeisApiConfig ds) {
        // 检查 MAP 中是否已经存在
        if (MAP.containsKey(ds.getId())) {
            return MAP.get(ds.getId());
        } else {
            // 不存在，尝试获得锁（这里确保给定时刻只有一个线程可进入初始化代码块）
            LOCK.lock();
            // MAP 为空时，可能会有多个线程进入到 else 排队获得锁，但是初始化只需要一次，所以下面需要用双重检查锁定（Double-Checked Locking, DCL）
            try {
                if (!MAP.containsKey(ds.getId())) {
                    // 初始化数据库连接池
                    ...;
                    MAP.put(ds.getId(), druidDataSource);
                }
                return MAP.get(ds.getId());
            } catch (Exception e) {
                log.error(e.getMessage());
                return null;
            } finally {
                // 显式解锁，相比 synchronized 更清晰，易维护
                LOCK.unlock();
            }
        }
    }
}
```

## ExecutorService 使用场景

```java
public class ReportService {
    ExecutorService es = Executors.newFixedThreadPool(10);
     /**
     * 发放体检报告
     * @param p
     */
    public void grant(PeisCheckOrderPo p) {
        for (Long id : p.getOrderIdList()) {
            // 体检报告属性赋值
            ...;
            // 更新数据库
            ...;
            
            // 同步报告
            es.execute(new Runnable() {
                public void run() {
                    try {
                        synReport(peisCheckOrder);
                    } catch (Exception e) {
                        log.error("同步报告异常", e);
                    }
                }
            });
        }
    }

    /**
     * 撤销发放体检报告
     * @author dingshuai
     * @param p
     */
    public void ungrant(PeisCheckOrderPo p) {
        for (Long id : p.getOrderIdList()) {
            PeisCheckOrder peisCheckOrder = peisCheckOrderService.queryById(id);
            // 取消授权
            peisCheckOrder.setGrantStatus(0);
            // 除了1，其他都表示未发送
            peisCheckOrder.setAppointmentContent("0");
            if (p.getOrderIdList().size() > 1) {
                peisCheckOrder.setReceiveType(1);
            } else {
                peisCheckOrder.setReceiveType(0);
            }
            peisCheckOrderService.updateById(peisCheckOrder);

            es.execute(() -> {
                try {
                    synReport(peisCheckOrder);
                } catch (Exception e) {
                    log.error("同步报告异常", e);
                }
            });
        }
    }
}
```


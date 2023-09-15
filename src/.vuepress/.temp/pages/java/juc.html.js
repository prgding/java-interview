export const data = JSON.parse("{\"key\":\"v-46e51655\",\"path\":\"/java/juc.html\",\"title\":\"Java 并发编程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"description\":\"线程的创建 1. 继承 Thread 类 2. 实现 Runnable 接口 线程池 是什么 是一个线程的资源池，有任务时直接从线程池中取出线程来处理，处理完后不立即销毁，而是等待下一个任务。 线程池的参数 线程池的执行原理 1. 判断核心线程数是否已满，若没有，则创建线程 2. 判断等待队列，若没有，则加入队列等待 3. 判断最大线程数，若没有，则创...\"},\"headers\":[{\"level\":2,\"title\":\"线程的创建\",\"slug\":\"线程的创建\",\"link\":\"#线程的创建\",\"children\":[]},{\"level\":2,\"title\":\"线程池\",\"slug\":\"线程池\",\"link\":\"#线程池\",\"children\":[{\"level\":3,\"title\":\"是什么\",\"slug\":\"是什么\",\"link\":\"#是什么\",\"children\":[]},{\"level\":3,\"title\":\"线程池的参数\",\"slug\":\"线程池的参数\",\"link\":\"#线程池的参数\",\"children\":[]},{\"level\":3,\"title\":\"线程池的执行原理\",\"slug\":\"线程池的执行原理\",\"link\":\"#线程池的执行原理\",\"children\":[]},{\"level\":3,\"title\":\"线程池的拒绝策略\",\"slug\":\"线程池的拒绝策略\",\"link\":\"#线程池的拒绝策略\",\"children\":[]}]},{\"level\":2,\"title\":\"进程和线程的区别\",\"slug\":\"进程和线程的区别\",\"link\":\"#进程和线程的区别\",\"children\":[]},{\"level\":2,\"title\":\"有了进程为什么还需要线程?\",\"slug\":\"有了进程为什么还需要线程\",\"link\":\"#有了进程为什么还需要线程\",\"children\":[]}],\"readingTime\":{\"minutes\":2.11,\"words\":632},\"filePathRelative\":\"java/juc.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

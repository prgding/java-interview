export const data = JSON.parse("{\"key\":\"v-e6487068\",\"path\":\"/java/jvm.html\",\"title\":\"JVM\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"description\":\"JVM 运行流程 1. 类加载器加载 .class 文件 2. 链接： 1. 验证：确保字节码安全、结构完整 2. 准备：为类变量分配内存、初始化默认值 3. 解析：将符号引用转为直接引用 3. 初始化：类初始化、静态代码块执行、类的全局变量赋值 4. 使用：执行主类的 main 方法 5. 类卸载 运行时数据区域 1. 线程共享： 1. 堆 1. 保...\"},\"headers\":[{\"level\":2,\"title\":\"JVM 运行流程\",\"slug\":\"jvm-运行流程\",\"link\":\"#jvm-运行流程\",\"children\":[]},{\"level\":2,\"title\":\"运行时数据区域\",\"slug\":\"运行时数据区域\",\"link\":\"#运行时数据区域\",\"children\":[]},{\"level\":2,\"title\":\"垃圾回收机制\",\"slug\":\"垃圾回收机制\",\"link\":\"#垃圾回收机制\",\"children\":[{\"level\":3,\"title\":\"对象什么时候被回收\",\"slug\":\"对象什么时候被回收\",\"link\":\"#对象什么时候被回收\",\"children\":[]},{\"level\":3,\"title\":\"垃圾回收算法\",\"slug\":\"垃圾回收算法\",\"link\":\"#垃圾回收算法\",\"children\":[]}]},{\"level\":2,\"title\":\"双亲委派机制\",\"slug\":\"双亲委派机制\",\"link\":\"#双亲委派机制\",\"children\":[{\"level\":3,\"title\":\"是什么\",\"slug\":\"是什么\",\"link\":\"#是什么\",\"children\":[]},{\"level\":3,\"title\":\"为什么使用双亲委派？\",\"slug\":\"为什么使用双亲委派\",\"link\":\"#为什么使用双亲委派\",\"children\":[]},{\"level\":3,\"title\":\"打破双亲委派机制\",\"slug\":\"打破双亲委派机制\",\"link\":\"#打破双亲委派机制\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.45,\"words\":1035},\"filePathRelative\":\"java/jvm.md\",\"autoDesc\":true}")

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

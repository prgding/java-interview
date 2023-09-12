export const data = JSON.parse("{\"key\":\"v-e6487068\",\"path\":\"/java/jvm.html\",\"title\":\"JVM\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"description\":\"运行时数据区域 垃圾回收机制 对象什么时候被回收 1. 对于引用计数法，对象的引用计数为 0 时被回收，但是难以解决循环引用问题。 2. 对于可达性分析法，当对象与 GC Roots 没有关联时会被回收。 垃圾回收算法 1. 标记 - 清除 1. 使用可达性分析标记出存活对象，然后把其他的回收掉 2. 缺点是会产生不连续的内存碎片 2. 复制 1. 将...\"},\"headers\":[{\"level\":2,\"title\":\"运行时数据区域\",\"slug\":\"运行时数据区域\",\"link\":\"#运行时数据区域\",\"children\":[]},{\"level\":2,\"title\":\"垃圾回收机制\",\"slug\":\"垃圾回收机制\",\"link\":\"#垃圾回收机制\",\"children\":[{\"level\":3,\"title\":\"对象什么时候被回收\",\"slug\":\"对象什么时候被回收\",\"link\":\"#对象什么时候被回收\",\"children\":[]},{\"level\":3,\"title\":\"垃圾回收算法\",\"slug\":\"垃圾回收算法\",\"link\":\"#垃圾回收算法\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.76,\"words\":229},\"filePathRelative\":\"java/jvm.md\",\"autoDesc\":true}")

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

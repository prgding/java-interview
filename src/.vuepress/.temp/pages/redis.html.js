export const data = JSON.parse("{\"key\":\"v-2524dff7\",\"path\":\"/redis.html\",\"title\":\"Redis\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"缓存穿透 原因：大量请求的 key 既不在缓存中，也不在数据库中，导致这些请求直接冲击数据库，数据库可能因过大压力导致宕机。 解决： 1. 布隆过滤器：使用布隆过滤器存储所有可能的 key，查询之前先检查过滤器，如果 key 可能存在，再去缓存或数据库中查询，否则直接返回空结果。 2. 空值缓存：对于结果为空的 key，也存入缓存并设置一个较短的过期时...\"},\"headers\":[{\"level\":2,\"title\":\"缓存穿透\",\"slug\":\"缓存穿透\",\"link\":\"#缓存穿透\",\"children\":[]},{\"level\":2,\"title\":\"缓存击穿\",\"slug\":\"缓存击穿\",\"link\":\"#缓存击穿\",\"children\":[]},{\"level\":2,\"title\":\"缓存雪崩\",\"slug\":\"缓存雪崩\",\"link\":\"#缓存雪崩\",\"children\":[]},{\"level\":2,\"title\":\"数据类型\",\"slug\":\"数据类型\",\"link\":\"#数据类型\",\"children\":[]},{\"level\":2,\"title\":\"Redis 为什么快\",\"slug\":\"redis-为什么快\",\"link\":\"#redis-为什么快\",\"children\":[]},{\"level\":2,\"title\":\"持久化机制\",\"slug\":\"持久化机制\",\"link\":\"#持久化机制\",\"children\":[]},{\"level\":2,\"title\":\"数据一致性\",\"slug\":\"数据一致性\",\"link\":\"#数据一致性\",\"children\":[]}],\"readingTime\":{\"minutes\":2.64,\"words\":791},\"filePathRelative\":\"redis.md\",\"autoDesc\":true}")

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

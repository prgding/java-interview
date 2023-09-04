export const data = JSON.parse("{\"key\":\"v-d78cd3a0\",\"path\":\"/question/\",\"title\":\"题目\",\"lang\":\"zh-CN\",\"frontmatter\":{\"index\":false,\"description\":\"这里是根据日期排列的接触到的面试题目\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"question/README.md\",\"autoDesc\":true}")

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

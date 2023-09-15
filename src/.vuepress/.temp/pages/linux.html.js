export const data = JSON.parse("{\"key\":\"v-4e9cb81e\",\"path\":\"/linux.html\",\"title\":\"Linux\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"This is Linux.\"},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"linux.md\",\"autoDesc\":true}")

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

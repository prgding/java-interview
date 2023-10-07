export const siteData = JSON.parse("{\"base\":\"/java-interview/\",\"lang\":\"zh-CN\",\"title\":\"后端开发经验\",\"description\":\"以 Java 为主\",\"head\":[[\"script\",{},\"\\n      console.log(\\\"111\\\");\\n    \"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

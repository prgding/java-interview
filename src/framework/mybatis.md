---
order: 3
---

# MyBatis

## MyBatis 的缓存机制

1. 一级缓存：
    1. 基于 PerpetualCache 的 HashMap 本地缓存
    2. 作用域是 session 级别， session flush 或 close 中，缓存清空
    3. 默认打开
2. 二级缓存：
    1. 基于 PerpetualCache 的 HashMap 本地缓存
    2. 作用域是 namespace 和 mapper 的作用域， 不依赖于 session（范围更大）

3. 更新机制：某个作用域进行了新增、修改、删除操作后，默认该作用域下的所有 select 中的缓存清空
4. 二级缓存需要缓存的数据实现 Serializable 接口
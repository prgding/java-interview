---
order: 5
icon: "icon-park:graphic-design"
---

# 设计模式

## 是什么

设计模式是解决软件设计中常见问题的最佳实践。

## 面向对象设计原则

- 单一职责原则（Single Responsibility Principle）
    - 一个类应该只有一个理由引起变化

- 开闭原则（Open Close Principle）
- 里氏替换（Liskov Substitution Principle）
- 接口隔离（Interface Segregation Principle）
- 依赖倒置（Dependency Inversion Principle）
- 合成 / 聚合复用原则（Composite/Aggregate Reuse Principle，C/ARP）
- 迪米特法则（Law of Demeter）或最少知识原则（Least Knowledge Principle）

## 创建性模式

### 工厂方法

- 定义一个创建对象的接口，让子类决定实例化哪一个类。

- Spring 提供了各种工厂 Bean 来创建对象

### 抽象工厂



### 生成器



### 原型



### 单例

- 确保一个类只有一个实例，并提供全局访问点。
- Spring 中的 bean 作用域默认是单例的。

## 结构型模式

### 适配器
### 桥接

### 组合
### 装饰

- 允许你通过将对象放入包含特殊行为的封装对象中

Spring 使用装饰模式来增加某些服务，例如对一个数据源进行装饰以提供事务支持

### 外观
### 享元
### 代理

Spring AOP 功能基于代理模式

## 行为型模式

### 责任链
### 命令

### 迭代器
### 中介者
### 备忘录

### 观察者

- Spring 事件处理

### 状态
### 策略

Spring 中的资源访问、事务管理

### 模版方法

Spring 中的 `JdbcTemplate`、`HibernateTemplate` 是模版方法模式的应用

### 访问者


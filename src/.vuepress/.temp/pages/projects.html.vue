<template><div><h1 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h1>
<h2 id="仓易通-java-后端开发" tabindex="-1"><a class="header-anchor" href="#仓易通-java-后端开发" aria-hidden="true">#</a> 仓易通 |  Java 后端开发</h2>
<p><a href="https://github.com/prgding/EasyWareFlow" target="_blank" rel="noopener noreferrer">https://github.com/prgding/EasyWareFlow<ExternalLinkIcon/></a></p>
<p><strong>项目描述</strong>：</p>
<ul>
<li>仓易通是一个全面的仓库管理系统，用于满足日益增长的仓库管理需求。该系统提供了一站式解决方案，包括用户、角色、权限、商品、分类、采购、入库、出库的管理。旨在为中小型仓储公司提供强大且灵活的解决方案。</li>
<li>系统基于 Spring Boot 和 MyBatis 构建，利用 MySQL 进行数据存储，Redis 用于缓存。整个系统通过 RESTful API 进行前后端分离，使用 JWT 进行身份验证，以及 RBAC 进行权限管理。</li>
</ul>
<p><strong>工作亮点</strong>：</p>
<ul>
<li>验证码登陆：引入多因素认证机制，提高系统的安全性。</li>
<li>JWT 验证：使用 JWT 进行无状态验证，增强了系统的安全性和易用性。</li>
<li>RBAC 权限模型：通过基于角色的访问控制，精细化管理用户权限，提供更加安全和定制的使用体验。</li>
<li>高可用性：使用 Redis 进行数据缓存，大幅提高系统响应速度。</li>
<li>RESTful API 设计: 使前后端分离更加清晰，更易于维护和拓展。</li>
<li>实现了多个核心模块，如商品管理、采购管理和统计管理等，确保了仓库的高效运转。</li>
</ul>
<p><strong>个人提升</strong>：</p>
<ul>
<li>成功整合了 Spring Boot、MyBatis、MySQL、Redis 等技术，实现后端的稳定运行，使我更加熟练地使用后端技术栈开发。</li>
<li>通过实现验证码和 JWT 验证，加深了对网络安全和身份验证的理解。</li>
<li>使用 RESTful API，使我更加了解前后端分离、更加熟练整合前后端。</li>
<li>使我对于仓库管理业务的各个环节，如商品进销存、采购、库存等有了深入的了解。</li>
<li>了解到实际业务场景中的挑战，并学会了如何解决这些挑战，以确保项目的顺利进行。</li>
</ul>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<ol>
<li>介绍项目
<ol>
<li>该项目是一个一站式仓库管理系统，具体包括了用户、角色、权限、商品、分类、采购、入库、出库等具体业务。</li>
<li>在用户管理方面，采用了验证码登陆和 JWT 验证。当用户名、密码和验证码均正确时，用户会得到一个 JWT 令牌。后续的所有请求中，都要带上这个令牌。</li>
<li>在角色和权限方面，采取了 RBAC 模型进行权限管理，用户根据其角色来获得相应的权限。</li>
<li>登陆和赋予权限后，用户就可以进行添加商品、设置分类、生成采购单、如果进行了采购，那对应的是入库操作。如果进行了售出或者收到了退货，那对应的是出库的操作。</li>
</ol>
</li>
<li>项目的某个具体功能是怎么做的？业务之间的关联性？怎样实现统一管理的？</li>
<li>讲讲 JWT 登陆和身份认证
<ol>
<li>JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案</li>
<li>有三部分，Header、payload、Signature</li>
</ol>
</li>
<li>哪里用到了 Redis 缓存？
<ol>
<li>商品分类和仓库列表</li>
<li>因为很常用且更新频率不高</li>
</ol>
</li>
<li>怎样实现 Redis 数据一致性的？
<ol>
<li>双写一致性：先写入 MySQL，再写入 Redis</li>
<li>延迟双删</li>
</ol>
</li>
</ol>
<h2 id="模仿银行项目-前后端开发" tabindex="-1"><a class="header-anchor" href="#模仿银行项目-前后端开发" aria-hidden="true">#</a> 模仿银行项目  |  前后端开发</h2>
<p><a href="https://github.com/prgding/bank" target="_blank" rel="noopener noreferrer">https://github.com/prgding/bank<ExternalLinkIcon/></a></p>
<p><strong>技术栈：</strong></p>
<ol>
<li>后端：Spring Boot + Spring Data JPA + MySQL + Redis</li>
<li>前端：Vue3 + Element Plus</li>
</ol>
<p><strong>项目描述：</strong></p>
<ol>
<li>实现了一套模拟银行系统，支持管理员和普通用户角色。</li>
<li>管理员可以进行用户管理、日志管理、头像上传和用户、日志导出到 Excel。</li>
<li>普通用户可以进行注册、登录、查询余额、存款、取款、转账和查看日志。</li>
</ol>
<p><strong>主要职责：</strong></p>
<ol>
<li>设计和实现后端服务，利用 Spring Boot 和 Spring Data JPA 连接 MySQL 完成数据的增删改查。</li>
<li>使用 Redis 实现缓存，优化系统性能。</li>
<li>开发前端界面，利用 Vue3 和 Element Plus 构建用户友好的界面。</li>
<li>实现 JWT 认证，保障系统安全。</li>
</ol>
</div></template>



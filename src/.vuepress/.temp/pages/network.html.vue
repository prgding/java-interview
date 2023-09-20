<template><div><h1 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h1>
<h2 id="请解释-osi-七层模型。" tabindex="-1"><a class="header-anchor" href="#请解释-osi-七层模型。" aria-hidden="true">#</a> 请解释 OSI 七层模型。</h2>
<p>OSI 模型是一个理论上的七层框架，用于描述网络中的操作。从底层到顶层，这七层分别是：</p>
<ul>
<li>物理层：涉及电信号、光信号和物理媒介，如网线、光纤等。</li>
<li>数据链路层：提供节点到节点的通信，并负责物理寻址、错误检测等。</li>
<li>网络层：负责数据包的发送和路由选择。</li>
<li>传输层：提供端到端的通信和数据流控制。</li>
<li>会话层：建立、维护和终止会话。</li>
<li>表示层：确保一个系统的应用层所发送的信息可以被另一个系统的应用层读取和理解。</li>
<li>应用层：与终端用户的应用程序（如浏览器、电子邮件客户端等）直接交互。</li>
<li>吴叔网传会飙英（语）</li>
</ul>
<h2 id="tcp-ip-四层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-四层模型" aria-hidden="true">#</a> TCP / IP 四层模型</h2>
<ul>
<li>网络接口层</li>
<li>网络层</li>
<li>传输层（TCP / UDP）</li>
<li>应用层</li>
</ul>
<h2 id="tcp-和-udp-的主要差异是什么" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的主要差异是什么" aria-hidden="true">#</a> TCP 和 UDP 的主要差异是什么？</h2>
<ul>
<li>TCP (传输控制协议) 是一个面向连接、可靠的协议。它确保所有的数据包都被正确地从源发送到目标。</li>
<li>UDP (用户数据报协议) 是一个无连接、不可靠的协议。它不保证数据包的顺序或确保数据包不丢失。</li>
<li>TCP较慢，因为它需要三次握手来建立连接，并且有确认、重传和流控制机制。UDP则较快，但可能不可靠。</li>
</ul>
<h2 id="什么是三次握手" tabindex="-1"><a class="header-anchor" href="#什么是三次握手" aria-hidden="true">#</a> 什么是三次握手？</h2>
<p>三次握手是 TCP 协议中建立连接的过程。过程如下：</p>
<ol>
<li>客户端发送 SYN 包到服务器，请求建立连接。</li>
<li>服务器回复 SYN-ACK 包，确认客户端的 SYN。</li>
<li>客户端发送 ACK 包给服务器，确认服务器的 SYN-ACK。</li>
</ol>
<h2 id="解释nat-网络地址转换-。" tabindex="-1"><a class="header-anchor" href="#解释nat-网络地址转换-。" aria-hidden="true">#</a> 解释NAT (网络地址转换)。</h2>
<p>NAT 是一种技术，用于将私有（非公开）IP地址转换为公开IP地址。它在许多家庭和企业网络中使用，以允许多台设备共享单个公共IP地址进行互联网访问。</p>
<h2 id="什么是子网掩码" tabindex="-1"><a class="header-anchor" href="#什么是子网掩码" aria-hidden="true">#</a> 什么是子网掩码？</h2>
<p>子网掩码是一个用于划分IP地址的网络部分和主机部分的 32 位数字。它有助于确定特定的IP地址属于哪个子网络。</p>
<h2 id="http和https的差异是什么" tabindex="-1"><a class="header-anchor" href="#http和https的差异是什么" aria-hidden="true">#</a> HTTP和HTTPS的差异是什么？</h2>
<p>HTTP (超文本传输协议) 是用于传输网页的标准协议。HTTPS (超文本传输安全协议) 是一种使用 SSL / TLS 来加密 HTTP 通信的版本，使通信更加安全。</p>
</div></template>



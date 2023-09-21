<template><div><h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1>
<h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2>
<ul>
<li><code v-pre>ls</code>: 列出目录内容</li>
<li><code v-pre>cd &lt;目录&gt;</code>: 更改当前工作目录</li>
<li><code v-pre>pwd</code>: 显示当前工作目录的路径</li>
<li><code v-pre>touch &lt;文件名&gt;</code>: 创建一个空文件</li>
<li><code v-pre>cp &lt;源文件&gt; &lt;目标文件&gt;</code>: 复制文件或目录</li>
<li><code v-pre>mv &lt;源文件&gt; &lt;目标文件&gt;</code>: 移动或重命名文件或目录</li>
<li><code v-pre>rm &lt;文件名&gt;</code>: 删除文件。使用 <code v-pre>-r</code> 选项来递归删除目录</li>
<li><code v-pre>cat &lt;文件名&gt;</code>: 查看文件内容</li>
<li><code v-pre>more &lt;文件名&gt;</code> 或 <code v-pre>less &lt;文件名&gt;</code>: 分页查看文件内容</li>
<li><code v-pre>head &lt;文件名&gt;</code> 和 <code v-pre>tail &lt;文件名&gt;</code>: 查看文件的开头和结尾</li>
</ul>
<h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h2>
<ul>
<li><code v-pre>chmod &lt;权限&gt; &lt;文件或目录&gt;</code>: 更改文件或目录的权限。例如，<code v-pre>chmod ####&lt;文件名&gt;</code></li>
<li><code v-pre>chown &lt;用户&gt;:&lt;组&gt; &lt;文件或目录&gt;</code>: 更改文件或目录的拥有者和组</li>
<li><code v-pre>chgrp &lt;组&gt; &lt;文件或目录&gt;</code>: 更改文件或目录的组</li>
<li><code v-pre>umask</code>: 查看或设置默认文件和目录的权限</li>
</ul>
<h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h2>
<ul>
<li><code v-pre>ps</code>: 查看当前用户的进程</li>
<li><code v-pre>ps aux</code>: 查看所有进程</li>
<li><code v-pre>top</code>: 显示系统的动态视图，包括进程活动</li>
<li><code v-pre>htop</code>: 增强版的top命令，需要另外安装</li>
<li><code v-pre>kill &lt;进程ID&gt;</code>: 杀死指定的进程</li>
<li><code v-pre>pkill &lt;进程名&gt;</code>: 根据进程名杀死进程</li>
<li><code v-pre>killall &lt;进程名&gt;</code>: 杀死所有指定名称的进程</li>
</ul>
<h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2>
<ul>
<li><code v-pre>df</code>: 查看文件系统的磁盘使用情况</li>
<li><code v-pre>du</code>: 查看目录或文件的磁盘使用情况</li>
<li><code v-pre>fdisk</code>: 查看或管理磁盘分区表（通常需要root权限）</li>
<li><code v-pre>mount</code>: 查看挂载的文件系统或挂载文件系统</li>
<li><code v-pre>umount</code>: 卸载文件系统</li>
<li><code v-pre>mkfs.&lt;文件系统类型&gt;</code>: 格式化分区，例如 `mkfs.ext##</li>
</ul>
</div></template>



import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
        <div class="note-wrapper">
            <h1>Welcome to my site.</h1>
            <h1>This is how to deploy a new CentOS 7 </h1>

<p>&nbsp;</p>
<h1>CentOS 7 流程</h1>
<hr>
<br>
<h2 class="title-h2">￼java环境:yum配置openjdk</h2>
<br>
<ul><li>查看CentOS自带JDK是否已安装
</li></ul><pre><code class='code-multiline'> yum list installed |grep java
</code></pre><br><ul><li>卸载CentOS系统自带Java环境
</li></ul><pre><code class='code-multiline'>yum -y remove java-1.7.0-openjdk*
</code></pre><br><ul><li>查看yum库中的Java安装包
</li></ul><pre><code class='code-multiline'>yum -y list java*
</code></pre><br><ul><li>使用yum安装Java环境
</li></ul><pre><code class='code-multiline'> yum -y install java-1.8.0-openjdk           //以1.8.0为例
</code></pre><br>
<hr>
<br>
<h2 class="title-h2">￼java环境:下载稳定jdk</h2>
<br>
<ul><li>jdk下载
</li></ul><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">jdk下载</a>
<p>
  <br>
</p>
<ul><li>scp至环境
</li></ul>
<pre><code class='code-multiline'>scp -r jdk-8u111-linux-x64.tar.gz user@your ip address:/
</code></pre><br><ul><li>解压环境包
</li></ul><pre><code class='code-multiline'>tar -zxvf  jdk
</code></pre><br><ul><li>编辑文件
</li></ul><pre><code class='code-multiline'>vim ~/.bash_profile
export JAVA_HOME=/usr/local/jdk1.7.0_71
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH

注意标点符号，JAVA_HOME是刚才mv到路径
</code></pre><br>
<ul><li>执行文件
</li></ul><pre><code class='code-multiline'>source ~/.bash_profile
</code></pre><br><ul><li>查看是否成功
</li></ul><pre><code class='code-multiline'>java -version
javac
</code></pre><br>
<hr>
<br>
<h2 class="title-h2">git</h2>
<pre><br><code class='code-multiline'>yum install git
</code></pre><br>
<hr>
<br>
<h2 class="title-h2">tomcat</h2>
<p>&nbsp;</p>
<p><a href="http://tomcat.apache.org/download-70.cgi" target="_blank">tomcat 7.0.x 下载</a></p>
<br>
<ul><li>解压完成后
</li></ul><pre><code class='code-multiline'>/home/apache-tomcat-7.0.73/bin/startup.sh
</code></pre><br>
<hr>
<br>
<h2 class="title-h2">nginx</h2>
<br>

<ul><li>gcc安装
</li></ul>安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：
<br>
<pre><code class='code-multiline'>yum install gcc-c++
</code></pre><br><ul><li>PCRE pcre-devel 安装
</li></ul>PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：
<pre><code class='code-multiline'>yum install -y pcre pcre-devel
</code></pre><br><ul><li>zlib 安装
</li></ul>zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。
<pre><code class='code-multiline'>yum install -y zlib zlib-devel
</code></pre><br><ul><li>OpenSSL 安装
</li></ul>OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。
<pre><code class='code-multiline'>yum install -y openssl openssl-devel
</code></pre><br>
<ul><li>下载nginx
</li></ul><a href="https://nginx.org/en/download.html" target="_blank">nginx下载</a>
<p>
  <br>
</p>
<ul><li>解压nginx
</li></ul><pre><code class='code-multiline'>tar -zxvf nginx-xx
</code></pre><br><ul><li>配置
</li></ul>到nginx目录下:
<pre><code class='code-multiline'>./configure   //默认配置
</code></pre><br><ul><li>编译安装
</li></ul><pre><code class='code-multiline'>make
make install
whereis nginx   // 查找安装路径
</code></pre><br><ul><li> 启动nginx
</li></ul><pre><code class='code-multiline'>cd /usr/local/nginx/sbin/
./nginx
./nginx -s stop
./nginx -s quit
./nginx -s reload
./nginx -s quit:此方式停止步骤是待nginx进程处理任务完毕进行停止。
./nginx -s stop:此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。

查询nginx进程：
ps aux|grep nginx
</code></pre><br><ul><li>重启nginx
</li></ul><pre><code class='code-multiline'>1.先停止再启动（推荐）：
对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：
./nginx -s quit
./nginx
2.重新加载配置文件：
当 ngin x的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx
使用-s reload不用先停止 ngin x再启动 nginx 即可将配置信息在 nginx 中生效
如下：
./nginx -s reload
</code></pre>

<ul>
<p>          </p>
</ul>
<hr class="red">
<br>
<h2>￼If you have some questions about my site.Please contact me</h2>
<p><a href='mailto:yuezyevil@gmail.com' >yuezyevil@gmail.com</a></p>


<!-- 
    <hr>
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{hero.id}}
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
-->
   </div>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}

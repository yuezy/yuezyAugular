"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(20, 'Tornado')
        ];
        this.myHero = this.heroes[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"note-wrapper\">\n            <h1>Welcome to my site.</h1>\n            <h1>This is how to deploy a new CentOS 7 </h1>\n\n<p>&nbsp;</p>\n<h1>CentOS 7 \u6D41\u7A0B</h1>\n<hr>\n<br>\n<h2 class=\"title-h2\">\uFFFCjava\u73AF\u5883:yum\u914D\u7F6Eopenjdk</h2>\n<br>\n<ul><li>\u67E5\u770BCentOS\u81EA\u5E26JDK\u662F\u5426\u5DF2\u5B89\u88C5\n</li></ul><pre><code class='code-multiline'> yum list installed |grep java\n</code></pre><br><ul><li>\u5378\u8F7DCentOS\u7CFB\u7EDF\u81EA\u5E26Java\u73AF\u5883\n</li></ul><pre><code class='code-multiline'>yum -y remove java-1.7.0-openjdk*\n</code></pre><br><ul><li>\u67E5\u770Byum\u5E93\u4E2D\u7684Java\u5B89\u88C5\u5305\n</li></ul><pre><code class='code-multiline'>yum -y list java*\n</code></pre><br><ul><li>\u4F7F\u7528yum\u5B89\u88C5Java\u73AF\u5883\n</li></ul><pre><code class='code-multiline'> yum -y install java-1.8.0-openjdk           //\u4EE51.8.0\u4E3A\u4F8B\n</code></pre><br>\n<hr>\n<br>\n<h2 class=\"title-h2\">\uFFFCjava\u73AF\u5883:\u4E0B\u8F7D\u7A33\u5B9Ajdk</h2>\n<br>\n<ul><li>jdk\u4E0B\u8F7D\n</li></ul><a href=\"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html\" target=\"_blank\">jdk\u4E0B\u8F7D</a>\n<p>\n  <br>\n</p>\n<ul><li>scp\u81F3\u73AF\u5883\n</li></ul>\n<pre><code class='code-multiline'>scp -r jdk-8u111-linux-x64.tar.gz user@your ip address:/\n</code></pre><br><ul><li>\u89E3\u538B\u73AF\u5883\u5305\n</li></ul><pre><code class='code-multiline'>tar -zxvf  jdk\n</code></pre><br><ul><li>\u7F16\u8F91\u6587\u4EF6\n</li></ul><pre><code class='code-multiline'>vim ~/.bash_profile\nexport JAVA_HOME=/usr/local/jdk1.7.0_71\nexport CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\nexport PATH=$JAVA_HOME/bin:$PATH\n\n\u6CE8\u610F\u6807\u70B9\u7B26\u53F7\uFF0CJAVA_HOME\u662F\u521A\u624Dmv\u5230\u8DEF\u5F84\n</code></pre><br>\n<ul><li>\u6267\u884C\u6587\u4EF6\n</li></ul><pre><code class='code-multiline'>source ~/.bash_profile\n</code></pre><br><ul><li>\u67E5\u770B\u662F\u5426\u6210\u529F\n</li></ul><pre><code class='code-multiline'>java -version\njavac\n</code></pre><br>\n<hr>\n<br>\n<h2 class=\"title-h2\">git</h2>\n<pre><br><code class='code-multiline'>yum install git\n</code></pre><br>\n<hr>\n<br>\n<h2 class=\"title-h2\">tomcat</h2>\n<p>&nbsp;</p>\n<p><a href=\"http://tomcat.apache.org/download-70.cgi\" target=\"_blank\">tomcat 7.0.x \u4E0B\u8F7D</a></p>\n<br>\n<ul><li>\u89E3\u538B\u5B8C\u6210\u540E\n</li></ul><pre><code class='code-multiline'>/home/apache-tomcat-7.0.73/bin/startup.sh\n</code></pre><br>\n<hr>\n<br>\n<h2 class=\"title-h2\">nginx</h2>\n<br>\n\n<ul><li>gcc\u5B89\u88C5\n</li></ul>\u5B89\u88C5 nginx \u9700\u8981\u5148\u5C06\u5B98\u7F51\u4E0B\u8F7D\u7684\u6E90\u7801\u8FDB\u884C\u7F16\u8BD1\uFF0C\u7F16\u8BD1\u4F9D\u8D56 gcc \u73AF\u5883\uFF0C\u5982\u679C\u6CA1\u6709 gcc \u73AF\u5883\uFF0C\u5219\u9700\u8981\u5B89\u88C5\uFF1A\n<br>\n<pre><code class='code-multiline'>yum install gcc-c++\n</code></pre><br><ul><li>PCRE pcre-devel \u5B89\u88C5\n</li></ul>PCRE(Perl Compatible Regular Expressions) \u662F\u4E00\u4E2APerl\u5E93\uFF0C\u5305\u62EC perl \u517C\u5BB9\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5E93\u3002nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u6240\u4EE5\u9700\u8981\u5728 linux \u4E0A\u5B89\u88C5 pcre \u5E93\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002nginx\u4E5F\u9700\u8981\u6B64\u5E93\u3002\u547D\u4EE4\uFF1A\n<pre><code class='code-multiline'>yum install -y pcre pcre-devel\n</code></pre><br><ul><li>zlib \u5B89\u88C5\n</li></ul>zlib \u5E93\u63D0\u4F9B\u4E86\u5F88\u591A\u79CD\u538B\u7F29\u548C\u89E3\u538B\u7F29\u7684\u65B9\u5F0F\uFF0C nginx \u4F7F\u7528 zlib \u5BF9 http \u5305\u7684\u5185\u5BB9\u8FDB\u884C gzip \uFF0C\u6240\u4EE5\u9700\u8981\u5728 Centos \u4E0A\u5B89\u88C5 zlib \u5E93\u3002\n<pre><code class='code-multiline'>yum install -y zlib zlib-devel\n</code></pre><br><ul><li>OpenSSL \u5B89\u88C5\n</li></ul>OpenSSL \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0C\u56CA\u62EC\u4E3B\u8981\u7684\u5BC6\u7801\u7B97\u6CD5\u3001\u5E38\u7528\u7684\u5BC6\u94A5\u548C\u8BC1\u4E66\u5C01\u88C5\u7BA1\u7406\u529F\u80FD\u53CA SSL \u534F\u8BAE\uFF0C\u5E76\u63D0\u4F9B\u4E30\u5BCC\u7684\u5E94\u7528\u7A0B\u5E8F\u4F9B\u6D4B\u8BD5\u6216\u5176\u5B83\u76EE\u7684\u4F7F\u7528\u3002\nnginx \u4E0D\u4EC5\u652F\u6301 http \u534F\u8BAE\uFF0C\u8FD8\u652F\u6301 https\uFF08\u5373\u5728ssl\u534F\u8BAE\u4E0A\u4F20\u8F93http\uFF09\uFF0C\u6240\u4EE5\u9700\u8981\u5728 Centos \u5B89\u88C5 OpenSSL \u5E93\u3002\n<pre><code class='code-multiline'>yum install -y openssl openssl-devel\n</code></pre><br>\n<ul><li>\u4E0B\u8F7Dnginx\n</li></ul><a href=\"https://nginx.org/en/download.html\" target=\"_blank\">nginx\u4E0B\u8F7D</a>\n<p>\n  <br>\n</p>\n<ul><li>\u89E3\u538Bnginx\n</li></ul><pre><code class='code-multiline'>tar -zxvf nginx-xx\n</code></pre><br><ul><li>\u914D\u7F6E\n</li></ul>\u5230nginx\u76EE\u5F55\u4E0B:\n<pre><code class='code-multiline'>./configure   //\u9ED8\u8BA4\u914D\u7F6E\n</code></pre><br><ul><li>\u7F16\u8BD1\u5B89\u88C5\n</li></ul><pre><code class='code-multiline'>make\nmake install\nwhereis nginx   // \u67E5\u627E\u5B89\u88C5\u8DEF\u5F84\n</code></pre><br><ul><li> \u542F\u52A8nginx\n</li></ul><pre><code class='code-multiline'>cd /usr/local/nginx/sbin/\n./nginx\n./nginx -s stop\n./nginx -s quit\n./nginx -s reload\n./nginx -s quit:\u6B64\u65B9\u5F0F\u505C\u6B62\u6B65\u9AA4\u662F\u5F85nginx\u8FDB\u7A0B\u5904\u7406\u4EFB\u52A1\u5B8C\u6BD5\u8FDB\u884C\u505C\u6B62\u3002\n./nginx -s stop:\u6B64\u65B9\u5F0F\u76F8\u5F53\u4E8E\u5148\u67E5\u51FAnginx\u8FDB\u7A0Bid\u518D\u4F7F\u7528kill\u547D\u4EE4\u5F3A\u5236\u6740\u6389\u8FDB\u7A0B\u3002\n\n\u67E5\u8BE2nginx\u8FDB\u7A0B\uFF1A\nps aux|grep nginx\n</code></pre><br><ul><li>\u91CD\u542Fnginx\n</li></ul><pre><code class='code-multiline'>1.\u5148\u505C\u6B62\u518D\u542F\u52A8\uFF08\u63A8\u8350\uFF09\uFF1A\n\u5BF9 nginx \u8FDB\u884C\u91CD\u542F\u76F8\u5F53\u4E8E\u5148\u505C\u6B62\u518D\u542F\u52A8\uFF0C\u5373\u5148\u6267\u884C\u505C\u6B62\u547D\u4EE4\u518D\u6267\u884C\u542F\u52A8\u547D\u4EE4\u3002\u5982\u4E0B\uFF1A\n./nginx -s quit\n./nginx\n2.\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF1A\n\u5F53 ngin x\u7684\u914D\u7F6E\u6587\u4EF6 nginx.conf \u4FEE\u6539\u540E\uFF0C\u8981\u60F3\u8BA9\u914D\u7F6E\u751F\u6548\u9700\u8981\u91CD\u542F nginx\n\u4F7F\u7528-s reload\u4E0D\u7528\u5148\u505C\u6B62 ngin x\u518D\u542F\u52A8 nginx \u5373\u53EF\u5C06\u914D\u7F6E\u4FE1\u606F\u5728 nginx \u4E2D\u751F\u6548\n\u5982\u4E0B\uFF1A\n./nginx -s reload\n</code></pre>\n\n<ul>\n<p>          </p>\n</ul>\n<hr class=\"red\">\n<br>\n<h2>\uFFFCIf you have some questions about my site.Please contact me</h2>\n<p><a href='mailto:yuezyevil@gmail.com' >yuezyevil@gmail.com</a></p>\n\n\n<!-- \n    <hr>\n  <h1>{{title}}</h1>\n  <h2>My favorite hero is: {{myHero.name}}</h2>\n  <p>Heroes:</p>\n  <ul>\n    <li *ngFor=\"let hero of heroes\">\n      {{hero.id}}\n      {{ hero.name }}\n      </li>\n  </ul>\n  <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n-->\n   </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
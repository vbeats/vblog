"use strict";(self.webpackChunkvblog=self.webpackChunkvblog||[]).push([[250],{5521:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-261bfbc2",path:"/data/base/zookeeper.html",title:"Zookeeper",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"集群",slug:"集群",children:[]},{level:2,title:"投票机制",slug:"投票机制",children:[]},{level:2,title:"节点类型",slug:"节点类型",children:[]},{level:2,title:"集群配置",slug:"集群配置",children:[]},{level:2,title:"客户端",slug:"客户端",children:[]},{level:2,title:"stat 结构体",slug:"stat-结构体",children:[]},{level:2,title:"监听器",slug:"监听器",children:[]},{level:2,title:"数据同步",slug:"数据同步",children:[]}],filePathRelative:"data/base/zookeeper.md",git:{updatedTime:1636365007e3,contributors:[{name:"bootvue",email:"bootvue@gmail.com",commits:1}]}}},6646:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});const n=(0,s(6252).uE)('<h1 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h1><p>节点配置, 服务注册 发现, 调度, 分布式服务治理......</p><p>观察者模式, zookeeper 存储的数据变化, 通知已注册的节点</p><h2 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h2><p>一主多从,半数存活就能正常服务 每个 server 数据一致 客户端请求顺序执行 数据更新原子性 实时性</p><h2 id="投票机制" tabindex="-1"><a class="header-anchor" href="#投票机制" aria-hidden="true">#</a> 投票机制</h2><p>每个节点自己投自己, 投自己选不出 master 的话, 就把票投给 id 值大的节点</p><h2 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型" aria-hidden="true">#</a> 节点类型</h2><p>持久/短暂</p><h2 id="集群配置" tabindex="-1"><a class="header-anchor" href="#集群配置" aria-hidden="true">#</a> 集群配置</h2><p>zookeeper data 目录下新建 <code>myid</code> 文件, 里边放 id 值: 1,2,3...., 不同节点不要重复</p><p>zoo.cfg 增加节点配置</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/data\n<span class="token assign-left variable">dataLogDir</span><span class="token operator">=</span>/datalog\nserver.1<span class="token operator">=</span>xxxx:2888:3888\nserver.2<span class="token operator">=</span>xxxx:2888:3888\n<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>格式:</p><blockquote><p>server.id=ip:数据通信端口号:投票通信端口号</p></blockquote><h2 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h2><p>命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ls: 查看节点内容\nls2: 详细内容\n<span class="token function">ls</span> /test watch: 监听/test节点路径变化\ncreate /test <span class="token string">&quot;ttttt&quot;</span><span class="token builtin class-name">:</span> 创建节点并设置内容\ncreate -e /test/mm <span class="token string">&quot;mmmm&quot;</span><span class="token builtin class-name">:</span> 创建短暂节点, zookeeper重启就没了\ncreate -s /test/nn <span class="token string">&quot;nnn&quot;</span><span class="token builtin class-name">:</span> nn00002<span class="token punctuation">..</span><span class="token punctuation">..</span>, 带序号自增\nget /test: 从节点/test取值\n<span class="token builtin class-name">set</span> /test <span class="token string">&quot;xxxx&quot;</span><span class="token builtin class-name">:</span> 设置值\nget /test watch: 监听节点值变化\ndelete /test: 删除节点\nrmr /test: 递归删除\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="stat-结构体" tabindex="-1"><a class="header-anchor" href="#stat-结构体" aria-hidden="true">#</a> stat 结构体</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>czxid: 创建节点的事务zxid<span class="token punctuation">(</span>时间戳<span class="token punctuation">)</span>\nctime-znode: 创建时间戳\nmzxid-znode: 最后更新的事务zxid\ndataLength-znode: 数据长度\nnumChildren-znode: 子节点数量\n<span class="token punctuation">..</span><span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器" aria-hidden="true">#</a> 监听器</h2><ol><li>主线程中创建 zookeeper 客户端, 客户端创建两个线程负责网络连接通信 connect 与监听 listener</li><li>connect 线程把注册的监听事件发送给 zookeeper</li><li>zookeeper 监听器列表中加入 客户端发来的要被监听的事件</li><li>zookeeper 监听到有数据/路径变化, 向客户端发送通知消息</li><li>客户端 listener 收到消息....</li></ol><h2 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步" aria-hidden="true">#</a> 数据同步</h2><ol><li>客户端向一个 server 写入数据</li><li>server 如果不是 master, 就发送给 master</li><li>master 会把数据广播给所有的客户端</li><li>半数以上的 server 写成功后就通知客户端成功了</li></ol>',24),l={},t=(0,s(3744).Z)(l,[["render",function(e,a){return n}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[s,n]of a)e[s]=n;return e}}}]);
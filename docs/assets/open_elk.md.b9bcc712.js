import{o as n,c as s,d as a}from"./app.9f9f1749.js";const t='{"title":"ELK","description":"","frontmatter":{},"headers":[{"level":2,"title":"内核参数修改","slug":"内核参数修改"},{"level":2,"title":"增删改查","slug":"增删改查"},{"level":2,"title":"批量处理","slug":"批量处理"},{"level":2,"title":"版本控制","slug":"版本控制"},{"level":2,"title":"mapping","slug":"mapping"},{"level":2,"title":"Filebeat","slug":"filebeat"},{"level":2,"title":"Logstash","slug":"logstash"}],"relativePath":"open/elk.md","lastUpdated":1627737995326}',p={},o=a('<h1 id="elk"><a class="header-anchor" href="#elk" aria-hidden="true">#</a> ELK</h1><h2 id="内核参数修改"><a class="header-anchor" href="#内核参数修改" aria-hidden="true">#</a> 内核参数修改</h2><div class="language-bash"><pre><code>/etc/sysctl.conf  <span class="token comment">#vm.max_map_count=262144</span>\nsysctl -p\n\n<span class="token builtin class-name">ulimit</span> -a\n\n/etc/security/limits.conf\n<span class="token comment"># *　　soft　　nofile　　65536</span>\n<span class="token comment"># *　　hard　　nofile　　65536</span>\n</code></pre></div><h2 id="增删改查"><a class="header-anchor" href="#增删改查" aria-hidden="true">#</a> 增删改查</h2><blockquote><p>7 之后的版本无需指定 type : /{index}/_doc/{id}, /{index}/_doc, or /{index}/_create/{id}</p></blockquote><div class="language-bash"><pre><code>\nPUT /demo\n<span class="token punctuation">{</span>\n  <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;number_of_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,\n    <span class="token string">&quot;number_of_replicas&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 查询过滤字段</span>\nGET /demo/_doc/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>?_source<span class="token operator">=</span>name,age\nGET /demo/_search?q<span class="token operator">=</span>name:张\n\n<span class="token comment"># put 需要指定 id(已存在, 会覆盖数据)    post : elastic自动生成id</span>\nPUT /demo/_doc/1\n<span class="token punctuation">{</span>\n  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;张三&quot;</span>,\n  <span class="token string">&quot;age&quot;</span>:20,\n  <span class="token string">&quot;sex&quot;</span>:0\n<span class="token punctuation">}</span>\n\n<span class="token comment"># post 可以指定修改哪些字段</span>\n\nPOST /demo/_update/1\n<span class="token punctuation">{</span>\n   <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;李四&quot;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment"># 删除</span>\nDELETE /<span class="token punctuation">{</span>index<span class="token punctuation">}</span>/_doc/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>\n\n</code></pre></div><p>示例:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;found&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sex&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;demo&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;aliases&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;sex&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;creation_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1583412394789&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;number_of_shards&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;number_of_replicas&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;uuid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;xGN8ZeQRTlqBUg65FSDXag&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;created&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;7060199&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;provided_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h2 id="批量处理"><a class="header-anchor" href="#批量处理" aria-hidden="true">#</a> 批量处理</h2><ol><li>批量查询 : _mget</li><li>批量增删改: _bulk</li></ol><div class="language-bash"><pre><code>    <span class="token punctuation">{</span>action: <span class="token punctuation">{</span>metadata<span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token punctuation">{</span>requestbody<span class="token punctuation">}</span>\n</code></pre></div><h2 id="版本控制"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h2><blockquote><p>乐观锁 修改数据指定_version=xx , 与当前 index version 版本不一致修改会失败 修改成功 index 的 version 自动+1 , 如果又指定了 version_type=external, 那么_version 要比当前版本号大才会修改成功</p></blockquote><h2 id="mapping"><a class="header-anchor" href="#mapping" aria-hidden="true">#</a> mapping</h2><blockquote><p>字段对应的类型</p></blockquote><h2 id="filebeat"><a class="header-anchor" href="#filebeat" aria-hidden="true">#</a> Filebeat</h2><blockquote><p>input–&gt;filter—&gt;output modules</p></blockquote><div class="language-bash"><pre><code>filebeat modules list\nfilebeat modules <span class="token builtin class-name">enable</span> xxxx\n<span class="token comment"># 模块配置文件 modeule.d/xxx.yml</span>\n</code></pre></div><div class="language-yaml"><pre><code><span class="token comment"># filebeat.inputs:</span>\n<span class="token comment">#   - type: container</span>\n<span class="token comment">#     paths:</span>\n<span class="token comment">#       - &quot;/var/lib/docker/containers/*/*.log&quot;</span>\n<span class="token comment">#     enabled: true</span>\n<span class="token comment">#     tail_files: false</span>\n<span class="token comment">#     scan_frequency: 6s</span>\n<span class="token comment"># 开启服务自动发现  label \tco.elastic.logs/enabled=true</span>\n<span class="token key atrule">filebeat.autodiscover</span><span class="token punctuation">:</span>\n  <span class="token key atrule">providers</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> docker\n      <span class="token key atrule">hints.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n      <span class="token key atrule">hints.default_config.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n<span class="token key atrule">processors</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">add_docker_metadata</span><span class="token punctuation">:</span>\n      <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;unix:///var/run/docker.sock&quot;</span>\n\n<span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>\n  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.100.80:5044&quot;</span><span class="token punctuation">]</span>\n</code></pre></div><h2 id="logstash"><a class="header-anchor" href="#logstash" aria-hidden="true">#</a> Logstash</h2><blockquote><p>input–&gt;filter—&gt;output</p></blockquote><div class="language-yaml"><pre><code><span class="token punctuation">-</span> <span class="token key atrule">pipeline.id</span><span class="token punctuation">:</span> docker<span class="token punctuation">-</span>test\n  <span class="token key atrule">queue.type</span><span class="token punctuation">:</span> persisted\n  <span class="token key atrule">path.config</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/battery/logstash/config/logstash.conf&quot;</span>\n</code></pre></div><div class="language-bash"><pre><code>input <span class="token punctuation">{</span>\n  beats <span class="token punctuation">{</span>\n    port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5044</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nfilter<span class="token punctuation">{</span>\n  <span class="token comment"># .....</span>\n<span class="token punctuation">}</span>\n\noutput <span class="token punctuation">{</span>\n  file<span class="token punctuation">{</span>\n      path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/home/battery/%{+YYYY-MM-dd}.log&quot;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">{</span>\n    file<span class="token punctuation">{</span>\n      path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/home/battery/mysql-%{+YYYY-MM-dd}.log&quot;</span>\n      codec <span class="token operator">=</span><span class="token operator">&gt;</span> line <span class="token punctuation">{</span> <span class="token function">format</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{message}&quot;</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>else <span class="token keyword">if</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">{</span>\n    file<span class="token punctuation">{</span>\n      path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/home/battery/redis-%{+YYYY-MM-dd}.log&quot;</span>\n      codec <span class="token operator">=</span><span class="token operator">&gt;</span> line <span class="token punctuation">{</span> <span class="token function">format</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{message}&quot;</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div>',23);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
import{e as n}from"./app.44dda959.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="elk" tabindex="-1"><a class="header-anchor" href="#elk" aria-hidden="true">#</a> ELK</h1><h2 id="\u5185\u6838\u53C2\u6570\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u53C2\u6570\u4FEE\u6539" aria-hidden="true">#</a> \u5185\u6838\u53C2\u6570\u4FEE\u6539</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/sysctl.conf  <span class="token comment">#vm.max_map_count=262144</span>
sysctl -p

<span class="token builtin class-name">ulimit</span> -a

/etc/security/limits.conf
<span class="token comment"># *\u3000\u3000soft\u3000\u3000nofile\u3000\u300065536</span>
<span class="token comment"># *\u3000\u3000hard\u3000\u3000nofile\u3000\u300065536</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> \u589E\u5220\u6539\u67E5</h2><blockquote><p>7 \u4E4B\u540E\u7684\u7248\u672C\u65E0\u9700\u6307\u5B9A type : /{index}/_doc/{id}, /{index}/_doc, or /{index}/_create/{id}</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
PUT /demo
<span class="token punctuation">{</span>
  <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;number_of_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;number_of_replicas&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u67E5\u8BE2\u8FC7\u6EE4\u5B57\u6BB5</span>
GET /demo/_doc/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>?_source<span class="token operator">=</span>name,age
GET /demo/_search?q<span class="token operator">=</span>name:\u5F20

<span class="token comment"># put \u9700\u8981\u6307\u5B9A id(\u5DF2\u5B58\u5728, \u4F1A\u8986\u76D6\u6570\u636E)    post : elastic\u81EA\u52A8\u751F\u6210id</span>
PUT /demo/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;\u5F20\u4E09&quot;</span>,
  <span class="token string">&quot;age&quot;</span>:20,
  <span class="token string">&quot;sex&quot;</span>:0
<span class="token punctuation">}</span>

<span class="token comment"># post \u53EF\u4EE5\u6307\u5B9A\u4FEE\u6539\u54EA\u4E9B\u5B57\u6BB5</span>

POST /demo/_update/1
<span class="token punctuation">{</span>
   <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;\u674E\u56DB&quot;</span>
<span class="token punctuation">}</span>


<span class="token comment"># \u5220\u9664</span>
DELETE /<span class="token punctuation">{</span>index<span class="token punctuation">}</span>/_doc/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u793A\u4F8B:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sex&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token punctuation">{</span>
  <span class="token property">&quot;demo&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aliases&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sex&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;creation_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1583412394789&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_shards&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_replicas&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;xGN8ZeQRTlqBUg65FSDXag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;created&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;7060199&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;provided_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="\u6279\u91CF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u5904\u7406" aria-hidden="true">#</a> \u6279\u91CF\u5904\u7406</h2><ol><li>\u6279\u91CF\u67E5\u8BE2 : _mget</li><li>\u6279\u91CF\u589E\u5220\u6539: _bulk</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token punctuation">{</span>action: <span class="token punctuation">{</span>metadata<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span>requestbody<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> \u7248\u672C\u63A7\u5236</h2><blockquote><p>\u4E50\u89C2\u9501 \u4FEE\u6539\u6570\u636E\u6307\u5B9A_version=xx , \u4E0E\u5F53\u524D index version \u7248\u672C\u4E0D\u4E00\u81F4\u4FEE\u6539\u4F1A\u5931\u8D25 \u4FEE\u6539\u6210\u529F index \u7684 version \u81EA\u52A8+1 , \u5982\u679C\u53C8\u6307\u5B9A\u4E86 version_type=external, \u90A3\u4E48_version \u8981\u6BD4\u5F53\u524D\u7248\u672C\u53F7\u5927\u624D\u4F1A\u4FEE\u6539\u6210\u529F</p></blockquote><h2 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping" aria-hidden="true">#</a> mapping</h2><blockquote><p>\u5B57\u6BB5\u5BF9\u5E94\u7684\u7C7B\u578B</p></blockquote><h2 id="filebeat" tabindex="-1"><a class="header-anchor" href="#filebeat" aria-hidden="true">#</a> Filebeat</h2><blockquote><p>input--&gt;filter---&gt;output modules</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>filebeat modules list
filebeat modules <span class="token builtin class-name">enable</span> xxxx
<span class="token comment"># \u6A21\u5757\u914D\u7F6E\u6587\u4EF6 modeule.d/xxx.yml</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># filebeat.inputs:</span>
<span class="token comment">#   - type: container</span>
<span class="token comment">#     paths:</span>
<span class="token comment">#       - &quot;/var/lib/docker/containers/*/*.log&quot;</span>
<span class="token comment">#     enabled: true</span>
<span class="token comment">#     tail_files: false</span>
<span class="token comment">#     scan_frequency: 6s</span>
<span class="token comment"># \u5F00\u542F\u670D\u52A1\u81EA\u52A8\u53D1\u73B0  label 	co.elastic.logs/enabled=true</span>
<span class="token key atrule">filebeat.autodiscover</span><span class="token punctuation">:</span>
  <span class="token key atrule">providers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> docker
      <span class="token key atrule">hints.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">hints.default_config.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">processors</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">add_docker_metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;unix:///var/run/docker.sock&quot;</span>

<span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.100.80:5044&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="logstash" tabindex="-1"><a class="header-anchor" href="#logstash" aria-hidden="true">#</a> Logstash</h2><blockquote><p>input--&gt;filter---&gt;output</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">pipeline.id</span><span class="token punctuation">:</span> docker<span class="token punctuation">-</span>test
  <span class="token key atrule">queue.type</span><span class="token punctuation">:</span> persisted
  <span class="token key atrule">path.config</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/battery/logstash/config/logstash.conf&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>input <span class="token punctuation">{</span>
  beats <span class="token punctuation">{</span>
    port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5044</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

filter<span class="token punctuation">{</span>
  <span class="token comment"># .....</span>
<span class="token punctuation">}</span>

output <span class="token punctuation">{</span>
  file<span class="token punctuation">{</span>
      path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/home/battery/%{+YYYY-MM-dd}.log&quot;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">{</span>
    file<span class="token punctuation">{</span>
      path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/home/battery/mysql-%{+YYYY-MM-dd}.log&quot;</span>
      codec <span class="token operator">=</span><span class="token operator">&gt;</span> line <span class="token punctuation">{</span> <span class="token function">format</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{message}&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>else <span class="token keyword">if</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">{</span>
    file<span class="token punctuation">{</span>
      path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/home/battery/redis-%{+YYYY-MM-dd}.log&quot;</span>
      codec <span class="token operator">=</span><span class="token operator">&gt;</span> line <span class="token punctuation">{</span> <span class="token function">format</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{message}&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,23);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};

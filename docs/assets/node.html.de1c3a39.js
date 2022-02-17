import{r as e,o,c,a as n,d as p,F as u,e as t,b as s}from"./app.aa88db34.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=t(`<h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h1><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h2><p><code>common js</code>\u6A21\u5757\u5BFC\u5165\u5BFC\u51FA \u65B0\u7248\u672C\u4E5F\u652F\u6301<code>es6</code>\u5427</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span>xx<span class="token operator">=</span><span class="token operator">...</span><span class="token punctuation">.</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="buffer" tabindex="-1"><a class="header-anchor" href="#buffer" aria-hidden="true">#</a> Buffer</h2><p><code>\u5B57\u8282\u6570\u7EC4</code>, \u76F4\u63A5\u64CD\u4F5C\u5185\u5B58\u6570\u636E</p>`,6),k={href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener noreferrer"},d=s("API"),b=n("h2",{id:"fs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fs","aria-hidden":"true"},"#"),s(" fs")],-1),m=n("p",null,[n("code",null,"\u6587\u4EF6\u64CD\u4F5C"),s(" \u540C\u6B65 or \u5F02\u6B65")],-1),h={href:"https://nodejs.org/api/fs.html",target:"_blank",rel:"noopener noreferrer"},g=s("API"),x=t(`<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5E95\u5C42\u7528\u7684querystring\u89E3\u6790 \u4E0D\u63A8\u8350\u4F7F\u7528</span>
<span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u221A</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mongo-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#mongo-\u64CD\u4F5C" aria-hidden="true">#</a> mongo \u64CD\u4F5C</h2>`,5),f=n("code",null,"mongodb",-1),_=s(),v={href:"https://mongodb.github.io/node-mongodb-native/",target:"_blank",rel:"noopener noreferrer"},q=s("\u6587\u6863"),y=t(`<p><code>generic-pool</code> : \u8FDE\u63A5\u6C60\u6A21\u5757</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">MongoClient</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

client<span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  db <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ....</span>
  db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u589E\u5220\u6539\u67E5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">...</span><span class="token punctuation">.</span>

db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>   <span class="token comment">// \u591A\u6761Many</span>

db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">/* \u6761\u4EF6 */</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$set</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;xx&quot;</span><span class="token operator">:</span><span class="token string">&quot;oo&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>

db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">/* \u6761\u4EF6 */</span><span class="token punctuation">}</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h2><p><code>get</code>\u8BF7\u6C42\u53C2\u6570: <code>request.query</code></p><p><code>/:id</code>: <code>request.params[&#39;id&#39;]</code></p><p><code>post</code>\u8BF7\u6C42\u53C2\u6570: <code>application/json</code> <code>application/x-www-form-urlencoded</code></p><p>\u4F7F\u7528\u4E2D\u95F4\u4EF6 <code>body-parser.json()</code> <code>body-parser.urlencoded({})</code></p><p>\u9759\u6001\u8D44\u6E90: <code>app.use([path ,] express.static(&#39;public&#39;))</code></p><p>\u4E2D\u95F4\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5E94\u7528\u7EA7\u4E2D\u95F4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8DEF\u7531\u7EA7\u4E2D\u95F4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/xx&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9519\u8BEF\u5904\u7406</span>
<span class="token comment">// \u6700\u540E\u4E00\u7EA7, \u5904\u7406\u5339\u914D\u4E0D\u5230\u7684\u8DEF\u7531</span>

<span class="token comment">// \u5185\u7F6E\u4E2D\u95F4\u4EF6</span>
express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8DEF\u7531\u6A21\u5757\u5316 <code>express.router()</code> \u5206\u79BB\u8DEF\u7531\u5230\u5355\u72EC\u7684\u6A21\u5757</p><p><code>app.use(&#39;/xxx&#39;,router)</code></p><p>\u6587\u4EF6\u4E0A\u4F20 <code>multer</code>\u6A21\u5757</p><h2 id="mongoose" tabindex="-1"><a class="header-anchor" href="#mongoose" aria-hidden="true">#</a> mongoose</h2>`,16),j=s("\u64CD\u4F5C"),w=n("code",null,"mongo",-1),N=s(),B={href:"https://mongoosejs.com/docs/index.html",target:"_blank",rel:"noopener noreferrer"},I=s("\u6587\u6863"),S=t(`<p><code>collection</code> ---&gt; <code>xxSchema</code> ----&gt; <code>model</code></p><h2 id="koa" tabindex="-1"><a class="header-anchor" href="#koa" aria-hidden="true">#</a> koa</h2><p><code>koa koa-router</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/xx&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&quot;oo&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/xxx/:id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// query string</span>
    <span class="token comment">// ctx.request  ctx.query  ctx.querystring</span>
    <span class="token comment">// ctx.params</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E2D\u95F4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/xx&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// post</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">koa-bodyparser()</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/xx&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ctx.request.body</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9759\u6001\u8D44\u6E90</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;koa-static&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">s</span><span class="token punctuation">(</span><span class="token string">&quot;public&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>request</code> ---&gt; <code>app\u4E2D\u95F4\u4EF6</code> ---&gt; <code>router\u5904\u7406</code> ---&gt; <code>app\u4E2D\u95F4\u4EF6</code> ---&gt; <code>client</code></p>`,7);function V(E,L){const a=e("ExternalLinkIcon");return o(),c(u,null,[r,n("p",null,[n("a",k,[d,p(a)])]),b,m,n("p",null,[n("a",h,[g,p(a)])]),x,n("p",null,[f,_,n("a",v,[q,p(a)])]),y,n("p",null,[j,w,N,n("a",B,[I,p(a)])]),S],64)}var P=l(i,[["render",V]]);export{P as default};
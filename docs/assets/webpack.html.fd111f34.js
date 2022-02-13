import{e as n}from"./app.44dda959.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><p><code>vite</code> or <code>webpack</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>webpack ./index.js -o ./dist/build.js --mode<span class="token operator">=</span>development
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>webpack.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;raw-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[hash:10].[ext]&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5904\u7406html\u5185\u7684img\u8D44\u6E90</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(svg|woff|ttf|eot)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;file-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> Entry</h2><p>\u6253\u5305\u5165\u53E3</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>entry<span class="token operator">:</span> <span class="token punctuation">{</span>
    app<span class="token operator">:</span> &#39;./src/app.js&#39;<span class="token punctuation">,</span>
    vendors<span class="token operator">:</span> &#39;./src/vendors.js&#39;
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\u8F93\u51FA</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> &#39;bundle.js&#39;<span class="token punctuation">,</span>
    path<span class="token operator">:</span> &#39;/home/proj/public/assets&#39;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2><p>\u5904\u7406\u5404\u79CD\u6587\u4EF6\u6A21\u5757</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>module<span class="token operator">:</span> <span class="token punctuation">{</span>
  rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> test<span class="token operator">:</span> /\\.css$/<span class="token punctuation">,</span> use<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> test<span class="token operator">:</span> /\\.ts$/<span class="token punctuation">,</span> use<span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u4E2A\u51FD\u6570, <code>resolveLoader</code> \u53EF\u4EE5\u914D\u7F6E<code>loader</code>\u4F4D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>loader-utils</code> ==&gt; <code>getOptions</code> \u83B7\u53D6 <code>loader</code> \u4E2D <code>options</code> \u914D\u7F6E\u4FE1\u606F</p><p>\u6821\u9A8C<code>options</code>, <code>shecma-utils</code> ===&gt; <code>validate</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">validate</span><span class="token punctuation">(</span>schema<span class="token punctuation">.</span>json<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h2><p>\u4E71\u4E03\u516B\u7CDF\u5404\u79CD\u63D2\u4EF6 <code>tapable hooks</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
  new webpack.optimize.UglifyJsPlugin()<span class="token punctuation">,</span>
  new HtmlWebpackPlugin(<span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span> <span class="token punctuation">}</span>)<span class="token punctuation">,</span>
<span class="token punctuation">]</span>;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> Mode</h2><p><code>development</code> <code>production</code></p><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2><ul><li>Externals</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>externals<span class="token operator">:</span> <span class="token punctuation">{</span>
    jquery<span class="token operator">:</span> &#39;jQuery&#39;<span class="token punctuation">,</span>  <span class="token comment">/* k: npm\u5305\u540D   v: \u5F15\u5165\u65F6\u7684\u540D\u79F0 */</span>
    &#39;fs-extra&#39;<span class="token operator">:</span> &#39;commonjs2 fs-extra&#39;<span class="token punctuation">,</span>
    lodash <span class="token operator">:</span> <span class="token punctuation">{</span>
      commonjs<span class="token operator">:</span> &#39;lodash&#39;<span class="token punctuation">,</span>
      amd<span class="token operator">:</span> &#39;lodash&#39;<span class="token punctuation">,</span>
      root<span class="token operator">:</span> &#39;_&#39; <span class="token comment">// indicates global variable</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver" aria-hidden="true">#</a> devServer</h2><p><code>webpack-dev-server</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">compress</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u542FHMR\u70ED\u91CD\u8F7D</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">&#39;xxx-source-map&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><h2 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u63D2\u4EF6</h2><h3 id="splitchunks" tabindex="-1"><a class="header-anchor" href="#splitchunks" aria-hidden="true">#</a> SplitChunks</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5206\u5305</span>
splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
     chunks<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u4E09\u9009\u4E00\uFF1A &quot;initial&quot; | &quot;all&quot;(\u63A8\u8350) | &quot;async&quot; (\u9ED8\u8BA4\u5C31\u662Fasync)</span>
     minSize<span class="token operator">:</span> <span class="token number">30</span>*<span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5C0F\u5C3A\u5BF8\uFF0C30000  bytes  30kb</span>
     maxSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
     minChunks<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5C0F chunk \uFF0C\u9ED8\u8BA41  Infinity \u65E0\u9650</span>
     maxAsyncRequests<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5927\u5F02\u6B65\u8BF7\u6C42\u6570\uFF0C \u9ED8\u8BA45</span>
     maxInitialRequests <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5927\u521D\u59CB\u5316\u8BF7\u6C42\u4E66\uFF0C\u9ED8\u8BA43</span>
     automaticNameDelimiter<span class="token operator">:</span> &#39;-&#39;<span class="token punctuation">,</span><span class="token comment">// \u6253\u5305\u5206\u9694\u7B26</span>
     name<span class="token operator">:</span> function()<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u540E\u7684\u540D\u79F0\uFF0C\u6B64\u9009\u9879\u53EF\u63A5\u6536 function</span>
     cacheGroups<span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">// \u8FD9\u91CC\u5F00\u59CB\u8BBE\u7F6E\u7F13\u5B58\u7684 chunks</span>
         priority<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u7F13\u5B58\u7EC4\u4F18\u5148\u7EA7</span>
         defaultVendors<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// key \u4E3Aentry\u4E2D\u5B9A\u4E49\u7684 \u5165\u53E3\u540D\u79F0</span>
             chunks<span class="token operator">:</span> <span class="token string">&quot;initial&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u4E09\u9009\u4E00\uFF1A &quot;initial&quot; | &quot;all&quot; | &quot;async&quot;(\u9ED8\u8BA4\u5C31\u662Fasync)</span>
             test<span class="token operator">:</span> /<span class="token punctuation">[</span>\\\\/<span class="token punctuation">]</span>node_modules<span class="token punctuation">[</span>\\\\/<span class="token punctuation">]</span>/<span class="token punctuation">,</span><span class="token punctuation">,</span> <span class="token comment">// \u6B63\u5219\u89C4\u5219\u9A8C\u8BC1\uFF0C\u5982\u679C\u7B26\u5408\u5C31\u63D0\u53D6 chunk</span>
             name<span class="token operator">:</span> <span class="token string">&quot;vendor&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8981\u7F13\u5B58\u7684 \u5206\u9694\u51FA\u6765\u7684 chunk \u540D\u79F0</span>
             minSize<span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
             minChunks<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
             enforce<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
             maxAsyncRequests<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5927\u5F02\u6B65\u8BF7\u6C42\u6570\uFF0C \u9ED8\u8BA41</span>
             maxInitialRequests <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5927\u521D\u59CB\u5316\u8BF7\u6C42\u4E66\uFF0C\u9ED8\u8BA41</span>
             reuseExistingChunk<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u53EF\u8BBE\u7F6E\u662F\u5426\u91CD\u7528\u8BE5chunk</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="compressionplugin" tabindex="-1"><a class="header-anchor" href="#compressionplugin" aria-hidden="true">#</a> CompressionPlugin</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// gzip\u538B\u7F29</span>
new CompressionPlugin(<span class="token punctuation">{</span>
  <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[path].gz[query]&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;algorithm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> /\\.js$|\\.css$|\\.html$/<span class="token punctuation">,</span>
  <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minRatio&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span>
<span class="token punctuation">}</span>)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3><p>\u5355\u72EC\u63D0\u53D6 css</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> plugins<span class="token operator">:</span> <span class="token punctuation">[</span>new MiniCssExtractPlugin(<span class="token comment">/*  config */</span>)<span class="token punctuation">]</span><span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> /\\.css$/i<span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin.loader<span class="token punctuation">,</span> &#39;css-loader&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,39);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};

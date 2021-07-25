import{o as n,c as s,d as a}from"./app.11603a1f.js";const t='{"title":"webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"Entry","slug":"entry"},{"level":2,"title":"Output","slug":"output"},{"level":2,"title":"Loader","slug":"loader"},{"level":2,"title":"Plugins","slug":"plugins"},{"level":2,"title":"Mode","slug":"mode"},{"level":2,"title":"config","slug":"config"},{"level":2,"title":"常用插件","slug":"常用插件"},{"level":3,"title":"SplitChunks","slug":"splitchunks"},{"level":3,"title":"CompressionPlugin","slug":"compressionplugin"},{"level":3,"title":"mini-css-extract-plugin","slug":"mini-css-extract-plugin"}],"relativePath":"language/webpack.md","lastUpdated":1627216648963}',p={},o=a('<h1 id="webpack"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><p><code>webpack.config.js</code></p><div class="language-bash"><pre><code>webpack ./index.js -o ./dist/build.js --mode<span class="token operator">=</span>development\n</code></pre></div><h2 id="entry"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> Entry</h2><p>打包入口</p><div class="language-json"><pre><code>entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> &#39;./src/app.js&#39;<span class="token punctuation">,</span>\n    vendors<span class="token operator">:</span> &#39;./src/vendors.js&#39;\n  <span class="token punctuation">}</span>\n</code></pre></div><h2 id="output"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>输出</p><div class="language-json"><pre><code>output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> &#39;bundle.js&#39;<span class="token punctuation">,</span>\n    path<span class="token operator">:</span> &#39;/home/proj/public/assets&#39;\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="loader"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2><div class="language-json"><pre><code>module<span class="token operator">:</span> <span class="token punctuation">{</span>\n  rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> test<span class="token operator">:</span> /\\.css$/<span class="token punctuation">,</span> use<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> test<span class="token operator">:</span> /\\.ts$/<span class="token punctuation">,</span> use<span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>;\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="plugins"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h2><p>乱七八糟各种插件</p><div class="language-json"><pre><code>plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n  new webpack.optimize.UglifyJsPlugin()<span class="token punctuation">,</span>\n  new HtmlWebpackPlugin(<span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span> <span class="token punctuation">}</span>)<span class="token punctuation">,</span>\n<span class="token punctuation">]</span>;\n</code></pre></div><h2 id="mode"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> Mode</h2><p><code>development</code> <code>production</code></p><h2 id="config"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2><ul><li>Externals</li></ul><div class="language-json"><pre><code>externals<span class="token operator">:</span> <span class="token punctuation">{</span>\n    jquery<span class="token operator">:</span> &#39;jQuery&#39;<span class="token punctuation">,</span>  <span class="token comment">/* k: npm包名   v: 引入时的名称 */</span>\n    &#39;fs-extra&#39;<span class="token operator">:</span> &#39;commonjs2 fs-extra&#39;<span class="token punctuation">,</span>\n    lodash <span class="token operator">:</span> <span class="token punctuation">{</span>\n      commonjs<span class="token operator">:</span> &#39;lodash&#39;<span class="token punctuation">,</span>\n      amd<span class="token operator">:</span> &#39;lodash&#39;<span class="token punctuation">,</span>\n      root<span class="token operator">:</span> &#39;_&#39; <span class="token comment">// indicates global variable</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre></div><hr><h2 id="常用插件"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h2><h3 id="splitchunks"><a class="header-anchor" href="#splitchunks" aria-hidden="true">#</a> SplitChunks</h3><div class="language-json"><pre><code><span class="token comment">// 分包</span>\nsplitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>\n     chunks<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 必须三选一： &quot;initial&quot; | &quot;all&quot;(推荐) | &quot;async&quot; (默认就是async)</span>\n     minSize<span class="token operator">:</span> <span class="token number">30</span>*<span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 最小尺寸，30000  bytes  30kb</span>\n     maxSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n     minChunks<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 最小 chunk ，默认1  Infinity 无限</span>\n     maxAsyncRequests<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最大异步请求数， 默认5</span>\n     maxInitialRequests <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 最大初始化请求书，默认3</span>\n     automaticNameDelimiter<span class="token operator">:</span> &#39;-&#39;<span class="token punctuation">,</span><span class="token comment">// 打包分隔符</span>\n     name<span class="token operator">:</span> function()<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 打包后的名称，此选项可接收 function</span>\n     cacheGroups<span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">// 这里开始设置缓存的 chunks</span>\n         priority<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 缓存组优先级</span>\n         defaultVendors<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// key 为entry中定义的 入口名称</span>\n             chunks<span class="token operator">:</span> <span class="token string">&quot;initial&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 必须三选一： &quot;initial&quot; | &quot;all&quot; | &quot;async&quot;(默认就是async)</span>\n             test<span class="token operator">:</span> /<span class="token punctuation">[</span>\\\\/<span class="token punctuation">]</span>node_modules<span class="token punctuation">[</span>\\\\/<span class="token punctuation">]</span>/<span class="token punctuation">,</span><span class="token punctuation">,</span> <span class="token comment">// 正则规则验证，如果符合就提取 chunk</span>\n             name<span class="token operator">:</span> <span class="token string">&quot;vendor&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 要缓存的 分隔出来的 chunk 名称</span>\n             minSize<span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>\n             minChunks<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n             enforce<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n             maxAsyncRequests<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最大异步请求数， 默认1</span>\n             maxInitialRequests <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 最大初始化请求书，默认1</span>\n             reuseExistingChunk<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 可设置是否重用该chunk</span>\n         <span class="token punctuation">}</span>\n     <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div><h3 id="compressionplugin"><a class="header-anchor" href="#compressionplugin" aria-hidden="true">#</a> CompressionPlugin</h3><div class="language-json"><pre><code><span class="token comment">// gzip压缩</span>\nnew CompressionPlugin(<span class="token punctuation">{</span>\n  <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[path].gz[query]&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;algorithm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> /\\.js$|\\.css$|\\.html$/<span class="token punctuation">,</span>\n  <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;minRatio&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span>\n<span class="token punctuation">}</span>)\n</code></pre></div><h3 id="mini-css-extract-plugin"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3><p>单独提取 css</p><div class="language-json"><pre><code> plugins<span class="token operator">:</span> <span class="token punctuation">[</span>new MiniCssExtractPlugin(<span class="token comment">/*  config */</span>)<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> /\\.css$/i<span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin.loader<span class="token punctuation">,</span> &#39;css-loader&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</code></pre></div>',28);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};

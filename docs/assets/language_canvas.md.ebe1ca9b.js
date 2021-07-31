import{o as n,c as s,d as a}from"./app.88739142.js";const t='{"title":"Canvas","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本图形","slug":"基本图形"},{"level":2,"title":"transform","slug":"transform"},{"level":2,"title":"context","slug":"context"}],"relativePath":"language/canvas.md","lastUpdated":1627291714097}',p={},o=a('<h1 id="canvas"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h1><h2 id="基本图形"><a class="header-anchor" href="#基本图形" aria-hidden="true">#</a> 基本图形</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cv<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> cv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#cv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> ctx <span class="token operator">=</span> cv<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 矩形</span>\n  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 线条</span>\n  ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 线段</span>\n  ctx<span class="token punctuation">.</span><span class="token function">beignPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 经过多个点</span>\n\n  ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><code>lineCap</code>:端点样式 <code>lineJoin</code>:连接点样式</p><ul><li>圆</li></ul><div class="language-js"><pre><code>ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 圆心  半径  起始角度  结束角度  是否逆时针</span>\n</code></pre></div><ul><li>text</li></ul><div class="language-js"><pre><code>ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;20px 微软雅黑&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>img</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nimg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;./xx.png&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 加载完毕再渲染</span>\n\nimg<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// img,[裁剪起始位置x, 裁剪起始位置y, width, height] ,x ,y, width, height</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 叠加 globalCompositeOperation</span>\n\n<span class="token comment">/* source-over\t默认。在目标图像上显示源图像。\nsource-atop\t在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。\nsource-in\t在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。\nsource-out\t在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。\ndestination-over\t在源图像上方显示目标图像。\ndestination-atop\t在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。\ndestination-in\t在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。\ndestination-out\t在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。\nlighter\t显示源图像 + 目标图像  叠加部分透明。\ncopy\t显示源图像。忽略目标图像。\nxor\t使用异或操作对源图像与目标图像进行组合。 */</span>\n\nctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// dest</span>\n\nctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">&quot;source-atop&quot;</span><span class="token punctuation">;</span>\n\nctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// orign</span>\n</code></pre></div><h2 id="transform"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h2><div class="language-js"><pre><code><span class="token comment">// 移动坐标</span>\nctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 坐标原点移动</span>\n\nctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 坐标系顺时针旋转</span>\n\nctx<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缩放坐标比例</span>\n</code></pre></div><h2 id="context"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h2><div class="language-js"><pre><code><span class="token comment">// 保存/恢复 canvas上下文信息    多次保存  需要多次恢复</span>\nctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nctx<span class="token punctuation">.</span><span class="token function">resore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',14);p.render=function(a,t,p,c,e,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
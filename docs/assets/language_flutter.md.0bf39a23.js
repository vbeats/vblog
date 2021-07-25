import{o as n,c as s,d as a}from"./app.11603a1f.js";const t='{"title":"Flutter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dart","slug":"dart"},{"level":2,"title":"Widget","slug":"widget"}],"relativePath":"language/flutter.md","lastUpdated":1627216648939}',p={},e=a('<h1 id="flutter"><a class="header-anchor" href="#flutter" aria-hidden="true">#</a> Flutter</h1><p><a href="https://pub.dev/flutter" target="_blank" rel="noopener noreferrer">Flutter</a></p><h2 id="dart"><a class="header-anchor" href="#dart" aria-hidden="true">#</a> Dart</h2><div class="language-dart"><pre><code><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>\n  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n  bool mute <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// _cache is library-private, thanks to</span>\n  <span class="token comment">// the _ in front of its name.</span>\n  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Logger</span><span class="token punctuation">&gt;</span></span> _cache <span class="token operator">=</span>\n      <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Logger</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">factory</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> _cache<span class="token punctuation">.</span><span class="token function">putIfAbsent</span><span class="token punctuation">(</span>\n        name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">_internal</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">_internal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mute<span class="token punctuation">)</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token string">&#39;UI&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlogger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Button clicked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="widget"><a class="header-anchor" href="#widget" aria-hidden="true">#</a> Widget</h2><div class="language-dart"><pre><code><span class="token class-name">ListView</span>\n<span class="token class-name">GridView</span>\n<span class="token class-name">Row</span> <span class="token class-name">Column</span> <span class="token class-name">Stack</span> <span class="token class-name">Positioned</span> <span class="token class-name">Card</span>\n<span class="token class-name">Navigator</span>\n</code></pre></div>',6);p.render=function(a,t,p,o,c,l){return n(),s("div",null,[e])};export default p;export{t as __pageData};

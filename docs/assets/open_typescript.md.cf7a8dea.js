import{o as n,c as s,d as a}from"./app.040fc7a7.js";const t='{"title":"TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"类型","slug":"类型"},{"level":2,"title":"function","slug":"function"},{"level":2,"title":"class","slug":"class"},{"level":2,"title":"interface","slug":"interface"},{"level":2,"title":"泛型","slug":"泛型"},{"level":2,"title":"namespace","slug":"namespace"},{"level":2,"title":"装饰器","slug":"装饰器"}],"relativePath":"open/typescript.md","lastUpdated":1627208176278}',p={},o=a('<h1 id="typescript"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><h2 id="类型"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><div class="language-ts"><pre><code><span class="token comment">// const xxx: type1 | type2= ...</span>\n\n<span class="token keyword">const</span> xxx<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">/*\nboolean\nstring\nnumber\ntuple (数组, 元素类型可以不同)\narray (number[]  string[] ....  Array&lt;number&gt; ...)\nenum xxx{\n    a=1,\n    b=2\n}\n\nany\nnull\nundifined\nvoid\nnever\n\n */</span>\n</code></pre></div><h2 id="function"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h2><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">xxx</span><span class="token punctuation">(</span>ccc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="class"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// public</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>nnn<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Yyyy</span> <span class="token keyword">extends</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> ooo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>nnn<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>nnn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token function">vvv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Zzzz</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">abstract</span> <span class="token function">kkkk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="interface"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> interface</h2><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Xcc</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ? 可选属性</span>\n  address<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 约束参数类型</span>\n<span class="token keyword">function</span> <span class="token function">xxx</span><span class="token punctuation">(</span>info<span class="token operator">:</span> Xcc<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 函数接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">xxx</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> jjj<span class="token operator">:</span> xxx <span class="token operator">=</span> <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 可索引接口</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Arr</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\noo<span class="token operator">:</span> Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bbbb&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 接口实现</span>\n<span class="token keyword">class</span> <span class="token class-name">Ppp</span> <span class="token keyword">implements</span> <span class="token class-name">Xcc</span> <span class="token punctuation">{</span>\n  <span class="token comment">// .....</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Xcc2</span> <span class="token keyword">extends</span> <span class="token class-name">Xcc</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="泛型"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">xxxx</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 泛型类</span>\n<span class="token keyword">class</span> <span class="token class-name">Xxx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  jjj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 泛型接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">Dddd<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="namespace"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h2><blockquote><p>命名空间</p></blockquote><h2 id="装饰器"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><blockquote><p>本质就是一个方法</p></blockquote><div class="language-ts"><pre><code><span class="token comment">// 普通装饰器</span>\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被装饰的对象</span>\n  <span class="token comment">// target..... 做一些操作</span>\n\n  <span class="token comment">// 返回了子类对象</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> target <span class="token punctuation">{</span>\n    <span class="token comment">// ......</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 装饰器工厂</span>\n<span class="token keyword">function</span> <span class="token function">logFactory</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params: 装饰器接收的参数</span>\n    <span class="token comment">// target: 被装饰的对象</span>\n    <span class="token comment">// 对target 做...操作</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span>\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">logFactory</span></span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">Xxx2</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ---------------</span>\n<span class="token comment">// 属性装饰器</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> attr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params : 装饰器的参数</span>\n    <span class="token comment">// target: 所在类的原型对象</span>\n    <span class="token comment">// attr: 属性名</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ----------------</span>\n<span class="token comment">// 方法装饰器</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> methodName<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> desc<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params : 装饰器的参数</span>\n    <span class="token comment">// target: 所在类的原型对象</span>\n    <span class="token comment">// methodName: 方法名</span>\n    <span class="token comment">// desc: 方法的定义描述</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span><span class="token punctuation">(</span><span class="token string">&quot;fffff&quot;</span><span class="token punctuation">)</span>\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ----------------</span>\n<span class="token comment">// 方法参数装饰器</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> methodName<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> paramsIndex<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params : 装饰器的参数</span>\n    <span class="token comment">// target: 所在类的原型对象</span>\n    <span class="token comment">// methodName: 方法名</span>\n    <span class="token comment">// paramsIndex: 参数索引</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span><span class="token punctuation">(</span><span class="token string">&quot;oooo&quot;</span><span class="token punctuation">)</span> k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',16);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};

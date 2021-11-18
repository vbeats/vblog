"use strict";(self.webpackChunkvblog=self.webpackChunkvblog||[]).push([[922],{8347:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-43b85fba",path:"/frontend/base/typescript.html",title:"TypeScript",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"类型",slug:"类型",children:[]},{level:2,title:"function",slug:"function",children:[]},{level:2,title:"class",slug:"class",children:[]},{level:2,title:"interface",slug:"interface",children:[]},{level:2,title:"泛型",slug:"泛型",children:[]},{level:2,title:"namespace",slug:"namespace",children:[]},{level:2,title:"装饰器",slug:"装饰器",children:[]}],filePathRelative:"frontend/base/typescript.md",git:{updatedTime:1637220625e3,contributors:[{name:"bootvue",email:"bootvue@gmail.com",commits:1}]}}},2562:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// const xxx: type1 | type2= ...</span>\n\n<span class="token keyword">const</span> xxx<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">/*\nboolean\nstring\nnumber\ntuple (数组, 元素类型可以不同)\narray (number[]  string[] ....  Array&lt;number&gt; ...)\nenum xxx{\n    a=1,\n    b=2\n}\n\nany\nnull\nundifined\nvoid\nnever\n\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">xxx</span><span class="token punctuation">(</span>ccc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// public</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>nnn<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Yyyy</span> <span class="token keyword">extends</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> ooo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>nnn<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>nnn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token function">vvv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Zzzz</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">abstract</span> <span class="token function">kkkk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> interface</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Xcc</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ? 可选属性</span>\n  address<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 约束参数类型</span>\n<span class="token keyword">function</span> <span class="token function">xxx</span><span class="token punctuation">(</span>info<span class="token operator">:</span> Xcc<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 函数接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">xxx</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> jjj<span class="token operator">:</span> xxx <span class="token operator">=</span> <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 可索引接口</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Arr</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\noo<span class="token operator">:</span> Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bbbb&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 接口实现</span>\n<span class="token keyword">class</span> <span class="token class-name">Ppp</span> <span class="token keyword">implements</span> <span class="token class-name">Xcc</span> <span class="token punctuation">{</span>\n  <span class="token comment">// .....</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Xcc2</span> <span class="token keyword">extends</span> <span class="token class-name">Xcc</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">xxxx</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 泛型类</span>\n<span class="token keyword">class</span> <span class="token class-name">Xxx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  jjj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 泛型接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">Dddd<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h2><blockquote><p>命名空间</p></blockquote><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><blockquote><p>本质就是一个方法</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 普通装饰器</span>\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被装饰的对象</span>\n  <span class="token comment">// target..... 做一些操作</span>\n\n  <span class="token comment">// 返回了子类对象</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> target <span class="token punctuation">{</span>\n    <span class="token comment">// ......</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 装饰器工厂</span>\n<span class="token keyword">function</span> <span class="token function">logFactory</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params: 装饰器接收的参数</span>\n    <span class="token comment">// target: 被装饰的对象</span>\n    <span class="token comment">// 对target 做...操作</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span>\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">logFactory</span></span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">Xxx2</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ....</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ---------------</span>\n<span class="token comment">// 属性装饰器</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> attr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params : 装饰器的参数</span>\n    <span class="token comment">// target: 所在类的原型对象</span>\n    <span class="token comment">// attr: 属性名</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ----------------</span>\n<span class="token comment">// 方法装饰器</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> methodName<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> desc<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params : 装饰器的参数</span>\n    <span class="token comment">// target: 所在类的原型对象</span>\n    <span class="token comment">// methodName: 方法名</span>\n    <span class="token comment">// desc: 方法的定义描述</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span><span class="token punctuation">(</span><span class="token string">&quot;fffff&quot;</span><span class="token punctuation">)</span>\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ----------------</span>\n<span class="token comment">// 方法参数装饰器</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> methodName<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> paramsIndex<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// params : 装饰器的参数</span>\n    <span class="token comment">// target: 所在类的原型对象</span>\n    <span class="token comment">// methodName: 方法名</span>\n    <span class="token comment">// paramsIndex: 参数索引</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Xxx</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span><span class="token punctuation">(</span><span class="token string">&quot;oooo&quot;</span><span class="token punctuation">)</span> k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div>',16),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);
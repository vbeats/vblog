import{o as s,c as n,d as a}from"./app.8862131a.js";const t='{"title":"chrome 插件","description":"","frontmatter":{},"headers":[{"level":2,"title":"manifest.json","slug":"manifest-json"},{"level":2,"title":"background","slug":"background"},{"level":2,"title":"popup","slug":"popup"},{"level":2,"title":"content_scripts","slug":"content-scripts"},{"level":2,"title":"devtools","slug":"devtools"},{"level":2,"title":"omnibox","slug":"omnibox"},{"level":2,"title":"notifications","slug":"notifications"},{"level":2,"title":"message","slug":"message"},{"level":2,"title":"webRequest","slug":"webrequest"},{"level":2,"title":"permissions","slug":"permissions"}],"relativePath":"language/chrome.md","lastUpdated":1628043853582}',o={},p=a('<h1 id="chrome-插件"><a class="header-anchor" href="#chrome-插件" aria-hidden="true">#</a> chrome 插件</h1><p><a href="https://developer.chrome.com/docs/extensions/mv3/devguide/" target="_blank" rel="noopener noreferrer">文档</a></p><h2 id="manifest-json"><a class="header-anchor" href="#manifest-json" aria-hidden="true">#</a> manifest.json</h2><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Getting Started Example&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Build an Extension!&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;manifest_version&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  <span class="token comment">// 后台js service_worker进程</span>\n  <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;service_worker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;background.js&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 权限声明</span>\n  <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;storage&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;host_permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*://*.example.com/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// popup 点击插件图标时的行为</span>\n  <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;default_popup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;popup.html&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;default_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Click to view a popup&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;default_icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;16&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started16.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;32&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started32.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;48&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started48.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;128&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started128.png&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// options选项菜单行为</span>\n  <span class="token property">&quot;options_page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;options.html&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;16&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started16.png&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;32&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started32.png&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;48&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started48.png&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;128&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/get_started128.png&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// dom中注入的js</span>\n  <span class="token property">&quot;content_scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n   <span class="token punctuation">{</span>\n     <span class="token property">&quot;matches&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://*.nytimes.com/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n     <span class="token property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;my-styles.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n     <span class="token property">&quot;js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;content-script.js&quot;</span><span class="token punctuation">]</span>\n   <span class="token punctuation">}</span>\n <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="background"><a class="header-anchor" href="#background" aria-hidden="true">#</a> background</h2><p>background 中可以调用绝大多数 API, <code>devtools</code>相关 api 除外</p><h2 id="popup"><a class="header-anchor" href="#popup" aria-hidden="true">#</a> popup</h2><p>点击插件图标弹出的临时交互窗口</p><h2 id="content-scripts"><a class="header-anchor" href="#content-scripts" aria-hidden="true">#</a> content_scripts</h2><p>向页面中注入的 js css</p><h2 id="devtools"><a class="header-anchor" href="#devtools" aria-hidden="true">#</a> devtools</h2><p>可以访问<code>devtools</code>相关 API 以及其它小部分 api</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;devtools_page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;devtools.html&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-js"><pre><code>chrome<span class="token punctuation">.</span>devtools<span class="token punctuation">.</span>panels<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>\n  <span class="token string">&quot;My Panel&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;MyPanelIcon.png&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;Panel.html&quot;</span><span class="token punctuation">,</span>\n  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">panel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// code invoked on panel creation</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="omnibox"><a class="header-anchor" href="#omnibox" aria-hidden="true">#</a> omnibox</h2><p>搜索建议</p><h2 id="notifications"><a class="header-anchor" href="#notifications" aria-hidden="true">#</a> notifications</h2><p>通知</p><h2 id="message"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h2><p>通信</p><p><code>sendMessage</code> ===&gt; <code>onMessage</code></p><p><code>postMessage/onMessage</code> ===&gt; <code>onConnect</code></p><h2 id="webrequest"><a class="header-anchor" href="#webrequest" aria-hidden="true">#</a> webRequest</h2><p><code>chrome.webRequest</code> 需要声明<code>webRequest</code>相关权限</p><h2 id="permissions"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> permissions</h2><p>权限声明 看文档</p>',26);o.render=function(a,t,o,e,c,u){return s(),n("div",null,[p])};export default o;export{t as __pageData};

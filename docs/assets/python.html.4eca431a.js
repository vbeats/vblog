import{e as n}from"./app.44dda959.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="python-\u{1F40D}" tabindex="-1"><a class="header-anchor" href="#python-\u{1F40D}" aria-hidden="true">#</a> Python \u{1F40D}</h1><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range</h3><blockquote><p>\u8868\u8FBE\u5F0F for \u8FED\u4EE3\u53D8\u91CF in \u53EF\u8FED\u4EE3\u5BF9\u8C61 [if \u6761\u4EF6\u8868\u8FBE\u5F0F]</p></blockquote><h3 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h3><p>\u4F7F\u7528 zip() \u51FD\u6570\u201C\u538B\u7F29\u201D\u591A\u4E2A\u5E8F\u5217\u65F6\uFF0C\u5B83\u4F1A\u5206\u522B\u53D6\u5404\u5E8F\u5217\u4E2D\u7B2C 1 \u4E2A\u5143\u7D20\u3001\u7B2C 2 \u4E2A\u5143\u7D20\u3001... \u7B2C n \u4E2A\u5143\u7D20\uFF0C\u5404\u81EA\u7EC4\u6210\u65B0\u7684\u5143\u7EC4\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u591A\u4E2A\u5E8F\u5217\u4E2D\u5143\u7D20\u4E2A\u6570\u4E0D\u4E00\u81F4\u65F6\uFF0C\u4F1A\u4EE5\u6700\u77ED\u7684\u5E8F\u5217\u4E3A\u51C6\u8FDB\u884C\u538B\u7F29</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">]</span>
my_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>my_list<span class="token punctuation">,</span>my_tuple<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="sorted" tabindex="-1"><a class="header-anchor" href="#sorted" aria-hidden="true">#</a> sorted</h3><p>\u4F7F\u7528 sorted() \u51FD\u6570\u65F6\uFF0C\u8FD8\u53EF\u4F20\u5165\u4E00\u4E2A key \u53C2\u6570\uFF0C\u5B83\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u529F\u80FD\u662F\u6307\u5B9A sorted() \u51FD\u6570\u6309\u7167\u4EC0\u4E48\u6807\u51C6\u8FDB\u884C\u6392\u5E8F</p><h3 id="exec-\u548C-eval" tabindex="-1"><a class="header-anchor" href="#exec-\u548C-eval" aria-hidden="true">#</a> exec \u548C eval</h3><blockquote><p>eval() \u6267\u884C\u5B8C\u8981\u8FD4\u56DE\u7ED3\u679C\uFF0C\u800C exec() \u6267\u884C\u5B8C\u4E0D\u8FD4\u56DE\u7ED3\u679C \u5B83\u4EEC\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u800C\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u4E00\u5B9A\u8981\u662F\u53EF\u6267\u884C\u7684\u4EE3\u7801</p></blockquote><h3 id="property" tabindex="-1"><a class="header-anchor" href="#property" aria-hidden="true">#</a> @property</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># getter</span>
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__area

<span class="token comment"># setter</span>
@\u65B9\u6CD5\u540D<span class="token punctuation">.</span>setter
<span class="token keyword">def</span> \u65B9\u6CD5\u540D<span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    \u4EE3\u7801\u5757
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u51FD\u6570\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u88C5\u9970\u5668" aria-hidden="true">#</a> @\u51FD\u6570\u88C5\u9970\u5668</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">funA</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span>
    fn<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;333&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;444&quot;</span>
<span class="token decorator annotation punctuation">@funA</span>
<span class="token keyword">def</span> <span class="token function">funB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;2222&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># \u76F8\u5F53\u4E8E  funA(funB)</span>

<span class="token comment"># \u5982\u679CB\u5E26\u53C2\u6570, A\u5B9A\u4E49\u4E00\u4E2A\u548CB\u4E00\u6837\u7684\u5185\u90E8\u51FD\u6570\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u51FD\u6570</span>
<span class="token keyword">def</span> <span class="token function">funA</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u5D4C\u5957\u51FD\u6570</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>arc<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;xxx:&quot;</span><span class="token punctuation">,</span>arc<span class="token punctuation">)</span>
    <span class="token keyword">return</span> say

<span class="token decorator annotation punctuation">@funA</span>
<span class="token keyword">def</span> <span class="token function">funB</span><span class="token punctuation">(</span>arc<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;funB():&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

funB<span class="token punctuation">(</span><span class="token string">&quot;fffff&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u591A\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u591A\u8FDB\u7A0B" aria-hidden="true">#</a> \u591A\u8FDB\u7A0B</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process
<span class="token keyword">import</span> os

<span class="token keyword">def</span> <span class="token function">run_proc</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;child process %s (%s)...&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Parent process %s.&#39;</span> <span class="token operator">%</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>run_proc<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Child process will start.&#39;</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Child process end.&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">## \u8FDB\u7A0B\u6C60</span>
    p <span class="token operator">=</span> Pool<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>long_time_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Waiting for all subprocesses done...&#39;</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;All subprocesses done.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>\u8FDB\u7A0B\u95F4\u901A\u4FE1: <code>Queue</code> <code>Pipes</code></p></blockquote><h3 id="\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> \u591A\u7EBF\u7A0B</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time<span class="token punctuation">,</span> threading

<span class="token comment"># \u65B0\u7EBF\u7A0B\u6267\u884C\u7684\u4EE3\u7801:</span>
<span class="token keyword">def</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread %s is running...&#39;</span> <span class="token operator">%</span> threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    n <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread %s &gt;&gt;&gt; %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread %s ended.&#39;</span> <span class="token operator">%</span> threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread %s is running...&#39;</span> <span class="token operator">%</span> threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>loop<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;LoopThread&#39;</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread %s ended.&#39;</span> <span class="token operator">%</span> threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,20);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};

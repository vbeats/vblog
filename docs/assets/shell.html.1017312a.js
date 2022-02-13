import{e as n}from"./app.44dda959.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> $n</h2><p><code>$0</code> \u4EE3\u8868\u5F53\u524D shell \u6587\u4EF6\u540D <code>$1--$n</code> \u4EE3\u8868\u4F20\u9012\u7684\u53C2\u6570 <code>\${12}</code> \u8981\u52A0\u62EC\u53F7 <code>$#</code> \u83B7\u53D6\u8F93\u5165\u53C2\u6570\u7684\u4E2A\u6570 <code>$*</code> \u4EE3\u8868\u6240\u6709\u7684\u53C2\u6570, \u628A\u6240\u6709\u53C2\u6570\u5F53\u505A\u4E00\u4E2A\u6574\u4F53, \u5C06\u53CC\u5F15\u53F7\u53D6\u503C\u65F6\u4E0D\u80FD\u88AB\u7528\u4E8E\u5206\u5272\u5FAA\u73AF <code>$@</code> \u4E5F\u662F\u6240\u6709\u7684\u53C2\u6570, \u628A\u6BCF\u4E2A\u53C2\u6570\u90FD\u5F53\u505A\u4E00\u4E2A\u72EC\u7ACB\u7684\u4E2A\u4F53 <code>$?</code> shell \u4E0A\u4E00\u6B21\u6267\u884C\u7684\u72B6\u6001, 0:\u6B63\u786E\u6267\u884C \u5176\u5B83:\u6709\u9519\u8BEF</p><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> /tmp/ -type f -name <span class="token string">&quot;lllll*&quot;</span> -mmin +1200 -delete
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>-type\uFF1A\u6839\u636E\u4E0D\u540C\u7684\u6587\u4EF6\u7C7B\u578B\u7B5B\u9009</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>f	\u666E\u901A\u6587\u4EF6
d	\u76EE\u5F55\u6587\u4EF6
l	\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6
b	\u5757\u8BBE\u5907 \u6587\u4EF6
c	\u5B57\u7B26\u8BBE\u5907\u6587\u4EF6
p	\u7BA1\u9053\u6587\u4EF6
s	\u5957\u63A5\u5B57\u6587\u4EF6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>\u4EE5\u5929\u4E3A\u5355\u4F4D : atime(\u6587\u4EF6\u7684\u6700\u540E\u8BBF\u95EE\u65F6\u95F4)\u3001mtime(\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4)\u3001ctime(\u6587\u4EF6\u6700\u540E\u6539\u53D8\u65F6\u95F4)</li><li>\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D : amin(\u6587\u4EF6\u7684\u6700\u540E\u8BBF\u95EE\u65F6\u95F4)\u3001mmin(\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4)\u3001cmin(\u6587\u4EF6\u6700\u540E\u6539\u53D8\u65F6\u95F4)</li><li>-print\uFF1A\u8F93\u51FA\u81F3\u6807\u51C6\u8F93\u51FA\uFF1B\u9ED8\u8BA4\u7684\u52A8\u4F5C\uFF1B</li><li>-ls\uFF1A\u7C7B\u4F3C\u4E8E\u5BF9\u67E5\u627E\u5230\u7684\u6587\u4EF6\u6267\u884C\u201Cls -l\u201D\u547D\u4EE4\uFF0C\u8F93\u51FA\u6587\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1B</li><li>-delete\uFF1A\u5220\u9664\u67E5\u627E\u5230\u7684\u6587\u4EF6\uFF1B</li><li>-fls /PATH/TO/SOMEFILE\uFF1A\u628A\u67E5\u627E\u5230\u7684\u6240\u6709\u6587\u4EF6\u7684\u957F\u683C\u5F0F\u4FE1\u606F\u4FDD\u5B58\u81F3\u6307\u5B9A\u6587\u4EF6\u4E2D\uFF1B</li><li>-ok COMMAND {} ; \uFF1A\u5BF9\u67E5\u627E\u5230\u7684\u6BCF\u4E2A\u6587\u4EF6\u6267\u884C\u7531 COMMAND \u8868\u793A\u7684\u547D\u4EE4\uFF1B\u6BCF\u6B21\u64CD\u4F5C\u90FD\u7531\u7528\u6237\u8FDB\u884C\u786E\u8BA4\uFF1B</li><li>-exec COMMAND {} ; \uFF1A\u5BF9\u67E5\u627E\u5230\u7684\u6BCF\u4E2A\u6587\u4EF6\u6267\u884C\u7531 COMMAND \u8868\u793A\u7684\u547D\u4EE4\uFF1B</li><li>find \u67E5\u627E\u5230\u7684\u6587\u4EF6\u592A\u591A find ................ | xargs COMMAND</li></ol><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><p><code>expr + - \\* / %</code> expr \u8FD0\u7B97\u7B26\u4E4B\u95F4\u8981\u6709\u7A7A\u683C, \u6CA1\u6709\u5C0F\u62EC\u53F7, \u591A\u6B21\u8FD0\u7B97\u9700\u8981\u5206\u5F00\u7528 \` \u5305\u88F9 :<code>expr</code>expr 2 + 3<code>\\* 4</code></p><p>\u6216\u8005</p><p><code>$[......]</code> :\u4E0D\u9700\u8981\u7A7A\u683C \u4E5F\u53EF\u4EE5\u7528\u5C0F\u62EC\u53F7</p><h2 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h2><ol><li><p>\u6761\u4EF6\u8868\u8FBE\u5F0F</p><p><code>[ \u6761\u4EF6 ]</code> \u4E2D\u62EC\u53F7\u8981\u6709\u7A7A\u683C, <code>-lt</code> <code>-le</code> <code>-eq</code> <code>-gt</code> <code>-ge</code> <code>-ne</code>, \u6587\u4EF6\u6743\u9650: <code>-r</code> <code>-w</code> <code>-x</code>, \u6587\u4EF6\u7C7B\u578B: <code>-f</code> <code>-d</code> <code>-e</code>:\u662F\u5426\u5B58\u5728</p></li><li><p>if</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token punctuation">..</span><span class="token punctuation">..</span>
    <span class="token keyword">fi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6216</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>case</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">case</span> <span class="token variable">$xxx</span> <span class="token keyword">in</span>
        <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">..</span><span class="token punctuation">..</span>.
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">..</span><span class="token punctuation">..</span>.
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token punctuation">..</span><span class="token punctuation">..</span>.
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>for</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>\u521D\u59CB\u503C<span class="token punctuation">;</span>\u6761\u4EF6<span class="token punctuation">;</span>\u63A7\u5236<span class="token punctuation">))</span></span>
        <span class="token keyword">do</span>
            <span class="token punctuation">..</span><span class="token punctuation">..</span>.
        <span class="token keyword">done</span>
    <span class="token comment"># \u53E6\u4E00\u79CD</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">xx</span> <span class="token keyword">in</span> \u503C1 \u503C2 \u503C3<span class="token punctuation">..</span>.
        <span class="token keyword">do</span>
            <span class="token punctuation">..</span><span class="token punctuation">..</span>.
        <span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>while</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span><span class="token punctuation">..</span> <span class="token punctuation">]</span>
        <span class="token keyword">do</span>
            <span class="token punctuation">..</span><span class="token punctuation">..</span>
        <span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol><h2 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h2><p><code>read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...\u8F93\u5165\u5185\u5BB9\u8D4B\u7ED9\u7684\u53D8\u91CF]</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a \u540E\u8DDF\u4E00\u4E2A\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u4F1A\u88AB\u8BA4\u4E3A\u662F\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u7ED9\u5176\u8D4B\u503C\uFF0C\u9ED8\u8BA4\u662F\u4EE5\u7A7A\u683C\u4E3A\u5206\u5272\u7B26\u3002
-d \u540E\u9762\u8DDF\u4E00\u4E2A\u6807\u5FD7\u7B26\uFF0C\u5176\u5B9E\u53EA\u6709\u5176\u540E\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u6709\u7528\uFF0C\u4F5C\u4E3A\u7ED3\u675F\u7684\u6807\u5FD7\u3002
-p \u540E\u9762\u8DDF\u63D0\u793A\u4FE1\u606F\uFF0C\u5373\u5728\u8F93\u5165\u524D\u6253\u5370\u63D0\u793A\u4FE1\u606F\u3002
-e \u5728\u8F93\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u8865\u5168\u529F\u80FD\u3002
-n \u540E\u8DDF\u4E00\u4E2A\u6570\u5B57\uFF0C\u5B9A\u4E49\u8F93\u5165\u6587\u672C\u7684\u957F\u5EA6\uFF0C\u5F88\u5B9E\u7528\u3002
-r \u5C4F\u853D\\\uFF0C\u5982\u679C\u6CA1\u6709\u8BE5\u9009\u9879\uFF0C\u5219\\\u4F5C\u4E3A\u4E00\u4E2A\u8F6C\u4E49\u5B57\u7B26\uFF0C\u6709\u7684\u8BDD \\\u5C31\u662F\u4E2A\u6B63\u5E38\u7684\u5B57\u7B26\u4E86\u3002
-s \u5B89\u9759\u6A21\u5F0F\uFF0C\u5728\u8F93\u5165\u5B57\u7B26\u65F6\u4E0D\u518D\u5C4F\u5E55\u4E0A\u663E\u793A\uFF0C\u4F8B\u5982login\u65F6\u8F93\u5165\u5BC6\u7801\u3002
-t \u540E\u9762\u8DDF\u79D2\u6570\uFF0C\u5B9A\u4E49\u8F93\u5165\u5B57\u7B26\u7684\u7B49\u5F85\u65F6\u95F4\u3002
-u \u540E\u9762\u8DDFfd\uFF0C\u4ECE\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E2D\u8BFB\u5165\uFF0C\u8BE5\u6587\u4EF6\u63CF\u8FF0\u7B26\u53EF\u4EE5\u662Fexec\u65B0\u5F00\u542F\u7684\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="basename" tabindex="-1"><a class="header-anchor" href="#basename" aria-hidden="true">#</a> basename</h2><p>\u622A\u53D6\u6700\u540E\u4E00\u4E2A<code>/</code>\u4E4B\u540E\u7684\u6587\u672C,</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">basename</span> NAME <span class="token punctuation">[</span>SUFFIX<span class="token punctuation">]</span>
<span class="token function">basename</span> OPTION<span class="token punctuation">..</span>. NAME<span class="token punctuation">..</span>.

<span class="token function">basename</span> /usr/bin/sort          -<span class="token operator">&gt;</span> <span class="token string">&quot;sort&quot;</span>
<span class="token function">basename</span> include/stdio.h .h     -<span class="token operator">&gt;</span> <span class="token string">&quot;stdio&quot;</span>
<span class="token function">basename</span> -s .h include/stdio.h  -<span class="token operator">&gt;</span> <span class="token string">&quot;stdio&quot;</span>
<span class="token function">basename</span> -a any/str1 any/str2   -<span class="token operator">&gt;</span> <span class="token string">&quot;str1&quot;</span> followed by <span class="token string">&quot;str2&quot;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname" aria-hidden="true">#</a> dirname</h2><p>\u8F93\u51FA\u6700\u540E\u4E00\u4E2A<code>/xxx</code>\u4E4B\u524D\u7684\u90E8\u5206</p><h2 id="\u81EA\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u51FD\u6570</h2><p>\u51FD\u6570\u5FC5\u987B\u5B9A\u4E49\u5728\u8C03\u7528\u4E4B\u524D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$s</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span> <span class="token number">10</span> <span class="token number">20</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h2><p>\u6309\u884C\u5207</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cut</span> OPTION<span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-b \uFF1A\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u8FDB\u884C\u5206\u5272\u3002\u8FD9\u4E9B\u5B57\u8282\u4F4D\u7F6E\u5C06\u5FFD\u7565\u591A\u5B57\u8282\u5B57\u7B26\u8FB9\u754C\uFF0C\u9664\u975E\u4E5F\u6307\u5B9A\u4E86 -n \u6807\u5FD7\u3002
-c \uFF1A\u4EE5\u5B57\u7B26\u4E3A\u5355\u4F4D\u8FDB\u884C\u5206\u5272\u3002
-d \uFF1A\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u5236\u8868\u7B26\u3002
-f \uFF1A\u4E0E-d\u4E00\u8D77\u4F7F\u7528\uFF0C\u6307\u5B9A\u663E\u793A\u5207\u5272\u540E\u7684\u54EA\u4E00\u5217
-n \uFF1A\u53D6\u6D88\u5206\u5272\u591A\u5B57\u8282\u5B57\u7B26\u3002\u4EC5\u548C -b \u6807\u5FD7\u4E00\u8D77\u4F7F\u7528\u3002\u5982\u679C\u5B57\u7B26\u7684\u6700\u540E\u4E00\u4E2A\u5B57\u8282\u843D\u5728\u7531 -b \u6807\u5FD7\u7684 List \u53C2\u6570\u6307\u793A\u7684
\u8303\u56F4\u4E4B\u5185\uFF0C\u8BE5\u5B57\u7B26\u5C06\u88AB\u5199\u51FA\uFF1B\u5426\u5219\uFF0C\u8BE5\u5B57\u7B26\u5C06\u88AB\u6392\u9664
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h2><p>\u6309\u884C\u5904\u7406</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">{</span>script-only-if-no-other-script<span class="token punctuation">}</span> <span class="token punctuation">[</span>input-file<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-e&lt;script&gt;\u6216--expression=&lt;script&gt; \u4EE5\u9009\u9879\u4E2D\u6307\u5B9A\u7684script\u6765\u5904\u7406\u8F93\u5165\u7684\u6587\u672C\u6587\u4EF6\u3002
-f&lt;script\u6587\u4EF6&gt;\u6216--file=&lt;script\u6587\u4EF6&gt; \u4EE5\u9009\u9879\u4E2D\u6307\u5B9A\u7684script\u6587\u4EF6\u6765\u5904\u7406\u8F93\u5165\u7684\u6587\u672C\u6587\u4EF6\u3002
-h\u6216--help \u663E\u793A\u5E2E\u52A9\u3002
-n\u6216--quiet\u6216--silent \u4EC5\u663E\u793Ascript\u5904\u7406\u540E\u7684\u7ED3\u679C\u3002
-V\u6216--version \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
\u52A8\u4F5C\u8BF4\u660E\uFF1A

a \uFF1A\u65B0\u589E\uFF0C a \u7684\u540E\u9762\u53EF\u4EE5\u63A5\u5B57\u4E32\uFF0C\u800C\u8FD9\u4E9B\u5B57\u4E32\u4F1A\u5728\u65B0\u7684\u4E00\u884C\u51FA\u73B0
c \uFF1A\u53D6\u4EE3\uFF0C c \u7684\u540E\u9762\u53EF\u4EE5\u63A5\u5B57\u4E32\uFF0C\u8FD9\u4E9B\u5B57\u4E32\u53EF\u4EE5\u53D6\u4EE3 n1,n2 \u4E4B\u95F4\u7684\u884C
d \uFF1A\u5220\u9664\uFF0C d \u540E\u9762\u901A\u5E38\u4E0D\u63A5\u4EFB\u4F55\u4E1C\u897F sed &#39;/wo/d&#39; xx.txt
i \uFF1A\u63D2\u5165\uFF0C i \u7684\u540E\u9762\u53EF\u4EE5\u63A5\u5B57\u4E32\uFF0C\u800C\u8FD9\u4E9B\u5B57\u4E32\u4F1A\u5728\u65B0\u7684\u4E00\u884C\u51FA\u73B0
p \uFF1A\u6253\u5370\uFF0C\u4EA6\u5373\u5C06\u67D0\u4E2A\u9009\u62E9\u7684\u6570\u636E\u5370\u51FA\u3002\u901A\u5E38 p \u4F1A\u4E0E\u53C2\u6570 sed -n \u4E00\u8D77\u8FD0\u884C
s \uFF1A\u66FF\u6362  1,20s/old/new/g


# \u5BF9\u5168\u5C40\u5339\u914D\u4E0A\u7684\u6240\u6709\u5B57\u7B26\u4E32\u8FDB\u884C\u66FF\u6362
sed -i &#39;s/\u539F\u5B57\u7B26\u4E32/\u65B0\u5B57\u7B26\u4E32/g&#39; xxxxx.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h2><p>\u6309\u884C\u5904\u7406, \u9ED8\u8BA4\u6309\u7A7A\u683C\u5207\u5206</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">awk</span> <span class="token punctuation">[</span>POSIX or GNU style options<span class="token punctuation">]</span> -f progfile <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token function">file</span> <span class="token punctuation">..</span>.
<span class="token function">awk</span> <span class="token punctuation">[</span>POSIX or GNU style options<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token string">&#39;program&#39;</span> <span class="token function">file</span> <span class="token punctuation">..</span>.

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-F fs or --field-separator fs
\u6307\u5B9A\u8F93\u5165\u6587\u4EF6\u6298\u5206\u9694\u7B26\uFF0Cfs\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u8005\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5982-F:
-v var=value or --asign var=value
\u8D4B\u503C\u4E00\u4E2A\u7528\u6237\u5B9A\u4E49\u53D8\u91CF\u3002
-f scripfile or --file scriptfile
\u4ECE\u811A\u672C\u6587\u4EF6\u4E2D\u8BFB\u53D6awk\u547D\u4EE4\u3002
-mf nnn and -mr nnn
\u5BF9nnn\u503C\u8BBE\u7F6E\u5185\u5728\u9650\u5236\uFF0C-mf\u9009\u9879\u9650\u5236\u5206\u914D\u7ED9nnn\u7684\u6700\u5927\u5757\u6570\u76EE\uFF1B-mr\u9009\u9879\u9650\u5236\u8BB0\u5F55\u7684\u6700\u5927\u6570\u76EE\u3002\u8FD9\u4E24\u4E2A\u529F\u80FD\u662FBell\u5B9E\u9A8C\u5BA4\u7248awk\u7684\u6269\u5C55\u529F\u80FD\uFF0C\u5728\u6807\u51C6awk\u4E2D\u4E0D\u9002\u7528\u3002
-W compact or --compat, -W traditional or --traditional
\u5728\u517C\u5BB9\u6A21\u5F0F\u4E0B\u8FD0\u884Cawk\u3002\u6240\u4EE5gawk\u7684\u884C\u4E3A\u548C\u6807\u51C6\u7684awk\u5B8C\u5168\u4E00\u6837\uFF0C\u6240\u6709\u7684awk\u6269\u5C55\u90FD\u88AB\u5FFD\u7565\u3002
-W copyleft or --copyleft, -W copyright or --copyright
\u6253\u5370\u7B80\u77ED\u7684\u7248\u6743\u4FE1\u606F\u3002
-W help or --help, -W usage or --usage
\u6253\u5370\u5168\u90E8awk\u9009\u9879\u548C\u6BCF\u4E2A\u9009\u9879\u7684\u7B80\u77ED\u8BF4\u660E\u3002
-W lint or --lint
\u6253\u5370\u4E0D\u80FD\u5411\u4F20\u7EDFunix\u5E73\u53F0\u79FB\u690D\u7684\u7ED3\u6784\u7684\u8B66\u544A\u3002
-W lint-old or --lint-old
\u6253\u5370\u5173\u4E8E\u4E0D\u80FD\u5411\u4F20\u7EDFunix\u5E73\u53F0\u79FB\u690D\u7684\u7ED3\u6784\u7684\u8B66\u544A\u3002
-W posix
\u6253\u5F00\u517C\u5BB9\u6A21\u5F0F\u3002\u4F46\u6709\u4EE5\u4E0B\u9650\u5236\uFF0C\u4E0D\u8BC6\u522B\uFF1A/x\u3001\u51FD\u6570\u5173\u952E\u5B57\u3001func\u3001\u6362\u7801\u5E8F\u5217\u4EE5\u53CA\u5F53fs\u662F\u4E00\u4E2A\u7A7A\u683C\u65F6\uFF0C\u5C06\u65B0\u884C\u4F5C\u4E3A\u4E00\u4E2A\u57DF\u5206\u9694\u7B26\uFF1B\u64CD\u4F5C\u7B26**\u548C**=\u4E0D\u80FD\u4EE3\u66FF^\u548C^=\uFF1Bfflush\u65E0\u6548\u3002
-W re-interval or --re-inerval
\u5141\u8BB8\u95F4\u9694\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4F7F\u7528\uFF0C\u53C2\u8003(grep\u4E2D\u7684Posix\u5B57\u7B26\u7C7B)\uFF0C\u5982\u62EC\u53F7\u8868\u8FBE\u5F0F[[:alpha:]]\u3002
-W source program-text or --source program-text
\u4F7F\u7528program-text\u4F5C\u4E3A\u6E90\u4EE3\u7801\uFF0C\u53EF\u4E0E-f\u547D\u4EE4\u6DF7\u7528\u3002
-W version or --version
\u6253\u5370bug\u62A5\u544A\u4FE1\u606F\u7684\u7248\u672C\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">awk</span> -F: <span class="token string">&#39;/^root/{print $7}&#39;</span> <span class="token function">passwd</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5185\u7F6E\u53D8\u91CF: <code>FILENAME</code> <code>NR</code>:\u5DF2\u8BFB\u884C\u6570 <code>NF</code>: \u5207\u5272\u540E\u591A\u5C11\u5217</p><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h2><p>\u6309\u884C\u5904\u7406\u6587\u4EF6, \u5207\u5272\u6587\u4EF6, \u6307\u5B9A\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-b \u5FFD\u7565\u6BCF\u884C\u524D\u9762\u5F00\u59CB\u51FA\u7684\u7A7A\u683C\u5B57\u7B26\u3002
-c \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u6309\u7167\u987A\u5E8F\u6392\u5E8F\u3002
-d \u6392\u5E8F\u65F6\uFF0C\u5904\u7406\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u53CA\u7A7A\u683C\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26\u3002
-f \u6392\u5E8F\u65F6\uFF0C\u5C06\u5C0F\u5199\u5B57\u6BCD\u89C6\u4E3A\u5927\u5199\u5B57\u6BCD\u3002
-i \u6392\u5E8F\u65F6\uFF0C\u9664\u4E86040\u81F3176\u4E4B\u95F4\u7684ASCII\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26\u3002
-m \u5C06\u51E0\u4E2A\u6392\u5E8F\u597D\u7684\u6587\u4EF6\u8FDB\u884C\u5408\u5E76\u3002
-M \u5C06\u524D\u97623\u4E2A\u5B57\u6BCD\u4F9D\u7167\u6708\u4EFD\u7684\u7F29\u5199\u8FDB\u884C\u6392\u5E8F\u3002
-n \u4F9D\u7167\u6570\u503C\u7684\u5927\u5C0F\u6392\u5E8F\u3002
-o&lt;\u8F93\u51FA\u6587\u4EF6&gt; \u5C06\u6392\u5E8F\u540E\u7684\u7ED3\u679C\u5B58\u5165\u6307\u5B9A\u7684\u6587\u4EF6\u3002
-r \u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u6765\u6392\u5E8F\u3002
-k \u6307\u5B9A\u6392\u5E8F\u7684key(\u54EA\u5217)
-t&lt;\u5206\u9694\u5B57\u7B26&gt; \u6307\u5B9A\u6392\u5E8F\u65F6\u6240\u7528\u7684\u680F\u4F4D\u5206\u9694\u5B57\u7B26\u3002
+&lt;\u8D77\u59CB\u680F\u4F4D&gt;-&lt;\u7ED3\u675F\u680F\u4F4D&gt; \u4EE5\u6307\u5B9A\u7684\u680F\u4F4D\u6765\u6392\u5E8F\uFF0C\u8303\u56F4\u7531\u8D77\u59CB\u680F\u4F4D\u5230\u7ED3\u675F\u680F\u4F4D\u7684\u524D\u4E00\u680F\u4F4D\u3002
--help \u663E\u793A\u5E2E\u52A9\u3002
--version \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u65E5\u5FD7\u5207\u5272" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u5207\u5272" aria-hidden="true">#</a> \u65E5\u5FD7\u5207\u5272</h2><p><code>tail -50000 a.log &gt; tmp.log</code> : <code>tail</code> or <code>head</code> \u5F00\u59CB/\u7ED3\u675Fxxx\u884C</p><p><code>sed -n &#39;1,50000p&#39; a.log &gt; tmp.log</code> : i\u5230j\u884C\u95F4\u7684\u65E5\u5FD7</p><p><code>split -l 3000 a.log --verbose</code> : \u6BCF3000\u884C\u5207\u4E00\u4EFD</p><p><code>split -b 100m a.log --verbose</code> : \u6BCF100m\u5207\u4E00\u4EFD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-b\uFF1A\u503C\u4E3A\u6BCF\u4E00\u8F93\u51FA\u6863\u6848\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A byte\u3002
-C\uFF1A\u6BCF\u4E00\u8F93\u51FA\u6863\u4E2D\uFF0C\u5355\u884C\u7684\u6700\u5927 byte \u6570\u3002
-d\uFF1A\u4F7F\u7528\u6570\u5B57\u4F5C\u4E3A\u540E\u7F00\u3002
-l\uFF1A\u503C\u4E3A\u6BCF\u4E00\u8F93\u51FA\u6863\u7684\u884C\u6570\u5927\u5C0F\u3002
-a\uFF1A\u6307\u5B9A\u540E\u7F00\u957F\u5EA6<span class="token punctuation">(</span>\u9ED8\u8BA4\u4E3A2<span class="token punctuation">)</span>\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="expect" tabindex="-1"><a class="header-anchor" href="#expect" aria-hidden="true">#</a> expect</h2><p>shell \u81EA\u52A8\u4EA4\u4E92\u8F93\u5165</p><table><thead><tr><th>Command</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>spawn</td><td>\u542F\u52A8\u65B0\u7684\u8FDB\u7A0B</td></tr><tr><td>send</td><td>\u7528\u4E8E\u5411\u8FDB\u7A0B\u53D1\u9001\u5B57\u7B26\u4E32</td></tr><tr><td>expect</td><td>\u4ECE\u8FDB\u7A0B\u63A5\u6536\u5B57\u7B26\u4E32</td></tr><tr><td>interact</td><td>\u5141\u8BB8\u7528\u6237\u4EA4\u4E92</td></tr><tr><td>exp_continue</td><td>\u5339\u914D\u591A\u4E2A\u5B57\u7B26\u4E32\u5728\u6267\u884C\u52A8\u4F5C\u540E\u52A0\u6B64\u547D\u4EE4</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
openssl genrsa -out ios.key <span class="token number">2048</span>
/usr/bin/expect<span class="token operator">&lt;&lt;</span><span class="token string">EOF
spawn openssl req -new -sha256 -key ios.key -out ios.csr
expect {
    &quot;Country Name&quot; {send &quot;CN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;State or Province Name&quot; {send &quot;GUANGDONG<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;Locality Name&quot; {send &quot;GUANGZHOU<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;Organization Name&quot; {send &quot;IOSSIGN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;Organizational Unit Name&quot; {send &quot;IOSSIGN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;Common Name&quot; {send &quot;IOSSIGN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;Email Address&quot; {send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;A challenge password&quot; {send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}
    &quot;An optional company name&quot; {send &quot;<span class="token entity" title="\\r">\\r</span>&quot;;}
}
expect eof
EOF</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;success&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,52);function p(l,t){return e}var i=s(a,[["render",p]]);export{i as default};

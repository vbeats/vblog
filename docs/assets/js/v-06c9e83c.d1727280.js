"use strict";(self.webpackChunkvblog=self.webpackChunkvblog||[]).push([[864],{5159:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-06c9e83c",path:"/base/base/shell.html",title:"Shell",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"$n",slug:"n",children:[]},{level:2,title:"find",slug:"find",children:[]},{level:2,title:"运算符",slug:"运算符",children:[]},{level:2,title:"流程控制",slug:"流程控制",children:[]},{level:2,title:"read",slug:"read",children:[]},{level:2,title:"basename",slug:"basename",children:[]},{level:2,title:"dirname",slug:"dirname",children:[]},{level:2,title:"自定义函数",slug:"自定义函数",children:[]},{level:2,title:"cut",slug:"cut",children:[]},{level:2,title:"sed",slug:"sed",children:[]},{level:2,title:"awk",slug:"awk",children:[]},{level:2,title:"sort",slug:"sort",children:[]},{level:2,title:"expect",slug:"expect",children:[]}],filePathRelative:"base/base/shell.md",git:{updatedTime:1636365007e3,contributors:[{name:"bootvue",email:"bootvue@gmail.com",commits:1}]}}},2158:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const e=(0,a(6252).uE)('<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> $n</h2><p><code>$0</code> 代表当前 shell 文件名 <code>$1--$n</code> 代表传递的参数 <code>${12}</code> 要加括号 <code>$#</code> 获取输入参数的个数 <code>$*</code> 代表所有的参数, 把所有参数当做一个整体, 将双引号取值时不能被用于分割循环 <code>$@</code> 也是所有的参数, 把每个参数都当做一个独立的个体 <code>$?</code> shell 上一次执行的状态, 0:正确执行 其它:有错误</p><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> /tmp/ -type f -name <span class="token string">&quot;lllll*&quot;</span> -mmin +1200 -delete\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>-type：根据不同的文件类型筛选</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>f\t普通文件\nd\t目录文件\nl\t符号链接文件\nb\t块设备 文件\nc\t字符设备文件\np\t管道文件\ns\t套接字文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>以天为单位 : atime(文件的最后访问时间)、mtime(文件的最后修改时间)、ctime(文件最后改变时间)</li><li>以分钟为单位 : amin(文件的最后访问时间)、mmin(文件的最后修改时间)、cmin(文件最后改变时间)</li><li>-print：输出至标准输出；默认的动作；</li><li>-ls：类似于对查找到的文件执行“ls -l”命令，输出文件的详细信息；</li><li>-delete：删除查找到的文件；</li><li>-fls /PATH/TO/SOMEFILE：把查找到的所有文件的长格式信息保存至指定文件中；</li><li>-ok COMMAND {} ; ：对查找到的每个文件执行由 COMMAND 表示的命令；每次操作都由用户进行确认；</li><li>-exec COMMAND {} ; ：对查找到的每个文件执行由 COMMAND 表示的命令；</li><li>find 查找到的文件太多 find ................ | xargs COMMAND</li></ol><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p><code>expr + - \\* / %</code> expr 运算符之间要有空格, 没有小括号, 多次运算需要分开用 ` 包裹 :<code>expr</code>expr 2 + 3<code>\\* 4</code></p><p>或者</p><p><code>$[......]</code> :不需要空格 也可以用小括号</p><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><ol><li><p>条件表达式</p><p><code>[ 条件 ]</code> 中括号要有空格, <code>-lt</code> <code>-le</code> <code>-eq</code> <code>-gt</code> <code>-ge</code> <code>-ne</code>, 文件权限: <code>-r</code> <code>-w</code> <code>-x</code>, 文件类型: <code>-f</code> <code>-d</code> <code>-e</code>:是否存在</p></li><li><p>if</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>\n        <span class="token punctuation">..</span><span class="token punctuation">..</span>\n    <span class="token keyword">fi</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span>\n    <span class="token keyword">then</span>\n        <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>case</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">case</span> <span class="token variable">$xxx</span> <span class="token keyword">in</span>\n        <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">..</span><span class="token punctuation">..</span>.\n            <span class="token punctuation">;</span><span class="token punctuation">;</span>\n        <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">..</span><span class="token punctuation">..</span>.\n            <span class="token punctuation">;</span><span class="token punctuation">;</span>\n        *<span class="token punctuation">)</span>\n            <span class="token punctuation">..</span><span class="token punctuation">..</span>.\n            <span class="token punctuation">;</span><span class="token punctuation">;</span>\n    <span class="token keyword">esac</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>for</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>初始值<span class="token punctuation">;</span>条件<span class="token punctuation">;</span>控制<span class="token punctuation">))</span></span>\n        <span class="token keyword">do</span>\n            <span class="token punctuation">..</span><span class="token punctuation">..</span>.\n        <span class="token keyword">done</span>\n    <span class="token comment"># 另一种</span>\n    <span class="token keyword">for</span> <span class="token for-or-select variable">xx</span> <span class="token keyword">in</span> 值1 值2 值3<span class="token punctuation">..</span>.\n        <span class="token keyword">do</span>\n            <span class="token punctuation">..</span><span class="token punctuation">..</span>.\n        <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>while</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span><span class="token punctuation">..</span> <span class="token punctuation">]</span>\n        <span class="token keyword">do</span>\n            <span class="token punctuation">..</span><span class="token punctuation">..</span>\n        <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol><h2 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h2><p><code>read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...输入内容赋给的变量]</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a 后跟一个变量，该变量会被认为是个数组，然后给其赋值，默认是以空格为分割符。\n-d 后面跟一个标志符，其实只有其后的第一个字符有用，作为结束的标志。\n-p 后面跟提示信息，即在输入前打印提示信息。\n-e 在输入的时候可以使用命令补全功能。\n-n 后跟一个数字，定义输入文本的长度，很实用。\n-r 屏蔽\\，如果没有该选项，则\\作为一个转义字符，有的话 \\就是个正常的字符了。\n-s 安静模式，在输入字符时不再屏幕上显示，例如login时输入密码。\n-t 后面跟秒数，定义输入字符的等待时间。\n-u 后面跟fd，从文件描述符中读入，该文件描述符可以是exec新开启的。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="basename" tabindex="-1"><a class="header-anchor" href="#basename" aria-hidden="true">#</a> basename</h2><p>截取最后一个<code>/</code>之后的文本,</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">basename</span> NAME <span class="token punctuation">[</span>SUFFIX<span class="token punctuation">]</span>\n<span class="token function">basename</span> OPTION<span class="token punctuation">..</span>. NAME<span class="token punctuation">..</span>.\n\n<span class="token function">basename</span> /usr/bin/sort          -<span class="token operator">&gt;</span> <span class="token string">&quot;sort&quot;</span>\n<span class="token function">basename</span> include/stdio.h .h     -<span class="token operator">&gt;</span> <span class="token string">&quot;stdio&quot;</span>\n<span class="token function">basename</span> -s .h include/stdio.h  -<span class="token operator">&gt;</span> <span class="token string">&quot;stdio&quot;</span>\n<span class="token function">basename</span> -a any/str1 any/str2   -<span class="token operator">&gt;</span> <span class="token string">&quot;str1&quot;</span> followed by <span class="token string">&quot;str2&quot;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname" aria-hidden="true">#</a> dirname</h2><p>输出最后一个<code>/xxx</code>之前的部分</p><h2 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a> 自定义函数</h2><p>函数必须定义在调用之前</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>\n        <span class="token builtin class-name">echo</span> <span class="token variable">$s</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">sum</span> <span class="token number">10</span> <span class="token number">20</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h2><p>按行切</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cut</span> OPTION<span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-b ：以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。\n-c ：以字符为单位进行分割。\n-d ：自定义分隔符，默认为制表符。\n-f ：与-d一起使用，指定显示切割后的哪一列\n-n ：取消分割多字节字符。仅和 -b 标志一起使用。如果字符的最后一个字节落在由 -b 标志的 List 参数指示的\n范围之内，该字符将被写出；否则，该字符将被排除\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h2><p>按行处理</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">{</span>script-only-if-no-other-script<span class="token punctuation">}</span> <span class="token punctuation">[</span>input-file<span class="token punctuation">]</span><span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-e&lt;script&gt;或--expression=&lt;script&gt; 以选项中指定的script来处理输入的文本文件。\n-f&lt;script文件&gt;或--file=&lt;script文件&gt; 以选项中指定的script文件来处理输入的文本文件。\n-h或--help 显示帮助。\n-n或--quiet或--silent 仅显示script处理后的结果。\n-V或--version 显示版本信息。\n动作说明：\n\na ：新增， a 的后面可以接字串，而这些字串会在新的一行出现\nc ：取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行\nd ：删除， d 后面通常不接任何东西 sed &#39;/wo/d&#39; xx.txt\ni ：插入， i 的后面可以接字串，而这些字串会在新的一行出现\np ：打印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行\ns ：替换  1,20s/old/new/g\n\n\n# 对全局匹配上的所有字符串进行替换\nsed -i &#39;s/原字符串/新字符串/g&#39; xxxxx.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h2><p>按行处理, 默认按空格切分</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\n<span class="token function">awk</span> <span class="token punctuation">[</span>POSIX or GNU style options<span class="token punctuation">]</span> -f progfile <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token function">file</span> <span class="token punctuation">..</span>.\n<span class="token function">awk</span> <span class="token punctuation">[</span>POSIX or GNU style options<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token string">&#39;program&#39;</span> <span class="token function">file</span> <span class="token punctuation">..</span>.\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-F fs or --field-separator fs\n指定输入文件折分隔符，fs是一个字符串或者是一个正则表达式，如-F:\n-v var=value or --asign var=value\n赋值一个用户定义变量。\n-f scripfile or --file scriptfile\n从脚本文件中读取awk命令。\n-mf nnn and -mr nnn\n对nnn值设置内在限制，-mf选项限制分配给nnn的最大块数目；-mr选项限制记录的最大数目。这两个功能是Bell实验室版awk的扩展功能，在标准awk中不适用。\n-W compact or --compat, -W traditional or --traditional\n在兼容模式下运行awk。所以gawk的行为和标准的awk完全一样，所有的awk扩展都被忽略。\n-W copyleft or --copyleft, -W copyright or --copyright\n打印简短的版权信息。\n-W help or --help, -W usage or --usage\n打印全部awk选项和每个选项的简短说明。\n-W lint or --lint\n打印不能向传统unix平台移植的结构的警告。\n-W lint-old or --lint-old\n打印关于不能向传统unix平台移植的结构的警告。\n-W posix\n打开兼容模式。但有以下限制，不识别：/x、函数关键字、func、换码序列以及当fs是一个空格时，将新行作为一个域分隔符；操作符**和**=不能代替^和^=；fflush无效。\n-W re-interval or --re-inerval\n允许间隔正则表达式的使用，参考(grep中的Posix字符类)，如括号表达式[[:alpha:]]。\n-W source program-text or --source program-text\n使用program-text作为源代码，可与-f命令混用。\n-W version or --version\n打印bug报告信息的版本。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">awk</span> -F: <span class="token string">&#39;/^root/{print $7}&#39;</span> <span class="token function">passwd</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>内置变量: <code>FILENAME</code> <code>NR</code>:已读行数 <code>NF</code>: 切割后多少列</p><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h2><p>按行处理文件, 切割文件, 指定排序</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-b 忽略每行前面开始出的空格字符。\n-c 检查文件是否已经按照顺序排序。\n-d 排序时，处理英文字母、数字及空格字符外，忽略其他的字符。\n-f 排序时，将小写字母视为大写字母。\n-i 排序时，除了040至176之间的ASCII字符外，忽略其他的字符。\n-m 将几个排序好的文件进行合并。\n-M 将前面3个字母依照月份的缩写进行排序。\n-n 依照数值的大小排序。\n-o&lt;输出文件&gt; 将排序后的结果存入指定的文件。\n-r 以相反的顺序来排序。\n-k 指定排序的key(哪列)\n-t&lt;分隔字符&gt; 指定排序时所用的栏位分隔字符。\n+&lt;起始栏位&gt;-&lt;结束栏位&gt; 以指定的栏位来排序，范围由起始栏位到结束栏位的前一栏位。\n--help 显示帮助。\n--version 显示版本信息。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="expect" tabindex="-1"><a class="header-anchor" href="#expect" aria-hidden="true">#</a> expect</h2><p>shell 自动交互输入</p><table><thead><tr><th>Command</th><th>作用</th></tr></thead><tbody><tr><td>spawn</td><td>启动新的进程</td></tr><tr><td>send</td><td>用于向进程发送字符串</td></tr><tr><td>expect</td><td>从进程接收字符串</td></tr><tr><td>interact</td><td>允许用户交互</td></tr><tr><td>exp_continue</td><td>匹配多个字符串在执行动作后加此命令</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>\n<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>\nopenssl genrsa -out ios.key <span class="token number">2048</span>\n/usr/bin/expect<span class="token operator">&lt;&lt;</span><span class="token string">EOF\nspawn openssl req -new -sha256 -key ios.key -out ios.csr\nexpect {\n    &quot;Country Name&quot; {send &quot;CN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;State or Province Name&quot; {send &quot;GUANGDONG<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;Locality Name&quot; {send &quot;GUANGZHOU<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;Organization Name&quot; {send &quot;IOSSIGN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;Organizational Unit Name&quot; {send &quot;IOSSIGN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;Common Name&quot; {send &quot;IOSSIGN<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;Email Address&quot; {send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;A challenge password&quot; {send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue;}\n    &quot;An optional company name&quot; {send &quot;<span class="token entity" title="\\r">\\r</span>&quot;;}\n}\nexpect eof\nEOF</span>\n\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;success&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',46),p={},l=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);
import{o as e,c as p,a as n,t as l,F as t,e as s}from"./app.58f753f7.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var c="/assets/lvm.791202ed.png";const o={},i=s('<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="lvm-\u78C1\u76D8\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#lvm-\u78C1\u76D8\u7BA1\u7406" aria-hidden="true">#</a> LVM \u78C1\u76D8\u7BA1\u7406</h2><blockquote><p>\u7269\u7406\u786C\u76D8 --&gt; \u7269\u7406\u5377 PV --&gt; \u5377\u7EC4 VG --&gt; \u903B\u8F91\u5377 LV --&gt; \u6302\u8F7D</p></blockquote><p><img src="'+c+`" alt="LVM"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># gpt \u5206\u533A</span>
gdisk /dev/sdn

<span class="token comment"># ...</span>
partprobe <span class="token comment"># \u5237\u65B0\u5206\u533A\u8868</span>

<span class="token comment"># \u521B\u5EFAPV\u5377</span>

pvcreate /dev/sdn /dev/sdx

<span class="token comment"># \u5377\u7EC4</span>

vgcreate -s 32M xxx /dev/sdn  <span class="token comment"># -s PE\u6700\u5C0F\u5757\u5927\u5C0F  4M\u6574\u6570\u500D</span>

<span class="token comment"># \u5DF2\u6709vgroup \u589E\u52A0\u4E00\u5757  pv</span>
vgextend xxx  /dev/sdb

<span class="token comment"># \u903B\u8F91\u5377</span>

lvcreate -L 15G -n xxxx1  xxx<span class="token punctuation">(</span>vg name<span class="token punctuation">)</span> <span class="token comment"># -L \u5BB9\u91CF\u5927\u5C0F</span>

<span class="token comment"># \u683C\u5F0F\u5316\u903B\u8F91\u5377</span>

mkfs.ext4 /dev/xxx/xxxx1   <span class="token comment"># /dev\u76EE\u5F55\u4E0B\u4F1A\u5B58\u5728  \u5377\u7EC4\u540D/\u903B\u8F91\u5377\u540D\u7684\u8DEF\u5F84</span>

<span class="token comment"># \u6302\u8F7D /dev/xxx/xxxx1 \u5230\u5177\u4F53\u76EE\u5F55\u4E0A</span>

<span class="token comment"># \u81EA\u52A8\u6302\u8F7D /etc/fstab \u589E\u52A0</span>
/dev/xxx/xxxx1 /data       ext4    defaults       <span class="token number">0</span>       <span class="token number">0</span>


<span class="token comment"># \u6269\u5C55/\u7F29\u5C0F\u903B\u8F91\u5377</span>
lvextend -L +50G /dev/xxx/xxxx1   <span class="token comment"># \u589E\u52A050G</span>
lvreduce -L -50G /dev/xxx/xxxx1   <span class="token comment"># \u51CF\u5C0F50G</span>

lvextend -r -l +100%FREE /dev/xxx/xxxx1  <span class="token comment"># \u5206\u914Dvg\u5269\u4F59\u6240\u6709\u7A7A\u95F4  -r \u5237\u65B0\u6587\u4EF6\u7CFB\u7EDF\u5927\u5C0F</span>

<span class="token comment"># \u66F4\u65B0</span>
resize2fs /dev/xxx/xxxx1  <span class="token comment"># etx\u683C\u5F0F</span>
xfs_growfs /dev/xxx/xxx1  <span class="token comment"># xfs\u683C\u5F0F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u5185\u6838\u53C2\u6570\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u53C2\u6570\u4F18\u5316" aria-hidden="true">#</a> \u5185\u6838\u53C2\u6570\u4F18\u5316</h2><p><code>/etc/sysctl.conf</code> \u5185\u6838\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vm.swappiness<span class="token operator">=</span><span class="token number">0</span>
net.ipv4.ip_forward<span class="token operator">=</span><span class="token number">1</span>
net.ipv4.tcp_syncookies <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.tcp_tw_reuse <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.tcp_tw_recycle <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.tcp_fin_timeout <span class="token operator">=</span> <span class="token number">30</span>
net.ipv4.tcp_keepalive_time <span class="token operator">=</span> <span class="token number">1200</span>
net.ipv4.tcp_max_syn_backlog <span class="token operator">=</span> <span class="token number">8192</span>
net.ipv4.tcp_max_tw_buckets <span class="token operator">=</span> <span class="token number">5000</span>

<span class="token comment"># net.ipv4.tcp_syncookies = 1\u8868\u793A\u5F00\u542FSYN Cookies\u3002\u5F53\u51FA\u73B0SYN\u7B49\u5F85\u961F\u5217\u6EA2\u51FA\u65F6\uFF0C\u542F\u7528cookies\u6765\u5904\u7406\uFF0C\u53EF\u9632\u8303\u5C11\u91CFSYN\u653B\u51FB\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\uFF1B</span>

<span class="token comment"># net.ipv4.tcp_tw_reuse = 1 \u8868\u793A\u5F00\u542F\u91CD\u7528\u3002\u5141\u8BB8\u5C06TIME-WAIT sockets\u91CD\u65B0\u7528\u4E8E\u65B0\u7684TCP\u8FDE\u63A5\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\uFF1B</span>

<span class="token comment"># net.ipv4.tcp_tw_recycle = 1 \u8868\u793A\u5F00\u542FTCP\u8FDE\u63A5\u4E2DTIME-WAIT sockets\u7684\u5FEB\u901F\u56DE\u6536\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u3002</span>

<span class="token comment"># net.ipv4.tcp_fin_timeout = 30 \u8868\u793A\u5982\u679C\u5957\u63A5\u5B57\u7531\u672C\u7AEF\u8981\u6C42\u5173\u95ED\uFF0C\u8FD9\u4E2A\u53C2\u6570\u51B3\u5B9A\u4E86\u5B83\u4FDD\u6301\u5728FIN-WAIT-2\u72B6\u6001\u7684\u65F6\u95F4\u3002\u9ED8\u8BA4\u662F60s\u3002</span>

<span class="token comment"># net.ipv4.tcp_keepalive_time = 1200 \u8868\u793A\u5F53keepalive\u8D77\u7528\u7684\u65F6\u5019\uFF0CTCP\u53D1\u9001keepalive\u6D88\u606F\u7684\u9891\u5EA6\u3002\u7F3A\u7701\u662F2\u5C0F\u65F6\uFF0C\u6539\u4E3A20\u5206\u949F\u3002</span>

<span class="token comment"># net.ipv4.ip_local_port_range = 1024 65000 \u8868\u793A\u7528\u4E8E\u5411\u5916\u8FDE\u63A5\u7684\u7AEF\u53E3\u8303\u56F4\u3002\u7F3A\u7701\u60C5\u51B5\u4E0B\u5F88\u5C0F\uFF1A32768\u523061000\uFF0C\u6539\u4E3A1024\u523065000\u3002</span>

<span class="token comment"># net.ipv4.tcp_max_syn_backlog = 8192 \u8868\u793ASYN\u961F\u5217\u7684\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A1024\uFF0C\u52A0\u5927\u961F\u5217\u957F\u5EA6\u4E3A8192\uFF0C\u53EF\u4EE5\u5BB9\u7EB3\u66F4\u591A\u7B49\u5F85\u8FDE\u63A5\u7684\u7F51\u7EDC\u8FDE\u63A5\u6570\u3002</span>

<span class="token comment"># net.ipv4.tcp_max_tw_buckets = 5000\u8868\u793A\u7CFB\u7EDF\u540C\u65F6\u4FDD\u6301TIME_WAIT\u5957\u63A5\u5B57\u7684\u6700\u5927\u6570\u91CF\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u5B57\uFF0CTIME_WAIT\u5957\u63A5\u5B57\u5C06\u7ACB\u523B\u88AB\u6E05\u9664\u5E76\u6253\u5370\u8B66\u544A\u4FE1\u606F\u3002\u9ED8\u8BA4\u4E3A180000\uFF0C\u6539\u4E3A5000\u3002</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>/etc/security/limits.conf</code> \u6587\u4EF6\u6253\u5F00\u53E5\u67C4\u9650\u5236</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>* soft nofile <span class="token number">65535</span>
* hard nofile <span class="token number">65535</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="systemctl-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#systemctl-\u670D\u52A1" aria-hidden="true">#</a> systemctl \u670D\u52A1</h2><blockquote><p>/usr/lib/systemd/\u4E0B, \u5F00\u673A\u4E0D\u767B\u5F55\u5C31\u80FD\u542F\u52A8\u7684\u670D\u52A1\u6700\u597D\u653E\u5728 /usr/lib/systemd/system \u7CFB\u7EDF\u670D\u52A1, .../user: \u7528\u6237\u670D\u52A1 \u9700\u8981\u7528\u6237\u767B\u5F55\u624D\u53EF\u4EE5\u542F\u52A8</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># [Unit]\u3001[Service]\u548C[Install]</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>   <span class="token comment"># \u4E3B\u8981\u662F\u670D\u52A1\u8BF4\u660E</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>test   <span class="token comment"># \u7B80\u5355\u63CF\u8FF0\u670D\u52A1</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target    <span class="token comment"># \u63CF\u8FF0\u670D\u52A1\u7C7B\u522B\uFF0C\u8868\u793A\u672C\u670D\u52A1\u9700\u8981\u5728network\u670D\u52A1\u542F\u52A8\u540E\u5728\u542F\u52A8</span>
<span class="token assign-left variable">Before</span><span class="token operator">=</span>xxx.service      <span class="token comment"># \u8868\u793A\u9700\u8981\u5728\u67D0\u4E9B\u670D\u52A1\u542F\u52A8\u4E4B\u524D\u542F\u52A8\uFF0CAfter\u548CBefore\u5B57\u6BB5\u53EA\u6D89\u53CA\u542F\u52A8\u987A\u5E8F\uFF0C\u4E0D\u6D89\u53CA\u4F9D\u8D56\u5173\u7CFB</span>

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>  <span class="token comment"># \u6838\u5FC3\u533A\u57DF</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking     <span class="token comment"># \u8868\u793A\u540E\u53F0\u8FD0\u884C\u6A21\u5F0F\u3002</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>root        <span class="token comment"># \u8BBE\u7F6E\u670D\u52A1\u8FD0\u884C\u7684\u7528\u6237</span>
<span class="token assign-left variable">Group</span><span class="token operator">=</span>root       <span class="token comment"># \u8BBE\u7F6E\u670D\u52A1\u8FD0\u884C\u7684\u7528\u6237\u7EC4</span>
<span class="token assign-left variable">KillMode</span><span class="token operator">=</span>control-group   <span class="token comment"># \u5B9A\u4E49systemd\u5982\u4F55\u505C\u6B62\u670D\u52A1</span>
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/test/test.pid    <span class="token comment"># \u5B58\u653EPID\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>no        <span class="token comment"># \u5B9A\u4E49\u670D\u52A1\u8FDB\u7A0B\u9000\u51FA\u540E\uFF0Csystemd\u7684\u91CD\u542F\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u91CD\u542F</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/test/bin/startup.sh    <span class="token comment"># \u670D\u52A1\u542F\u52A8\u547D\u4EE4\uFF0C\u547D\u4EE4\u9700\u8981\u7EDD\u5BF9\u8DEF\u5F84</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/xxxxx
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/xxxxx
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true                               <span class="token comment"># \u8868\u793A\u7ED9\u670D\u52A1\u5206\u914D\u72EC\u7ACB\u7684\u4E34\u65F6\u7A7A\u95F4</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target  <span class="token comment"># \u591A\u7528\u6237</span>

<span class="token comment">#Type\u7684\u7C7B\u578B\u6709\uFF1A</span>
<span class="token comment">#    simple(\u9ED8\u8BA4\uFF09\uFF1A# \u4EE5ExecStart\u5B57\u6BB5\u542F\u52A8\u7684\u8FDB\u7A0B\u4E3A\u4E3B\u8FDB\u7A0B</span>
<span class="token comment">#    forking:  # ExecStart\u5B57\u6BB5\u4EE5fork()\u65B9\u5F0F\u542F\u52A8\uFF0C\u6B64\u65F6\u7236\u8FDB\u7A0B\u5C06\u9000\u51FA\uFF0C\u5B50\u8FDB\u7A0B\u5C06\u6210\u4E3A\u4E3B\u8FDB\u7A0B\uFF08\u540E\u53F0\u8FD0\u884C\uFF09\u3002\u4E00\u822C\u90FD\u8BBE\u7F6E\u4E3Aforking</span>
<span class="token comment">#    oneshot:  # \u7C7B\u4F3C\u4E8Esimple\uFF0C\u4F46\u53EA\u6267\u884C\u4E00\u6B21\uFF0Csystemd\u4F1A\u7B49\u5B83\u6267\u884C\u5B8C\uFF0C\u624D\u542F\u52A8\u5176\u4ED6\u670D\u52A1</span>
<span class="token comment">#    dbus\uFF1A    # \u7C7B\u4F3C\u4E8Esimple, \u4F46\u4F1A\u7B49\u5F85D-Bus\u4FE1\u53F7\u540E\u542F\u52A8</span>
<span class="token comment">#    notify:   # \u7C7B\u4F3C\u4E8Esimple, \u542F\u52A8\u7ED3\u675F\u540E\u4F1A\u53D1\u51FA\u901A\u77E5\u4FE1\u53F7\uFF0C\u7136\u540Esystemd\u518D\u542F\u52A8\u5176\u4ED6\u670D\u52A1</span>
<span class="token comment">#    idle\uFF1A    # \u7C7B\u4F3C\u4E8Esimple\uFF0C\u4F46\u662F\u8981\u7B49\u5230\u5176\u4ED6\u4EFB\u52A1\u90FD\u6267\u884C\u5B8C\uFF0C\u624D\u4F1A\u542F\u52A8\u8BE5\u670D\u52A1\u3002</span>
<span class="token comment">#</span>
<span class="token comment">#EnvironmentFile:</span>
<span class="token comment">#    \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF0C\u548C\u8FDE\u8BCD\u53F7\u7EC4\u5408\u4F7F\u7528\uFF0C\u53EF\u4EE5\u907F\u514D\u914D\u7F6E\u6587\u4EF6\u4E0D\u5B58\u5728\u7684\u5F02\u5E38\u3002</span>
<span class="token comment">#</span>
<span class="token comment">#Environment:</span>
<span class="token comment">#    \u540E\u9762\u63A5\u591A\u4E2A\u4E0D\u540C\u7684shell\u53D8\u91CF\u3002</span>
<span class="token comment">#    \u4F8B\u5982\uFF1A</span>
<span class="token comment">#    Environment=DATA_DIR=/data/elk</span>
<span class="token comment">#    Environment=LOG_DIR=/var/log/elasticsearch</span>
<span class="token comment">#    Environment=PID_DIR=/var/run/elasticsearch</span>
<span class="token comment">#    EnvironmentFile=-/etc/sysconfig/elasticsearch</span>
<span class="token comment">#</span>
<span class="token comment">#\u8FDE\u8BCD\u53F7\uFF08-\uFF09\uFF1A\u5728\u6240\u6709\u542F\u52A8\u8BBE\u7F6E\u4E4B\u524D\uFF0C\u6DFB\u52A0\u7684\u53D8\u91CF\u5B57\u6BB5\uFF0C\u90FD\u53EF\u4EE5\u52A0\u4E0A\u8FDE\u8BCD\u53F7</span>
<span class="token comment">#    \u8868\u793A\u6291\u5236\u9519\u8BEF\uFF0C\u5373\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u4E0D\u5F71\u54CD\u5176\u4ED6\u547D\u4EE4\u7684\u6267\u884C\u3002</span>
<span class="token comment">#    \u6BD4\u5982\`EnviromentFile=-/etc/sysconfig/xxx\` \u8868\u793A\u5373\u4F7F\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u4E5F\u4E0D\u4F1A\u629B\u5F02\u5E38</span>
<span class="token comment">#</span>
<span class="token comment">#KillMode\u7684\u7C7B\u578B\uFF1A</span>
<span class="token comment">#    control-group(\u9ED8\u8BA4)\uFF1A# \u5F53\u524D\u63A7\u5236\u7EC4\u91CC\u7684\u6240\u6709\u5B50\u8FDB\u7A0B\uFF0C\u90FD\u4F1A\u88AB\u6740\u6389</span>
<span class="token comment">#    process: # \u53EA\u6740\u4E3B\u8FDB\u7A0B</span>
<span class="token comment">#    mixed:   # \u4E3B\u8FDB\u7A0B\u5C06\u6536\u5230SIGTERM\u4FE1\u53F7\uFF0C\u5B50\u8FDB\u7A0B\u6536\u5230SIGKILL\u4FE1\u53F7</span>
<span class="token comment">#    none:    # \u6CA1\u6709\u8FDB\u7A0B\u4F1A\u88AB\u6740\u6389\uFF0C\u53EA\u662F\u6267\u884C\u670D\u52A1\u7684stop\u547D\u4EE4</span>
<span class="token comment">#Restart\u7684\u7C7B\u578B\uFF1A</span>
<span class="token comment">#    no(\u9ED8\u8BA4\u503C)\uFF1A # \u9000\u51FA\u540E\u65E0\u64CD\u4F5C</span>
<span class="token comment">#    on-success:  # \u53EA\u6709\u6B63\u5E38\u9000\u51FA\u65F6\uFF08\u9000\u51FA\u72B6\u6001\u7801\u4E3A0\uFF09,\u624D\u4F1A\u91CD\u542F</span>
<span class="token comment">#    on-failure:  # \u975E\u6B63\u5E38\u9000\u51FA\u65F6\uFF0C\u91CD\u542F\uFF0C\u5305\u62EC\u88AB\u4FE1\u53F7\u7EC8\u6B62\u548C\u8D85\u65F6\u7B49</span>
<span class="token comment">#    on-abnormal: # \u53EA\u6709\u88AB\u4FE1\u53F7\u7EC8\u6B62\u6216\u8D85\u65F6\uFF0C\u624D\u4F1A\u91CD\u542F</span>
<span class="token comment">#    on-abort:    # \u53EA\u6709\u5728\u6536\u5230\u6CA1\u6709\u6355\u6349\u5230\u7684\u4FE1\u53F7\u7EC8\u6B62\u65F6\uFF0C\u624D\u4F1A\u91CD\u542F</span>
<span class="token comment">#    on-watchdog: # \u8D85\u65F6\u9000\u51FA\u65F6\uFF0C\u624D\u4F1A\u91CD\u542F</span>
<span class="token comment">#    always:      # \u4E0D\u7BA1\u4EC0\u4E48\u9000\u51FA\u539F\u56E0\uFF0C\u90FD\u4F1A\u91CD\u542F</span>
<span class="token comment">#    # \u5BF9\u4E8E\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u63A8\u8350\u7528on-failure</span>
<span class="token comment">#RestartSec\u5B57\u6BB5\uFF1A</span>
<span class="token comment">#    \u8868\u793Asystemd\u91CD\u542F\u670D\u52A1\u4E4B\u524D\uFF0C\u9700\u8981\u7B49\u5F85\u7684\u79D2\u6570\uFF1ARestartSec: 30</span>
<span class="token comment">#</span>
<span class="token comment">#\u5404\u79CDExec*\u5B57\u6BB5\uFF1A</span>
<span class="token comment">#    # Exec* \u540E\u9762\u63A5\u7684\u547D\u4EE4\uFF0C\u4EC5\u63A5\u53D7\u201C\u6307\u4EE4 \u53C2\u6570 \u53C2\u6570..\u201D\u683C\u5F0F\uFF0C\u4E0D\u80FD\u63A5\u53D7&lt;&gt;|&amp;\u7B49\u7279\u6B8A\u5B57\u7B26\uFF0C\u5F88\u591Abash\u8BED\u6CD5\u4E5F\u4E0D\u652F\u6301\u3002\u5982\u679C\u60F3\u652F\u6301bash\u8BED\u6CD5\uFF0C\u9700\u8981\u8BBE\u7F6ETyep=oneshot</span>
<span class="token comment">#    ExecStart\uFF1A    # \u542F\u52A8\u670D\u52A1\u65F6\u6267\u884C\u7684\u547D\u4EE4</span>
<span class="token comment">#    ExecReload\uFF1A   # \u91CD\u542F\u670D\u52A1\u65F6\u6267\u884C\u7684\u547D\u4EE4</span>
<span class="token comment">#    ExecStop\uFF1A     # \u505C\u6B62\u670D\u52A1\u65F6\u6267\u884C\u7684\u547D\u4EE4</span>
<span class="token comment">#    ExecStartPre\uFF1A # \u542F\u52A8\u670D\u52A1\u524D\u6267\u884C\u7684\u547D\u4EE4</span>
<span class="token comment">#    ExecStartPost\uFF1A# \u542F\u52A8\u670D\u52A1\u540E\u6267\u884C\u7684\u547D\u4EE4</span>
<span class="token comment">#    ExecStopPost\uFF1A # \u505C\u6B62\u670D\u52A1\u540E\u6267\u884C\u7684\u547D\u4EE4</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token comment">#WantedBy\u5B57\u6BB5\uFF1A</span>
<span class="token comment">#    multi-user.target: # \u8868\u793A\u591A\u7528\u6237\u547D\u4EE4\u884C\u72B6\u6001\uFF0C\u8FD9\u4E2A\u8BBE\u7F6E\u5F88\u91CD\u8981</span>
<span class="token comment">#    graphical.target:  # \u8868\u793A\u56FE\u5F62\u7528\u6237\u72B6\u4F53\uFF0C\u5B83\u4F9D\u8D56\u4E8Emulti-user.target</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><h2 id="rsync-\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#rsync-\u540C\u6B65" aria-hidden="true">#</a> rsync \u540C\u6B65</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDC\u7A0B ----&gt; \u672C\u5730  root@xxx:/xxx  /home.....</span>
<span class="token function">rsync</span> -arPu --exclude <span class="token string">&#39;demo1/&#39;</span> --exclude <span class="token string">&#39;demo2/&#39;</span> --exclude <span class="token string">&#39;demo3/&#39;</span> root@202.60.245.163:/root/test /root

-v, --verbose \u8BE6\u7EC6\u6A21\u5F0F\u8F93\u51FA
-q, --quiet \u7CBE\u7B80\u8F93\u51FA\u6A21\u5F0F
-c, --checksum \u6253\u5F00\u6821\u9A8C\u5F00\u5173\uFF0C\u5F3A\u5236\u5BF9\u6587\u4EF6\u4F20\u8F93\u8FDB\u884C\u6821\u9A8C
-a, --archive \u5F52\u6863\u6A21\u5F0F\uFF0C\u8868\u793A\u4EE5\u9012\u5F52\u65B9\u5F0F\u4F20\u8F93\u6587\u4EF6\uFF0C\u5E76\u4FDD\u6301\u6240\u6709\u6587\u4EF6\u5C5E\u6027\uFF0C\u7B49\u4E8E-rlptgoD
-r, --recursive \u5BF9\u5B50\u76EE\u5F55\u4EE5\u9012\u5F52\u6A21\u5F0F\u5904\u7406
-R, --relative \u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u4FE1\u606F
-b, --backup \u521B\u5EFA\u5907\u4EFD\uFF0C\u4E5F\u5C31\u662F\u5BF9\u4E8E\u76EE\u7684\u5DF2\u7ECF\u5B58\u5728\u6709\u540C\u6837\u7684\u6587\u4EF6\u540D\u65F6\uFF0C\u5C06\u8001\u7684\u6587\u4EF6\u91CD\u65B0\u547D\u540D\u4E3A~filename\u3002\u53EF\u4EE5\u4F7F\u7528--suffix\u9009\u9879\u6765\u6307\u5B9A\u4E0D\u540C\u7684\u5907\u4EFD\u6587\u4EF6\u524D\u7F00\u3002
--backup-dir \u5C06\u5907\u4EFD\u6587\u4EF6<span class="token punctuation">(</span>\u5982~filename<span class="token punctuation">)</span>\u5B58\u653E\u5728\u5728\u76EE\u5F55\u4E0B\u3002
-suffix<span class="token operator">=</span>SUFFIX \u5B9A\u4E49\u5907\u4EFD\u6587\u4EF6\u524D\u7F00
-u, --update \u4EC5\u4EC5\u8FDB\u884C\u66F4\u65B0\uFF0C\u4E5F\u5C31\u662F\u8DF3\u8FC7\u6240\u6709\u5DF2\u7ECF\u5B58\u5728\u4E8EDST\uFF0C\u5E76\u4E14\u6587\u4EF6\u65F6\u95F4\u665A\u4E8E\u8981\u5907\u4EFD\u7684\u6587\u4EF6\u3002<span class="token punctuation">(</span>\u4E0D\u8986\u76D6\u66F4\u65B0\u7684\u6587\u4EF6<span class="token punctuation">)</span>
-l, --links \u4FDD\u7559\u8F6F\u94FE\u7ED3
-L, --copy-links \u60F3\u5BF9\u5F85\u5E38\u89C4\u6587\u4EF6\u4E00\u6837\u5904\u7406\u8F6F\u94FE\u7ED3
--copy-unsafe-links \u4EC5\u4EC5\u62F7\u8D1D\u6307\u5411SRC\u8DEF\u5F84\u76EE\u5F55\u6811\u4EE5\u5916\u7684\u94FE\u7ED3
--safe-links \u5FFD\u7565\u6307\u5411SRC\u8DEF\u5F84\u76EE\u5F55\u6811\u4EE5\u5916\u7684\u94FE\u7ED3
-H, --hard-links \u4FDD\u7559\u786C\u94FE\u7ED3
-p, --perms \u4FDD\u6301\u6587\u4EF6\u6743\u9650
-o, --owner \u4FDD\u6301\u6587\u4EF6\u5C5E\u4E3B\u4FE1\u606F
-g, --group \u4FDD\u6301\u6587\u4EF6\u5C5E\u7EC4\u4FE1\u606F
-D, --devices \u4FDD\u6301\u8BBE\u5907\u6587\u4EF6\u4FE1\u606F
-t, --times \u4FDD\u6301\u6587\u4EF6\u65F6\u95F4\u4FE1\u606F
-S, --sparse \u5BF9\u7A00\u758F\u6587\u4EF6\u8FDB\u884C\u7279\u6B8A\u5904\u7406\u4EE5\u8282\u7701DST\u7684\u7A7A\u95F4
-n, --dry-run\u73B0\u5B9E\u54EA\u4E9B\u6587\u4EF6\u5C06\u88AB\u4F20\u8F93
-W, --whole-file \u62F7\u8D1D\u6587\u4EF6\uFF0C\u4E0D\u8FDB\u884C\u589E\u91CF\u68C0\u6D4B
-x, --one-file-system \u4E0D\u8981\u8DE8\u8D8A\u6587\u4EF6\u7CFB\u7EDF\u8FB9\u754C
-B, --block-size<span class="token operator">=</span>SIZE \u68C0\u9A8C\u7B97\u6CD5\u4F7F\u7528\u7684\u5757\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u662F700\u5B57\u8282
-e, --rsh<span class="token operator">=</span>COMMAND \u6307\u5B9A\u4F7F\u7528rsh\u3001ssh\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u540C\u6B65
--rsync-path<span class="token operator">=</span><span class="token environment constant">PATH</span> \u6307\u5B9A\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684rsync\u547D\u4EE4\u6240\u5728\u8DEF\u5F84\u4FE1\u606F
-C, --cvs-exclude \u4F7F\u7528\u548CCVS\u4E00\u6837\u7684\u65B9\u6CD5\u81EA\u52A8\u5FFD\u7565\u6587\u4EF6\uFF0C\u7528\u6765\u6392\u9664\u90A3\u4E9B\u4E0D\u5E0C\u671B\u4F20\u8F93\u7684\u6587\u4EF6
--existing \u4EC5\u4EC5\u66F4\u65B0\u90A3\u4E9B\u5DF2\u7ECF\u5B58\u5728\u4E8EDST\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u5907\u4EFD\u90A3\u4E9B\u65B0\u521B\u5EFA\u7684\u6587\u4EF6
--delete \u5220\u9664\u90A3\u4E9BDST\u4E2DSRC\u6CA1\u6709\u7684\u6587\u4EF6
--delete-excluded \u540C\u6837\u5220\u9664\u63A5\u6536\u7AEF\u90A3\u4E9B\u88AB\u8BE5\u9009\u9879\u6307\u5B9A\u6392\u9664\u7684\u6587\u4EF6
--delete-after \u4F20\u8F93\u7ED3\u675F\u4EE5\u540E\u518D\u5220\u9664
--ignore-errors \u53CA\u65F6\u51FA\u73B0IO\u9519\u8BEF\u4E5F\u8FDB\u884C\u5220\u9664
--max-delete<span class="token operator">=</span>NUM \u6700\u591A\u5220\u9664NUM\u4E2A\u6587\u4EF6
--partial \u4FDD\u7559\u90A3\u4E9B\u56E0\u6545\u6CA1\u6709\u5B8C\u5168\u4F20\u8F93\u7684\u6587\u4EF6\uFF0C\u4EE5\u662F\u52A0\u5FEB\u968F\u540E\u7684\u518D\u6B21\u4F20\u8F93
--force \u5F3A\u5236\u5220\u9664\u76EE\u5F55\uFF0C\u5373\u4F7F\u4E0D\u4E3A\u7A7A
--numeric-ids \u4E0D\u5C06\u6570\u5B57\u7684\u7528\u6237\u548C\u7EC4ID\u5339\u914D\u4E3A\u7528\u6237\u540D\u548C\u7EC4\u540D
--timeout<span class="token operator">=</span>TIME IP\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2
-I, --ignore-times \u4E0D\u8DF3\u8FC7\u90A3\u4E9B\u6709\u540C\u6837\u7684\u65F6\u95F4\u548C\u957F\u5EA6\u7684\u6587\u4EF6
--size-only \u5F53\u51B3\u5B9A\u662F\u5426\u8981\u5907\u4EFD\u6587\u4EF6\u65F6\uFF0C\u4EC5\u4EC5\u5BDF\u770B\u6587\u4EF6\u5927\u5C0F\u800C\u4E0D\u8003\u8651\u6587\u4EF6\u65F6\u95F4
--modify-window<span class="token operator">=</span>NUM \u51B3\u5B9A\u6587\u4EF6\u662F\u5426\u65F6\u95F4\u76F8\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u95F4\u6233\u7A97\u53E3\uFF0C\u9ED8\u8BA4\u4E3A0
-T --temp-dir<span class="token operator">=</span>DIR \u5728DIR\u4E2D\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6
--compare-dest<span class="token operator">=</span>DIR \u540C\u6837\u6BD4\u8F83DIR\u4E2D\u7684\u6587\u4EF6\u6765\u51B3\u5B9A\u662F\u5426\u9700\u8981\u5907\u4EFD
-P \u7B49\u540C\u4E8E --partial
--progress \u663E\u793A\u5907\u4EFD\u8FC7\u7A0B
-z, --compress \u5BF9\u5907\u4EFD\u7684\u6587\u4EF6\u5728\u4F20\u8F93\u65F6\u8FDB\u884C\u538B\u7F29\u5904\u7406
--exclude<span class="token operator">=</span>PATTERN \u6307\u5B9A\u6392\u9664\u4E0D\u9700\u8981\u4F20\u8F93\u7684\u6587\u4EF6\u6A21\u5F0F
--include<span class="token operator">=</span>PATTERN \u6307\u5B9A\u4E0D\u6392\u9664\u800C\u9700\u8981\u4F20\u8F93\u7684\u6587\u4EF6\u6A21\u5F0F
--exclude-from<span class="token operator">=</span>FILE \u6392\u9664FILE\u4E2D\u6307\u5B9A\u6A21\u5F0F\u7684\u6587\u4EF6
--include-from<span class="token operator">=</span>FILE \u4E0D\u6392\u9664FILE\u6307\u5B9A\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6
--version \u6253\u5370\u7248\u672C\u4FE1\u606F
--address \u7ED1\u5B9A\u5230\u7279\u5B9A\u7684\u5730\u5740
--config<span class="token operator">=</span>FILE \u6307\u5B9A\u5176\u4ED6\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u4F7F\u7528\u9ED8\u8BA4\u7684rsyncd.conf\u6587\u4EF6
--port<span class="token operator">=</span>PORT \u6307\u5B9A\u5176\u4ED6\u7684rsync\u670D\u52A1\u7AEF\u53E3
--blocking-io \u5BF9\u8FDC\u7A0Bshell\u4F7F\u7528\u963B\u585EIO
-stats \u7ED9\u51FA\u67D0\u4E9B\u6587\u4EF6\u7684\u4F20\u8F93\u72B6\u6001
--progress \u5728\u4F20\u8F93\u65F6\u73B0\u5B9E\u4F20\u8F93\u8FC7\u7A0B
--log-format<span class="token operator">=</span>formAT \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F
--password-file<span class="token operator">=</span>FILE \u4ECEFILE\u4E2D\u5F97\u5230\u5BC6\u7801
--bwlimit<span class="token operator">=</span>KBPS \u9650\u5236I/O\u5E26\u5BBD\uFF0CKBytes per second
-h, --help \u663E\u793A\u5E2E\u52A9\u4FE1\u606F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh" aria-hidden="true">#</a> zsh</h2><blockquote><p>home end \u952E &amp; \u5C0F\u952E\u76D8</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># key bindings</span>
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[1~&quot;</span> beginning-of-line
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[4~&quot;</span> end-of-line
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[5~&quot;</span> beginning-of-history
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[6~&quot;</span> end-of-history

<span class="token comment"># for rxvt</span>
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[8~&quot;</span> end-of-line
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[7~&quot;</span> beginning-of-line
<span class="token comment"># for non RH/Debian xterm, can&#39;t hurt for RH/DEbian xterm</span>
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>OH&quot;</span> beginning-of-line
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>OF&quot;</span> end-of-line
<span class="token comment"># for freebsd console</span>
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[H&quot;</span> beginning-of-line
bindkey <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[F&quot;</span> end-of-line
<span class="token comment"># completion in the middle of a line</span>
bindkey <span class="token string">&#39;^i&#39;</span> expand-or-complete-prefix

<span class="token comment"># Fix numeric keypad</span>
<span class="token comment"># 0 . Enter</span>
bindkey -s <span class="token string">&quot;^[Op&quot;</span> <span class="token string">&quot;0&quot;</span>
bindkey -s <span class="token string">&quot;^[On&quot;</span> <span class="token string">&quot;.&quot;</span>
bindkey -s <span class="token string">&quot;^[OM&quot;</span> <span class="token string">&quot;^M&quot;</span>
<span class="token comment"># 1 2 3</span>
bindkey -s <span class="token string">&quot;^[Oq&quot;</span> <span class="token string">&quot;1&quot;</span>
bindkey -s <span class="token string">&quot;^[Or&quot;</span> <span class="token string">&quot;2&quot;</span>
bindkey -s <span class="token string">&quot;^[Os&quot;</span> <span class="token string">&quot;3&quot;</span>
<span class="token comment"># 4 5 6</span>
bindkey -s <span class="token string">&quot;^[Ot&quot;</span> <span class="token string">&quot;4&quot;</span>
bindkey -s <span class="token string">&quot;^[Ou&quot;</span> <span class="token string">&quot;5&quot;</span>
bindkey -s <span class="token string">&quot;^[Ov&quot;</span> <span class="token string">&quot;6&quot;</span>
<span class="token comment"># 7 8 9</span>
bindkey -s <span class="token string">&quot;^[Ow&quot;</span> <span class="token string">&quot;7&quot;</span>
bindkey -s <span class="token string">&quot;^[Ox&quot;</span> <span class="token string">&quot;8&quot;</span>
bindkey -s <span class="token string">&quot;^[Oy&quot;</span> <span class="token string">&quot;9&quot;</span>
<span class="token comment"># + - * /</span>
bindkey -s <span class="token string">&quot;^[Ol&quot;</span> <span class="token string">&quot;+&quot;</span>
bindkey -s <span class="token string">&quot;^[Om&quot;</span> <span class="token string">&quot;-&quot;</span>
bindkey -s <span class="token string">&quot;^[Oj&quot;</span> <span class="token string">&quot;*&quot;</span>
bindkey -s <span class="token string">&quot;^[Oo&quot;</span> <span class="token string">&quot;/&quot;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> Vim</h2><blockquote><p>.vimrc</p></blockquote><p>\u641C\u7D22\u9AD8\u4EAE <code>set hlsearch</code></p><h2 id="dash" tabindex="-1"><a class="header-anchor" href="#dash" aria-hidden="true">#</a> dash</h2><p>ubuntu \u4E0B declare \u62A5\u9519:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg-reconfigure dash
<span class="token comment"># \u9009\u5426  ubuntu\u9ED8\u8BA4sh \u6307\u5411\u4E86dash  \u901A\u8FC7\u4E0A\u8FB9\u547D\u4EE4  \u89E3\u9664dash\u4E0Esh\u7684\u5173\u8054</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="root-\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#root-\u7528\u6237" aria-hidden="true">#</a> root \u7528\u6237</h2><p>\u4E3A<code>root</code>\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801</p><p><code>ubuntu</code>\u5F00\u542F<code>root</code>: sshd \u914D\u7F6E\u6587\u4EF6 <code>PermitRootLogin yes</code></p><h2 id="ansible" tabindex="-1"><a class="header-anchor" href="#ansible" aria-hidden="true">#</a> ansible</h2><p><code>ansible all -m ping -v</code></p><p>\u9ED8\u8BA4\u6A21\u5757<code>command</code> \u6709\u4E9B\u547D\u4EE4\u65E0\u6CD5\u6267\u884C</p><p>\u6267\u884C shell <code>ansible xxx -m shell -a &#39;ls /&#39;</code></p><p>\u6267\u884C shell \u811A\u672C <code>ansible xxx -m script -a ./xx.sh</code></p><p><code>copy</code>:\u652F\u6301\u76EE\u5F55</p><p><code>fetch</code>:\u53EA\u80FD\u5355\u6587\u4EF6</p><p><code>file</code>: \u64CD\u4F5C\u6587\u4EF6 <code>ansible xxx -m file -a &#39;path=/data/xx.log state=touch group=xx owner=xx mode=777&#39;</code></p><p><code>unarchive</code>: copy=yes/no</p><p><code>archive</code> <code>hostname</code> <code>cron</code> <code>user</code> <code>setup</code></p><h3 id="playbook" tabindex="-1"><a class="header-anchor" href="#playbook" aria-hidden="true">#</a> playbook</h3><p><code>ansible-playbook xxx.yaml [--check --list-hosts --list-tags --list-tasks --limit -v]</code></p>`,39),b=n("li",null,[n("p",null,"hosts"),n("p",null,"\u6267\u884C\u4EFB\u52A1\u7684\u4E3B\u673A")],-1),m=n("li",null,[n("p",null,"tasks"),n("p",null,"\u4EFB\u52A1")],-1),u=n("p",null,"variables",-1),k=n("p",null,"\u53D8\u91CF",-1),d=n("p",null,"\u5B9A\u4E49\u53D8\u91CF:",-1),x=s(`<li><p>templates</p><p>\u6A21\u677F, templates \u76EE\u5F55\u4E0B\u5B9A\u4E49</p><p><code>xxx.j2</code> \u6587\u4EF6\u5B9A\u4E49\u53D8\u91CF, task \u6267\u884C\u65F6\u81EA\u52A8\u66FF\u6362</p></li><li><p>tags</p><p>\u6807\u7B7E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> xxx<span class="token punctuation">:</span>yyyy
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> no <span class="token comment"># \u662F\u5426\u6536\u96C6\u4E3B\u673A\u4FE1\u606F</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">xx</span><span class="token punctuation">:</span> oo

  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kkk
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> pppp  <span class="token comment"># \u6267\u884C\u7684\u65F6\u5019\u6307\u5B9Atag\u6267\u884C -t pppp</span>
      <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> ooo
      <span class="token key atrule">module</span><span class="token punctuation">:</span> args
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> handlersName <span class="token comment"># \u89E6\u53D1handlers\u6267\u884C</span>

  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> variables_name <span class="token punctuation">}</span>  <span class="token comment"># \u53D8\u91CF</span>
      <span class="token key atrule">module</span><span class="token punctuation">:</span> args
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li>`,2);function g(a,h){return e(),p(t,null,[i,n("ul",null,[b,m,n("li",null,[u,k,d,n("pre",null,[n("code",null,`  * \`\u547D\u4EE4\u884C\u53C2\u6570 -e xxx=ooo\`

  * \u76F4\u63A5\u4F7F\u7528\`setup\`\u7684\u7CFB\u7EDF\u4FE1\u606F \`gather_facts\`\u8981\u6253\u5F00

  * \u5355\u72EC\u6587\u4EF6\u5B9A\u4E49

  \`inventory\`\u4E3B\u673A\u6E05\u5355\u4E2D\u6307\u5B9A\u53D8\u91CF

  \`\`\`conf
  [xxx] # \u5355\u4E2A\u6307\u5B9A
  192.168.100.1 xx=ooo
  192.168.100.2 xx=oop

  [xxx:vars] # \u6307\u5B9A\u4E00\u7EC4
  mm=kk

  \`\`\`

  * set_fact\u6A21\u5757\u5B9A\u4E49

      \`\`\`yaml
      set_fact:
          php_redis_package: "`+l(a.__php_redis_package)+'"\n      ```\n',1)])]),x])],64)}var f=r(o,[["render",g]]);export{f as default};

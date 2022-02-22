import{r as p,o as e,c as o,a as s,d as t,F as r,e as n,b as c}from"./app.b4b01b91.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n(`<h1 id="haproxy" tabindex="-1"><a class="header-anchor" href="#haproxy" aria-hidden="true">#</a> HaProxy</h1><p>\u652F\u6301 TCP HTTP <code>global</code>: haproxy \u8FD0\u884C\u76F8\u5173\u7684\u5168\u5C40\u914D\u7F6E <code>defaults</code>: \u9ED8\u8BA4\u53C2\u6570\u914D\u7F6E <code>listen</code>: \u76D1\u542C\u914D\u7F6E <code>frontend</code>: \u5904\u7406\u5BA2\u6237\u7AEF\u8BF7\u6C42, \u6309\u7167\u89C4\u5219\u5206\u53D1\u8BF7\u6C42 <code>backend</code>: \u540E\u7AEF\u96C6\u7FA4\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment"># \u5168\u5C40\u914D\u7F6E</span>
global
    <span class="token comment"># \u542F\u7528\u6BCF\u4E2A\u5B9E\u4F8B\u65E5\u5FD7\u8BB0\u5F55\u4E8B\u4EF6\u548C\u6D41\u91CF\u3002</span>
    log global
    <span class="token comment"># \u8BBE\u7F6E\u65E5\u5FD7\u6587\u4EF6\u8F93\u51FA\u5B9A\u5411</span>
    log <span class="token number">127.0</span>.0.1 local3 info
    <span class="token comment"># \u9700\u8981\u5F00\u542Frsyslog</span>
    <span class="token comment"># vim /etc/rsyslog.conf</span>
    <span class="token comment"># \u6DFB\u52A0local3.* /var/log/haproxy.log</span>

    <span class="token comment"># \u6539\u53D8\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
    <span class="token function">chroot</span> /usr/local/haproxy

    <span class="token comment"># \u7528\u6237\u4E0E\u7528\u6237\u7EC4</span>
    user haproxy
    group haproxy

    <span class="token comment"># \u5B88\u62A4\u8FDB\u7A0B\u542F\u52A8\uFF0C\u8FD0\u7EF4\u65B9\u5F0F\u4E3A\u540E\u53F0\u5DE5\u4F5C</span>
    daemon

    <span class="token comment"># \u6700\u5927\u8FDE\u63A5\u6570</span>
    maxconn <span class="token number">4000</span>

<span class="token comment"># \u4F5C\u7528\u4E8E\u5176\u540E\u7D27\u8DDF\u7684listen\u5757\uFF0C\u76F4\u81F3\u4E0B\u4E00\u4E2Adefaults \u5757\uFF0C\u4E0B\u4E00\u4E2Adefault \u5C06\u66FF\u6362\u4E0A\u4E00\u4E2A\u5757\u4F5C\u7528\u4E8E\u4EE5\u540E\u7684listen</span>
defaults

    <span class="token comment"># \u9ED8\u8BA4\u7684\u6A21\u5F0Fmode { tcp|http|health }\uFF0Ctcp\u662F4\u5C42\uFF0Chttp\u662F7\u5C42\uFF0Chealth\u53EA\u4F1A\u8FD4\u56DEOK</span>
    mode http

    <span class="token comment"># maxconn 65535         maxconn \u6BCF\u4E2A\u8FDB\u7A0B\u53EF\u7528\u7684\u6700\u5927\u8FDE\u63A5\u6570</span>
    <span class="token comment"># retries 3         \u5F53\u5BF9server\u7684connection\u5931\u8D25\u540E\uFF0C\u91CD\u8BD5\u7684\u6B21\u6570 \u3000</span>
    <span class="token comment"># option abortonclose     \u542F\u7528\u6216\u7981\u7528\u5728\u961F\u5217\u4E2D\u6302\u8D77\u7684\u4E2D\u6B62\u8BF7\u6C42\u7684\u65E9\u671F\u4E22\u5F03</span>
    <span class="token comment"># option redispatch     \u542F\u7528\u6216\u7981\u7528\u5728\u8FDE\u63A5\u6545\u969C\u60C5\u51B5\u4E0B\u7684\u4F1A\u8BDD\u91CD\u65B0\u5206\u914D</span>
    <span class="token comment"># option dontlognull     \u542F\u7528\u548C\u7981\u7528 \u8BB0\u5F55 \u7A7A\u8FDE\u63A5</span>
    <span class="token comment"># option httpclose         \u6BCF\u6B21\u8BF7\u6C42\u5B8C\u6BD5\u540E\u4E3B\u52A8\u5173\u95EDhttp\u901A\u9053\uFF0CHA-Proxy\u4E0D\u652F\u6301keep-alive\u6A21\u5F0F</span>
    <span class="token comment"># option forwardfor     \u83B7\u5F97\u5BA2\u6237\u7AEFIP</span>
    <span class="token comment"># option httplog        \u8BB0\u5F55HTTP \u8BF7\u6C42,session \u72B6\u6001\u548C\u8BA1\u65F6\u5668</span>
    option httplog
    option dontlognull
    <span class="token function">timeout</span> connect <span class="token number">5000</span>
    <span class="token function">timeout</span> client <span class="token number">50000</span>
    <span class="token function">timeout</span> server <span class="token number">50000</span>


<span class="token comment">#\u524D\u7AEF\u914D\u7F6E\uFF0Chttp_front\u540D\u79F0\u53EF\u81EA\u5B9A\u4E49</span>
frontend http_front

    <span class="token comment"># bind *:443 ssl crt /etc/haproxy/cert.pem        \u542F\u7528ssl\u8BC1\u4E66</span>
    <span class="token comment"># bind *:80                        \u53D1\u8D77http\u8BF7\u6C42\u905380\u7AEF\u53E3\uFF0C\u4F1A\u88AB\u8F6C\u53D1\u5230\u8BBE\u7F6E\u7684ip\u53CA\u7AEF\u53E3</span>
    <span class="token builtin class-name">bind</span> *:80

    stats <span class="token builtin class-name">enable</span>
    <span class="token comment">#haproxy\u7684\u72B6\u6001\u7BA1\u7406\u9875\u9762\uFF0C\u901A\u8FC7/haproxy?stats\u6765\u8BBF\u95EE</span>
    stats uri /haproxy?stats
    <span class="token comment"># stats auth &lt;user&gt;:&lt;passwd&gt;</span>
    default_backend http_back

<span class="token comment">#\u540E\u7AEF\u914D\u7F6E\uFF0Chttp_back\u540D\u79F0\u53EF\u81EA\u5B9A\u4E49</span>
backend http_back

    <span class="token comment"># \u8D1F\u8F7D\u5747\u8861\u65B9\u5F0F</span>
    <span class="token comment"># source \u6839\u636E\u8BF7\u6C42\u6E90IP</span>
    <span class="token comment"># static-rr \u6839\u636E\u6743\u91CD</span>
    <span class="token comment"># leastconn \u6700\u5C11\u8FDE\u63A5\u8005\u5148\u5904\u7406</span>
    <span class="token comment"># uri \u6839\u636E\u8BF7\u6C42\u7684uri</span>
    <span class="token comment"># url_param \u6839\u636E\u8BF7\u6C42\u7684url\u53C2\u6570</span>
    <span class="token comment"># rdp-cookie \u636E\u636Ecookie(name)\u6765\u9501\u5B9A\u5E76\u54C8\u5E0C\u6BCF\u4E00\u6B21\u8BF7\u6C42</span>
    <span class="token comment"># hdr(name) \u6839\u636EHTTP\u8BF7\u6C42\u5934\u6765\u9501\u5B9A\u6BCF\u4E00\u6B21HTTP\u8BF7\u6C42</span>
    <span class="token comment"># roundrobin \u8F6E\u8BE2\u65B9\u5F0F</span>
    balance roundrobin

    <span class="token comment">#\u8BBE\u7F6E\u5065\u5EB7\u68C0\u67E5\u9875\u9762</span>
    option httpchk GET /index.html

    <span class="token comment">#\u4F20\u9012\u5BA2\u6237\u7AEF\u771F\u5B9EIP</span>
    option forwardfor header X-Forwarded-For

    <span class="token comment"># inter 2000 \u5065\u5EB7\u68C0\u67E5\u65F6\u95F4\u95F4\u96942\u79D2</span>
    <span class="token comment"># rise 3 \u68C0\u6D4B\u591A\u5C11\u6B21\u624D\u8BA4\u4E3A\u662F\u6B63\u5E38\u7684</span>
    <span class="token comment"># fall 3 \u5931\u8D25\u591A\u5C11\u6B21\u624D\u8BA4\u4E3A\u662F\u4E0D\u53EF\u7528\u7684</span>
    <span class="token comment"># weight 30 \u6743\u91CD</span>
    <span class="token comment"># \u9700\u8981\u8F6C\u53D1\u7684ip\u53CA\u7AEF\u53E3</span>
    <span class="token comment"># server &lt;name&gt; &lt;address&gt;[:port] [settings ...]</span>
    <span class="token comment"># default-server [settings ...]</span>
    server node1 xxxxx:8081 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">30</span>
    server node2 xxxxx:8082 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">30</span>

    <span class="token comment"># server first  10.1.1.1:1080 cookie first  check inter 1000</span>
    <span class="token comment"># server second 10.1.1.2:1080 cookie second check inter 1000</span>
    <span class="token comment"># server transp ipv4@</span>
    <span class="token comment"># server backup &quot;\${SRV_BACKUP}:1080&quot; backup</span>
    <span class="token comment"># server www1_dc1 &quot;\${LAN_DC1}.101:80&quot;</span>
    <span class="token comment"># server www1_dc2 &quot;\${LAN_DC2}.101:80&quot;</span>

<span class="token comment"># haproxy\u7684acl\u8BBF\u95EE\u63A7\u5236</span>
frontend http_front
    <span class="token builtin class-name">bind</span> *:80
    stats uri /haproxy?stats

    <span class="token comment">#\u521B\u5EFA\u4E00\u4E2Aacl\uFF0Cis_http_back2\u662Facl\u7684\u540D\u79F0\uFF0C\u53EF\u81EA\u5B9A\u4E49\uFF0C\u7528\u4E8E\u5224\u65AD\u4E3B\u673A\u540D\u662F\u5426\u4E3Awww.back2.com</span>
    acl is_http_back2 hdr_end<span class="token punctuation">(</span>host<span class="token punctuation">)</span> www.back2.com

    <span class="token comment">#\u901A\u8FC7\u6B63\u5219\u5224\u65AD\u4E3B\u673A\u540D\u4E2D\u662F\u5426\u4E3Abbs.back.com\u6216forum.back.com</span>
    acl is_host_bbs hdr_reg<span class="token punctuation">(</span>host<span class="token punctuation">)</span> -i ^<span class="token punctuation">(</span>bbs.back.com<span class="token operator">|</span>forum.back.com<span class="token punctuation">)</span>

    <span class="token comment">#\u5224\u65ADua\u662F\u5426\u4E3Aandroid</span>
    acl is_ua_android hdr_reg<span class="token punctuation">(</span>User-Agent<span class="token punctuation">)</span> -i android

    <span class="token comment">#\u5224\u65AD\u4E3B\u673A\u540D\u5F00\u5934\u662F\u5426\u4E3Aimg.\u6216css.\u6216js.</span>
    acl is_host_static hdr_beg<span class="token punctuation">(</span>host<span class="token punctuation">)</span> -i img. css. js.

    <span class="token comment">#\u5224\u65ADurl\u8DEF\u5F84\u4E2D\u662F\u5426\u6709/bbs</span>
    acl is_path_bbs path_beg -i /bbs

    <span class="token comment">#\u5224\u65ADurl\u6587\u4EF6\u7ED3\u5C3E</span>
    acl is_php path_end -i .php

    <span class="token comment">#\u901A\u8FC7\u6B63\u5219\u5224\u65ADurl\u4E2D\u7ED3\u5C3E\u4EE5</span>
    acl is_static_file url_reg -i /*.<span class="token punctuation">(</span>css<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>jpeg<span class="token operator">|</span>gif<span class="token punctuation">)</span>$

    <span class="token comment">#\u6548\u679C\u540C\u4E0A</span>
    acl is_static_file2 path_end -i .css .jpg .png .jpeg .gif

    <span class="token comment">#\u5982\u679C\u4E3B\u673A\u540D\u662Fwww.back2.com\u90A3\u4E48\u5C31\u4F7F\u7528\u540E\u7AEFhttp_back2</span>
    <span class="token comment"># use_backend &lt;backend&gt; [{if | unless} &lt;condition&gt;]</span>
    use_backend http_back2 <span class="token keyword">if</span> is_http_back2 or is_ua_android

    <span class="token comment">#\u9ED8\u8BA4\u4F7F\u7528\u7684\u540E\u7AEF</span>
    default_backend http_back

backend http_back
    balance roundrobin
    option httpchk GET /index.html
    option forwardfor header X-Forwarded-For
    server node1 <span class="token number">192.168</span>.1.222:8080 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">30</span>

backend http_back2
    balance roundrobin
    option httpchk GET /index.html
    option forwardfor header X-Forwarded-For
    server node2 <span class="token number">192.168</span>.1.222:8082 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">30</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br></div></div><p><code>log</code> \u683C\u5F0F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>log-format %T<span class="token punctuation">\\</span> %t<span class="token punctuation">\\</span> Some<span class="token punctuation">\\</span> Text
log-format %<span class="token punctuation">{</span>+Q<span class="token punctuation">}</span>o<span class="token punctuation">\\</span> %t<span class="token punctuation">\\</span> %s<span class="token punctuation">\\</span> %<span class="token punctuation">{</span>-Q<span class="token punctuation">}</span>r

log-format-sd %<span class="token punctuation">{</span>+Q,+E<span class="token punctuation">}</span>o<span class="token punctuation">\\</span> <span class="token punctuation">[</span>exampleSDID@1234<span class="token punctuation">\\</span> <span class="token assign-left variable">header</span><span class="token operator">=</span>%<span class="token punctuation">[</span>capture.req.hdr<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

+---+------+-----------------------------------------------+-------------+
  <span class="token operator">|</span> R <span class="token operator">|</span> var  <span class="token operator">|</span> field name <span class="token punctuation">(</span><span class="token number">8.2</span>.2 and <span class="token number">8.2</span>.3 <span class="token keyword">for</span> description<span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token builtin class-name">type</span>        <span class="token operator">|</span>
  +---+------+-----------------------------------------------+-------------+
  <span class="token operator">|</span>   <span class="token operator">|</span> %o   <span class="token operator">|</span> special variable, apply flags on all next var <span class="token operator">|</span>             <span class="token operator">|</span>
  +---+------+-----------------------------------------------+-------------+
  <span class="token operator">|</span>   <span class="token operator">|</span> %B   <span class="token operator">|</span> bytes_read           <span class="token punctuation">(</span>from server to client<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %CC  <span class="token operator">|</span> captured_request_cookie                       <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %CS  <span class="token operator">|</span> captured_response_cookie                      <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %H   <span class="token operator">|</span> <span class="token function">hostname</span>                                      <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %HM  <span class="token operator">|</span> HTTP method <span class="token punctuation">(</span>ex: POST<span class="token punctuation">)</span>                        <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %HP  <span class="token operator">|</span> HTTP request URI without query string <span class="token punctuation">(</span>path<span class="token punctuation">)</span>  <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %HQ  <span class="token operator">|</span> HTTP request URI query string <span class="token punctuation">(</span>ex: ?bar<span class="token operator">=</span>baz<span class="token punctuation">)</span>  <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %HU  <span class="token operator">|</span> HTTP request URI <span class="token punctuation">(</span>ex: /foo?bar<span class="token operator">=</span>baz<span class="token punctuation">)</span>           <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %HV  <span class="token operator">|</span> HTTP version <span class="token punctuation">(</span>ex: HTTP/1.0<span class="token punctuation">)</span>                   <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ID  <span class="token operator">|</span> unique-id                                     <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ST  <span class="token operator">|</span> status_code                                   <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %T   <span class="token operator">|</span> gmt_date_time                                 <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Ta  <span class="token operator">|</span> Active <span class="token function">time</span> of the request <span class="token punctuation">(</span>from TR to end<span class="token punctuation">)</span>   <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Tc  <span class="token operator">|</span> Tc                                            <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Td  <span class="token operator">|</span> Td <span class="token operator">=</span> Tt - <span class="token punctuation">(</span>Tq + Tw + Tc + Tr<span class="token punctuation">)</span>                 <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Tl  <span class="token operator">|</span> local_date_time                               <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Th  <span class="token operator">|</span> connection handshake <span class="token function">time</span> <span class="token punctuation">(</span>SSL, PROXY proto<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %Ti  <span class="token operator">|</span> idle <span class="token function">time</span> before the HTTP request             <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %Tq  <span class="token operator">|</span> Th + Ti + TR                                  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %TR  <span class="token operator">|</span> <span class="token function">time</span> to receive the full request from 1st byte<span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %Tr  <span class="token operator">|</span> Tr <span class="token punctuation">(</span>response <span class="token function">time</span><span class="token punctuation">)</span>                            <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Ts  <span class="token operator">|</span> timestamp                                     <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Tt  <span class="token operator">|</span> Tt                                            <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %Tw  <span class="token operator">|</span> Tw                                            <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %U   <span class="token operator">|</span> bytes_uploaded       <span class="token punctuation">(</span>from client to server<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ac  <span class="token operator">|</span> actconn                                       <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %b   <span class="token operator">|</span> backend_name                                  <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %bc  <span class="token operator">|</span> beconn      <span class="token punctuation">(</span>backend concurrent connections<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %bi  <span class="token operator">|</span> backend_source_ip       <span class="token punctuation">(</span>connecting address<span class="token punctuation">)</span>  <span class="token operator">|</span> IP          <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %bp  <span class="token operator">|</span> backend_source_port     <span class="token punctuation">(</span>connecting address<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %bq  <span class="token operator">|</span> backend_queue                                 <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ci  <span class="token operator">|</span> client_ip                 <span class="token punctuation">(</span>accepted address<span class="token punctuation">)</span>  <span class="token operator">|</span> IP          <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %cp  <span class="token operator">|</span> client_port               <span class="token punctuation">(</span>accepted address<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %f   <span class="token operator">|</span> frontend_name                                 <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %fc  <span class="token operator">|</span> feconn     <span class="token punctuation">(</span>frontend concurrent connections<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %fi  <span class="token operator">|</span> frontend_ip              <span class="token punctuation">(</span>accepting address<span class="token punctuation">)</span>  <span class="token operator">|</span> IP          <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %fp  <span class="token operator">|</span> frontend_port            <span class="token punctuation">(</span>accepting address<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ft  <span class="token operator">|</span> frontend_name_transport <span class="token punctuation">(</span><span class="token string">&#39;~&#39;</span> suffix <span class="token keyword">for</span> SSL<span class="token punctuation">)</span>  <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %lc  <span class="token operator">|</span> frontend_log_counter                          <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %hr  <span class="token operator">|</span> captured_request_headers default style        <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %hrl <span class="token operator">|</span> captured_request_headers CLF style            <span class="token operator">|</span> string list <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %hs  <span class="token operator">|</span> captured_response_headers default style       <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %hsl <span class="token operator">|</span> captured_response_headers CLF style           <span class="token operator">|</span> string list <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ms  <span class="token operator">|</span> accept <span class="token function">date</span> milliseconds <span class="token punctuation">(</span>left-padded with <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %pid <span class="token operator">|</span> PID                                           <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %r   <span class="token operator">|</span> http_request                                  <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %rc  <span class="token operator">|</span> retries                                       <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %rt  <span class="token operator">|</span> request_counter <span class="token punctuation">(</span>HTTP req or TCP session<span class="token punctuation">)</span>     <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %s   <span class="token operator">|</span> server_name                                   <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %sc  <span class="token operator">|</span> srv_conn     <span class="token punctuation">(</span>server concurrent connections<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %si  <span class="token operator">|</span> server_IP                   <span class="token punctuation">(</span>target address<span class="token punctuation">)</span>  <span class="token operator">|</span> IP          <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %sp  <span class="token operator">|</span> server_port                 <span class="token punctuation">(</span>target address<span class="token punctuation">)</span>  <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %sq  <span class="token operator">|</span> srv_queue                                     <span class="token operator">|</span> numeric     <span class="token operator">|</span>
  <span class="token operator">|</span> S <span class="token operator">|</span> %sslc<span class="token operator">|</span> ssl_ciphers <span class="token punctuation">(</span>ex: AES-SHA<span class="token punctuation">)</span>                     <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> S <span class="token operator">|</span> %sslv<span class="token operator">|</span> ssl_version <span class="token punctuation">(</span>ex: TLSv1<span class="token punctuation">)</span>                       <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %t   <span class="token operator">|</span> date_time      <span class="token punctuation">(</span>with millisecond resolution<span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %tr  <span class="token operator">|</span> date_time of HTTP request                     <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %trg <span class="token operator">|</span> gmt_date_time of start of HTTP request        <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %trl <span class="token operator">|</span> local_date_time of start of HTTP request      <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>   <span class="token operator">|</span> %ts  <span class="token operator">|</span> termination_state                             <span class="token operator">|</span> string      <span class="token operator">|</span>
  <span class="token operator">|</span> H <span class="token operator">|</span> %tsc <span class="token operator">|</span> termination_state with cookie status          <span class="token operator">|</span> string      <span class="token operator">|</span>
  +---+------+-----------------------------------------------+-------------+
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><p>\u9519\u8BEF\u9875\u9762\u91CD\u5B9A\u5411:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 200, 400, 403, 405, 408, 425, 429, 500, 502, 503, and 504 \u4E0D\u652F\u6301404</span>
errorloc <span class="token operator">&lt;</span>code<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
errorloc302 <span class="token operator">&lt;</span>code<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

errorfile <span class="token operator">&lt;</span>code<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="keepalived" tabindex="-1"><a class="header-anchor" href="#keepalived" aria-hidden="true">#</a> Keepalived</h2>`,8),b={href:"https://www.keepalived.org/manpage.html",target:"_blank",rel:"noopener noreferrer"},k=c("\u6587\u6863"),m=n(`<p>\u6545\u969C\u8F6C\u79FB \u5065\u5EB7\u68C0\u67E5 <code>vrrp</code>\u534F\u8BAE, \u7ADE\u9009 master, master \u53D1\u9001\u5E7F\u64AD, master \u6302\u6389, \u5907\u7528\u8282\u70B9\u63A5\u7BA1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>global_refs<span class="token punctuation">{</span>
    <span class="token comment"># \u8282\u70B9\u8DEF\u7531\u552F\u4E00\u6807\u8BC6</span>
    router_id xxx
<span class="token punctuation">}</span>
<span class="token comment"># \u4E3B\u5907\u8282\u70B9\u8981\u7528\u540C\u4E00\u4E2Avrrp\u5B9E\u4F8B\u540D</span>
vrrp_instance xx1<span class="token punctuation">{</span>
    <span class="token comment"># \u5907\u8282\u70B9 BACKUP</span>
    state MASTER
    interface eth0
    <span class="token comment"># 0~255 \u7528\u4E8E\u533A\u5206vrrp\u5B9E\u4F8B</span>
    virtual_router_id <span class="token number">51</span>
    <span class="token comment"># \u8282\u70B9\u4F18\u5148\u7EA7  \u4E3B\u5907\u5DEE50</span>
    priority <span class="token number">200</span>
    <span class="token comment"># \u5FC3\u8DF3\u95F4\u9694</span>
    advert_init <span class="token number">1</span>
    <span class="token comment"># \u901A\u4FE1\u8BA4\u8BC1</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass xxxxxx
    <span class="token punctuation">}</span>

    <span class="token comment"># \u865A\u62DFip</span>
    virtual_ipaddress<span class="token punctuation">{</span>
        xxxxx/24
        xxxxx/24
        xxxxx/24
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,2);function d(h,_){const a=p("ExternalLinkIcon");return e(),o(r,null,[u,s("p",null,[s("a",b,[k,t(a)])]),m],64)}var x=l(i,[["render",d]]);export{x as default};

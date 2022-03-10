import{r as p,o as e,c as t,a as n,d as l,F as c,b as s,e as u}from"./app.0c7793af.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const o={},i=n("h1",{id:"clash",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#clash","aria-hidden":"true"},"#"),s(" Clash")],-1),k={href:"https://docs.cfw.lbyczf.com/",target:"_blank",rel:"noopener noreferrer"},b=s("\u6587\u6863"),m=u(`<h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> mixin</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">mixin</span><span class="token punctuation">:</span>
  <span class="token key atrule">dns</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">listen</span><span class="token punctuation">:</span> <span class="token punctuation">:</span><span class="token number">53</span>
    <span class="token key atrule">nameserver</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 119.29.29.29
      <span class="token punctuation">-</span> 223.5.5.5
      <span class="token punctuation">-</span> 1.1.1.1
      <span class="token punctuation">-</span> 8.8.8.8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="parsers" tabindex="-1"><a class="header-anchor" href="#parsers" aria-hidden="true">#</a> parsers</h2><p>\u914D\u7F6E\u6587\u4EF6\u9884\u5904\u7406</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">parsers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">reg</span><span class="token punctuation">:</span> .<span class="token important">*$</span>
    <span class="token key atrule">code</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) =&gt; {
        const cfg = yaml.parse(raw)
        return yaml.stringify({...cfg,rules:[]})
      }</span>
    <span class="token key atrule">yaml</span><span class="token punctuation">:</span>
      <span class="token key atrule">append-proxy-groups</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PROXY
          <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
          <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> Proxy
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.gstatic.com/generate_204&quot;</span>
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">1000</span>
      <span class="token key atrule">commands</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> proxy<span class="token punctuation">-</span>groups.PROXY.proxies=<span class="token punctuation">[</span><span class="token punctuation">]</span>proxyNames
      <span class="token key atrule">prepend-rules</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>applications<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>clash.razord.top<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>yacd.haishan.me<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>private<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>reject<span class="token punctuation">,</span>REJECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>icloud<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>apple<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>google<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>proxy<span class="token punctuation">,</span>PROXY
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>direct<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>lancidr<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>cncidr<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>telegramcidr<span class="token punctuation">,</span>PROXY
        <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span><span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>CN<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> MATCH<span class="token punctuation">,</span>PROXY
      <span class="token key atrule">mix-rule-providers</span><span class="token punctuation">:</span>
        <span class="token key atrule">reject</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/reject.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">icloud</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/icloud.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">apple</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/apple.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">google</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/google.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/proxy.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">direct</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/direct.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">private</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/private.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">gfw</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/gfw.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">greatfire</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/greatfire.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">tld-not-cn</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/tld<span class="token punctuation">-</span>not<span class="token punctuation">-</span>cn.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">telegramcidr</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/telegramcidr.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">cncidr</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/cncidr.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">lancidr</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/lancidr.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

        <span class="token key atrule">applications</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> http
          <span class="token key atrule">behavior</span><span class="token punctuation">:</span> classical
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt&quot;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/applications.yaml
          <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br></div></div>`,5);function y(d,h){const a=p("ExternalLinkIcon");return e(),t(c,null,[i,n("p",null,[n("a",k,[b,l(a)])]),m],64)}var x=r(o,[["render",y]]);export{x as default};

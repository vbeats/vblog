import{e as n}from"./app.b10f5d65.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="kong" tabindex="-1"><a class="header-anchor" href="#kong" aria-hidden="true">#</a> Kong</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># postgresql</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run -d --name kong-database <span class="token punctuation">\\</span>
                -p <span class="token number">5432</span>:5432 <span class="token punctuation">\\</span>
                -e <span class="token string">&quot;POSTGRES_USER=kong&quot;</span> <span class="token punctuation">\\</span>
                -e <span class="token string">&quot;POSTGRES_DB=kong&quot;</span> <span class="token punctuation">\\</span>
                -e <span class="token string">&quot;POSTGRES_PASSWORD=kong&quot;</span> <span class="token punctuation">\\</span>
                postgres:9.6

<span class="token comment"># \u521D\u59CB\u5316\u6570\u636E\u5E93</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run --rm <span class="token punctuation">\\</span>
    --link kong-database:kong-database <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_DATABASE=postgres&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_PG_HOST=kong-database&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_PG_PASSWORD=kong&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_CASSANDRA_CONTACT_POINTS=kong-database&quot;</span> <span class="token punctuation">\\</span>
    kong kong migrations up

<span class="token comment"># kong</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run -d --name kong <span class="token punctuation">\\</span>
    --link kong-database:kong-database <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_DATABASE=postgres&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_PG_HOST=kong-database&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_PG_PASSWORD=kong&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_CASSANDRA_CONTACT_POINTS=kong-database&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_PROXY_ACCESS_LOG=/dev/stdout&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_ADMIN_ACCESS_LOG=/dev/stdout&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_PROXY_ERROR_LOG=/dev/stderr&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_ADMIN_ERROR_LOG=/dev/stderr&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token string">&quot;KONG_ADMIN_LISTEN=0.0.0.0:8001, 0.0.0.0:8444 ssl&quot;</span> <span class="token punctuation">\\</span>
    -p <span class="token number">80</span>:8000 <span class="token punctuation">\\</span>
    -p <span class="token number">443</span>:8443 <span class="token punctuation">\\</span>
    -p <span class="token number">8001</span>:8001 <span class="token punctuation">\\</span>
    -p <span class="token number">8444</span>:8444 <span class="token punctuation">\\</span>
    kong

<span class="token comment"># konga \u6570\u636E\u5E93</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run --link kong-database:kong-database --rm pantsel/konga:latest -c prepare -a postgres -u postgresql://kong:kong@kong-database:5432/konga

<span class="token comment"># konga</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run -d -p <span class="token number">1337</span>:1337 <span class="token punctuation">\\</span>
          --link kong-database:kong-database <span class="token punctuation">\\</span>
          -e <span class="token string">&quot;TOKEN_SECRET=123456&quot;</span> <span class="token punctuation">\\</span>
          -e <span class="token string">&quot;DB_ADAPTER=postgres&quot;</span> <span class="token punctuation">\\</span>
          -e <span class="token string">&quot;DB_URI=postgresql://kong:kong@kong-database:5432/konga&quot;</span> <span class="token punctuation">\\</span>
          --name konga <span class="token punctuation">\\</span>
          pantsel/konga
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><blockquote><p>upstream --&gt; services --&gt; routes</p></blockquote>`,5);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};

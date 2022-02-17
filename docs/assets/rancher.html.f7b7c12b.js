import{r as e,o as p,c as t,a as n,d as l,F as c,b as s,e as r}from"./app.19c1525c.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"rancher-\u{1F404}",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rancher-\u{1F404}","aria-hidden":"true"},"#"),s(" Rancher \u{1F404}")],-1),k={href:"https://docs.rancher.cn/",target:"_blank",rel:"noopener noreferrer"},b=s("\u6587\u6863"),m=r(`<h2 id="\u9AD8\u53EF\u7528\u90E8\u7F72-k3s" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u53EF\u7528\u90E8\u7F72-k3s" aria-hidden="true">#</a> \u9AD8\u53EF\u7528\u90E8\u7F72(k3s)</h2><table><thead><tr><th>ip</th><th>role</th></tr></thead><tbody><tr><td>192.168.100.80</td><td>*.demo.com, \u6570\u636E\u5E93(\u5916\u90E8\u5B58\u50A8-\u975E\u5FC5\u987B), nginx</td></tr><tr><td>192.168.100.81</td><td>k3s server,rancher server</td></tr><tr><td>192.168.100.82</td><td>k3s server,rancher server</td></tr></tbody></table><blockquote><p>server \u8282\u70B9\u5B89\u88C5 kubectl k3s helm \u5DE5\u5177</p></blockquote><ol><li>k3s \u96C6\u7FA4</li></ol><p>\u76F4\u63A5\u5728<code>k3s server</code> \u8282\u70B9\u90E8\u7F72 rancher</p><p><code>k3s</code>\u65B0\u7248\u672C\u9AD8\u53EF\u7528\u96C6\u7FA4\u652F\u6301\u4F7F\u7528 \u5185\u5D4C\u5B58\u50A8</p><blockquote><p>\u5982\u679C\u4F7F\u7528\u5916\u90E8\u5B58\u50A8, \u540E\u671F\u8981\u4FEE\u6539\u5916\u90E8\u5B58\u50A8<code>endpoint</code>\u5730\u5740, \u4FEE\u6539 <code>/etc/systemd/system/k3s.service.env</code> \u91CC\u7684\u914D\u7F6E, <code>systemctl restart k3s-server</code> \u91CD\u542F\u670D\u52A1</p></blockquote><p><code>nginx</code> 4\u5C42 TCP\u4EE3\u7406</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">upstream</span> k3s_server</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">least_conn</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.81:6443 max_fails=3 fail_timeout=5s</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.82:6443 max_fails=3 fail_timeout=5s</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">6443</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_timeout</span> <span class="token number">3s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> k3s_server</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CBserver\u8282\u70B9</span>
<span class="token function">curl</span> -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh <span class="token operator">|</span> <span class="token assign-left variable">INSTALL_K3S_MIRROR</span><span class="token operator">=</span>cn <span class="token punctuation">\\</span>
  <span class="token function">sh</span> -s - server --token<span class="token operator">=</span><span class="token number">123456</span> --cluster-init --tls-san<span class="token operator">=</span>k3s.demo.com <span class="token punctuation">\\</span>
  <span class="token punctuation">[</span> --datastore-endpoint<span class="token operator">=</span><span class="token string">&quot;mysql://username:password@tcp(hostname:3306)/database-name&quot;</span> <span class="token punctuation">]</span>

<span class="token comment"># token /var/lib/rancher/k3s/server/node-token</span>

<span class="token comment"># \u5176\u4ED6\u8282\u70B9\u52A0\u5165\u96C6\u7FA4</span>
<span class="token function">curl</span> -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh <span class="token operator">|</span> <span class="token assign-left variable">INSTALL_K3S_MIRROR</span><span class="token operator">=</span>cn <span class="token punctuation">\\</span>
  <span class="token assign-left variable">K3S_TOKEN</span><span class="token operator">=</span>K10bc1b67a30b2f973e3537f6c67d6f600a0f28ecd30d698cff83d8ef78ebbc66ae::server:123456 <span class="token punctuation">\\</span>
  <span class="token function">sh</span> -s - server --server https://k3s.demo.com:6443 --tls-san<span class="token operator">=</span>k3s.demo.com


kubectl get nodes -A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4FDD\u5B58<code>kubeconfig</code>\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> /etc/rancher/k3s/k3s.yaml ~/.kube/config

<span class="token comment"># config\u4E2D server\u5730\u5740\u6539\u4E3A https://k3s.demo.com:6443</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>\u914D\u7F6Enginx</li></ol><p><code>rancher</code> 7\u5C42HTTP\u4EE3\u7406 <code>rancher.demo.com</code></p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> rancher</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> node2:80</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> node4:80</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default</span> Upgrade</span><span class="token punctuation">;</span>
    &#39;&#39; <span class="token directive"><span class="token keyword">close</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> rancher.demo.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span> /root/tls/tls.crt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /root/tls/tls.key</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Port <span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://rancher</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token variable">$connection_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">900s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_buffering</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> rancher.demo.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ol start="3"><li>helm \u5B89\u88C5 rancher server</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-stable https://releases.rancher.com/server-charts/stable

<span class="token comment"># namespace</span>

kubectl create namespace cattle-system

<span class="token comment"># k8s secret\u6DFB\u52A0ssl\u8BC1\u4E66</span>

kubectl -n cattle-system create secret tls tls-rancher-ingress <span class="token punctuation">\\</span>
  --cert<span class="token operator">=</span>tls.pem <span class="token punctuation">\\</span>
  --key<span class="token operator">=</span>tls.key

<span class="token comment"># \u79C1\u6709ca</span>
kubectl -n cattle-system create secret generic tls-ca <span class="token punctuation">\\</span>
  --from-file<span class="token operator">=</span>cacerts.pem<span class="token operator">=</span>/root/tls/cacerts.pem

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u679Cssl\u8BC1\u4E66\u662F\u81EA\u7B7E\u540D\u8BC1\u4E66 \u9700\u8981\u8BBE\u7F6E\u4E00\u4E0Btraefik-ingress \u7701\u768480 443\u4E00\u76F4\u5728\u91CD\u5B9A\u5411</p><p>\u5728<code>k3s-server</code>\u8282\u70B9\u4FEE\u6539 <code>/var/lib/rancher/k3s/server/manifests</code>\u4E0B\u7684<code>traefik.yaml</code>, \u4FDD\u5B58\u540E\u4F1A\u81EA\u52A8\u66F4\u65B0</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token key atrule">valuesContent</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">additionalArguments</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.proxyProtocol.insecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.forwardedHeaders.insecure&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u793A\u4F8B:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> helm.cattle.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HelmChart
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> traefik<span class="token punctuation">-</span>crd
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">chart</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//%<span class="token punctuation">{</span>KUBERNETES_API<span class="token punctuation">}</span>%/static/charts/traefik<span class="token punctuation">-</span>crd<span class="token punctuation">-</span>10.9.100.tgz
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> helm.cattle.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HelmChart
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> traefik
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">chart</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//%<span class="token punctuation">{</span>KUBERNETES_API<span class="token punctuation">}</span>%/static/charts/traefik<span class="token punctuation">-</span>10.9.100.tgz
  <span class="token key atrule">set</span><span class="token punctuation">:</span>
    <span class="token key atrule">global.systemDefaultRegistry</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">valuesContent</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">additionalArguments</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.proxyProtocol.insecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.forwardedHeaders.insecure&quot;</span>
    <span class="token key atrule">rbac</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">websecure</span><span class="token punctuation">:</span>
        <span class="token key atrule">tls</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">podAnnotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">prometheus.io/port</span><span class="token punctuation">:</span> <span class="token string">&quot;8082&quot;</span>
      <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">providers</span><span class="token punctuation">:</span>
      <span class="token key atrule">kubernetesIngress</span><span class="token punctuation">:</span>
        <span class="token key atrule">publishedService</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> <span class="token string">&quot;system-cluster-critical&quot;</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;rancher/mirrored-library-traefik&quot;</span>
    <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;CriticalAddonsOnly&quot;</span>
      <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">&quot;Exists&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;node-role.kubernetes.io/control-plane&quot;</span>
      <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">&quot;Exists&quot;</span>
      <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">&quot;NoSchedule&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;node-role.kubernetes.io/master&quot;</span>
      <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">&quot;Exists&quot;</span>
      <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">&quot;NoSchedule&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
helm <span class="token function">install</span> rancher rancher-latest/rancher <span class="token punctuation">\\</span>
  --namespace cattle-system <span class="token punctuation">\\</span>
  --set <span class="token assign-left variable">hostname</span><span class="token operator">=</span>rancher.demo.com <span class="token punctuation">\\</span>
  --set <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token number">2</span> <span class="token punctuation">\\</span>
  --set ingress.tls.source<span class="token operator">=</span>secret <span class="token punctuation">\\</span>
  --set <span class="token assign-left variable">privateCA</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --set <span class="token assign-left variable">tls</span><span class="token operator">=</span>external

<span class="token comment"># tls\u9A8C\u8BC1</span>

openssl s_client -connect rancher.demo.com:443 -servername rancher.demo.com -CAfile ca.crt

<span class="token comment"># \u67E5\u770B\u5B89\u88C5</span>
kubectl -n cattle-system rollout status deploy/rancher

kubectl -n cattle-system get deploy rancher

kubectl get pods -n cattle-system

kubectl describe pod rancher-xxxxx -n cattle-system

kubectl get ingress -A

kubectl describe ingress rancher -n cattle-system

<span class="token comment"># ingress \u793A\u4F8B</span>

Name:             rancher
Namespace:        cattle-system
Address:          <span class="token number">192.168</span>.1.81,192.168.1.83
Default backend:  default-http-backend:80 <span class="token punctuation">(</span><span class="token operator">&lt;</span>error: endpoints <span class="token string">&quot;default-http-backend&quot;</span> not found<span class="token operator">&gt;</span><span class="token punctuation">)</span>
Rules:
  Host              Path  Backends
  ----              ----  --------
  rancher.demo.com
                       rancher:80 <span class="token punctuation">(</span><span class="token number">10.42</span>.0.32:80,10.42.1.48:80<span class="token punctuation">)</span>
Annotations:        field.cattle.io/publicEndpoints:
                      <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;addresses&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;192.168.1.81&quot;</span>,<span class="token string">&quot;192.168.1.82&quot;</span><span class="token punctuation">]</span>,<span class="token string">&quot;port&quot;</span>:80,<span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;HTTP&quot;</span>,<span class="token string">&quot;serviceName&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cattle-system:rancher&quot;</span>,<span class="token string">&quot;ingressName&quot;</span>:&quot;cattle-syst<span class="token punctuation">..</span>.
                    meta.helm.sh/release-name: rancher
                    meta.helm.sh/release-namespace: cattle-system
                    nginx.ingress.kubernetes.io/proxy-connect-timeout: <span class="token number">30</span>
                    nginx.ingress.kubernetes.io/proxy-read-timeout: <span class="token number">1800</span>
                    nginx.ingress.kubernetes.io/proxy-send-timeout: <span class="token number">1800</span>
                    nginx.ingress.kubernetes.io/ssl-redirect: <span class="token boolean">false</span>
Events:             <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,23);function d(y,v){const a=e("ExternalLinkIcon");return p(),t(c,null,[i,n("p",null,[n("a",k,[b,l(a)])]),m],64)}var f=o(u,[["render",d]]);export{f as default};

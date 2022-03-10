import{e as n}from"./app.e2a16f3a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="rocketmq-\u{1F680}" tabindex="-1"><a class="header-anchor" href="#rocketmq-\u{1F680}" aria-hidden="true">#</a> RocketMQ \u{1F680}</h1><p>\u652F\u6301 push pull \u6D88\u8D39,\u672C\u8D28\u90FD\u662F\u6D88\u8D39\u8005\u62C9\u53D6\u6D88\u606F</p><p>broker \u521D\u59CB\u4F1A\u521B\u5EFA\u591A\u4E2A\u961F\u5217, producer \u53D1\u9001\u7684\u6D88\u606F\u53EA\u5728\u6BCF\u4E2A\u961F\u5217\u5185\u90E8\u6709\u5E8F</p><p>\u5E7F\u64AD\u6A21\u5F0F: consumer \u9700\u8981\u6307\u5B9A\u6D88\u8D39\u6A21\u5F0F\u4E3A\u5E7F\u64AD\u6A21\u5F0F</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># nameServer\u5730\u5740\uFF0C\u8FD9\u91CCnameserver\u662F\u5355\u53F0\uFF0C\u5982\u679Cnameserver\u662F\u591A\u53F0\u96C6\u7FA4\u7684\u8BDD\uFF0C\u5C31\u7528\u5206\u53F7\u5206\u5272\uFF08\u5373namesrvAddr=ip1:port1;ip2:port2;ip3:port3\uFF09</span>
<span class="token attr-name">namesrvAddr</span><span class="token punctuation">=</span><span class="token attr-value">xxxx:9876;xxxxx:9876</span>
<span class="token comment"># \u6240\u5C5E\u96C6\u7FA4\u540D\u5B57</span>
<span class="token attr-name">brokerClusterName</span><span class="token punctuation">=</span><span class="token attr-value">rocketmq-cluster</span>
<span class="token comment"># broker\u540D\u5B57\uFF0C\u6CE8\u610F\u6B64\u5904\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6\u586B\u5199\u7684\u4E0D\u4E00\u6837  \u4F8B\u5982\uFF1A\u5728a.properties \u6587\u4EF6\u4E2D\u5199 broker-a  \u5728b.properties \u6587\u4EF6\u4E2D\u5199 broker-b</span>
<span class="token attr-name">brokerName</span><span class="token punctuation">=</span><span class="token attr-value">broker-a</span>
<span class="token comment"># 0 \u8868\u793A Master\uFF0C&gt;0 \u8868\u793A Slave</span>
<span class="token attr-name">brokerId</span><span class="token punctuation">=</span><span class="token attr-value">0</span>
<span class="token comment"># \u5220\u9664\u6587\u4EF6\u65F6\u95F4\u70B9\uFF0C\u9ED8\u8BA4\u51CC\u6668 4\u70B9</span>
<span class="token attr-name">deleteWhen</span><span class="token punctuation">=</span><span class="token attr-value">04</span>
<span class="token comment"># \u6587\u4EF6\u4FDD\u7559\u65F6\u95F4\uFF0C\u9ED8\u8BA4 48 \u5C0F\u65F6</span>
<span class="token attr-name">fileReservedTime</span><span class="token punctuation">=</span><span class="token attr-value">48</span>
<span class="token comment"># Broker \u7684\u89D2\u8272: ASYNC_MASTER \u5F02\u6B65\u590D\u5236Master ; SYNC_MASTER \u540C\u6B65\u53CC\u5199Master; SLAVE</span>
<span class="token attr-name">brokerRole</span><span class="token punctuation">=</span><span class="token attr-value">ASYNC_MASTER</span>
<span class="token comment"># \u5237\u76D8\u65B9\u5F0F ASYNC_FLUSH \u5F02\u6B65\u5237\u76D8; SYNC_FLUSH \u540C\u6B65\u5237\u76D8</span>
<span class="token attr-name">flushDiskType</span><span class="token punctuation">=</span><span class="token attr-value">ASYNC_FLUSH</span>
<span class="token comment"># Broker \u5BF9\u5916\u670D\u52A1\u7684\u76D1\u542C\u7AEF\u53E3</span>
<span class="token attr-name">listenPort</span><span class="token punctuation">=</span><span class="token attr-value">10911</span>
<span class="token comment"># \u5B58\u50A8\u8DEF\u5F84</span>
<span class="token attr-name">storePathRootDir</span><span class="token punctuation">=</span><span class="token attr-value">/app/custom/data/rocketmq/store-a</span>


<span class="token comment"># \u5728\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u81EA\u52A8\u521B\u5EFA\u670D\u52A1\u5668\u4E0D\u5B58\u5728\u7684topic\uFF0C\u9ED8\u8BA4\u521B\u5EFA\u7684\u961F\u5217\u6570\u3002\u7531\u4E8E\u662F4\u4E2Abroker\u8282\u70B9\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u4E3A4</span>
<span class="token comment"># defaultTopicQueueNums=4</span>
<span class="token comment"># \u662F\u5426\u5141\u8BB8 Broker \u81EA\u52A8\u521B\u5EFATopic\uFF0C\u5EFA\u8BAE\u7EBF\u4E0B\u5F00\u542F\uFF0C\u7EBF\u4E0A\u5173\u95ED</span>
<span class="token attr-name">autoCreateTopicEnable</span><span class="token punctuation">=</span><span class="token attr-value">true</span>
<span class="token comment"># \u662F\u5426\u5141\u8BB8 Broker \u81EA\u52A8\u521B\u5EFA\u8BA2\u9605\u7EC4\uFF0C\u5EFA\u8BAE\u7EBF\u4E0B\u5F00\u542F\uFF0C\u7EBF\u4E0A\u5173\u95ED</span>
<span class="token attr-name">autoCreateSubscriptionGroup</span><span class="token punctuation">=</span><span class="token attr-value">true</span>
<span class="token comment"># commitLog\u6BCF\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\u9ED8\u8BA41G</span>
<span class="token attr-name">mapedFileSizeCommitLog</span><span class="token punctuation">=</span><span class="token attr-value">1073741824</span>
<span class="token comment"># ConsumeQueue\u6BCF\u4E2A\u6587\u4EF6\u9ED8\u8BA4\u5B5830W\u6761\uFF0C\u6839\u636E\u4E1A\u52A1\u60C5\u51B5\u8C03\u6574</span>
<span class="token attr-name">mapedFileSizeConsumeQueue</span><span class="token punctuation">=</span><span class="token attr-value">300000</span>
<span class="token comment"># destroyMapedFileIntervalForcibly=120000</span>
<span class="token comment"># redeleteHangedFileInterval=120000</span>
<span class="token comment"># \u68C0\u6D4B\u7269\u7406\u6587\u4EF6\u78C1\u76D8\u7A7A\u95F4</span>
<span class="token attr-name">diskMaxUsedSpaceRatio</span><span class="token punctuation">=</span><span class="token attr-value">88</span>
<span class="token comment"># commitLog \u5B58\u50A8\u8DEF\u5F84</span>
<span class="token comment">#storePathCommitLog=/data/rocketmq/store/commitlog</span>
<span class="token comment"># \u6D88\u8D39\u961F\u5217\u5B58\u50A8\u8DEF\u5F84\u5B58\u50A8\u8DEF\u5F84</span>
<span class="token comment">#storePathConsumeQueue=/data/rocketmq/store/consumequeue</span>
<span class="token comment"># \u6D88\u606F\u7D22\u5F15\u5B58\u50A8\u8DEF\u5F84</span>
<span class="token comment">#storePathIndex=/data/rocketmq/store/index</span>
<span class="token comment"># checkpoint \u6587\u4EF6\u5B58\u50A8\u8DEF\u5F84</span>
<span class="token comment">#storeCheckpoint=/data/rocketmq/store/checkpoint</span>
<span class="token comment"># abort \u6587\u4EF6\u5B58\u50A8\u8DEF\u5F84</span>
<span class="token comment">#abortFile=/data/rocketmq/store/abort</span>
<span class="token comment"># \u9650\u5236\u7684\u6D88\u606F\u5927\u5C0F</span>
<span class="token attr-name">maxMessageSize</span><span class="token punctuation">=</span><span class="token attr-value">65536</span>
<span class="token comment">#flushCommitLogLeastPages=4</span>
<span class="token comment">#flushConsumeQueueLeastPages=2</span>
<span class="token comment">#flushCommitLogThoroughInterval=10000</span>
<span class="token comment">#flushConsumeQueueThoroughInterval=60000</span>

<span class="token comment"># \u53D1\u6D88\u606F\u7EBF\u7A0B\u6C60\u6570\u91CF</span>
<span class="token comment">#sendMessageThreadPoolNums=128</span>
<span class="token comment"># \u62C9\u6D88\u606F\u7EBF\u7A0B\u6C60\u6570\u91CF</span>
<span class="token comment">#pullMessageThreadPoolNums=128</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,5);function p(t,r){return e}var c=s(a,[["render",p]]);export{c as default};

import{e as n}from"./app.aa88db34.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo" aria-hidden="true">#</a> Mongo</h1><p><code>aggregate</code>: \u805A\u5408</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.doc.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment"># pipline \u7BA1\u9053\u5904\u7406</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$project</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>name:1,age:1<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        <span class="token variable">$match</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span>:<span class="token punctuation">{</span><span class="token variable">$gte</span>:20<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>$project</code>: \u5B57\u6BB5\u6620\u5C04 \u8FC7\u6EE4</p><p><code>$match</code>: \u5339\u914D</p><p><code>$group</code>: \u5206\u7EC4 <code>$group: {_id:&quot;$order_id&quot;, total: {$sum: &quot;$price&quot;}}</code></p><p><code>$sort</code>: \u6392\u5E8F</p><p><code>$limit</code> <code>$skip</code> :\u5206\u9875</p><p><code>$lookup</code>: \u591A\u8868\u67E5\u8BE2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
   <span class="token variable">$lookup</span><span class="token builtin class-name">:</span>
     <span class="token punctuation">{</span>
       from: <span class="token operator">&lt;</span>collection to join<span class="token operator">&gt;</span>,
       localField: <span class="token operator">&lt;</span>field from the input documents<span class="token operator">&gt;</span>,
       foreignField: <span class="token operator">&lt;</span>field from the documents of the <span class="token string">&quot;from&quot;</span> collection<span class="token operator">&gt;</span>,
       as: <span class="token operator">&lt;</span>output array field<span class="token operator">&gt;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># ----------------</span>
<span class="token variable">$lookup</span>:<span class="token punctuation">{</span>
    from: <span class="token string">&quot;xxx&quot;</span>, <span class="token comment"># \u8981\u5173\u8054\u7684\u8868</span>
    localField: <span class="token string">&quot;id&quot;</span>, <span class="token comment"># \u5173\u8054\u5B57\u6BB5</span>
    foreignField: <span class="token string">&quot;user_id&quot;</span>,
    as: <span class="token string">&quot;users&quot;</span> <span class="token comment"># \u5173\u8054\u8868\u522B\u540D</span>
<span class="token punctuation">}</span>

<span class="token comment"># ----------------------</span>
<span class="token punctuation">{</span>
   <span class="token variable">$lookup</span><span class="token builtin class-name">:</span>
      <span class="token punctuation">{</span>
         from: <span class="token operator">&lt;</span>foreign collection<span class="token operator">&gt;</span>,
         localField: <span class="token operator">&lt;</span>field from <span class="token builtin class-name">local</span> collection<span class="token string">&#39;s documents&gt;,
         foreignField: &lt;field from foreign collection&#39;</span>s documents<span class="token operator">&gt;</span>,
         let: <span class="token punctuation">{</span> <span class="token operator">&lt;</span>var_<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>: <span class="token operator">&lt;</span>expression<span class="token operator">&gt;</span>, \u2026, <span class="token operator">&lt;</span>var_n<span class="token operator">&gt;</span>: <span class="token operator">&lt;</span>expression<span class="token operator">&gt;</span> <span class="token punctuation">}</span>,
         pipeline: <span class="token punctuation">[</span> <span class="token operator">&lt;</span>pipeline to run<span class="token operator">&gt;</span> <span class="token punctuation">]</span>,
         as: <span class="token operator">&lt;</span>output array field<span class="token operator">&gt;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># --------------------------------</span>
SELECT *, stockdata
FROM orders
WHERE stockdata IN <span class="token punctuation">(</span>
   SELECT warehouse, instock
   FROM warehouses
   WHERE stock_item <span class="token operator">=</span> orders.item
   AND instock <span class="token operator">&gt;=</span> orders.ordered
<span class="token punctuation">)</span><span class="token punctuation">;</span>

db.orders.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token variable">$lookup</span><span class="token builtin class-name">:</span>
         <span class="token punctuation">{</span>
           from: <span class="token string">&quot;warehouses&quot;</span>,
           <span class="token comment"># \u53D8\u91CF : \u8868\u8FBE\u5F0F(\u5F53\u524D\u8868\u5B57\u6BB5)</span>
           let: <span class="token punctuation">{</span> order_item: <span class="token string">&quot;<span class="token variable">$item</span>&quot;</span>, order_qty: <span class="token string">&quot;<span class="token variable">$ordered</span>&quot;</span> <span class="token punctuation">}</span>,
           pipeline: <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token variable">$match</span><span class="token builtin class-name">:</span>
                 <span class="token punctuation">{</span> <span class="token variable">$expr</span><span class="token builtin class-name">:</span>
                    <span class="token punctuation">{</span> <span class="token variable">$and</span><span class="token builtin class-name">:</span>
                       <span class="token punctuation">[</span><span class="token comment"># \u5173\u8054\u8868\u5B57\u6BB5, $$let \u53D8\u91CF</span>
                         <span class="token punctuation">{</span> <span class="token variable">$eq</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$stock_item</span>&quot;</span>,  <span class="token string">&quot;<span class="token variable">$$</span>order_item&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>,
                         <span class="token punctuation">{</span> <span class="token variable">$gte</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$instock</span>&quot;</span>, <span class="token string">&quot;<span class="token variable">$$</span>order_qty&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
                       <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>,
              <span class="token punctuation">{</span> <span class="token variable">$project</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> stock_item: <span class="token number">0</span>, _id: <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
           <span class="token punctuation">]</span>,
           as: <span class="token string">&quot;stockdata&quot;</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>`,10);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};

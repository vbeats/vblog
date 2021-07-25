import{o as e,c as a,d as o}from"./app.11603a1f.js";const t='{"title":"Kafka 💥","description":"","frontmatter":{},"headers":[{"level":2,"title":"Topic","slug":"topic"},{"level":2,"title":"Consumer","slug":"consumer"},{"level":2,"title":"配置","slug":"配置"},{"level":2,"title":"数据可靠性","slug":"数据可靠性"},{"level":3,"title":"一致性","slug":"一致性"},{"level":2,"title":"命令","slug":"命令"},{"level":2,"title":"ACK","slug":"ack"},{"level":3,"title":"幂等性","slug":"幂等性"},{"level":2,"title":"Java Api","slug":"java-api"},{"level":2,"title":"Stream 流式处理","slug":"stream-流式处理"}],"relativePath":"language/kafka.md","lastUpdated":1627216648963}',l={},r=o('<h1 id="kafka-💥"><a class="header-anchor" href="#kafka-💥" aria-hidden="true">#</a> Kafka 💥</h1><blockquote><p>基于发布/订阅模式</p></blockquote><p>旧版本 Zookeeper 有存消息消费位置 新版本直接存储到 kafaka 集群中 消息保存根据 Topic 归类, producer 与 consumer, 集群中每个 kafka 实例称为 broker, 整个集群与 consumer 依赖 zookeeper, kafka 只支持 consumer poll 轮询获取消息.</p><h2 id="topic"><a class="header-anchor" href="#topic" aria-hidden="true">#</a> Topic</h2><p>分区 数据存储, topic 下包含 <code>leader</code> 与 <code>follower</code>, 一个 topic 实际就是一个文件目录</p><h2 id="consumer"><a class="header-anchor" href="#consumer" aria-hidden="true">#</a> Consumer</h2><p>同一个组下的 consumer 不能消费同一个分区的数据</p><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>broker 集群:</p><p>server.properties</p><div class="language-properties"><pre><code><span class="token comment">#设置唯一的id</span>\n<span class="token attr-name">broker.id</span><span class="token punctuation">=</span><span class="token attr-value">0</span>\n<span class="token comment">#允许删除</span>\n<span class="token attr-name">delete.topic.enable</span><span class="token punctuation">=</span><span class="token attr-value">true</span>\n\n<span class="token comment">#logs目录  不只日志  数据也存在这里</span>\n<span class="token attr-name">log.dirs</span><span class="token punctuation">=</span><span class="token attr-value">....</span>\n\n<span class="token comment">#zookeeper</span>\n<span class="token attr-name">zookeeper.connect</span><span class="token punctuation">=</span><span class="token attr-value">xxxx:2181,xxxx:2181</span>\n</code></pre></div><h2 id="数据可靠性"><a class="header-anchor" href="#数据可靠性" aria-hidden="true">#</a> 数据可靠性</h2><blockquote><p>生产者发送消息, 全部分区都要同步成功 返回成功 ACK, 生产者继续发</p></blockquote><blockquote><p>leader—&gt;follower 同步节点慢的或者挂了的剔出同步</p></blockquote><blockquote><p>某些不重要的数据, 不需要完全同步成功</p></blockquote><h3 id="一致性"><a class="header-anchor" href="#一致性" aria-hidden="true">#</a> 一致性</h3><p>数据不一致, 消费者可见 offset: 所有节点都有的数据最小的 log end offset 重新选举 leader 时, 不同副本不一致的数据(&gt;log end offset)的数据丢弃</p><h2 id="命令"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><ol><li>插入 topic :</li></ol><blockquote><p>bin/kafka-topics.sh --create --zookeeper xxx:2181 --partitions 2 --replication-factor 3 --topic test</p></blockquote><p>2 个分区 3 个副本, 每个分区实际创建了一个文件目录. 副本数不能大于 zookeeper 集群上注册的 broker 数量</p><ol start="2"><li>查询 topic:</li></ol><blockquote><p>bin/kafka-topics.sh --list --zookeeper xxxx:2181</p></blockquote><ol start="3"><li>producer 发送消息:</li></ol><blockquote><p>bin/kafka-console-producer.sh --broker-list xxxx:9092 --topic test</p></blockquote><ol start="4"><li>consumer 消费消息:</li></ol><blockquote><p>bin/kafka-console-consumer.sh --zookeeper xxx:2181 --topic test [–from-beginning] (新版本消费端消息的 offset 直接维护在 broker 中, 不走 zookeeper)</p></blockquote><blockquote><p>bin/kafka-console-consumer.sh --bootstrap-server xxx:9092 --topic test [–from-beginning]</p></blockquote><h2 id="ack"><a class="header-anchor" href="#ack" aria-hidden="true">#</a> ACK</h2><ol><li>0: 不停的发,无需 ack</li><li>1: leader 确认以后继续发</li><li>all(-1): leader 与所有的 consumer 应答确认后继续发</li></ol><blockquote><p>要么重复 要么丢数据</p></blockquote><h3 id="幂等性"><a class="header-anchor" href="#幂等性" aria-hidden="true">#</a> 幂等性</h3><p>去重 <code>enbale.idompotence=true</code> ack 默认为 all(-1)</p><h2 id="java-api"><a class="header-anchor" href="#java-api" aria-hidden="true">#</a> Java Api</h2><ol><li>KafkaProducer, KafkaConsumer</li><li>SimpleConsumer—&gt;遍历, 获取某个 topic,某个分区的 leader–&gt;通过 leader host ,构造 SimpleConsumer 获取数据</li></ol><h2 id="stream-流式处理"><a class="header-anchor" href="#stream-流式处理" aria-hidden="true">#</a> Stream 流式处理</h2><p>弱鸡</p>',37);l.render=function(o,t,l,s,n,p){return e(),a("div",null,[r])};export default l;export{t as __pageData};

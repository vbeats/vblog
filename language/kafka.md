# Kafka 💥

> 基于发布/订阅模式

旧版本 Zookeeper 有存消息消费位置 新版本直接存储到 kafaka 集群中
消息保存根据 Topic 归类, producer 与 consumer, 集群中每个 kafka 实例称为 broker, 整个集群与 consumer 依赖 zookeeper, kafka 只支持 consumer poll 轮询获取消息.

## Topic

分区 数据存储, topic 下包含 `leader` 与 `follower`, 一个 topic 实际就是一个文件目录

## Consumer

同一个组下的 consumer 不能消费同一个分区的数据

## 配置

broker 集群:

server.properties

```properties
#设置唯一的id
broker.id=0
#允许删除
delete.topic.enable=true

#logs目录  不只日志  数据也存在这里
log.dirs=....

#zookeeper
zookeeper.connect=xxxx:2181,xxxx:2181
```

## 数据可靠性

> 生产者发送消息, 全部分区都要同步成功 返回成功 ACK, 生产者继续发

> leader--->follower 同步节点慢的或者挂了的剔出同步

> 某些不重要的数据, 不需要完全同步成功

### 一致性

数据不一致, 消费者可见 offset: 所有节点都有的数据最小的 log end offset
重新选举 leader 时, 不同副本不一致的数据(>log end offset)的数据丢弃

## 命令

1. 插入 topic :

> bin/kafka-topics.sh --create --zookeeper xxx:2181 --partitions 2 --replication-factor 3 --topic test

2 个分区 3 个副本, 每个分区实际创建了一个文件目录. 副本数不能大于 zookeeper 集群上注册的 broker 数量

2. 查询 topic:

> bin/kafka-topics.sh --list --zookeeper xxxx:2181

3. producer 发送消息:

> bin/kafka-console-producer.sh --broker-list xxxx:9092 --topic test

4. consumer 消费消息:

> bin/kafka-console-consumer.sh --zookeeper xxx:2181 --topic test [--from-beginning] (新版本消费端消息的 offset 直接维护在 broker 中, 不走 zookeeper)

> bin/kafka-console-consumer.sh --bootstrap-server xxx:9092 --topic test [--from-beginning]

## ACK

1. 0: 不停的发,无需 ack
2. 1: leader 确认以后继续发
3. all(-1): leader 与所有的 consumer 应答确认后继续发

> 要么重复 要么丢数据

### 幂等性

去重 <code>enbale.idompotence=true</code> ack 默认为 all(-1)

## Java Api

1. KafkaProducer, KafkaConsumer
2. SimpleConsumer--->遍历, 获取某个 topic,某个分区的 leader-->通过 leader host ,构造 SimpleConsumer 获取数据

## Stream 流式处理

弱鸡

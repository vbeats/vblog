# Kafka ð¥

> åºäºåå¸/è®¢éæ¨¡å¼

æ§çæ¬ Zookeeper æå­æ¶æ¯æ¶è´¹ä½ç½® æ°çæ¬ç´æ¥å­å¨å° kafaka éç¾¤ä¸­
æ¶æ¯ä¿å­æ ¹æ® Topic å½ç±», producer ä¸ consumer, éç¾¤ä¸­æ¯ä¸ª kafka å®ä¾ç§°ä¸º broker, æ´ä¸ªéç¾¤ä¸ consumer ä¾èµ zookeeper, kafka åªæ¯æ consumer poll è½®è¯¢è·åæ¶æ¯.

## Topic

ååº æ°æ®å­å¨, topic ä¸åå« `leader` ä¸ `follower`, ä¸ä¸ª topic å®éå°±æ¯ä¸ä¸ªæä»¶ç®å½

## Consumer

åä¸ä¸ªç»ä¸ç consumer ä¸è½æ¶è´¹åä¸ä¸ªååºçæ°æ®

## éç½®

broker éç¾¤:

server.properties

```properties
#è®¾ç½®å¯ä¸çid
broker.id=0
#åè®¸å é¤
delete.topic.enable=true

#logsç®å½  ä¸åªæ¥å¿  æ°æ®ä¹å­å¨è¿é
log.dirs=....

#zookeeper
zookeeper.connect=xxxx:2181,xxxx:2181
```

## æ°æ®å¯é æ§

> çäº§èåéæ¶æ¯, å¨é¨ååºé½è¦åæ­¥æå è¿åæå ACK, çäº§èç»§ç»­å

> leader--->follower åæ­¥èç¹æ¢çæèæäºçååºåæ­¥

> æäºä¸éè¦çæ°æ®, ä¸éè¦å®å¨åæ­¥æå

## ä¸è´æ§

æ°æ®ä¸ä¸è´, æ¶è´¹èå¯è§ offset: ææèç¹é½æçæ°æ®æå°ç log end offset
éæ°éä¸¾ leader æ¶, ä¸åå¯æ¬ä¸ä¸è´çæ°æ®(>log end offset)çæ°æ®ä¸¢å¼

## å½ä»¤

1. æå¥ topic :

> bin/kafka-topics.sh --create --zookeeper xxx:2181 --partitions 2 --replication-factor 3 --topic test

2 ä¸ªååº 3 ä¸ªå¯æ¬, æ¯ä¸ªååºå®éåå»ºäºä¸ä¸ªæä»¶ç®å½. å¯æ¬æ°ä¸è½å¤§äº zookeeper éç¾¤ä¸æ³¨åç broker æ°é

2. æ¥è¯¢ topic:

> bin/kafka-topics.sh --list --zookeeper xxxx:2181

3. producer åéæ¶æ¯:

> bin/kafka-console-producer.sh --broker-list xxxx:9092 --topic test

4. consumer æ¶è´¹æ¶æ¯:

> bin/kafka-console-consumer.sh --zookeeper xxx:2181 --topic test [--from-beginning] (æ°çæ¬æ¶è´¹ç«¯æ¶æ¯ç offset ç´æ¥ç»´æ¤å¨ broker ä¸­, ä¸èµ° zookeeper)

> bin/kafka-console-consumer.sh --bootstrap-server xxx:9092 --topic test [--from-beginning]

## ACK

1. 0: ä¸åçå,æ é ack
2. 1: leader ç¡®è®¤ä»¥åç»§ç»­å
3. all(-1): leader ä¸ææç consumer åºç­ç¡®è®¤åç»§ç»­å

> è¦ä¹éå¤ è¦ä¹ä¸¢æ°æ®

## å¹ç­æ§

å»é <code>enbale.idompotence=true</code> ack é»è®¤ä¸º all(-1)

## Java Api

1. KafkaProducer, KafkaConsumer
2. SimpleConsumer--->éå, è·åæä¸ª topic,æä¸ªååºç leader-->éè¿ leader host ,æé  SimpleConsumer è·åæ°æ®

## Stream æµå¼å¤ç

å¼±é¸¡

# RocketMQ 🚀

支持 push pull 消费,本质都是消费者拉取消息

broker 初始会创建多个队列, producer 发送的消息只在每个队列内部有序

广播模式: consumer 需要指定消费模式为广播模式

```properties
# nameServer地址，这里nameserver是单台，如果nameserver是多台集群的话，就用分号分割（即namesrvAddr=ip1:port1;ip2:port2;ip3:port3）
namesrvAddr=xxxx:9876;xxxxx:9876
# 所属集群名字
brokerClusterName=rocketmq-cluster
# broker名字，注意此处不同的配置文件填写的不一样  例如：在a.properties 文件中写 broker-a  在b.properties 文件中写 broker-b
brokerName=broker-a
# 0 表示 Master，>0 表示 Slave
brokerId=0
# 删除文件时间点，默认凌晨 4点
deleteWhen=04
# 文件保留时间，默认 48 小时
fileReservedTime=48
# Broker 的角色: ASYNC_MASTER 异步复制Master ; SYNC_MASTER 同步双写Master; SLAVE
brokerRole=ASYNC_MASTER
# 刷盘方式 ASYNC_FLUSH 异步刷盘; SYNC_FLUSH 同步刷盘
flushDiskType=ASYNC_FLUSH
# Broker 对外服务的监听端口
listenPort=10911
# 存储路径
storePathRootDir=/app/custom/data/rocketmq/store-a


# 在发送消息时，自动创建服务器不存在的topic，默认创建的队列数。由于是4个broker节点，所以设置为4
# defaultTopicQueueNums=4
# 是否允许 Broker 自动创建Topic，建议线下开启，线上关闭
autoCreateTopicEnable=true
# 是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭
autoCreateSubscriptionGroup=true
# commitLog每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824
# ConsumeQueue每个文件默认存30W条，根据业务情况调整
mapedFileSizeConsumeQueue=300000
# destroyMapedFileIntervalForcibly=120000
# redeleteHangedFileInterval=120000
# 检测物理文件磁盘空间
diskMaxUsedSpaceRatio=88
# commitLog 存储路径
#storePathCommitLog=/data/rocketmq/store/commitlog
# 消费队列存储路径存储路径
#storePathConsumeQueue=/data/rocketmq/store/consumequeue
# 消息索引存储路径
#storePathIndex=/data/rocketmq/store/index
# checkpoint 文件存储路径
#storeCheckpoint=/data/rocketmq/store/checkpoint
# abort 文件存储路径
#abortFile=/data/rocketmq/store/abort
# 限制的消息大小
maxMessageSize=65536
#flushCommitLogLeastPages=4
#flushConsumeQueueLeastPages=2
#flushCommitLogThoroughInterval=10000
#flushConsumeQueueThoroughInterval=60000

# 发消息线程池数量
#sendMessageThreadPoolNums=128
# 拉消息线程池数量
#pullMessageThreadPoolNums=128
```

# Hadoop 基础

::: tip
基础结构
:::

## NameNode

> 存储文件元数据, 索引信息

## DataNode

> 文件数据&数据块校验信息

## Secondary NameNode

> 监控 HDFS 状态的后台进程

## Yarn

> 资源调度

1. resource manager: 接收客户端请求, 监控 node manager, 启动&监控 app master, 资源分配&调度
2. node manager: 管理单节点资源, 处理 resource manger&app master 的命令
3. app master: 切分数据, 申请资源&分配给内部的任务, 任务监控
4. container: 容器, 抽象的资源概念, 封装了节点上的资源信息(内存,cpu.....)

## Map Reduce

> map: 并行处理数据 reduce: 汇总 map 处理的数据

::: tip
集群配置
:::

> hdfs: name node 与 secondary namenode yarn: resourcemanger 都比较耗内存, 分在不同机器放
> namenode : hadoop1 ,secondary namenode: hadoop3 , resourcemanager: hadoop2
> 集群启动, workers 配置文件指定所有主机的 hostname
> 第一次启动注意先格式化 namanode 所在节点, start-all.sh 应当在 resourcemanager 上启动整个集群

## core-site.xml

> namenode 信息

```xml
<configuration>
  <!-- name node -->
  <property>
    <name>fs.defaultFS</name>
    <value>hdfs://hadoop1:9000</value>
  </property>
  <property>
    <name>hadoop.tmp.dir</name>
    <value>/home/battery/hadoop/tmp</value>
  </property>
  <!-- web操作默认用户 -->
  <property>
    <name>hadoop.http.staticuser.user</name>
    <value>battery</value>
  </property>
</configuration>
```

## hadoop-env.sh ?? 没必要

> 指定 JAVA_HOME

## hdfs-site.xml

> 数据副本数, 默认 3

```xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>3</value>
    </property>
    <!-- secondary namenode -->
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>hadoop3:9868</value>
    </property>
</configuration>
```

::: tip
启动 HDFS
:::

## 格式化 name node

> 只在第一次启动格式化, namenode 与 datanode clusterId 需要保持一致

```bash
hdfs namenode -format
```

## 启动 name node

> hadoop-daemon.sh start namenode (旧)
> hdfs --daemon start namenode (新)

## 启动 data node

> hadoop-daemon.sh start datanode (旧)
> hdfs --daemon start datanode (新)

或者:

```bash
start-dfs.sh  # Start NameNode daemon and DataNode daemon
# 输出:
# Starting namenodes on [hadoop1]
# Starting datanodes

```

## web: 9870

> 不同版本, web 端口不一定相同

## hdfs

> 默认文件 block size 128M

```bash
hdfs dfs -[command] # hdfs dfs -mkdir /data

(新) hadoop fs [-command]

# 上传本地文件到hdfs
hdfs dfs -put local-file-path hdfs-path
```

::: tip
启动 YARN
:::

## yarn-env.sh ?? 没必要

> 指定 JAVA_HOME

## yarn-site.xml

> reduce 获取数据的方式

```xml
<configuration>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
    <property>
        <name>yarn.nodemanager.env-whitelist</name>
        <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>
    </property>
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>hadoop2</value>
  </property>
  <!-- 日志 -->
  <property>
    <name>yarn.log-aggregation-enable</name>
    <value>true</value>
  </property>
  <!-- 7天 -->
  <property>
    <name>yarn.log-aggregation.retain-seconds</name>
    <value>604800</value>
  </property>
</configuration>
```

## mapred-env.sh ?? 没必要

> 指定 JAVA_HOME

## mapred-site.xml

> mapreduced 相关配置

> mr-jobhistory-daemon.sh start historyserver (旧)
> mapred --daemon start historyserver (新)

```xml
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
    <property>
        <name>mapreduce.application.classpath</name>
        <value>$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/*:$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/lib/*</value>
    </property>
    <!-- history -->
    <property>
        <name>mapreduce.joshistory.address</name>
        <value>hadoop1:10020</value>
    </property>
    <property>
        <name>mapreduce.joshistory.webapp.address</name>
        <value>hadoop1:19888</value>
    </property>
</configuration>
```

## 启动 resource manager

> yarn-daemon.sh start resourcemanager (旧)
> yarn --daemon start resourcemanager (新)

## 启动 node manager

> yarn-daemon.sh start nodemanager (旧)
> yarn --daemon start nodemanager (新)

或者:

```bash
start-yarn.sh  # Start ResourceManager daemon and NodeManager daemon
# 输出:
# Starting resourcemanager
# Starting nodemanagers


```

## web: 8088

> 端口可能有变化

## wordcount

```shell
hadoop jar hadoop/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.2.1.jar wordcount /data/release /data/output
2020-06-17 14:41:59,752 INFO client.RMProxy: Connecting to ResourceManager at hadoop1/192.168.221.90:8032
2020-06-17 14:42:00,223 INFO mapreduce.JobResourceUploader: Disabling Erasure Coding for path: /tmp/hadoop-yarn/staging/battery/.staging/job_1592404527237_0001
2020-06-17 14:42:00,304 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted = false, remoteHostTrusted = false
2020-06-17 14:42:00,390 INFO input.FileInputFormat: Total input files to process : 1
2020-06-17 14:42:00,423 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted = false, remoteHostTrusted = false
2020-06-17 14:42:00,451 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted = false, remoteHostTrusted = false
2020-06-17 14:42:00,460 INFO mapreduce.JobSubmitter: number of splits:1
2020-06-17 14:42:00,594 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted = false, remoteHostTrusted = false
2020-06-17 14:42:00,612 INFO mapreduce.JobSubmitter: Submitting tokens for job: job_1592404527237_0001
2020-06-17 14:42:00,612 INFO mapreduce.JobSubmitter: Executing with tokens: []
2020-06-17 14:42:00,799 INFO conf.Configuration: resource-types.xml not found
2020-06-17 14:42:00,799 INFO resource.ResourceUtils: Unable to find 'resource-types.xml'.
2020-06-17 14:42:01,014 INFO impl.YarnClientImpl: Submitted application application_1592404527237_0001
2020-06-17 14:42:01,091 INFO mapreduce.Job: The url to track the job: http://hadoop1:8088/proxy/application_1592404527237_0001/
2020-06-17 14:42:01,092 INFO mapreduce.Job: Running job: job_1592404527237_0001
2020-06-17 14:42:09,358 INFO mapreduce.Job: Job job_1592404527237_0001 running in uber mode : false
2020-06-17 14:42:09,381 INFO mapreduce.Job:  map 0% reduce 0%
2020-06-17 14:42:13,513 INFO mapreduce.Job:  map 100% reduce 0%
2020-06-17 14:42:18,557 INFO mapreduce.Job:  map 100% reduce 100%
2020-06-17 14:42:18,565 INFO mapreduce.Job: Job job_1592404527237_0001 completed successfully
2020-06-17 14:42:19,223 INFO mapreduce.Job: Counters: 54
        File System Counters
                FILE: Number of bytes read=550
                FILE: Number of bytes written=452543
                FILE: Number of read operations=0
                FILE: Number of large read operations=0
                FILE: Number of write operations=0
                HDFS: Number of bytes read=521
                HDFS: Number of bytes written=464
                HDFS: Number of read operations=8
                HDFS: Number of large read operations=0
                HDFS: Number of write operations=2
                HDFS: Number of bytes read erasure-coded=0
        Job Counters
                Launched map tasks=1
                Launched reduce tasks=1
                Data-local map tasks=1
                Total time spent by all maps in occupied slots (ms)=2471
                Total time spent by all reduces in occupied slots (ms)=2107
                Total time spent by all map tasks (ms)=2471
                Total time spent by all reduce tasks (ms)=2107
                Total vcore-milliseconds taken by all map tasks=2471
                Total vcore-milliseconds taken by all reduce tasks=2107
                Total megabyte-milliseconds taken by all map tasks=2530304
                Total megabyte-milliseconds taken by all reduce tasks=2157568
        Map-Reduce Framework
                Map input records=6
                Map output records=20
                Map output bytes=504
                Map output materialized bytes=550
                Input split bytes=97
                Combine input records=20
                Combine output records=20
                Reduce input groups=20
                Reduce shuffle bytes=550
                Reduce input records=20
                Reduce output records=20
                Spilled Records=40
                Shuffled Maps =1
                Failed Shuffles=0
                Merged Map outputs=1
                GC time elapsed (ms)=84
                CPU time spent (ms)=900
                Physical memory (bytes) snapshot=451174400
                Virtual memory (bytes) snapshot=5198319616
                Total committed heap usage (bytes)=301989888
                Peak Map Physical memory (bytes)=270835712
                Peak Map Virtual memory (bytes)=2596036608
                Peak Reduce Physical memory (bytes)=180338688
                Peak Reduce Virtual memory (bytes)=2602283008
        Shuffle Errors
                BAD_ID=0
                CONNECTION=0
                IO_ERROR=0
                WRONG_LENGTH=0
                WRONG_MAP=0
                WRONG_REDUCE=0
        File Input Format Counters
                Bytes Read=424
        File Output Format Counters
                Bytes Written=464

```

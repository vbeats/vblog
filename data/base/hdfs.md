# HDFS

> 分布式文件系统, 文件数据只追加,不修改

## Name Node

1. 默认数据块大小 128M df.blocksize
2. data 元数据, 内存存储, 磁盘 FsImage 备份
3. 内存数据更新, Edits 磁盘文件不断追加操作
4. data 数据校验和
5. 维护 data node 的心跳检查

## Data Node

1. 集群启动后, data node 间隔上报数据块信息
2. 小文件归档, 还是独立的文件, 对于 name node 封装成一个整体

## Client

> 切分数据, 与 namenode&datanode 交互

## Secondary NameNode

1. 监控 hdfs 运行状态, 辅助恢复 name node, 定期合并 FsImage 和 Edits & 更新内存中的 NameNode 数据
2. checkpoint 默认 1 小时, txns 次数检查(合并 fsimage&edits)

## 回收站

> core-site.xml

1. fs.trash.interval 0 禁用, 其他值: 存活时间(minutes)
2. fs.trash.checkpoint.interval 检查时间间隔

## 命令

> hadoop fs or hdfs dfs, dfs 是 fs 的实现类

> hadoop distcp hdfs://.... hdfs://... 集群间数据拷贝

> hadoop archive -archiveName xxx.har -p /data/.... /dest/... 归档文件

> hadoop fs -ls -R har:///dest/...

## Java

> 通过 FileSystem 操作 HDFS

```java
        Configuration cfg = new Configuration();

        FileSystem fs = FileSystem.get(URI.create("hdfs://hadoop1:9000"), cfg, "battery");
        //boolean mkdirs = fs.mkdirs(new Path("/data"));
        fs.delete(new Path("/data"), true);

        fs.close();
```

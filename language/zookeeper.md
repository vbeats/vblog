# Zookeeper

节点配置, 服务注册 发现, 调度, 分布式服务治理......

观察者模式, zookeeper 存储的数据变化, 通知已注册的节点

## 集群

一主多从,半数存活就能正常服务
每个 server 数据一致
客户端请求顺序执行
数据更新原子性
实时性

## 投票机制

每个节点自己投自己, 投自己选不出 master 的话, 就把票投给 id 值大的节点

## 节点类型

持久/短暂

## 集群配置

zookeeper data 目录下新建 `myid` 文件, 里边放 id 值: 1,2,3...., 不同节点不要重复

zoo.cfg 增加节点配置

```bash
dataDir=/data
dataLogDir=/datalog
server.1=xxxx:2888:3888
server.2=xxxx:2888:3888
.......
```

格式:

> server.id=ip:数据通信端口号:投票通信端口号

## 客户端

命令:

```bash
ls: 查看节点内容
ls2: 详细内容
ls /test watch: 监听/test节点路径变化
create /test "ttttt": 创建节点并设置内容
create -e /test/mm "mmmm": 创建短暂节点, zookeeper重启就没了
create -s /test/nn "nnn": nn00002...., 带序号自增
get /test: 从节点/test取值
set /test "xxxx": 设置值
get /test watch: 监听节点值变化
delete /test: 删除节点
rmr /test: 递归删除
```

## stat 结构体

```bash
czxid: 创建节点的事务zxid(时间戳)
ctime-znode: 创建时间戳
mzxid-znode: 最后更新的事务zxid
dataLength-znode: 数据长度
numChildren-znode: 子节点数量
.....
```

## 监听器

1. 主线程中创建 zookeeper 客户端, 客户端创建两个线程负责网络连接通信 connect 与监听 listener
2. connect 线程把注册的监听事件发送给 zookeeper
3. zookeeper 监听器列表中加入 客户端发来的要被监听的事件
4. zookeeper 监听到有数据/路径变化, 向客户端发送通知消息
5. 客户端 listener 收到消息....

## 数据同步

1. 客户端向一个 server 写入数据
2. server 如果不是 master, 就发送给 master
3. master 会把数据广播给所有的客户端
4. 半数以上的 server 写成功后就通知客户端成功了

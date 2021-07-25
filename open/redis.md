# Redis

嘿嘿嘿

## Redis

```bash
redis-cli > info clients
redis-cli > client list
redis-cli > config get timeout

1) "timeout"
2) "0" #0表示不开启空闲清除
设置空闲清理时间

redis-cli > config set timeout 600
```

### 缓存策略:

开启内存限制 `maxmemory bytes`

```bash
noeviction: 不删除策略, 达到最大内存限制时, 如果需要更多内存, 直接返回错误信息。
allkeys-lru: 所有key通用; 优先删除最近最少使用(less recently used ,LRU) 的 key
volatile-lru: 只限于设置了 expire 的部分; 优先删除最近最少使用(less recently used ,LRU) 的 key
allkeys-random: 所有key通用; 随机删除一部分 key
volatile-random: 只限于设置了 expire 的部分; 随机删除一部分 key
volatile-ttl: 只限于设置了 expire 的部分; 优先删除剩余时间(time to live,TTL) 短的key
```

1. RDB: 手动/自动触发,dump 快照方式, save m n: 表示 m 秒之内数据集存在 n 次修改时，自动触发 bgsave
2. AOF: 独立 log 日志记录写操作 always:每次写操作都记录 everysec: 1 秒同步记录一次 no:不同步记录
3. redis 密码配置 requirepass xxx
4. 主从配置 replicaof(slaveof) ip port
5. master 有密码的话 masterauth xxx

> 哨兵配置 sentinel.conf

1. sentinel monitor master_name ip port 票数(1,2....) ------>监听 master, 集群下保证 master_name 一致, 最好每个节点都放一个 sentinel.conf
2. 启动哨兵 redis-sentinel /.....sentinel.conf
3. 有 redis-server 挂掉, 哨兵会重新选择 master

![redis](./images/redis.png)

### redis-cluster

> 集群吊炸天

spring boot 配置哨兵:

```yml
spring:
  redis:
    sentinel:
      master: testmaster
      nodes: 192.168.142.88:26379,192.168.142.89:26379,192.168.142.90:26379
```

### springboot 查询缓存

1. springboot 启动类不要忘记@Enablecaching 注解
2. Controller 查询操作, @Cacheable(cacheNames='',key=''), 查询方法返回的对象要能序列化
3. 更新或者删除缓存@CachePut(cacheNames='',key=''),更新缓存数据
   @CacheEvict(cacheNames = ""),清除缓存
4. key 如果不填,默认为方法的参数. 类上配置@cacheconfig(cacheNames=''),方法上可以省略 cachename 配置
5. key 可以对应方法的参数, condition 缓存的条件, unless 不缓存的条件(#result 代表返回值)

```java
@GetMapping("/list")
@Cacheable(cacheNames="product",key="#id",condition="#id.length>0",unless="#result.getCode()!=200")
public Result list(@RequestParam("id) int id){
    return xxxxx;
}
```

# RabbitMQ

## 注意:

1. 如果不指定 exchange, 默认走 amqp default exchange, ==routing-key==与==queue==名匹配一致投递

## exchange 交换机

1. direct: ==routing-key==必须完全匹配
2. topic: ==routing-key==模糊匹配

> #匹配多个词 \*匹配一个词

3. fanout: ==不处==理 routing-key, exchange 与 queue 直接绑定

## message 消息

1. 可以携带 properties 属性
2. ==mandotary===true, 发送端会监听到路由不到的消息, 即 returnCallback, =false 时, 路由不到的消息会被自动删除
3. 发送端要处理==confirmCallback== ==returnCallback==, 配置里这两项必须设为 true
4.

## 死信队列(特殊的 exchange)

1. 消息被 nack 并且 requeue=false
2. ttl 消息过期
3. 队列达到最大长度

```bash
私信: 就是普通的exchange-->queue绑定

业务queue 添加额外的参数: x-dead-letter-exchange=死信交换机

这样业务queue上未消费的消息就路由到了私信交换机上
```

## 消费者

```java
@Component
public class Consumer {

    @RabbitListener(bindings = @QueueBinding(value = @Queue(name = "test.queue", durable = "true", autoDelete = "true"),
            exchange = @Exchange(name = "test.exchange", durable = "true", autoDelete = "true", type = "topic"),
            key = "test.#"))
    @RabbitHandler
    public void test(Message message, Channel channel) {
        byte[] body = message.getBody();
        System.out.println(new String(body));


    }
}
```

## 监听器

1. simpleMessageListenerContainer

为队列添加监听事件

2. messageListenerAdapter 消息适配器

   处理方法 可以为每个队列指定不同的处理方法

3. messageConvert 消息转化器 java 对象与 message 对象互转

## 高可用

1. 镜像队列 : 配置 1 个 Master, 多个 Slaver

   ```bash
    1. master节点 /var/lib/rabbitmq/.erlang.cookie 拷贝到各个节点
    2. 启动服务 rabbitmq-server -detached
    3. 备用节点停止服务 rabbitmqctl stop_app
    4. 备用节点加入到主节点集群中 rabbitmqctl join_cluster rabbit@xxxx(hosts名)
    5. 备用节点启动 rabbitmqctl start_app
    6. 任意节点设置集群名 rabbitmqctl set_cluster_name xxxx
    7. 查看集群状态 rabbitmqctl cluster_status
    8. 配置镜像队列: rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all}'
   ```

2. haproxy: 负载均衡

## 插件

1. 延时插件`rabbitmq_delayed_message_exchange`
   ```bash
    1. /usr/lib/rabbitmq/lib/rabbitmq_serverxxx/plugins
    2. rabbitmq-plugins enable xxxx
    3. 声明一个x-delayed-type类型的exchange
    4. 发送消息时,消息headers需要指定x-delay=xx毫秒
   ```

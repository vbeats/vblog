# Flink

> 事件驱动 高吞吐 低延迟 时间有序

## DateSet

`离线数据批处理`

```java
public class Demo {
    public static void main(String[] args) throws Exception {
        ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();

        DataSource<String> dataSource = env.readTextFile("D:\\Codes\\flink-demo\\src\\main\\resources\\data.txt");

        AggregateOperator<Tuple2<String, Integer>> operator = dataSource.flatMap(new xx()).groupBy(0).sum(1);
        operator.print();
    }

    private static class xx implements FlatMapFunction<String, Tuple2<String, Integer>> {
        @Override
        public void flatMap(String s, Collector<Tuple2<String, Integer>> collector) throws Exception {
            String[] strings = s.split(" ");

            for (String string : strings) {
                collector.collect(new Tuple2<>(string, 1));
            }
        }
    }
}

// (xx,1)
// (oo,1)
// (uu,1)
// (kk,2)
// (xxx,1)
// (world,2)
// (yy,1)
// (vv,1)
// (hello,4)
```

java 少用`lambda` ,会导致 flink 自动类型推断异常

## DateStream

`流式数据`

```java
       StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
       // env.setParallelism(1);
        DataStreamSource<String> dataSource = env.readTextFile("D:\\Codes\\flink-demo\\src\\main\\resources\\data.txt");

        SingleOutputStreamOperator<Tuple2<String, Integer>> operator = dataSource.flatMap(new xx())
                .keyBy(t -> t.getField(0)).sum(1);
        operator.print();

        env.execute();

// 3> (kk,1)
// 4> (hello,1)
// 1> (xx,1)
// 4> (yy,1)
// 8> (vv,1)
// 8> (xxx,1)
// 3> (uu,1)
// 10> (oo,1)
// 3> (kk,2)
// 7> (world,1)
// 4> (hello,2)
// 7> (world,2)
// 4> (hello,3)
// 4> (hello,4)

```

## job manager

作业管理: 作业图 逻辑数据流图 所有的 jar 资源

向`resource manager`申请资源 check points 检查

## task manager

工作进程(jvm 进程): 分配 `slots` 执行任务

## redource manager

管理 task manager 资源`slots`

## dispatcher

`web ui` 作业/任务管理接口

应用-->dispatcher-->提交给 jobmanager--->向 resource manager 申请资源-->交给 task manager 处理

## Parallelism

`并行度` 并行子任务个数, 不同子任务可以在同一个 slot 执行, 必须是有前后执行顺序的

同时执行的子任务必须分配在不同的 slot

`slot`间内存资源互相隔离

`slotSharingGroup()` 不同组的要分配不同的 slot

## dataflow

source-->transformation-->sink

## 任务链

并行度相同的 one-to-one 合并

## API

`createLocalEnvironment` `createRemoteEnvironment` `getExecutionEnvironment`

- data source : `collection` `file` `csv` `kafka` `socket` .....

  `addSource(new FlinkKafkaConsumer<String>("topic",new SimpleStringSchema(),kafkaProperties))`

- transform: `flatmap` `map` `filter` `keyBy`分组 聚合

  `rich function` : 可以获取到运行上下文

  `max` 与 `maxBy`: max 只更新聚合字段值,其它属性值不变, maxBy 整个对象都会更新

  `reduce`: `T reduce(T v1,T v2)` 前后状态比较

  `SplitStream`: `split` `select` 分割成多个数据流分离处理

  ```java
  SplitStream<People> splitStream = source.map(new MapFunction<String, People>() {
            @Override
            public People map(String value) throws Exception {
                return new Gson().fromJson(value, People.class);
            }
        }).split(new OutputSelector<People>() { // split可以将一个流，通过打Tag的方式，split成多个流
            @Override
            public Iterable<String> select(People value) {
                List<String> list = new ArrayList<>();
                if (value.sex().equals("male")) {
                    list.add("male");
                } else {
                    list.add("female");
                }
                return list;
            }
        });

        // SplitStream流 通过select("tag")获取DataStream流
        DataStream<People> male = splitStream.select("male");
        male.print("male:");

        DataStream<People> female = splitStream.select("female");
        female.print("female:");

  ```

  `Connect` `CoMap`: 合并两个 dataStream, 类型可以不同 `union`可以合并多个数据流,数据类型要相同

  ```java
  ConnectedStreams<Integer, String> connected = first.connect(second);
  CoMapFunction[IN1, IN2, OUT]

  CoFlatMapFunction[IN1, IN2, OUT]

  ```

- sink

  `addSink`: 计算结果输出

## window

无限流数据切割为有限流, 分发到有限大小`bucket`中

`time window`: 滚动`tumbling` 滑动`sliding` 会话`session`:timeout 时间间隙,没有新数据开始新窗口

`count window`: 滚动 滑动

`window size` `slide size` 滑动窗口数据会重叠

使用: `keyBy`-->`timewindow()`-->`聚合` 窗口结束后`state`结果输出

`增量聚合`

`全窗口函数`:`bucket`收集数据,计算的时候再遍历数据 `apply(WindowFunction)`

`triger`: 触发器, 触发 window 关闭 触发结果计算输出

`evitor`: 移除某些数据 `allowedLateness`: 允许延迟时间(窗口延迟关闭)

`sideOutPutLateData`: 迟到数据扔到 side out 另一个数据流

## 时间语义

- event time : 事件创建时间
- ingestion time: 数据进入 flink 的时间
- process time: 处理数据的时间 (默认)

  `env.setStreamTimeCharacteristic(TimeCharacteristic.EventTime)` : 同时指定数据哪个字段代表 `event time`

## watermark

短时间大量乱序数据, 延迟窗口关闭时间

`watermark`是一条特殊的数据记录`StreamElement`

必须单调递增, 与数据的时间戳相关

上游任务向下广播`watermark`时间, 下游任务按最小时间戳推进事件时间

```java
// 提取时间戳   生成watermark
dataStream.assignTimestampsAndWatermarks(new BoundedOutOfOrdernessTimestampExtractor<>(watermark延时时间))
```

## 状态管理

state 不能跨任务读取

- operator state

  `mapFunction` 局部变量

  `implements ListCheckPoint<>` : `snapsotState` `restoreState` 存储/恢复 state 状态

- keyed state

  `richMapFunction`

  声明状态: open 方法内`getRuntimeContent().getState(new ValueStateDescriptor<>("",xxx.class))`

  读取 state: `xxState.value()` 更新 state: `xxState.update(v)`

  其它 state: `listState` `mapState` `reducingState`等聚合 state

- state backends

  本地状态管理 state 存储

  `memory` `fs` `rocksDB`

## process api

`processFunction` `keyedProcessFuction` `coProcessFunction` `processJoinFunction` `broadcastProcessFunction` `processWindowFunction` `keyedBroadcastProcessFunction` `processAllWindowFunction`

`process`注册定时器

## 容错

    `checkpoints` `savepoints`

## table api(sql)

    `StreamTableEnvironment.create(env,settings)`

```java
Table t=tableEnv.fromDataStream(xxx);
t.select("id,name").where("id=10");

// sql
tableEnv.createTemporaryView("xxxx");

Table ts=tableEnv.sqlQuery("select id from xxx where ....");

tableEnv.toAppendStream(ts,Row.class);

// -------------------
tableEnv.connect(...).createTemporaryTable("xxx");


rs.insertInto("xxxTable");
```

`Table`-->`Catalog`-->`database`-->`object`

- 创建表

```java
tableEnv.connect(....)
        .withFormat(....) // 数据格式化/解析
        .wifhSchema(....) //表结构
        .field("id",DataTypes.STRING()).field(...)
        .createTemporaryTable("xxx") // 临时表 输入/输出
```

- 查询

```java
// 聚合
t.groupBy("id").select("id, id.count as count, age.avg as avg");
tableEnv.sqlQuery("select id,count(id) from xxx group by id");
```

- 输出

  外部输出时模式`UpdateMode`:`append` `retract` `upsert`

```java
rs.insertInto("xxxx");

// 聚合类数据需要更新模式 elasticsearch mysql redis支持
```

- table 转 dataStream: 只能`append` `retract`

- 时间

  处理时间: 增加字段`.proctime`

  事件时间: 原有字段`.rowtime`

- window

```java
t.window(xxWindow as "w")  // window别名
    .groupBy("w, id") // 分组要指定window
    .select("id,id.count");


.window(Tumble.over("10.minutes").every("5.minutes").on("rowtime").as("w"));

// 滚动窗口 tumble
// 滑动窗口 hop
// session窗口 session

// -----------over window
t.window(xxOverWindow as "w")
    .select("id,id.count over w");

.window(Over.partitionBy("id").orderBy("proctime").preceding(UNBOUNDED_RANGE/ROW).as("w")) // 无界over window
.window(Over.partitionBy("id").orderBy("proctime").preceding("1.minutes"/"10.rows").as("w")) // 有无界over window
```

- function 函数

  `内置函数`

  `自定义函数`: env 先注册 function

        1. `标量函数scalarFunction` 必须有`public xxx eval()`方法 只输出单个值
        2. `表函数TableFunction` 必须有`public void eval()`方法 可以输出多行
        3. `聚合函数aggregateFunction` 多条输入 分组聚合后输出一个结果 `createAcumulator()` `accumulate()` `getValue()`
        4. `表聚合函数tableAggregateFunction` 聚合输出多行多列结果 `createAcumulator()` `accumulate()` `emitValue()`

## cep

`复杂事件处理`: 输入-->处理(规则匹配)-->输出符合规则的事件

`Pattern`

```java
Pattern.<T>begin("").where().next("").subtype().followedBy().end();
```

- 个体模式

`start.times(2,4).optional`: optional 可选 0 次
`.greedy`尽可能多的重复匹配 `.onemore`一次或多次
`start.timesOrMore(2).optional.greedy`: 0 次 2 次或多次, 尽可能多的匹配
`.consecutive` times严格相邻

条件: `where` `or` `until`

- 模式序列

  必须以`begin`开始

  `notNext`: 某个事件不要近邻前一个事件

  `notFollowedBy`: 某个事件不要在两个事件间发生

  可以指定时间范围 `next.withIn(3s)`

```java
PatternStream ss=CEP.pattern(dataStream,pattern);

// 匹配事件
select()/flatSelect()
```

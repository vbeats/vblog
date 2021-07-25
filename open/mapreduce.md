# MapReduce

> 离线数据处理, 数据源静态, 不适合实时 or 流式计算

## Map

1. 按文件块大小切分数据
2. 并行跑 map task 任务

## Reduce

1. 并行跑 reduce task, 数据依赖上一阶段 map task 的结果

## Code

1. extend Mapper
2. 输入数据是 KV 键值对形式
3. map()方法: 具体的业务逻辑, 每个<K,V>数据只处理一次
4. extend Reduce
5. 输出数据是 KV 键值对形式
6. reduce()方法: 具体的业务逻辑, 每组相同的 K <K,V>只调用一次 reduce()
7. driver: yarn 客户端,提交 job(split 切片/jar/xml 配置信息...) 到 yarn 集群中

::: tip
Mapper
:::

```java
public class TestMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
    private Text k = new Text();
    private IntWritable v = new IntWritable(1);

    @Override
    protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        // 输入
        // xxx sss
        // kkk  lll   mmmm    map默认按行分割 LongWritable key: io读取指针偏移量
        String line = value.toString();
        String[] words = line.split(" ");

        for (String word : words) {
            k.set(word);
            // xxx,1
            // sss,1
            // kkk,1
            context.write(k, v);
        }

    }
}
```

::: tip
Reducer
:::

```java
public class TestReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
    IntWritable v = new IntWritable();

    @Override
    protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
        // xxx,1
        // sss,1
        // kkk,1
        int sum = 0;
        for (IntWritable value : values) {
            sum += value.get();
        }

        v.set(sum);
        context.write(key, v);
    }
}
```

::: tip
Driver
:::

```java
 Configuration conf = new Configuration();

        Job job = Job.getInstance(conf);

        job.setJarByClass(Test.class);

        job.setMapperClass(TestMapper.class);
        job.setReducerClass(TestReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(IntWritable.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        FileInputFormat.setInputPaths(job, new Path(args[0])); // 输入data会进行切割
        FileOutputFormat.setOutputPath(job, new Path(args[1]));

        // 提交job
        job.waitForCompletion(true);
```

## 自定义 Writable

1. extends Writable
2. 必须有无参构造方法
3. write/readFields 字段顺序要一致
4. 重写 toSring()
5. 需要放到 Key 中的必须能排序, 实现 Comparable 接口

## Map Task

数据切片尽量按数据块大小来(128M), 每个切片开启一个 map task

## FileInputFormat

切片, job 提交后 Yarn app master 会根据切片数计算好需要的 map task 数量

## TextInputFormat

> FileInputFormat 默认实现类, 按行读取

1. key : 改行在整个文件中的起始字节偏移量, LongWritable
2. Value: 一行内容, 不包含换行符

## CombineTextInputFormat

小文件过多时, 逻辑上分到一个切片上

```java
job.setInputFormatClass(CombineTextInputFormat.class);

setMaxInputSplitSize(job,size)
```

## KeyValueTextInputFormat

> 按行切割, 每一行按 tab(\t)分割为 key 和 value

## NLineInputFormat

> 按指定行数 N 切片

## 自定义 FileInputFormat

1. extends FileInputFormat
2. 改写 recodrReader, 定义读取文件封装为 k,v 的逻辑, 交给 Mapper/Reducer 处理
3. 使用 SequenceFileOutPutFormat 输出合并文件

## Shuffle

> Mapper 与 Reducer 之间的数据处理过程, 分区 排序 压缩......

1. 分区: 默认按 key 的 (hashcode%reducer task 个数) 分区, 不同分区会输出到不同文件, partition 从 0 开启

```bash
自定义分区:
    1. extneds Partitioner
    2. job.setPartitionerClass
    3. 设置相应数量的reducer task
```

2. 排序: 默认按 key 字典排序

```bash
1. 部分排序: 单个文件内部有序
2. 全排序: reduce只输出一个文件, 对于整个文件排序
3. 二次排序
4. 自定义排序: 自定义对象作为key, 实现WritableComparable接口
```

3. Combiner: 压缩合并

> 继承自 Reducer, 对每个 map task 的输出进行局部汇总, 减少数据传输. 不能改变最终结果(求平均值这种就不适合)

```bash
1. extends Reducer
2. job.setCombinerClass
# 或者直接指定CombinerClass为reducerClass
```

4. GroupingComparator

> 分组排序, 对 map task 输出的 key 进一步排序

```bash
1. extends WritableComparator
2. 无参构造方法调用 super(Bean.class, true), true 为创建 bean 对象, false 对象全为 null
3. 重写 compare 方法
4. job.setGroupingComparatorClass
```

## OutPutFormat

1. TextOutPutFormat 默认按行写
2. SequenceFileOutPutFormat
3. 自定义 OutPutFormat

```bash
1. extends FileOutPutFormat
2. 改写RecordWriter
```

## Join

1. Map 阶段: 不同来源的数据打标签, 连接字段作为 key(比如: id), 其余部分为 value
2. Reduce: 每个分组中不同来源的记录分开, 最后合并

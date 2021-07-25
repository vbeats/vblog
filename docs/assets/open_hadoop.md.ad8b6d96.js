import{o as a,c as n,d as s}from"./app.0c57223d.js";const t='{"title":"Hadoop 基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"NameNode","slug":"namenode"},{"level":2,"title":"DataNode","slug":"datanode"},{"level":2,"title":"Secondary NameNode","slug":"secondary-namenode"},{"level":2,"title":"Yarn","slug":"yarn"},{"level":2,"title":"Map Reduce","slug":"map-reduce"},{"level":2,"title":"core-site.xml","slug":"core-site-xml"},{"level":2,"title":"hadoop-env.sh ?? 没必要","slug":"hadoop-env-sh-没必要"},{"level":2,"title":"hdfs-site.xml","slug":"hdfs-site-xml"},{"level":2,"title":"格式化 name node","slug":"格式化-name-node"},{"level":2,"title":"启动 name node","slug":"启动-name-node"},{"level":2,"title":"启动 data node","slug":"启动-data-node"},{"level":2,"title":"web: 9870","slug":"web-9870"},{"level":2,"title":"hdfs","slug":"hdfs"},{"level":2,"title":"yarn-env.sh ?? 没必要","slug":"yarn-env-sh-没必要"},{"level":2,"title":"yarn-site.xml","slug":"yarn-site-xml"},{"level":2,"title":"mapred-env.sh ?? 没必要","slug":"mapred-env-sh-没必要"},{"level":2,"title":"mapred-site.xml","slug":"mapred-site-xml"},{"level":2,"title":"启动 resource manager","slug":"启动-resource-manager"},{"level":2,"title":"启动 node manager","slug":"启动-node-manager"},{"level":2,"title":"web: 8088","slug":"web-8088"},{"level":2,"title":"wordcount","slug":"wordcount"}],"relativePath":"open/hadoop.md","lastUpdated":1627206634551}',e={},p=s('<h1 id="hadoop-基础"><a class="header-anchor" href="#hadoop-基础" aria-hidden="true">#</a> Hadoop 基础</h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>基础结构</p></div><h2 id="namenode"><a class="header-anchor" href="#namenode" aria-hidden="true">#</a> NameNode</h2><blockquote><p>存储文件元数据, 索引信息</p></blockquote><h2 id="datanode"><a class="header-anchor" href="#datanode" aria-hidden="true">#</a> DataNode</h2><blockquote><p>文件数据&amp;数据块校验信息</p></blockquote><h2 id="secondary-namenode"><a class="header-anchor" href="#secondary-namenode" aria-hidden="true">#</a> Secondary NameNode</h2><blockquote><p>监控 HDFS 状态的后台进程</p></blockquote><h2 id="yarn"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> Yarn</h2><blockquote><p>资源调度</p></blockquote><ol><li>resource manager: 接收客户端请求, 监控 node manager, 启动&amp;监控 app master, 资源分配&amp;调度</li><li>node manager: 管理单节点资源, 处理 resource manger&amp;app master 的命令</li><li>app master: 切分数据, 申请资源&amp;分配给内部的任务, 任务监控</li><li>container: 容器, 抽象的资源概念, 封装了节点上的资源信息(内存,cpu…)</li></ol><h2 id="map-reduce"><a class="header-anchor" href="#map-reduce" aria-hidden="true">#</a> Map Reduce</h2><blockquote><p>map: 并行处理数据 reduce: 汇总 map 处理的数据</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>集群配置</p></div><blockquote><p>hdfs: name node 与 secondary namenode yarn: resourcemanger 都比较耗内存, 分在不同机器放 namenode : hadoop1 ,secondary namenode: hadoop3 , resourcemanager: hadoop2 集群启动, workers 配置文件指定所有主机的 hostname 第一次启动注意先格式化 namanode 所在节点, <a href="http://start-all.sh" target="_blank" rel="noopener noreferrer">start-all.sh</a> 应当在 resourcemanager 上启动整个集群</p></blockquote><h2 id="core-site-xml"><a class="header-anchor" href="#core-site-xml" aria-hidden="true">#</a> core-site.xml</h2><blockquote><p>namenode 信息</p></blockquote><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- name node --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>fs.defaultFS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hdfs://hadoop1:9000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.tmp.dir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>/home/battery/hadoop/tmp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- web操作默认用户 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.http.staticuser.user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>battery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="hadoop-env-sh-没必要"><a class="header-anchor" href="#hadoop-env-sh-没必要" aria-hidden="true">#</a> <a href="http://hadoop-env.sh" target="_blank" rel="noopener noreferrer">hadoop-env.sh</a> ?? 没必要</h2><blockquote><p>指定 JAVA_HOME</p></blockquote><h2 id="hdfs-site-xml"><a class="header-anchor" href="#hdfs-site-xml" aria-hidden="true">#</a> hdfs-site.xml</h2><blockquote><p>数据副本数, 默认 3</p></blockquote><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.replication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- secondary namenode --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.namenode.secondary.http-address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop3:9868<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>启动 HDFS</p></div><h2 id="格式化-name-node"><a class="header-anchor" href="#格式化-name-node" aria-hidden="true">#</a> 格式化 name node</h2><blockquote><p>只在第一次启动格式化, namenode 与 datanode clusterId 需要保持一致</p></blockquote><div class="language-bash"><pre><code>hdfs namenode -format\n</code></pre></div><h2 id="启动-name-node"><a class="header-anchor" href="#启动-name-node" aria-hidden="true">#</a> 启动 name node</h2><blockquote><p><a href="http://hadoop-daemon.sh" target="_blank" rel="noopener noreferrer">hadoop-daemon.sh</a> start namenode (旧) hdfs --daemon start namenode (新)</p></blockquote><h2 id="启动-data-node"><a class="header-anchor" href="#启动-data-node" aria-hidden="true">#</a> 启动 data node</h2><blockquote><p><a href="http://hadoop-daemon.sh" target="_blank" rel="noopener noreferrer">hadoop-daemon.sh</a> start datanode (旧) hdfs --daemon start datanode (新)</p></blockquote><p>或者:</p><div class="language-bash"><pre><code>start-dfs.sh  <span class="token comment"># Start NameNode daemon and DataNode daemon</span>\n<span class="token comment"># 输出:</span>\n<span class="token comment"># Starting namenodes on [hadoop1]</span>\n<span class="token comment"># Starting datanodes</span>\n\n</code></pre></div><h2 id="web-9870"><a class="header-anchor" href="#web-9870" aria-hidden="true">#</a> web: 9870</h2><blockquote><p>不同版本, web 端口不一定相同</p></blockquote><h2 id="hdfs"><a class="header-anchor" href="#hdfs" aria-hidden="true">#</a> hdfs</h2><blockquote><p>默认文件 block size 128M</p></blockquote><div class="language-bash"><pre><code>hdfs dfs -<span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token comment"># hdfs dfs -mkdir /data</span>\n\n<span class="token punctuation">(</span>新<span class="token punctuation">)</span> hadoop fs <span class="token punctuation">[</span>-command<span class="token punctuation">]</span>\n\n<span class="token comment"># 上传本地文件到hdfs</span>\nhdfs dfs -put local-file-path hdfs-path\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>启动 YARN</p></div><h2 id="yarn-env-sh-没必要"><a class="header-anchor" href="#yarn-env-sh-没必要" aria-hidden="true">#</a> <a href="http://yarn-env.sh" target="_blank" rel="noopener noreferrer">yarn-env.sh</a> ?? 没必要</h2><blockquote><p>指定 JAVA_HOME</p></blockquote><h2 id="yarn-site-xml"><a class="header-anchor" href="#yarn-site-xml" aria-hidden="true">#</a> yarn-site.xml</h2><blockquote><p>reduce 获取数据的方式</p></blockquote><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.nodemanager.aux-services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>mapreduce_shuffle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.nodemanager.env-whitelist<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.resourcemanager.hostname<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 日志 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.log-aggregation-enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 7天 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.log-aggregation.retain-seconds<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>604800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="mapred-env-sh-没必要"><a class="header-anchor" href="#mapred-env-sh-没必要" aria-hidden="true">#</a> <a href="http://mapred-env.sh" target="_blank" rel="noopener noreferrer">mapred-env.sh</a> ?? 没必要</h2><blockquote><p>指定 JAVA_HOME</p></blockquote><h2 id="mapred-site-xml"><a class="header-anchor" href="#mapred-site-xml" aria-hidden="true">#</a> mapred-site.xml</h2><blockquote><p>mapreduced 相关配置</p></blockquote><blockquote><p><a href="http://mr-jobhistory-daemon.sh" target="_blank" rel="noopener noreferrer">mr-jobhistory-daemon.sh</a> start historyserver (旧) mapred --daemon start historyserver (新)</p></blockquote><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.framework.name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>yarn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.application.classpath<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/*:$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/lib/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- history --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.joshistory.address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop1:10020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.joshistory.webapp.address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop1:19888<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="启动-resource-manager"><a class="header-anchor" href="#启动-resource-manager" aria-hidden="true">#</a> 启动 resource manager</h2><blockquote><p><a href="http://yarn-daemon.sh" target="_blank" rel="noopener noreferrer">yarn-daemon.sh</a> start resourcemanager (旧) yarn --daemon start resourcemanager (新)</p></blockquote><h2 id="启动-node-manager"><a class="header-anchor" href="#启动-node-manager" aria-hidden="true">#</a> 启动 node manager</h2><blockquote><p><a href="http://yarn-daemon.sh" target="_blank" rel="noopener noreferrer">yarn-daemon.sh</a> start nodemanager (旧) yarn --daemon start nodemanager (新)</p></blockquote><p>或者:</p><div class="language-bash"><pre><code>start-yarn.sh  <span class="token comment"># Start ResourceManager daemon and NodeManager daemon</span>\n<span class="token comment"># 输出:</span>\n<span class="token comment"># Starting resourcemanager</span>\n<span class="token comment"># Starting nodemanagers</span>\n\n\n</code></pre></div><h2 id="web-8088"><a class="header-anchor" href="#web-8088" aria-hidden="true">#</a> web: 8088</h2><blockquote><p>端口可能有变化</p></blockquote><h2 id="wordcount"><a class="header-anchor" href="#wordcount" aria-hidden="true">#</a> wordcount</h2><div class="language-shell"><pre><code>hadoop jar hadoop/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.2.1.jar wordcount /data/release /data/output\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:41:59,752 INFO client.RMProxy: Connecting to ResourceManager at hadoop1/192.168.221.90:8032\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,223 INFO mapreduce.JobResourceUploader: Disabling Erasure Coding <span class="token keyword">for</span> path: /tmp/hadoop-yarn/staging/battery/.staging/job_1592404527237_0001\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,304 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted <span class="token operator">=</span> false, remoteHostTrusted <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,390 INFO input.FileInputFormat: Total input files to process <span class="token builtin class-name">:</span> <span class="token number">1</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,423 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted <span class="token operator">=</span> false, remoteHostTrusted <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,451 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted <span class="token operator">=</span> false, remoteHostTrusted <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,460 INFO mapreduce.JobSubmitter: number of splits:1\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,594 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted <span class="token operator">=</span> false, remoteHostTrusted <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,612 INFO mapreduce.JobSubmitter: Submitting tokens <span class="token keyword">for</span> job: job_1592404527237_0001\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,612 INFO mapreduce.JobSubmitter: Executing with tokens: <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,799 INFO conf.Configuration: resource-types.xml not found\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:00,799 INFO resource.ResourceUtils: Unable to <span class="token function">find</span> <span class="token string">&#39;resource-types.xml&#39;</span><span class="token builtin class-name">.</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:01,014 INFO impl.YarnClientImpl: Submitted application application_1592404527237_0001\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:01,091 INFO mapreduce.Job: The url to track the job: http://hadoop1:8088/proxy/application_1592404527237_0001/\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:01,092 INFO mapreduce.Job: Running job: job_1592404527237_0001\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:09,358 INFO mapreduce.Job: Job job_1592404527237_0001 running <span class="token keyword">in</span> uber mode <span class="token builtin class-name">:</span> <span class="token boolean">false</span>\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:09,381 INFO mapreduce.Job:  map <span class="token number">0</span>% reduce <span class="token number">0</span>%\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:13,513 INFO mapreduce.Job:  map <span class="token number">100</span>% reduce <span class="token number">0</span>%\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:18,557 INFO mapreduce.Job:  map <span class="token number">100</span>% reduce <span class="token number">100</span>%\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:18,565 INFO mapreduce.Job: Job job_1592404527237_0001 completed successfully\n<span class="token number">2020</span>-06-17 <span class="token number">14</span>:42:19,223 INFO mapreduce.Job: Counters: <span class="token number">54</span>\n        File System Counters\n                FILE: Number of bytes <span class="token assign-left variable">read</span><span class="token operator">=</span><span class="token number">550</span>\n                FILE: Number of bytes <span class="token assign-left variable">written</span><span class="token operator">=</span><span class="token number">452543</span>\n                FILE: Number of <span class="token builtin class-name">read</span> <span class="token assign-left variable">operations</span><span class="token operator">=</span><span class="token number">0</span>\n                FILE: Number of large <span class="token builtin class-name">read</span> <span class="token assign-left variable">operations</span><span class="token operator">=</span><span class="token number">0</span>\n                FILE: Number of <span class="token function">write</span> <span class="token assign-left variable">operations</span><span class="token operator">=</span><span class="token number">0</span>\n                HDFS: Number of bytes <span class="token assign-left variable">read</span><span class="token operator">=</span><span class="token number">521</span>\n                HDFS: Number of bytes <span class="token assign-left variable">written</span><span class="token operator">=</span><span class="token number">464</span>\n                HDFS: Number of <span class="token builtin class-name">read</span> <span class="token assign-left variable">operations</span><span class="token operator">=</span><span class="token number">8</span>\n                HDFS: Number of large <span class="token builtin class-name">read</span> <span class="token assign-left variable">operations</span><span class="token operator">=</span><span class="token number">0</span>\n                HDFS: Number of <span class="token function">write</span> <span class="token assign-left variable">operations</span><span class="token operator">=</span><span class="token number">2</span>\n                HDFS: Number of bytes <span class="token builtin class-name">read</span> erasure-coded<span class="token operator">=</span><span class="token number">0</span>\n        Job Counters\n                Launched map <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">1</span>\n                Launched reduce <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">1</span>\n                Data-local map <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">1</span>\n                Total <span class="token function">time</span> spent by all maps <span class="token keyword">in</span> occupied slots <span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2471</span>\n                Total <span class="token function">time</span> spent by all reduces <span class="token keyword">in</span> occupied slots <span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2107</span>\n                Total <span class="token function">time</span> spent by all map tasks <span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2471</span>\n                Total <span class="token function">time</span> spent by all reduce tasks <span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2107</span>\n                Total vcore-milliseconds taken by all map <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">2471</span>\n                Total vcore-milliseconds taken by all reduce <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">2107</span>\n                Total megabyte-milliseconds taken by all map <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">2530304</span>\n                Total megabyte-milliseconds taken by all reduce <span class="token assign-left variable">tasks</span><span class="token operator">=</span><span class="token number">2157568</span>\n        Map-Reduce Framework\n                Map input <span class="token assign-left variable">records</span><span class="token operator">=</span><span class="token number">6</span>\n                Map output <span class="token assign-left variable">records</span><span class="token operator">=</span><span class="token number">20</span>\n                Map output <span class="token assign-left variable">bytes</span><span class="token operator">=</span><span class="token number">504</span>\n                Map output materialized <span class="token assign-left variable">bytes</span><span class="token operator">=</span><span class="token number">550</span>\n                Input <span class="token function">split</span> <span class="token assign-left variable">bytes</span><span class="token operator">=</span><span class="token number">97</span>\n                Combine input <span class="token assign-left variable">records</span><span class="token operator">=</span><span class="token number">20</span>\n                Combine output <span class="token assign-left variable">records</span><span class="token operator">=</span><span class="token number">20</span>\n                Reduce input <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">20</span>\n                Reduce shuffle <span class="token assign-left variable">bytes</span><span class="token operator">=</span><span class="token number">550</span>\n                Reduce input <span class="token assign-left variable">records</span><span class="token operator">=</span><span class="token number">20</span>\n                Reduce output <span class="token assign-left variable">records</span><span class="token operator">=</span><span class="token number">20</span>\n                Spilled <span class="token assign-left variable">Records</span><span class="token operator">=</span><span class="token number">40</span>\n                Shuffled Maps <span class="token operator">=</span><span class="token number">1</span>\n                Failed <span class="token assign-left variable">Shuffles</span><span class="token operator">=</span><span class="token number">0</span>\n                Merged Map <span class="token assign-left variable">outputs</span><span class="token operator">=</span><span class="token number">1</span>\n                GC <span class="token function">time</span> elapsed <span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">84</span>\n                CPU <span class="token function">time</span> spent <span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">900</span>\n                Physical memory <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span> <span class="token assign-left variable">snapshot</span><span class="token operator">=</span><span class="token number">451174400</span>\n                Virtual memory <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span> <span class="token assign-left variable">snapshot</span><span class="token operator">=</span><span class="token number">5198319616</span>\n                Total committed heap usage <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">301989888</span>\n                Peak Map Physical memory <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">270835712</span>\n                Peak Map Virtual memory <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2596036608</span>\n                Peak Reduce Physical memory <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">180338688</span>\n                Peak Reduce Virtual memory <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2602283008</span>\n        Shuffle Errors\n                <span class="token assign-left variable">BAD_ID</span><span class="token operator">=</span><span class="token number">0</span>\n                <span class="token assign-left variable">CONNECTION</span><span class="token operator">=</span><span class="token number">0</span>\n                <span class="token assign-left variable">IO_ERROR</span><span class="token operator">=</span><span class="token number">0</span>\n                <span class="token assign-left variable">WRONG_LENGTH</span><span class="token operator">=</span><span class="token number">0</span>\n                <span class="token assign-left variable">WRONG_MAP</span><span class="token operator">=</span><span class="token number">0</span>\n                <span class="token assign-left variable">WRONG_REDUCE</span><span class="token operator">=</span><span class="token number">0</span>\n        File Input Format Counters\n                Bytes <span class="token assign-left variable">Read</span><span class="token operator">=</span><span class="token number">424</span>\n        File Output Format Counters\n                Bytes <span class="token assign-left variable">Written</span><span class="token operator">=</span><span class="token number">464</span>\n\n</code></pre></div>',60);e.render=function(s,t,e,o,l,c){return a(),n("div",null,[p])};export default e;export{t as __pageData};

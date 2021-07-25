# 常用配置

常用配置

## software collections

devtools-7 [网站](https://www.softwarecollections.org)

```bash
# 1. Install a package with repository for your system:
# On CentOS, install package centos-release-scl available in CentOS repository:
$ sudo yum install centos-release-scl

# On RHEL, enable RHSCL repository for you system:
$ sudo yum-config-manager --enable rhel-server-rhscl-7-rpms

# 2. Install the collection:
$ sudo yum install devtoolset-7

# 3. Start using software collections:
$ scl enable devtoolset-7 bash
```

## sudo

> 免输密码 /etc/sudoers.d/sudoers battery ALL=(ALL) NOPASSWD : ALL

## 自签名证书

> [原文](https://www.cnblogs.com/hnxxcxg/p/7610582.html)

X.509 证书包含三个文件：key，csr，crt

- key 是服务器上的私钥文件，用于对发送给客户端数据的加密，以及对从客户端接收到数据的解密
- csr 是证书签名请求文件，用于提交给证书颁发机构（CA）对证书签名
- crt 是由证书颁发机构（CA）签名后的证书，或者是开发者自签名的证书，包含证书持有人的信息，持有人的公钥，以及签署者的签名等信息

> 备注：在密码学中，X.509 是一个标准，规范了公开秘钥认证、证书吊销列表、授权凭证、凭证路径验证算法等

### 生成私钥

```bash
 openssl genrsa -des3 -out private.key 2048
 # des|-des3|-idea
# 默认1024位 最好2048以上
#-des            encrypt the generated key with DES in cbc mode
# -des3           encrypt the generated key with DES in ede cbc mode (168 bit key)
# -idea           encrypt the generated key with IDEA in cbc mode
# -seed
#                 encrypt PEM output with cbc seed
# -aes128, -aes192, -aes256
#                 encrypt PEM output with cbc aes
# -camellia128, -camellia192, -camellia256
#                 encrypt PEM output with cbc camellia
# -out file       output the key to 'file
# -passout arg    output file pass phrase source
# -f4             use F4 (0x10001) for the E value
# -3              use 3 for the E value
# -engine e       use engine e, possibly a hardware device.
# -rand file:file:...
#                 load the file (or the files in the directory) into
#                 the random number generator
#
```

### 生成 CSR（证书签名请求）

```bash
 openssl req -new -key private.key -out server.csr -config openssl.cfg
 # config默认--/etc/ssl/openssl.cnf
#  [new/x509]
#
# 当使用-new选取的时候，说明是要生成证书请求，当使用x509选项的时候，说明是要生成自签名证书
#
# [/key/newkey/keyout]
#
# key和newkey是互斥的，key是指定已有的密钥文件，而newkey是指在生成证书请求或者自签名证书的时候自动生成密钥，然后生成的密钥名称有keyout参数指定。
#
# 当指定newkey选项时，后面指定rsa:bits说明产生rsa密钥，位数由bits指定。指定dsa:file说明产生dsa密钥，file是指生成dsa密钥的参数文件(由dsaparam生成)
#
# [in/out/inform/outform/keyform]
#
# in选项指定证书请求文件，当查看证书请求内容或者生成自签名证书的时候使用
#
# out选项指定证书请求或者自签名证书文件名，或者公钥文件名(当使用pubkey选项时用到)，以及其他一些输出信息。
#
# inform、outform、keyform分别指定了in、out、key选项指定的文件格式，默认是PEM格式。
# -batch 从配置文件读取主体信息，或者配合-subj来指定主体信息
# -nodes 秘钥文件不用口令加密
```

### 删除私钥中的密码

```bash
openssl rsa -in private.key -out private.key
```

### 生成自签名证书(RootCA)

```bash
openssl req -x509 -days 3650 -in server.csr -key private.key -out server.crt
```

### 生成证书链

```bash
rm -rf /etc/pki/CA/*.old
touch /etc/pki/CA/index.txt

touch /etc/pki/CA/index.txt.attr
echo "unique_subject = no" > index.txt.attr

echo 01 > /etc/pki/CA/serial
echo 02 > /etc/pki/CA/serial

# 二级证书 chain
openssl ca -extensions v3_ca -in server.csr -days 3650 -out chain.crt -cert server.crt -keyfile private.key

```

## openssl 对称加密

> 基于 key iv salt 的加密解密

## openssl 非对称加密解密

> 密钥对,公钥加密/私钥解密 私钥签名/公钥验证

- 生成私钥: openssl genrsa .....
- 提取公钥: openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem

```bash
#公钥加密
openssl rsautl -encrypt -in readme.txt -inkey rsa_public_key.pem -pubin -out hello.en
#私钥解密
openssl rsautl -decrypt -in hello.en -inkey rsa_private_key.pem -out hello.de
# -in file        input file
# -out file       output file
# -inkey file     input key
# -keyform arg    private key format - default PEM
# -pubin          input is an RSA public
# -certin         input is a certificate carrying an RSA public key
# -ssl            use SSL v2 padding
# -raw            use no padding
# -pkcs           use PKCS#1 v1.5 padding (default)
# -oaep           use PKCS#1 OAEP
# -sign           sign with private key
# -verify         verify with public key
# -encrypt        encrypt with public key
# -decrypt        decrypt with private key
# -hexdump        hex dump output
# -engine e       use engine e, possibly a hardware device.
# -passin arg    pass phrase source
```

### smime

> 主要用于邮件协议

```bash
# 签名
openssl smime -sign -in company.mobileconfig -out signed.mobileconfig -signer server.crt -inkey server.key -certfile cert-chain.crt -outform der -nodetach
# 验证
openssl smime -verify -in signed.mobileconfig -inform der -certfile chain.crt -CAfile server.crt

# -encrypt：用给定的接受者的证书加密邮件信息。输入文件是一个消息值，用于加密。输出文件是一个已经被加密了的MIME格式的邮件信息。
#
# -decrypt：用提供的证书和私钥值来解密邮件信息值。从输入文件中获取到已经加密了的MIME格式的邮件信息值。解密的邮件信息值被保存到输出文件中。
#
# -sign：用提供的证书和私钥值来签名邮件信息值。输入文件是一个消息值，用于签名。输出文件是一个已经被签名了的MIME格式的邮件信息。
#
# -verify：验证已经签名了的邮件信息值。输入文件和输出文件都是已经签名了的邮件信息值。同时支持清除文本以及不透明的签名。
#
# -pk7out：将一个PEM格式的输入信息转换为PKCS#7结构。
#
# -nointern：对签名者来说，不从消息中查找证书。
#
# -nosigs：不去验证签名值。
#
# -noverify：不去验证签名者的证书信息。
#
# -nocerts：当签名的时候不包含签名者的证书信息值。
#
# -nodetach：用不透明的签名。
#
# -binary：不转换二进制消息到文本消息值。
#
# -in file：输入消息值，它一般为加密了的以及签名了的MINME类型的消息值。
#
# -inform SMIME|PEM|DER：输入消息的格式。一般为SMIME|PEM|DER三种。默认的是SMIME。
#
# -certfile filename：添加filename中所有的证书信息值。
#
# -signer file：一个签名证书，当签名或放弃一个签名数据时使用。这个选项可以被用多次。如果一个消息已经被验证并验证通过，则将签名者的证书放到file中。
#
# -recip file：存放提供者的证书，主要用于解密消息值。这个证书必须匹配多个提供者的消息。
#
# -passin arg：私钥保护口令来源。
#
# -inkey file：私钥存放地址，主要用于签名或解密数据。这个私钥值必须匹配相应的证书信息。如果这个选项没有被指定，私钥必须包含到证书路径中（-recip、-signer）。
#
# -keyform PEM |ENGINE：私钥格式。一般为PEM 、ENGINE格式。
#
# -out file：已经被解密或验证通过的数据的保存位置。
#
# -outform SMIME|PEM|DER：输出格式。一般为SMIME、PEM、DER三种。默认的格式是SMIME。
#
# -content file：包含分离的上下文路径，它仅仅只能用于verify操作。
#
# -to addr：有关的邮件信息值头部。接收的地址。
#
# -from ad：有关的邮件信息值头部。发送的地址。
#
# -subject s：颁发者信息值。
#
# -text：打印出S/MIME邮件的各个部件。
#
# -CApath directory：设置信任CA文件所在路径，此路径中的ca文件名采用特殊的形式：xxx.0，其中xxx为CA证书持有者的哈希值，它通过x509 -hash命令获得。
#
# -CAfile filename：某文件，里面是所有你信任的CA的证书的内容。当你要建立client的证书链的时候也需要用到这个文件。
#
# -crl_check、-crl_check_all：检查客户端的证书是否在CA的废除列表中。CRL（s）在证书文件中。crl_check_all表示要检查所有的CA证书中的废除列表。
#
# -indef、-stream：这两个选项对I/O流进行编码操作。
#
# -noindef：不对数据进行编码操作。
#
# -md digest：当签名或放弃签名操作时用的摘要算法。默认的摘要算法为sha1。
#
# -rand file(s)：指定随机数种子文件，多个文件间用分隔符分开，windows用“;”，OpenVMS用“,“，其他系统用“：”。
#
# cert.pem：提供者的证书信息。
#
# -des, -des3, -seed, -rc2-40, -rc2-64, -rc2-128, -aes128, -aes192, -aes256，-camellia128, -camellia192, -camellia256：指定的私钥保护加密算法。默认的算法是rc2-40


```

## p12 格式

```
openssl genrsa -out ios.key 2048
openssl req -new -sha256 -key ios.key -out ios.csr

openssl x509 -in ios_development.cer -inform DER -outform PEM -out ios_distribution.pem
openssl pkcs12 -export -inkey ios.key -in ios_distribution.pem -out ios_distribution.p12
```

## Docker

修改 docker 时区

```bash
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

## SnowFlake

摘自: [cnblogs](https://www.cnblogs.com/relucent/p/4955340.html)

分布式场景下 (workerId, datacenterId)保证唯一

```java
/**
 * Twitter_Snowflake<br>
 * SnowFlake的结构如下(每部分用-分开):<br>
 * 0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000 <br>
 * 1位标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0<br>
 * 41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截)
 * 得到的值），这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。41位的时间截，可以使用69年，年T = (1L << 41) / (1000L * 60 * 60 * 24 * 365) = 69<br>
 * 10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId<br>
 * 12位序列，毫秒内的计数，12位的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号<br>
 * 加起来刚好64位，为一个Long型。<br>
 * SnowFlake的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞(由数据中心ID和机器ID作区分)，并且效率较高，经测试，SnowFlake每秒能够产生26万ID左右。
 */
public class SnowflakeIdWorker {

    // ==============================Fields===========================================
    /** 开始时间截 (2015-01-01) */
    private final long twepoch = 1420041600000L;

    /** 机器id所占的位数 */
    private final long workerIdBits = 5L;

    /** 数据标识id所占的位数 */
    private final long datacenterIdBits = 5L;

    /** 支持的最大机器id，结果是31 (这个移位算法可以很快的计算出几位二进制数所能表示的最大十进制数) */
    private final long maxWorkerId = -1L ^ (-1L << workerIdBits);

    /** 支持的最大数据标识id，结果是31 */
    private final long maxDatacenterId = -1L ^ (-1L << datacenterIdBits);

    /** 序列在id中占的位数 */
    private final long sequenceBits = 12L;

    /** 机器ID向左移12位 */
    private final long workerIdShift = sequenceBits;

    /** 数据标识id向左移17位(12+5) */
    private final long datacenterIdShift = sequenceBits + workerIdBits;

    /** 时间截向左移22位(5+5+12) */
    private final long timestampLeftShift = sequenceBits + workerIdBits + datacenterIdBits;

    /** 生成序列的掩码，这里为4095 (0b111111111111=0xfff=4095) */
    private final long sequenceMask = -1L ^ (-1L << sequenceBits);

    /** 工作机器ID(0~31) */
    private long workerId;

    /** 数据中心ID(0~31) */
    private long datacenterId;

    /** 毫秒内序列(0~4095) */
    private long sequence = 0L;

    /** 上次生成ID的时间截 */
    private long lastTimestamp = -1L;

    //==============================Constructors=====================================
    /**
     * 构造函数
     * @param workerId 工作ID (0~31)
     * @param datacenterId 数据中心ID (0~31)
     */
    public SnowflakeIdWorker(long workerId, long datacenterId) {
        if (workerId > maxWorkerId || workerId < 0) {
            throw new IllegalArgumentException(String.format("worker Id can't be greater than %d or less than 0", maxWorkerId));
        }
        if (datacenterId > maxDatacenterId || datacenterId < 0) {
            throw new IllegalArgumentException(String.format("datacenter Id can't be greater than %d or less than 0", maxDatacenterId));
        }
        this.workerId = workerId;
        this.datacenterId = datacenterId;
    }

    // ==============================Methods==========================================
    /**
     * 获得下一个ID (该方法是线程安全的)
     * @return SnowflakeId
     */
    public synchronized long nextId() {
        long timestamp = timeGen();

        //如果当前时间小于上一次ID生成的时间戳，说明系统时钟回退过这个时候应当抛出异常
        if (timestamp < lastTimestamp) {
            throw new RuntimeException(
                    String.format("Clock moved backwards.  Refusing to generate id for %d milliseconds", lastTimestamp - timestamp));
        }

        //如果是同一时间生成的，则进行毫秒内序列
        if (lastTimestamp == timestamp) {
            sequence = (sequence + 1) & sequenceMask;
            //毫秒内序列溢出
            if (sequence == 0) {
                //阻塞到下一个毫秒,获得新的时间戳
                timestamp = tilNextMillis(lastTimestamp);
            }
        }
        //时间戳改变，毫秒内序列重置
        else {
            sequence = 0L;
        }

        //上次生成ID的时间截
        lastTimestamp = timestamp;

        //移位并通过或运算拼到一起组成64位的ID
        return ((timestamp - twepoch) << timestampLeftShift) //
                | (datacenterId << datacenterIdShift) //
                | (workerId << workerIdShift) //
                | sequence;
    }

    /**
     * 阻塞到下一个毫秒，直到获得新的时间戳
     * @param lastTimestamp 上次生成ID的时间截
     * @return 当前时间戳
     */
    protected long tilNextMillis(long lastTimestamp) {
        long timestamp = timeGen();
        while (timestamp <= lastTimestamp) {
            timestamp = timeGen();
        }
        return timestamp;
    }

    /**
     * 返回以毫秒为单位的当前时间
     * @return 当前时间(毫秒)
     */
    protected long timeGen() {
        return System.currentTimeMillis();
    }

    //==============================Test=============================================
    /** 测试 */
    public static void main(String[] args) {
        SnowflakeIdWorker idWorker = new SnowflakeIdWorker(0, 0);
        for (int i = 0; i < 1000; i++) {
            long id = idWorker.nextId();
            System.out.println(Long.toBinaryString(id));
            System.out.println(id);
        }
    }
}
```

## Jenkins

shell 脚本保持状态, 加载环境变量:

```bash
BUILD_ID=DONTKILLME
. /etc/profile
```

## Filder

显示 IP, 输出 websocket 日志:

```bash
Main(): FiddlerObject.UI.lvSessions.AddBoundColumn("ServerIP", 120, "X-HostIP");
class Handlers:
static function OnWebSocketMessage(oMsg: WebSocketMessage) {
        // Log Message to the LOG tab
        FiddlerApplication.Log.LogString(oMsg.ToString());
}
```

### 内置命令

```bash
1. select xxx:  选择xxx类型的,  例如 select html , select image ,select video.... , content-type的类型
2. allbut xxxx: allbut image-->只选择图片类型的, 会把其它捕获都删除!!!!
3. ?xxx: 选择url中包含xxx的
4. \>size <size: 过滤响应内容大小, 只能写数字 >40000   单位(b)
5. @host: 请求url包含xxx的, 例如:  @oschina.net
6. =status: =200 ==404 过滤响应码
7. Bpafter， Bps, bpv, bpm, bpu: 断点命令,  也可以在filters中设置
   Bpafter xxx: 中断 URL 包含指定字符的全部 session 响应
    Bps xxx: 中断 HTTP 响应状态为指定字符的全部 session 响应。
    Bpv xxx: 中断指定请求方式的全部 session 响应
    Bpm xxx: 中断指定请求方式的全部 session 响应。等同于bpv xxx
    Bpu xxx:与bpafter类似。
```

## 远程调试

1. Tomcat <code>startup.sh</code> 开头

   > declare -x CATALINA_OPTS="-server -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=3316"

2. Jar
   > java -jar -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=3316 xxx.jar

## Firewalld

```bash
firewall-cmd --zone=public --add-port=80-9000/tcp --permanent

firewall-cmd --zone=public --remove-port=80/tcp --permanent

firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="1.1.1.1" port protocol="tcp" port="8080" accept"
firewall-cmd --permanent --remove-rich-rule="rule family="ipv4" source address="1.1.1.1" port protocol="tcp" port="8080" accept"
```

## JDK 环境变量

Windows:

```bash
JAVA_HOME==D:\dev\Java\jdk1.6.0_12\
classpath==.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
path==%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
```

Linux: /etc/profile

```bash
export JAVA_HOME=/home/jdk1.8.0_152
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

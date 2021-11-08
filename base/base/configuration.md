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

## Jenkins

shell 脚本保持状态, 加载环境变量:

```bash
BUILD_ID=DONTKILLME
. /etc/profile
```

## Fiddler

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

## Gradle

gradle 任务: 往 nexus 发布 jar

```groovy
//Maven仓库的URL
def MAVEN_REPO_RELEASE_URL= 'http://xxxx/nexus/content/repositories/releases/'
def MAVEN_REPO_SNAPSHOT_URL= 'http://xxxxx/nexus/content/repositories/snapshots/'
//登录nexus 的用户名
def NEXUS_USERNAME='admin'
//登录nexus 的密码
def NEXUS_PASSWORD='admin'
def ARTIFACT_ID = 'demo'
// type
def TYPE = 'jar'
//description
def DESCRIPTION = '这里是描述'

uploadArchives {
    configuration = configurations.archives
    repositories {
        mavenDeployer {
            snapshotRepository(url: MAVEN_REPO_SNAPSHOT_URL) {
                authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
            }
            repository(url: MAVEN_REPO_RELEASE_URL) {
                authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
            }
            repository(url: uri('C:\\Users\\dd\\.m2\\repository')) //定义本地maven仓库的地址
            repository(url: uri('C:\\Users\\dd\\.gradle\\caches\\modules-2\\files-2.1')) //定义本地Gradle仓库的地址
            pom.project {
                version version
                artifactId ARTIFACT_ID
                groupId group
                packaging TYPE
                description DESCRIPTION
                licenses {
                    license {
                        name 'The Apache Software License, Version 2.0'
                        url 'http://www.apache.org/licenses/LICENSE-2.0.txt'
                        distribution 'xxxxxx'
                    }
                }
            }
        }
    }
}
```

## jira 配置

`setenv.sh`

```bash
JVM_SUPPORT_RECOMMENDED_ARGS:="-Duser.timezone=Asia/Shanghai"

export CATALINA_OPTS="-javaagent:/var/atlassian/application-data/jira/agent.jar ${CATALINA_OPTS}"
```

`confluence setenv.sh`

```bash
export CATALINA_OPTS="-javaagent:/var/atlassian/application-data/confluence/agent.jar ${CATALINA_OPTS}"
```

`bitbucket _start-webapp.sh`

```bash
JAVA_OPTS="-javaagent:/var/atlassian/application-data/bitbucket/agent.jar -classpath $INST_DIR/app $JAVA_OPTS $BITBUCKET_ARGS $JMX_OPTS $JVM_REQUIRED_ARGS $JVM_SUPPORT_RECOMMENDED_ARGS"
```

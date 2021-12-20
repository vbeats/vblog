# Shell

## \$n

`$0` 代表当前 shell 文件名 `$1--$n` 代表传递的参数 `${12}` 要加括号
`$#` 获取输入参数的个数
`$*` 代表所有的参数, 把所有参数当做一个整体, 将双引号取值时不能被用于分割循环
`$@` 也是所有的参数, 把每个参数都当做一个独立的个体
`$?` shell 上一次执行的状态, 0:正确执行 其它:有错误

## find

```bash
find /tmp/ -type f -name "lllll*" -mmin +1200 -delete
```

1. -type：根据不同的文件类型筛选

```
f	普通文件
d	目录文件
l	符号链接文件
b	块设备 文件
c	字符设备文件
p	管道文件
s	套接字文件
```

2. 以天为单位 : atime(文件的最后访问时间)、mtime(文件的最后修改时间)、ctime(文件最后改变时间)
3. 以分钟为单位 : amin(文件的最后访问时间)、mmin(文件的最后修改时间)、cmin(文件最后改变时间)
4. -print：输出至标准输出；默认的动作；
5. -ls：类似于对查找到的文件执行“ls -l”命令，输出文件的详细信息；
6. -delete：删除查找到的文件；
7. -fls /PATH/TO/SOMEFILE：把查找到的所有文件的长格式信息保存至指定文件中；
8. -ok COMMAND {} \; ：对查找到的每个文件执行由 COMMAND 表示的命令；每次操作都由用户进行确认；
9. -exec COMMAND {} \; ：对查找到的每个文件执行由 COMMAND 表示的命令；
10. find 查找到的文件太多 find ................ | xargs COMMAND

## 运算符

`expr + - \* / %` expr 运算符之间要有空格, 没有小括号, 多次运算需要分开用 \` 包裹 :`expr`expr 2 + 3`\* 4`

或者

`$[......]` :不需要空格 也可以用小括号

## 流程控制

1.  条件表达式

    `[ 条件 ]` 中括号要有空格, `-lt` `-le` `-eq` `-gt` `-ge` `-ne`, 文件权限: `-r` `-w` `-x`, 文件类型: `-f` `-d` `-e`:是否存在

2.  if

    ```bash
        if [ ... ];then
            ....
        fi
    ```

    或

    ```bash
    if [ ... ]
        then
            ......
    fi
    ```

3.  case

    ```bash
        case $xxx in
            "...")
                .....
                ;;
            "...")
                .....
                ;;
            *)
                .....
                ;;
        esac
    ```

4.  for

    ```bash
        for ((初始值;条件;控制))
            do
                .....
            done
        # 另一种
        for xx in 值1 值2 值3...
            do
                .....
            done
    ```

5.  while

    ```bash
        while [ .... ]
            do
                ....
            done
    ```

## read

`read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...输入内容赋给的变量]`

```
-a 后跟一个变量，该变量会被认为是个数组，然后给其赋值，默认是以空格为分割符。
-d 后面跟一个标志符，其实只有其后的第一个字符有用，作为结束的标志。
-p 后面跟提示信息，即在输入前打印提示信息。
-e 在输入的时候可以使用命令补全功能。
-n 后跟一个数字，定义输入文本的长度，很实用。
-r 屏蔽\，如果没有该选项，则\作为一个转义字符，有的话 \就是个正常的字符了。
-s 安静模式，在输入字符时不再屏幕上显示，例如login时输入密码。
-t 后面跟秒数，定义输入字符的等待时间。
-u 后面跟fd，从文件描述符中读入，该文件描述符可以是exec新开启的。
```

## basename

截取最后一个`/`之后的文本,

```bash
basename NAME [SUFFIX]
basename OPTION... NAME...

basename /usr/bin/sort          -> "sort"
basename include/stdio.h .h     -> "stdio"
basename -s .h include/stdio.h  -> "stdio"
basename -a any/str1 any/str2   -> "str1" followed by "str2"

```

## dirname

输出最后一个`/xxx`之前的部分

## 自定义函数

函数必须定义在调用之前

```bash
function xxx(){
    ......
}

function sum(){
        s=0;
        s=$[$1+$2]
        echo $s
}

sum 10 20

```

## cut

按行切

```bash
cut OPTION... [FILE]...
```

```
-b ：以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。
-c ：以字符为单位进行分割。
-d ：自定义分隔符，默认为制表符。
-f ：与-d一起使用，指定显示切割后的哪一列
-n ：取消分割多字节字符。仅和 -b 标志一起使用。如果字符的最后一个字节落在由 -b 标志的 List 参数指示的
范围之内，该字符将被写出；否则，该字符将被排除
```

## sed

按行处理

```bash
sed [OPTION]... {script-only-if-no-other-script} [input-file]...
```

```
-e<script>或--expression=<script> 以选项中指定的script来处理输入的文本文件。
-f<script文件>或--file=<script文件> 以选项中指定的script文件来处理输入的文本文件。
-h或--help 显示帮助。
-n或--quiet或--silent 仅显示script处理后的结果。
-V或--version 显示版本信息。
动作说明：

a ：新增， a 的后面可以接字串，而这些字串会在新的一行出现
c ：取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行
d ：删除， d 后面通常不接任何东西 sed '/wo/d' xx.txt
i ：插入， i 的后面可以接字串，而这些字串会在新的一行出现
p ：打印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行
s ：替换  1,20s/old/new/g


# 对全局匹配上的所有字符串进行替换
sed -i 's/原字符串/新字符串/g' xxxxx.txt
```

## awk

按行处理, 默认按空格切分

```bash

awk [POSIX or GNU style options] -f progfile [--] file ...
awk [POSIX or GNU style options] [--] 'program' file ...

```

```
-F fs or --field-separator fs
指定输入文件折分隔符，fs是一个字符串或者是一个正则表达式，如-F:
-v var=value or --asign var=value
赋值一个用户定义变量。
-f scripfile or --file scriptfile
从脚本文件中读取awk命令。
-mf nnn and -mr nnn
对nnn值设置内在限制，-mf选项限制分配给nnn的最大块数目；-mr选项限制记录的最大数目。这两个功能是Bell实验室版awk的扩展功能，在标准awk中不适用。
-W compact or --compat, -W traditional or --traditional
在兼容模式下运行awk。所以gawk的行为和标准的awk完全一样，所有的awk扩展都被忽略。
-W copyleft or --copyleft, -W copyright or --copyright
打印简短的版权信息。
-W help or --help, -W usage or --usage
打印全部awk选项和每个选项的简短说明。
-W lint or --lint
打印不能向传统unix平台移植的结构的警告。
-W lint-old or --lint-old
打印关于不能向传统unix平台移植的结构的警告。
-W posix
打开兼容模式。但有以下限制，不识别：/x、函数关键字、func、换码序列以及当fs是一个空格时，将新行作为一个域分隔符；操作符**和**=不能代替^和^=；fflush无效。
-W re-interval or --re-inerval
允许间隔正则表达式的使用，参考(grep中的Posix字符类)，如括号表达式[[:alpha:]]。
-W source program-text or --source program-text
使用program-text作为源代码，可与-f命令混用。
-W version or --version
打印bug报告信息的版本。
```

```bash
awk -F: '/^root/{print $7}' passwd
```

内置变量: `FILENAME` `NR`:已读行数 `NF`: 切割后多少列

## sort

按行处理文件, 切割文件, 指定排序

```
-b 忽略每行前面开始出的空格字符。
-c 检查文件是否已经按照顺序排序。
-d 排序时，处理英文字母、数字及空格字符外，忽略其他的字符。
-f 排序时，将小写字母视为大写字母。
-i 排序时，除了040至176之间的ASCII字符外，忽略其他的字符。
-m 将几个排序好的文件进行合并。
-M 将前面3个字母依照月份的缩写进行排序。
-n 依照数值的大小排序。
-o<输出文件> 将排序后的结果存入指定的文件。
-r 以相反的顺序来排序。
-k 指定排序的key(哪列)
-t<分隔字符> 指定排序时所用的栏位分隔字符。
+<起始栏位>-<结束栏位> 以指定的栏位来排序，范围由起始栏位到结束栏位的前一栏位。
--help 显示帮助。
--version 显示版本信息。
```

## 日志切割

`tail -50000 a.log > tmp.log` : `tail` or `head` 开始/结束xxx行

`sed -n '1,50000p' a.log > tmp.log` : i到j行间的日志

`split -l 3000 a.log --verbose` : 每3000行切一份

`split -b 100m a.log --verbose` : 每100m切一份

```bash
-b：值为每一输出档案的大小，单位为 byte。
-C：每一输出档中，单行的最大 byte 数。
-d：使用数字作为后缀。
-l：值为每一输出档的行数大小。
-a：指定后缀长度(默认为2)。
```

## expect

shell 自动交互输入

| Command      | 作用                               |
| ------------ | ---------------------------------- |
| spawn        | 启动新的进程                       |
| send         | 用于向进程发送字符串               |
| expect       | 从进程接收字符串                   |
| interact     | 允许用户交互                       |
| exp_continue | 匹配多个字符串在执行动作后加此命令 |

```bash
#!/bin/bash
mkdir test
cd test
openssl genrsa -out ios.key 2048
/usr/bin/expect<<EOF
spawn openssl req -new -sha256 -key ios.key -out ios.csr
expect {
    "Country Name" {send "CN\r"; exp_continue;}
    "State or Province Name" {send "GUANGDONG\r"; exp_continue;}
    "Locality Name" {send "GUANGZHOU\r"; exp_continue;}
    "Organization Name" {send "IOSSIGN\r"; exp_continue;}
    "Organizational Unit Name" {send "IOSSIGN\r"; exp_continue;}
    "Common Name" {send "IOSSIGN\r"; exp_continue;}
    "Email Address" {send "\r"; exp_continue;}
    "A challenge password" {send "\r"; exp_continue;}
    "An optional company name" {send "\r";}
}
expect eof
EOF

echo "success"
```

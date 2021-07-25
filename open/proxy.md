# Proxy

代理 负载均衡

## HaProxy

支持 TCP HTTP
`global`: haproxy 运行相关的全局配置
`defaults`: 默认参数配置
`listen`: 监听配置
`frontend`: 处理客户端请求, 按照规则分发请求
`backend`: 后端集群配置

```bash
# 配置文件
# 全局配置
global
    # 启用每个实例日志记录事件和流量。
    log global
    # 设置日志文件输出定向
    log 127.0.0.1 local3 info
    # 需要开启rsyslog
    # vim /etc/rsyslog.conf
    # 添加local3.* /var/log/haproxy.log

    # 改变当前工作目录
    chroot /usr/local/haproxy

    # 用户与用户组
    user haproxy
    group haproxy

    # 守护进程启动，运维方式为后台工作
    daemon

    # 最大连接数
    maxconn 4000

# 作用于其后紧跟的listen块，直至下一个defaults 块，下一个default 将替换上一个块作用于以后的listen
defaults

    # 默认的模式mode { tcp|http|health }，tcp是4层，http是7层，health只会返回OK
    mode http

    # maxconn 65535         maxconn 每个进程可用的最大连接数
    # retries 3         当对server的connection失败后，重试的次数 　
    # option abortonclose     启用或禁用在队列中挂起的中止请求的早期丢弃
    # option redispatch     启用或禁用在连接故障情况下的会话重新分配
    # option dontlognull     启用和禁用 记录 空连接
    # option httpclose         每次请求完毕后主动关闭http通道，HA-Proxy不支持keep-alive模式
    # option forwardfor     获得客户端IP
    # option httplog        记录HTTP 请求,session 状态和计时器
    option httplog
    option dontlognull
    timeout connect 5000
    timeout client 50000
    timeout server 50000


#前端配置，http_front名称可自定义
frontend http_front

    # bind *:443 ssl crt /etc/haproxy/cert.pem        启用ssl证书
    # bind *:80                        发起http请求道80端口，会被转发到设置的ip及端口
    bind *:80

    stats enable
    #haproxy的状态管理页面，通过/haproxy?stats来访问
    stats uri /haproxy?stats
    # stats auth <user>:<passwd>
    default_backend http_back

#后端配置，http_back名称可自定义
backend http_back

    # 负载均衡方式
    # source 根据请求源IP
    # static-rr 根据权重
    # leastconn 最少连接者先处理
    # uri 根据请求的uri
    # url_param 根据请求的url参数
    # rdp-cookie 据据cookie(name)来锁定并哈希每一次请求
    # hdr(name) 根据HTTP请求头来锁定每一次HTTP请求
    # roundrobin 轮询方式
    balance roundrobin

    #设置健康检查页面
    option httpchk GET /index.html

    #传递客户端真实IP
    option forwardfor header X-Forwarded-For

    # inter 2000 健康检查时间间隔2秒
    # rise 3 检测多少次才认为是正常的
    # fall 3 失败多少次才认为是不可用的
    # weight 30 权重
    # 需要转发的ip及端口
    # server <name> <address>[:port] [settings ...]
    # default-server [settings ...]
    server node1 xxxxx:8081 check inter 2000 rise 3 fall 3 weight 30
    server node2 xxxxx:8082 check inter 2000 rise 3 fall 3 weight 30

    # server first  10.1.1.1:1080 cookie first  check inter 1000
    # server second 10.1.1.2:1080 cookie second check inter 1000
    # server transp ipv4@
    # server backup "${SRV_BACKUP}:1080" backup
    # server www1_dc1 "${LAN_DC1}.101:80"
    # server www1_dc2 "${LAN_DC2}.101:80"

# haproxy的acl访问控制
frontend http_front
    bind *:80
    stats uri /haproxy?stats

    #创建一个acl，is_http_back2是acl的名称，可自定义，用于判断主机名是否为www.back2.com
    acl is_http_back2 hdr_end(host) www.back2.com

    #通过正则判断主机名中是否为bbs.back.com或forum.back.com
    acl is_host_bbs hdr_reg(host) -i ^(bbs.back.com|forum.back.com)

    #判断ua是否为android
    acl is_ua_android hdr_reg(User-Agent) -i android

    #判断主机名开头是否为img.或css.或js.
    acl is_host_static hdr_beg(host) -i img. css. js.

    #判断url路径中是否有/bbs
    acl is_path_bbs path_beg -i /bbs

    #判断url文件结尾
    acl is_php path_end -i .php

    #通过正则判断url中结尾以
    acl is_static_file url_reg -i /*.(css|jpg|png|jpeg|gif)$

    #效果同上
    acl is_static_file2 path_end -i .css .jpg .png .jpeg .gif

    #如果主机名是www.back2.com那么就使用后端http_back2
    # use_backend <backend> [{if | unless} <condition>]
    use_backend http_back2 if is_http_back2 or is_ua_android

    #默认使用的后端
    default_backend http_back

backend http_back
    balance roundrobin
    option httpchk GET /index.html
    option forwardfor header X-Forwarded-For
    server node1 192.168.1.222:8080 check inter 2000 rise 3 fall 3 weight 30

backend http_back2
    balance roundrobin
    option httpchk GET /index.html
    option forwardfor header X-Forwarded-For
    server node2 192.168.1.222:8082 check inter 2000 rise 3 fall 3 weight 30
```

`log` 格式:

```bash
log-format %T\ %t\ Some\ Text
log-format %{+Q}o\ %t\ %s\ %{-Q}r

log-format-sd %{+Q,+E}o\ [exampleSDID@1234\ header=%[capture.req.hdr(0)]]

+---+------+-----------------------------------------------+-------------+
  | R | var  | field name (8.2.2 and 8.2.3 for description)  | type        |
  +---+------+-----------------------------------------------+-------------+
  |   | %o   | special variable, apply flags on all next var |             |
  +---+------+-----------------------------------------------+-------------+
  |   | %B   | bytes_read           (from server to client)  | numeric     |
  | H | %CC  | captured_request_cookie                       | string      |
  | H | %CS  | captured_response_cookie                      | string      |
  |   | %H   | hostname                                      | string      |
  | H | %HM  | HTTP method (ex: POST)                        | string      |
  | H | %HP  | HTTP request URI without query string (path)  | string      |
  | H | %HQ  | HTTP request URI query string (ex: ?bar=baz)  | string      |
  | H | %HU  | HTTP request URI (ex: /foo?bar=baz)           | string      |
  | H | %HV  | HTTP version (ex: HTTP/1.0)                   | string      |
  |   | %ID  | unique-id                                     | string      |
  |   | %ST  | status_code                                   | numeric     |
  |   | %T   | gmt_date_time                                 | date        |
  |   | %Ta  | Active time of the request (from TR to end)   | numeric     |
  |   | %Tc  | Tc                                            | numeric     |
  |   | %Td  | Td = Tt - (Tq + Tw + Tc + Tr)                 | numeric     |
  |   | %Tl  | local_date_time                               | date        |
  |   | %Th  | connection handshake time (SSL, PROXY proto)  | numeric     |
  | H | %Ti  | idle time before the HTTP request             | numeric     |
  | H | %Tq  | Th + Ti + TR                                  | numeric     |
  | H | %TR  | time to receive the full request from 1st byte| numeric     |
  | H | %Tr  | Tr (response time)                            | numeric     |
  |   | %Ts  | timestamp                                     | numeric     |
  |   | %Tt  | Tt                                            | numeric     |
  |   | %Tw  | Tw                                            | numeric     |
  |   | %U   | bytes_uploaded       (from client to server)  | numeric     |
  |   | %ac  | actconn                                       | numeric     |
  |   | %b   | backend_name                                  | string      |
  |   | %bc  | beconn      (backend concurrent connections)  | numeric     |
  |   | %bi  | backend_source_ip       (connecting address)  | IP          |
  |   | %bp  | backend_source_port     (connecting address)  | numeric     |
  |   | %bq  | backend_queue                                 | numeric     |
  |   | %ci  | client_ip                 (accepted address)  | IP          |
  |   | %cp  | client_port               (accepted address)  | numeric     |
  |   | %f   | frontend_name                                 | string      |
  |   | %fc  | feconn     (frontend concurrent connections)  | numeric     |
  |   | %fi  | frontend_ip              (accepting address)  | IP          |
  |   | %fp  | frontend_port            (accepting address)  | numeric     |
  |   | %ft  | frontend_name_transport ('~' suffix for SSL)  | string      |
  |   | %lc  | frontend_log_counter                          | numeric     |
  |   | %hr  | captured_request_headers default style        | string      |
  |   | %hrl | captured_request_headers CLF style            | string list |
  |   | %hs  | captured_response_headers default style       | string      |
  |   | %hsl | captured_response_headers CLF style           | string list |
  |   | %ms  | accept date milliseconds (left-padded with 0) | numeric     |
  |   | %pid | PID                                           | numeric     |
  | H | %r   | http_request                                  | string      |
  |   | %rc  | retries                                       | numeric     |
  |   | %rt  | request_counter (HTTP req or TCP session)     | numeric     |
  |   | %s   | server_name                                   | string      |
  |   | %sc  | srv_conn     (server concurrent connections)  | numeric     |
  |   | %si  | server_IP                   (target address)  | IP          |
  |   | %sp  | server_port                 (target address)  | numeric     |
  |   | %sq  | srv_queue                                     | numeric     |
  | S | %sslc| ssl_ciphers (ex: AES-SHA)                     | string      |
  | S | %sslv| ssl_version (ex: TLSv1)                       | string      |
  |   | %t   | date_time      (with millisecond resolution)  | date        |
  | H | %tr  | date_time of HTTP request                     | date        |
  | H | %trg | gmt_date_time of start of HTTP request        | date        |
  | H | %trl | local_date_time of start of HTTP request      | date        |
  |   | %ts  | termination_state                             | string      |
  | H | %tsc | termination_state with cookie status          | string      |
  +---+------+-----------------------------------------------+-------------+
```

错误页面重定向:

```bash
# 200, 400, 403, 405, 408, 425, 429, 500, 502, 503, and 504 不支持404
errorloc <code> <url>
errorloc302 <code> <url>

errorfile <code> <file>
```

## Keepalived

[文档](https://www.keepalived.org/manpage.html)

故障转移 健康检查
`vrrp`协议, 竞选 master, master 发送广播, master 挂掉, 备用节点接管

```bash
global_refs{
    # 节点路由唯一标识
    router_id xxx
}
# 主备节点要用同一个vrrp实例名
vrrp_instance xx1{
    # 备节点 BACKUP
    state MASTER
    interface eth0
    # 0~255 用于区分vrrp实例
    virtual_router_id 51
    # 节点优先级  主备差50
    priority 200
    # 心跳间隔
    advert_init 1
    # 通信认证
    authentication {
        auth_type PASS
        auth_pass xxxxxx
    }

    # 虚拟ip
    virtual_ipaddress{
        xxxxx/24
        xxxxx/24
        xxxxx/24
    }
}
```

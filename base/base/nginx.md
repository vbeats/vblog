# Nginx

[Nginx 文档](https://www.nginx.cn/doc/)

[Openresty 文档](https://moonbingbing.gitbooks.io/openresty-best-practices/content/)

## location

| pattern   | 含义                      |
| --------- | ------------------------- |
| = /xxx    | 完全匹配                  |
| ^~ /xxx   | 以 xxx 开头, 不区分大小写 |
| ~ regex   | 以 xxx 开头, 分大小写     |
| ~\* regex | 不区分大小写正则匹配      |
| /xxx      | 普通的前缀匹配            |
| /         | 拦截所有                  |

## CORS

```nginx
 location /test/{
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Credentials' 'true';
    proxy_pass http://127.0.0.1:8080/test/;
}
```

## 静态资源:

```nginx
location ~ \.(jpeg|png|gif){
            # ngx_http_header_module -->> add_header 添加响应头字段信息;
            add_header X-Cache $upstream_cache_status;
            proxy_cache picture;
            proxy_cache_key $host$uri$is_args$args; # 以全路径md5值做做为Key
            proxy_cache_valid 200 304 12h; #对不同的HTTP状态码设置不同的缓存时间
            expires 7d; #总体缓存时间
            root /home/feiyanImage;
}
```

## 反向代理 IP 转发配置:

```nginx
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```

## basic auth

<code>apache2-utils</code>

```bash
htpasswd -c -d /etc/nginx/pass_file  xxxxxx


server {
    auth_basic "请输入密码";
    auth_basic_user_file /etc/nginx/pass_file; # 存放密码文件的路径
}
```

## 日志

| 字段                                | 作用                                                               |
| ----------------------------------- | ------------------------------------------------------------------ |
| $remote_addr与$http_x_forwarded_for | 记录客户端 IP 地址                                                 |
| $remote_user                        | 记录客户端用户名称                                                 |
| $request                            | 记录请求的 URI 和 HTTP 协议                                        |
| $status                             | 记录请求状态                                                       |
| $body_bytes_sent                    | 发送给客户端的字节数，不包括响应头的大小                           |
| $bytes_sent                         | 发送给客户端的总字节数                                             |
| $connection                         | 连接的序列号                                                       |
| $connection_requests                | 当前通过一个连接获得的请求数量                                     |
| $msec                               | 日志写入时间。单位为秒，精度是毫秒                                 |
| $pipe                               | 如果请求是通过 HTTP 流水线(pipelined)发送，pipe 值为“p”，否则为“.” |
| $http_referer                       | 记录从哪个页面链接访问过来的                                       |
| $http_user_agent                    | 记录客户端浏览器相关信息                                           |
| $request_length                     | 请求的长度（包括请求行，请求头和请求正文）                         |
| $request_time                       | 请求处理时间，单位为秒，精度毫秒                                   |
| $time_iso8601                       | ISO8601 标准格式下的本地时间                                       |
| $time_local                         | 记录访问时间与时区                                                 |

日志自动分隔, 不如直接用`logrotate`

```nginx
  # 不知道好不好用
    map $time_iso8601 $logdate {
 			 '~^(?<ymd>\d{4}-\d{2})' $ymd;

 			# 也可以按照天进行分割
 			#'~^(?<ymd>\d{4}-\d{2}-\d{2})' $ymd;
  		default  date-not-found';
		}
    access_log  logs/access-$logdate.log main;
```

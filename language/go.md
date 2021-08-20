# GoLang 🦔

## time

> 2006-01-02 15:04:05

## IO

```go
os filepath path buferio ioutil
Reader Writer
```

## Goroutine

> go test()

<code>runtime sync</code>

互斥锁 读写锁 waitgroup

## Channel

> var xx chan int , xx=make(chan int)

> xx <- data , data,ok := <- xx

发送方可以关闭通道 close(xx)

```go
for n:= range cc{
    ...
}
```

## grpc

> protoc -I proto/ protp/helloworld.proto --go_out=plugins=grpc:proto

你猜这是什么意思

## go kit

### Transport

通信模块 支持`http` `grpc` `rpc` `thrift`

`Encode/Decode`

### Endpoint

处理相关的请求/响应

`type Endpoint func(ctx context.Context, request interface{}) (response interface{}, err error)`

### Service

业务接口 实现

### mux

路由组件 [文档](https://github.com/gorilla/mux)

```go
r := mux.NewRouter()
r.HandleFunc("/", HomeHandler)
r.HandleFunc("/products", ProductsHandler)
r.HandleFunc("/articles", ArticlesHandler)
http.Handle("/", r)
```

## go-micro

# Netty

## Handler&编解码器

<code>IdleStateHandler: 读写空闲检测</code>
<code>HttpObjectAggregator</code>
<code>HttpServerCodec</code>
<code>ChunkedWriteHandler</code>
<code>WebSocketServerProtocalHandler</code>
<code>ProtobufVarint32FrameDecoder</code>
<code>ProtobufDecoder</code>
<code>ProtobufVarint32LengthFieldPrepender</code>
<code>protobufEncoder</code>

> ByteToMessageDecoder MessageToByteEncoder MessageToMessageDecoder MessageToMessageEncoder
> ReplayingDecoder FiexedLengthFrameDecoder DelimiterBasedFramedDecoder LengthFieldBasedFrameDecoder

## Protocal Buffers

```protobuf
syntax="proto2";
package  xxx;
option java_package="xxxx";
option java_outer_classname="xxxx";
option optimize_for = SPEED;// CODE_SIZE LITE_TUNTIME

message Person{
    required String name=1;
    required int32 age=2;
    optional String address=3;
    repeated phones=4;
    map<string, Project> projects = 7;


    enum xx_type {
        IPHONE=0;
        HUAWEI=1;
    }

    oneof data_bofy { // oneof 同时只有一个字段生效
        XX xx =5;
        YY yy=6;
    }

    message xx{
        ....
    }
}
```

> protobuf-java protobuf-lite protobuf-util

```bash
protoc --java_out=src/main/java src/xxxxx.ptoto
```

## Grpc

> proto3 request/stream request <----> response/stream response

```protobuf
syntax = "proto3";
import "google/protobuf/empty.proto";
package xxxx;
option java_package = "com.xxxxxx.proto";
option java_outer_classname = "HHH";
option optimize_for = SPEED;
option java_multiple_files = true;

service xx {
    rpc Test(Request xx) returns (Response) {}
}

message Request{
    ...
}

message Response{
    ...
}
```

::: tip
类型
:::

```bash
float double int32 bool string bytes sint64 map...
```

java:

```java
extends XxxServiceGrpc.XxxServiceImplBase{
// 重写 ptoto中定义的rpc方法
}

StreamObserver

// Server

public class GrpcServer {

    private Server server;

    @PostConstruct
    private void start() throws IOException, InterruptedException {
        server = ServerBuilder.forPort(....).addService(xxxxxService).build().start();
        Runtime.getRuntime().addShutdownHook(new Thread(GrpcServer.this::stop));

        block();
    }

    private void stop() {
        if (server != null) {
            server.shutdown();
        }
    }

    private void block() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }
}

// client
ManagedChannel channel = ManagedChannelBuilder.forAddress(....)
                .enableRetry()
                .usePlaintext()
                .build();

        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            if (channel != null) {
                channel.shutdown();
            }
        }));

        xxxxGrpc.xxxBlockingStub blockingStub = xxxxGrpc.newBlockingStub(channel);
```

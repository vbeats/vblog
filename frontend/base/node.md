# Node

## module

`common js`模块导入导出 新版本也支持`es6`吧

```js
exports.xx=....
module.exports={}

require('')
```

## Buffer

`字节数组`, 直接操作内存数据

[API](https://nodejs.org/api/buffer.html)

## fs

`文件操作` 同步 or 异步

[API](https://nodejs.org/api/fs.html)

## http

```js
http.createServer((request, response) => {}).listen(8000);
```

## url

```js
url.parse(request.url, { useUnifiedTopology: true }); // 底层用的querystring解析 不推荐使用
new URLSearchParams(); // √
```

## mongo 操作

`mongodb` [文档](https://mongodb.github.io/node-mongodb-native/)

`generic-pool` : 连接池模块

```js
new MongoClient(url);

client.connection(() => {
  db = client.db("xxx");
  // ....
  db.close();
});
```

增删改查:

```js
db.collection("xx").find({})....

db.collection("xx").insertOne({}, callback)   // 多条Many

db.collection("xx").updateOne({/* 条件 */},{$set:{"xx":"oo"}},callback)

db.collection("xx").deleteOne({/* 条件 */}, callback)
```

## express

`get`请求参数: `request.query`

`/:id`: `request.params['id']`

`post`请求参数: `application/json` `application/x-www-form-urlencoded`

使用中间件 `body-parser.json()` `body-parser.urlencoded({})`

静态资源: `app.use([path ,] express.static('public'))`

中间件:

```js
// 应用级中间件
app.use((request, response, next) => {});

// 路由级中间件
app.get("/xx", (request, response, next) => {});

// 错误处理
// 最后一级, 处理匹配不到的路由

// 内置中间件
express.static("");
```

路由模块化 `express.router()` 分离路由到单独的模块

`app.use('/xxx',router)`

文件上传 `multer`模块

## mongoose

操作`mongo` [文档](https://mongoosejs.com/docs/index.html)

`collection` ---> `xxSchema` ----> `model`

## koa

`koa koa-router`

```js
router
  .get("/xx", async (ctx) => {
    ctx.body = "oo";
  })
  .get("/xxx/:id", async (ctx) => {
    // query string
    // ctx.request  ctx.query  ctx.querystring
    // ctx.params
  });

app.use(router.routes()).use(router.allowedMethods());
```

中间件

```js
app.use(async (ctx, next) => {});

router.get("/xx", async (ctx, next) => {});

// post
app.use(`koa-bodyparser()`);
router.post("/xx", async (ctx) => {
  // ctx.request.body
});

// 静态资源
const s = require("koa-static");
app.use(s("public"));
```

`request` ---> `app中间件` ---> `router处理` ---> `app中间件` ---> `client`

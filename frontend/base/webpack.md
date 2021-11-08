# webpack

`vite` or `webpack`

```bash
webpack ./index.js -o ./dist/build.js --mode=development
```

`webpack.config.js`

```js
const { resolve } = require("path");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.(jpg|png|gif)$/,
        use: "url-loader",
        options: { limit: 1024, esModule: false, name: "[hash:10].[ext]" },
      },
      { test: /\.html$/, use: "html-loader" }, // 处理html内的img资源
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(svg|woff|ttf|eot)$/, use: "file-loader" },
    ],
  },
};

module.exports = config;
```

## Entry

打包入口

```json
entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
```

## Output

输出

```json
output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
}
```

## Loader

处理各种文件模块

```json
module: {
  rules: [
    { test: /\.css$/, use: "css-loader" },
    { test: /\.ts$/, use: "ts-loader" },
  ];
}
```

实际上就是一个函数, `resolveLoader` 可以配置`loader`位置

```js
(content, map, meta) => {};
```

`loader-utils` ==> `getOptions` 获取 `loader` 中 `options` 配置信息

校验`options`, `shecma-utils` ===> `validate`

```js
validate(schema.json, options, {});
```

## Plugins

乱七八糟各种插件 `tapable hooks`

```json
plugins: [
  new webpack.optimize.UglifyJsPlugin(),
  new HtmlWebpackPlugin({ template: "./src/index.html" }),
];
```

## Mode

`development` `production`

## config

- Externals

```json
externals: {
    jquery: 'jQuery',  /* k: npm包名   v: 引入时的名称 */
    'fs-extra': 'commonjs2 fs-extra',
    lodash : {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_' // indicates global variable
    }
  }
```

## devServer

`webpack-dev-server`

```js
devServer: {
  contentBase: "",
  compress:true,
  port:80,
  open:true,
  hot:true, // 开启HMR热重载
  devtool:'xxx-source-map',
}
```

---

## 常用插件

### SplitChunks

```json
// 分包
splitChunks: {
     chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
     minSize: 30*1024, // 最小尺寸，30000  bytes  30kb
     maxSize: 0,
     minChunks: 1, // 最小 chunk ，默认1  Infinity 无限
     maxAsyncRequests: 5, // 最大异步请求数， 默认5
     maxInitialRequests : 3, // 最大初始化请求书，默认3
     automaticNameDelimiter: '-',// 打包分隔符
     name: function(){}, // 打包后的名称，此选项可接收 function
     cacheGroups:{ // 这里开始设置缓存的 chunks
         priority: 0, // 缓存组优先级
         defaultVendors: { // key 为entry中定义的 入口名称
             chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是async)
             test: /[\\/]node_modules[\\/]/,, // 正则规则验证，如果符合就提取 chunk
             name: "vendor", // 要缓存的 分隔出来的 chunk 名称
             minSize: 30000,
             minChunks: 1,
             enforce: true,
             maxAsyncRequests: 5, // 最大异步请求数， 默认1
             maxInitialRequests : 3, // 最大初始化请求书，默认1
             reuseExistingChunk: true // 可设置是否重用该chunk
         }
     }
  }

```

### CompressionPlugin

```json
// gzip压缩
new CompressionPlugin({
  "filename": "[path].gz[query]",
  "algorithm": "gzip",
  "test": /\.js$|\.css$|\.html$/,
  "threshold": 10240,
  "minRatio": 0.8
})
```

### mini-css-extract-plugin

单独提取 css

```json
 plugins: [new MiniCssExtractPlugin(/*  config */)],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  }
```

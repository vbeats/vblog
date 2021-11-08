# chrome 插件

[文档](https://developer.chrome.com/docs/extensions/)

## manifest.json

```json
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  // 后台js service_worker进程
  "background": {
    "service_worker": "background.js"
  },
  // 权限声明
  "permissions": ["storage"],
  "host_permissions": ["*://*.example.com/*"],
  // popup 点击插件图标时的行为
  "action": {
    "default_popup": "popup.html",
    "default_title": "Click to view a popup",
    "default_icon": {
      "16": "/images/get_started16.png",
      "32": "/images/get_started32.png",
      "48": "/images/get_started48.png",
      "128": "/images/get_started128.png"
    }
  },
  // options选项菜单行为
  "options_page": "options.html",
  "icons": {
    "16": "/images/get_started16.png",
    "32": "/images/get_started32.png",
    "48": "/images/get_started48.png",
    "128": "/images/get_started128.png"
  },
  // dom中注入的js
  "content_scripts": [
    {
      "matches": ["http://*.nytimes.com/*"],
      "css": ["my-styles.css"],
      "js": ["content-script.js"]
    }
  ]
}
```

## background

background 中可以调用绝大多数 API, `devtools`相关 api 除外

## popup

点击插件图标弹出的临时交互窗口

## content_scripts

向页面中注入的 js css

## devtools

可以访问`devtools`相关 API 以及其它小部分 api

```json
{
  "devtools_page": "devtools.html"
}
```

```js
chrome.devtools.panels.create(
  "My Panel",
  "MyPanelIcon.png",
  "Panel.html",
  function (panel) {
    // code invoked on panel creation
  }
);
```

## omnibox

搜索建议

## notifications

通知

## message

通信

`sendMessage` ===> `onMessage`

`postMessage/onMessage` ===> `onConnect`

## webRequest

`chrome.webRequest` 需要声明`webRequest`相关权限

## permissions

权限声明 看文档

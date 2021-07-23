module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: '码步鱼',
    description: 'java node nodejs typescript k8s golang python react native vue vue3 flutter uni-app taro 后端 前端 app 小程序 运维 微服务 架构 微信 博客 笔记',
    themeConfig: {
        algolia: {
            apiKey: '1f2cbb2f975d56b3f102db2fbdd7d984',
            indexName: 'vblog'
        },
        sidebar: {
            "/language/": languageSider(),
            "/article/": articleSider(),
            "/other/": otherSider(),
        },
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "编程语言",
                link: "/language/",
            },
            {
                text: "文章",
                link: "/article/",
            },
            {
                text: "OpenSource",
                link: "/open/",
            },
            {
                text: "微服务",
                link: "/micro/",
            },
            {
                text: "云 ☁️",
                link: "/cloud/",
            },
            {
                text: "杂七杂八",
                link: '/other/'
            },
            { text: "GitHub", link: "https://github.com/vbeats" },
        ],
    },
}

//侧边栏
function languageSider() {
    return [
        {
            text: '编程语言',
            children: [
                { text: '文档', link: '/language/index' }
            ],
        },
    ];
}

function otherSider() {
    return [
        {
            text: "杂记",
            children: [
                { text: "常用配置", link: "/other/index" },
            ],
        },
        {
            text: "二手好货",
            children: [{ text: "珍藏", link: "/other/xianyu" }],
        },
    ]
}

function articleSider() {
    return [
        {
            text: '阿里云',
            children: [
                { text: 'sts', link: '/article/sts' }
            ],
        },
    ]
}
module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: '码步鱼',
    markdown: {
        linkify: true,
        typographer: true,
    },
    description: 'java node nodejs typescript k8s golang python react native vue vue3 flutter uni-app taro 后端 前端 app 小程序 运维 微服务 架构 微信 博客 笔记',
    themeConfig: {
        algolia: {
            apiKey: '1f2cbb2f975d56b3f102db2fbdd7d984',
            indexName: 'vblog'
        },
        sidebar: {
            "/language/": languageSider(),
            "/article/": articleSider(),
            "/open/": openSourceSider(),
            "/cloud/": cloudSider(),
            "/other/": otherSider(),
        },
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "语言基础",
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
            text: '语言基础',
            children: [
                { text: '文档', link: '/language/index' },
                { text: 'NodeJs', link: '/language/node' },
                { text: 'JVM', link: '/language/jvm' },
                { text: 'React', link: '/language/react' },
                { text: 'Python', link: '/language/python' }
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
                { text: "Linux", link: "/other/linux" },
                { text: "Nginx", link: "/other/nginx" },
                { text: "Shell", link: "/other/shell" },
                { text: "其它", link: "/other/other" },
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

function openSourceSider() {
    return [
        {
            text: '开源项目/组件',
            children: [
                { text: '文档', link: '/open/index' },
                { text: 'mongo', link: '/open/mongo' },
                { text: 'hadoop', link: '/open/hadoop' },
                { text: 'hdfs', link: '/open/hdfs' },
                { text: 'mapreduce', link: '/open/mapreduce' },
                { text: 'elk', link: '/open/elk' },
                { text: 'flink', link: '/open/flink' },
                { text: 'kafka', link: '/open/kafka' },
                { text: 'netty', link: '/open/netty' },
                { text: 'proxy', link: '/open/proxy' },
                { text: 'rocket', link: '/open/rocket' },
                { text: 'zookeeper', link: '/open/zookeeper' },
                { text: 'mysql', link: '/open/mysql' },
                { text: 'kong', link: '/open/kong' },
                { text: 'redis', link: '/open/redis' },
                { text: 'canvas', link: '/open/canvas' },
                { text: 'flutter', link: '/open/flutter' },
                { text: 'sockerio', link: '/open/sockerio' },
                { text: 'typescript', link: '/open/typescript' },
                { text: 'webpack', link: '/open/webpack' },
            ],
        },
    ]
}

function cloudSider() {
    return [
        {
            text: '云原生',
            children: [
                { text: '文档', link: '/cloud/index' },
                { text: 'k8s', link: '/cloud/k8s' },
                { text: 'rancher', link: '/cloud/rancher' },
            ],
        },
    ]
}
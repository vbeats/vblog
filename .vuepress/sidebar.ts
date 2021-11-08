import type {
  SidebarConfig,
  SidebarConfigArray,
  SidebarItem,
} from "@vuepress/theme-default";

interface Item {
  text: string;
  path: string;
  children: Array<string>;
}

const base: Array<Item> = [
  {
    text: "基础",
    path: "/base/base/",
    children: ["shell", "linux", "nginx", "configuration", "proxy"],
  },
  {
    text: "文章",
    path: "/base/article/",
    children: [""],
  },
];

const backend: Array<Item> = [
  {
    text: "基础",
    path: "/backend/base/",
    children: ["jvm", "golang", "python"],
  },
  {
    text: "文章",
    path: "/backend/article/",
    children: [""],
  },
];

const frontend: Array<Item> = [
  {
    text: "基础",
    path: "/frontend/base/",
    children: ["node", "typescript", "webpack", "flutter", "chrome", "canvas"],
  },
  {
    text: "文章",
    path: "/frontend/article/",
    children: ["sts"],
  },
];

const cloud: Array<Item> = [
  {
    text: "基础",
    path: "/cloud/base/",
    children: ["k8s", "rancher", "kong"],
  },
  {
    text: "文章",
    path: "/cloud/article/",
    children: [""],
  },
];

const arch: Array<Item> = [
  {
    text: "基础",
    path: "/arch/base/",
    children: [""],
  },
  {
    text: "文章",
    path: "/arch/article/",
    children: [""],
  },
];

const data: Array<Item> = [
  {
    text: "基础",
    path: "/data/base/",
    children: [
      "mysql",
      "redis",
      "elk",
      "hadoop",
      "hdfs",
      "mapreduce",
      "flink",
      "kafka",
      "mongo",
      "rabbit",
      "rocket",
      "zookeeper",
    ],
  },
  {
    text: "文章",
    path: "/data/article/",
    children: [""],
  },
];

const genSidebar = (text: string, items: Array<Item>): SidebarConfigArray => {
  return items.map(
    (item: Item): SidebarItem => ({
      text: item.text,
      children: item.children.map((child) => item.path + child + ".md"),
    })
  );
};

export default <SidebarConfig>{
  "/base/": genSidebar("杂记", base),
  "/backend/": genSidebar("后端", backend),
  "/frontend/": genSidebar("前端", frontend),
  "/cloud/": genSidebar("云 ☁️", cloud),
  "/arch/": genSidebar("架构", cloud),
  "/data/": genSidebar("数据处理", data),
};

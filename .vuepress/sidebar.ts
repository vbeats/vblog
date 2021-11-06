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
    children: ["shell"],
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
    children: ["jvm", "golang", "python", "redis"],
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
    children: ["node"],
  },
  {
    text: "文章",
    path: "/frontend/article/",
    children: ["sts"],
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
};

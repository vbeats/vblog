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
    path: "/base/lang/",
    children: ["jvm", "node"],
  },
  {
    text: "文章",
    path: "/base/article/",
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
};

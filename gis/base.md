## 基础语法

```bash
gmt begin file_name [文件类型1,文件类型2]

    gmt coast -Rg -JH15c -Gpurple -Baf -B+t"My First Plot"   #  gmt + 模块名 + 选项 + 参数

gmt end show
```


`coast` 绘制海岸线

`-J` 选项指定地图投影参数以及地图的尺寸
`-R` 选项指定要绘制的区域范围（即经纬度范围）
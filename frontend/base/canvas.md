# Canvas

## 基本图形

```html
<canvas id="cv" width="500" height="500"></canvas>
<script>
  const cv = document.querySelector("#cv");
  const ctx = cv.getContext("2d");

  ctx.rect(50, 50, 300, 300); // 矩形
  ctx.fill();

  ctx.strokeStyle = "red"; // 线条
  ctx.lineWidth = 20;
  ctx.stroke();

  // 线段
  ctx.beignPath();

  ctx.moveTo(20, 20);
  ctx.lineTo(400, 400);
  ctx.lineTo(600, 400); // 经过多个点

  ctx.closePath();
</script>
```

`lineCap`:端点样式 `lineJoin`:连接点样式

- 圆

```js
ctx.arc(300, 300, 100, 0, Math.PI, false); // 圆心  半径  起始角度  结束角度  是否逆时针
```

- text

```js
ctx.font = "20px 微软雅黑";
ctx.fillText("xxxx", 100, 200);

ctx.strokeText("xxxx", 200, 30);
```

- img

```js
const img = new Image();
img.src = "./xx.png"; // 加载完毕再渲染

img.onload = function () {
  ctx.drawImage(img, 20, 30); // img,[裁剪起始位置x, 裁剪起始位置y, width, height] ,x ,y, width, height
};

// 叠加 globalCompositeOperation

/* source-over	默认。在目标图像上显示源图像。
source-atop	在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
source-in	在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
source-out	在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
destination-over	在源图像上方显示目标图像。
destination-atop	在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
destination-in	在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
destination-out	在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
lighter	显示源图像 + 目标图像  叠加部分透明。
copy	显示源图像。忽略目标图像。
xor	使用异或操作对源图像与目标图像进行组合。 */

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 200, 200); // dest

ctx.globalCompositeOperation = "source-atop";

ctx.fillStyle = "blue";
ctx.fillRect(200, 200, 200, 200); // orign
```

## transform

```js
// 移动坐标
ctx.translate(10, 10); // 坐标原点移动

ctx.rotate(Math.PI / 4); // 坐标系顺时针旋转

ctx.scale(2, 3); // 缩放坐标比例
```

## context

```js
// 保存/恢复 canvas上下文信息    多次保存  需要多次恢复
ctx.save();

ctx.resore();
```

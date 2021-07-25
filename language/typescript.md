# TypeScript

## 类型

```ts
// const xxx: type1 | type2= ...

const xxx: string = "xxx";

/*
boolean
string
number
tuple (数组, 元素类型可以不同)
array (number[]  string[] ....  Array<number> ...)
enum xxx{
    a=1,
    b=2
}

any
null
undifined
void
never

 */
```

## function

```ts
function xxx(ccc: string, age: number): void {
  // ...
}
```

## class

```ts
class Xxx {
  name: string; // public

  constructor(nnn: string) {
    // ....
  }

  test(): void {
    // ....
  }
}

class Yyyy extends Xxx {
  static ooo: number;

  constructor(nnn: string) {
    super(nnn);
    // ....
  }

  static vvv(): void {
    // ....
  }
}

abstract class Zzzz {
  // ...
  abstract kkkk(): void;
}
```

## interface

```ts
interface Xcc {
  name: string;
  age: number;

  // ? 可选属性
  address?: string;
}

// 约束参数类型
function xxx(info: Xcc) {
  // ....
}

// 函数接口
interface xxx {
  (k: string, v: string): string;
}

const jjj: xxx = (k: string, v: string): string => {};

// 可索引接口

interface Arr {
  [index: number]: string;
}

oo: Arr = ["aaa", "bbbb"];

// 接口实现
class Ppp implements Xcc {
  // .....
}

interface Xcc2 extends Xcc {
  // ...
}
```

## 泛型

```ts
function xxxx<T>(k: T): T {
  // ....
}

// 泛型类
class Xxx<T> {
  jjj: T;

  test(v: T): T {
    // ....
  }
}

// 泛型接口
interface Dddd<T> {
  (k: T, v: string): T;
}
```

## namespace

> 命名空间

## 装饰器

> 本质就是一个方法

```ts
// 普通装饰器
function log(target: any) {
  console.log(target); // 被装饰的对象
  // target..... 做一些操作

  // 返回了子类对象
  return class extends target {
    // ......
  };
}

// 装饰器工厂
function logFactory(params: any) {
  return function(target: any) {
    // params: 装饰器接收的参数
    // target: 被装饰的对象
    // 对target 做...操作
  };
}

@log
class Xxx {
  // ....

  test() {
    // ....
  }
}

@logFactory("msg")
class Xxx2 {
  // ....
}

// ---------------
// 属性装饰器

function log(params: any) {
  return function(target: any, attr: any) {
    // params : 装饰器的参数
    // target: 所在类的原型对象
    // attr: 属性名
  };
}

class Xxx {
  @log("ddd")
  name: string;
}

// ----------------
// 方法装饰器

function log(params: any) {
  return function(target: any, methodName: any, desc: any) {
    // params : 装饰器的参数
    // target: 所在类的原型对象
    // methodName: 方法名
    // desc: 方法的定义描述
  };
}

class Xxx {
  name: string;

  @log("fffff")
  test(): void {
    // ...
  }
}

// ----------------
// 方法参数装饰器

function log(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    // params : 装饰器的参数
    // target: 所在类的原型对象
    // methodName: 方法名
    // paramsIndex: 参数索引
  };
}

class Xxx {
  name: string;

  test(@log("oooo") k: string): void {
    // ...
  }
}
```

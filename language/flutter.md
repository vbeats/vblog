# Flutter

[Flutter](https://pub.dev/flutter)

## Dart

### 基础语法

```dart
void main() {
  // 变量定义
  var xx='...';
  String? oo="$xx $oo";   // ? 可以为null
}
```

`var` 自动类型推断

类型: `String` `bool` `int` `double`... 常量: `const` `final`

`''' ...... '''` : 多行字符串

数组/集合: `[ ]` `<String>[ ]`

`List`: `List.filled(length,till)` 固定长度

`Set`: `new Set()`

`Map`: `var x={"key":"value"}` 或 `new Map()` 访问 `x['key']`

类型判断: `is`

方法:

可选参数, 默认参数 `String? func(String oo,[int xx=0])`

命名参数: `void func( String oo,{required int xx]}`

断言 `!` 类型不匹配抛异常

类: `class`

```dart
class Person {
  String name="";
  late int age;  // late 延迟初始化
  int _gender; // 私有属性 或 私有方法 加 _

  // 无参构造方法
  Person():name="xx",age=30{

  }

  // 带参构造方法
  Person(String name,int age){

  }

  // 简写
  Person(this.name,this.age);

  // 匿名构造方法
  Person.xx(){

  }

  // getter
  get oo{
    return "gettter";
  }

  // setter   p.xxxx=20
  set xxxx(v){
    this.age=v;
  }

  static void test(){}
}
```

继承 `extends`

```dart
class T extends Person{
  T(String name,int age):super.xx(name,age){

  }
}
```

抽象类/接口 `abstract` dart 没有专门的 interface

`mixins`: `class A with B,C`

泛型: 和 java 差不多

内置库: `import dart:....` 部分引入 `import .... show/hide xxx`

`factory` 工厂构造方法

```dart
class Logger {
  final String name;
  bool mute = false;

  // _cache is library-private, thanks to
  // the _ in front of its name.
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(
        name, () => Logger._internal(name));
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}

var logger = Logger('UI');
logger.log('Button clicked');
```

## Flutter

###

`StatelessWidget` `StatefullWidget`

```dart
ListView
GridView
Row Column Stack Positioned Card
Navigator
```

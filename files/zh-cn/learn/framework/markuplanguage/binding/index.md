---
title: 数据绑定
slug: Learn/Framework/MarkupLanguage/Binding
---

## 文本

数据绑定最常见的的方式便是通过双大括号的语法，即 `\{\{` 和 `\}\}`。其中内部的头尾空格是可选的。

```html
<view>\{\{ message }}</view>
```

当开发者设置 `message` 不是字符串的时候，框架会尽可能将 `message` 渲染成文字：

- 如果为 `undefined`，渲染为空。
- 如果为数组，渲染成对应的数字。
- 如果为布尔，渲染成 `true` 或 `false`。
- 如果为对象，渲染成 `[object Object]`。
- 如果为数组，渲染成 Array.prototype.join 合并后的结果。

## 属性

```html
<!-- 双引号括住变量 -->
<view id="item-\{\{id}}" style="\{\{styles}}"></view>
```

### 布尔属性

```html
<!-- 表示 true -->
<checkbox checked="\{\{true}}"></checkbox>
<!-- 表示 false -->
<checkbox checked="\{\{false}}"></checkbox>
<!-- 错误：不能使用字符串的 true/false，实际都为 true -->
<checkbox checked="false"></checkbox>
<checkbox checked="true"></checkbox>
```

除了使用标准的方法以外，在明确仅仅需要使用 `true` 的场景下，可以简写成如下。

```html
<!-- 等价为 checked="\{\{true}}" -->
<checkbox checked></checkbox>
<!-- 错误：不能为空，实际为 false -->
<checkbox checked=""></checkbox>
```

### 对象属性

有的组件需要获取到字符串、布尔以外的数据类型，例如对象、数组等，此时不能使用任何字符串拼接的绑定语法。

```html
<!-- 数据绑定的大括号前后不能有任何空格 -->
<picker range="\{\{range}}"></picker>
<!-- 错误，都是不正确的，此时 range 接受到的是字符串而非数组 -->
<picker range=" \{\{range}} "></picker>
<picker range="value-\{\{range}}"></picker>
```

> 当属性前后存在空格的时候，会自动进行字符串的拼接，导致最后赋值到属性上的值为字符串，而不是表达式本身的值。

## 运算

可以在 `\{\{ \}\}` 内进行简单的运算，大部分运算规则和逻辑与 JavaScript 语法保持一致，支持的有如下几种方式：

### 三元运算

```html
<view hidden="\{\{flag ? true : false}}">Hidden</view>
```

### 数值运算

支持 `+`, `-`, `*`, `/`, 和括号 `(` `)` 运算符。

```html
<view>\{\{a + b}} + \{\{c}} + d</view>
```

### 字符串运算

使用 `+` 运算符拼接两端字符串。

```html
<view>\{\{"hello" + name}}</view>
```

> 由于 JS 语言的特性，`+` 运算符究竟是字符串拼接还是数值计算依靠两侧的值类型的不同而不同，使用的时候需要注意。具体规则可以[查看 MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)

### 对象索引运算

与 JS 类似，使用 `.` 运算符或者 `[ ]` 运算符访问对象或者数组的属性值。

```html
<view>\{\{object.key}} \{\{array[0]}}</view>
```

### 逻辑运算符

支持 `<`, `>`, `<=`, `>=`, `!=`, `!==`, `==`, `===` 运算符，规则与 JS 一致

```html
<view tt:if="\{\{length > 5}}"></view>
```

> 通常配合三元表达式一起使用

## 字面量

支持在大括号内直接使用字面量，而不是变量

### 数组

使用 `[`, `]` 创建数组字面量。

```html
<view tt:for="\{\{[zero, 1, 2, 3, 4]}}">\{\{item}}</view>
```

### 对象

在数据绑定内使用 `\{`, `\}` 创建对象字面量。

```html
<picker range="\{\{[{a: 1}, {b: 2}]}}"></picker>
```

支持部分 ES6 对象操作符和能力，例如 `...` 展开操作符和对象属性简写。

```html
<picker range="\{\{[{...foo, a}, {...bar, b}]}}"></picker>
```

但是注意有一个例外的情况，在 `template` 中的 `data` 属性的对象绑定语法，需要省略最外层的 `{`, `}`。

```html
<template data="\{\{foo: a, bar: {a: 1}}}"></template>
<!-- 错误：最外层的对象不能添加 { } -->
<template data="\{\{{foo: a, bar: {a: 1}}}}"></template>
```

这样做的目的是为了保证 `data` 接受到的永远是一个对象，而不是数组等其他类型的值。

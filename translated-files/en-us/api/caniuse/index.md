---
title: caniuse
slug: API/caniuse
---

判断当前版本下是否支持 API、回调、参数是否可用。

## 语法

```js
tt.caniuse(schema)
```

## 参数

- `schema` `{string}`
  需要检测的能力匹配模式，针对 API 为 `api.method.param.option`，针对组件为 `component.attribute.option`。
  - `api` API 名称
  - `method` 调用方式，有效值为 `return`、`success`、`object`、`callback`
  - `param` 参数名或者返回值名
  - `option` 参数的有效值或者返回值的属性或者组件属性的有效值
  - `component` 组件名字
  - `attribute` 组件属性名

## 返回值

布尔类型的值，`true` 表示当前环境支持此特性，反之则为 `false`。

## 兼容性

<og-compact ref="api.caniuse"></og-compact>

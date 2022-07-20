---
title: 条件渲染
slug: Learn/Framework/MarkupLanguage/Condition
---

在框架中，使用 `tt:if="\{\{condition}}"` 来判断是否需要渲染该代码块：

```html
<view tt:if="\{\{condition}}">True</view>
```

当 `condition` 为 `true` 的时候，渲染 `True`，如果为 `false` 则不会渲染任何标签。

## else 块

可以用 `tt:elif` 和 `tt:else` 来添加一个 else 块：

```html
<view tt:if="\{\{length > 5}}">1</view>
<view tt:elif="\{\{length > 2}}">2</view>
<view tt:else>3</view>
```

> `tt:elif` 和 `tt:else` 必须要和 `tt:if` 配套使用，且必须在相同的层级。

## 多标签渲染

默认情况下，`tt:if` 只能控制一个标签，如果要同时控制多个标签的渲染，可以使用 `<block/>` 和 `tt:if`，`<block/>` 不会在实际展示页面中产生任何标签。

```html
<block tt:if="\{\{true}}">
  <view>view1</view>
  <view>view2</view>
</block>
```

## `hidden`

当 `tt:if` 的表达式的结果变化的时候，原先的节点会被删除，然后创建新的节点。如果节点数量众多导致创建和销毁的性能过差，可以使用 `hidden` 属性进行优化。

```html
<view hidden="\{\{condition}}"> True </view>
```

`hidden` 属性不会创建或者销毁节点，它只是负责节点的显示和隐藏，因此切换的性能相比 `tt:if` 高。

> 一般来说，`tt:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗（不论表达式的结果为何，都会进行渲染）。因此，如果需要频繁切换的情景下，用 `hidden` 更好，如果不会频繁切换的场景下用 `tt:if` 较好。

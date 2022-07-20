---
title: 列表渲染
slug: Learn/Framework/MarkupLanguage/Repeating
---

我们经常需要渲染列表，这个时候我们可以在需要重复的标签上使用 `tt:for`。
默认会在作用域内创建当前下标 `index` 变量和当前值 `item` 变量。

```html
<view tt:for="\{\{array}}">
    <text>\{\{index}}: \{\{item.message}}</text>
</view>
```

> `tt:for="\{\{array}}"` 不能简写为 `tt:for="array"` 也不能在 `\{\{ }}` 左右添加任何其他字符串，否则会被认为字符串循环而不是数组循环，产生预期外行为。

## 自定义循环变量名

当存在多重嵌套循环的时候，默认情况下，内部的 `index`/`item` 变量会覆盖外面的变量。当希望可以在内部访问到外部的变量的时候，可以使用 `tt:for-item` 修改当前循环元素的变量名以及 `tt:for-index` 修改当前循环下标的变量名。
也可以用于修改单层循环的默认变量名。

```html
<view tt:for="\{\{array}}" tt:for-index="idx" tt:for-item="itemName">
    <text>\{\{idx}}: \{\{itemName.message}}</text>
</view>
```

> `tt:for-item` 和 `tt:for-index` 均不支持动态插值表达式，只接受字符串

## 多节点渲染

将 tt:for 用在 `<block/>` 标签上，以渲染一个包含多节点的结构块。`<block/>` 标签不会产生实际存在的标签。

```html
<block tt:for="\{\{[1, 2, 3]}}">
    <view><text>\{\{index}}</text></view>
    <view><text>\{\{item}}</text></view>
</block>
```

## 状态维护

默认情况下，列表更新的时候会尝试根据索引位置复用之前的组件。这种模式是最高效的，但只适用于不依赖子组件状态或临时标签状态（例如 input 输入的值）的列表循环。

可以通过 `tt:key` 通知 TTML 让其可以追踪每个节点的状态。

`tt:key` 的值以两种形式提供:

1.  字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，不支持插值表达式。
1.  保留关键字 `*this`，代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。

```html
<some-component tt:for="\{\{array}}" tt:key="id"></some-component>
```

## 以字符循环

当 `tt:for` 接收到一个字符串的时候，会按照字符进行循环。其中 `item` 表示为当前字符，而 `index` 则表示为字符所在的位置索引。

```html
<view tt:for="hello">\{\{item}}-</view>
```

会按照入参的字符串渲染为 `h-e-l-l-o-`。

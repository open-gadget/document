---
title: Conditional rendering
slug: Learn/Framework/MarkupLanguage/Condition
---
In the frame, use `tt:if="\{\{condition}}"` to determine if the block needs to be rendered:

```html
<view tt:if="\{\{condition}}">True</view>
````

When `condition` is `true`, render `True`, if `false` no labels are rendered.

## else block

An else block can be added with `tt:elif` and `tt:else`:

```html
<view tt:if="\{\{length > 5}}">1</view>
<view tt:elif="\{\{length > 2}}">2</view>
<view tt:else>3</view>
````

> `tt:elif` and `tt:else` must be used together with `tt:if` and must be at the same level.

## Multi-tab rendering

By default, `tt:if` can only control one tag. If you want to control the rendering of multiple tags at the same time, you can use `<block/>` and `tt:if`, `<block/>` will not be used in actual Any tags generated in the display page.

```html
<block tt:if="\{\{true}}">
  <view>view1</view>
  <view>view2</view>
</block>
````

## `hidden`

When the result of the `tt:if` expression changes, the original node is deleted and a new node is created. If a large number of nodes cause poor performance of creation and destruction, the `hidden` property can be used to optimize it.

```html
<view hidden="\{\{condition}}"> True </view>
````

The `hidden` attribute does not create or destroy nodes, it is only responsible for showing and hiding nodes, so the performance of switching is higher than `tt:if`.

> In general, `tt:if` has a higher switching cost and `hidden` has a higher initial rendering cost (it will render regardless of the result of the expression). Therefore, if you need to switch frequently, it is better to use `hidden`, and if you do not switch frequently, it is better to use `tt:if`.

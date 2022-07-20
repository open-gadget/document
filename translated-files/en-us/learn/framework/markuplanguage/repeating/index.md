---
title: List rendering
slug: Learn/Framework/MarkupLanguage/Repeating
---
We often need to render lists, at this time we can use `tt:for` on the tags that need to be repeated.
By default, the current index `index` variable and the current value `item` variable are created in scope.

```html
<view tt:for="\{\{array}}">
    <text>\{\{index}}: \{\{item.message}}</text>
</view>
````

> `tt:for="\{\{array}}"` cannot be shortened to `tt:for="array"` nor can you add any other strings around `\{\{ }}`, otherwise it will be considered Looping over strings instead of arrays produces unexpected behavior.

## custom loop variable name

When there are multiple nested loops, the inner `index`/`item` variables override the outer ones by default. When you want to access external variables internally, you can use `tt:for-item` to modify the variable name of the current loop element and `tt:for-index` to modify the variable name of the current loop subscript.
It can also be used to modify the default variable names for single-level loops.

```html
<view tt:for="\{\{array}}" tt:for-index="idx" tt:for-item="itemName">
    <text>\{\{idx}}: \{\{itemName.message}}</text>
</view>
````

> `tt:for-item` and `tt:for-index` do not support dynamic interpolation expressions, only strings

## Multi-node rendering

Use tt:for on a `<block/>` tag to render a multi-node struct block. The `<block/>` tag does not generate an actual tag.

```html
<block tt:for="\{\{[1, 2, 3]}}">
    <view><text>\{\{index}}</text></view>
    <view><text>\{\{item}}</text></view>
</block>
````

## Status maintenance

By default, when the list is updated, it will try to reuse the previous components according to the index position. This pattern is the most efficient, but only works for list loops that don't rely on child component state or temporary label state (such as the value of an input ).

TTML can be notified via `tt:key` so that it can track the state of each node.

The value of `tt:key` is provided in two forms:

1. String, representing a property of item in the array of the for loop. The value of the property needs to be a unique string or number in the list, and interpolation expressions are not supported.
1. The reserved keyword `*this` represents the item itself in the for loop. This representation requires the item itself to be a unique string or number.

```html
<some-component tt:for="\{\{array}}" tt:key="id"></some-component>
````

## loop through characters

When `tt:for` receives a string, it will loop by characters. Where `item` represents the current character, and `index` represents the index of the position where the character is located.

```html
<view tt:for="hello">\{\{item}}-</view>
````

It will be rendered as `h-e-l-l-o-` according to the input string.

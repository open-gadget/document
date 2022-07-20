---
title: Data Binding
slug: Learn/Framework/MarkupLanguage/Binding
---

## text

The most common way of data binding is through the double curly brace syntax, `\{\{` and `\}\}`. The internal leading and trailing spaces are optional.

```html
<view>\{\{ message }}</view>
````

When the developer sets `message` to not be a string, the framework will render `message` as text whenever possible:

- If `undefined`, render empty.
- If it is an array, render as the corresponding number.
- If boolean, render as `true` or `false`.
- If an object, render as `[object Object]`.
- If it is an array, render as the result of Array.prototype.join merged.

## Attributes

```html
<!-- Double quotes around the variable -->
<view id="item-\{\{id}}" style="\{\{styles}}"></view>
````

### boolean properties

```html
<!-- means true -->
<checkbox checked="\{\{true}}"></checkbox>
<!-- means false -->
<checkbox checked="\{\{false}}"></checkbox>
<!-- error: cannot use true/false for strings, both are true -->
<checkbox checked="false"></checkbox>
<checkbox checked="true"></checkbox>
````

In addition to using the standard method, in cases where it is clear that only `true` is required, it can be abbreviated as follows.

```html
<!-- Equivalent to checked="\{\{true}}" -->
<checkbox checked></checkbox>
<!-- error: cannot be null, actually false -->
<checkbox checked=""></checkbox>
````

### Object Properties

Some components need to obtain data types other than strings and Booleans, such as objects, arrays, etc. In this case, any binding syntax for string concatenation cannot be used.

```html
<!-- Data binding braces cannot have any spaces before and after -->
<picker range="\{\{range}}"></picker>
<!-- errors, all are incorrect, at this time range receives a string instead of an array -->
<picker range=" \{\{range}} "></picker>
<picker range="value-\{\{range}}"></picker>
````

> When there are spaces before and after the attribute, the string will be concatenated automatically, resulting in the final value assigned to the attribute as a string instead of the value of the expression itself.

## operation

Simple operations can be performed in `\{\{ \}\}`. Most of the operation rules and logic are consistent with the JavaScript syntax. The following methods are supported:

### Ternary operations

```html
<view hidden="\{\{flag ? true : false}}">Hidden</view>
````

### Numerical operations

The `+`, `-`, `*`, `/`, and bracket `(` `)` operators are supported.

```html
<view>\{\{a + b}} + \{\{c}} + d</view>
````

### String operations

Use the `+` operator to concatenate strings at both ends.

```html
<view>\{\{"hello" + name}}</view>
````

> Due to the characteristics of the JS language, whether the `+` operator is a string concatenation or a numerical calculation depends on the difference of the value types on both sides, so you need to pay attention when using it. Specific rules can be [see MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)

### Object indexing operations

Similar to JS, use the `.` operator or the `[ ]` operator to access object or array property values.

```html
<view>\{\{object.key}} \{\{array[0]}}</view>
````

### Logical Operators

Support `<`, `>`, `<=`, `>=`, `!=`, `!==`, `==`, `===` operators, the rules are consistent with JS

```html
<view tt:if="\{\{length > 5}}"></view>
````

> Usually used with ternary expressions

## literal

Support direct use of literals within curly braces instead of variables

### array

Use `[`, `]` to create array literals.

```html
<view tt:for="\{\{[zero, 1, 2, 3, 4]}}">\{\{item}}</view>
````

### objects

Use `\{`, `\}` inside data binding to create object literals.

```html
<picker range="\{\{[{a: 1}, {b: 2}]}}"></picker>
````

Supports some ES6 object operators and capabilities, such as the `...` spread operator and object property shorthand.

```html
<picker range="\{\{[{...foo, a}, {...bar, b}]}}"></picker>
````

But note that there is an exception, in the object binding syntax of the `data` property in `template`, the outermost `{`, `}` needs to be omitted.

```html
<template data="\{\{foo: a, bar: {a: 1}}}"></template>
<!-- error: outermost object cannot add { } -->
<template data="\{\{{foo: a, bar: {a: 1}}}}"></template>
````

The purpose of this is to ensure that `data` will always receive an object, rather than other types of values ​​such as arrays.

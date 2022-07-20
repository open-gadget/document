---
title: Reference
slug: Learn/Framework/MarkupLanguage/Import
---

TTML provides two ways of referencing files: `import` and `include`.

## import

`import` can use the `template` defined by the object file in this file, such as:

A `template` called `item` is defined in item.ttml:

```html
<!-- item.ttml -->
<template name="item">
    <text>\{\{text}}</text>
</template>
````

With item.ttml referenced in index.ttml, the `item` template can be used:

```html
<!-- index.ttml -->
<import src="item.ttml"/>
<template is="item" data="\{\{text: 'forbar'}}"/>
````

### import scope

`import` has the concept of scope, i.e. it will only `import` the `template` defined in the object file, but not the `template` of the `import` object file.

**For example: C import B, B import A, the template defined by B can be used in C, and the template defined by A can be used in B, but C cannot use the template defined by A. **

```html
<!-- A.ttml -->
<template name="A"> <text> A template </text></template>

<!-- B.ttml -->
<import src="a.ttml"/>
<template name="B">
    <text> B template </text>
</template>

<!-- C.ttml -->
<import src="b.ttml"/>
<template is="A"/><!-- Error! Can not use tempalte when not import A. -->

<template is="B"/>
````

##include

include can import the entire code of the target file except `<template/>`, which is equivalent to copying it to the include location, such as:

```html
<!-- index.ttml -->
<include src="header.ttml"/>
<view><text>body</text></view>
<include src="footer.ttml"/>

<!-- header.ttml -->
<view><text>header</text></view>

<!-- footer.ttml -->
<view><text>footer</text></view>
````

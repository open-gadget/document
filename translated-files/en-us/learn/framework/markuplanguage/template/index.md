---
title: Template
slug: Learn/Framework/MarkupLanguage/Template
---

TTML provides templates (template tags) in which code snippets can be defined and then used in different places.

## define template

Use the `name` attribute as the name of the template. Then define code snippets inside `<template/>` like:

```html
<template name="msgItem">
  <view>
    <text> \{\{index}}: \{\{msg}} </text>
    <text> Time: \{\{time}} </text>
  </view>
</template>
````

The scope inside a `template` is independent of the outside world, you cannot use any outside variables (including the `data` of the instance where the template is defined), you can only use variables that are actively passed to the template (see *using templates*).

> `name` does not support interpolation expressions.

Once a template is defined, it can only be used within the current TTML or other TTMLs by reference.

Template definitions are not affected by their location, all template definitions will be promoted to the top level, and template duplicate names are not allowed.

## use template

Use the `is` attribute to declare the template you want to use, and then pass in the `data` required by the template, such as:

```html
<template is="msgItem" data="\{\{index: 0, msg: 'Hello', time: 'Today'}}"/>
````

It is also possible to dynamically decide which template to render using an interpolation expression:

```html
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block tt:for="\{\{[1, 2, 3, 4, 5]}}">
  <template is="\{\{item % 2 === 0 ? 'even' : 'odd'}}"/>
</block>
````

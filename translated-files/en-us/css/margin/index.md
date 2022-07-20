---
title: margin
slug: CSS/margin
---
## introduce

TTSS Shorthand property that controls the margin properties of all four sides of an element. An element's margin controls the space left outside the element. This property can be negative and defaults to 0.

## grammar

````css
/* apply to all edges */
margin: 1em;

/* top bottom | left right */
margin: 5% -10%;

/* top | left right | bottom */
margin: -1em 2em 2em;

/* top | right | bottom | left */
margin: 5px -1em 0 2em;
````

### value

- `<length>`

Use a fixed value for margins.

- `<percentage>`

The margin, as a percentage, relative to the width of the containing block.

### Standardized syntax

````css
margin: [<length> | <percentage>]{1, 4}
````

## example

```html
<view class="outside">
<text>This element will appear outside the containing block. </text>
</view>
````

````css
.outside {
   margin: 3em 0 0 -3em;
   background: red;
   width: 66%;
}
````

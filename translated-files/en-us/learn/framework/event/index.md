---
title: Event
slug: Learn/Framework/Event
---

## What is an event

- Events are the communication method from the view layer to the logic layer.
- Events can feed back the user's behavior to the logic layer for processing.
- Events can be bound to components, and when the trigger event is reached, the corresponding event handler function in the logic layer will be executed.
- Event objects can carry additional information, such as `id`, `dataset`, `touches`.

## Event classification

Events are divided into bubbling events and non-bubbling events:

1. Bubbling event: When an event on a component is triggered, the event will be passed to the parent node, and the parent node will also receive the same event. The list of bubbling events is as follows:

| Type | Trigger Condition |
| -------------- | ----------------------------- |
| touchstart | Finger touch action starts |
| touchmove | Move after finger touch |
| touchend | Finger touch action ends |
| tap | Leave immediately after finger touch |
| transitionend | will be triggered after the TTSS transition animation ends |
| animationstart | will fire when a TTSS animation starts |
| animationend | will fire when a TTSS animation finishes |

2. Non-bubbling events: When an event on a component is triggered, the event will not be passed to the parent node.

## Bind events

Event bindings are written similar to component properties, such as:

```html
<view id="tapTest" data-hi="world" bindtap="tapName">
  <text>Click me!</text>
</view>
````
````javaScript
Block({
  methods: {
    tapName: function(event) { console.log(event) }
  }
})
````

If the user taps this view, the page's `handleTap` will be called.

You can see that properties starting with `bind` on the component are used to bind event listeners. For example `bindtap` binds the `tap` event, and `bindtouchmove` binds the `touchmove` event. The value set by the property is the name of the method on the instance that accepts this event. Such as `tapName`.

The information of the event object printed by the `console.log` above is roughly as follows:

````javaScript
{
  "type":"tap",
  "timeStamp":895,
  "target": {
    "id": "tapTest",
    "dataset": { "hi":"world" }
  },
  "currentTarget": {
    "id": "tapTest",
    "dataset": { "hi":"world" }
  },
  "detail": { "x":53, "y":14},
  "touches":[{
      "identifier":0,
      "pageX":53,
      "pageY":14,
      "clientX":53,
      "clientY": 14
  }],
  "changedTouches":[{
    "identifier":0,
    "pageX":53,
    "pageY":14,
    "clientX":53,
    "clientY": 14
  }]
}
````

At the same time, the value of the event binding can also be a data binding, such as:

```html
<view bindtap="{{handlerName}}">
  <text>Click me!</text>
</view>
````

At this point, the page's `this.data.handlerName` must be a string specifying the event handler name; if it is an empty string, the binding will be invalid (you can use this feature to temporarily disable some events).

### Bind and prevent event bubbling

In addition to `bind`, you can also use `catch` to bind events. Unlike `bind`, `catch` prevents events from bubbling up.

For example, in the example below, clicking on the inner view will call `handleTap3` and `handleTap2` successively (because the tap event will bubble to the middle view, and the middle view prevents the tap event from bubbling and is no longer passed to the parent node), click The middle view will trigger `handleTap2`, and clicking on the outer view will trigger `handleTap1`.

```html
<view id="outer" bindtap="handleTap1">
  <text>outer view</text>
  <view id="middle" catchtap="handleTap2">
    <text>middle view</text>
    <view id="inner" bindtap="handleTap3">
      <text>inner view</text>
    </view>
  </view>
</view>
````

## Event details

### event object

Unless otherwise specified, when a component triggers an event, the handler function bound to the event at the logic layer will receive an event object.

#### BaseEvent base event object property list:

| property | type | description |
| ------------- | ------- | --------------- |
| type | String | Event type |
| timeStamp | Integer | Timestamp when the event was generated |
| target | Object | A collection of property values ​​of the component that triggers the event |
| currentTarget | Object | Collection of some property values ​​of the current component |

#### CustomEvent custom event object property list

> inherit BaseEvent

| property | type | description |
| ------ | ------ | ----- |
| detail | Object | Additional information, different events correspond to different values ​​|

#### TouchEvent touch event object property list

> inherit BaseEvent

| property | type | description |
| -------------- | ----- | ------------ |
| touches | Array | touch events, an array of touch point information currently staying on the screen |
| changedTouches | Array | touch events, an array of currently changed touch points information |

> In PC browser mode, `touch` events are simulated based on mouse events

### Event object properties

#### `target`

A collection of some property values ​​of the component that triggered the event;

| property | type | description |
| ------- | ------ | ------------------------- |
| id | String | The id of the event source component |
| dataset | Object | A collection of custom properties starting with data- on the event source component |

#### `currentTarget`

Some property value sets of the component bound to the event handler;

| property | type | description |
| ------- | ------ | ------------------------- |
| id | String | The id of the current component |
| dataset | Object | A collection of custom properties starting with data- on the current component |

#### `dataset`

Data can be customized in the component, which can be obtained through the `dataset` property of the event object. Writing method: Begin with `data-`, multiple words are connected by hyphen -, no uppercase (uppercase will be automatically converted to lowercase) such as `data-element-type`, and finally will be in `event.currentTarget.dataset` Convert hyphens to camelCase `elementType`.

Sample code:

```html
<!-- index.ttml -->
<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap">
  <text>DataSet Test </text>
</view>
````
````javaScript
Block({
  methods: {
    bindViewTap:function(event){
      // - will be converted to camel case event.currentTarget.dataset.alphabeta === 2
      // uppercase will be converted to lowercase
      event.currentTarget.dataset.alphaBeta === 1
    }
  }
})
````

#### `detail`

The data carried by the custom event, such as the submit event of the form component, will carry the user's input. For details, please refer to the definition of each event in the component definition.


#### `touches`

touches is an array, each element is a Touch object (the touches carried in the canvas touch event is the CanvasTouch array). Indicates the touch point currently resting on the screen.

##### Touch Object

| property | type | description |
| ---------------- | ------ | ------------------------- -------------- |
| identifier | String | Identifier of the touch point |
| pageX, pageY | Number | The distance from the upper left corner of the document, the upper left corner of the document is the origin, the horizontal axis is the X axis, and the vertical axis is the Y axis |
| clientX, clientY | Number | The distance from the upper left corner of the displayable area of ​​the page (excluding the navigation bar on the screen), the horizontal axis is the X axis, and the vertical axis is the Y axis |

##### CanvasTouch object

| property | type | description |
| ---------- | ------ | ------------------------------- ----------------- |
| identifier | String | Identifier of the touch point |
| x, y | Number | The distance from the upper left corner of the Canvas, the upper left corner of the Canvas is the origin

---
title: 鼠标事件
slug: Learn/Framework/Event/MouseEvent
---

# 兼容性

- PC ≥ 5.18

# 使用
在 PC 端小程序中，可以监听如下鼠标事件：

- `mousedown`
- `mousemove`
- `mouseup`
- `mouseover`
- `mouseenter`
- `mouseout`
- `mouseleave`

除了基础的事件对象的属性以外，还会有如下属性：

| 属性      | 类型     | 说明                         |
| ------- | ------ | -------------------------- |
| ctrlKey | boolean | 同 [MouseEvent.ctrlKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/ctrlKey) 一致 |
| shiftKey | boolean | 同 [MouseEvent.shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey) 一致 |
| altKey | boolean | 同 [MouseEvent.altKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey) 一致 |
| metaKey | boolean | 同 [MouseEvent.metaKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/metaKey) 一致 |
| button | number | 同 [MouseEvent.button](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button) 一致 |
| relatedTarget | EventTarget  | 同 `target` 属性一致，如果不存在则为 null |
| clientX | number | 同 [MouseEvent.clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) 一致 |
| clientY | number | 同 [MouseEvent.clientY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY) 一致 |
| screenX | number | 同 [MouseEvent.screenX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX) 一致 |
| screenY | number | 同 [MouseEvent.screenY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenY) 一致 |
| pageX | number | 同 [MouseEvent.pageX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX) 一致 |
| pageY | number | 同 [MouseEvent.pageY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY) 一致 |
| offsetX | number | 同 [MouseEvent.offsetX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX) 一致 |
| offsetY | number | 同 [MouseEvent.offsetY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY) 一致 |

当 `target` 为 `canvas` 组件的时候，还会存在 `x`/`y` 属性。

| 属性      | 类型     | 说明                         |
| ------- | ------ | -------------------------- |
| x | number | 距离 `canvas` 组件左上角的横向距离 |
| y | number | 距离 `canvas` 组件左上角的纵向距离 |

# Tips

- 当监听了鼠标事件之后，并不会阻止触摸事件的触发。
  如果应用程序需要同时运行在移动端和 PC 端，那么需要手动处理两个事件重复触发的情况。

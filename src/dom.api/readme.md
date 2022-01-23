# DOM API 及其继承关系

- EventTarget
    - addEventListener()
    - removeEventListener()
    - dispatchEvent()

EventTarget <- Node

EventTarget <- Node <- Attr

EventTarget <- Node <- Element

EventTarget <- Node <- Document

EventTarget <- Window

## 事件

Event

### UIEvent

Event <- UIEvent

#### 焦点事件

focus blur focusin focusout

- Event <- UIEvent <- FocusEvent

#### 指针设备事件

click dbclick mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup

- Event <- UIEvent <- MouseEvent

- Event <- UIEvent <- TouchEvent

- Event <- UIEvent <- MouseEvent <- PointerEvent

#### 拖放事件

- drag
- dragend
- dragenter
- dragexit
- dragleave
- dragover
- dragstart
- drop
- Event <- UIEvent <- MouseEventDragEvent

#### 键盘事件

keydown keypress keyup -KeyBoardEvent

## 元素UI尺寸

clientHeight @Element 内部相对于外层元素的高度。 padding+width-滚动条

scrollHeight @Element 元素的滚动视图高度。

offsetHeight @HTMLElement offsetWidth=border+padding+width



## 指针位置和元素位置整合

拖动时，获取元素定位位置

clientX clientY
pageX  pageY
screenX screenY
offsetX offsetY








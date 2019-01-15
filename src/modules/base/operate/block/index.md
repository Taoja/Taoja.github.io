# block块组件


## 单位

```html
<template>
  <div class="example">
    <div class="window">
      <t-block text="123"></t-block>
    </div>
  </div>
</template>
<script>
  import {tBlock} from 'vuti'
  export default {
    components: {
      tBlock
    }
  }
</script>
<style>
</style>
<!-- block.vue -->
```
<!-- ## Options
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | type     | 类型   | string  |   small / single / dubble   |   —   |
  | title     | 标题   | string    |   —  |     —    |
  | subTitle     | 双行列表的副标题   | string    | — |  —  |
  | describle     | 标题描述   | string    | — |  —   |
  | isLink     | 是否使用链接状态   | boolean    | — | false   |
  | isSelect     | 是否使用选择状态   | boolean    | — | false   |
  | selectValue     | 选择状态   | boolean    | — | false   |
  | isSwitch  | 是否使用开关状态    | boolean   | —   | false   |
  | switchValue  | 开关按钮的状态 | boolean   |  —  |  true  |

  ## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 链接状态的回调函数   |
  | select     | 选择状态的回调函数   |
  | change     | 开关状态的回调函数   | -->


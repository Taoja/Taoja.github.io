# mask遮罩组件


## 基础用法

+ visibility属性控制mask组件开关
+ mask属性控制组件是否显示阴影

```html
<template>
<example>
  <t-mask :visibility="open">
    <t-button @click="open = false">关闭mask</t-button>
  </t-mask>
  <t-button @click="open = true">打开mask</t-button>
</example>
</template>
<script>
  export default {
    data() {
      return {
        open: false
      }
    }
  }
</script>
<!-- mask-demo-1.vue -->
```

## 多层叠加解决方案

+ visibility属性控制mask组件开关
+ 多个mask组件叠加只会显示一层效果
+ dialog等组件内封装了一层mask组件

```html
<template>
<example>
  <t-dialog v-model="open1" title="这是dialog1" tap-hide :buttons="btn1" @click="open2 = true"></t-dialog>
  <t-dialog v-model="open2" title="这是dialog2" tap-hide :buttons="btn2" @click="open1 = true"></t-dialog>
  <t-button @click="open1 = true">打开dialog1</t-button>
  <p></p>
  <t-button @click="open2 = true">打开dialog2</t-button>
</example>
</template>
<script>
  export default {
    data() {
      return {
        open1: false,
        open2: false,
        btn1: [{text:'打开dialog2', scheme:'primary', close: false}],
        btn2: [{text:'打开dialog1', scheme:'primary', close: false}]
      }
    }
  }
</script>
<!-- mask-demo-2.vue -->
```
## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | visibility     | 组件开关   | Boolean  |   -   |   -   |
  | mask     | 是否显示遮罩   | Boolean    |  - |     true   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 点击mask回调   |
  | afterShow     | mask显示动画开始后回调   |
  | show     | mask显示回调   |
  | afterHide     | mask隐藏动画开始后回调   |
  | hide     | mask隐藏回调   |
## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | mask中内容   |
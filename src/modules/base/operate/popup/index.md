# popup底部弹窗组件

## 基础用法
+ popup组件通过visibility属性控制开启关闭
+ popup为fixed定位组件，适用于手机端使用，z-index层级为101
```html
<template>
<example>
  <t-popup :visibility="open">
    <p></p>
    <t-button @click="open = false">关闭popup</t-button>
  </t-popup>
  <p></p>
  <t-button @click="open = true">打开popup</t-button>
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
<!-- popup-demo-1.vue -->
```

## 其他属性
+ 添加auto-height属性，当值为true时自适应内容高度
+ mask属性控制是否显示背景遮罩，默认显示
```html
<template>
<example>
  <t-popup :mask="false" :visibility="open" auto-height>
    <p></p>
    <t-button @click="open = false">关闭popup</t-button>
    <p></p>
  </t-popup>
  <t-button @click="open = true">打开popup(自适应内容高度)</t-button>
</example>
</template>
<script>
  export default {
    data() {
      return {
        open: false,
      }
    }
  }
</script>
<!-- popup-demo-2.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | visibility     | 开关   | Boolean  |   -   |   false   |
  | auto-height     | 是否自适应高度   | Boolean    | - |  false  |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | show     | visibility值为true时触发   |
  | afterShow     | popup组件显示动画完成后触发   |
  | maskClick     | 背景被点击时触发   |
  | hide     | visibility值为false时触发   |
  | afterHide     | popup组件隐藏动画完成后触发   |

## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | popup弹窗内容插槽   |

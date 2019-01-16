# switch开关组件
集成3中开关样式

## 使用方式
+ v-model绑定开关状态
+ type属性决定开关类型
```html
<template>
<example>
  <t-cell title="默认开关">
    <t-switch v-model="open"></t-switch>
  </t-cell>
  <t-cell title="radio开关">
    <t-switch v-model="open" type="radio"></t-switch>
  </t-cell>
  <t-cell title="checkbox开关">
    <t-switch v-model="open" type="checkbox"></t-switch>
  </t-cell>
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
<!-- switch-demo-1.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | v-model     | 绑定开关   | Boolean  |   -   |   -   |
  | type     | 类型   | String    |  [normal, radio, checkbox]  |     normal    |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 开关被点击   |


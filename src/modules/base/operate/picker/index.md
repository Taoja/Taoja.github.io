# picker选择器组件

## 基础用法
+ list属性用于传递选择器列表
+ v-model用于绑定当前选中属性值
+ unit用于传递单位
```html
<template>
<example>
  <div style="height: 400px;">
    <t-picker v-model="choice" :list="list" unit="px"></t-picker>
  </div>
</example>
</template>
<script>
  export default {
    data() {
      return {
        choice: 'vuti5',
        list: ['vuti1', 'vuti2', 'vuti3', 'vuti4', 'vuti5', 'vuti6', 'vuti7', 'vuti8']
      }
    }
  }
</script>
<!-- picker-demo-1.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | value     | v-model数据绑定   | -  |   -   |   -   |
  | list     | 组件内容列表   | Array    | - |  -  |
  | unit     | 单位   | String    | - |  -  |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | result     | 当前选中的结果   |


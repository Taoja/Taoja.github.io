# grid宫格组件
宫格组件作用于后端配置的页面。通过接口返回字段的变化渲染不同页面

## 使用方式

```html
<template>
<example>
  <t-grid :data="data" @click="click"></t-grid>
  <t-grid :data="data" @click="click"></t-grid>
</example>
</template>
<script>
  import src2 from '@a/turbo.png'
  export default {
    data() {
      return {
        data: [
          {
            src: src2,
            text: 1
          },
          {
            src: src2,
            text: 2
          },
          {
            src: src2,
            text: 3
          },
          {
            src: src2,
            text: 4
          },
        ]
      }
    },
    methods: {
      click(e) {
        this.$dialog({
          title: '点击了',
          text: e.text
        })
      }
    }
  } 
</script>
<!-- grid-demo-1.vue -->
```
## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | data     | 需要展示数据列表   | Array  |   {src}   |   -   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 返回被点击对象   |


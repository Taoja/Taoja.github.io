# sort托拉拽组件
托拉拽组件可以将组件内部元素随意拖拽排序

## 内嵌宫格
+ 设置内嵌div样式display:inline-block即可实现换行功能
+ 传入data属性用以返回托拉拽后的顺序
```html
<template>
<example>
  <t-sort @result="result" :data="data">
    <div class="sort1" v-for="(item, index) in data">item {{item}}</div>
  </t-sort>
</example>
</template>
<script>
  export default {
    data() {
      return {
        data: [1,2,3,4,5,6]
      }
    },
    methods: {
      result(e) {
        console.log(e)
      }
    }
  }
</script>
<style>
  .sort1{
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: red;
    text-align: center;
    line-height: 100px;
    color: white;
    border: 1px solid yellow;
  }
</style>
<!-- sort-demo-1.vue -->
```

## 内嵌列表
```html
<template>
<example>
  <t-sort @result="result" :data="data">
    <div class="sort2" v-for="(item, index) in data">item {{item}}</div>
  </t-sort>
</example>
</template>
<script>
  export default {
    data() {
      return {
        data: [1,2,3,4,5,6]
      }
    },
    methods: {
      result(e) {
        console.log(e)
      }
    }
  }
</script>
<style>
  .sort2{
    padding: 12px 20px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
  }
</style>
<!-- sort-demo-2.vue -->
```
## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | data     | 原始数组   | Array  |   -   |   -   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | result     | 返回排序后数组   |

## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | 自定义内容区域  |


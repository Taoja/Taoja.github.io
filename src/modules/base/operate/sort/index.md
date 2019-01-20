# sort托拉拽组件
sort是一个基于[sortable](https://github.com/SortableJS/Sortable)的组件，可以将内部元素随意拖拽排序

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
    background-color: var(--color-t1);
    text-align: center;
    line-height: 100px;
    color: white;
    border: 1px solid var(--color-divide);
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

## 设置拖动手柄
+ handle属性使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动；
+ delay属性可定义鼠标选中列表单元可以开始拖动的延迟时间
```html
<template>
<example>
  <t-sort @result="result" :data="data" :delay="0" handle=".icon-menu">
    <div class="sort2" v-for="(item, index) in data"><span class="icon-menu"></span>item {{item}}</div>
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
  .icon-menu{
    margin-right: 10px;
    cursor: pointer;
  }
</style>
<!-- sort-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | data     | 原始数组   | Array  |   -   |   -   |
  | delay     | 长按延迟   | Number  |   -   |   150   |
  | handle     | 手柄   | String  |   -   |   -   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | result     | 返回排序后数组   |

## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | 自定义内容区域  |


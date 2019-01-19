# gestures 手势解锁组件

## 基础用法
+ 调用t-gestures即可生成指纹解锁组件
```html
<template>
<example>
  <t-gestures @result="result"></t-gestures>
</example>
</template>
<script>
  export default {
    methods: {
      result(e) {
        this.$dialog({
          text: '返回的值为' + e
        })
      }
    }
  } 
</script>
<!-- gestures-demo-1.vue -->
```

## 自定义颜色
+ 传入color属性可自定义设置圆、线颜色
```html
<template>
<example>
  <t-gestures @result="result" :color="color"></t-gestures>
</example>
</template>
<script>
  export default {
    data() {
      return {
        color: {
          circle: 'red', 
          line: 'red'
        }
      }
    },
    methods: {
      result(e) {
        this.$dialog({
          text: '返回的值为' + e
        })
      }
    }
  } 
</script>
<!-- gestures-demo-2.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | color     | 颜色   | Object  |   -   |   {circle: '#0096ff',line: '#0096ff'}   |   

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | result     | 绘制结束回调   |
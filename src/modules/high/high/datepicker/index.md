# datepicker日期选择器
日期选择器由picker组件和popup组件封装而成

## 基础用法
+ 传入data数据，即可展示data数组中src图片及轮播效果
```html
<template>
<example>
  <t-datepicker v-model="open" :date="date" @result="result"></t-datepicker>
  <t-cell title="选择日期" is-link @click="open = true">{{date}}</t-cell>
</example>
</template>
<script>
  export default {
    data() {
      return {
        date: '1991-03-03',
        open: false
      }
    },
    methods: {
      result(e) {
        this.date = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}:${e.second}`
      },
    }
  } 
</script>
<!-- datepicker-demo-1.vue -->
```

## 设置起止时间
+ startDate属性可以定义起始时间(不包括时分秒)
+ endDate属性可以定义结束时间(不包括时分秒)
```html
<template>
<example>
  <t-datepicker v-model="open" startDate="1993-03-03" endDate="1993-12-12" :date="date" @result="result"></t-datepicker>
  <t-cell title="选择日期" is-link @click="open = true">{{date}}</t-cell>
</example>
</template>
<script>
  export default {
    data() {
      return {
        date: '1991-03-03 9:15:59',
        open: false,
      }
    },
    methods: {
      result(e) {
        this.date = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}:${e.second}`
      },
    }
  } 
</script>
<!-- datepicker-demo-2.vue -->
```

## 自定义选择类型
+ type属性控制选择器类型，Y=年，M=月，D=日，h=时，m=分，s=秒，默认YMDhms
+ hours属性可自定义小时列表
+ minutes属性可自定义分钟列表
+ seconds属性可自定义秒钟列表
```html
<template>
<example>
  <t-datepicker v-model="open" :hours="hours" :minutes="minutes" :seconds="seconds" type="hms" :date="date" @result="result"></t-datepicker>
  <t-cell title="选择日期" is-link @click="open = true">{{date}}</t-cell>
</example>
</template>
<script>
  export default {
    data() {
      return {
        date: '9:15:59',
        open: false,
        hours: [3, 6, 9, 12],
        minutes: [15, 30, 45, 59],
        seconds: [10, 20, 30, 40, 50, 59]
      }
    },
    methods: {
      result(e) {
        this.date = `${e.hour}:${e.minute}:${e.second}`
      },
    }
  } 
</script>
<!-- datepicker-demo-3.vue -->
```

## plugin用法
+ 使用$datepicker方法调用组件
```html
<template>
<example>
  <t-cell title="选择日期" is-link @click="open">{{date}}</t-cell>
</example>
</template>
<script>
  export default {
    data() {
      return {
        date: '1991-03-03 9:15:59',
      }
    },
    methods: {
      open() {
        this.$datepicker({
          date: this.date
        }).then((e) => {
          this.date = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}:${e.second}`
        })
      },
    }
  } 
</script>
<!-- datepicker-demo-3.vue -->
```


## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | v-model     | 开关   | Boolean  |   -   |   -   |
  | type     | 类型   | String    |   -  |     YMDhms    |
  | startDate     | 起始   | String    |   -  |     1900-05-05    |
  | endDate     | 结束   | String    |   -  |     2050-12-31    |
  | date     | 初始化日期   | String    |   -  |    -    |
  | hours     | 小时数组   | Array    |   -  |    1-12    |
  | minutes     | 分钟数组   | Array    |   -  |    1-59    |
  | seconds     | 秒钟数组   | Array    |   -  |    1-59    |
  | tap-hide     | 点击背景关闭   | Boolean    |   -  |    true    |
  | options     | 头部参数   | Object    |   -  |    -    |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | result     | 返回选中日期   |
  | show     | value值为true时触发   |
  | afterShow     | popup组件显示动画完成后触发   |
  | hide     | value值为false时触发   |
  | afterHide     | popup组件隐藏动画完成后触发   |


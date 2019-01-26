# date日历组件

## 基础用法
+ 使用v-model绑定返回值
```html
<template>
<example>
  <t-date v-model="time"></t-date>
</example>
</template>
<script>
  export default {
    data() {
      return {
        time: '',
      }
    }
  } 
</script>
<!-- date-demo-1.vue -->
```

## 自定义返回格式用法
+ format属性可以自定义日期格式
```html
<template>
<example>
  <t-date v-model="time" format="[on] MM-DD-YYYY [at] HH:mm"></t-date>
</example>
</template>
<script>
  export default {
    data() {
      return {
        time: '',
      }
    }
  } 
</script>
<!-- date-demo-2.vue -->
```

## 其他高级用法
+ not-before属性可以定义选取开始时间
+ range属性可以使用范围选取
```html
<template>
<example>
  <t-date v-model="time1" :not-before="new Date()"></t-date>
  <t-date v-model="time2" range></t-date>
</example>
</template>
<script>
  export default {
    data() {
      return {
        time1: '',
        time2: '',
      }
    }
  } 
</script>
<!-- date-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | v-model     | 数据绑定   | String  |   -   |   -   |
  | format     | 自定义格式   | String    |   -  |     -    |
  | range     | 范围选取   | Boolean    |   -  |     false    |
  | not-before     | 开始日期   | String    |   -  |     -    |


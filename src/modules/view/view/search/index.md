# search 搜索栏组件

## 使用方式
+ v-model可以双向绑定搜索栏输入值
```html
<template>
<example>
  <t-search v-model="value"></t-search>
</example>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  } 
</script>
<!-- search-demo-1.vue -->
```

## 自定义输入框
+ placeholder可配置提示语
+ type可配置输入框类型
+ maxlength可配置可输入最大长度
```html
<template>
<example>
  <t-search v-model="value" placeholder="请输入6位密码" maxlength="6" type="password"></t-search>
</example>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  } 
</script>
<!-- search-demo-2.vue -->
```

## open、close事件的扩展
+ @open事件为搜索栏开启状态
+ @close事件为搜索栏关闭状态
```html
<template>
<example>
  <div class="search">
    <t-search v-model="value" @open="open = true" @close="open = false"></t-search>
    <div class="btn1" :class="{'open3': open}">搜索</div>
  </div>
</example>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        open: false
      }
    }
  } 
</script>
<style lang="scss">
  .search{
    display: flex;
    align-items: center;
    >.btn1{
      text-align: center;
      font-size: 13px;
      margin: 0px;
      transition: all .3s;
      width: 0px;
      overflow: hidden;
      white-space: nowrap;
    }
    >.open3{
      width: 26px;
      margin: 0px 10px;
    }
  }
</style>
<!-- search-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | v-model     | 输入值   | String  |   -   |   -   |
  | type     | 类型   | String    |  -  |     text    |
  | placeholder     | 提示语   | String    |  -  |     请输入    |
  | maxlength     | 长度   | Number    |  -  |     -    |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | blur     | 失去焦点   |
  | focus     | 获得焦点   |
  | open     | 搜索栏开启   |
  | close     | 搜索栏关闭   |
  | change     | 输入完成   |


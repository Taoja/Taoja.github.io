# actionSheet动作面板组件


## 基础用法

+ buttons属性传递按钮列表
+ v-model属性开关组件

```html
<template>
<example>
  <t-actionsheet
    v-model="open"
    :buttons="buttons"
  ></t-actionsheet>
  <t-button @click="open = true">打开actionSheet</t-button>
</example>
</template>
<script>
  export default {
    data() {
      return {
        open: false,
        buttons: [
          {
            text: '确认'
          },
          {
            text: '取消',
          },
          {
            text: '清除位置信息',
            color: 'red'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
<!-- actionSheet-demo-1.vue -->
```

## 其他用法

+ 设置title属性为标题文案
+ mask属性控制是否显示背景遮罩，默认显示
+ tap-hide属性控制是否点击背景关闭组件

```html
<template>
<example>
  <t-actionsheet
    title="vuti-actionsheet"
    v-model="open"
    :mask="false"
    :tap-hide="false"
    :buttons="buttons"
  ></t-actionsheet>
  <t-button @click="open = true">打开actionSheet</t-button>
</example>
</template>
<script>
  export default {
    data() {
      return {
        open: false,
        buttons: [
          {
            text: '确认'
          },
          {
            text: '取消',
          },
          {
            text: '清除位置信息',
            color: 'red'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
<!-- actionSheet-demo-2.vue -->
```
## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | title     | 标题文案   | String  |   -   |   -   |
  | buttons     | 按钮数组   | Array    |  {text} |     -    |
  | v-model     | 组件开关   | Boolean    | - |  -  |
  | mask     | 背景遮罩   | Boolean    | — |  true   |
  | tap-hide     | 点击背景关闭   | Boolean    | — |  true   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 点击按钮回调   |

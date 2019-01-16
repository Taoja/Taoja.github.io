# toast提示框组件

## 基础用法
+ toast组件通过v-model绑定开关
+ text属性可以设置toast组件中文本信息
```html
<template>
<example>
  <t-toast v-model="open" text="这是一个轻提示"></t-toast>
  <t-button @click="open = true">打开toast</t-button>
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
<!-- toast-demo-1.vue -->
```

## 展示图片/图标
+ src属性可配置toast组件中图片路径
+ icon属性可配置toast组件中iconfont图标class名
```html
<template>
<example>
  <t-toast v-model="open1" :src="src" text="展示一个图片"></t-toast>
  <t-toast v-model="open2" icon="icon-QRcode" text="展示一个图标"></t-toast>
  <t-button @click="open1 = true">打开toast(展示图片)</t-button>
  <p></p>
  <t-button @click="open2 = true">打开toast(展示图标)</t-button>
</example>
</template>
<script>
  import src2 from '@a/turbo.png'
  export default {
    data() {
      return {
        open1: false,
        open2: false,
        src: src2
      }
    }
  } 
</script>
<!-- toast-demo-2.vue -->
```

## 其他用法
+ duration属性可以设置组件留存时间，设置为false时组件不会自动关闭
+ mask属性可以配置是否展示背景遮罩
+ tap-hide属性可配置是否点击背景关闭组件
```html
<template>
<example>
  <t-toast v-model="open" :src="src" :duration="false" mask tap-hide></t-toast>
  <t-button @click="open = true">不自动关闭、有背景遮罩、点击关闭</t-button>
</example>
</template>
<script>
  import src from '../../../../../node_modules/vuti/common/svg/fire.svg'
  export default {
    data() {
      return {
        open: false,
        src: src
      }
    }
  } 
</script>
<!-- toast-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | value     | v-model开关   | Boolean  |   -   |   -   |
  | text     | 组件正文文案   | String    | - |  -  |
  | src     | 组件图片链接   | String    | - |  -  |
  | icon     | 组件图标class名   | String    | - |  -  |
  | duration     | 组件持续时间(毫秒)   | Number/False    | - |  2000  |
  | mask     | 是否显示背景遮罩   | Boolean    | - |  false  |
  | tap-hide     | 是否点击隐藏   | Boolean    | - |  false  |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | afterShow     | 组件显示动画完成后触发   |
  | afterHide     | 组件隐藏动画完成后触发   |

## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | 整个组件内容   |

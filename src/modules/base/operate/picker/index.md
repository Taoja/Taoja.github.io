# dialog对话框组件

## 基础用法
+ dialog组件显示隐藏通过v-model绑定
+ title属性为标题文案
+ text属性为内容文案
+ src属性为图片url地址（webpack工程请先require）
```html
<template>
<example>
  <t-dialog v-model="open" title="基础用法" text="基础文案基础文案基础文案" :src="src"></t-dialog>
  <p></p>
  <t-button @click="open = true">打开dialog</t-button>
</example>
</template>
<script>
  import src from '@a/turbo.png'
  export default {
    data() {
      return {
        open: false,
        src: src
      }
    }
  }
</script>
<!-- dialog-demo-1.vue -->
```

## 按钮
+ 普通按钮为按钮区域第一排横向排列
+ 扩展按钮为从第二排开始叠加显示
+ 按钮参数：
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | text     | 按钮文案   | String  |   -   |   -   |
  | scheme     | 按钮文字皮肤   | String    | - |  -  |
  | close     | 是否点击关闭   | Boolean    | - |  true  |
```html
<template>
<example>
  <t-dialog v-model="open1" @click="click" :buttons="buttons" title="普通按钮" text="基础文案基础文案基础文案"></t-dialog>
  <t-dialog v-model="open2" @click="click" :buttons="buttons" :ext-buttons="extButtons" title="扩展按钮" text="基础文案基础文案基础文案"></t-dialog>
  <t-button @click="open1 = true">打开dialog（普通按钮）</t-button>
  <p></p>
  <t-button @click="open2 = true">打开dialog（扩展按钮）</t-button>
</example>
</template>
<script>
  export default {
    data() {
      return {
        open1: false,
        open2: false,
        buttons: [
          {
            text: '取消'
          },
          {
            text: '确认',
            scheme: 'primary'
          }
        ],
        extButtons: [
          {
            text: '清除位置信息',
            scheme: 'red',
            close: false
          }
        ]
      }
    },
    methods: {
      click(e) {
        this.$dialog({
          title: '点击了：',
          text: e.text
        })
      }
    }
  }
</script>
<style>
.vuti-dialog-button[scheme=red]{
  color: red;
}
</style>
<!-- dialog-demo-2.vue -->
```

## 其他功能
+ tap-hide属性为true时可以点击背景隐藏对话框
+ mask属性为true时可以显示背景遮罩，默认为true
```html
<template>
<example>
  <t-dialog v-model="open" tap-hide :mask="false" title="点击背景隐藏" text="不显示背景遮罩！不显示背景遮罩！"></t-dialog>
  <p></p>
  <t-button @click="open = true">打开dialog</t-button>
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
<!-- dialog-demo-3.vue -->
```


## plugin用法
+ 可以直接使用this.$dialog方法调用dialog组件
+ 该方法返回一个promise回调，成功传参为click返回值
```html
<template>
<example>
  <t-button @click="click">打开dialog</t-button>
</example>
</template>
<script>
  export default {
    methods: {
      click() {
        this.$dialog({
          title: 'plugin用法',
          text: 'promise返回的值为点击事件返回的按钮对象',
          buttons: [
            {
              text: '取消'
            },
            {
              text: '确认',
              scheme: 'primary'
            }
          ]
        }).then((e) => {
          console.log(`点击了${e.text}`)
        })
      }
    }
  }
</script>
<!-- dialog-demo-4.vue -->
```


## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | value     | v-model开关   | Boolean  |   -   |   -   |
  | title     | 组件标题   | String    | - |  -  |
  | text     | 组件正文   | String    | - |  -  |
  | src     | 组件图片路径   | String    | - |  -  |
  | mask     | 是否隐藏背景遮罩   | Boolean    | - |  false  |
  | tap-hide     | 点击背景是否关闭   | Boolean    | - |  false  |
  | buttons     | 组件按钮配置   | Array    | - |  -  |
  | ext-buttons     | 组件扩展按钮配置   | Array    | - |  -  |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 返回被点击按钮对象   |
  | afterHide     | 组件隐藏动画完成后触发   |

## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | 自定义内容区域（图片、标题、正文）   |

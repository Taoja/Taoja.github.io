# cell表单块组件

## 使用方式
+ title属性用于显示表单组件标题
+ slot中为对应表单值
+ isLink可以使表单块组件可点击
```html
<example>
  <t-cell title="表单块">这里是value</t-cell>
  <t-cell title="可以点击" is-link></t-cell>
</example>
<!-- cell-demo-1.vue -->
```

## 标题扩展
+ icon属性可以设置标题栏图标，值为iconfont对应class名
+ tips可以设置第二行文案
```html
<example>
  <t-cell :icon="{name: 'icon-QRcode',color: 'red'}" title="扫码点餐" is-link></t-cell>
  <t-cell tips="点击二维码图标展开二维码" title="扫码点餐"><div class="icon-QRcode"></div></t-cell>
</example>
<!-- cell-demo-2.vue -->
```

## 插槽使用
+ default为cell右侧内容区域
+ right为右侧图标区域
+ left为title区域
```html
<template>
<example>
  <t-cell title="开启指纹支付">
    <t-switch v-model="open"></t-switch>
  </t-cell>
  <t-cell title="姓名">
    taoja
    <div class="icon-QRcode" slot="right" style="color: var(--color-error);margin-left: var(--size-margin-t3);"></div>
  </t-cell>
  <t-cell>
    <t-switch slot="left" v-model="open"></t-switch>
    是否使用vuti
  </t-cell>
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
<!-- cell-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | title     | 标题   | String  |   -   |   -   |
  | tips     | 提示信息   | String    |   -  |     -    |
  | icon     | 图标   | Object    |   {name, color}  |     -    |
  | is-link     | 是否可点击   | Boolean    |   -  |     false    |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 点击回调   |
## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | 右侧内容区域插槽  |
  | left     | 左侧标题区域插槽  |
  | right     | 右侧图标区域插槽  |